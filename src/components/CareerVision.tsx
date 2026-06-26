"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Target, Brain, Laptop, GitBranch, Cloud, Layers, Users, TrendingUp,
  GraduationCap, Code2, Rocket, Globe, BookOpen, Lightbulb, CheckCircle2,
  ShieldCheck, Star, Compass
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Static background particles to avoid Next.js hydration mismatches
const VISION_PARTICLES = [
  { id: 1, top: "15%", left: "8%", size: 4, delay: 0.3 },
  { id: 2, top: "48%", left: "82%", size: 5, delay: 1.6 },
  { id: 3, top: "78%", left: "6%", size: 4, delay: 2.1 },
];

export default function CareerVision() {
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

  const shortTermGoals = [
    { text: "Secure a Software Engineering role", icon: <Target size={16} /> },
    { text: "Solve 1000+ DSA problems", icon: <Brain size={16} /> },
    { text: "Build 10+ production-ready projects", icon: <Laptop size={16} /> },
    { text: "Contribute to open-source projects", icon: <GitBranch size={16} /> }
  ];

  const midTermGoals = [
    { text: "Become proficient in Cloud & System Design", icon: <Cloud size={16} /> },
    { text: "Build scalable enterprise applications", icon: <Layers size={16} /> },
    { text: "Mentor aspiring developers", icon: <Users size={16} /> },
    { text: "Lead full-stack development projects", icon: <TrendingUp size={16} /> }
  ];

  const roadmapSteps = [
    { name: "Learn", icon: <GraduationCap size={22} />, desc: "Acquiring foundation skills and exploring state-of-the-art libraries." },
    { name: "Build", icon: <Code2 size={22} />, desc: "Applying engineering patterns, architectures, and testing strategies." },
    { name: "Deploy", icon: <Rocket size={22} />, desc: "Scaling systems in cloud systems through automated pipelines." },
    { name: "Collaborate", icon: <Users size={22} />, desc: "Participating in sprint loops and aligning in high-paced dev teams." },
    { name: "Contribute", icon: <Globe size={22} />, desc: "Submitting upstream patches and contributing to the open ecosystem." },
    { name: "Lead", icon: <Compass size={22} />, desc: "Guiding design frameworks and directing system architectures." }
  ];

  const coreValues = [
    { name: "Continuous Learning", desc: "Always exploring documentation, updates, and academic releases.", icon: <BookOpen size={20} /> },
    { name: "Problem Solving", desc: "Tackling structural computational issues and analytical puzzles.", icon: <Target size={20} /> },
    { name: "Innovation", desc: "Formulating modern product ideas and exploring cloud algorithms.", icon: <Lightbulb size={20} /> },
    { name: "Collaboration", desc: "Working in agile sprint frames and communicating architectures clearly.", icon: <Users size={20} /> },
    { name: "Quality", desc: "Writing modular, self-documenting code with unit tests.", icon: <CheckCircle2 size={20} /> },
    { name: "Integrity", desc: "Securing keys, respecting credentials, and maintaining code standards.", icon: <ShieldCheck size={20} /> }
  ];

  return (
    <section
      id="career-vision"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-b border-theme-border transition-colors duration-300 bg-theme-bg/5"
    >
      {/* Decorative Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {VISION_PARTICLES.map((particle) => (
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
            Roadmap & Goals
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            Career Vision & <span className="gradient-text">Goals</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            My roadmap for continuous growth as a Software Engineer.
          </p>
        </motion.div>

        {/* Short & Mid Term Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Short-Term Goals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="p-6 md:p-8 border border-theme-border/60 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] bg-slate-50/40 dark:bg-slate-900/30 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200/50 dark:border-white/5">
                <span className="text-xl">🎯</span>
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white">
                  Short-Term Goals <span className="text-xs text-slate-400 dark:text-gray-500 font-mono block lg:inline lg:ml-2">(1–2 Years)</span>
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {shortTermGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 group/item py-2 px-3 rounded-xl hover:bg-slate-200/30 dark:hover:bg-white/5 border border-transparent hover:border-emerald-500/10 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover/item:scale-110 transition-transform">
                      {goal.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover/item:text-emerald-500 dark:group-hover/item:text-emerald-400 transition-colors">
                      {goal.text}
                    </span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.div>

          {/* Mid-Term Goals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="p-6 md:p-8 border border-theme-border/60 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] bg-slate-50/40 dark:bg-slate-900/30 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200/50 dark:border-white/5">
                <span className="text-xl">🚀</span>
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white">
                  Mid-Term Goals <span className="text-xs text-slate-400 dark:text-gray-500 font-mono block lg:inline lg:ml-2">(3–5 Years)</span>
                </h3>
              </div>
              <ul className="flex flex-col gap-4">
                {midTermGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 group/item py-2 px-3 rounded-xl hover:bg-slate-200/30 dark:hover:bg-white/5 border border-transparent hover:border-emerald-500/10 transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover/item:scale-110 transition-transform">
                      {goal.icon}
                    </div>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover/item:text-emerald-500 dark:group-hover/item:text-emerald-400 transition-colors">
                      {goal.text}
                    </span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </motion.div>

        </div>

        {/* Long-Term Vision Featured Card */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="p-8 md:p-10 border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_25px_rgba(16,185,129,0.06)] rounded-2xl relative overflow-hidden flex flex-col items-center text-center gap-4">
              {/* Soft Ambient glowing core */}
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0,transparent_60%)] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                  Long-Term Vision
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white leading-relaxed">
                  Vision Statement
                </h3>
                <p className="text-base md:text-lg font-bold italic text-slate-800 dark:text-slate-200 leading-relaxed font-sans max-w-3xl px-4 mt-2">
                  &ldquo;To become a skilled Software Engineer who builds scalable, impactful products that solve real-world problems while continuously learning and contributing to the developer community.&rdquo;
                </p>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Growth Roadmap Timeline */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 justify-start">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Roadmap
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Growth Roadmap</h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative"
          >
            {roadmapSteps.map((step, idx) => (
              <motion.div key={idx} variants={cardVariants} className="relative flex flex-col items-center">
                
                {/* Step Card */}
                <SpotlightCard className="w-full p-5 h-full flex flex-col items-center text-center justify-between border-theme-border/60 bg-slate-50/40 dark:bg-slate-900/30 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.06)] relative group">
                  {/* Step Num */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono font-bold text-slate-300 dark:text-slate-700">
                    {`0${idx + 1}`}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all duration-300">
                    {step.icon}
                  </div>

                  {/* Text */}
                  <div className="mt-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white tracking-wide block mb-1.5 group-hover:text-emerald-500 transition-colors">
                      {step.name}
                    </span>
                    <p className="text-[10px] text-slate-500 dark:text-gray-400 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </SpotlightCard>

                {/* Arrow Connector for Desktop (only show between cards in lg view) */}
                {idx < roadmapSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-3.5 z-20 text-emerald-500/50 hover:text-emerald-500 transition-colors duration-300">
                    <span className="text-lg font-bold">➔</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 justify-start">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Principles
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Core Values</h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreValues.map((value, idx) => (
              <motion.div key={idx} variants={cardVariants}>
                <SpotlightCard className="p-5 border border-theme-border/60 hover:border-emerald-500/25 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/30 rounded-xl flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                      {value.name}
                    </h4>
                    <p className="text-[10px] md:text-xs text-slate-500 dark:text-gray-400 leading-relaxed font-normal">
                      {value.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Closing Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <SpotlightCard className="p-8 border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.06)] rounded-2xl relative overflow-hidden flex flex-col items-center gap-4 group">
            
            {/* Soft Ambient glowing core */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0,transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-3">
              <Star size={16} className="text-emerald-500 animate-pulse" />
              
              <blockquote className="text-sm md:text-lg font-bold italic text-slate-900 dark:text-slate-100 leading-relaxed font-sans max-w-2xl px-4">
                &ldquo;Every project I build and every problem I solve brings me one step closer to becoming the engineer I aspire to be.&rdquo;
              </blockquote>

              <div className="h-[1px] w-12 bg-emerald-500/30 mt-2" />
            </div>

          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
