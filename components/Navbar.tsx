"use client";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-zinc-900/50 px-6 py-3 backdrop-blur-md">
        <span className="text-xl font-bold text-blue-500">PORTFOLIO</span>

        {/* 'flex' and 'gap-8' will now work because Tailwind v4 is loaded via globals.css */}
        <div className="flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
