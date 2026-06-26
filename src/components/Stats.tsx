"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Laptop, Briefcase, Award, Star } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

function Counter({ target, suffix = "", duration = 1500, trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = target;
    if (start === end) {
      const t = setTimeout(() => setCount(end), 0);
      return () => clearTimeout(t);
    }

    const incrementTime = 15;
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

const LeetCodeLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#FFA116]" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.867-5.67a1.16 1.16 0 0 1 0-1.677l5.867-5.67c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-1.87 1.807a.56.56 0 0 0 0 .81l1.87 1.807c.466.45.466 1.17 0 1.62z" />
    <path d="M13.102 12l-3-2.88 3-2.88 3 2.88z" opacity="0.8" />
  </svg>
);

const CodeChefLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-slate-700 dark:text-[#a07a50]" fill="currentColor">
    <path d="M21 17H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm-4-4H7a4.996 4.996 0 0 1-3.664-8.397A5 5 0 0 1 12 3a5 5 0 0 1 8.664 1.603A4.996 4.996 0 0 1 17 13z" />
  </svg>
);

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const statsData = [
    {
      icon: <Brain className="text-theme-primary" size={20} />,
      target: 600,
      suffix: "+",
      title: "DSA Problems Solved",
      subtitle: "Across LeetCode, HackerRank & CodeChef",
      label: "DSA Mastery"
    },
    {
      icon: <Laptop className="text-theme-primary" size={20} />,
      target: 5,
      suffix: "",
      title: "Live Projects",
      subtitle: "Production-ready Full Stack Applications",
      label: "Web Engineering"
    },
    {
      icon: <Briefcase className="text-theme-primary" size={20} />,
      target: 2,
      suffix: "",
      title: "Internships Completed",
      subtitle: "Frontend Development & Industrial Training",
      label: "Work Experience"
    },
    {
      icon: <Award className="text-theme-primary" size={20} />,
      target: 9,
      suffix: "+",
      title: "Technical Certifications",
      subtitle: "Cisco, CodeChef, Infosys, MongoDB & More",
      label: "Verified Credentials"
    },
    {
      icon: <CodeChefLogo />,
      target: 1239,
      suffix: "",
      title: "CodeChef Rating",
      subtitle: "Division: Div 4, Global Rank: 76,621",
      label: "Rating Milestone"
    },
    {
      icon: <LeetCodeLogo />,
      target: 138,
      suffix: "",
      title: "LeetCode Problems",
      subtitle: "Solving Easy, Medium, and Hard challenges",
      label: "Problem Solving"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden text-theme-text border-t border-b border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
        >
          {statsData.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="h-full">
              <SpotlightCard className="h-full p-6 text-center flex flex-col items-center justify-between border-theme-border/60 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] group relative min-h-[250px]">
                
                {/* Floating Icon Container */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: idx * 0.2
                  }}
                  className="w-12 h-12 rounded-xl bg-slate-900/5 dark:bg-white/3 border border-theme-border/60 flex items-center justify-center mb-4 shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300"
                >
                  {stat.icon}
                </motion.div>
                
                {/* Numeric Metric */}
                <div className="flex-grow flex flex-col justify-center mb-4">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono leading-none">
                    <Counter
                      target={stat.target}
                      suffix={stat.suffix}
                      trigger={isInView}
                    />
                  </span>
                </div>
                
                {/* Description Text */}
                <div className="flex flex-col gap-1 w-full">
                  <h3 className="text-xs font-bold text-slate-800 dark:text-gray-200 line-clamp-1">
                    {stat.title}
                  </h3>
                  <p className="text-[10px] text-slate-500 dark:text-gray-400 font-medium leading-normal line-clamp-2 min-h-[30px]">
                    {stat.subtitle}
                  </p>
                </div>

                {/* Small Highlight Label at the bottom */}
                <div className="mt-4 pt-3 border-t border-theme-border/40 w-full flex items-center justify-center gap-1 text-[9px] font-bold font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  <Star size={10} className="fill-emerald-500/10 text-emerald-500 shrink-0" />
                  <span>{stat.label}</span>
                </div>

              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
