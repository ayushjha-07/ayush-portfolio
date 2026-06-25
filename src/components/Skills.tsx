"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Globe, Database, Wrench, Brain, Server, ShieldCheck, Terminal } from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { Github as GithubBrandIcon } from "./BrandIcons";

// Tech Logos SVG Render Helpers
const ReactLogo = () => (
  <svg className="w-4 h-4 text-cyan-400 animate-[spin_15s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
    <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
    <g stroke="#00D8FF" strokeWidth="1">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const NextLogo = () => (
  <svg className="w-4 h-4 text-black dark:text-white bg-white dark:bg-transparent rounded-full" viewBox="0 0 180 180" fill="none">
    <circle cx="90" cy="90" r="90" fill="currentColor" />
    <path d="M149.508 157.52L69.142 54H54V126H68.118V75.7613L139.736 167.369C143.193 164.404 146.458 161.121 149.508 157.52Z" fill="#000"/>
    <rect x="115" y="54" width="14.1176" height="72" fill="#000"/>
  </svg>
);

const TailwindLogo = () => (
  <svg className="w-4 h-4 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

const HtmlLogo = () => (
  <svg className="w-4 h-4 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5.7H7.7l.2 2.1h10.3l-.6 6.1-5.6 1.9-5.6-1.9-.4-3.8h2.1l.2 2 3.7 1.2 3.7-1.2.4-3.8H5.8L5 2.1h14.2l-.7 3.6z"/>
  </svg>
);

const CssLogo = () => (
  <svg className="w-4 h-4 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.3 5.3H6.8l.3 2.5h10.4l-.3 3-5.2 1.7-5.2-1.7-.3-3H4.4l.7 6.7 6.9 2.3 6.9-2.3.9-9.2z"/>
  </svg>
);

const PythonLogo = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <path d="M12.126 2C9.378 2 7.747 3.197 7.747 5.922v1.948h4.437V8.4h-6.26C3.992 8.4 2 9.948 2 12.696c0 2.748 1.83 4.226 4.312 4.226h1.487v-2.091c0-2.478 1.974-4.574 4.456-4.574h4.437V7.87c0-2.725-1.812-5.87-5.566-5.87z" fill="#3776AB"/>
    <path d="M11.874 22c2.748 0 4.379-1.197 4.379-3.922v-1.948h-4.437V15.6h6.26c1.932 0 3.922-1.548 3.922-4.296C22 8.556 20.17 7.078 17.688 7.078h-1.487v2.091c0 2.478-1.974 4.574-4.456 4.574H7.308v2.387c0 2.725 1.812 5.87 5.566 5.87z" fill="#FFD43B"/>
  </svg>
);

const JavaLogo = () => (
  <svg className="w-4 h-4 text-[#F89820]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a3 3 0 1 1 0 6h-1" />
    <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" x2="6" y1="2" y2="4" />
    <line x1="10" x2="10" y1="2" y2="4" />
    <line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);

const MongoLogo = () => (
  <svg className="w-4 h-4 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.19 12.19c-.31-.83-.87-1.74-1.63-2.65-.95-1.14-2.12-2.19-3.23-3.21l-.33-.31-.33.31c-1.11 1.02-2.28 2.07-3.23 3.21-.76.91-1.32 1.82-1.63 2.65-.43 1.13-.53 2.37-.16 3.51.52 1.63 1.77 3 3.39 3.69v2.24l.98.92c.62.59 1.62.59 2.24 0l.98-.92v-2.24c1.62-.69 2.87-2.06 3.39-3.69.37-1.14.27-2.38-.16-3.51z"/>
  </svg>
);

const GitLogo = () => (
  <svg className="w-4 h-4 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.4-.1s-1.3.4-1.7.8L6.8 3.5 10.3 7c.7-.2 1.4-.1 2 .2l2.6-2.6c-.3-.7-.2-1.5.2-2.1.6-.6 1.5-.7 2.2-.2.6.5.7 1.5.2 2.2-.5.6-1.4.7-2 .2l-2.6 2.6c.3.5.3 1.2 0 1.7L15.5 15c.6-.3 1.4-.2 2 .2.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.3-.3-1.9l-2.6-2.6c-.6.3-1.4.2-2-.2s-.7-1.3-.3-1.9L6.4 7.7 1.1 13c-.8.8-.8 2 0 2.8l10.2 10.2c.4.4 1 .6 1.7.6s1.3-.2 1.7-.6l10.2-10.2c.8-.8.8-2 .1-2.9z"/>
  </svg>
);

const VscodeLogo = () => (
  <svg className="w-4 h-4 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.986 6.012a.64.64 0 0 0-.17-.468L19.98.718a.637.637 0 0 0-.83 0l-3.328 2.658L6.89 2.012a.637.637 0 0 0-.64.088L.17 6.467c-.22.18-.22.508 0 .688l5.228 4.227a.64.64 0 0 0 .64.088l8.932-1.364 3.328 2.658a.637.637 0 0 0 .83 0l3.836-4.827a.64.64 0 0 0 .17-.468l-.148.468zM6.467 15.012c-.22-.18-.22-.508 0-.688l11.052-8.933a.64.64 0 0 1 .83 0l5.228 4.227a.64.64 0 0 1 0 .688l-5.228 4.227a.64.64 0 0 1-.83 0L6.467 15.012z"/>
  </svg>
);

const VercelLogo = () => (
  <svg className="w-4 h-4 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 22h20L12 2z"/>
  </svg>
);

const PostmanLogo = () => (
  <svg className="w-4 h-4 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>
);

const NodeLogo = () => (
  <svg className="w-4 h-4 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7.7v11.5L12 22l10-5.7v-11.5L12 2zM12 4.4l7.6 4.4v8.7L12 19.6l-7.6-4.4V8.8L12 4.4z" />
  </svg>
);

interface SkillItem {
  name: string;
  level: number;
  description: string;
  logo: React.ReactNode;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

// Single Skill Row Component with progress bar and tooltip
function SkillProgressBar({ skill, index }: { skill: SkillItem; index: number }) {
  return (
    <div className="relative group/item flex flex-col gap-2 p-3.5 rounded-xl bg-slate-900/10 dark:bg-white/3 border border-slate-200/50 dark:border-white/5 hover:border-emerald-500/25 hover:bg-slate-100/50 dark:hover:bg-emerald-500/5 transition-all duration-300">
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-52 p-2.5 bg-slate-950/95 text-white text-[10px] md:text-xs rounded-lg shadow-xl border border-emerald-500/25 opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto transition-opacity duration-300 z-50 text-center leading-relaxed">
        {skill.description}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-t-4 border-t-slate-950/95 border-x-4 border-x-transparent" />
      </div>

      {/* Info Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
            {skill.logo}
          </div>
          <span className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200">{skill.name}</span>
        </div>
        <span className="text-[10px] md:text-xs font-bold font-mono text-emerald-500">{skill.level}%</span>
      </div>

      {/* Progress Track */}
      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.05 }}
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  // Filters State
  const [activeFilter, setActiveFilter] = useState<"all" | "languages" | "frontend" | "backend" | "database" | "tools" | "ai">("all");

  const filterList = [
    { id: "all", label: "All" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
    { id: "ai", label: "AI/ML" },
  ] as const;

  const skillCategories: SkillCategory[] = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: <Code2 size={20} className="text-emerald-400 animate-pulse" />,
      skills: [
        { name: "Java", level: 90, description: "Strong in Object-Oriented patterns, clean architecture, and systems.", logo: <JavaLogo /> },
        { name: "Python", level: 80, description: "Used for scripting, data analysis, and Machine Learning models.", logo: <PythonLogo /> },
        { name: "JavaScript", level: 90, description: "Core asynchronous operations, scripting, modern ES6+, and client logic.", logo: <div className="text-[9px] font-bold text-yellow-500 font-mono">JS</div> },
        { name: "TypeScript", level: 85, description: "Type-safe programming for scalable components and interfaces.", logo: <div className="text-[9px] font-bold text-blue-500 font-mono">TS</div> }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <Globe size={20} className="text-emerald-400 animate-pulse" />,
      skills: [
        { name: "React.js", level: 95, description: "Component state design, custom hooks, context rendering, and virtual DOM optimization.", logo: <ReactLogo /> },
        { name: "Next.js", level: 92, description: "Server-side rendering, static generation, app router routing, and optimized builds.", logo: <NextLogo /> },
        { name: "Tailwind CSS", level: 95, description: "Responsive layouts, utility-first configurations, and style frameworks.", logo: <TailwindLogo /> },
        { name: "Framer Motion", level: 80, description: "Declarative layouts, page routing transitions, and interactive components.", logo: <div className="text-[9px] font-bold text-purple-400">FM</div> },
        { name: "HTML5", level: 90, description: "Semantic web standards, metadata SEO rules, and page structure.", logo: <HtmlLogo /> },
        { name: "CSS3", level: 90, description: "Advanced layouts, animations, transitions, grid setups, and styling.", logo: <CssLogo /> }
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <Server size={20} className="text-emerald-400 animate-pulse" />,
      skills: [
        { name: "Node.js", level: 88, description: "Event-driven runtime for concurrent server request loops.", logo: <NodeLogo /> },
        { name: "Express.js", level: 88, description: "Minimalist server routing, APIs, and middleware implementations.", logo: <div className="text-[8px] font-bold text-slate-400">EX</div> },
        { name: "REST APIs", level: 90, description: "Designing endpoints, HTTP method mappings, and JSON schema requests.", logo: <Terminal size={12} /> },
        { name: "JWT Authentication", level: 85, description: "Token verification loops, password hashing, and cookie sessions.", logo: <ShieldCheck size={12} /> }
      ]
    },
    {
      id: "database",
      title: "Databases",
      icon: <Database size={20} className="text-emerald-400 animate-pulse" />,
      skills: [
        { name: "MongoDB", level: 85, description: "NoSQL document storage, indexing configurations, and aggregation pipelines.", logo: <MongoLogo /> },
        { name: "MySQL", level: 85, description: "Relational queries, structure schema mappings, indexing, and joins.", logo: <Database size={12} /> }
      ]
    },
    {
      id: "tools",
      title: "Cloud & Tools",
      icon: <Wrench size={20} className="text-emerald-400 animate-pulse" />,
      skills: [
        { name: "Git", level: 90, description: "Distributed repository branching, rebasing, merge workflows.", logo: <GitLogo /> },
        { name: "GitHub", level: 90, description: "Collaborative repository version control, actions, and page tools.", logo: <GithubBrandIcon size={12} /> },
        { name: "Vercel", level: 88, description: "Cloud optimization host for static next builds.", logo: <VercelLogo /> },
        { name: "Render", level: 85, description: "Database and backend service server hosting deployments.", logo: <div className="text-[8px] font-bold text-emerald-400">RD</div> },
        { name: "Postman", level: 90, description: "Testing request payloads, headers, and environment scripts.", logo: <PostmanLogo /> },
        { name: "VS Code", level: 95, description: "Primary writing environment, shortcut workflows, and tool sets.", logo: <VscodeLogo /> }
      ]
    },
    {
      id: "ai",
      title: "AI / Machine Learning",
      icon: <Brain size={20} className="text-emerald-400 animate-pulse" />,
      skills: [
        { name: "Scikit-learn", level: 75, description: "Algorithmic classification, linear models, clustering, and data splits.", logo: <CpuIcon /> },
        { name: "Pandas", level: 80, description: "Scientific dataframe cleaning, formatting, parsing, and analysis.", logo: <div className="text-[8px] font-bold text-cyan-500 font-mono">PD</div> },
        { name: "NumPy", level: 80, description: "Mathematical calculations on N-dimensional matrix arrays.", logo: <div className="text-[8px] font-bold text-blue-500 font-mono">NP</div> },
        { name: "XGBoost", level: 75, description: "High-performance decision tree classifiers and boosted forests.", logo: <div className="text-[8px] font-bold text-emerald-400">XG</div> }
      ]
    }
  ];

  // Scikit-learn Cpu icon helper
  function CpuIcon() {
    return <Wrench size={12} />;
  }

  // Filter Logic
  const filteredCategories = activeFilter === "all"
    ? skillCategories
    : skillCategories.filter(category => category.id === activeFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden text-theme-text transition-colors duration-300">
      
      {/* Decorative Glow Orbs */}
      <div className="glow-orb-emerald top-1/3 left-10 opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/3 right-10 opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Technologies and tools I use to build modern, scalable, and high-performance applications.
          </p>
        </div>

        {/* Interactive Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto p-1.5 bg-slate-950/20 backdrop-blur-md rounded-xl border border-white/5 shadow-inner">
          {filterList.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 cursor-pointer select-none ${
                activeFilter === filter.id
                  ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 shadow-[0_0_12px_rgba(16,185,129,0.1)]"
                  : "text-gray-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skill Categories Grid with Framer Motion AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="h-full"
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] transition-all duration-500">
                  <div className="w-full">
                    {/* Category Header */}
                    <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200 dark:border-white/5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                        {category.icon}
                      </div>
                      <h3 className="text-sm md:text-md font-extrabold text-slate-900 dark:text-white tracking-wide">{category.title}</h3>
                    </div>

                    {/* Progress bars list */}
                    <div className="flex flex-col gap-4">
                      {category.skills.map((skill, sIdx) => (
                        <SkillProgressBar
                          key={skill.name}
                          skill={skill}
                          index={sIdx}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Line Decor */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent mt-6" />
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
