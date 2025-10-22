"use client";

import { useRef, useEffect, useMemo, useState } from "react";

/* Lazy GSAP only for desktop branch */
let gsap, ScrollTrigger, useGSAP;
try {
  ({ default: gsap } = require("gsap"));
  ({ ScrollTrigger } = require("gsap/ScrollTrigger"));
  ({ useGSAP } = require("@gsap/react"));
  gsap?.registerPlugin?.(ScrollTrigger);
} catch {
  /* noop on mobile/base */
}

/* =========================
   Base (no animation)
   ========================= */
export function SlideInBase({
  children,
  as = "div",
  className = "",
  ...props
}) {
  const Component = as;
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

/* =========================
   Mobile (no animation)
   ========================= */
export function SlideInMobile(props) {
  return <SlideInBase {...props} />;
}

/* =========================
   Desktop (GSAP animations)
   ========================= */
export function SlideInDesktop({
  children,
  as = "div",
  from = "left", // "left" | "right"
  trigger = "scroll", // "scroll" | "mount"
  once = true,
  duration = 0.8,
  delay = 0,
  ease = "power3.out",
  distance = 100,
  opacity = 1,
  className = "",
  ...props
}) {
  const Component = as;
  const scope = useRef(null);

  // pre-render element so GSAP can target it
  const rendered = (
    <Component ref={scope} className={className} {...props}>
      {children}
    </Component>
  );

  if (!gsap || !useGSAP) return rendered; // safety net

  const isReduced = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useGSAP(
    () => {
      if (!scope.current) return;

      if (isReduced) {
        gsap.set(scope.current, { clearProps: "all", opacity });
        return;
      }

      const xFrom = from === "left" ? -distance : distance;

      // initial state
      gsap.set(scope.current, {
        x: xFrom,
        opacity: 0,
        willChange: "transform, opacity",
      });

      const animateIn = () => {
        gsap.to(scope.current, {
          x: 0,
          opacity,
          duration,
          delay,
          ease,
          clearProps: "willChange",
        });
      };

      if (trigger === "mount") {
        animateIn();
        return;
      }

      // scroll trigger
      const st = ScrollTrigger.create({
        trigger: scope.current,
        start: "top 85%",
        once,
        onEnter: animateIn,
        // If you want reverse on scroll-up, uncomment:
        // onLeaveBack: () => gsap.set(scope.current, { x: xFrom, opacity: 0 }),
      });

      return () => st.kill();
    },
    {
      scope,
      dependencies: [
        from,
        trigger,
        once,
        duration,
        delay,
        ease,
        distance,
        opacity,
        isReduced,
      ],
    }
  );

  return rendered;
}

/* =========================
   Wrapper selector (SSR-safe)
   ========================= */
export default function SlideIn(props) {
  const [mode, setMode] = useState("base"); // 'base' | 'mobile' | 'desktop'

  useEffect(() => {
    // 1) Respect reduced motion: no animation at all
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduced) return setMode("base");

    // 2) Mobile detection (narrow or coarse pointer) → no animation
    const isMobile =
      window.matchMedia?.("(max-width: 768px)")?.matches ||
      window.matchMedia?.("(pointer: coarse)")?.matches;

    setMode(isMobile ? "mobile" : "desktop");
  }, []);

  if (mode === "desktop") return <SlideInDesktop {...props} />;
  if (mode === "mobile") return <SlideInMobile {...props} />;
  return <SlideInBase {...props} />; // during SSR / reduced motion
}
