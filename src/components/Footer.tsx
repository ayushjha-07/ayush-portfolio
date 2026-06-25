"use client";

import React, { useRef } from "react";
import { ArrowUp, Heart, Mail } from "lucide-react";
import Magnetic from "./Magnetic";
import { motion, useInView } from "framer-motion";

// Static background particles to avoid Next.js hydration mismatches
const FOOTER_PARTICLES = [
  { id: 1, top: "20%", left: "10%", size: 4, delay: 0 },
  { id: 2, top: "70%", left: "85%", size: 5, delay: 3 },
  { id: 3, top: "40%", left: "90%", size: 4, delay: 1.5 },
  { id: 4, top: "80%", left: "15%", size: 6, delay: 4.5 },
];

// Brand SVGs
function LeetCodeIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.867-5.67a1.16 1.16 0 0 1 0-1.677l5.867-5.67c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-1.87 1.807a.56.56 0 0 0 0 .81l1.87 1.807c.466.45.466 1.17 0 1.62z" fill="#FFA116" />
      <path d="M13.102 12l-3-2.88 3-2.88 3 2.88z" fill="#FFA116" opacity="0.8" />
    </svg>
  );
}

function CodeChefIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M21 17H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm-4-4H7a4.996 4.996 0 0 1-3.664-8.397A5 5 0 0 1 12 3a5 5 0 0 1 8.664 1.603A4.996 4.996 0 0 1 17 13z" fill="currentColor" />
    </svg>
  );
}

function HackerRankIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M17.15 19.12H6.85c-.93 0-1.68-.75-1.68-1.68V6.56c0-.93.75-1.68 1.68-1.68h10.3c.93 0 1.68.75 1.68 1.68v10.88c0 .93-.75 1.68-1.68 1.68zM8.53 7.82v8.36h1.92v-3.23h3.1v3.23h1.92V7.82h-1.92v3.25h-3.1V7.82H8.53z" fill="#2EC866" />
    </svg>
  );
}

function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Certifications", id: "certifications" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ];

  const codingSocials = [
    { label: "GitHub", href: "https://github.com/ayushjha-07", icon: <GithubIcon /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/ayushjha07", icon: <LinkedinIcon /> },
    { label: "LeetCode", href: "https://leetcode.com/u/ayushjha07/", icon: <LeetCodeIcon /> },
    { label: "HackerRank", href: "https://www.hackerrank.com/profile/ayushjha07", icon: <HackerRankIcon /> },
    { label: "CodeChef", href: "https://www.codechef.com/users/ayushjha07", icon: <CodeChefIcon /> },
    { label: "Email", href: "mailto:jhaayushkumar18@gmail.com", icon: <Mail size={16} /> },
  ];

  const codingStats = [
    { text: "600+ DSA Problems", icon: "💻" },
    { text: "CodeChef Rating: 1239", icon: "⭐" },
    { text: "138 LeetCode Problems", icon: "🟨" },
    { text: "Java 5★", icon: "☕" },
    { text: "Python 3★", icon: "🐍" },
  ];

  const technologies = [
    "React", "Next.js", "Java", "TypeScript", "Node.js", 
    "Express.js", "MongoDB", "Tailwind CSS", "Python", "Git", "GitHub"
  ];

  return (
    <footer className="relative py-16 text-theme-text-sec transition-colors duration-300 overflow-hidden bg-slate-50/70 dark:bg-[#070b1e]/85 backdrop-blur-xl border-t border-theme-border/60">
      
      {/* Floating Sparks */}
      {FOOTER_PARTICLES.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-emerald-500/10 blur-[1.5px] animate-float pointer-events-none hidden md:block"
          style={{
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-theme-border/60">
          
          {/* Column 1 – About */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">
              Ayush Kumar Jha
            </h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed max-w-sm">
              Software Engineer passionate about building scalable web applications, solving complex problems, and creating exceptional user experiences.
            </p>
            
            {/* Availability Badge */}
            <div className="flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full border border-emerald-500/25 dark:border-emerald-500/25 bg-emerald-500/5 w-fit shadow-[0_0_10px_rgba(16,185,129,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                🟢 Available for Internships &amp; FTE
              </span>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 border-b border-theme-border/50 pb-2 w-fit pr-8">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="relative text-slate-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-mono text-xs pb-1 group block w-fit"
                  >
                    {link.label}
                    {/* Underline slide animation */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Coding Profiles */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 border-b border-theme-border/50 pb-2 w-fit pr-8">
              Coding Profiles
            </h4>
            <div className="flex flex-wrap gap-2.5 mb-2">
              {codingSocials.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-theme-border flex items-center justify-center text-slate-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/20 bg-slate-50 dark:bg-slate-900/40 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label={soc.label}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
            {/* Achievement Summary */}
            <ul className="space-y-2 text-[10px] font-mono text-slate-500 dark:text-gray-400">
              {codingStats.map((stat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-emerald-500 shrink-0">{stat.icon}</span>
                  <span>{stat.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Technologies */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 border-b border-theme-border/50 pb-2 w-fit pr-8">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-900/50 border border-theme-border/60 text-slate-600 dark:text-gray-300 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:text-emerald-500 dark:hover:text-emerald-400 hover:scale-105 hover:shadow-[0_0_8px_rgba(16,185,129,0.15)] transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Divider with Glow */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent shadow-[0_-1px_10px_rgba(16,185,129,0.2)] mb-8" />

        {/* Bottom Bar Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col gap-1 text-center md:text-left text-[11px] font-mono text-slate-500 dark:text-gray-500">
            <p>&copy; 2026 Ayush Kumar Jha. All Rights Reserved.</p>
            <p className="flex items-center gap-1 justify-center md:justify-start">
              Made with <Heart size={10} className="text-emerald-500 fill-emerald-500 animate-pulse" /> using React, Next.js, TypeScript &amp; Tailwind CSS.
            </p>
          </div>

          {/* Magnetic Scroll-To-Top Trigger */}
          <div className="shrink-0">
            <Magnetic>
              <button
                onClick={scrollToTop}
                className="p-3 rounded-xl border border-emerald-500/25 dark:border-emerald-500/25 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </Magnetic>
          </div>

        </div>

      </motion.div>
    </footer>
  );
}
