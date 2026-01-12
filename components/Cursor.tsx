"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return; // Don't show custom cursor on mobile

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    // Listen for mouse over on links and buttons
    const targets = document.querySelectorAll("a, button, .project-card");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", handleHover);
      target.addEventListener("mouseleave", handleUnhover);
    });

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleHover);
        target.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovered ? 20 : 12),
        y: mousePosition.y - (isHovered ? 20 : 12),
        width: isHovered ? 40 : 24,
        height: isHovered ? 40 : 24,
        backgroundColor: isHovered
          ? "rgba(59, 130, 246, 0.5)"
          : "rgb(59, 130, 246)",

        scale: isMobile ? 0.8 : 1,
        opacity: mousePosition.x === -100 ? 0 : 1, // Hide until first touch
      }}
      transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
}
