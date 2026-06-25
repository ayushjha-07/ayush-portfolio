"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Laptop, Rocket, Briefcase, Award, Cloud, Sprout, Target, Code2, Users, Zap, RefreshCw, TrendingUp } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import Image from "next/image";
import Magnetic from "./Magnetic";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });

  const highlights = [
    { icon: <Laptop size={18} className="text-emerald-400" />, text: "600+ DSA Solved" },
    { icon: <Rocket size={18} className="text-emerald-400" />, text: "5 Live Projects" },
    { icon: <Briefcase size={18} className="text-emerald-400" />, text: "2 Internships" },
    { icon: <Award size={18} className="text-emerald-400" />, text: "9+ Certifications" },
    { icon: <Cloud size={18} className="text-emerald-400" />, text: "Cloud & AI" },
    { icon: <Sprout size={18} className="text-emerald-400" />, text: "Always Learning" },
  ];

  const skills = [
    "React.js",
    "Next.js",
    "Java",
    "Python",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "Git & GitHub"
  ];

  const strengths = [
    { icon: <Target size={20} className="text-emerald-400" />, title: "Problem Solving", desc: "Tackling algorithmic complexity with optimized solutions." },
    { icon: <Code2 size={20} className="text-emerald-400" />, title: "Clean Code", desc: "Writing readable, maintainable, and well-structured code." },
    { icon: <Users size={20} className="text-emerald-400" />, title: "Teamwork", desc: "Working smoothly across teams with clear communication." },
    { icon: <Zap size={20} className="text-emerald-400" />, title: "Fast Learner", desc: "Rapidly picking up new frameworks and languages." },
    { icon: <RefreshCw size={20} className="text-emerald-400" />, title: "Adaptability", desc: "Comfortable shifting between frontend and backend." },
    { icon: <TrendingUp size={20} className="text-emerald-400" />, title: "Growth", desc: "Constantly refining coding standards and workflows." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden text-theme-text transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-theme-card/30 backdrop-blur-md border border-emerald-500/10 shadow-theme-card relative overflow-hidden"
          >
            {/* Top border neon line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />
            
            {/* Circular Profile Image with Glowing Border */}
            <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-emerald-500 to-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.2)] flex items-center justify-center mb-5">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-950 dark:border-slate-900">
                <Image
                  src="/assets/profile.jpg"
                  alt="Ayush Kumar Jha"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Pulse Ring Overlay */}
              <span className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 dark:border-slate-900 animate-pulse" />
            </div>

            {/* Profile Info */}
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">Ayush Kumar Jha</h3>
            <p className="text-sm font-mono text-emerald-500 dark:text-emerald-400 font-semibold mb-4">Software Engineer</p>

            {/* Status Pill */}
            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>{"Available for Internships & Full-Time Roles"}</span>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex gap-4">
              <Magnetic>
                <a
                  href="mailto:jhaayushkumar18@gmail.com"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-300 shadow-sm cursor-pointer"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://github.com/ayushjha-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-300 shadow-sm cursor-pointer"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://linkedin.com/in/ayushjha07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-300 shadow-sm cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right Column: Detailed breakdowns */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed bg-theme-card/10 p-5 rounded-2xl border border-emerald-500/5 backdrop-blur-sm shadow-theme-card">
                I am a passionate Software Engineer specializing in React, Next.js, Java, and modern web technologies. I enjoy building scalable applications, solving challenging problems, and creating user-friendly digital experiences. With 600+ DSA problems solved, 5 live deployed projects, and internship experience, I continuously strive to improve my technical and problem-solving skills.
              </p>
            </motion.div>

            {/* Quick Highlights */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">Quick Highlights</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {highlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.05 }}
                    whileHover={{ y: -4, borderColor: "rgba(16,185,129,0.35)", boxShadow: "0 0 20px rgba(16,185,129,0.12)" }}
                    className="p-3 rounded-xl bg-theme-card/25 backdrop-blur-sm border border-emerald-500/10 shadow-theme-card flex items-center gap-2.5 transition-colors duration-300"
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: idx * 0.15 }}
                      className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-[10px] md:text-xs text-slate-800 dark:text-slate-300 font-medium leading-tight">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technical Focus */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">Technical Focus</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.03 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(16,185,129,0.45)", backgroundColor: "rgba(16,185,129,0.08)" }}
                    className="px-3 py-1.5 text-xs font-semibold rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 cursor-default select-none transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Personal Strengths */}
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-bold">Personal Strengths</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {strengths.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + idx * 0.05 }}
                    whileHover={{ y: -4, borderColor: "rgba(16,185,129,0.35)", boxShadow: "0 0 20px rgba(16,185,129,0.12)" }}
                    className="p-4 rounded-xl bg-theme-card/25 backdrop-blur-sm border border-emerald-500/10 shadow-theme-card flex flex-col gap-2 transition-colors duration-300"
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: idx * 0.15 }}
                      className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h5 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white leading-tight mb-0.5">{item.title}</h5>
                      <p className="text-[9px] md:text-[10px] text-theme-text-sec/80 leading-normal">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
