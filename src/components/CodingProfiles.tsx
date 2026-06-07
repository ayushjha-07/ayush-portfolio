"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, BookOpen, Briefcase, ExternalLink, Code2 } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import SpotlightCard from "./SpotlightCard";

// Custom LeetCode Icon
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
      <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.867-5.67a1.16 1.16 0 0 1 0-1.677l5.867-5.67c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-1.87 1.807a.56.56 0 0 0 0 .81l1.87 1.807c.466.45.466 1.17 0 1.62z" />
      <path d="M13.102 12l-3-2.88 3-2.88 3 2.88z" opacity="0.8" />
    </svg>
  );
}

// Custom CodeChef Icon
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
      <path d="M21 17H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm-4-4H7a4.996 4.996 0 0 1-3.664-8.397A5 5 0 0 1 12 3a5 5 0 0 1 8.664 1.603A4.996 4.996 0 0 1 17 13z" />
    </svg>
  );
}

// Custom HackerRank Icon
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
      <path d="M17.15 19.12H6.85c-.93 0-1.68-.75-1.68-1.68V6.56c0-.93.75-1.68 1.68-1.68h10.3c.93 0 1.68.75 1.68 1.68v10.88c0 .93-.75 1.68-1.68 1.68zM8.53 7.82v8.36h1.92v-3.23h3.1v3.23h1.92V7.82h-1.92v3.25h-3.1V7.82H8.53z" />
    </svg>
  );
}

export default function CodingProfiles() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const achievements = [
    {
      metric: "270+",
      label: "Coding Problems Solved",
      desc: "C++ and Java problems completed across LeetCode & HackerRank.",
      icon: <Trophy className="text-theme-primary" size={24} />,
    },
    {
      metric: "101",
      label: "Submissions (Past Year)",
      desc: "Active problem solving practice demonstrating consistent coding progress.",
      icon: <Award className="text-theme-primary" size={24} />,
    },
    {
      metric: "9",
      label: "Certifications Earned",
      desc: "Technical credentials from Cisco, CodeChef, NASSCOM, and Infosys Springboard.",
      icon: <BookOpen className="text-theme-primary" size={24} />,
    },
    {
      metric: "3",
      label: "Projects Deployed",
      desc: "E-Commerce web apps, OS memory managers, and automation toolkits.",
      icon: <Briefcase className="text-theme-primary" size={24} />,
    },
  ];

  interface ProfileItem {
    name: string;
    username: string;
    desc: string;
    icon: React.ReactNode;
    url: string;
    actionText: string;
    stats: { label: string; value: string }[];
    badgeText?: string;
    difficultyBreakdown?: { easy: number; medium: number; hard: number };
  }

  const profiles: ProfileItem[] = [
    {
      name: "LeetCode",
      username: "ayushjha07",
      desc: "Actively practicing Data Structures & Algorithms with a focus on consistency, problem solving, and interview preparation.",
      icon: <LeetCodeIcon size={28} className="text-[#FFA116]" />,
      url: "https://leetcode.com/u/ayushjha07/",
      actionText: "View LeetCode Profile",
      stats: [
        { label: "Problems Solved", value: "60" },
        { label: "Global Rank", value: "2,233,275" },
        { label: "Active Days", value: "18" },
        { label: "Submissions", value: "101" },
      ],
      difficultyBreakdown: {
        easy: 30,
        medium: 21,
        hard: 9,
      },
    },
    {
      name: "CodeChef",
      username: "ayushjha07",
      desc: "Competitive programming profile with focus on speed and correctness in Division rounds.",
      icon: <CodeChefIcon size={28} className="text-[#D0011B] dark:text-[#FFA0A0]" />,
      url: "https://www.codechef.com/users/ayushjha07",
      actionText: "View CodeChef Profile",
      badgeText: "CP Enthusiast",
      stats: [
        { label: "Star Rating", value: "2★" },
        { label: "Current Rating", value: "1465" },
        { label: "Highest Rating", value: "1530" },
      ],
    },
    {
      name: "HackerRank",
      username: "ayushjha07",
      desc: "Foundational coding assessments validating core languages and problem solving skills.",
      icon: <HackerRankIcon size={28} className="text-[#2EC866]" />,
      url: "https://www.hackerrank.com/profile/ayushjha07",
      actionText: "View HackerRank Profile",
      badgeText: "Problem Solver Bronze",
      stats: [
        { label: "Python Skill", value: "3★" },
        { label: "Java Skill", value: "1★" },
        { label: "Problems Solved", value: "214+" },
      ],
    },
    {
      name: "GitHub",
      username: "ayushjha-07",
      desc: "Open source repositories containing web application codebases, utility scripts, and simulators.",
      icon: <Github size={28} className="text-slate-900 dark:text-white" />,
      url: "https://github.com/ayushjha-07",
      actionText: "View GitHub Profile",
      stats: [
        { label: "Repositories", value: "8+" },
        { label: "Contributions", value: "Active" },
      ],
    },
    {
      name: "LinkedIn",
      username: "ayushjha07",
      desc: "Professional networking profile detailing academic history, credentials, and project updates.",
      icon: <Linkedin size={28} className="text-[#0A66C2]" />,
      url: "https://linkedin.com/in/ayushjha07",
      actionText: "Connect on LinkedIn",
      stats: [
        { label: "Connections", value: "500+" },
        { label: "Network", value: "Active" },
      ],
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.1,
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
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Achievements &amp; Coding Profiles
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-theme-text-sec text-sm max-w-xl mx-auto mt-4">
            A comprehensive record of competitive programming achievements, credentials, and open-source contributions.
          </p>
        </div>

        {/* Part 1: Achievements Grid (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.label}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              className="h-full"
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between hover-lift">
                <div>
                  {/* Icon & Metric */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-theme-bg-sec border border-theme-border flex items-center justify-center shadow-sm">
                      {ach.icon}
                    </div>
                    <span className="text-3xl font-extrabold text-theme-primary font-mono tracking-tight">
                      {ach.metric}
                    </span>
                  </div>
                  
                  {/* Text Description */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {ach.label}
                  </h3>
                  <p className="text-xs text-theme-text-sec leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Part 2: Profiles Wrap Layout (centered 2nd row on desktop) */}
        <div className="flex flex-wrap justify-center gap-8">
          {profiles.map((prof, idx) => (
            <motion.div
              key={prof.name}
              custom={idx + 4} // Delay animations slightly after achievements
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm flex"
            >
              <SpotlightCard className="p-6 h-full w-full flex flex-col justify-between hover-lift border-theme-border/60">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Brand Icon & Platform Name & Username */}
                    <div className="flex items-center gap-4 mb-4 pb-3 border-b border-theme-border/50">
                      <div className="w-12 h-12 rounded-xl bg-theme-bg-sec border border-theme-border flex items-center justify-center shadow-inner shrink-0">
                        {prof.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white truncate">
                          {prof.name}
                        </h3>
                        <p className="text-xs text-theme-text-sec font-mono truncate">
                          @{prof.username}
                        </p>
                      </div>
                    </div>

                    {/* Badge Text if available */}
                    {prof.badgeText && (
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-theme-primary/10 border border-theme-primary/20 text-[10px] font-bold text-theme-primary font-mono uppercase tracking-wider">
                          <Code2 size={10} />
                          {prof.badgeText}
                        </span>
                      </div>
                    )}

                    {/* Short Description */}
                    <p className="text-xs text-theme-text-sec leading-relaxed mb-4">
                      {prof.desc}
                    </p>

                    {/* Difficulty Breakdown for LeetCode */}
                    {prof.difficultyBreakdown && (
                      <div className="flex flex-wrap gap-2 mb-5 text-[10px] font-semibold font-mono">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                          Easy: {prof.difficultyBreakdown.easy}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400">
                          Med: {prof.difficultyBreakdown.medium}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400">
                          Hard: {prof.difficultyBreakdown.hard}
                        </span>
                      </div>
                    )}

                    {/* Profile Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {prof.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="p-2.5 rounded-xl bg-theme-bg-sec/50 border border-theme-border/50 flex flex-col"
                        >
                          <span className="text-[9px] uppercase tracking-wider text-theme-text-sec font-semibold mb-0.5">
                            {stat.label}
                          </span>
                          <span className="text-xs font-extrabold text-theme-text font-mono">
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Profile Action Button */}
                  <a
                    href={prof.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-theme-primary/20 bg-theme-primary/5 dark:bg-theme-primary/10 text-theme-primary font-semibold text-xs hover:bg-theme-primary hover:text-white transition-all duration-300 group/btn mt-auto"
                  >
                    <span>{prof.actionText}</span>
                    <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
