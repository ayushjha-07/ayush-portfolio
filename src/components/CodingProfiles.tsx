"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star, FileText, Mail, Terminal, Users } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

// Static background particles to avoid hydration warnings
const PROFILE_PARTICLES = [
  { id: 1, top: "15%", left: "5%", size: 4, delay: 0 },
  { id: 2, top: "30%", left: "88%", size: 5, delay: 2 },
  { id: 3, top: "50%", left: "12%", size: 4, delay: 4 },
  { id: 4, top: "75%", left: "92%", size: 6, delay: 1 },
  { id: 5, top: "90%", left: "8%", size: 5, delay: 3 },
];

// Statically defined grid cell values for GitHub mock contribution map
const CONTRIBUTION_GRID = [
  0, 1, 2, 0, 1, 3, 4, 2, 1, 0, 2, 3, 1, 0,
  1, 2, 0, 3, 1, 0, 2, 4, 1, 2, 0, 1, 3, 2,
  2, 0, 1, 4, 2, 3, 1, 0, 2, 1, 3, 0, 1, 4,
  0, 1, 3, 2, 0, 1, 4, 2, 1, 3, 0, 2, 1, 0,
  1, 2, 0, 1, 3, 2, 0, 1, 4, 3, 2, 1, 0, 3,
  3, 0, 2, 4, 1, 2, 0, 3, 1, 0, 2, 4, 1, 2,
];

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

function Counter({ target, suffix = "", duration = 1200, trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = target;
    if (end <= 0) return;

    const incrementTime = 16; // ~60fps
    const totalSteps = duration / incrementTime;
    const stepIncrement = end / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [trigger, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Brand SVG Icons
function GithubIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
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

function LinkedinIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
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

function LeetCodeIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
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

function CodeChefIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
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

function HackerRankIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
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

export default function CodingProfiles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.08,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section
      id="profiles"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/30"
    >
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/3 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/3 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {PROFILE_PARTICLES.map((particle) => (
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Profiles &amp; <span className="gradient-text">Coding Platforms</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            A premium developer dashboard showcasing my technical profiles, competitive programming statistics, and professional networks.
          </p>
        </div>

        {/* Dashboard Grid (6 equal cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: GitHub */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift border-theme-border/60 bg-slate-50/50 dark:bg-slate-900/40">
              <div>
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-theme-border/50">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0">
                    <GithubIcon size={26} className="text-slate-800 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">GitHub</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">@ayushjha-07</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mb-4 text-center">
                  <div className="p-2 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-theme-border/40">
                    <div className="text-sm font-bold text-slate-800 dark:text-white font-mono">
                      <Counter target={24} suffix="+" trigger={isInView} />
                    </div>
                    <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 font-mono">Repos</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-theme-border/40">
                    <div className="text-sm font-bold text-slate-800 dark:text-white font-mono">
                      <Counter target={4} trigger={isInView} />
                    </div>
                    <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 font-mono">Followers</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-theme-border/40">
                    <div className="text-sm font-bold text-slate-800 dark:text-white font-mono">
                      <Counter target={2} trigger={isInView} />
                    </div>
                    <div className="text-[9px] uppercase tracking-wider font-semibold text-slate-400 font-mono">Following</div>
                  </div>
                </div>

                {/* Mock Contribution Graph preview */}
                <div>
                  <h4 className="text-[9px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500 mb-1.5 font-mono">Contribution Calendar</h4>
                  <div className="grid grid-flow-col grid-rows-6 gap-[3px] w-full p-2 bg-slate-900/5 dark:bg-slate-950/40 border border-theme-border/40 rounded-xl justify-center">
                    {CONTRIBUTION_GRID.map((val, idx) => {
                      const colors = [
                        "bg-slate-200 dark:bg-slate-800/80", // 0
                        "bg-emerald-500/20", // 1
                        "bg-emerald-500/45", // 2
                        "bg-emerald-500/70", // 3
                        "bg-emerald-500", // 4
                      ];
                      return (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-[1.5px] ${colors[val]}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              <a
                href="https://github.com/ayushjha-07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 mt-6 py-3 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn"
              >
                <span>View GitHub Profile</span>
                <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: LinkedIn */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift border-theme-border/60 bg-slate-50/50 dark:bg-slate-900/40">
              <div>
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-theme-border/50">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0">
                    <LinkedinIcon size={26} className="text-[#0A66C2] dark:text-[#78b3ff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">LinkedIn</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">@ayushjha07</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 w-fit shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                      Open to Work
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed font-medium">
                    Software Engineer | React • Next.js • Java Developer
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono border-t border-theme-border/40 pt-3">
                    <Users size={14} className="text-emerald-500 shrink-0" />
                    <span><strong>500+</strong> Connections</span>
                  </div>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/ayushjha07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 mt-6 py-3 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </SpotlightCard>
          </motion.div>

          {/* Card 3: LeetCode */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift border-theme-border/60 bg-slate-50/50 dark:bg-slate-900/40">
              <div>
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-theme-border/50">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0">
                    <LeetCodeIcon size={26} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">LeetCode</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">@ayushjha07</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs">
                    <span className="text-base">🟨</span>
                    <span>Solved: <strong><Counter target={138} trigger={isInView} /></strong> Problems</span>
                  </div>

                  <div className="w-full h-1.5 rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-800">
                    <div className="h-full bg-emerald-500" style={{ width: "50.7%" }} /> {/* Easy: 70/138 ≈ 50.7% */}
                    <div className="h-full bg-amber-500" style={{ width: "39.9%" }} />  {/* Medium: 55/138 ≈ 39.9% */}
                    <div className="h-full bg-rose-500" style={{ width: "9.4%" }} />    {/* Hard: 13/138 ≈ 9.4% */}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-[9px] font-bold font-mono">
                    <div className="py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-center">
                      Easy: 70
                    </div>
                    <div className="py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-center">
                      Med: 55
                    </div>
                    <div className="py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-center">
                      Hard: 13
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://leetcode.com/u/ayushjha07/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 mt-6 py-3 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </SpotlightCard>
          </motion.div>

          {/* Card 4: HackerRank */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift border-theme-border/60 bg-slate-50/50 dark:bg-slate-900/40">
              <div>
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-theme-border/50">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0">
                    <HackerRankIcon size={26} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">HackerRank</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">@ayushjha07</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <span>☕</span>
                      <span>Java Language</span>
                    </div>
                    <div className="flex gap-0.5 text-yellow-500 shrink-0">
                      <Star size={9} fill="currentColor" />
                      <Star size={9} fill="currentColor" />
                      <Star size={9} fill="currentColor" />
                      <Star size={9} fill="currentColor" />
                      <Star size={9} fill="currentColor" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-blue-500/5 border border-blue-500/10">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                      <span>🐍</span>
                      <span>Python Language</span>
                    </div>
                    <div className="flex gap-0.5 text-slate-400 shrink-0">
                      <Star size={9} fill="currentColor" />
                      <Star size={9} fill="currentColor" />
                      <Star size={9} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.hackerrank.com/profile/ayushjha07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 mt-6 py-3 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn"
              >
                <span>View HackerRank Profile</span>
                <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </SpotlightCard>
          </motion.div>

          {/* Card 5: CodeChef */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift border-theme-border/60 bg-slate-50/50 dark:bg-slate-900/40">
              <div>
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-theme-border/50">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0 text-[#D0011B] dark:text-[#FFA0A0]">
                    <CodeChefIcon size={26} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">CodeChef</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">@ayushjha07</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-theme-border/40 text-center">
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Rating</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">
                      ⭐ <Counter target={1239} trigger={isInView} />
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/5 dark:bg-white/5 border border-theme-border/40 text-center">
                    <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">Division</span>
                    <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">Div 4</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400">🌍</span>
                    <span>Global Rank: <strong><Counter target={76621} trigger={isInView} /></strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">🇮🇳</span>
                    <span>Country Rank: <strong><Counter target={72732} trigger={isInView} /></strong></span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.codechef.com/users/ayushjha07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 mt-6 py-3 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn"
              >
                <span>View CodeChef Profile</span>
                <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </SpotlightCard>
          </motion.div>

          {/* Card 6: Portfolio */}
          <motion.div
            custom={5}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift border-theme-border/60 bg-slate-50/50 dark:bg-slate-900/40">
              <div>
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-theme-border/50">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0">
                    <Terminal size={26} className="text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Portfolio</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">ayush.dev</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 w-fit shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                      Live Website
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed font-medium">
                    Software engineer portfolio presenting core projects, education timeline, and skill indexes.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-6">
                {/* Download Resume */}
                <Magnetic>
                  <a
                    href="https://drive.google.com/file/d/18nS71h1Sl7QcVHP8YrtwlfDBXjebI-JN/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn cursor-pointer"
                  >
                    <FileText size={12} className="shrink-0" />
                    <span>Download Resume</span>
                  </a>
                </Magnetic>

                {/* Contact Me */}
                <Magnetic>
                  <button
                    onClick={handleContactClick}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn cursor-pointer"
                  >
                    <Mail size={12} className="shrink-0" />
                    <span>Contact Me</span>
                  </button>
                </Magnetic>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
