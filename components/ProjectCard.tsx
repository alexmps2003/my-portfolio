"use client";
import { motion } from "framer-motion";

// This defines what information a project needs
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}

export const ProjectCard = ({ title, description, tags }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }} // Subtly grows when hovered
      className="group cursor-pointer rounded-2xl border border-white/10 bg-zinc-900/30 p-8 transition-all hover:bg-zinc-900/60 hover:border-blue-500/50"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
