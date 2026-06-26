"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Globe, Server, Brain, Zap, Link, Layout, 
  Code2, Sparkles, Target, Users, BookOpen, ChevronRight
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

// Static background particles to avoid Next.js hydration mismatches
const CAN_DO_PARTICLES = [
  { id: 1, top: "15%", left: "10%", size: 4, delay: 0 },
  { id: 2, top: "50%", left: "82%", size: 5, delay: 2 },
  { id: 3, top: "80%", left: "6%", size: 4, delay: 1.5 },
];

export default function WhatICanDo() {
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

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      desc: "Build responsive, fast, and modern web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
      icon: <Globe size={20} />
    },
    {
      id: 2,
      title: "Full Stack Development",
      desc: "Develop complete web applications using Node.js, Express.js, MongoDB, REST APIs, and JWT Authentication.",
      icon: <Server size={20} />
    },
    {
      id: 3,
      title: "Problem Solving",
      desc: "Strong foundation in Data Structures & Algorithms with 600+ coding problems solved across LeetCode, HackerRank, and CodeChef.",
      icon: <Brain size={20} />
    },
    {
      id: 4,
      title: "Performance Optimization",
      desc: "Improve application performance using lazy loading, code splitting, image optimization, and modern React best practices.",
      icon: <Zap size={20} />
    },
    {
      id: 5,
      title: "API Integration",
      desc: "Design and integrate REST APIs, authentication systems, and third-party services to build scalable applications.",
      icon: <Link size={20} />
    },
    {
      id: 6,
      title: "Responsive UI/UX",
      desc: "Create mobile-first, accessible, and visually appealing interfaces that work seamlessly across all devices.",
      icon: <Layout size={20} />
    }
  ];

  const highlights = [
    { title: "Clean & Maintainable Code", desc: "Writing modular, structured, and self-documenting code.", icon: <Code2 size={16} /> },
    { title: "Fast Learner", desc: "Rapidly adapting to new tech stacks and software patterns.", icon: <Zap size={16} /> },
    { title: "Strong Problem-Solving Skills", desc: "Solving complex computational and database latency bottlenecks.", icon: <Target size={16} /> },
    { title: "Team Collaboration", desc: "Effective communication and active sprint participation in Agile environments.", icon: <Users size={16} /> },
    { title: "Continuous Learning", desc: "Constantly exploring cloud technologies, ML routing, and frontend shifts.", icon: <BookOpen size={16} /> },
    { title: "Production-Ready Development", desc: "Shipping secure, optimized, and fully tested production releases.", icon: <Sparkles size={16} /> }
  ];

  return (
    <section
      id="what-i-can-do"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-b border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {CAN_DO_PARTICLES.map((particle) => (
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
            What I <span className="gradient-text">Can Do</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            My core expertise in designing, developing, and deploying modern software solutions.
          </p>
        </motion.div>

        {/* Services Showcase Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {services.map((service, idx) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <SpotlightCard className="h-full p-6 border border-theme-border/60 hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)] bg-slate-50/40 dark:bg-slate-900/40 rounded-2xl flex flex-col justify-between min-h-[220px] relative group overflow-hidden">
                
                {/* Floating Icon Container */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      delay: idx * 0.2
                    }}
                    className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Work With Me Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500">
              💡 Why Work With Me
            </h3>
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {highlights.map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <SpotlightCard className="p-5 border border-theme-border/60 hover:border-emerald-500/25 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                      {item.title}
                    </h4>
                    <p className="text-[10px] md:text-xs text-slate-500 dark:text-gray-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <SpotlightCard className="p-8 md:p-10 border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_25px_rgba(16,185,129,0.05)] rounded-2xl relative overflow-hidden flex flex-col items-center gap-6 group">
            {/* Ambient background glow */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0,transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Collaboration & Hiring
              </span>
              <p className="text-lg md:text-2xl font-extrabold text-slate-900 dark:text-white leading-relaxed">
                Interested in working together? Let&apos;s build something amazing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 mt-2">
              <Magnetic>
                <a
                  href="#projects"
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn cursor-pointer"
                >
                  <Sparkles size={14} />
                  <span>View Projects</span>
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn cursor-pointer"
                >
                  <span>Contact Me</span>
                  <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </Magnetic>
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
