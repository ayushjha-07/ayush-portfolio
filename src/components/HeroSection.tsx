"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, Sparkles, Code2 } from "lucide-react";
import ParticlesBg from "./ParticlesBg";

// Custom SVG Floating Tech Stack Icons
const ReactIcon = () => (
  <svg viewBox="0 0 100 100" width="32" height="32" className="text-emerald-400 fill-none stroke-current" strokeWidth="2.5">
    <circle cx="50" cy="50" r="10" className="fill-current" />
    <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(90 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(150 50 50)" />
  </svg>
);

const CppIcon = () => (
  <svg viewBox="0 0 100 100" width="32" height="32" className="text-emerald-300 fill-none stroke-current" strokeWidth="3">
    <circle cx="50" cy="50" r="40" />
    <path d="M70 35 A25 25 0 1 0 70 65" />
    <path d="M55 50 H75 M65 40 V60" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 100 100" width="32" height="32" className="text-emerald-500 fill-current">
    <path d="M50 5C32.3 5 28 9.3 28 27H50V33H22C6.7 33 5 39.7 5 50C5 63 11 67 22 67H28V59C28 41.3 32.3 37 50 37H72V31H78C93.3 31 95 24.3 95 14C95 1 89 5 78 5H50Z" opacity="0.9" />
    <path d="M50 95C67.7 95 72 90.7 72 73H50V67H78C93.3 67 95 60.3 95 50C95 37 89 33 78 33H72V41C72 58.7 67.7 63 50 63H28V69H22C6.7 69 5 75.7 5 86C5 99 11 95 22 95H50Z" />
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 100 100" width="32" height="32" className="text-emerald-400 fill-current">
    <rect width="90" height="90" x="5" y="5" rx="10" />
    <text x="50" y="75" className="fill-slate-950 font-bold text-[45px] text-center" fontFamily="monospace">JS</text>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 100 100" width="32" height="32" className="text-emerald-600 fill-none stroke-current" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M90 50L50 90L10 50L50 10" />
    <circle cx="50" cy="50" r="10" className="fill-current text-emerald-600" />
    <circle cx="50" cy="70" r="10" className="fill-current text-emerald-600" />
    <circle cx="30" cy="50" r="10" className="fill-current text-emerald-600" />
    <path d="M50 35V60 M50 60L35 45" />
  </svg>
);

const roles = [
  "Building Scalable Web Applications",
  "React.js & Next.js Developer",
  "Java Developer",
  "Problem Solver",
  "Software Engineering Enthusiast"
];

const codeSnippet = `public class SolutionFinder {
    public static void main(String[] args) {
        Developer ayush = new Developer("Ayush Jha");
        ayush.skills = new String[]{"Java", "React", "Next.js"};
        
        // Build high-performance e-commerce apps
        ayush.buildApp("Kirana Store (React)");
        
        // Optimize complexity to O(N) or O(log N)
        ayush.solveAlgorithms(274 /* Solved */);
    }
}`;

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedCode, setTypedCode] = useState("");

  // Fix recursive typing timer loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];
    
    const tick = () => {
      if (!isDeleting) {
        setCurrentText((prev) => {
          const next = fullText.substring(0, prev.length + 1);
          if (next === fullText) {
            timer = setTimeout(() => setIsDeleting(true), 1800);
          } else {
            timer = setTimeout(tick, 60);
          }
          return next;
        });
      } else {
        setCurrentText((prev) => {
          const next = fullText.substring(0, prev.length - 1);
          if (next === "") {
            setIsDeleting(false);
            setRoleIndex((prevIdx) => (prevIdx + 1) % roles.length);
          } else {
            timer = setTimeout(tick, 30);
          }
          return next;
        });
      }
    };

    timer = setTimeout(tick, 60);
    return () => clearTimeout(timer);
  }, [roleIndex, isDeleting]);

  // Code editor animation
  useEffect(() => {
    let charIndex = 0;
    const interval = setInterval(() => {
      setTypedCode(codeSnippet.substring(0, charIndex));
      charIndex++;
      if (charIndex > codeSnippet.length) {
        setTimeout(() => {
          charIndex = 0;
        }, 3000); // pause before restart typing
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden mesh-bg"
    >
      <ParticlesBg />

      {/* Decorative Glow Orbs */}
      <div className="glow-orb-emerald top-12 left-10 animate-float opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-10 right-10 animate-float-delayed opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Info Panel - 7 Cols */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles size={12} className="animate-spin text-emerald-400" />
            <span>🟢 Open to Opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4"
          >
            Ayush Kumar Jha
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-400 dark:to-emerald-300 bg-clip-text text-transparent mb-6"
          >
            Aspiring Software Engineer | Frontend Developer | Problem Solver
          </motion.p>
 
          {/* Animated Carousel Roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-10 flex items-center mb-6"
          >
            <p className="text-base md:text-xl font-mono text-slate-800 dark:text-slate-200">
              {currentText.startsWith("Building") ? "I enjoy " : "I am " + (/^[aeiou]/i.test(currentText) ? "an " : "a ")}
              <span className="text-theme-primary font-bold">{currentText}</span>
              <span className="w-[3px] h-5 bg-emerald-600 dark:bg-emerald-400 inline-block ml-1 animate-[pulse_1s_infinite] align-middle" />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mb-6 whitespace-pre-line"
          >
            Aspiring Software Engineer and Computer Science student passionate about building modern web applications, solving complex problems, and creating impactful digital solutions.

            Experienced in React.js, Next.js, Java, and Python, I enjoy developing responsive interfaces and scalable software systems while continuously learning and contributing to innovative engineering teams.
          </motion.p>

          {/* Achievement Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
              <span>🏆</span>
              <span>Startup Bihar Award Winner</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
              <span>💼</span>
              <span>2 Internships Completed</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm">
              <span>📜</span>
              <span>9+ Certifications Earned</span>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-xl shadow-[0_4px_12px_rgba(16,185,129,0.15)] dark:shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:opacity-90 transition-all duration-200 w-full sm:w-auto"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="https://drive.google.com/file/d/18nS71h1Sl7QcVHP8YrtwlfDBXjebI-JN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-[#0f172a]/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-white font-semibold rounded-xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-200 w-full sm:w-auto"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-600 dark:text-slate-300 rounded-xl transition-all duration-200 w-full sm:w-auto"
            >
              <Mail size={16} />
              <span>Contact Me</span>
            </a>
          </motion.div>
        </div>

        {/* Right Panel - 5 Cols (Floating Icons + Terminal) */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[380px] lg:h-[450px]">
          
          {/* Orbiting Icons */}
          <div className="absolute w-56 h-56 rounded-full border border-slate-200 dark:border-white/5 flex items-center justify-center pointer-events-none">
            <div className="absolute animate-orbit-1"><ReactIcon /></div>
            <div className="absolute animate-orbit-2"><CppIcon /></div>
            <div className="absolute animate-orbit-3"><PythonIcon /></div>
            <div className="absolute animate-orbit-4"><JsIcon /></div>
            <div className="absolute animate-orbit-5"><GitIcon /></div>
          </div>

          {/* Animated coding terminal mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[90%] md:w-[380px] bg-slate-950/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-left"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] text-gray-500 flex items-center gap-1.5">
                <Code2 size={10} className="text-emerald-400" />
                SolutionFinder.java
              </span>
            </div>
 
            {/* Code editor content */}
            <div className="p-4 text-[10px] md:text-xs text-slate-300 leading-relaxed overflow-x-auto h-52 select-none">
              <pre className="text-gray-500">
                <code>
                  {typedCode}
                  <span className="w-1.5 h-3.5 bg-emerald-400 inline-block ml-0.5 animate-[pulse_0.8s_infinite] align-middle" />
                </code>
              </pre>
            </div>

            {/* Bottom logs */}
            <div className="bg-slate-900/40 px-4 py-2 text-[9px] text-gray-600 border-t border-white/5 flex justify-between select-none">
              <span>Lines: 11</span>
              <span>Language: Java</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
