"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ChevronDown, Laptop, Tablet, Smartphone, ExternalLink,
  ShieldAlert, Sparkles, Check, CheckCircle2
} from "lucide-react";
import Image from "next/image";
import { Github } from "./BrandIcons";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

// Static background particles to avoid Next.js hydration mismatches
const IMPACT_PARTICLES = [
  { id: 1, top: "10%", left: "6%", size: 4, delay: 0.1 },
  { id: 2, top: "42%", left: "85%", size: 5, delay: 1.5 },
  { id: 3, top: "78%", left: "10%", size: 4, delay: 2.2 },
];

interface ProjectMetric {
  id: number;
  title: string;
  desc: string;
  image: string;
  category: string;
  github: string;
  demo?: string;
  status: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  metrics: {
    responsive: boolean;
    auth: boolean;
    api: boolean;
    mobile: boolean;
    fastLoading: boolean;
    modernUI: boolean;
  };
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    deployment: string;
  };
  tags: string[];
}

export default function ProjectImpact() {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [previews, setPreviews] = useState<Record<number, "desktop" | "tablet" | "mobile">>({
    1: "desktop",
    2: "desktop",
    3: "desktop",
    4: "desktop",
    5: "desktop"
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const projectList: ProjectMetric[] = [
    {
      id: 1,
      title: "CareerOS AI – Personalized Learning Platform",
      desc: "CSE final-year personalized education platform featuring student exam outcome predictions and content-based recommendation pathways.",
      image: "/assets/project-careeros.png",
      category: "AI/ML Full Stack",
      github: "https://github.com/ayushjha-07/smartlearn-ai",
      demo: "https://github.com/ayushjha-07/smartlearn-ai",
      status: "Live",
      scores: { performance: 96, accessibility: 95, bestPractices: 97, seo: 100 },
      metrics: { responsive: true, auth: true, api: true, mobile: true, fastLoading: true, modernUI: true },
      architecture: {
        frontend: "React.js / Tailwind",
        backend: "Node.js / Express",
        database: "MongoDB Atlas",
        deployment: "Vercel / FastAPI Render"
      },
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "FastAPI", "Scikit-learn", "XGBoost", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "HostelHub – Premium Smart Room Management",
      desc: "Luxury property management software featuring occupancy tracking grid maps, visitor ledgers, room assignments, and admin control panels.",
      image: "/assets/project-hostelhub.png",
      category: "Full Stack Application",
      github: "https://github.com/ayushjha-07/hostelhub-repo",
      status: "Live",
      scores: { performance: 94, accessibility: 90, bestPractices: 92, seo: 95 },
      metrics: { responsive: true, auth: true, api: true, mobile: true, fastLoading: true, modernUI: true },
      architecture: {
        frontend: "HTML5 / Tailwind CSS",
        backend: "Python / Flask",
        database: "SQLite DB",
        deployment: "Render Cloud VM"
      },
      tags: ["Python", "Flask", "SQLite", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      id: 3,
      title: "Kirana Store – Grocery E-Commerce Platform",
      desc: "High-performance grocery shopping application featuring live search filters, dynamic state cart, and optimized client caching.",
      image: "/assets/project-kirana.png",
      category: "Frontend E-Commerce",
      github: "https://github.com/ayushjha-07/Kirana-Store",
      demo: "https://kirana-store-oq3u.vercel.app/",
      status: "Live",
      scores: { performance: 98, accessibility: 95, bestPractices: 96, seo: 100 },
      metrics: { responsive: true, auth: false, api: false, mobile: true, fastLoading: true, modernUI: true },
      architecture: {
        frontend: "React.js / Tailwind",
        backend: "LocalStorage State",
        database: "Client-Side Store",
        deployment: "Vercel Static CDN"
      },
      tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vercel"]
    },
    {
      id: 4,
      title: "OS Virtual Memory Replacement Simulator",
      desc: "Interactive educational tool visualizing Operating System page replacement algorithms (FIFO vs LRU) with hit/fault ratios.",
      image: "/assets/project-memory.png",
      category: "Simulation & Algorithms",
      github: "https://github.com/ayushjha-07/Management-System",
      demo: "https://rohitiwari2001.github.io/Rohitiwari2001.github.in/",
      status: "Live",
      scores: { performance: 99, accessibility: 92, bestPractices: 95, seo: 90 },
      metrics: { responsive: true, auth: false, api: false, mobile: true, fastLoading: true, modernUI: true },
      architecture: {
        frontend: "Tailwind / Framer Motion",
        backend: "Local ES6 Logic",
        database: "Memory Cell Stack",
        deployment: "GitHub Pages Host"
      },
      tags: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Algorithms"]
    },
    {
      id: 5,
      title: "University Course Registration Portal",
      desc: "High-concurrency DBMS web application built with Spring Boot, implementing transaction database locks, student checksheets, and admin panels.",
      image: "/assets/project-java.png",
      category: "Backend & DBMS Portal",
      github: "https://github.com/ayushjha-07",
      status: "Live",
      scores: { performance: 92, accessibility: 88, bestPractices: 90, seo: 92 },
      metrics: { responsive: true, auth: true, api: true, mobile: true, fastLoading: true, modernUI: true },
      architecture: {
        frontend: "Thymeleaf / CSS3",
        backend: "Java / Spring Boot",
        database: "MySQL Database",
        deployment: "Local DBMS Hosting"
      },
      tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "Thymeleaf", "Tailwind CSS"]
    }
  ];

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const setPreviewMode = (projId: number, mode: "desktop" | "tablet" | "mobile") => {
    setPreviews((prev) => ({ ...prev, [projId]: mode }));
  };

  const getMetricClass = (score: number) => {
    if (score >= 90) return "text-emerald-500 stroke-emerald-500";
    if (score >= 70) return "text-amber-500 stroke-amber-500";
    return "text-rose-500 stroke-rose-500";
  };

  return (
    <section
      id="project-metrics"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/5"
    >
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {IMPACT_PARTICLES.map((particle) => (
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
            Engineering Analytics
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            Project Impact & <span className="gradient-text">Metrics</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Measuring the quality, performance, and engineering behind my projects.
          </p>
        </motion.div>

        {/* Expandable Project List */}
        <div className="space-y-4 max-w-5xl mx-auto mb-20">
          {projectList.map((project) => {
            const isExpanded = expandedId === project.id;
            const currentMode = previews[project.id] || "desktop";

            return (
              <SpotlightCard
                key={project.id}
                className="border border-theme-border/60 hover:border-emerald-500/30 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/30 rounded-2xl overflow-hidden"
              >
                {/* Header Section (Accordion trigger) */}
                <div
                  onClick={() => handleToggle(project.id)}
                  className="p-5 flex items-center justify-between cursor-pointer select-none group/header"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Status Dot */}
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative flex items-center justify-center shrink-0">
                      <span className="absolute w-full h-full rounded-full bg-emerald-500/50 animate-ping" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest block">
                        {project.category}
                      </span>
                      <h3 className="text-sm md:text-base font-extrabold text-slate-900 dark:text-white group-hover/header:text-emerald-500 dark:group-hover/header:text-emerald-400 transition-colors truncate">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </div>

                {/* Body Details Block (Expandable) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="border-t border-slate-200/50 dark:border-white/5"
                    >
                      <div className="p-6 md:p-8 space-y-8">
                        
                        {/* 1. Performance Meters & Metrics */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          
                          {/* Circular Meters */}
                          <div>
                            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-emerald-500 mb-6">
                              📊 Lighthouse Performance Scores
                            </h4>
                            <div className="grid grid-cols-4 gap-4">
                              {[
                                { name: "Performance", score: project.scores.performance },
                                { name: "Accessibility", score: project.scores.accessibility },
                                { name: "Best Practices", score: project.scores.bestPractices },
                                { name: "SEO", score: project.scores.seo }
                              ].map((meter) => {
                                const radius = 24;
                                const circumference = 2 * Math.PI * radius;
                                const strokeDashoffset = circumference - (meter.score / 100) * circumference;

                                return (
                                  <div key={meter.name} className="flex flex-col items-center text-center">
                                    <div className="relative w-16 h-16 flex items-center justify-center">
                                      <svg className="w-full h-full transform -rotate-90">
                                        {/* Back circle */}
                                        <circle
                                          cx="32"
                                          cy="32"
                                          r={radius}
                                          className="stroke-slate-200 dark:stroke-slate-800"
                                          strokeWidth="4"
                                          fill="transparent"
                                        />
                                        {/* Fore circle */}
                                        <motion.circle
                                          cx="32"
                                          cy="32"
                                          r={radius}
                                          className={getMetricClass(meter.score)}
                                          strokeWidth="4"
                                          fill="transparent"
                                          strokeDasharray={circumference}
                                          initial={{ strokeDashoffset: circumference }}
                                          animate={{ strokeDashoffset }}
                                          transition={{ duration: 1.2, ease: "easeOut" }}
                                        />
                                      </svg>
                                      <span className="absolute text-xs font-black font-mono">
                                        {meter.score}
                                      </span>
                                    </div>
                                    <span className="text-[9px] text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-2.5">
                                      {meter.name}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Technical Metrics Chips */}
                          <div>
                            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-emerald-500 mb-4">
                              ⚡ Technical Metrics Checklist
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                { label: "Fully Responsive", value: project.metrics.responsive },
                                { label: "Secure Authentication", value: project.metrics.auth },
                                { label: "REST API Integration", value: project.metrics.api },
                                { label: "Mobile Optimized", value: project.metrics.mobile },
                                { label: "Fast Loading", value: project.metrics.fastLoading },
                                { label: "Modern UI/UX", value: project.metrics.modernUI }
                              ].map((mItem) => (
                                <div
                                  key={mItem.label}
                                  className={`flex items-center gap-2.5 p-2 rounded-lg border text-xs font-medium transition-all ${
                                    mItem.value 
                                      ? "bg-emerald-500/5 border-emerald-500/15 text-emerald-600 dark:text-emerald-400" 
                                      : "bg-slate-100/50 dark:bg-white/3 border-slate-200 dark:border-white/5 text-slate-400 dark:text-gray-500"
                                  }`}
                                >
                                  {mItem.value ? (
                                    <Check size={12} className="shrink-0" />
                                  ) : (
                                    <ShieldAlert size={12} className="shrink-0" />
                                  )}
                                  <span className="truncate">{mItem.label}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* 2. System Architecture map & Tech Badges */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          
                          {/* Architecture map */}
                          <div>
                            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-emerald-500 mb-6">
                              🏗 System Architecture Pipeline
                            </h4>
                            <div className="flex flex-col gap-2 bg-slate-950/20 p-4 rounded-xl border border-white/5">
                              {[
                                { name: "Frontend", val: project.architecture.frontend, idx: 0 },
                                { name: "Backend", val: project.architecture.backend, idx: 1 },
                                { name: "Database", val: project.architecture.database, idx: 2 },
                                { name: "Deployment", val: project.architecture.deployment, idx: 3 }
                              ].map((layer) => (
                                <React.Fragment key={layer.name}>
                                  {layer.idx > 0 && (
                                    <div className="flex pl-6 text-emerald-500/50 text-[10px] leading-none animate-pulse">
                                      ↓
                                    </div>
                                  )}
                                  <div className="flex items-center justify-between py-1 px-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-emerald-500/10 transition-all">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500">
                                      {layer.name}
                                    </span>
                                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                                      {layer.val}
                                    </span>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>

                          {/* Tech badges */}
                          <div>
                            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-emerald-500 mb-4">
                              🛠 Tech Stack Badges
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 text-[10px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5 hover:border-emerald-500/25 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all duration-300"
                                >
                                  <Sparkles size={8} className="text-emerald-500" />
                                  <span>{tag}</span>
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>

                        {/* 3. Device Mockup Preview Switcher */}
                        <div className="flex flex-col items-center">
                          <div className="w-full flex items-center justify-between mb-6">
                            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-emerald-500">
                              📸 Device Responsive Previews
                            </h4>
                            {/* Switcher Buttons */}
                            <div className="flex gap-1.5 p-1 bg-slate-950/20 backdrop-blur-md rounded-lg border border-white/5">
                              {[
                                { mode: "desktop", icon: <Laptop size={12} /> },
                                { mode: "tablet", icon: <Tablet size={12} /> },
                                { mode: "mobile", icon: <Smartphone size={12} /> }
                              ].map((btn) => (
                                <button
                                  key={btn.mode}
                                  onClick={() => setPreviewMode(project.id, btn.mode as "desktop" | "tablet" | "mobile")}
                                  className={`p-1.5 rounded-md transition-all cursor-pointer ${
                                    currentMode === btn.mode 
                                      ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20" 
                                      : "text-gray-400 hover:text-white"
                                  }`}
                                >
                                  {btn.icon}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Bounding box device frames */}
                          <div className="w-full h-80 flex items-center justify-center overflow-hidden bg-slate-950/20 rounded-2xl border border-white/5 relative p-4">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={currentMode}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                                className="flex items-center justify-center w-full h-full"
                              >
                                {currentMode === "desktop" && (
                                  <div className="w-full max-w-lg aspect-video border-[6px] border-slate-700 dark:border-slate-800 rounded-lg shadow-2xl overflow-hidden relative">
                                    <Image
                                      src={project.image}
                                      alt="Desktop preview"
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                )}

                                {currentMode === "tablet" && (
                                  <div className="w-48 aspect-[3/4] border-[8px] border-slate-700 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden relative">
                                    <Image
                                      src={project.image}
                                      alt="Tablet preview"
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
                                )}

                                {currentMode === "mobile" && (
                                  <div className="w-32 aspect-[9/16] border-[8px] border-slate-700 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden relative">
                                    <Image
                                      src={project.image}
                                      alt="Mobile preview"
                                      fill
                                      className="object-cover"
                                    />
                                    {/* Notch */}
                                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-slate-700 dark:bg-slate-800 rounded-full z-20" />
                                  </div>
                                )}
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* 4. Actions Footer */}
                        <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200/50 dark:border-white/5 relative z-10 w-full justify-end">
                          <Magnetic>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-1.5 py-2 px-5 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-slate-800 dark:text-white rounded-xl text-xs font-bold transition-all duration-300"
                            >
                              <Github size={12} />
                              <span>GitHub Code</span>
                            </a>
                          </Magnetic>

                          {project.demo && (
                            <Magnetic>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-1.5 py-2 px-5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
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
            );
          })}
        </div>

        {/* Bottom Closing Statement Quote Card */}
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
              <CheckCircle2 size={18} className="text-emerald-500 animate-pulse" />
              
              <blockquote className="text-sm md:text-lg font-bold italic text-slate-900 dark:text-slate-100 leading-relaxed font-sans max-w-2xl px-4">
                &ldquo;Every project is built with a focus on performance, scalability, clean architecture, and delivering a great user experience.&rdquo;
              </blockquote>

              <div className="h-[1px] w-12 bg-emerald-500/30 mt-2" />
            </div>

          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
