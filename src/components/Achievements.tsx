"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Trophy, Lightbulb, Zap, Award, Flame, ExternalLink, 
  Cpu, BookOpen, Briefcase, Code2, GraduationCap 
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface Achievement {
  id: number;
  title: string;
  category: string;
  achievement: string;
  link: string;
  icon: React.ReactNode;
  badge: string;
  color: string;
  featured?: boolean;
}

interface TimelineItem {
  year: string;
  title: string;
  subtitle?: string;
  desc: string;
}

export default function Achievements() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const achievementsData: Achievement[] = [
    {
      id: 1,
      title: "Startup Bihar Initiative",
      category: "Innovation",
      achievement: "Awarded 3rd Position for presenting an innovative business and technology-driven solution.",
      link: "https://drive.google.com/file/d/1HvJlOqvx8PCdZBrrEwVrEERo6Prm833x/view?usp=drivesdk",
      icon: <Lightbulb size={24} className="text-amber-500" />,
      badge: "3rd Position – Ideation Award",
      color: "border-amber-500/20 hover:border-amber-500/40",
      featured: true,
    },
    {
      id: 2,
      title: "State-Level Volleyball Champion",
      category: "Leadership & Sports",
      achievement: "Secured 1st Position while representing the institution at the state level.",
      link: "https://drive.google.com/file/d/1Vb35swtetb0xmS_LG83ceOXWx-E4Cb1s/view?usp=drivesdk",
      icon: <Zap size={24} className="text-emerald-500" />,
      badge: "1st Position",
      color: "border-emerald-500/20 hover:border-emerald-500/40",
      featured: true,
    },
    {
      id: 3,
      title: "AMCAT Computer Science",
      category: "Academic Excellence",
      achievement: "Achieved a perfect 100/100 score in Computer Science.",
      link: "https://drive.google.com/file/d/1JC1Lw9weO03-8BZSHPtG2AteYyNNKoKB/view?usp=drivesdk",
      icon: <Award size={24} className="text-cyan-500" />,
      badge: "100/100 Score",
      color: "border-cyan-500/20 hover:border-cyan-500/40",
      featured: true,
    },
    {
      id: 4,
      title: "Algorithmic Problem Solving",
      category: "Technical Achievement",
      achievement: "Solved coding challenges across LeetCode, HackerRank, and CodeChef while strengthening problem-solving skills.",
      link: "https://github.com/ayushjha-07",
      icon: <Flame size={24} className="text-rose-500" />,
      badge: "Competitive Coding",
      color: "hover:border-rose-500/30",
    },
    {
      id: 5,
      title: "CBSE Information Technology",
      category: "Certification",
      achievement: "Completed Information Technology coursework and digital skills training.",
      link: "https://drive.google.com/file/d/1k155jkMrIsoJM5DYj8rLYrhfsAnnna7u/view?usp=drivesdk",
      icon: <Cpu size={24} className="text-purple-500" />,
      badge: "IT Skills Course",
      color: "hover:border-purple-500/30",
    },
  ];

  const timelineData: TimelineItem[] = [
    {
      year: "2021",
      title: "CBSE Information Technology Course",
      desc: "Completed foundational IT skills coursework, gaining introductory digital and systems knowledge.",
    },
    {
      year: "2023",
      title: "State-Level Volleyball Champion & CIPET Internship",
      desc: "Won 1st Position representing the institution at the state volleyball tournament. Completed an industrial internship at CIPET focusing on manufacturing systems.",
    },
    {
      year: "2024",
      title: "Started B.Tech CSE",
      desc: "Began rigorous undergraduate studies in CSE, diving deep into computer systems, object-oriented concepts, and algorithmic foundations.",
    },
    {
      year: "2025",
      title: "A2IT Web Development Internship & Professional Certifications",
      desc: "Completed an internship at A2IT gaining hands-on web development experience. Earned certifications from Cisco, Infosys, and MongoDB.",
    },
    {
      year: "2026",
      title: "Portfolio Development & Software Engineering Prep",
      desc: "Engineered high-end responsive portfolio, actively solved data structures and algorithmic problems on LeetCode/HackerRank, preparing for software engineering roles.",
    },
  ];

  const featuredAchievements = achievementsData.filter((a) => a.featured);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: idx * 0.08, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  const bannerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden text-theme-text border-b border-theme-border transition-colors duration-300">
      {/* Floating Ambient Glow Background */}
      <div className="glow-orb-emerald top-1/4 left-0 opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-0 opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Title Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Achievements & Awards</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Milestones, accomplishments, and recognitions that reflect my technical growth, leadership, and commitment to excellence.
          </p>
        </div>

        {/* Statistics Banner */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={bannerVariants}
          className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">9+</span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider block">Certifications</span>
          </div>
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">3+</span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider block">Awards</span>
          </div>
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">3+</span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider block">Projects</span>
          </div>
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">2</span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider block">Internships</span>
          </div>
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)] col-span-2 lg:col-span-1">
            <span className="text-2xl md:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">274+</span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider block">Solved Problems</span>
          </div>
        </motion.div>

        {/* Featured Achievements */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full">Highlight</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Featured Achievements</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredAchievements.map((item, idx) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <SpotlightCard className={`p-8 h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)] dark:hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] relative bg-slate-50/60 dark:bg-slate-900/60 ${item.color}`}>
                  <div>
                    {/* Top Row with Icon & Category */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                        {item.icon}
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-4 uppercase tracking-wide">
                      {item.badge}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed mb-6">
                      {item.achievement}
                    </p>
                  </div>

                  {/* CTA link */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-4 group-hover:translate-x-1 transition-transform duration-300">
                    <span>Verify Accomplishment</span>
                    <ExternalLink size={12} />
                  </div>
                </SpotlightCard>
              </a>
            ))}
          </div>
        </div>

        {/* Regular Achievements Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full">Explore</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Additional Achievements</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievementsData.filter(a => !a.featured).map((item, idx) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <SpotlightCard className={`p-6 h-full flex flex-col justify-between transition-all duration-300 relative ${item.color} bg-slate-50/40 dark:bg-slate-900/40`}>
                  <div className="flex gap-5 items-start mt-2">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {item.icon}
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <h4 className="text-md font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 truncate">
                          {item.title}
                        </h4>
                        <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                        {item.achievement}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform duration-300 mt-4 pl-17">
                    <span>Verify Credentials</span>
                    <ExternalLink size={11} />
                  </div>
                </SpotlightCard>
              </a>
            ))}
          </div>
        </div>

        {/* Visual Timeline */}
        <div className="mt-24">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full">Timeline</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Journey & Milestones</h3>
          </div>

          <div className="relative border-l border-slate-200 dark:border-white/5 pl-8 ml-4 flex flex-col gap-10">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* Bullet node */}
                <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-950 border border-emerald-500 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                {/* Year Badge */}
                <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  {item.year}
                </span>
                {/* Milestones list */}
                <div className="mt-3">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  {item.desc && (
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 leading-relaxed max-w-3xl">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
