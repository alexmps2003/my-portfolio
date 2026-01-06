"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// This tells the computer exactly what "props" to expect
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard = ({ title, description, tags }: ProjectCardProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl border border-white/10 bg-zinc-900/30 p-4 transition-all"
    >
      <div className="relative h-64 overflow-hidden rounded-xl bg-zinc-800 flex items-center justify-center">
        <motion.span style={{ y }} className="text-6xl font-bold text-zinc-700">
          {title[0]}
        </motion.span>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};
