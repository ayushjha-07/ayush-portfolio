"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Code2, Globe, Database, Wrench, Cpu, Users, Terminal, 
  Brain, FileCode, Network, Zap, Award, RefreshCw, MessageSquare 
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";
import { Github as GithubBrandIcon } from "./BrandIcons";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

function SkillBadge({ name, isPrimary }: { name: string; isPrimary: boolean }) {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case "react.js":
        return (
          <svg className="w-3.5 h-3.5 text-cyan-400 animate-[spin_12s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
            <circle cx="0" cy="0" r="2.05" fill="#00D8FF"/>
            <g stroke="#00D8FF" strokeWidth="1">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        );
      case "next.js":
        return (
          <svg className="w-3.5 h-3.5 text-black dark:text-white" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="90" fill="currentColor" />
            <path d="M149.508 157.52L69.142 54H54V126H68.118V75.7613L139.736 167.369C143.193 164.404 146.458 161.121 149.508 157.52Z" fill="var(--theme-bg, #fff)"/>
            <rect x="115" y="54" width="14.1176" height="72" fill="var(--theme-bg, #fff)"/>
          </svg>
        );
      case "javascript":
        return (
          <div className="w-3.5 h-3.5 bg-[#F7DF1E] text-black font-extrabold flex items-center justify-center text-[9px] rounded-sm select-none">
            JS
          </div>
        );
      case "tailwind css":
        return (
          <svg className="w-3.5 h-3.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
          </svg>
        );
      case "html5":
        return (
          <svg className="w-3.5 h-3.5 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17 5.7H7.7l.2 2.1h10.3l-.6 6.1-5.6 1.9-5.6-1.9-.4-3.8h2.1l.2 2 3.7 1.2 3.7-1.2.4-3.8H5.8L5 2.1h14.2l-.7 3.6z"/>
          </svg>
        );
      case "css3":
        return (
          <svg className="w-3.5 h-3.5 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.3 5.3H6.8l.3 2.5h10.4l-.3 3-5.2 1.7-5.2-1.7-.3-3H4.4l.7 6.7 6.9 2.3 6.9-2.3.9-9.2z"/>
          </svg>
        );
      case "python":
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
            <path d="M12.126 2C9.378 2 7.747 3.197 7.747 5.922v1.948h4.437V8.4h-6.26C3.992 8.4 2 9.948 2 12.696c0 2.748 1.83 4.226 4.312 4.226h1.487v-2.091c0-2.478 1.974-4.574 4.456-4.574h4.437V7.87c0-2.725-1.812-5.87-5.566-5.87z" fill="#3776AB"/>
            <path d="M11.874 22c2.748 0 4.379-1.197 4.379-3.922v-1.948h-4.437V15.6h6.26c1.932 0 3.922-1.548 3.922-4.296C22 8.556 20.17 7.078 17.688 7.078h-1.487v2.091c0 2.478-1.974 4.574-4.456 4.574H7.308v2.387c0 2.725 1.812 5.87 5.566 5.87z" fill="#FFD43B"/>
          </svg>
        );
      case "c++":
        return (
          <div className="w-3.5 h-3.5 bg-[#00599C] text-white font-extrabold flex items-center justify-center text-[7px] rounded-sm select-none">
            C++
          </div>
        );
      case "java":
        return (
          <svg className="w-3.5 h-3.5 text-[#F89820]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a3 3 0 1 1 0 6h-1" />
            <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
            <line x1="6" x2="6" y1="2" y2="4" />
            <line x1="10" x2="10" y1="2" y2="4" />
            <line x1="14" x2="14" y1="2" y2="4" />
          </svg>
        );
      case "mysql":
      case "sql":
        return <Database size={14} className="text-blue-500" />;
      case "mongodb":
        return (
          <svg className="w-3.5 h-3.5 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.19 12.19c-.31-.83-.87-1.74-1.63-2.65-.95-1.14-2.12-2.19-3.23-3.21l-.33-.31-.33.31c-1.11 1.02-2.28 2.07-3.23 3.21-.76.91-1.32 1.82-1.63 2.65-.43 1.13-.53 2.37-.16 3.51.52 1.63 1.77 3 3.39 3.69v2.24l.98.92c.62.59 1.62.59 2.24 0l.98-.92v-2.24c1.62-.69 2.87-2.06 3.39-3.69.37-1.14.27-2.38-.16-3.51z"/>
          </svg>
        );
      case "git":
        return (
          <svg className="w-3.5 h-3.5 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.4-.1s-1.3.4-1.7.8L6.8 3.5 10.3 7c.7-.2 1.4-.1 2 .2l2.6-2.6c-.3-.7-.2-1.5.2-2.1.6-.6 1.5-.7 2.2-.2.6.5.7 1.5.2 2.2-.5.6-1.4.7-2 .2l-2.6 2.6c.3.5.3 1.2 0 1.7L15.5 15c.6-.3 1.4-.2 2 .2.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.3-.3-1.9l-2.6-2.6c-.6.3-1.4.2-2-.2s-.7-1.3-.3-1.9L6.4 7.7 1.1 13c-.8.8-.8 2 0 2.8l10.2 10.2c.4.4 1 .6 1.7.6s1.3-.2 1.7-.6l10.2-10.2c.8-.8.8-2 .1-2.9z"/>
          </svg>
        );
      case "github":
        return <GithubBrandIcon size={14} className="text-black dark:text-white" />;
      case "vs code":
        return (
          <svg className="w-3.5 h-3.5 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.986 6.012a.64.64 0 0 0-.17-.468L19.98.718a.637.637 0 0 0-.83 0l-3.328 2.658L6.89 2.012a.637.637 0 0 0-.64.088L.17 6.467c-.22.18-.22.508 0 .688l5.228 4.227a.64.64 0 0 0 .64.088l8.932-1.364 3.328 2.658a.637.637 0 0 0 .83 0l3.836-4.827a.64.64 0 0 0 .17-.468l-.148.468zM6.467 15.012c-.22-.18-.22-.508 0-.688l11.052-8.933a.64.64 0 0 1 .83 0l5.228 4.227a.64.64 0 0 1 0 .688l-5.228 4.227a.64.64 0 0 1-.83 0L6.467 15.012z"/>
          </svg>
        );
      case "vercel":
        return (
          <svg className="w-3.5 h-3.5 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 22h20L12 2z"/>
          </svg>
        );
      case "postman":
        return (
          <svg className="w-3.5 h-3.5 text-[#FF6C37]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
        );
      case "data structures & algorithms":
        return <Brain size={14} className="text-purple-500" />;
      case "operating systems":
        return <Cpu size={14} className="text-amber-500" />;
      case "dbms":
        return <Database size={14} className="text-sky-500" />;
      case "computer networks":
        return <Network size={14} className="text-indigo-500" />;
      case "oop":
      case "object-oriented programming (oop)":
        return <FileCode size={14} className="text-rose-500" />;
      case "problem solving":
        return <Zap size={14} className="text-yellow-500" />;
      case "team collaboration":
        return <Users size={14} className="text-emerald-500" />;
      case "communication":
        return <MessageSquare size={14} className="text-sky-500" />;
      case "leadership":
        return <Award size={14} className="text-amber-600" />;
      case "adaptability":
        return <RefreshCw size={14} className="text-teal-500" />;
      default:
        return <Terminal size={14} className="text-emerald-500/70" />;
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-300 select-none cursor-default text-xs font-semibold ${
      isPrimary
        ? "bg-emerald-500/10 dark:bg-emerald-500/5 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.08)] scale-[1.03]"
        : "bg-slate-100 dark:bg-white/3 border-slate-200 dark:border-white/5 text-slate-700 dark:text-gray-300 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-600 dark:hover:text-emerald-400"
    }`}>
      {getIcon()}
      <span>{name}</span>
      {isPrimary && (
        <span className="text-[8px] uppercase font-bold px-1 bg-emerald-500 text-white rounded tracking-wide ml-1 shadow-[0_1px_4px_rgba(16,185,129,0.2)]">
          Primary
        </span>
      )}
    </div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code2 size={20} className="text-emerald-400" />,
      skills: ["Java", "C++", "Python", "JavaScript"],
    },
    {
      title: "Frontend Development",
      icon: <Globe size={20} className="text-emerald-400" />,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: <Database size={20} className="text-emerald-400" />,
      skills: ["SQL", "MySQL", "MongoDB"],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={20} className="text-emerald-400" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
    },
    {
      title: "Core Computer Science",
      icon: <Cpu size={20} className="text-emerald-400" />,
      skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Object-Oriented Programming (OOP)"],
    },
    {
      title: "Soft Skills",
      icon: <Users size={20} className="text-emerald-400" />,
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Leadership", "Adaptability"],
    },
  ];

  const primarySkills = [
    "java",
    "react.js",
    "next.js",
    "data structures & algorithms",
  ];

  const cardVariants = {
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
    <section id="skills" className="py-24 relative overflow-hidden text-theme-text transition-colors duration-300">
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/3 left-10 opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/3 right-10 opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Title Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Technologies, tools, and computer science fundamentals I use to build efficient, scalable, and user-focused software solutions.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              custom={idx}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="h-full"
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.05)] dark:hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all duration-500">
                <div className="w-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-200 dark:border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                      {category.icon}
                    </div>
                    <h3 className="text-md font-bold text-slate-900 dark:text-white tracking-wide">{category.title}</h3>
                  </div>
 
                  {/* Skills badges grid */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={skill}
                        name={skill}
                        isPrimary={primarySkills.includes(skill.toLowerCase())}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom line decor */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent mt-6" />
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
