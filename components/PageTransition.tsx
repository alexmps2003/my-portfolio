"use client";
import { motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start invisible and slightly lower
      animate={{ opacity: 1, y: 0 }} // Slide up and fade in
      exit={{ opacity: 0, y: 20 }} // Optional: fade out when leaving
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth timing
    >
      {children}
    </motion.div>
  );
}
