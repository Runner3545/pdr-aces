"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./Slider.module.css";

/**
 * @param {string} before - URL of the "before" image
 * @param {string} after - URL of the "after" image
 * @param {string} [altBefore] - alt text for before image
 * @param {string} [altAfter] - alt text for after image
 */
export default function ImageCompareSlider({
  before,
  after,
  altBefore = "Before image",
  altAfter = "After image",
}) {
  const wrapperRef = useRef(null);
  const [position, setPosition] = useState(50); // % between 0–100
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX) => {
    if (!wrapperRef.current) return;
    const bounds = wrapperRef.current.getBoundingClientRect();
    let x = clientX - bounds.left;
    x = Math.max(0, Math.min(x, bounds.width));
    const percent = (x / bounds.width) * 100;
    setPosition(percent);
  };

  const handleDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX ?? e.touches[0].clientX);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX ?? e.touches[0].clientX);
  };

  const handleUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={styles.imageWrapper}
      style={{ width: "100%" }}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={handleDown}
      onTouchStart={handleDown}
    >
      {/* Before image */}
      <img src={before} alt={altBefore} className={styles.beforeImage} />

      {/* After image (clipped dynamically) */}
      <div
        className={styles.afterWrapper}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={after} alt={altAfter} className={styles.afterImage} />
      </div>

      {/* Slider line and handle */}
      <div
        className={styles.slider}
        style={{ left: `${position}%` }}
        onMouseDown={handleDown}
        onTouchStart={handleDown}
      >
        <div className={styles.handle} />
      </div>
    </div>
  );
}
