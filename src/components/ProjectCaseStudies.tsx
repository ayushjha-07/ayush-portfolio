"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ChevronDown, ChevronUp, ExternalLink, Award, CheckCircle2, 
  AlertCircle, Cpu, ShieldCheck, Zap, Smartphone, Layers, Lock, 
  Target, BookOpen, Terminal
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

// Static background particles to avoid Next.js hydration mismatches
const CASE_STUDY_PARTICLES = [
  { id: 1, top: "15%", left: "6%", size: 4, delay: 0 },
  { id: 2, top: "40%", left: "85%", size: 5, delay: 2 },
  { id: 3, top: "65%", left: "10%", size: 4, delay: 4 },
  { id: 4, top: "85%", left: "90%", size: 6, delay: 1 },
];

function GithubIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface CaseStudyItem {
  id: number;
  title: string;
  category: string;
  duration: string;
  difficulty: "Medium" | "Hard" | "Advanced";
  problemStatement: string;
  objectives: string[];
  architecture: string[];
  technologies: string[];
  features: { title: string; desc: string; icon: React.ReactNode }[];
  challenges: string;
  solutions: string;
  results: { label: string; value: string; icon: React.ReactNode }[];
  learnings: string;
  github: string;
  demo?: string;
}

export default function ProjectCaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const caseStudiesData: CaseStudyItem[] = [
    {
      id: 1,
      title: "CareerOS AI – Personalized Learning Platform",
      category: "AI/ML Full Stack",
      duration: "Jan 2024 - Apr 2024",
      difficulty: "Advanced",
      problemStatement: "Traditional academic tracks follow generic timelines that fail to adapt to individual student strengths, leaving struggling learners without support and top performers under-challenged.",
      objectives: [
        "Develop personalized recommendation pathways based on quiz history.",
        "Implement high-accuracy outcome prediction metrics using ML classifiers.",
        "Decouple heavy database queries to reduce overall API latency.",
        "Deliver mobile-responsive administrative progress panels."
      ],
      architecture: [
        "React Client (Visual Dashboard & Recharts)",
        "Node.js API Gateway (Database Controller & Session Auth)",
        "MongoDB Atlas (Student Progress & Content Collections)",
        "Python FastAPI Server (TF-IDF Vectorizer & XGBoost Predictor)"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "FastAPI", "Scikit-Learn", "XGBoost", "Tailwind CSS"],
      features: [
        { title: "AI Success Predictor", desc: "Random Forest & XGBoost model predicting score ranges from study habits.", icon: <Cpu size={16} /> },
        { title: "TF-IDF Path Recommender", desc: "suggests course tracks matching descriptive skills using cosine similarities.", icon: <Layers size={16} /> },
        { title: "AI Tutor Chatbot", desc: "Direct session chatbot capable of translating codes and generating quiz sets.", icon: <Terminal size={16} /> }
      ],
      challenges: "Computing TF-IDF vectorization and cosine similarity calculations inside the Node.js API caused noticeable request lag on larger course description loads.",
      solutions: "Built an independent AI microservice in Python using FastAPI, caching vector embeddings in memory and keeping heavy ML matrix calculations away from the client-facing Node.js server.",
      results: [
        { label: "Predictor Accuracy", value: "98%", icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
        { label: "API Speed Delay", value: "<50ms", icon: <Zap size={16} className="text-emerald-500" /> },
        { label: "Auth Validation", value: "JWT", icon: <Lock size={16} className="text-emerald-500" /> },
        { label: "UI Compatibility", value: "100%", icon: <Smartphone size={16} className="text-emerald-500" /> }
      ],
      learnings: "Mastered decoupled microservice structures, trained Random Forest and XGBoost classification models, and configured FastAPI server routing parameters.",
      github: "https://github.com/ayushjha-07/smartlearn-ai",
      demo: "https://github.com/ayushjha-07/smartlearn-ai"
    },
    {
      id: 2,
      title: "HostelHub – Premium Smart Room Management",
      category: "Full Stack Application",
      duration: "Nov 2023 - Dec 2023",
      difficulty: "Medium",
      problemStatement: "Manual room booking ledgers and physical occupant spreadsheets cause booking overlaps, delayed rent check-ins, and data loss in hostel settings.",
      objectives: [
        "Automate room occupant logging tracking statuses.",
        "Prevent concurrent double-booking write overlaps.",
        "Create responsive property control grid maps.",
        "Streamline rent ledger record collections."
      ],
      architecture: [
        "Tailwind CSS / JS Client (Glassmorphic Room Grid Viewports)",
        "Python Flask Server (Route Handlers & Security Policies)",
        "SQLite Database (Room Assets & Occupant Ledgers)",
        "Render Cloud Container (Production Environment Hosting)"
      ],
      technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      features: [
        { title: "Occupancy Grid Map", desc: "Interactive map rendering room capacities and real-time statuses.", icon: <Layers size={16} /> },
        { title: "Rent Tracking Ledger", desc: "Dynamic invoice database tracking paid, partial, or pending rents.", icon: <Zap size={16} /> },
        { title: "Visitor Auditor log", desc: "Secure visitor sign-in logs stamped with date and audit timestamps.", icon: <ShieldCheck size={16} /> }
      ],
      challenges: "Preventing race conditions when multiple admin users attempt to assign different students to the same room slot simultaneously.",
      solutions: "Configured atomic database transactions in SQLite and structured lock checks checking room limits before final booking commits.",
      results: [
        { label: "Booking Overlaps", value: "0%", icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
        { label: "Visitor Ledger Check-ins", value: "5x Fast", icon: <Zap size={16} className="text-emerald-500" /> },
        { label: "ACID Concurrency", value: "Secure", icon: <Lock size={16} className="text-emerald-500" /> },
        { label: "Database Transactions", value: "Atomic", icon: <Cpu size={16} className="text-emerald-500" /> }
      ],
      learnings: "Developed detailed understanding of ACID transaction parameters, concurrently managed database rows, and deployed Flask services to Render container pipelines.",
      github: "https://github.com/ayushjha-07/hostelhub-repo"
    },
    {
      id: 3,
      title: "Kirana Store – Grocery E-Commerce Platform",
      category: "Frontend E-Commerce",
      duration: "Oct 2023 - Nov 2023",
      difficulty: "Medium",
      problemStatement: "Local grocery vendors face difficulty transitioning inventories to clean web catalogs, resulting in lost client opportunities.",
      objectives: [
        "Build a high-performance visual catalog.",
        "Implement rapid search filters under 15ms.",
        "Persist shopper cart details across browser reloads.",
        "Ensure fluid CSS grid layouts on mobile targets."
      ],
      architecture: [
        "React Frontend (Virtual UI Catalog Cards)",
        "LocalStorage Cache Engine (Shopper Cart Data Storage)",
        "Vercel CDN Edge servers (Static Asset Pipelines)"
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vercel"],
      features: [
        { title: "10ms Catalog Search", desc: "High-speed client-side search indexing matching keyword strings.", icon: <Terminal size={16} /> },
        { title: "Dynamic Cart State", desc: "Live cart controller handling increments and price aggregates.", icon: <Zap size={16} /> },
        { title: "Product Filters", desc: "Category navigation tabs sorting catalog items instantly.", icon: <Layers size={16} /> }
      ],
      challenges: "Managing rapid cart item updates and price calculations cleanly without causing expensive page re-renders.",
      solutions: "Used customized local state triggers and optimized React component trees to update only individual item nodes on click.",
      results: [
        { label: "Catalog Search Delay", value: "<10ms", icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
        { label: "Persistent Cart Rate", value: "100%", icon: <Zap size={16} className="text-emerald-500" /> },
        { label: "Render Refreshes", value: "Minimal", icon: <Lock size={16} className="text-emerald-500" /> },
        { label: "UX Compatibility", value: "Fluid", icon: <Smartphone size={16} className="text-emerald-500" /> }
      ],
      learnings: "Mastered React state hooks optimization, cached client datasets in LocalStorage, and built fluid utility CSS layouts.",
      github: "https://github.com/ayushjha-07/Kirana-Store",
      demo: "https://kirana-store-oq3u.vercel.app/"
    },
    {
      id: 4,
      title: "OS Virtual Memory Replacement Simulator",
      category: "Simulation & Algorithms",
      duration: "Aug 2023",
      difficulty: "Hard",
      problemStatement: "Abstract operating system architectures (e.g. FIFO/LRU page replacements) are difficult to teach using static slides, confusing CS students.",
      objectives: [
        "Create step-by-step memory frame queue visualizers.",
        "Compare replacement results (FIFO vs LRU) on same inputs.",
        "Animate frame allocations with smooth visuals.",
        "Report hit, fault, and ratio metrics on charts."
      ],
      architecture: [
        "Framer Motion Visual Dashboard (Dynamic memory cells)",
        "JavaScript Queue Engine (Algorithmic execution logic)",
        "GitHub Pages server hosting (Static HTML server)"
      ],
      technologies: ["JavaScript ES6", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
      features: [
        { title: "FIFO Simulator", desc: "First-In-First-Out queue emulator with cell flow steps.", icon: <Cpu size={16} /> },
        { title: "LRU Simulator", desc: "Least-Recently-Used stack pointer replacement visualizer.", icon: <Layers size={16} /> },
        { title: "Metrics Dashboard", desc: "Stats display reporting hit counts, fault rates, and ratios.", icon: <Zap size={16} /> }
      ],
      challenges: "Creating dynamic UI updates that match the algorithmic queue changes in real-time without latency during long reference string inputs.",
      solutions: "Separated algorithm logs into discrete steps and mapped them to React state triggers to step through animations cleanly.",
      results: [
        { label: "Queue Sync Latency", value: "0ms", icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
        { label: "Framer Motion Fades", value: "Smooth", icon: <Zap size={16} className="text-emerald-500" /> },
        { label: "Instruction Steps", value: "Stepped", icon: <Lock size={16} className="text-emerald-500" /> },
        { label: "CS Education Value", value: "High", icon: <BookOpen size={16} className="text-emerald-500" /> }
      ],
      learnings: "Designed algorithmic memory queues in JavaScript, mapped data states to Framer Motion values, and structured step-based simulation timelines.",
      github: "https://github.com/ayushjha-07/Management-System",
      demo: "https://rohitiwari2001.github.io/Rohitiwari2001.github.in/"
    },
    {
      id: 5,
      title: "University Course Registration Portal",
      category: "Backend & DBMS Portal",
      duration: "Jun 2023 - Jul 2023",
      difficulty: "Medium",
      problemStatement: "Students encounter database locks and registration conflicts when hundreds of students enroll in popular courses simultaneously.",
      objectives: [
        "Prevent course overflow during concurrent sign-ups.",
        "Roll back registry rows upon transactional registration errors.",
        "Verify student prerequisite completions automatically.",
        "Build administrative portal limits capacity toggles."
      ],
      architecture: [
        "Thymeleaf Template engine UI (Admin Dashboard)",
        "Spring Boot Core server (MVC Controllers & Auth Filters)",
        "Hibernate ORM mapping layer (Object relational mapping)",
        "MySQL DBMS Engine (Transaction records & Database locks)"
      ],
      technologies: ["Java", "Spring Boot", "Hibernate ORM", "MySQL Database", "Thymeleaf Templates", "Tailwind CSS"],
      features: [
        { title: "Optimistic DB Locking", desc: "Version-tracked capacity controls preventing capacity leaks.", icon: <Lock size={16} /> },
        { title: "Prerequisite Checker", desc: "Automatic enrollment checks verifying student transcript logs.", icon: <ShieldCheck size={16} /> },
        { title: "Transaction Rollbacks", desc: "Ensures ACID consistency by clearing failed bookings.", icon: <Cpu size={16} /> }
      ],
      challenges: "Students registering for the same courses concurrently triggered write deadlock errors in MySQL transaction logs.",
      solutions: "Integrated Hibernate Optimistic Concurrency controls with version tracking numbers, handling concurrency collisions gracefully.",
      results: [
        { label: "Registration leaks", value: "0", icon: <CheckCircle2 size={16} className="text-emerald-500" /> },
        { label: "ACID Validation", value: "ACID", icon: <Zap size={16} className="text-emerald-500" /> },
        { label: "Prereq Verification", value: "100%", icon: <Lock size={16} className="text-emerald-500" /> },
        { label: "Lock Collision Checks", value: "Safe", icon: <Cpu size={16} className="text-emerald-500" /> }
      ],
      learnings: "Mastered Java Spring MVC patterns, set up Hibernate transactional logs, and implemented optimistic concurrency locks in MySQL databases.",
      github: "https://github.com/ayushjha-07"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="case-studies"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {CASE_STUDY_PARTICLES.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-emerald-500/10 blur-[1.5px] animate-float pointer-events-none hidden md:block"
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
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Project <span className="gradient-text">Case Studies</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            A deep dive into how I approached real-world problems, designed scalable solutions, and built production-ready applications.
          </p>
        </motion.div>

        {/* Expandable Case Studies Stack */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {caseStudiesData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={itemVariants}
                className="group"
              >
                <SpotlightCard className={`p-6 border transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 ${
                  isExpanded ? "border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]" : "border-theme-border/60 hover:border-emerald-500/25"
                }`}>
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                        {item.category}
                      </span>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[10px] font-mono text-slate-400 dark:text-gray-500 hidden sm:block">
                        {item.duration}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>
                  </button>

                  {/* Accordion Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-8 pt-8 border-t border-theme-border/50 grid grid-cols-1 lg:grid-cols-12 gap-8">
                          
                          {/* Left Column: Problem, Objectives, Flow, Stack */}
                          <div className="lg:col-span-6 flex flex-col gap-6">
                            
                            {/* Problem Statement */}
                            <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 flex items-center gap-1.5">
                                <AlertCircle size={13} className="text-emerald-500" /> 📌 Problem Statement
                              </h4>
                              <p className="text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed pl-5">
                                {item.problemStatement}
                              </p>
                            </div>

                            {/* Objectives */}
                            <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 flex items-center gap-1.5">
                                <Target size={13} className="text-emerald-500" /> 🎯 Objectives
                              </h4>
                              <ul className="space-y-2 pl-5">
                                {item.objectives.map((obj, oIdx) => (
                                  <li key={oIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-gray-300">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981] shrink-0 mt-1.5" />
                                    <span>{obj}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* System Architecture Flow */}
                            <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 flex items-center gap-1.5">
                                <Cpu size={13} className="text-emerald-500" /> 🏗 System Architecture
                              </h4>
                              <div className="p-4 rounded-xl bg-slate-900/5 dark:bg-slate-950/40 border border-theme-border/40 flex flex-col gap-1 text-center font-mono text-[10px] md:text-xs text-slate-600 dark:text-gray-300 ml-5 max-w-md">
                                {item.architecture.map((arch, aIdx) => (
                                  <React.Fragment key={aIdx}>
                                    {aIdx > 0 && (
                                      <div className="text-emerald-500 my-0.5 animate-pulse">↓</div>
                                    )}
                                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/3 border border-slate-200/50 dark:border-white/5 truncate">
                                      {arch}
                                    </div>
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>

                            {/* Technologies used */}
                            <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 flex items-center gap-1.5">
                                <Terminal size={13} className="text-emerald-500" /> ⚙ Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2 pl-5">
                                {item.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-900/5 dark:bg-white/5 border border-theme-border/60 text-slate-600 dark:text-gray-400"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                          </div>

                          {/* Right Column: Key Features, Challenges, Solutions, Results, Learnings */}
                          <div className="lg:col-span-6 flex flex-col gap-6">
                            
                            {/* Key Features */}
                            <div className="flex flex-col gap-3">
                              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 flex items-center gap-1.5">
                                <Award size={13} className="text-emerald-500" /> ✨ Key Features
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-5">
                                {item.features.map((feat, fIdx) => (
                                  <div key={fIdx} className="p-3 rounded-xl border border-theme-border/40 bg-slate-900/5 dark:bg-white/3 flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2">
                                      <div className="w-6 h-6 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                        {feat.icon}
                                      </div>
                                      <span className="text-[11px] font-bold text-slate-900 dark:text-white truncate">
                                        {feat.title}
                                      </span>
                                    </div>
                                    <p className="text-[10px] text-slate-500 dark:text-gray-400 leading-normal">
                                      {feat.desc}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Challenges Faced */}
                            <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 flex items-center gap-1.5">
                                <AlertCircle size={13} className="text-rose-500" /> 🚧 Challenges Faced
                              </h4>
                              <p className="text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed pl-5">
                                {item.challenges}
                              </p>
                            </div>

                            {/* Solutions Implemented */}
                            <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 flex items-center gap-1.5">
                                <CheckCircle2 size={13} className="text-emerald-500" /> 💡 Solutions Implemented
                              </h4>
                              <p className="text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed pl-5">
                                {item.solutions}
                              </p>
                            </div>

                            {/* Results */}
                            <div className="flex flex-col gap-3">
                              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 flex items-center gap-1.5">
                                <Zap size={13} className="text-emerald-500" /> 📈 Results
                              </h4>
                              <div className="grid grid-cols-2 gap-3 pl-5">
                                {item.results.map((res, rIdx) => (
                                  <div key={rIdx} className="p-3 rounded-xl border border-theme-border/40 bg-slate-900/5 dark:bg-white/3 flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                      {res.icon}
                                    </div>
                                    <div className="min-w-0">
                                      <span className="block text-[10px] font-bold text-slate-400 uppercase font-mono tracking-wider">{res.label}</span>
                                      <span className="text-xs font-extrabold text-slate-800 dark:text-white font-mono">{res.value}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Key Learnings */}
                            <div className="flex flex-col gap-2">
                              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500 flex items-center gap-1.5">
                                <BookOpen size={13} className="text-emerald-500" /> 🎓 Key Learnings
                              </h4>
                              <div className="p-4 rounded-xl border border-emerald-500/15 bg-emerald-500/5 shadow-[0_0_10px_rgba(16,185,129,0.05)] pl-5 text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                                {item.learnings}
                              </div>
                            </div>

                          </div>

                          {/* Footer action buttons */}
                          <div className="col-span-1 lg:col-span-12 flex justify-end gap-4 mt-4 pt-6 border-t border-theme-border/30">
                            <Magnetic>
                              <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn cursor-pointer"
                              >
                                <GithubIcon />
                                <span>Source Code</span>
                              </a>
                            </Magnetic>

                            {item.demo && (
                              <Magnetic>
                                <a
                                  href={item.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn cursor-pointer"
                                >
                                  <ExternalLink size={12} />
                                  <span>Live Demo</span>
                                </a>
                              </Magnetic>
                            )}
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
