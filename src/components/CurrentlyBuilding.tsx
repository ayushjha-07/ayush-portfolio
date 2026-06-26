"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Laptop, Rocket, Brain, CheckCircle2, 
  Terminal, Sparkles, BookOpen, Layers, Server
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Static background particles to avoid Next.js hydration mismatches
const BUILDING_PARTICLES = [
  { id: 1, top: "15%", left: "8%", size: 4, delay: 0 },
  { id: 2, top: "45%", left: "84%", size: 5, delay: 1.5 },
  { id: 3, top: "75%", left: "10%", size: 4, delay: 3 },
];

const LeetCodeLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-[#FFA116]" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.867-5.67a1.16 1.16 0 0 1 0-1.677l5.867-5.67c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-1.87 1.807a.56.56 0 0 0 0 .81l1.87 1.807c.466.45.466 1.17 0 1.62z" />
    <path d="M13.102 12l-3-2.88 3-2.88 3 2.88z" opacity="0.8" />
  </svg>
);

const CodeChefLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-slate-700 dark:text-[#a07a50]" fill="currentColor">
    <path d="M21 17H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm-4-4H7a4.996 4.996 0 0 1-3.664-8.397A5 5 0 0 1 12 3a5 5 0 0 1 8.664 1.603A4.996 4.996 0 0 1 17 13z" />
  </svg>
);

// SVG path drawing variant for the checklist checkboxes
const checkmarkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  }
};

export default function CurrentlyBuilding() {
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
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const activeProjects = [
    {
      id: 1,
      title: "SmartLearn AI",
      status: "In Progress",
      statusColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
      icon: <Rocket size={20} className="text-amber-500 animate-pulse" />,
      desc: "Building an AI-powered personalized learning platform using React, Node.js, MongoDB, FastAPI, and Machine Learning.",
      progress: 85,
      tech: ["React", "Node.js", "MongoDB", "FastAPI", "Python", "Scikit-learn"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      status: "Active",
      statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      icon: <Laptop size={20} className="text-emerald-500" />,
      desc: "Continuously improving my developer portfolio with modern UI/UX, animations, recruiter-focused features, and responsive design.",
      progress: 95,
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      id: 3,
      title: "DSA Journey",
      status: "Daily Practice",
      statusColor: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
      icon: <Brain size={20} className="text-cyan-500" />,
      desc: "Solving Data Structures & Algorithms problems to strengthen interview preparation and analytical thinking patterns.",
      achievements: [
        { label: "DSA Problems Solved", val: "600+", icon: <Terminal size={12} className="text-emerald-500" /> },
        { label: "LeetCode Problems", val: "138 Solved", icon: <LeetCodeLogo /> },
        { label: "CodeChef Rating", val: "1239 Rating", icon: <CodeChefLogo /> }
      ]
    }
  ];

  const currentLearning = [
    { name: "System Design", icon: <Layers size={14} /> },
    { name: "Next.js", icon: <Laptop size={14} /> },
    { name: "TypeScript", icon: <Code2Icon size={14} /> },
    { name: "AI & Machine Learning", icon: <Sparkles size={14} /> },
    { name: "Backend Development", icon: <Server size={14} /> },
    { name: "Cloud Computing", icon: <BookOpen size={14} /> }
  ];

  function Code2Icon({ size = 14 }: { size?: number }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    );
  }

  const goalsList = [
    "Build impactful software",
    "Reach 1000+ DSA problems",
    "Contribute to Open Source",
    "Secure a Software Engineering role"
  ];

  return (
    <section
      id="currently-building"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-b border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {BUILDING_PARTICLES.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-emerald-500/10 blur-[1px] animate-float pointer-events-none hidden md:block"
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
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Currently <span className="gradient-text">Building</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Technologies, projects, and goals I&apos;m actively working on.
          </p>
        </motion.div>

        {/* Active Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20"
        >
          {activeProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants} className="h-full">
              <SpotlightCard className="h-full p-6 border border-theme-border/60 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] bg-slate-50/40 dark:bg-slate-900/40 rounded-2xl flex flex-col justify-between min-h-[380px] relative group overflow-hidden">
                <div>
                  
                  {/* Card Header Status Row */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/5 dark:bg-white/3 border border-theme-border/60 flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                </div>

                {/* Card Footer Blocks */}
                <div className="mt-auto space-y-5">
                  
                  {/* Progress bars (SmartLearn & Portfolio) */}
                  {project.progress !== undefined && (
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-600 dark:text-gray-300">
                        <span>Project Progress</span>
                        <span className="text-emerald-500 font-extrabold">{project.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${project.progress}%` } : {}}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 shadow-[0_0_6px_#10B981] rounded-full"
                        />
                      </div>
                    </div>
                  )}

                  {/* Technology Badges (SmartLearn & Portfolio) */}
                  {project.tech && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-theme-border/40">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[9px] font-mono font-bold bg-slate-900/5 dark:bg-white/5 border border-theme-border/60 text-slate-500 dark:text-gray-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* DSA Achievement Lists (DSA Journey) */}
                  {project.achievements && (
                    <div className="space-y-2 pt-4 border-t border-theme-border/40">
                      {project.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/5 dark:bg-white/3 border border-theme-border/40 font-mono text-[10px]">
                          <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400">
                            {ach.icon}
                            <span>{ach.label}</span>
                          </div>
                          <span className="font-bold text-slate-800 dark:text-white">{ach.val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Learning & Goals section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Current Learning Badges (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-base font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2 flex items-center gap-1.5">
              <BookOpen size={14} className="text-emerald-500 animate-pulse" /> Current Learning
            </h3>

            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {currentLearning.map((item, idx) => (
                <motion.div key={idx} variants={cardVariants}>
                  <SpotlightCard className="p-4 border border-theme-border/60 hover:border-emerald-500/25 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                      {item.name}
                    </span>
                  </SpotlightCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Block: Current Goals Checklist (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-base font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2 flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" /> Current Goals
            </h3>

            <SpotlightCard className="p-6 border border-theme-border/60 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl flex-grow flex flex-col justify-center">
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerVariants}
                className="space-y-4"
              >
                {goalsList.map((goal, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    className="flex items-center gap-3.5"
                  >
                    {/* Checklist icon checkmark with draw path animation */}
                    <div className="w-5 h-5 rounded border border-emerald-500/40 bg-emerald-500/5 flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <motion.polyline
                          points="20 6 9 17 4 12"
                          variants={checkmarkVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          transition={{ delay: idx * 0.15 + 0.3 }}
                        />
                      </svg>
                    </div>
                    
                    <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-gray-200">
                      {goal}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </section>
  );
}
