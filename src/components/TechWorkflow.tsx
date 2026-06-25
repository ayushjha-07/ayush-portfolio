"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Lightbulb, Palette, Code2, RefreshCw, Smartphone, Zap, 
  Layers, ShieldCheck, GitBranch, BookOpen, ChevronDown
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Static background particles to avoid Next.js hydration mismatches
const WORKFLOW_PARTICLES = [
  { id: 1, top: "10%", left: "8%", size: 4, delay: 0 },
  { id: 2, top: "35%", left: "82%", size: 5, delay: 2 },
  { id: 3, top: "60%", left: "15%", size: 4, delay: 4 },
  { id: 4, top: "85%", left: "88%", size: 6, delay: 1 },
];

// Tech Logos SVGs
const ReactLogo = () => (
  <svg className="w-5 h-5 text-cyan-400 animate-[spin_15s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
    <g stroke="#00D8FF" strokeWidth="1">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextLogo = () => (
  <svg className="w-5 h-5 text-black dark:text-white bg-white dark:bg-transparent rounded-full" viewBox="0 0 180 180" fill="none">
    <circle cx="90" cy="90" r="90" fill="currentColor" />
    <path d="M149.508 157.52L69.142 54H54V126H68.118V75.7613L139.736 167.369C143.193 164.404 146.458 161.121 149.508 157.52Z" fill="#000"/>
    <rect x="115" y="54" width="14.1176" height="72" fill="#000"/>
  </svg>
);

const TailwindLogo = () => (
  <svg className="w-5 h-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const TypeScriptLogo = () => (
  <svg className="w-5 h-5 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.125 0h21.75c.621 0 1.125.504 1.125 1.125v21.75c0 .621-.504 1.125-1.125 1.125H1.125A1.125 1.125 0 0 1 0 22.875V1.125C0 .504.504 0 1.125 0zm17.072 17.514c0-.986-.532-1.745-1.597-2.277-.665-.333-1.469-.583-2.413-.749-.944-.167-1.536-.396-1.777-.687-.241-.29-.361-.649-.361-1.077 0-.462.19-.838.568-1.127.38-.289.923-.434 1.632-.434.697 0 1.25.176 1.656.527.408.35.633.864.673 1.54h3.188c-.067-1.396-.549-2.433-1.446-3.11-.897-.677-2.128-1.016-3.69-1.016-1.632 0-2.903.385-3.811 1.155-.908.77-1.362 1.778-1.362 3.023 0 .937.288 1.68.864 2.228.577.548 1.5.94 2.766 1.176 1.266.236 2.052.483 2.359.743.307.259.46.602.46 1.026 0 .538-.246.953-.737 1.246-.492.293-1.174.44-2.046.44-.993 0-1.764-.23-2.314-.689-.55-.46-.867-1.13-1.054-2.012H8.388c.068 1.624.622 2.836 1.662 3.636 1.04.801 2.502 1.201 4.385 1.201 1.782 0 3.167-.384 4.156-1.152.989-.768 1.484-1.763 1.484-2.985zm-7.662-7.04h-3.344v9.84H4.37v-9.84H1.025v-2.88h9.5v2.88z"/>
  </svg>
);

const NodeLogo = () => (
  <svg className="w-5 h-5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7.7v11.5L12 22l10-5.7v-11.5L12 2zM12 4.4l7.6 4.4v8.7L12 19.6l-7.6-4.4V8.8L12 4.4z" />
  </svg>
);

const ExpressLogo = () => (
  <span className="text-[10px] font-black font-mono text-slate-800 dark:text-white leading-none">EX</span>
);

const JwtLogo = () => (
  <span className="text-[9px] font-black font-mono text-pink-500 leading-none">JWT</span>
);

const ApisLogo = () => (
  <span className="text-[9px] font-black font-mono text-emerald-400 leading-none">API</span>
);

const MongoLogo = () => (
  <svg className="w-5 h-5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.19 12.19c-.31-.83-.87-1.74-1.63-2.65-.95-1.14-2.12-2.19-3.23-3.21l-.33-.31-.33.31c-1.11 1.02-2.28 2.07-3.23 3.21-.76.91-1.32 1.82-1.63 2.65-.43 1.13-.53 2.37-.16 3.51.52 1.63 1.77 3 3.39 3.69v2.24l.98.92c.62.59 1.62.59 2.24 0l.98-.92v-2.24c1.62-.69 2.87-2.06 3.39-3.69.37-1.14.27-2.38-.16-3.51z"/>
  </svg>
);

const MySqlLogo = () => (
  <span className="text-[9px] font-black font-mono text-blue-400 leading-none">SQL</span>
);

const PythonLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M12.126 2C9.378 2 7.747 3.197 7.747 5.922v1.948h4.437V8.4h-6.26C3.992 8.4 2 9.948 2 12.696c0 2.748 1.83 4.226 4.312 4.226h1.487v-2.091c0-2.478 1.974-4.574 4.456-4.574h4.437V7.87c0-2.725-1.812-5.87-5.566-5.87z" fill="#3776AB"/>
    <path d="M11.874 22c2.748 0 4.379-1.197 4.379-3.922v-1.948h-4.437V15.6h6.26c1.932 0 3.922-1.548 3.922-4.296C22 8.556 20.17 7.078 17.688 7.078h-1.487v2.091c0 2.478-1.974 4.574-4.456 4.574H7.308v2.387c0 2.725 1.812 5.87 5.566 5.87z" fill="#FFD43B"/>
  </svg>
);

const ScikitLogo = () => (
  <span className="text-[9px] font-black font-mono text-[#F7931E] leading-none">SK</span>
);

const PandasLogo = () => (
  <span className="text-[9px] font-black font-mono text-emerald-400 leading-none">PD</span>
);


const XgBoostLogo = () => (
  <span className="text-[9px] font-black font-mono text-orange-400 leading-none">XB</span>
);

const GitLogo = () => (
  <svg className="w-5 h-5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.4-.1s-1.3.4-1.7.8L6.8 3.5 10.3 7c.7-.2 1.4-.1 2 .2l2.6-2.6c-.3-.7-.2-1.5.2-2.1.6-.6 1.5-.7 2.2-.2.6.5.7 1.5.2 2.2-.5.6-1.4.7-2 .2l-2.6 2.6c.3.5.3 1.2 0 1.7L15.5 15c.6-.3 1.4-.2 2 .2.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.3-.3-1.9l-2.6-2.6c-.6.3-1.4.2-2-.2s-.7-1.3-.3-1.9L6.4 7.7 1.1 13c-.8.8-.8 2 0 2.8l10.2 10.2c.4.4 1 .6 1.7.6s1.3-.2 1.7-.6l10.2-10.2c.8-.8.8-2 .1-2.9z"/>
  </svg>
);

const VercelLogo = () => (
  <svg className="w-5 h-5 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 22h20L12 2z"/>
  </svg>
);

const RenderLogo = () => (
  <span className="text-[9px] font-black font-mono text-indigo-400 leading-none">RN</span>
);

const PostmanLogo = () => (
  <svg className="w-5 h-5 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>
);

export default function TechWorkflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);

  const isContainerInView = useInView(containerRef, { once: true, amount: 0.05 });
  const isFlowInView = useInView(flowRef, { once: true, amount: 0.05 });
  const isTimelineInView = useInView(timelineRef, { once: true, amount: 0.1 });
  const isPrinciplesInView = useInView(principlesRef, { once: true, amount: 0.1 });

  const architectureLayers = [
    {
      name: "Frontend Layer",
      technologies: [
        { name: "React.js", logo: <ReactLogo />, desc: "Component library for building responsive dynamic visual templates." },
        { name: "Next.js", logo: <NextLogo />, desc: "React framework for pre-rendered SEO pages & server actions." },
        { name: "TypeScript", logo: <TypeScriptLogo />, desc: "Type-safe programming scripting protecting logical integrity." },
        { name: "Tailwind CSS", logo: <TailwindLogo />, desc: "Utility styling structure for clean, scalable, mobile-first design." }
      ]
    },
    {
      name: "Backend Layer",
      technologies: [
        { name: "Node.js", logo: <NodeLogo />, desc: "V8 JavaScript server runtime managing async operation flows." },
        { name: "Express.js", logo: <ExpressLogo />, desc: "Minimalist server route mapping framework routing payload queries." },
        { name: "REST APIs", logo: <ApisLogo />, desc: "Payload interfaces mapping network requests to JSON database queries." },
        { name: "JWT Auth", logo: <JwtLogo />, desc: "Stateless security authorization tokens validating session logins." }
      ]
    },
    {
      name: "Database Layer",
      technologies: [
        { name: "MongoDB", logo: <MongoLogo />, desc: "NoSQL document database storing scalable cluster documents." },
        { name: "MySQL", logo: <MySqlLogo />, desc: "Relational database utilizing SQL tables with custom schemas." }
      ]
    },
    {
      name: "AI / ML Layer",
      technologies: [
        { name: "Python", logo: <PythonLogo />, desc: "Versatile math programming runtime training AI data networks." },
        { name: "Scikit-learn", logo: <ScikitLogo />, desc: "Data modeling package mapping classification algorithms." },
        { name: "Pandas & NumPy", logo: <PandasLogo />, desc: "Matrix mathematical structures modeling vector matrix computations." },
        { name: "XGBoost", logo: <XgBoostLogo />, desc: "Decision tree learning packages resolving complex tabular maps." }
      ]
    },
    {
      name: "Deployment Layer",
      technologies: [
        { name: "GitHub", logo: <GitLogo />, desc: "Git version tracking host controlling collaborative updates." },
        { name: "Vercel", logo: <VercelLogo />, desc: "Cloud build pipeline serving compiled next-gen static sites." },
        { name: "Render", logo: <RenderLogo />, desc: "Cloud server instance container executing background web scripts." },
        { name: "Postman", logo: <PostmanLogo />, desc: "API validator route testing tool inspecting endpoint headers." }
      ]
    }
  ];

  const sdlcWorkflow = [
    { num: "01", step: "Idea", icon: <Lightbulb size={20} className="text-emerald-500" />, desc: "Defining targets, gathering specifications, and formulating structural requirements." },
    { num: "02", step: "Design", icon: <Palette size={20} className="text-emerald-500" />, desc: "Drafting user flow templates, designing schemas, and selecting suitable tech stack layers." },
    { num: "03", step: "Development", icon: <Code2 size={20} className="text-emerald-500" />, desc: "Writing modular logic, building routing systems, and integrating data flows." },
    { num: "04", step: "Testing", icon: <ShieldCheck size={20} className="text-emerald-500" />, desc: "Debugging variables, executing test calls, and validating session security." },
    { num: "05", step: "Deployment", icon: <Zap size={20} className="text-emerald-500" />, desc: "Setting up CI/CD pipes, pushing live containers, and testing performance." },
    { num: "06", step: "Maintenance", icon: <RefreshCw size={20} className="text-emerald-500" />, desc: "Monitoring uptime logs, tuning resource allocations, and building feature updates." }
  ];

  const engineeringPrinciples = [
    { title: "Clean Code", desc: "Practicing SOLID & DRY rules to produce easily maintainable logic.", icon: <Code2 size={20} /> },
    { title: "Responsive Design", desc: "Structuring UI viewports to scale elegantly across all form factors.", icon: <Smartphone size={20} /> },
    { title: "Performance Tuning", desc: "Executing static optimizations, script deferring, and lazy-loading.", icon: <Zap size={20} /> },
    { title: "API Integration", desc: "Connecting secure web services using structured JSON payloads.", icon: <Layers size={20} /> },
    { title: "Scalable Architecture", desc: "Designing modular directory formats and database cluster formats.", icon: <Layers size={20} /> },
    { title: "Security Protocols", desc: "Encrypting credentials, verifying headers, and checking auth logs.", icon: <ShieldCheck size={20} /> },
    { title: "Version Control", desc: "Utilizing Git pull requests, staging, and structural check points.", icon: <GitBranch size={20} /> },
    { title: "Continuous Learning", desc: "Exploring documentation releases, technical updates, and updates.", icon: <BookOpen size={20} /> }
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: idx * 0.08, duration: 0.5, ease: "easeOut" as const }
    })
  };

  return (
    <section 
      id="tech-workflow" 
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Background Glows */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {WORKFLOW_PARTICLES.map((particle) => (
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
          initial={{ opacity: 0, y: -20 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tech Stack &amp; <span className="gradient-text">Workflow</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            The technologies and architecture I use to build scalable, modern, and production-ready applications.
          </p>
        </motion.div>

        {/* Part 1: Architecture Diagram Flow */}
        <div ref={flowRef} className="mb-24 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-10 w-full justify-start">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Pipeline
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Architecture Layers</h3>
          </div>

          <div className="w-full max-w-4xl flex flex-col items-center gap-2">
            {architectureLayers.map((layer, layerIdx) => (
              <React.Fragment key={layerIdx}>
                {/* Arrow connector between layers */}
                {layerIdx > 0 && (
                  <motion.div 
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                    className="flex flex-col items-center text-emerald-500 drop-shadow-[0_0_6px_rgba(16,185,129,0.4)] my-1"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                )}

                {/* Layer Block */}
                <motion.div 
                  custom={layerIdx}
                  initial="hidden"
                  animate={isFlowInView ? "visible" : "hidden"}
                  variants={fadeUpVariants}
                  className="w-full"
                >
                  <div className="p-6 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-theme-border/60 hover:border-emerald-500/25 transition-colors duration-300">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-gray-500 font-mono mb-4 border-b border-theme-border/40 pb-2">
                      {layer.name}
                    </h4>

                    {/* Tech Cards Grid inside layer */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {layer.technologies.map((tech, techIdx) => (
                        <div key={techIdx} className="group relative">
                          {/* Tooltip Description */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-950/95 border border-emerald-500/30 text-emerald-400 text-[10px] md:text-xs rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 shadow-[0_0_12px_rgba(16,185,129,0.25)] text-center w-48 z-30 leading-snug">
                            {tech.desc}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
                          </div>

                          <SpotlightCard className="p-4 h-full flex items-center gap-3 bg-slate-50/70 dark:bg-slate-900/50 hover:border-emerald-500/40 border border-theme-border/50 transition-all duration-200">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center justify-center shrink-0 text-emerald-500 font-bold">
                              {tech.logo}
                            </div>
                            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                              {tech.name}
                            </span>
                          </SpotlightCard>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Part 2: Horizontal Workflow Timeline */}
        <div ref={timelineRef} className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Process
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Development Workflow</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {sdlcWorkflow.map((step, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate={isTimelineInView ? "visible" : "hidden"}
                variants={fadeUpVariants}
                className="h-full"
              >
                <SpotlightCard className="p-5 h-full flex flex-col justify-between hover-lift border-theme-border/60 bg-slate-50/50 dark:bg-slate-900/40">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-theme-border/50">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                          {step.icon}
                        </div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">
                          {step.step}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500">
                        {step.num}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 3: Engineering Principles Grid */}
        <div ref={principlesRef} className="mb-12">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/10">
              Standards
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Development Principles</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringPrinciples.map((principle, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate={isPrinciplesInView ? "visible" : "hidden"}
                variants={fadeUpVariants}
                className="h-full"
              >
                <SpotlightCard className="p-5 h-full flex flex-col justify-between hover-lift border-theme-border/60 bg-slate-50/50 dark:bg-slate-900/40">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                      {principle.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wider font-mono">
                      {principle.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
