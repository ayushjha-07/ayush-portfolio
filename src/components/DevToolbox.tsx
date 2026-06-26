"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Code2, GitBranch, Globe, Database, Wrench, BookOpen,
  ClipboardList, Palette, FlaskConical, Rocket, TrendingUp,
  Coffee, Brain, RefreshCw, Star, Laptop
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Custom Tool SVG Icons
const VscodeIcon = () => (
  <svg className="w-5 h-5 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.986 6.012a.64.64 0 0 0-.17-.468L19.98.718a.637.637 0 0 0-.83 0l-3.328 2.658L6.89 2.012a.637.637 0 0 0-.64.088L.17 6.467c-.22.18-.22.508 0 .688l5.228 4.227a.64.64 0 0 0 .64.088l8.932-1.364 3.328 2.658a.637.637 0 0 0 .83 0l3.836-4.827a.64.64 0 0 0 .17-.468l-.148.468zM6.467 15.012c-.22-.18-.22-.508 0-.688l11.052-8.933a.64.64 0 0 1 .83 0l5.228 4.227a.64.64 0 0 1 0 .688l-5.228 4.227a.64.64 0 0 1-.83 0L6.467 15.012z"/>
  </svg>
);

const IntellijIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#000000" />
    <path d="M18 3L11.5 9.5L16.5 14.5L21 11V6.5L18 3Z" fill="#3B82F6" opacity="0.8" />
    <path d="M3 18L10 11L14.5 15.5L9 21H4.5L3 18Z" fill="#F97316" opacity="0.8" />
    <path d="M6 3L3 6.5V11L9.5 5.5L6 3Z" fill="#8B5CF6" opacity="0.8" />
    <path d="M21 18L18 21H13.5L18.5 15.5L21 18Z" fill="#EC4899" opacity="0.8" />
    <rect x="5" y="7" width="14" height="10" rx="1.5" fill="#000000" stroke="#FFFFFF" strokeWidth="1" />
    <text x="7" y="15" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">IJ</text>
  </svg>
);

const GitIcon = () => (
  <svg className="w-5 h-5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.4-.1s-1.3.4-1.7.8L6.8 3.5 10.3 7c.7-.2 1.4-.1 2 .2l2.6-2.6c-.3-.7-.2-1.5.2-2.1.6-.6 1.5-.7 2.2-.2.6.5.7 1.5.2 2.2-.5.6-1.4.7-2 .2l-2.6 2.6c.3.5.3 1.2 0 1.7L15.5 15c.6-.3 1.4-.2 2 .2.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.3-.3-1.9l-2.6-2.6c-.6.3-1.4.2-2-.2s-.7-1.3-.3-1.9L6.4 7.7 1.1 13c-.8.8-.8 2 0 2.8l10.2 10.2c.4.4 1 .6 1.7.6s1.3-.2 1.7-.6l10.2-10.2c.8-.8.8-2 .1-2.9z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5 text-slate-800 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const VercelIcon = () => (
  <svg className="w-5 h-5 text-slate-800 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 22h20L12 2z"/>
  </svg>
);

const RenderIcon = () => (
  <svg className="w-5 h-5 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const MongoIcon = () => (
  <svg className="w-5 h-5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.19 12.19c-.31-.83-.87-1.74-1.63-2.65-.95-1.14-2.12-2.19-3.23-3.21l-.33-.31-.33.31c-1.11 1.02-2.28 2.07-3.23 3.21-.76.91-1.32 1.82-1.63 2.65-.43 1.13-.53 2.37-.16 3.51.52 1.63 1.77 3 3.39 3.69v2.24l.98.92c.62.59 1.62.59 2.24 0l.98-.92v-2.24c1.62-.69 2.87-2.06 3.39-3.69.37-1.14.27-2.38-.16-3.51z"/>
  </svg>
);

const MysqlIcon = () => (
  <svg className="w-5 h-5 text-[#00758F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const PostmanIcon = () => (
  <svg className="w-5 h-5 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.01 2C6.5 2 2.01 6.49 2.01 12c0 5.5 4.49 10 10 10 5.5 0 10-4.5 10-10 0-5.51-4.5-10-10-10zm4.27 10.74l-2.12.7c-.12.44-.39.81-.76 1.05l.7 2.12c.04.14.01.29-.08.4-.09.11-.23.17-.38.16l-.88-.06c-.46-.03-.87-.24-1.16-.58l-1.48-1.52c-.31-.32-.47-.74-.47-1.17 0-.29.07-.57.21-.82L10.36 9.8c.2-.38.56-.66.98-.79l2.84-.85c.14-.04.29-.01.4.08.11.09.17.23.16.38l-.06.88c-.03.46-.24.87-.58 1.16l-1.52 1.48c-.09.09-.16.2-.21.32l.74 2.21 2.21-.74-.29-.87c-.04-.14-.01-.29.08-.4.09-.11.23-.17.38-.16l.88.06c.15.01.29-.05.38-.16.09-.11.12-.26.08-.4l-.27-.82z"/>
  </svg>
);

const RestApiIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
);

const JwtIcon = () => (
  <svg className="w-5 h-5 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CloudIcon = () => (
  <svg className="w-5 h-5 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.47 0-.89.09-1.3.27A5 5 0 0 0 5 14c0 2.76 2.24 5 5 5h7.5z" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-5 h-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
  </svg>
);

// Decors/Particles
const TOOLBOX_PARTICLES = [
  { id: 1, top: "12%", left: "5%", size: 4, delay: 0.5 },
  { id: 2, top: "45%", left: "85%", size: 5, delay: 1.8 },
  { id: 3, top: "75%", left: "12%", size: 4, delay: 2.2 },
];

export default function DevToolbox() {
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

  // 1. Development Environment Data
  const categories = [
    {
      title: "Code Editor",
      icon: <Laptop size={18} />,
      tools: [
        { name: "VS Code", logo: <VscodeIcon />, desc: "Primary writing environment with shortcuts & custom workflow setup." },
        { name: "IntelliJ IDEA", logo: <IntellijIcon />, desc: "Used for comprehensive Java project architectures and OOP styling." }
      ]
    },
    {
      title: "Version Control",
      icon: <GitBranch size={18} />,
      tools: [
        { name: "Git", logo: <GitIcon />, desc: "Distributed version control system for local branching & commits." },
        { name: "GitHub", logo: <GithubIcon />, desc: "Remote repository hosting platform for staging & team collab pipelines." }
      ]
    },
    {
      title: "Deployment",
      icon: <Globe size={18} />,
      tools: [
        { name: "Vercel", logo: <VercelIcon />, desc: "Cloud platform hosting serverless Next.js and static UI stacks." },
        { name: "Render", logo: <RenderIcon />, desc: "Dynamic server web service executor container hosting backend builds." }
      ]
    },
    {
      title: "Database",
      icon: <Database size={18} />,
      tools: [
        { name: "MongoDB", logo: <MongoIcon />, desc: "NoSQL document database managing highly flexible payload collections." },
        { name: "MySQL", logo: <MysqlIcon />, desc: "Relational database utilizing index tables & rigid entity models." }
      ]
    },
    {
      title: "API & Testing",
      icon: <Wrench size={18} />,
      tools: [
        { name: "Postman", logo: <PostmanIcon />, desc: "Testing request payloads, headers, endpoints, and variables." },
        { name: "REST API", logo: <RestApiIcon />, desc: "Designing structured, modular endpoints mapping resource flows." },
        { name: "JWT Authentication", logo: <JwtIcon />, desc: "Validating user session credentials with stateless security tokens." }
      ]
    },
    {
      title: "Learning",
      icon: <BookOpen size={18} />,
      tools: [
        { name: "Cloud Computing", logo: <CloudIcon />, desc: "Scaling systems, database nodes, and cloud storage patterns." },
        { name: "AI & Machine Learning", logo: <BrainIcon />, desc: "Mapping training weights, regressions, and dataset operations." }
      ]
    }
  ];

  // 2. Workflow Timeline Data
  const steps = [
    { name: "Plan", label: "📝", icon: <ClipboardList size={22} />, desc: "Analyzing scope, defining data architectures, and drafting roadmap routes." },
    { name: "Design", label: "🎨", icon: <Palette size={22} />, desc: "Mapping interface paths, database schemas, and modular components." },
    { name: "Develop", label: "💻", icon: <Code2 size={22} />, desc: "Writing clean OOP or functional logic with strict code type safety." },
    { name: "Test", label: "🧪", icon: <FlaskConical size={22} />, desc: "Evaluating response times, verifying endpoints, and security testing." },
    { name: "Deploy", label: "🚀", icon: <Rocket size={22} />, desc: "Shipping production builds to servers via automated CD pipelines." },
    { name: "Improve", label: "📈", icon: <TrendingUp size={22} />, desc: "Refactoring methods, tracking site speed, and patching updates." }
  ];

  // 3. Daily Workflow Timeline Data
  const dailyRoutine = [
    { title: "Coffee", desc: "Start the day fresh, planning tasks.", icon: <Coffee size={20} /> },
    { title: "Coding", desc: "Build new features & clean files.", icon: <Code2 size={20} /> },
    { title: "DSA Practice", desc: "Keep analytical skills sharp.", icon: <Brain size={20} /> },
    { title: "Build Projects", desc: "Develop complex real-world apps.", icon: <Rocket size={20} /> },
    { title: "Learn New Tech", desc: "Read documentation & release notes.", icon: <BookOpen size={20} /> },
    { title: "Repeat", desc: "Iterate daily for continuous growth.", icon: <RefreshCw size={20} /> }
  ];

  return (
    <section
      id="dev-toolbox"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-b border-theme-border transition-colors duration-300 bg-theme-bg/5"
    >
      {/* Decorative Neon Emerald Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/3 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparkles */}
      {TOOLBOX_PARTICLES.map((particle) => (
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
            Developer workspace
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-4">
            Developer <span className="gradient-text">Toolbox</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            The technologies, tools, and workflow I use to build modern, scalable, and production-ready software.
          </p>
        </motion.div>

        {/* Development Environment Grid */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 justify-start">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Tech Setup
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Development Environment</h3>
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category, idx) => (
              <motion.div key={idx} variants={cardVariants} className="h-full">
                <SpotlightCard className="h-full p-6 border border-theme-border/60 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)] bg-slate-50/40 dark:bg-slate-900/30 rounded-2xl flex flex-col relative group overflow-hidden transition-all duration-300">
                  
                  {/* Category Title Header */}
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200/50 dark:border-white/5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      {category.icon}
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h4>
                  </div>

                  {/* Tools List */}
                  <div className="flex flex-col gap-4 flex-grow">
                    {category.tools.map((tool, tIdx) => (
                      <div key={tIdx} className="flex gap-3 items-start group/tool p-2.5 rounded-xl hover:bg-slate-200/30 dark:hover:bg-white/5 border border-transparent hover:border-emerald-500/15 transition-all duration-300">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-900/50 border border-slate-200/60 dark:border-white/5 flex items-center justify-center shrink-0 group-hover/tool:scale-110 transition-transform">
                          {tool.logo}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover/tool:text-emerald-500 dark:group-hover/tool:text-emerald-400 transition-colors">
                            {tool.name}
                          </span>
                          <p className="text-[10px] text-slate-500 dark:text-gray-400 leading-normal mt-0.5">
                            {tool.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Development Workflow Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 justify-start">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Pipelines
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Development Workflow</h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative"
          >
            {steps.map((step, idx) => (
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
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-3.5 z-20 text-emerald-500/50 hover:text-emerald-500 transition-colors duration-300">
                    <span className="text-lg font-bold">➔</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Daily Workflow Horizontal Timeline */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8 justify-start">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Routine
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Daily Workflow</h3>
          </div>

          <div className="relative p-6 md:p-8 rounded-2xl bg-slate-50/20 dark:bg-slate-950/25 border border-theme-border/60 overflow-hidden shadow-inner">
            
            {/* Timeline Horizontal Line (Dotted background line) */}
            <div className="absolute top-[48px] left-[5%] right-[5%] h-[2px] border-t-2 border-dashed border-emerald-500/20 hidden lg:block" />

            {/* Glowing animated path indicator */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "90%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-[48px] left-[5%] h-[2px] bg-gradient-to-r from-emerald-500/10 via-emerald-500 to-emerald-500/10 shadow-[0_0_8px_rgba(16,185,129,0.5)] hidden lg:block"
            />

            {/* Grid for steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {dailyRoutine.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Timeline node */}
                  <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-emerald-500/30 dark:border-emerald-500/40 group-hover:border-emerald-500 flex items-center justify-center text-emerald-500 z-20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-all duration-300 bg-theme-bg">
                    {item.icon}
                  </div>

                  {/* Title & Desc */}
                  <div className="mt-4">
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider block font-mono">
                      {item.title}
                    </span>
                    <p className="text-[10px] text-slate-500 dark:text-gray-400 leading-normal mt-1 max-w-[150px] mx-auto">
                      {item.desc}
                    </p>
                  </div>

                  {/* Arrow Indicator for Mobile/Tablet */}
                  {idx < dailyRoutine.length - 1 && (
                    <div className="text-emerald-500/30 font-bold text-sm my-2 block lg:hidden">
                      ↓
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Quote Card */}
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
                &ldquo;Great software isn&apos;t built by tools alone—it&apos;s built by curiosity, consistency, and continuous learning.&rdquo;
              </blockquote>

              <div className="h-[1px] w-12 bg-emerald-500/30 mt-2" />
            </div>

          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
