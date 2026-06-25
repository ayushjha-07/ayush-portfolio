"use client";

import React from "react";
import { Mail, ArrowUp, Terminal } from "lucide-react";
import { Github, Linkedin, Instagram, Facebook, Pinterest, Whatsapp } from "@/components/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <footer className="bg-theme-bg-sec border-t border-theme-border py-12 text-theme-text-sec text-xs font-mono relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center">
            <Terminal size={12} className="text-white" />
          </div>
          <span className="font-bold text-slate-900 dark:text-white tracking-wider">ayush.dev</span>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left text-theme-text-sec">
          <p>© 2026 Ayush Kumar Jha. All rights reserved.</p>
          <p className="text-[10px] text-slate-400 dark:text-gray-500 mt-1">
            Built with Next.js, TypeScript, Tailwind CSS, &amp; Framer Motion.
          </p>
        </div>

        {/* Action Panel */}
        <div className="flex items-center gap-6">
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ayushjha-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/ayushjha07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/ayushjha__07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="Instagram Profile"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/share/1DKrswscHk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="Facebook Profile"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://pin.it/69AL65Dz8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="Pinterest Profile"
            >
              <Pinterest size={16} />
            </a>
            <a
              href="https://wa.me/919905315622"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <Whatsapp size={16} />
            </a>
            <a
              href="mailto:jhaayushkumar18@gmail.com"
              className="text-slate-400 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              aria-label="Email Address"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/3 hover:bg-slate-200 dark:hover:bg-white/8 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/10 transition-all duration-200 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
