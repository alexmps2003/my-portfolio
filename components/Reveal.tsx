"use client";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const Reveal = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }} // Start state
      whileInView={{ opacity: 1, y: 0 }} // End state (when visible)
      transition={{ duration: 0.5, delay: 0.25 }} // Speed
      viewport={{ once: true }} // Only animate once
    >
      {children}
    </motion.div>
  );
};
