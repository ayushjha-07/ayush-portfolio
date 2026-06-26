"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Search, X, Calendar, ExternalLink,
  ChevronLeft, ChevronRight, Laptop, Sparkles, AlertCircle, CheckCircle
} from "lucide-react";
import Image from "next/image";
import { Github } from "./BrandIcons";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";

// Static background particles to avoid Next.js hydration mismatches
const GALLERY_PARTICLES = [
  { id: 1, top: "15%", left: "5%", size: 4, delay: 0.1 },
  { id: 2, top: "50%", left: "85%", size: 5, delay: 1.2 },
  { id: 3, top: "80%", left: "12%", size: 4, delay: 2.3 },
];

interface CaseStudy {
  problemSolved: string;
  myRole: string;
  keyFeatures: string[];
  challengesFaced: string;
  solutionImplemented: string;
  technologiesUsed: string[];
  futureEnhancements: string[];
  keyLearnings: string;
  architecture: string;
}

interface Project {
  id: number;
  title: string;
  desc: string;
  image: string;
  screenshots: string[];
  tags: string[];
  categories: string[];
  github: string;
  demo?: string;
  category: string;
  duration: string;
  status: string;
  updated: string;
  difficulty: "Medium" | "Hard" | "Advanced";
  caseStudy: CaseStudy;
}

export default function ProjectShowcaseGallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const filterTabs = [
    { name: "All", value: "all" },
    { name: "Full Stack", value: "fullstack" },
    { name: "Frontend", value: "frontend" },
    { name: "AI / ML", value: "aiml" },
    { name: "Java", value: "java" },
    { name: "React", value: "react" },
    { name: "Next.js", value: "nextjs" }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "CareerOS AI – Personalized Learning Platform",
      desc: "CSE final-year personalized education platform featuring student exam outcome predictions and content-based recommendation pathways.",
      image: "/assets/project-careeros.png",
      screenshots: [
        "/assets/project-careeros.png",
        "/assets/profile.png",
        "/assets/hero.png"
      ],
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "FastAPI", "Scikit-learn", "XGBoost", "Tailwind CSS"],
      categories: ["fullstack", "react", "aiml"],
      github: "https://github.com/ayushjha-07/smartlearn-ai",
      demo: "https://github.com/ayushjha-07/smartlearn-ai",
      category: "AI/ML Full Stack",
      duration: "Jan 2024 - Apr 2024",
      status: "Live",
      updated: "Apr 2024",
      difficulty: "Advanced",
      caseStudy: {
        problemSolved: "Traditional academic tracks follow generic timelines that fail to adapt to student strengths, leaving struggling learners without support.",
        myRole: "Lead Full Stack & ML Engineer. Developed dynamic React charts, structured Node.js API database controllers, and trained ML models.",
        keyFeatures: [
          "AI Success Predictor running Random Forest & XGBoost algorithms.",
          "Content Recommendation System using TF-IDF vectorization and Cosine Similarity.",
          "AI Remediation Roadmaps identifying weak areas from quiz history.",
          "Dynamic Weekly Planner adjusting sessions to dedicate extra time to prioritized topics."
        ],
        challengesFaced: "Computing TF-IDF vectorization and cosine similarity calculations inside the Node.js API caused noticeable request lag on larger loads.",
        solutionImplemented: "Built an independent AI microservice in Python using FastAPI, caching vector embeddings in memory and keeping heavy calculations off the Node server.",
        technologiesUsed: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Python FastAPI", "Scikit-Learn", "XGBoost", "Tailwind CSS"],
        futureEnhancements: [
          "Integrate Large Language Models (LLMs) via OpenAI for interactive tutor voice synthesis.",
          "Build course catalog vector index search engines (e.g. Pinecone) to scale recommendations."
        ],
        keyLearnings: "Learned the value of decoupled microservice architecture when building resource-heavy machine learning calculations alongside standard API handlers.",
        architecture: "Client (React/Tailwind) ➔ API Server (Node/Express) ➔ AI Microservice (Python/FastAPI) ➔ Database (MongoDB Atlas)."
      }
    },
    {
      id: 2,
      title: "HostelHub – Premium Smart Room Management",
      desc: "Luxury property management software featuring occupancy tracking grid maps, visitor ledgers, room assignments, and admin control panels.",
      image: "/assets/project-hostelhub.png",
      screenshots: [
        "/assets/project-hostelhub.png",
        "/assets/profile.png",
        "/assets/hero.png"
      ],
      tags: ["Python", "Flask", "SQLite", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      categories: ["fullstack"],
      github: "https://github.com/ayushjha-07/hostelhub-repo",
      category: "Full Stack Application",
      duration: "Nov 2023 - Dec 2023",
      status: "Live",
      updated: "Dec 2023",
      difficulty: "Medium",
      caseStudy: {
        problemSolved: "Manual room booking ledgers and spreadsheets cause booking overlaps and data loss in student properties.",
        myRole: "Full Stack Developer. Programmed Flask endpoints, modeled SQLite database relations, and built responsive glassmorphic cards.",
        keyFeatures: [
          "Interactive Visual Grid representing room structures, floors, and occupancy statuses.",
          "Occupant database engine with check-in, checkout, and room swap controls.",
          "Dynamic rent tracking ledger with paid, partial, and pending categorizations."
        ],
        challengesFaced: "Preventing race conditions when multiple admin users attempt to assign different students to the same room slot simultaneously.",
        solutionImplemented: "Configured atomic database transactions in SQLite and structured lock checks checking room limits before final booking commits.",
        technologiesUsed: ["Python", "Flask", "SQLite DB", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
        futureEnhancements: [
          "Integrate SMS check-in validation alerts using Twilio API integrations.",
          "Support payment gateways (Stripe) for direct client rent invoices."
        ],
        keyLearnings: "Deepened my understanding of database transactions, write locks, and concurrency checks in SQLite backends.",
        architecture: "Frontend (Tailwind/HTML5) ➔ Web App Handler (Python/Flask) ➔ Relational Database (SQLite)."
      }
    },
    {
      id: 3,
      title: "Kirana Store – Grocery E-Commerce Platform",
      desc: "High-performance grocery shopping application featuring live search filters, dynamic state cart, and optimized client caching.",
      image: "/assets/project-kirana.png",
      screenshots: [
        "/assets/project-kirana.png",
        "/assets/profile.png",
        "/assets/hero.png"
      ],
      tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vercel"],
      categories: ["frontend", "react"],
      github: "https://github.com/ayushjha-07/Kirana-Store",
      demo: "https://kirana-store-oq3u.vercel.app/",
      category: "Frontend E-Commerce",
      duration: "Oct 2023 - Nov 2023",
      status: "Live",
      updated: "Nov 2023",
      difficulty: "Medium",
      caseStudy: {
        problemSolved: "Local grocery vendors face difficulty transitioning inventories to clean web catalogs, resulting in lost client opportunities.",
        myRole: "Frontend UI Developer. Designed state flow structures, search indexes, and responsive storefront cards.",
        keyFeatures: [
          "Real-time instant text search filtering items in under 10ms.",
          "Multi-category sorting tabs allowing smooth navigation across product lists.",
          "Dynamic shopping cart tracking additions, quantity scaling, and local storage backup."
        ],
        challengesFaced: "Managing rapid cart item updates and price calculations cleanly without causing expensive page re-renders.",
        solutionImplemented: "Used customized local state triggers and optimized React component trees to update only individual item nodes on click.",
        technologiesUsed: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Vercel"],
        futureEnhancements: [
          "Connect Node.js and MongoDB backend to store product inventory details.",
          "Implement payment gateway checkouts with automated receipts."
        ],
        keyLearnings: "Mastered React state optimization, local storage interfaces, and component performance profiling with DevTools.",
        architecture: "Client App (React/Vite/Tailwind) ➔ Dynamic Client Caching (LocalStorage) ➔ Static CDN Host (Vercel)."
      }
    },
    {
      id: 4,
      title: "OS Virtual Memory Replacement Simulator",
      desc: "Interactive educational tool visualizing Operating System page replacement algorithms (FIFO vs LRU) with hit/fault ratios.",
      image: "/assets/project-memory.png",
      screenshots: [
        "/assets/project-memory.png",
        "/assets/profile.png",
        "/assets/hero.png"
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Algorithms"],
      categories: ["frontend"],
      github: "https://github.com/ayushjha-07/Management-System",
      demo: "https://rohitiwari2001.github.io/Rohitiwari2001.github.in/",
      category: "Simulation & Algorithms",
      duration: "Aug 2023",
      status: "Live",
      updated: "Aug 2023",
      difficulty: "Hard",
      caseStudy: {
        problemSolved: "Abstract operating system architectures (e.g. FIFO/LRU page replacements) are difficult to teach using static slides, confusing CS students.",
        myRole: "UI & Algorithm Engineer. Coded page replacement queue logic and designed dynamic memory cell animations.",
        keyFeatures: [
          "FIFO (First In First Out) replacement simulator visual cells.",
          "LRU (Least Recently Used) replacement simulator visual cells.",
          "Interactive statistics dashboard reporting page hits, faults, and fault ratios."
        ],
        challengesFaced: "Creating dynamic UI updates that match the algorithmic queue changes in real-time without latency during long reference string inputs.",
        solutionImplemented: "Separated algorithm logs into discrete steps and mapped them to React state triggers to step through animations cleanly.",
        technologiesUsed: ["JavaScript ES6", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
        futureEnhancements: [
          "Incorporate OPT (Optimal) and LFU (Least Frequently Used) algorithm types.",
          "Allow file imports (CSV) for custom reference string data sets."
        ],
        keyLearnings: "Improved custom queue algorithm implementations and gained high-fidelity declarative animation practices using Framer Motion.",
        architecture: "Interactive Visual Client (HTML5/Tailwind/Framer Motion) ➔ Local Queue Processor (JavaScript ES6)."
      }
    },
    {
      id: 5,
      title: "University Course Registration Portal",
      desc: "High-concurrency DBMS web application built with Spring Boot, implementing transaction database locks, student checksheets, and admin panels.",
      image: "/assets/project-java.png",
      screenshots: [
        "/assets/project-java.png",
        "/assets/profile.png",
        "/assets/hero.png"
      ],
      tags: ["Java", "Spring Boot", "Hibernate", "MySQL", "Thymeleaf", "Tailwind CSS"],
      categories: ["fullstack", "java"],
      github: "https://github.com/ayushjha-07",
      category: "Backend & DBMS Portal",
      duration: "Jun 2023 - Jul 2023",
      status: "Live",
      updated: "Jul 2023",
      difficulty: "Medium",
      caseStudy: {
        problemSolved: "Students encounter database locks and registration conflicts when hundreds of students enroll in popular courses simultaneously.",
        myRole: "Backend Database Developer. Configured Hibernate entities, SQL schemas, transaction levels, and Thymeleaf pages.",
        keyFeatures: [
          "Concurrency locking mechanism preventing registration capacity limits from breaking.",
          "Automatic transactional rollbacks ensuring data integrity on booking errors.",
          "Prerequisite checks validating student coursework records before enrollment."
        ],
        challengesFaced: "Students registering for the same courses concurrently triggered write deadlock errors in MySQL transaction logs.",
        solutionImplemented: "Integrated Hibernate Optimistic Concurrency controls with version tracking numbers, handling concurrency collisions gracefully.",
        technologiesUsed: ["Java", "Spring Boot", "Hibernate ORM", "MySQL Database", "Thymeleaf Templates", "Tailwind CSS"],
        futureEnhancements: [
          "Migrate frontend interfaces to a clean Next.js client model.",
          "Implement Redis caching structures to load course catalogs instantly under load."
        ],
        keyLearnings: "Gained structural backend expertise in database normalization, SQL schemas, write-ahead locks, and Spring JPA repositories.",
        architecture: "MVC UI (Thymeleaf/Tailwind) ➔ Backend Core (Java/Spring Boot) ➔ ORM Mapper (Hibernate) ➔ Database (MySQL)."
      }
    }
  ];

  // Combined Search & Filter Logic
  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.categories.includes(activeFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const nextSlide = () => {
    if (!selectedProject) return;
    setCarouselIndex((prev) => (prev + 1) % selectedProject.screenshots.length);
  };

  const prevSlide = () => {
    if (!selectedProject) return;
    setCarouselIndex((prev) => (prev - 1 + selectedProject.screenshots.length) % selectedProject.screenshots.length);
  };

  return (
    <section
      id="project-gallery"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {GALLERY_PARTICLES.map((particle) => (
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
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="text-[10px] font-mono font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/10">
            Portfolio Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            Project Showcase <span className="gradient-text">Gallery</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Explore my production-ready applications through an interactive gallery.
          </p>
        </motion.div>

        {/* Filter Controls & Search bar */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-12 max-w-5xl mx-auto bg-slate-950/20 backdrop-blur-md p-3.5 rounded-2xl border border-theme-border/60">
          
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
              placeholder="Search project, stack, filter..."
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

        {/* Projects Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <SpotlightCard className="h-full flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)]">
                  <div className="cursor-pointer" onClick={() => { setSelectedProject(project); setCarouselIndex(0); }}>
                    {/* Browser Mockup Header */}
                    <div className="bg-slate-100 dark:bg-slate-900/60 px-4 py-2 flex items-center border-b border-slate-200 dark:border-white/5 relative z-20">
                      <div className="flex gap-1.5 mr-auto">
                        <span className="w-2 h-2 rounded-full bg-rose-500/70" />
                        <span className="w-2 h-2 rounded-full bg-amber-500/70" />
                        <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
                      </div>
                      <span className="text-[9px] text-slate-600 dark:text-gray-500 font-mono absolute left-1/2 transform -translate-x-1/2 bg-slate-200/50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/5 rounded px-3 py-0.5 max-w-[140px] truncate select-none">
                        {project.title.toLowerCase().split(" ").join("-").substring(0, 15)}.io
                      </span>
                    </div>

                    {/* Image Showcase Container */}
                    <div className="relative h-48 overflow-hidden bg-slate-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                      
                      {/* Live status badge */}
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/10 text-[9px] font-bold font-mono uppercase tracking-wide text-emerald-400 flex items-center gap-1 select-none">
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
                        <span>{project.updated}</span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-5">
                      <span className="text-[9px] uppercase tracking-wider font-extrabold text-emerald-500 font-mono block mb-2">{project.category}</span>
                      <h3 className="text-base font-extrabold mb-2.5 text-slate-900 dark:text-white group-hover:text-emerald-400 transition-colors duration-300 leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
                        {project.desc}
                      </p>

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
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* If no projects match filter/search */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 mb-20">
            <p className="text-sm text-gray-500 font-medium">No projects found matching your criteria. Try another keyword or filter.</p>
          </div>
        )}

        {/* Bottom CTA Block */}
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
                Source Code & Apps
              </span>
              <p className="text-lg md:text-2xl font-extrabold text-slate-900 dark:text-white leading-relaxed">
                Interested in how I build software? Explore the source code or try the live applications.
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
                  <span>🚀 View All Projects</span>
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="https://github.com/ayushjha-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-theme-card transition-all duration-300 group/btn cursor-pointer"
                >
                  <Github size={14} />
                  <span>💻 Visit GitHub</span>
                </a>
              </Magnetic>
            </div>
          </SpotlightCard>
        </motion.div>

      </div>

      {/* Fullscreen Interactive Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-emerald-500/25 bg-slate-900/95 backdrop-blur-xl shadow-2xl p-6 md:p-8 z-10 text-slate-100 flex flex-col scrollbar-thin scrollbar-thumb-emerald-500"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg border border-white/5 bg-white/5 text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all duration-200 cursor-pointer z-50"
              >
                <X size={16} />
              </button>

              {/* Modal Title Block */}
              <div className="border-b border-white/5 pb-4 mb-6">
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold font-mono uppercase tracking-wider select-none inline-block mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl md:text-3xl font-black text-white leading-snug">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-3 text-[10px] font-mono text-gray-400 items-center">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-emerald-400" />
                    {selectedProject.duration}
                  </span>
                  <span>•</span>
                  <span>Difficulty: <strong className="text-emerald-400">{selectedProject.difficulty}</strong></span>
                  <span>•</span>
                  <span>Last Updated: <strong className="text-emerald-400">{selectedProject.updated}</strong></span>
                </div>
              </div>

              {/* Screenshots Carousel */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl bg-slate-950 border border-white/5 mb-6 group/carousel">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={carouselIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedProject.screenshots[carouselIndex]}
                      alt={`${selectedProject.title} screenshot ${carouselIndex + 1}`}
                      fill
                      sizes="(max-w-1024px) 100vw, 1024px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Controls */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 border border-white/10 text-white hover:border-emerald-500/40 hover:bg-slate-900 transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 border border-white/10 text-white hover:border-emerald-500/40 hover:bg-slate-900 transition-all cursor-pointer opacity-0 group-hover/carousel:opacity-100"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {selectedProject.screenshots.map((_, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setCarouselIndex(sIdx)}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                        carouselIndex === sIdx ? "bg-emerald-500 w-4" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Case Study Deep-Dive */}
              <div className="space-y-6 text-sm text-slate-300 pr-1 leading-relaxed">
                
                {/* Overview & Problem */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-white/5 bg-slate-950/20">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5 font-mono">
                      <AlertCircle size={14} /> Problem Statement
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {selectedProject.caseStudy.problemSolved}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/5 bg-slate-950/20">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5 font-mono">
                      <span>👤</span> Overview & Role
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {selectedProject.caseStudy.myRole}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5 font-mono">
                    <CheckCircle size={14} /> Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    {selectedProject.caseStudy.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="p-2.5 rounded-lg border border-white/3 bg-slate-950/10 flex items-start gap-2">
                        <span className="text-emerald-500 shrink-0 font-bold">▹</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture & Stack */}
                <div className="p-4 rounded-xl border border-white/5 bg-slate-950/20">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5 font-mono">
                    <Laptop size={14} /> System Architecture Overview
                  </h4>
                  <p className="text-xs text-slate-300 font-mono bg-slate-950/50 p-2.5 rounded-lg border border-white/5 leading-normal mb-3">
                    {selectedProject.caseStudy.architecture}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedProject.caseStudy.technologiesUsed.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 text-[10px] font-mono text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Key Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-rose-500/15 bg-rose-950/5">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-rose-400 mb-2 flex items-center gap-1.5 font-mono">
                      <span>🚧</span> Challenge Faced
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {selectedProject.caseStudy.challengesFaced}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-emerald-500/15 bg-emerald-950/5">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5 font-mono">
                      <span>💡</span> Key Learnings
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-300">
                      {selectedProject.caseStudy.keyLearnings}
                    </p>
                  </div>
                </div>

              </div>

              {/* Modal Footer Links */}
              <div className="flex gap-3 border-t border-white/5 pt-5 mt-6 relative z-10 w-full">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 text-white rounded-xl text-xs font-bold transition-all duration-300"
                >
                  <Github size={14} />
                  <span>GitHub Repository</span>
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-xl text-xs font-bold shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
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
