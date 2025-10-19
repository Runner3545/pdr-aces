"use client";

import { useRef, Fragment, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import styles from "./Text.module.css";

export default function Text({
  as = "p",
  variant,
  weight,
  align = "left",
  color = "primary",
  className = "",
  animate = false, // false | true | "letters" | "words"
  trigger = "mount", // "mount" | "scroll"
  children,
  ...props
}) {
  const Component = as;
  const scope = useRef(null);
  const appliedVariant = variant || as;

  const mode = useMemo(() => {
    if (animate === "words" || animate === "letters") return animate;
    if (animate === true) return "letters";
    return false;
  }, [animate]);

  const isString = typeof children === "string";
  const shouldSplit = !!mode && isString;

  const tokens = useMemo(() => {
    if (!shouldSplit) return children;

    if (mode === "words") {
      return children.split(/(\s+)/).map((tok, i) =>
        tok.trim() === "" ? (
          <Fragment key={`s-${i}`}>{tok}</Fragment>
        ) : (
          <span key={`w-${i}`} data-word className={styles.word}>
            {tok}
          </span>
        )
      );
    }

    return children.split(/(\s+)/).map((tok, i) =>
      tok.trim() === "" ? (
        <Fragment key={`s-${i}`}>{tok}</Fragment>
      ) : (
        <span key={`w-${i}`} data-word className={styles.word}>
          {tok.split("").map((ch, j) => (
            <span key={`c-${i}-${j}`} data-char className={styles.char}>
              {ch}
            </span>
          ))}
        </span>
      )
    );
  }, [children, shouldSplit, mode]);

  // Only run self-animation on mount if trigger==="mount"
  useGSAP(
    () => {
      if (trigger !== "mount") return;
      if (!mode || !scope.current) return;

      const targets =
        mode === "words"
          ? scope.current.querySelectorAll("[data-word]")
          : scope.current.querySelectorAll("[data-char]");

      if (!targets.length) return;

      gsap.set(targets, { opacity: 0, y: 20, display: "inline-block" });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.035,
      });
    },
    { scope }
  );

  const textClass = clsx(
    styles.text,
    styles[appliedVariant],
    weight && styles[`weight-${weight}`],
    styles[`align-${align}`],
    styles[`color-${color}`],
    className
  );

  return (
    <Component ref={scope} className={textClass} {...props}>
      {tokens}
    </Component>
  );
}
