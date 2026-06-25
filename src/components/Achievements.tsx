"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Lightbulb, Zap, Award, Flame, Cpu,
  Code2, Rocket, Briefcase, Star, Coffee, Terminal, Trophy, Check
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Static background particles to avoid hydration warnings
const BACKGROUND_PARTICLES = [
  { id: 1, top: "12%", left: "8%", size: 4, delay: 0 },
  { id: 2, top: "28%", left: "85%", size: 6, delay: 2 },
  { id: 3, top: "42%", left: "12%", size: 5, delay: 4 },
  { id: 4, top: "62%", left: "92%", size: 4, delay: 1 },
  { id: 5, top: "78%", left: "7%", size: 6, delay: 3 },
  { id: 6, top: "88%", left: "80%", size: 5, delay: 5 },
];

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  trigger: boolean;
}

function Counter({ target, suffix = "", prefix = "", duration = 1500, trigger }: CounterProps) {
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
    <span className="font-mono">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const isContainerInView = useInView(containerRef, { once: true, amount: 0.05 });
  const isDashboardInView = useInView(dashboardRef, { once: true, amount: 0.1 });
  const isCategoriesInView = useInView(categoriesRef, { once: true, amount: 0.1 });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.05 });

  const controls = useAnimation();

  useEffect(() => {
    if (isContainerInView) {
      controls.start("visible");
    }
  }, [isContainerInView, controls]);

  const statsData = [
    {
      id: 1,
      value: 600,
      suffix: "+",
      subtext: "DSA Problems Solved",
      icon: <Code2 className="text-emerald-500 group-hover:text-emerald-400 transition-colors" size={20} />,
      tooltip: "Data Structures & Algorithms problems solved across competitive coding platforms.",
    },
    {
      id: 2,
      value: 5,
      suffix: "",
      subtext: "Live Projects Deployed",
      icon: <Rocket className="text-emerald-500 group-hover:text-emerald-400 transition-colors" size={20} />,
      tooltip: "Production-grade websites and web services hosted live.",
    },
    {
      id: 3,
      value: 2,
      suffix: "",
      subtext: "Internships Completed",
      icon: <Briefcase className="text-emerald-500 group-hover:text-emerald-400 transition-colors" size={20} />,
      tooltip: "Professional experiences building real-world digital and industrial products.",
    },
    {
      id: 4,
      value: 9,
      suffix: "+",
      subtext: "Tech Certifications",
      icon: <Award className="text-emerald-500 group-hover:text-emerald-400 transition-colors" size={20} />,
      tooltip: "Industry credentials from MongoDB, Cisco, AWS Academy, etc.",
    },
    {
      id: 5,
      value: 1239,
      suffix: "",
      prefix: "",
      subtext: "CodeChef Rating (Div 4)",
      icon: <Star className="text-emerald-500 group-hover:text-emerald-400 transition-colors" size={20} />,
      tooltip: "Peak rating and Division 4 active ranking on CodeChef profile.",
    },
    {
      id: 6,
      value: 138,
      suffix: "",
      subtext: "LeetCode Solved",
      icon: <Flame className="text-emerald-500 group-hover:text-emerald-400 transition-colors" size={20} />,
      tooltip: "Algorithmic problems solved with optimal time & space complexities on LeetCode.",
    },
    {
      id: 7,
      value: 5,
      suffix: "★ Gold",
      subtext: "HackerRank Java",
      icon: <Coffee className="text-emerald-500 group-hover:text-emerald-400 transition-colors" size={20} />,
      tooltip: "Earned 5-Star Gold Badge status in Java proficiency assessment on HackerRank.",
    },
    {
      id: 8,
      value: 3,
      suffix: "★ Silver",
      subtext: "HackerRank Python",
      icon: <Terminal className="text-emerald-500 group-hover:text-emerald-400 transition-colors" size={20} />,
      tooltip: "Earned 3-Star Silver Badge status in Python programming on HackerRank.",
    },
  ];

  const categoriesData = [
    {
      title: "Competitive Programming",
      icon: <Trophy className="text-emerald-500" size={22} />,
      points: [
        "600+ DSA Problems",
        "CodeChef Rating 1239",
        "LeetCode 138 Problems",
        "HackerRank Java 5★",
        "HackerRank Python 3★"
      ],
    },
    {
      title: "Projects",
      icon: <Rocket className="text-emerald-500" size={22} />,
      points: [
        "5 Production-Ready Projects",
        "Full Stack Development",
        "AI & ML Projects",
        "Modern UI/UX Design"
      ],
    },
    {
      title: "Professional Growth",
      icon: <Briefcase className="text-emerald-500" size={22} />,
      points: [
        "2 Internships",
        "Team Collaboration",
        "Agile Development",
        "Continuous Learning"
      ],
    },
    {
      title: "Certifications",
      icon: <Award className="text-emerald-500" size={22} />,
      points: [
        "9+ Industry Certifications",
        "Cloud Computing",
        "AI & Machine Learning",
        "Web Development"
      ],
    },
  ];

  const timelineData = [
    {
      year: "2021",
      title: "Started Programming",
      badge: "Foundations",
      desc: "Began studying computer logic, syntax, and foundational information technology architectures.",
      icon: <Terminal size={14} className="text-emerald-500" />,
    },
    {
      year: "2022",
      title: "Reached 100 DSA Problems",
      badge: "Solving Basics",
      desc: "Solved my first 100 challenges, developing strong array, string, and list manipulation skills.",
      icon: <Code2 size={14} className="text-emerald-500" />,
    },
    {
      year: "2023",
      title: "State-Level Volleyball Champion",
      badge: "Leadership & Sports",
      desc: "Secured 1st Position representing the college institution at the state volleyball championship.",
      icon: <Trophy size={14} className="text-emerald-500" />,
    },
    {
      year: "2023",
      title: "Startup Bihar Ideation Award",
      badge: "Innovation",
      desc: "Ranked 3rd Position under the Startup Bihar Initiative for proposing an innovative business-tech system.",
      icon: <Lightbulb size={14} className="text-emerald-500" />,
    },
    {
      year: "2023",
      title: "First Internship (CIPET)",
      badge: "Industry Learning",
      desc: "Completed a production systems internship at CIPET, learning about operational optimization.",
      icon: <Briefcase size={14} className="text-emerald-500" />,
    },
    {
      year: "2023",
      title: "Reached 300 DSA Problems",
      badge: "Scaling Capacity",
      desc: "Deepened sorting, searching, and tree structures. Strengthened core OOP concepts and logic.",
      icon: <Cpu size={14} className="text-emerald-500" />,
    },
    {
      year: "2023",
      title: "First Live Project Deployed",
      badge: "Cloud Hosting",
      desc: "Built and published my first full-stack site live on cloud servers, integrating database APIs.",
      icon: <Rocket size={14} className="text-emerald-500" />,
    },
    {
      year: "2025",
      title: "Completed 5 Live Projects & Web Internship",
      badge: "Production Level",
      desc: "Interned at A2IT in web systems development. Architected and successfully deployed 5 functional apps.",
      icon: <Zap size={14} className="text-emerald-500" />,
    },
    {
      year: "2026",
      title: "Reached 600+ DSA Problems",
      badge: "Advanced Coding",
      desc: "Completed over 600+ challenges, reaching 1239 rating on CodeChef and 138 solved on LeetCode.",
      icon: <Flame size={14} className="text-emerald-500" />,
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden text-theme-text border-b border-theme-border transition-colors duration-300">
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-100px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-100px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {BACKGROUND_PARTICLES.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-emerald-500/20 blur-[1px] animate-float pointer-events-none hidden md:block"
          style={{
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Achievements & <span className="gradient-text">Milestones</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            A snapshot of my coding journey, technical growth, and professional accomplishments.
          </p>
        </motion.div>

        {/* Dashboard Stat Grid */}
        <div ref={dashboardRef} className="mb-20">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            animate={isDashboardInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {statsData.map((item) => (
              <motion.div key={item.id} variants={itemVariants} className="group relative">
                
                {/* Custom Interactive Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-slate-950/95 border border-emerald-500/30 text-emerald-400 text-[10px] md:text-xs rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.25)] text-center w-52 z-30 leading-snug">
                  {item.tooltip}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
                </div>

                <SpotlightCard className="p-6 h-full flex flex-col justify-between hover:border-emerald-500/40 border border-theme-border/60 transition-all duration-300 relative bg-slate-50/50 dark:bg-slate-900/40">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-1">
                      <Counter 
                        target={item.value} 
                        suffix={item.suffix} 
                        prefix={item.prefix}
                        trigger={isDashboardInView} 
                      />
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                      {item.subtext}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievement Categories */}
        <div ref={categoriesRef} className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10 shadow-[0_0_6px_rgba(16,185,129,0.05)]">
              Overview
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Domain Breakdown</h3>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            animate={isCategoriesInView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            {categoriesData.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group">
                <SpotlightCard className="p-8 h-full bg-slate-50/40 dark:bg-slate-900/40 border border-theme-border/60 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6 border-b border-theme-border/50 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {category.title}
                    </h4>
                  </div>
                  <ul className="space-y-4">
                    {category.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-3 text-slate-600 dark:text-gray-300 text-sm">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={10} className="text-emerald-500" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="mb-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              History
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Milestones Timeline</h3>
          </div>

          <div className="relative pl-8 md:pl-10">
            {/* Pulsing Line */}
            <div className="absolute left-[16px] md:left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/40 to-transparent shadow-[0_0_8px_rgba(16,185,129,0.3)]" />

            <motion.div 
              className="space-y-12"
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Indicator Dot */}
                  <div className="absolute -left-[32px] md:-left-[33px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.8)] z-10 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
                  </div>

                  {/* Content Box */}
                  <div className="flex flex-col gap-2 max-w-4xl bg-slate-50/30 dark:bg-slate-900/20 hover:bg-slate-50/50 dark:hover:bg-slate-900/30 p-5 rounded-2xl border border-theme-border/40 hover:border-emerald-500/20 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                        {item.year}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 font-mono">
                        {item.badge}
                      </span>
                    </div>
                    
                    <div className="flex items-start md:items-center gap-2 mt-1">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <h4 className="text-md md:text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400 leading-relaxed pl-1 md:pl-8 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Final CTA Block */}
        <motion.div
          initial="hidden"
          animate={isContainerInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center"
        >
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-slate-900/30 to-emerald-500/5 border border-emerald-500/10 dark:border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)] backdrop-blur-xl max-w-4xl mx-auto relative overflow-hidden group">
            {/* Background spotlight shine */}
            <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <Trophy className="mx-auto text-emerald-500 mb-6 animate-float drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" size={32} />
            <h4 className="text-lg md:text-2xl font-bold tracking-tight text-slate-800 dark:text-emerald-100 max-w-2xl mx-auto leading-relaxed italic">
              &ldquo;I believe in continuous learning, building impactful software, and solving real-world problems through technology.&rdquo;
            </h4>
            <div className="h-0.5 w-12 bg-emerald-500/30 mx-auto mt-6 rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
