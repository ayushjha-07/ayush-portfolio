"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setScrolled(window.scrollY > 20);

      // Scroll progress indicator
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand/Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-200">
            <Terminal size={16} className="text-white" />
          </div>
          <span className="font-mono font-bold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
            ayush.dev
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-emerald-500 dark:after:bg-emerald-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/ayushjha-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/ayushjha07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>

          {/* Theme Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {!mounted ? (
              <div className="w-4 h-4" />
            ) : resolvedTheme === "dark" ? (
              <Sun size={16} className="text-amber-500 dark:text-amber-400" />
            ) : (
              <Moon size={16} className="text-indigo-600 dark:text-indigo-400" />
            )}
          </button>

          <a
            href="#contact"
            className="px-4 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/10 text-xs font-semibold text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {!mounted ? (
              <div className="w-4 h-4" />
            ) : resolvedTheme === "dark" ? (
              <Sun size={16} className="text-amber-500 dark:text-amber-400" />
            ) : (
              <Moon size={16} className="text-indigo-600 dark:text-indigo-400" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 top-[64px] md:top-[80px] w-full h-[calc(100vh-64px)] bg-white/95 dark:bg-gray-950/95 border-t border-slate-200 dark:border-white/5 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 pt-16 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-mono text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com/ayushjha-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ayushjha07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 font-semibold text-white shadow-lg mt-6"
          >
            Get In Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
