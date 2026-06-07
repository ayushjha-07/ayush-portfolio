"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion";
import { ExternalLink, Server, ShoppingCart, Cpu } from "lucide-react";
import Image from "next/image";
import { Github } from "./BrandIcons";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

interface Project {
  id: number;
  title: string;
  desc: string;
  details: string[];
  image: string;
  tags: string[];
  categories: string[];
  github: string;
  demo?: string;
  icon: React.ReactNode;
  mockUrl: string;
  category: string;
  duration: string;
  status: string;
  badges: string[];
  metrics: string[];
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const filters = [
    { name: "All Projects", value: "all" },
    { name: "E-Commerce", value: "ecommerce" },
    { name: "Systems & OS", value: "systems" },
    { name: "React.js", value: "react" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Kirana Store – E-Commerce Web Application",
      desc: "Designed and engineered a high-performance grocery platform in React featuring real-time client-side search, multi-category filtering, dynamic state-persisted shopping cart, and fluid interactions.",
      icon: <ShoppingCart className="text-emerald-400" size={18} />,
      category: "Web Application",
      duration: "Oct 2023 - Nov 2023",
      status: "Live",
      badges: ["E-Commerce", "React.js", "Frontend"],
      metrics: ["Responsive across devices", "Fast page loads", "Dynamic Cart Persistence", "Optimized UI performance"],
      details: [
        "Category-based item filtering",
        "Fast product search",
        "Dynamic shopping cart",
        "Responsive design",
        "Smooth React interactions",
        "Optimized user experience",
      ],
      image: "/assets/project-kirana.png",
      tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
      categories: ["ecommerce", "react"],
      github: "https://github.com/ayushjha-07/Kirana-Store",
      demo: "https://kirana-store-oq3u.vercel.app/",
      mockUrl: "kirana-grocery.vercel.app",
    },
    {
      id: 2,
      title: "Virtual Memory Management Simulator",
      desc: "Architected a real-time simulator in vanilla JavaScript to model OS page replacement algorithms (FIFO/LRU). Visualized dynamic memory frame states, hit/fault tracking ratios, and algorithmic comparisons.",
      icon: <Cpu className="text-emerald-400" size={18} />,
      category: "Simulation & OS",
      duration: "Aug 2023",
      status: "Live",
      badges: ["Operating Systems", "Simulation", "Algorithms"],
      metrics: ["Real-time simulation", "Interactive visuals", "Zero external dependencies", "Performance dashboard"],
      details: [
        "FIFO Page Replacement",
        "LRU Page Replacement",
        "Real-time page hit/fault tracking",
        "Memory frame visualization",
        "Educational simulation dashboard",
        "Algorithm comparison interface",
      ],
      image: "/assets/project-memory.png",
      tags: ["HTML5", "CSS3", "JavaScript", "Operating Systems", "Algorithms"],
      categories: ["systems"],
      github: "https://github.com/ayushjha-07/Management-System",
      demo: "https://rohitiwari2001.github.io/Rohitiwari2001.github.in/",
      mockUrl: "localhost:3000/memory_simulator",
    },
    {
      id: 3,
      title: "Guys Fashion – E-Commerce Website",
      desc: "Developed a mobile-first fashion e-commerce storefront focusing on crisp UI, high-performance rendering, and cross-browser responsiveness. Integrated modular catalogs and clean category navigation.",
      icon: <Server className="text-emerald-400" size={18} />,
      category: "Web Storefront",
      duration: "Sep 2023",
      status: "Completed",
      badges: ["E-Commerce", "Frontend", "Responsive Design"],
      metrics: ["Mobile-first layout", "Optimized UI performance", "Clean layout structures", "Fast loading times"],
      details: [
        "Responsive Design",
        "Product Catalog Interface",
        "Category-Based Navigation",
        "Modern UI/UX",
        "Mobile-Friendly Layout",
        "Optimized Performance",
      ],
      image: "/assets/project-fashion.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      categories: ["ecommerce"],
      github: "https://github.com/ayushjha-07/Guys-Fashion",
      demo: "https://github.com/ayushjha-07/Guys-Fashion",
      mockUrl: "guys-fashion-store.vercel.app",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden text-theme-text transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono border transition-all duration-200 cursor-pointer ${
                activeFilter === filter.value
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.1)]"
                  : "bg-slate-100 dark:bg-white/3 border-slate-200 dark:border-white/5 text-slate-500 dark:text-gray-400 hover:border-emerald-500/30 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="h-full"
              >
                <SpotlightCard className="h-full flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)] dark:hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]">
                  <div>
                    {/* Browser Mockup Header */}
                    <div className="bg-slate-100 dark:bg-slate-900/60 px-4 py-2.5 flex items-center border-b border-slate-200 dark:border-white/5 relative z-20">
                      <div className="flex gap-1.5 mr-auto">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[10px] text-slate-600 dark:text-gray-500 font-mono absolute left-1/2 transform -translate-x-1/2 bg-slate-200/50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/5 rounded px-4 py-0.5 max-w-[150px] truncate select-none">
                        {project.mockUrl}
                      </span>
                    </div>

                    {/* Image Showcase Container */}
                    <div className="relative h-48 md:h-52 overflow-hidden bg-slate-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                      
                      {/* Featured Project Badge */}
                      {project.id === 1 && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-sm shadow-[0_2px_8px_rgba(16,185,129,0.3)] z-30">
                          Featured Project
                        </div>
                      )}

                      {/* Category icon */}
                      <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-white/95 dark:bg-slate-950/80 backdrop-blur-md border border-slate-200 dark:border-white/10 flex items-center justify-center z-10">
                        {project.icon}
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      {/* Meta Information Row */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-gray-400 mb-3 pb-2 border-b border-slate-100 dark:border-white/5">
                        <span className="uppercase tracking-wider font-bold">{project.category}</span>
                        <div className="flex items-center gap-1.5">
                          <span>{project.duration}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-700" />
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide ${
                            project.status === "Live"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-extrabold mb-2.5 text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                        {project.title}
                      </h3>

                      {/* Small Project Badges */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.badges.map((b) => (
                          <span key={b} className="px-2 py-0.5 rounded bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 dark:border-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-mono font-bold uppercase tracking-wider">
                            {b}
                          </span>
                        ))}
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {project.desc}
                      </p>

                      {/* Technical Metrics Block */}
                      <div className="mb-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-150 dark:border-white/5 rounded-xl p-3">
                        <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-gray-500 block mb-2 font-mono">Performance & Impact Metrics</span>
                        <div className="grid grid-cols-2 gap-2">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="flex items-center gap-1.5 text-[10px] text-slate-600 dark:text-slate-300 font-mono">
                              <span className="text-emerald-500 font-bold">✓</span>
                              <span className="truncate">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features List */}
                      <div className="mb-4">
                        <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-gray-500 block mb-2 font-mono">Key Features</span>
                        <ul className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-400 list-none">
                          {project.details.map((detail, dIdx) => (
                            <li key={dIdx} className="relative pl-4 before:content-['▹'] before:absolute before:left-0 before:text-emerald-500 font-medium">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Tags */}
                      <div>
                        <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 dark:text-gray-500 block mb-2 font-mono">Technologies</span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 text-[9px] font-mono text-slate-600 dark:text-gray-400 group-hover:border-emerald-500/20 dark:group-hover:border-emerald-500/10 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 px-6 pb-6 mt-auto relative z-30 w-full">
                    <Magnetic className="flex-1 flex">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2.5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-200 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Github size={14} />
                        <span>Codebase</span>
                      </a>
                    </Magnetic>
                    {project.demo && (
                      <Magnetic className="flex-1 flex">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-xl text-xs font-semibold shadow-[0_4px_14px_rgba(16,185,129,0.25)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      </Magnetic>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
