"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

interface EdItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  coursework?: string[];
}

export default function Education() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const educationData: EdItem[] = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Chandigarh Group of Colleges (CGC University)",
      location: "Mohali, Punjab",
      duration: "Aug 2024 – Present (Expected 2027)",
      grade: "SGPA: 7.67 / 10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Design & Analysis of Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Computer Architecture & Org.",
      ],
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Government Polytechnic College (State Board of Technical Education)",
      location: "Saharsa, Bihar",
      duration: "Aug 2021 – May 2024",
      grade: "CGPA: 8.07 / 10.0",
      coursework: [
        "Mechanical Design & CAD",
        "Manufacturing Technology & CAM",
        "Computational Simulation & CAE",
        "Applied Physics & Systems Modeling",
      ],
    },
    {
      degree: "Class X CBSE",
      institution: "Shanti Mission Academy",
      location: "Saharsa, Bihar",
      duration: "Completed 2021",
      grade: "Grade: 64.4%",
    },
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education timeline */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={controls}
          className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-4 md:ml-8 pl-8 md:pl-12 py-2 flex flex-col gap-12"
        >
          {educationData.map((item) => (
            <motion.div
              key={item.degree}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline dot marker */}
              <div className="absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 rounded-full bg-theme-bg border-4 border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.2)] dark:shadow-[0_0_12px_rgba(16,185,129,0.36)] group-hover:bg-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.3)] transition-all duration-300" />
 
              {/* Education details card */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                      <GraduationCap className="text-emerald-600 dark:text-emerald-400" size={22} />
                      <span>{item.degree}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-theme-text-sec">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{item.institution}</span>
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

                {/* Score & coursework */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                    <Award size={16} />
                    <span>{item.grade}</span>
                  </div>

                  {item.coursework && (
                    <div className="mt-2">
                      <h4 className="text-xs font-mono text-theme-text-sec/60 uppercase tracking-wider mb-3">// Key Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/2 border border-slate-200 dark:border-white/5 text-[11px] text-slate-600 dark:text-gray-400 hover:border-emerald-500/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
