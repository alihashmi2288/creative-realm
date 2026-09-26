"use client";

import { useEffect, useState } from "react";
import { m, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse)
    const hasMouse = window.matchMedia("(pointer: fine)").matches && window.innerWidth > 1024;
    if (!hasMouse) return;

    setIsDesktop(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <m.div
      className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
}
