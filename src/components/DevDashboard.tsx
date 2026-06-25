"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Award, Star, Code2, Sparkles, Quote, Terminal, 
  ArrowUpRight, CheckCircle2, TrendingUp, Laptop, Brain, Briefcase
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Static background particles to avoid hydration mismatches
const DASHBOARD_PARTICLES = [
  { id: 1, top: "15%", left: "10%", size: 4, delay: 0 },
  { id: 2, top: "40%", left: "85%", size: 5, delay: 2 },
  { id: 3, top: "70%", left: "7%", size: 4, delay: 1 },
  { id: 4, top: "90%", left: "92%", size: 6, delay: 3 },
];

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
const GithubLogo = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800 dark:text-white">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinLogo = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A66C2]">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetCodeLogo = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="text-[#FFA116]">
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.867-5.67a1.16 1.16 0 0 1 0-1.677l5.867-5.67c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-1.87 1.807a.56.56 0 0 0 0 .81l1.87 1.807c.466.45.466 1.17 0 1.62z" />
    <path d="M13.102 12l-3-2.88 3-2.88 3 2.88z" opacity="0.8" />
  </svg>
);

const HackerRankLogo = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="text-[#2EC866]">
    <path d="M17.15 19.12H6.85c-.93 0-1.68-.75-1.68-1.68V6.56c0-.93.75-1.68 1.68-1.68h10.3c.93 0 1.68.75 1.68 1.68v10.88c0 .93-.75 1.68-1.68 1.68zM8.53 7.82v8.36h1.92v-3.23h3.1v3.23h1.92V7.82h-1.92v3.25h-3.1V7.82H8.53z" />
  </svg>
);

const CodeChefLogo = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="text-slate-700 dark:text-[#a07a50]">
    <path d="M21 17H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm-4-4H7a4.996 4.996 0 0 1-3.664-8.397A5 5 0 0 1 12 3a5 5 0 0 1 8.664 1.603A4.996 4.996 0 0 1 17 13z" />
  </svg>
);

export default function DevDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const codingStats = [
    { label: "DSA Solved", val: 600, suffix: "+", icon: <Brain size={18} /> },
    { label: "Live Projects", val: 5, suffix: "", icon: <Laptop size={18} /> },
    { label: "Internships", val: 2, suffix: "", icon: <Briefcase size={18} /> },
    { label: "Certifications", val: 9, suffix: "+", icon: <Award size={18} /> },
    { label: "CodeChef Rating", val: 1239, suffix: "", icon: <CodeChefLogo /> },
    { label: "LeetCode Solved", val: 138, suffix: "", icon: <LeetCodeLogo /> },
    { label: "HackerRank Java", val: 5, suffix: "★ Gold", icon: <Star size={18} /> },
    { label: "HackerRank Python", val: 3, suffix: "★ Silver", icon: <Star size={18} /> },
  ];

  const techUsage = [
    { name: "React.js", pct: 85, desc: "Modular UIs & state management" },
    { name: "Next.js", pct: 80, desc: "SSR pages, route handlers, optimizing assets" },
    { name: "Java", pct: 90, desc: "OOP, collection sets, REST API controllers" },
    { name: "Node.js", pct: 75, desc: "Backend API routing gateways" },
    { name: "Express.js", pct: 70, desc: "Session auth middlewares & database routes" },
    { name: "MongoDB", pct: 75, desc: "Atlas clusters document schemas" },
    { name: "Python", pct: 70, desc: "FastAPI servers & Scikit-learn data processing" },
    { name: "Tailwind CSS", pct: 90, desc: "Glassmorphic animations & layouts" }
  ];

  const codingPlatforms = [
    {
      name: "GitHub",
      desc: "Hosted codes, CI/CD actions workflows.",
      logo: <GithubLogo size={22} />,
      link: "https://github.com/ayushjha-07"
    },
    {
      name: "LinkedIn",
      desc: "Professional networking and FTE opportunities.",
      logo: <LinkedinLogo size={22} />,
      link: "https://linkedin.com"
    },
    {
      name: "LeetCode",
      desc: "Active problem solving (138+ questions).",
      logo: <LeetCodeLogo size={22} />,
      link: "https://leetcode.com/u/ayushjha07/"
    },
    {
      name: "HackerRank",
      desc: "Verified Java 5★ and Python 3★ badges.",
      logo: <HackerRankLogo size={22} />,
      link: "https://www.hackerrank.com/profile/ayushjha07"
    },
    {
      name: "CodeChef",
      desc: "Contest matches (highest rating 1239).",
      logo: <CodeChefLogo size={22} />,
      link: "https://www.codechef.com/users/ayushjha07"
    }
  ];

  const currentFocus = [
    { title: "Building Full Stack Applications", desc: "Decoupled server API microservices & state management flow charts.", icon: <Code2 size={16} /> },
    { title: "Learning System Design", desc: "Tackling load balancers, caching logic databases partitions.", icon: <Terminal size={16} /> },
    { title: "Improving DSA Skills", desc: "Enhancing analytical time & space complexities puzzles arrays.", icon: <Brain size={16} /> },
    { title: "Exploring AI & Machine Learning", desc: "Training scikit classifiers and regression model parameters.", icon: <Sparkles size={16} /> },
    { title: "Open Source Contributions", desc: "Interacting with repository branches & PR configurations.", icon: <TrendingUp size={16} /> }
  ];

  return (
    <section
      id="dev-dashboard"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {DASHBOARD_PARTICLES.map((particle) => (
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
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Developer <span className="gradient-text">Dashboard</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            A real-time snapshot of my software engineering journey, coding achievements, and technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Block: Coding Statistics (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-left">
              <h3 className="text-base font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2 flex items-center gap-1.5">
                <TrendingUp size={14} className="text-emerald-500" /> Coding Statistics
              </h3>
            </div>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {codingStats.map((stat, idx) => (
                <motion.div key={idx} variants={cardVariants}>
                  <SpotlightCard className="p-4 border border-theme-border/60 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl text-center flex flex-col justify-between min-h-[110px] group hover:border-emerald-500/20 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mx-auto shrink-0 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div>
                      <span className="block text-[18px] md:text-[20px] font-mono font-extrabold text-slate-800 dark:text-white leading-none">
                        <Counter target={stat.val} suffix={stat.suffix} trigger={isInView} />
                      </span>
                      <span className="block text-[9px] uppercase font-bold text-slate-400 dark:text-gray-500 mt-2 font-mono tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Block: Technology Usage (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="text-left">
              <h3 className="text-base font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2 flex items-center gap-1.5">
                <Code2 size={14} className="text-emerald-500" /> Technology Usage
              </h3>
            </div>

            <SpotlightCard className="p-5 border border-theme-border/60 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                {techUsage.map((tech, idx) => (
                  <div key={idx} className="space-y-1 group/bar relative">
                    {/* Tooltip description */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-950/95 text-white text-[9px] font-mono rounded-lg shadow-xl border border-emerald-500/25 opacity-0 pointer-events-none group-hover/bar:opacity-100 transition-opacity duration-300 z-50 text-center leading-relaxed">
                      {tech.desc}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-t-4 border-t-slate-950/95 border-x-4 border-x-transparent" />
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-600 dark:text-gray-300">
                      <span>{tech.name}</span>
                      <span className="text-emerald-500">{tech.pct}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.pct}%` } : {}}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-[0_0_6px_#10B981] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

        </div>

        {/* Coding Platforms Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500">
              🌐 Developer Coding Profiles
            </h3>
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {codingPlatforms.map((platform, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <SpotlightCard className="p-5 border border-theme-border/60 hover:border-emerald-500/25 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl flex flex-col justify-between h-full group">
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900/5 dark:bg-white/3 flex items-center justify-center shadow-sm shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {platform.logo}
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-1">
                        {platform.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-gray-400 leading-normal">
                        {platform.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-theme-border/30">
                    <a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg border border-theme-border/60 bg-slate-900/5 dark:bg-white/3 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-slate-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-bold text-[10px] font-mono transition-all duration-200 cursor-pointer"
                    >
                      <span>View Profile</span>
                      <ArrowUpRight size={10} />
                    </a>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Current Focus Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500">
              ⚡ Current Learning Frontiers
            </h3>
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {currentFocus.map((focus, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <SpotlightCard className="p-5 border border-theme-border/60 hover:border-emerald-500/25 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl flex flex-col justify-between h-full group">
                  <div className="flex flex-col gap-4">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      {focus.icon}
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                        {focus.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-gray-400 leading-normal">
                        {focus.desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    <CheckCircle2 size={10} /> Active Focus
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Motto banner Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <SpotlightCard className="p-8 border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_25px_rgba(16,185,129,0.05)] rounded-2xl relative overflow-hidden text-center group">
            {/* Ambient background glow */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0,transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Quote size={20} />
              </div>
              <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-relaxed italic max-w-2xl">
                &ldquo;Code with purpose. Learn continuously. Build products that create impact.&rdquo;
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                <Sparkles size={11} />
                <span>Personal Motto</span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
