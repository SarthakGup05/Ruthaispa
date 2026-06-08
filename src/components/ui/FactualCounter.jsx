import React, { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion';

/**
 * FactualCounter Component
 * Animates a numeric value from 0 to a target when scrolled into view.
 * Uses direct DOM manipulation on frame change to optimize performance and prevent React re-renders.
 */
export default function FactualCounter({ value, duration = 2.2, delay = 0.1, suffix = "", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo ease curve
      });
      return controls.stop;
    }
  }, [isInView, value, duration, delay, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
