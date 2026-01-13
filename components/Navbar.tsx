"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/50 px-6 py-3 backdrop-blur-md shadow-sm dark:shadow-none transition-colors duration-500">
        <Link
          href="/"
          className="text-xl font-bold text-zinc-900 dark:text-white tracking-tighter hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
        >
          ALEX_SH4N___
        </Link>
        {/* 'flex' and 'gap-8' will now work because Tailwind v4 is loaded via globals.css */}
        <div className="flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-gray-300">
          <Link
            href="#home"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
