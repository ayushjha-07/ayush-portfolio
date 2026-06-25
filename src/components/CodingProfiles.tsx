"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Custom LeetCode Icon (Official Orange/Yellow)
function LeetCodeIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
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

// Custom CodeChef Icon (Official Chef Hat style)
function CodeChefIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
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

// Custom HackerRank Icon (Official Green H)
function HackerRankIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
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

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
  textValue?: string;
}

function Counter({ target, suffix = "", duration = 1200, trigger, textValue }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    if (textValue) return;

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
  }, [trigger, target, duration, textValue]);

  if (textValue) {
    return <span>{textValue}</span>;
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function CodingProfiles() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const achievements = [
    {
      value: 600,
      suffix: "+",
      label: "DSA Solved",
      desc: "Problems solved across platforms including LeetCode, CodeChef, HackerRank.",
      icon: "💻",
      colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      value: 138,
      suffix: "",
      label: "LeetCode Problems",
      desc: "Solved challenges focusing on data structures and algorithms.",
      icon: "🟨",
      colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      value: 1239,
      suffix: "",
      label: "CodeChef Rating",
      desc: "Contest rating achieved through division contests.",
      icon: "⭐",
      colorClass: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
    },
    {
      value: 5,
      suffix: "★",
      label: "Java on HackerRank",
      desc: "Gold badge skill validation in Java language.",
      icon: "☕",
      colorClass: "text-orange-400 bg-orange-500/10 border-orange-500/20"
    },
    {
      value: 3,
      suffix: "★",
      label: "Python on HackerRank",
      desc: "Silver badge skill validation in Python language.",
      icon: "🐍",
      colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/20"
    },
    {
      value: 0,
      suffix: "",
      textValue: "Active",
      label: "CP Programmer",
      desc: "Engaged in competitive algorithmic problem solving.",
      icon: "🚀",
      colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    }
  ];

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
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Competitive Programming
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-theme-text-sec text-sm max-w-xl mx-auto mt-4">
            A live dashboard of my algorithmic achievements, contest ratings, and programming profile metrics.
          </p>
        </div>

        {/* Part 1: Overall Coding Achievements Grid (6 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.label}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              className="h-full"
            >
              <SpotlightCard className="p-4 h-full flex flex-col justify-between hover-lift relative group overflow-hidden border-theme-border/60 bg-theme-card/50">
                <div className="w-full">
                  {/* Badge Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg">{ach.icon}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold border ${ach.colorClass}`}>
                      Metric
                    </span>
                  </div>
                  
                  {/* Counter Metric */}
                  <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-white font-mono tracking-tight mb-1.5">
                    <Counter
                      target={ach.value}
                      suffix={ach.suffix}
                      trigger={isInView}
                      textValue={ach.textValue}
                    />
                  </div>
                  
                  {/* Text labels */}
                  <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-wide mb-1 leading-snug">
                    {ach.label}
                  </h3>
                  <p className="text-[10px] text-theme-text-sec leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Part 2: Platform Profiles Grid (3 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LeetCode Card */}
          <motion.div
            custom={6}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift border-theme-border/60">
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-5 pb-3 border-b border-theme-border/50">
                    <div className="w-12 h-12 rounded-xl bg-theme-bg-sec border border-theme-border flex items-center justify-center shadow-inner shrink-0">
                      <LeetCodeIcon size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">LeetCode</h3>
                      <p className="text-xs text-theme-text-sec font-mono">@ayushjha07</p>
                    </div>
                  </div>

                  {/* Bullet achievements list */}
                  <div className="flex flex-col gap-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-amber-500">🟨</span>
                      <span><strong>138</strong> Problems Solved</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-emerald-400">🧩</span>
                      <span><strong>Active</strong> DSA Practice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-cyan-400">📈</span>
                      <span>Consistently Improving Problem-Solving Skills</span>
                    </div>
                  </div>

                  {/* Visual Difficulty Breakdown */}
                  <div className="mb-6">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-theme-text-sec mb-2">Difficulty Breakdown</h4>
                    {/* Segmented Bar */}
                    <div className="w-full h-2 rounded-full overflow-hidden flex bg-slate-200 dark:bg-slate-800 mb-3">
                      <div className="h-full bg-emerald-500" style={{ width: "50.7%" }} /> {/* Easy: 70/138 ≈ 50.7% */}
                      <div className="h-full bg-amber-500" style={{ width: "39.9%" }} />  {/* Medium: 55/138 ≈ 39.9% */}
                      <div className="h-full bg-rose-500" style={{ width: "9.4%" }} />    {/* Hard: 13/138 ≈ 9.4% */}
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[10px] font-semibold font-mono">
                      <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-center">
                        Easy: 70
                      </div>
                      <div className="p-1.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-center">
                        Med: 55
                      </div>
                      <div className="p-1.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-center">
                        Hard: 13
                      </div>
                    </div>
                  </div>
                </div>

                {/* View LeetCode Profile button */}
                <a
                  href="https://leetcode.com/u/ayushjha07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-theme-primary/20 bg-theme-primary/5 dark:bg-theme-primary/10 text-theme-primary font-semibold text-xs hover:bg-theme-primary hover:text-white transition-all duration-300 group/btn mt-auto"
                >
                  <span>View LeetCode Profile</span>
                  <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* CodeChef Card */}
          <motion.div
            custom={7}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift border-theme-border/60">
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-5 pb-3 border-b border-theme-border/50">
                    <div className="w-12 h-12 rounded-xl bg-theme-bg-sec border border-theme-border flex items-center justify-center shadow-inner shrink-0 text-[#D0011B] dark:text-[#FFA0A0]">
                      <CodeChefIcon size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">CodeChef</h3>
                      <p className="text-xs text-theme-text-sec font-mono">@ayushjha07</p>
                    </div>
                  </div>

                  {/* Bullet achievements list */}
                  <div className="flex flex-col gap-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-yellow-400">⭐</span>
                      <span>Highest Rating: <strong>1239</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-emerald-400">🚀</span>
                      <span>Division: <strong>Div 4</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-indigo-400">🌍</span>
                      <span>Global Rank: <strong>76,621</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-emerald-400">🇮🇳</span>
                      <span>Country Rank: <strong>72,732</strong></span>
                    </div>
                  </div>

                  {/* Rating Visual */}
                  <div className="mb-6">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-theme-text-sec mb-2">Contest Progress</h4>
                    <div className="p-3.5 rounded-xl bg-slate-900/10 dark:bg-white/3 border border-slate-200/50 dark:border-white/5 flex flex-col gap-2">
                      <div className="flex justify-between items-center text-[10px] font-bold font-mono">
                        <span className="text-yellow-400">2★ (1200 - 1399)</span>
                        <span className="text-theme-text-sec">Next: 3★</span>
                      </div>
                      {/* Rating Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: "20%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* View CodeChef Profile button */}
                <a
                  href="https://www.codechef.com/users/ayushjha07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-theme-primary/20 bg-theme-primary/5 dark:bg-theme-primary/10 text-theme-primary font-semibold text-xs hover:bg-theme-primary hover:text-white transition-all duration-300 group/btn mt-auto"
                >
                  <span>View CodeChef Profile</span>
                  <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* HackerRank Card */}
          <motion.div
            custom={8}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="h-full"
          >
            <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift border-theme-border/60">
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-4 mb-5 pb-3 border-b border-theme-border/50">
                    <div className="w-12 h-12 rounded-xl bg-theme-bg-sec border border-theme-border flex items-center justify-center shadow-inner shrink-0">
                      <HackerRankIcon size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">HackerRank</h3>
                      <p className="text-xs text-theme-text-sec font-mono">@ayushjha07</p>
                    </div>
                  </div>

                  {/* Bullet achievements list */}
                  <div className="flex flex-col gap-2.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-orange-400">☕</span>
                      <span>Java – <strong>5★ Gold</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="shrink-0 text-blue-400">🐍</span>
                      <span>Python – <strong>3★ Silver</strong></span>
                    </div>
                  </div>

                  {/* Custom Badges Visual */}
                  <div className="mb-6">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-theme-text-sec mb-2">Verified Badges</h4>
                    <div className="flex flex-col gap-2.5">
                      {/* Java Badge */}
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                        <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Java Language</span>
                        <div className="flex gap-0.5 text-yellow-500">
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                        </div>
                      </div>
                      {/* Python Badge */}
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-500/5 border border-blue-500/10">
                        <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200">Python Language</span>
                        <div className="flex gap-0.5 text-slate-400">
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                          <Star size={10} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* View HackerRank Profile button */}
                <a
                  href="https://www.hackerrank.com/profile/ayushjha07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-theme-primary/20 bg-theme-primary/5 dark:bg-theme-primary/10 text-theme-primary font-semibold text-xs hover:bg-theme-primary hover:text-white transition-all duration-300 group/btn mt-auto"
                >
                  <span>View HackerRank Profile</span>
                  <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
