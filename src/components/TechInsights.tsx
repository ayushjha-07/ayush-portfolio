"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Brain, Code2, Rocket, Clock, ArrowRight,
  Cpu, MessageSquare
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Static background particles to avoid Next.js hydration mismatches
const INSIGHTS_PARTICLES = [
  { id: 1, top: "18%", left: "7%", size: 4, delay: 0.2 },
  { id: 2, top: "52%", left: "80%", size: 5, delay: 1.5 },
  { id: 3, top: "82%", left: "10%", size: 4, delay: 2.5 },
];

export default function TechInsights() {
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
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const articles = [
    {
      id: 1,
      title: "Understanding Data Structures & Algorithms",
      category: "DSA",
      desc: "My approach to solving 600+ DSA problems and improving problem-solving skills.",
      readTime: "5 min",
      icon: <Brain size={20} className="text-emerald-500" />
    },
    {
      id: 2,
      title: "Building Modern Web Applications with React & Next.js",
      category: "Frontend",
      desc: "Best practices, performance optimization, and responsive UI development.",
      readTime: "7 min",
      icon: <Code2 size={20} className="text-emerald-500" />
    },
    {
      id: 3,
      title: "My Journey to Becoming a Software Engineer",
      category: "Career",
      desc: "From learning programming fundamentals to internships, live projects, and continuous improvement.",
      readTime: "6 min",
      icon: <Rocket size={20} className="text-emerald-500" />
    }
  ];

  const futureTopics = [
    "System Design",
    "Java",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "AI & Machine Learning",
    "Interview Preparation",
    "Software Engineering"
  ];

  return (
    <section
      id="tech-insights"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-b border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Decorative Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {INSIGHTS_PARTICLES.map((particle) => (
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
          <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/10">
            Tech Blog
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            Tech <span className="gradient-text">Insights</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Sharing my learning journey, technical discoveries, and software engineering insights.
          </p>
        </motion.div>

        {/* Featured Articles Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 justify-start">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Featured
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Featured Articles</h3>
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article) => (
              <motion.div key={article.id} variants={cardVariants} className="h-full">
                <SpotlightCard className="h-full p-6 border border-theme-border/60 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] bg-slate-50/40 dark:bg-slate-900/30 rounded-2xl flex flex-col justify-between min-h-[280px] relative group overflow-hidden transition-all duration-300">
                  
                  <div>
                    {/* Header: Icon & Category & Time */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                          {article.icon}
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/10">
                          {article.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-gray-500 font-mono">
                        <Clock size={12} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed font-normal">
                      {article.desc}
                    </p>
                  </div>

                  {/* Actions / Bottom Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between">
                    {/* Coming Soon Indicator */}
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-amber-500/80 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                      Coming Soon
                    </span>
                    
                    {/* Read More Button (Disabled with styled look) */}
                    <button
                      disabled
                      title="Article publishing in progress"
                      className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-slate-200/60 dark:border-white/5 bg-slate-100/50 dark:bg-white/3 text-slate-400 dark:text-gray-500 text-[10px] font-bold cursor-not-allowed select-none transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight size={10} />
                    </button>
                  </div>

                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Future Topics Chips */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 justify-start">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Frontiers
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Future Topics</h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerVariants}
            className="flex flex-wrap gap-3 max-w-4xl"
          >
            {futureTopics.map((topic) => (
              <motion.div
                key={topic}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                }}
                className="relative group cursor-help select-none"
              >
                {/* Coming Soon Tooltip Description */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-950/95 border border-emerald-500/20 text-emerald-400 text-[9px] font-mono rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 shadow-md text-center z-30 whitespace-nowrap">
                  Future Post Planned 🚀
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
                </div>

                <div className="py-2 px-4 rounded-xl text-xs font-bold font-mono transition-all duration-300 border border-theme-border/60 hover:border-emerald-500/30 hover:shadow-[0_0_12px_rgba(16,185,129,0.06)] bg-slate-50/30 dark:bg-slate-900/20 text-slate-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 flex items-center gap-2">
                  <Cpu size={12} className="opacity-65" />
                  <span>{topic}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <SpotlightCard className="p-8 border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.06)] rounded-2xl relative overflow-hidden flex flex-col items-center gap-4 group">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0,transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-3">
              <MessageSquare size={18} className="text-emerald-500 animate-pulse" />
              
              <blockquote className="text-sm md:text-lg font-bold italic text-slate-900 dark:text-slate-100 leading-relaxed font-sans max-w-2xl px-4">
                &ldquo;The best way to learn is to build. The second best way is to share what you&apos;ve learned.&rdquo;
              </blockquote>

              <div className="h-[1px] w-12 bg-emerald-500/30 mt-2" />
            </div>

          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
