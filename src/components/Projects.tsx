"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Search, X, Calendar, Award, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Github } from "./BrandIcons";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

interface CaseStudy {
  problemSolved: string;
  myRole: string;
  keyFeatures: string[];
  challengesFaced: string;
  solutionImplemented: string;
  technologiesUsed: string[];
  futureEnhancements: string[];
}

interface Project {
  id: number;
  title: string;
  desc: string;
  image: string;
  tags: string[];
  categories: string[];
  github: string;
  demo?: string;
  category: string;
  duration: string;
  status: string;
  difficulty: "Medium" | "Hard" | "Advanced";
  mockUrl: string;
  caseStudy: CaseStudy;
}

interface Particle {
  id: number;
  width: number;
  height: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  yMove: number;
  xMove: number;
}

// Generate static deterministic background particles to avoid hydration mismatch
const PARTICLES: Particle[] = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  width: (i % 3) + 3,
  height: (i % 3) + 3,
  top: `${(i * 7 + 13) % 100}%`,
  left: `${(i * 13 + 7) % 100}%`,
  delay: (i * 0.5) % 4,
  duration: ((i * 1.5) % 10) + 8,
  yMove: ((i * 15 + 20) % 60) - 30,
  xMove: ((i * 11 + 25) % 60) - 30,
}));

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const filterTabs = [
    { name: "All", value: "all" },
    { name: "Full Stack", value: "fullstack" },
    { name: "Frontend", value: "frontend" },
    { name: "AI/ML", value: "aiml" },
    { name: "Java", value: "java" },
    { name: "React", value: "react" },
  ];

  const sectionMetrics = [
    { value: "98%", label: "Performance Score", icon: "⚡" },
    { value: "100%", label: "Fully Responsive Layouts", icon: "📱" },
    { value: "Secured", label: "Authentication Setups", icon: "🔒" },
    { value: "Deployed", label: "Production Release Ready", icon: "🌐" }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "CareerOS AI – Personalized Learning Platform",
      desc: "CSE final-year personalized education platform featuring student exam outcome predictions and content-based recommendation pathways.",
      image: "/assets/project-careeros.png",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "FastAPI", "Scikit-learn", "XGBoost", "Tailwind CSS"],
      categories: ["fullstack", "react", "aiml"],
      github: "https://github.com/ayushjha-07/smartlearn-ai",
      demo: "https://github.com/ayushjha-07/smartlearn-ai",
      category: "AI/ML Full Stack",
      duration: "Jan 2024 - Apr 2024",
      status: "Live",
      difficulty: "Advanced",
      mockUrl: "careeros.ai",
      caseStudy: {
        problemSolved: "Traditional academic tracks follow generic timelines that fail to adapt to individual student strengths, leaving struggling learners without support and top performers under-challenged.",
        myRole: "Lead Full Stack & ML Engineer. Developed dynamic React charts, structured Node.js API database controllers, trained Random Forest/XGBoost models, and configured FastAPI endpoints.",
        keyFeatures: [
          "AI Success Predictor running Random Forest & XGBoost algorithms based on hours, study habits, and test scores.",
          "Content Recommendation System using TF-IDF vectorization and Cosine Similarity to suggest course tracks.",
          "AI Remediation Roadmaps identifying weak areas from quiz history and offering custom schedules.",
          "Dynamic Weekly Planner adjusting sessions to dedicate extra time to prioritized topics.",
          "Interactive AI Tutor chatbot capable of explaining complex topics and generating tests.",
          "Dual analytics portal for student activity charts (Recharts) and administrative panels."
        ],
        challengesFaced: "Computing TF-IDF vectorization and cosine similarity calculations inside the Node.js API caused noticeable request lag on larger course description loads.",
        solutionImplemented: "Built an independent AI microservice in Python using FastAPI, caching vector embeddings in memory and keeping heavy ML matrix calculations away from the client-facing Node.js server.",
        technologiesUsed: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Python FastAPI", "Scikit-Learn", "XGBoost", "Recharts", "Tailwind CSS"],
        futureEnhancements: [
          "Integrate Large Language Models (LLMs) via OpenAI for interactive tutor voice synthesis.",
          "Build course catalog vector index search engines (e.g. Pinecone) to scale recommendations.",
          "Incorporate speech-to-text assessments to test student language skills."
        ]
      }
    },
    {
      id: 2,
      title: "HostelHub – Premium Smart Room Management",
      desc: "Luxury property management software featuring occupancy tracking grid maps, visitor ledgers, room assignments, and admin control panels.",
      image: "/assets/project-hostelhub.png",
      tags: ["Python", "Flask", "SQLite", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      categories: ["fullstack"],
      github: "https://github.com/ayushjha-07/hostelhub-repo",
      category: "Full Stack Application",
      duration: "Nov 2023 - Dec 2023",
      status: "Live",
      difficulty: "Medium",
      mockUrl: "hostelhub.co",
      caseStudy: {
        problemSolved: "Manual room booking ledgers and physical occupant spreadsheets cause booking overlaps, delayed rent check-ins, and data loss in hostel settings.",
        myRole: "Full Stack Developer. Programmed Flask endpoints, modeled SQLite database relations, and built responsive glassmorphic cards.",
        keyFeatures: [
          "Interactive Visual Grid representing room structures, floors, and occupancy statuses.",
          "Occupant database engine with check-in, checkout, and room swap controls.",
          "Dynamic rent tracking ledger with paid, partial, and pending categorizations.",
          "Secure digital visitor logging system with automatic timestamp audits.",
          "Custom administrative settings portal managing property details."
        ],
        challengesFaced: "Preventing race conditions when multiple admin users attempts to assign different students to the same room slot simultaneously.",
        solutionImplemented: "Configured atomic database transactions in SQLite and structured lock checks checking room limits before final booking commits.",
        technologiesUsed: ["Python", "Flask", "SQLite DB", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
        futureEnhancements: [
          "Integrate SMS check-in validation alerts using Twilio API integrations.",
          "Support payment gateways (Stripe) for direct client rent invoices.",
          "Add dynamic custom floor-plan blueprint builders."
        ]
      }
    },
    {
      id: 3,
      title: "Kirana Store – Grocery E-Commerce Platform",
      desc: "High-performance grocery shopping application featuring live search filters, dynamic state cart, and optimized client caching.",
      image: "/assets/project-kirana.png",
      tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vercel"],
      categories: ["frontend", "react"],
      github: "https://github.com/ayushjha-07/Kirana-Store",
      demo: "https://kirana-store-oq3u.vercel.app/",
      category: "Frontend E-Commerce",
      duration: "Oct 2023 - Nov 2023",
      status: "Live",
      difficulty: "Medium",
      mockUrl: "kirana-grocery.vercel.app",
      caseStudy: {
        problemSolved: "Local grocery vendors face difficulty transitioning inventories to clean web catalogs, resulting in lost client opportunities.",
        myRole: "Frontend UI Developer. Designed state flow structures, search indexes, and responsive storefront cards.",
        keyFeatures: [
          "Real-time instant text search filtering items in under 10ms.",
          "Multi-category sorting tabs allowing smooth navigation across product lists.",
          "Dynamic shopping cart tracking additions, quantity scaling, and total checkouts.",
          "LocalStorage backup keeping shopper carts safe across page reloads.",
          "Sleek fluid CSS flex layouts optimizing display space on mobile and web viewports."
        ],
        challengesFaced: "Managing rapid cart item updates and price calculations cleanly without causing expensive page re-renders.",
        solutionImplemented: "Used customized local state triggers and optimized React component trees to update only individual item nodes on click.",
        technologiesUsed: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vercel"],
        futureEnhancements: [
          "Connect Node.js and MongoDB backend to store product inventory details.",
          "Implement payment gateway checkouts with automated receipts.",
          "Build order management lists tracking deliveries in real-time."
        ]
      }
    },
    {
      id: 4,
      title: "OS Virtual Memory Replacement Simulator",
      desc: "Interactive educational tool visualizing Operating System page replacement algorithms (FIFO vs LRU) with hit/fault ratios.",
      image: "/assets/project-memory.png",
      tags: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Algorithms"],
      categories: ["frontend"],
      github: "https://github.com/ayushjha-07/Management-System",
      demo: "https://rohitiwari2001.github.io/Rohitiwari2001.github.in/",
      category: "Simulation & Algorithms",
      duration: "Aug 2023",
      status: "Live",
      difficulty: "Hard",
      mockUrl: "memory-simulator.github.io",
      caseStudy: {
        problemSolved: "Abstract operating system architectures (e.g. FIFO/LRU page replacements) are difficult to teach using static slides, confusing CS students.",
        myRole: "UI & Algorithm Engineer. Coded page replacement queue logic and designed dynamic memory cell animations.",
        keyFeatures: [
          "FIFO (First In First Out) replacement simulator visual cells.",
          "LRU (Least Recently Used) replacement simulator visual cells.",
          "Step-by-step navigation controls to inspect queue changes during strings.",
          "Interactive statistics dashboard reporting page hits, faults, and fault ratios.",
          "Educational dashboard layout displaying data comparisons."
        ],
        challengesFaced: "Creating dynamic UI updates that match the algorithmic queue changes in real-time without latency during long reference string inputs.",
        solutionImplemented: "Separated algorithm logs into discrete steps and mapped them to React state triggers to step through animations cleanly.",
        technologiesUsed: ["JavaScript ES6", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
        futureEnhancements: [
          "Incorporate OPT (Optimal) and LFU (Least Frequently Used) algorithm types.",
          "Allow file imports (CSV) for custom reference string data sets.",
          "Add charts comparing algorithmic hits over various queue frames."
        ]
      }
    },
    {
      id: 5,
      title: "University Course Registration Portal",
      desc: "High-concurrency DBMS web application built with Spring Boot, implementing transaction database locks, student checksheets, and admin panels.",
      image: "/assets/project-java.png",
      tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "Thymeleaf", "Tailwind CSS"],
      categories: ["fullstack", "java"],
      github: "https://github.com/ayushjha-07",
      category: "Backend & DBMS Portal",
      duration: "Jun 2023 - Jul 2023",
      status: "Completed",
      difficulty: "Medium",
      mockUrl: "university-enrollment.edu",
      caseStudy: {
        problemSolved: "Students encounter database locks and registration conflicts when hundreds of students enroll in popular courses simultaneously.",
        myRole: "Backend Database Developer. Configured Hibernate entities, SQL schemas, transaction levels, and Thymeleaf pages.",
        keyFeatures: [
          "Concurrency locking mechanism preventing registration limits from breaking.",
          "Automatic transactional rollbacks ensuring data integrity on booking errors.",
          "Checks verifying course prerequisite requirements before enrollment is accepted.",
          "Admin portal dashboard managing courses, capacities, and students.",
          "Modern web templates styled with responsive styles."
        ],
        challengesFaced: "Students registering for the same courses concurrently triggered write deadlock errors in MySQL transaction logs.",
        solutionImplemented: "Integrated Hibernate Optimistic Concurrency controls with version tracking numbers, handling concurrency collisions gracefully.",
        technologiesUsed: ["Java", "Spring Boot", "Hibernate ORM", "MySQL Database", "Thymeleaf Templates", "Tailwind CSS"],
        futureEnhancements: [
          "Migrate frontend interfaces to a clean Next.js client model.",
          "Implement Redis caching structures to load course catalogs instantly under load.",
          "Set up automatic queuing databases to manage course waitlists."
        ]
      }
    }
  ];

  // Combined Filter & Search Logic
  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.categories.includes(activeFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.08,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden text-theme-text transition-colors duration-300">
      
      {/* Floating Cyberpunk Particles (Deterministic static configuration) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-emerald-500/20 rounded-full"
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
            }}
            animate={{
              y: [0, p.yMove, 0],
              x: [0, p.xMove, 0],
              opacity: [0.15, 0.6, 0.15]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Production-ready applications showcasing my skills in full-stack development, AI, and modern web technologies.
          </p>
        </div>

        {/* Project Metrics Summary Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {sectionMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              className="h-full"
            >
              <div className="p-3.5 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-md flex items-center gap-3 hover:border-emerald-500/20 transition-all duration-300">
                <span className="text-xl shrink-0">{metric.icon}</span>
                <div className="min-w-0">
                  <span className="text-xs md:text-sm font-black font-mono text-emerald-400 block">{metric.value}</span>
                  <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider block truncate">{metric.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filter Controls & Search bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-12 max-w-5xl mx-auto bg-slate-950/20 backdrop-blur-md p-3.5 rounded-2xl border border-white/5">
          
          {/* Filtering tabs */}
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer select-none ${
                  activeFilter === tab.value
                    ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 shadow-[0_0_12px_rgba(16,185,129,0.1)]"
                    : "text-gray-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
              <Search size={14} />
            </span>
            <input
              type="text"
              placeholder="Search project, stack, feature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-white/5 bg-slate-950/40 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all duration-300 placeholder:text-gray-500 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-white cursor-pointer"
              >
                <X size={12} />
              </button>
            )}
          </div>

        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="h-full"
              >
                <SpotlightCard className="h-full flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)]">
                  <div>
                    {/* Browser Mockup Header */}
                    <div className="bg-slate-100 dark:bg-slate-900/60 px-4 py-2 flex items-center border-b border-slate-200 dark:border-white/5 relative z-20">
                      <div className="flex gap-1.5 mr-auto">
                        <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[9px] text-slate-600 dark:text-gray-500 font-mono absolute left-1/2 transform -translate-x-1/2 bg-slate-200/50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/5 rounded px-3 py-0.5 max-w-[140px] truncate select-none">
                        {project.mockUrl}
                      </span>
                    </div>

                    {/* Image Showcase Container */}
                    <div className="relative h-44 overflow-hidden bg-slate-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-70" />
                      
                      {/* Live status badge */}
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/70 backdrop-blur-md border border-white/10 text-[9px] font-bold font-mono uppercase tracking-wide text-emerald-400 flex items-center gap-1 select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        {project.status}
                      </div>

                      {/* Difficulty Level Badge */}
                      <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-md border text-[9px] font-bold uppercase tracking-wide font-mono select-none ${
                        project.difficulty === "Advanced"
                          ? "bg-rose-500/10 border-rose-500/20 text-rose-400"
                          : project.difficulty === "Hard"
                          ? "bg-amber-500/10 border-amber-500/20 text-amber-400"
                          : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      }`}>
                        {project.difficulty}
                      </div>

                      {/* Timeline tag */}
                      <div className="absolute bottom-3 right-3 text-[9px] font-mono font-bold text-gray-300 flex items-center gap-1 select-none bg-slate-900/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        <Calendar size={10} className="text-emerald-400" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5">
                      {/* Meta tag */}
                      <span className="text-[9px] uppercase tracking-wider font-extrabold text-emerald-500 font-mono block mb-2">{project.category}</span>
                      
                      {/* Title */}
                      <h3 className="text-base font-extrabold mb-2.5 text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors duration-300 leading-snug">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {project.desc}
                      </p>

                      {/* Micro Key Features */}
                      <div className="mb-4">
                        <ul className="flex flex-col gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                          {project.caseStudy.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                            <li key={fIdx} className="relative pl-3.5 before:content-['▹'] before:absolute before:left-0 before:text-emerald-500 font-medium line-clamp-1">
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 text-[9px] font-mono text-slate-600 dark:text-gray-400 group-hover:border-emerald-500/20 group-hover:text-emerald-400 transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/3 text-[9px] font-mono text-slate-500 select-none">
                            +{project.tags.length - 4}
                          </span>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex gap-2 px-5 pb-5 mt-auto relative z-30 w-full">
                    
                    <Magnetic className="flex-1 flex">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 py-2 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-200 hover:border-emerald-500/20 hover:bg-emerald-500/5 hover:text-emerald-400 rounded-lg text-[10px] font-bold transition-all duration-300 hover:shadow-[0_0_10px_rgba(16,185,129,0.1)]"
                      >
                        <Github size={12} />
                        <span>Source</span>
                      </a>
                    </Magnetic>

                    {project.demo && (
                      <Magnetic className="flex-1 flex">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg text-[10px] font-bold shadow-[0_3px_10px_rgba(16,185,129,0.2)] hover:shadow-[0_4px_14px_rgba(16,185,129,0.35)] transition-all duration-300"
                        >
                          <span>Live Demo</span>
                        </a>
                      </Magnetic>
                    )}

                    <Magnetic className="flex-1 flex">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full flex items-center justify-center gap-1 py-2 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-200 hover:border-emerald-500/20 hover:bg-emerald-500/5 hover:text-emerald-400 rounded-lg text-[10px] font-bold transition-all duration-300 hover:shadow-[0_0_10px_rgba(16,185,129,0.1)] cursor-pointer"
                      >
                        <span>Case Study</span>
                      </button>
                    </Magnetic>

                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* If no projects match filter/search */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-gray-500 font-medium">No projects found matching your criteria. Try another keyword or tab.</p>
          </div>
        )}

      </div>

      {/* Case Study Immersive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-emerald-500/25 bg-slate-900/95 backdrop-blur-xl shadow-2xl p-6 md:p-8 z-10 text-slate-100 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all duration-200 cursor-pointer z-50"
              >
                <X size={16} />
              </button>

              {/* Modal Header */}
              <div className="border-b border-white/5 pb-4 mb-6">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold font-mono uppercase tracking-wider select-none inline-block mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white leading-snug">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-3 text-[10px] font-mono text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-emerald-400" />
                    {selectedProject.duration}
                  </span>
                  <span>•</span>
                  <span>Difficulty: <strong className="text-emerald-400">{selectedProject.difficulty}</strong></span>
                  <span>•</span>
                  <span>Status: <strong className="text-emerald-400">{selectedProject.status}</strong></span>
                </div>
              </div>

              {/* Case Study Details Scroll Container */}
              <div className="space-y-6 text-sm text-slate-300 pr-1 leading-relaxed">
                
                {/* Problem & Role */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-white/5 bg-slate-950/20">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5 font-mono">
                      <span>⚠️</span> Problem Solved
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {selectedProject.caseStudy.problemSolved}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/5 bg-slate-950/20">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5 font-mono">
                      <span>👤</span> My Role
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {selectedProject.caseStudy.myRole}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5 font-mono">
                    <Award size={14} /> Key Features & System Modules
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    {selectedProject.caseStudy.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="p-2.5 rounded-lg border border-white/3 bg-slate-950/10 flex items-start gap-2">
                        <CheckCircle size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solution */}
                <div className="p-4 rounded-xl border border-rose-500/10 bg-rose-950/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-xl pointer-events-none" />
                  <h4 className="text-xs uppercase font-bold tracking-wider text-rose-400 mb-2 flex items-center gap-1.5 font-mono">
                    <span>🔥</span> Technical Challenge
                  </h4>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {selectedProject.caseStudy.challengesFaced}
                  </p>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5 font-mono">
                    <span>💡</span> Solution Implemented
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.caseStudy.solutionImplemented}
                  </p>
                </div>

                {/* Tech Stack Used */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-3.5 flex items-center gap-1.5 font-mono">
                    <span>🛠️</span> Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.caseStudy.technologiesUsed.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded bg-slate-950/50 border border-white/5 text-xs text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Future Enhancements */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5 font-mono">
                    <ArrowRight size={14} /> Future Roadmap & Enhancements
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs">
                    {selectedProject.caseStudy.futureEnhancements.map((enh, eIdx) => (
                      <li key={eIdx} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-emerald-500 font-medium">
                        {enh}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Modal footer redirects */}
              <div className="flex gap-3 border-t border-white/5 pt-5 mt-6 relative z-10 w-full">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-white rounded-xl text-xs font-bold transition-all duration-300"
                >
                  <Github size={14} />
                  <span>Inspect Codebase</span>
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    <span>Launch Live App</span>
                  </a>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
