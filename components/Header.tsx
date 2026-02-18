"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-noir-glass border-b border-gray-200/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary border border-primary/30 group-hover:bg-primary group-hover:text-black transition-all duration-300">
            <span className="material-symbols-outlined text-xl">terminal</span>
          </div>
          <span className="font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
            &lt;Soumyajit /&gt;
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {["Work", "Skills", "Journey", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:flex h-9 px-4 items-center justify-center rounded-lg border border-primary/50 text-primary text-sm font-bold hover:bg-primary hover:text-background-dark transition-all duration-300 shadow-[0_0_10px_rgba(13,185,242,0.1)] hover:shadow-[0_0_20px_rgba(13,185,242,0.4)] cursor-pointer"
          >
            Hire Me
          </Link>
          <button
            className="md:hidden text-white cursor-pointer z-50"
            onClick={toggleMobileMenu}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background-dark border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5 duration-200">
          {["Work", "Skills", "Journey", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base font-medium text-gray-300 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="h-10 px-4 flex items-center justify-center rounded-lg bg-primary text-background-dark font-bold text-sm hover:opacity-90 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}
