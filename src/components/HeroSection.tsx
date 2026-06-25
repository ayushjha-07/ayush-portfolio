"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, ArrowRight, Mail, Sparkles, Code2, Terminal, FolderGit, Briefcase, Award, ExternalLink } from "lucide-react";
import { Github } from "./BrandIcons";
import ParticlesBg from "./ParticlesBg";
import Magnetic from "./Magnetic";
import confetti from "canvas-confetti";

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
  "React.js Developer",
  "Next.js Developer",
  "Java Programmer",
  "Problem Solver",
  "Open Source Learner"
];

// Custom CountUp Component
function CountUp({ end, duration = 1.5, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endVal = end;
    const totalSteps = 45;
    const stepIncrement = endVal / totalSteps;
    const stepTime = (duration * 1000) / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= endVal) {
        setCount(endVal);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Showcase Tabs State
  const [activeTab, setActiveTab] = useState<"code" | "project" | "github" | "terminal">("code");

  // Terminal Tab State
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [terminalTypingComplete, setTerminalTypingComplete] = useState(false);

  // Tab Change Handler
  const handleTabChange = (tab: "code" | "project" | "github" | "terminal") => {
    setActiveTab(tab);
    if (tab === "terminal") {
      setTerminalLines([]);
      setTerminalTypingComplete(false);
    }
  };

  // Mouse Parallax & Background Glow
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Rotating roles sequence handler
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[roleIndex];

    const tick = () => {
      if (!isDeleting) {
        setCurrentText((prev) => {
          const next = fullText.substring(0, prev.length + 1);
          if (next === fullText) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
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

    timer = setTimeout(tick, 80);
    return () => clearTimeout(timer);
  }, [roleIndex, isDeleting]);

  // Terminal simulator handler
  useEffect(() => {
    if (activeTab !== "terminal") return;

    const lines = [
      "ayush@portfolio:~$ npm run dev",
      "ready - started server on 0.0.0.0:3000, url: http://localhost:3000",
      "info  - compiling...",
      "event - compiled client and server successfully in 942ms (1247 modules)",
      "info  - creating production build...",
      "✓ Build successful!",
      "✓ Portfolio deployed to Render (ayush-portfolio-anbm.onrender.com)",
      "🟢 Ready for recruiters!"
    ];

    let currentIdx = 0;
    const initTimer = setTimeout(() => {
      setTerminalLines([lines[0]]);
      setTerminalTypingComplete(false);
    }, 0);

    const interval = setInterval(() => {
      currentIdx++;
      if (currentIdx < lines.length) {
        setTerminalLines((prev) => [...prev, lines[currentIdx]]);
      } else {
        setTerminalTypingComplete(true);
        clearInterval(interval);
      }
    }, 700);

    return () => {
      clearTimeout(initTimer);
      clearInterval(interval);
    };
  }, [activeTab]);

  // Handle Mouse Parallax & Aura Glow
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setCursorPos({ x: clientX, y: clientY });

    const x = (clientX - window.innerWidth / 2) / 35;
    const y = (clientY - window.innerHeight / 2) / 35;
    setTilt({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Live Project Confetti Trigger
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#10b981", "#34d399", "#059669", "#ffffff"]
    });
  };

  // Title Text Split for Reveal
  const titleText = "Software Engineer | React • Next.js • Java Developer";

  // Github Grid Simulation Generation
  const generateGitHubGrid = () => {
    const grid = [];
    const opacities = [0.08, 0.15, 0.35, 0.65, 0.95];
    for (let i = 0; i < 112; i++) {
      // Deterministic pseudorandom value based on index
      const val = (i * 17 + 23) % 100;
      let opacityIdx = 0;
      if (val > 85) opacityIdx = 4;
      else if (val > 65) opacityIdx = 3;
      else if (val > 45) opacityIdx = 2;
      else if (val > 15) opacityIdx = 1;
      grid.push(opacities[opacityIdx]);
    }
    return grid;
  };
  const githubGrid = React.useMemo(() => generateGitHubGrid(), []);

  return (
    <section
      id="hero"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden mesh-bg"
    >
      <ParticlesBg />

      {/* Decorative Aura following cursor */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(16, 185, 129, 0.08), transparent 80%)`,
        }}
      />

      {/* Decorative Glow Orbs */}
      <div className="glow-orb-emerald top-12 left-10 animate-float opacity-[var(--glow-opacity)] transition-opacity duration-300 z-0" />
      <div className="glow-orb-emerald bottom-10 right-10 animate-float-delayed opacity-[var(--glow-opacity)] transition-opacity duration-300 z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Info Panel - 7 Cols */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Recruiter-focused Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] md:text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
          >
            <Sparkles size={12} className="animate-spin text-emerald-400" />
            <span>🟢 Available for Software Engineering Internships &amp; Full-Time Roles</span>
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest mb-2"
          >
            AYUSH KUMAR JHA
          </motion.h2>

          {/* Title with word-by-word reveal */}
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            {titleText.split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mb-4"
          >
            Building scalable web applications, solving complex algorithmic problems, and creating modern user experiences.
          </motion.p>
 
          {/* Typing Animation Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-8 flex items-center mb-6"
          >
            <p className="text-base md:text-lg font-mono text-slate-800 dark:text-slate-200">
              I am a <span className="text-emerald-500 dark:text-emerald-400 font-bold">{currentText}</span>
              <span className="w-[2.5px] h-4.5 bg-emerald-600 dark:bg-emerald-400 inline-block ml-1 animate-[pulse_1s_infinite] align-middle" />
            </p>
          </motion.div>

          {/* 4 Animated Statistic Cards */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-lg mb-8 text-left">
            
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.03, borderColor: "rgba(16,185,129,0.3)" }}
              className="p-4 rounded-xl bg-theme-card/30 backdrop-blur-md border border-theme-border shadow-theme-card flex items-center gap-3 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Code2 size={18} />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold font-mono text-slate-900 dark:text-white leading-none">
                  <CountUp end={270} suffix="+" />
                </h4>
                <p className="text-[10px] text-theme-text-sec/80 font-medium">DSA Problems Solved</p>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03, borderColor: "rgba(16,185,129,0.3)" }}
              className="p-4 rounded-xl bg-theme-card/30 backdrop-blur-md border border-theme-border shadow-theme-card flex items-center gap-3 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <FolderGit size={18} />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold font-mono text-slate-900 dark:text-white leading-none">
                  <CountUp end={3} />
                </h4>
                <p className="text-[10px] text-theme-text-sec/80 font-medium">Live Projects</p>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03, borderColor: "rgba(16,185,129,0.3)" }}
              className="p-4 rounded-xl bg-theme-card/30 backdrop-blur-md border border-theme-border shadow-theme-card flex items-center gap-3 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Briefcase size={18} />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold font-mono text-slate-900 dark:text-white leading-none">
                  <CountUp end={2} />
                </h4>
                <p className="text-[10px] text-theme-text-sec/80 font-medium">Internships Completed</p>
              </div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.03, borderColor: "rgba(16,185,129,0.3)" }}
              className="p-4 rounded-xl bg-theme-card/30 backdrop-blur-md border border-theme-border shadow-theme-card flex items-center gap-3 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Award size={18} />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold font-mono text-slate-900 dark:text-white leading-none">
                  <CountUp end={9} suffix="+" />
                </h4>
                <p className="text-[10px] text-theme-text-sec/80 font-medium">Certifications Earned</p>
              </div>
            </motion.div>

          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
          >
            {/* View Projects */}
            <Magnetic>
              <a
                href="#projects"
                className="relative group overflow-hidden flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.35)] transition-all duration-300 w-full sm:w-80 lg:w-auto text-center cursor-pointer transform hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>View Projects</span>
                  <ArrowRight size={16} />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </a>
            </Magnetic>

            {/* Download Resume */}
            <Magnetic>
              <a
                href="https://drive.google.com/file/d/18nS71h1Sl7QcVHP8YrtwlfDBXjebI-JN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden flex items-center justify-center gap-2 px-6 py-3.5 bg-white dark:bg-[#0f172a]/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-white font-semibold rounded-xl transition-all duration-300 w-full sm:w-80 lg:w-auto text-center cursor-pointer transform hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download size={16} />
                  <span>Download Resume</span>
                </span>
                <div className="absolute inset-0 bg-emerald-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </a>
            </Magnetic>

            {/* Let's Connect */}
            <Magnetic>
              <a
                href="#contact"
                className="relative group overflow-hidden flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-600 dark:text-slate-300 rounded-xl transition-all duration-300 w-full sm:w-80 lg:w-auto text-center cursor-pointer transform hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={16} />
                  <span>Let&apos;s Connect</span>
                </span>
                <div className="absolute inset-0 bg-emerald-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
              </a>
            </Magnetic>
          </motion.div>

        </div>

        {/* Right Panel - 5 Cols (Floating Icons + Interactive Tab Showcase) */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[420px] lg:h-[480px]">
          
          {/* Orbiting Tech Stack Icons */}
          <div className="absolute w-64 h-64 rounded-full border border-slate-200/40 dark:border-white/5 flex items-center justify-center pointer-events-none z-0">
            <div className="absolute animate-orbit-1"><ReactIcon /></div>
            <div className="absolute animate-orbit-2"><CppIcon /></div>
            <div className="absolute animate-orbit-3"><PythonIcon /></div>
            <div className="absolute animate-orbit-4"><JsIcon /></div>
            <div className="absolute animate-orbit-5"><GitIcon /></div>
          </div>

          {/* Interactive Card Showcase with Mouse Parallax Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[92%] md:w-[400px] bg-slate-950/85 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.65)] overflow-hidden font-mono text-left z-10"
            style={{
              transform: `perspective(1000px) rotateX(${-tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.01, 1.01, 1.01)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            {/* Header / Tabs Selection */}
            <div className="bg-white/5 border-b border-white/5 p-2 flex flex-col gap-2">
              <div className="flex items-center justify-between px-2 py-1">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest">Recruiter Hub v1.0</span>
              </div>
              
              {/* Tab Buttons */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-950/50 rounded-lg">
                {(["code", "project", "github", "terminal"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`relative py-1.5 text-[10px] font-bold rounded-md transition-colors duration-200 cursor-pointer ${
                      activeTab === tab
                        ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/25"
                        : "text-gray-400 hover:text-slate-200 hover:bg-white/5"
                    }`}
                  >
                    <span className="capitalize">{tab === "project" ? "Live App" : tab}</span>
                  </button>
                ))}
              </div>
            </div>
 
            {/* Display Window */}
            <div className="p-5 h-56 select-none overflow-y-auto bg-slate-950/90 text-[10px] md:text-xs">
              
              {/* Tab 1: Code */}
              {activeTab === "code" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-1 text-slate-300 leading-normal"
                >
                  <div><span className="text-pink-500 font-semibold">public class</span> <span className="text-emerald-400">Developer</span> {'{'}</div>
                  <div className="pl-4"><span className="text-pink-500">private String</span> name = <span className="text-emerald-300">{"\"Ayush Kumar Jha\""}</span>;</div>
                  <div className="pl-4"><span className="text-pink-500">private String[]</span> skills = {'{'} <span className="text-emerald-300">{"\"React\""}</span>, <span className="text-emerald-300">{"\"Next.js\""}</span>, <span className="text-emerald-300">{"\"Java\""}</span> {'}'};</div>
                  <div className="pl-4"><span className="text-pink-500">private int</span> dsaProblemsSolved = <span className="text-amber-400 font-bold">270</span>;</div>
                  <div className="pl-4"><span className="text-pink-500">private boolean</span> readyToContribute = <span className="text-blue-400">true</span>;</div>
                  <br />
                  <div className="pl-4"><span className="text-pink-500">public void</span> <span className="text-blue-400">buildAwesomeUI</span>() {'{'}</div>
                  <div className="pl-8"><span className="text-slate-400">{"// Delivering performant web experiences"}</span></div>
                  <div className="pl-8"><span className="text-emerald-400">System</span>.out.println(<span className="text-emerald-300">{"\"Ready for internships!\""}</span>);</div>
                  <div className="pl-4">{'}'}</div>
                  <div>{'}'}</div>
                </motion.div>
              )}

              {/* Tab 2: Live Project */}
              {activeTab === "project" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-200 text-xs md:text-sm">HostelHub Premium</span>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        LIVE
                      </span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-[11px]">
                      A robust student housing platform with search filters, real-time booking, and custom analytics dashboard.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    <button
                      onClick={triggerConfetti}
                      className="w-full py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_2px_10px_rgba(16,185,129,0.2)] hover:scale-[1.02] cursor-pointer"
                    >
                      <Sparkles size={12} />
                      <span>Test Live Celebration</span>
                    </button>
                    <div className="flex items-center justify-between text-[9px] text-gray-500">
                      <span>Stack: React • Flask • Postgres</span>
                      <a
                        href="https://github.com/ayushjha-07/ayush-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-emerald-400 hover:underline"
                      >
                        Source <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: GitHub */}
              {activeTab === "github" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-200">
                      <Github size={16} />
                      <span className="font-bold">ayushjha-07</span>
                    </div>
                    <span className="text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-full font-bold">
                      1,200+ Contributions
                    </span>
                  </div>

                  {/* Contributions Calendar Grid Simulation */}
                  <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] gap-1 p-2 bg-slate-900/50 border border-white/5 rounded-lg">
                    {githubGrid.map((opacity, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (idx % 16) * 0.015, duration: 0.3 }}
                        className="w-2 h-2 rounded-sm"
                        style={{
                          backgroundColor: "#10b981",
                          opacity: opacity
                        }}
                        title={`Activity level: ${opacity}`}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-[9px]">
                    <div className="bg-white/5 rounded p-1 border border-white/5">
                      <div className="font-bold text-emerald-400 font-mono">20+</div>
                      <div className="text-gray-500">Repos</div>
                    </div>
                    <div className="bg-white/5 rounded p-1 border border-white/5">
                      <div className="font-bold text-emerald-400 font-mono">99%</div>
                      <div className="text-gray-500">Code Quality</div>
                    </div>
                    <div className="bg-white/5 rounded p-1 border border-white/5">
                      <div className="font-bold text-emerald-400 font-mono">TypeScript</div>
                      <div className="text-gray-500">Favorite Lang</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Tab 4: Terminal */}
              {activeTab === "terminal" && (
                <div className="space-y-1.5 font-mono leading-relaxed text-slate-300 animate-[fade-in_0.3s_ease]">
                  {terminalLines.map((line, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`${
                        line.startsWith("✓") || line.startsWith("🟢")
                          ? "text-emerald-400 font-bold"
                          : line.startsWith("ready") || line.startsWith("info") || line.startsWith("event")
                          ? "text-slate-400"
                          : "text-slate-200"
                      }`}
                    >
                      {line}
                    </motion.div>
                  ))}
                  {!terminalTypingComplete && (
                    <span className="w-1.5 h-3 bg-emerald-400 inline-block animate-pulse align-middle ml-1" />
                  )}
                </div>
              )}

            </div>

            {/* Bottom Panel Metadata */}
            <div className="bg-slate-900/60 px-4 py-2 border-t border-white/5 flex items-center justify-between text-[9px] text-gray-500 select-none">
              <span className="flex items-center gap-1">
                <Terminal size={10} className="text-emerald-500" />
                <span>active_tab: {activeTab}</span>
              </span>
              <span>UTF-8</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
