"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";
import { LazyMotion, domAnimation } from "framer-motion";

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    let cancelled = false;
    let rafId: number | null = null;
    let idleId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // Skip Lenis on mobile/touch devices or if reduced motion is preferred
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
       window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      return;
    }

    const initLenis = async () => {
      if (cancelled) return;
      const { default: LenisClass } = await import("lenis");
      if (cancelled) return;

      const lenis = new LenisClass({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        if (cancelled) return;
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => {
        initLenis();
      }, { timeout: 2000 });
    } else {
      timeoutId = setTimeout(initLenis, 300);
    }

    return () => {
      cancelled = true;
      if (idleId !== null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
