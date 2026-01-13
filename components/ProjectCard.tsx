"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link"; //

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  image,
}: ProjectCardProps) => {
  const ref = useRef(null);

  // Creates a URL-friendly slug from the title
  const slug = title.toLowerCase().replaceAll(" ", "-");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    // Wrap everything in a Link to make the whole card clickable
    <Link href={`/projects/${slug}`} className="block">
      <div
        ref={ref}
        className="group relative rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/30 p-4 transition-all hover:border-zinc-300 dark:hover:border-white/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 cursor-pointer shadow-sm dark:shadow-none"
      >
        <div className="relative h-64 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
          <motion.span
            style={{ y }}
            className="text-6xl font-bold text-zinc-300 dark:text-zinc-700"
          >
            {title[0]}
          </motion.span>

          <motion.img
            style={{ viewTransitionName: `project-${slug}` }}
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-100 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-zinc-600 dark:text-gray-400 text-sm mt-1">
            {description}
          </p>
          <div className="flex gap-2 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-widest text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
