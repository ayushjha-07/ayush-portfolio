"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  GitPullRequest, FolderGit, Code2, 
  ArrowUpRight, Compass, Sparkles, BookOpen, Quote, AlertCircle
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

// Static background particles to avoid hydration mismatches
const COMMUNITY_PARTICLES = [
  { id: 1, top: "20%", left: "5%", size: 4, delay: 0 },
  { id: 2, top: "45%", left: "82%", size: 5, delay: 1.5 },
  { id: 3, top: "70%", left: "8%", size: 4, delay: 3 },
  { id: 4, top: "90%", left: "90%", size: 6, delay: 2 },
];

// Simulated GitHub heatmap grid (14 columns x 7 rows = 98 days)
const HEATMAP_COMMITS = [
  0, 1, 2, 0, 1, 3, 4, 2, 1, 0, 2, 3, 1, 0,
  1, 2, 0, 3, 1, 0, 2, 4, 1, 2, 0, 1, 3, 2,
  2, 0, 1, 4, 2, 3, 1, 0, 2, 1, 3, 0, 1, 4,
  0, 1, 3, 2, 0, 1, 4, 2, 1, 3, 0, 2, 1, 0,
  1, 2, 0, 1, 3, 2, 0, 1, 4, 3, 2, 1, 0, 3,
  3, 0, 2, 4, 1, 2, 0, 3, 1, 0, 2, 4, 1, 2,
  0, 2, 1, 3, 0, 2, 4, 1, 3, 2, 0, 1, 4, 3,
];

// SVGs for Brand Logos
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-800 dark:text-white">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A66C2]">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetCodeIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="text-[#FFA116]">
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.867-5.67a1.16 1.16 0 0 1 0-1.677l5.867-5.67c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-1.87 1.807a.56.56 0 0 0 0 .81l1.87 1.807c.466.45.466 1.17 0 1.62z" />
    <path d="M13.102 12l-3-2.88 3-2.88 3 2.88z" opacity="0.8" />
  </svg>
);

const HackerRankIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="text-[#2EC866]">
    <path d="M17.15 19.12H6.85c-.93 0-1.68-.75-1.68-1.68V6.56c0-.93.75-1.68 1.68-1.68h10.3c.93 0 1.68.75 1.68 1.68v10.88c0 .93-.75 1.68-1.68 1.68zM8.53 7.82v8.36h1.92v-3.23h3.1v3.23h1.92V7.82h-1.92v3.25h-3.1V7.82H8.53z" />
  </svg>
);

const CodeChefIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className="text-slate-700 dark:text-[#a07a50]">
    <path d="M21 17H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm-4-4H7a4.996 4.996 0 0 1-3.664-8.397A5 5 0 0 1 12 3a5 5 0 0 1 8.664 1.603A4.996 4.996 0 0 1 17 13z" />
  </svg>
);

export default function OpenSource() {
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

  const languages = [
    { name: "Java", pct: 45, color: "bg-[#F89820]" },
    { name: "JavaScript", pct: 30, color: "bg-[#F7DF1E]" },
    { name: "TypeScript", pct: 15, color: "bg-[#3178C6]" },
    { name: "Python", pct: 10, color: "bg-[#3776AB]" },
  ];

  const communityPlatforms = [
    {
      name: "GitHub",
      desc: "Hosting code repository pipelines, tracking issues, and managing software deployments.",
      logo: <GithubIcon size={24} />,
      link: "https://github.com/ayushjha-07"
    },
    {
      name: "LinkedIn",
      desc: "Connecting with industry peers, sharing technical learning milestones, and looking for FTE roles.",
      logo: <LinkedinIcon size={24} />,
      link: "https://linkedin.com"
    },
    {
      name: "LeetCode",
      desc: "Solving advanced algorithmic puzzles to strengthen computational and technical logical abilities.",
      logo: <LeetCodeIcon size={24} />,
      link: "https://leetcode.com/u/ayushjha07/"
    },
    {
      name: "HackerRank",
      desc: "Verifying language proficiency in core programming modules like Java and Python.",
      logo: <HackerRankIcon size={24} />,
      link: "https://www.hackerrank.com/profile/ayushjha07"
    },
    {
      name: "CodeChef",
      desc: "Participating in timed coding contests to sharpen real-time analytical debugging under pressure.",
      logo: <CodeChefIcon size={24} />,
      link: "https://www.codechef.com/users/ayushjha07"
    }
  ];

  const learningGoals = [
    { title: "Advanced React & Next.js", desc: "Mastering server actions, route handlers, and React Server Components (RSC) architecture." },
    { title: "System Design", desc: "Understanding scalable architectures, load balancers, caching layers, and database sharding patterns." },
    { title: "Cloud Computing", desc: "Configuring AWS cloud instances, lambda functions, and serverless compute pipelines." },
    { title: "DevOps Fundamentals", desc: "Structuring Docker container flows, Kubernetes nodes, and automated GitHub CI/CD actions." },
    { title: "AI & Machine Learning", desc: "Tuning neural network hyper-parameters and compiling custom classification models." },
    { title: "Open Source Contributions", desc: "Contributing to mainstream developer libraries, APIs, and dev-tools." }
  ];

  return (
    <section
      id="opensource-community"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {COMMUNITY_PARTICLES.map((particle) => (
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
            Open Source & <span className="gradient-text">Community</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Contributing to the developer community through code, collaboration, and continuous learning.
          </p>
        </motion.div>

        {/* GitHub Activity Dashboard Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SpotlightCard className="p-6 md:p-8 border border-theme-border/60 bg-slate-50/40 dark:bg-slate-900/40 rounded-2xl">
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <GithubIcon size={18} /> <span>GitHub Activity Profile Dashboard</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Stats & Languages */}
              <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
                
                {/* Numbers Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Public Repos", val: "20+" },
                    { label: "Total Contributes", val: "600+" },
                    { label: "Followers", val: "4" },
                    { label: "Following", val: "2" },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/5 dark:bg-white/3 border border-theme-border/40 text-center font-mono">
                      <span className="block text-[10px] uppercase font-bold text-slate-400 dark:text-gray-500">{stat.label}</span>
                      <span className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white">{stat.val}</span>
                    </div>
                  ))}
                </div>

                {/* Most Used Languages */}
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-900/5 dark:bg-white/3 border border-theme-border/40">
                  <span className="text-xs font-bold font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider block">
                    Most Used Languages
                  </span>
                  <div className="space-y-2">
                    {languages.map((lang, lIdx) => (
                      <div key={lIdx} className="space-y-1">
                        <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-600 dark:text-gray-300">
                          <span>{lang.name}</span>
                          <span>{lang.pct}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${lang.color} rounded-full`} style={{ width: `${lang.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Heatmap Calendar & Profile Button */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                
                {/* Heatmap block */}
                <div className="flex flex-col gap-3 p-4 rounded-xl bg-slate-900/5 dark:bg-slate-950/40 border border-theme-border/40 flex-grow">
                  <span className="text-xs font-bold font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider block">
                    Contribution Heatmap (Mock Calendar)
                  </span>

                  {/* Heatmap Grid */}
                  <div className="flex-grow flex items-center justify-center py-2 overflow-x-auto">
                    <div className="grid grid-flow-col grid-rows-7 gap-1.5 w-max">
                      {HEATMAP_COMMITS.map((level, squareIdx) => {
                        let colorClass = "bg-slate-200/50 dark:bg-white/5";
                        if (level === 1) colorClass = "bg-emerald-500/20";
                        if (level === 2) colorClass = "bg-emerald-500/40";
                        if (level === 3) colorClass = "bg-emerald-500/75";
                        if (level === 4) colorClass = "bg-emerald-500 shadow-[0_0_6px_#10B981]";
                        
                        return (
                          <div
                            key={squareIdx}
                            className={`w-3.5 h-3.5 rounded-[2px] transition-colors duration-300 ${colorClass}`}
                            title={`${level > 0 ? `${level * 2} contributions` : "No contributions"}`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Legend indicator */}
                  <div className="flex justify-end items-center gap-1.5 text-[9px] font-mono text-slate-400 dark:text-gray-500 mt-2">
                    <span>Less</span>
                    <div className="w-2.5 h-2.5 rounded-[1px] bg-slate-200/50 dark:bg-white/5" />
                    <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/20" />
                    <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/40" />
                    <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500/75" />
                    <div className="w-2.5 h-2.5 rounded-[1px] bg-emerald-500" />
                    <span>More</span>
                  </div>
                </div>

                {/* View Github Profile link */}
                <div className="flex justify-end">
                  <Magnetic>
                    <a
                      href="https://github.com/ayushjha-07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 cursor-pointer"
                    >
                      <span>View GitHub Profile</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </Magnetic>
                </div>

              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Open Source Contributions Cards Block */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerVariants}
          className="mb-20 space-y-6"
        >
          {/* Status banner */}
          <div className="max-w-4xl mx-auto">
            <SpotlightCard className="p-6 border border-emerald-500/15 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.04)] rounded-xl flex items-center justify-center text-center">
              <span className="text-xs md:text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <Compass className="animate-spin-slow" size={16} /> Actively building personal projects and preparing for open-source contributions.
              </span>
            </SpotlightCard>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Pull Requests", count: "0", desc: "Preparing initial PRs targeting open libraries.", icon: <GitPullRequest size={16} /> },
              { title: "Issues Resolved", count: "0", desc: "Triaging and resolving community bugs.", icon: <AlertCircle size={16} /> },
              { title: "Repos Contributed", count: "0", desc: "Collaborating with upstream branches.", icon: <FolderGit size={16} /> },
              { title: "Personal Projects", count: "5 Deployed", desc: "Active full-stack and simulator projects.", icon: <Code2 size={16} /> },
            ].map((card, cIdx) => (
              <motion.div key={cIdx} variants={cardVariants}>
                <SpotlightCard className="p-5 border border-theme-border/60 hover:border-emerald-500/25 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl flex flex-col justify-between min-h-[140px] group">
                  <div className="flex items-center justify-between gap-3 text-slate-500 dark:text-gray-400">
                    <div className="w-8 h-8 rounded-lg bg-slate-900/5 dark:bg-white/3 flex items-center justify-center text-slate-600 dark:text-gray-300 shrink-0">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">{card.title}</span>
                  </div>
                  <div className="mt-4">
                    <span className="block text-lg font-mono font-extrabold text-slate-800 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                      {card.count}
                    </span>
                    <p className="text-[10px] text-slate-500 dark:text-gray-400 leading-normal mt-1">
                      {card.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Community Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500">
              🌐 Developer Community Profiles
            </h3>
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {communityPlatforms.map((platform, idx) => (
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

        {/* Learning Goals Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500">
              📚 Current Learning Goals
            </h3>
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {learningGoals.map((goal, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <SpotlightCard className="p-5 border border-theme-border/60 hover:border-emerald-500/25 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                      {goal.title}
                    </h4>
                    <p className="text-[10px] md:text-xs text-slate-500 dark:text-gray-400 leading-normal">
                      {goal.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Developer Philosophy Quote block */}
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
                &ldquo;I believe the best way to grow as a software engineer is by continuously learning, building meaningful projects, sharing knowledge, and contributing to the developer community.&rdquo;
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                <Sparkles size={11} />
                <span>Developer Philosophy</span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
