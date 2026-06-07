"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExpItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
  skills: string[];
}

export default function Experience() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const experienceData: ExpItem[] = [
    {
      role: "Web Development Intern",
      company: "A2IT Online Pvt. Ltd.",
      location: "Mohali, Chandigarh",
      duration: "June 2025 – July 2025",
      bullets: [
        "Engineered interactive front-end components and page templates utilizing React.js, optimizing component reusability and render times.",
        "Collaborated with the design team to create fluid, mobile-first responsive layouts, establishing cross-browser visual consistency.",
        "Identified, logged, and debugged complex client-side errors, streamlining codebase reliability and increasing key UI performance metrics.",
        "Participated in daily Agile sync-ups, presenting prototype mockups, and contributing directly to team repositories.",
      ],
      skills: ["React.js", "JavaScript", "HTML5/CSS3", "Agile", "Git & GitHub"],
    },
    {
      role: "CNC Programming & Manufacturing Intern",
      company: "Central Institute of Petrochemicals Engineering & Technology (CIPET), Patna",
      location: "Patna, Bihar",
      duration: "April 2023 – May 2023",
      bullets: [
        "Gained hands-on exposure to Computer Numerical Control (CNC) machining operations and low-level code programming.",
        "Developed core technical competencies in CAD (Computer-Aided Design), CAM (Computer-Aided Manufacturing), and CAE (Computer-Aided Engineering) systems.",
        "Applied structural engineering and machining practices for precise design simulation, mold operations, and manufacturing optimization.",
      ],
      skills: ["CNC Programming", "CAD/CAM/CAE", "Precision Manufacturing", "Simulation"],
    },
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden text-theme-text transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline wrapper */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={controls}
          className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-4 md:ml-8 pl-8 md:pl-12 py-2 flex flex-col gap-12"
        >
          {experienceData.map((item) => (
            <motion.div
              key={item.company}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline dot marker */}
              <div className="absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 rounded-full bg-theme-bg border-4 border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.2)] dark:shadow-[0_0_12px_rgba(16,185,129,0.36)] group-hover:bg-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.3)] transition-all duration-300" />
 
              {/* Work Details Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300">
                {/* Header block */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                      <Briefcase className="text-emerald-600 dark:text-emerald-400" size={20} />
                      <span>{item.role}</span>
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-theme-text-sec">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{item.company}</span>
                      <span className="text-slate-300 dark:text-gray-600">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>
 
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 rounded-lg text-xs text-slate-600 dark:text-gray-400 font-mono">
                    <Calendar size={12} className="text-emerald-600 dark:text-emerald-400" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="flex flex-col gap-3.5 list-none text-theme-text-sec text-sm leading-relaxed mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="relative pl-6 before:content-['➔'] before:absolute before:left-0 before:text-emerald-600 dark:before:text-emerald-400 before:text-xs">
                      {bullet}
                    </li>
                  ))}
                </ul>
 
                {/* Tech Used In Internship */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20 dark:border-emerald-500/10 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
