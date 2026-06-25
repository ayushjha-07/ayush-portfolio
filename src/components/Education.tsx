"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

interface AcademicHighlight {
  title: string;
  desc: string;
  icon: string;
}

interface EdItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  status: "Completed" | "Pursuing";
  logo: React.ReactNode;
  coursework: string[];
  skillsGained: string[];
  highlights: AcademicHighlight[];
}

interface GraduationIcon {
  id: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  yMove: number;
  xMove: number;
  scale: number;
}

// Custom University Logo SVG
const UniversityIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

// Custom Polytechnic Cogs Logo SVG
const TechIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

// Custom Book Logo SVG
const SchoolIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

// Deterministic floating background icons
const FLOATING_ICONS: GraduationIcon[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  top: `${(i * 17 + 11) % 80 + 10}%`,
  left: `${(i * 23 + 5) % 85 + 5}%`,
  delay: (i * 0.7) % 3,
  duration: ((i * 2.5) % 12) + 10,
  yMove: ((i * 12 + 15) % 50) - 25,
  xMove: ((i * 9 + 20) % 40) - 20,
  scale: ((i % 3) * 0.15) + 0.6
}));

export default function Education() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const educationData: EdItem[] = [
    {
      id: 1,
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Chandigarh Group of Colleges (CGC University)",
      location: "Mohali, Punjab",
      duration: "Aug 2024 – Present (Expected 2027)",
      grade: "SGPA: 7.67 / 10.0",
      status: "Pursuing",
      logo: <UniversityIcon />,
      coursework: [
        "Data Structures & Algorithms",
        "Design & Analysis of Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Web Development",
        "Artificial Intelligence",
        "Machine Learning"
      ],
      skillsGained: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Git & GitHub"],
      highlights: [
        { title: "Academic Performance", desc: "Maintaining a solid 7.67 SGPA in Core Computer Science studies.", icon: "🏆" },
        { title: "Technical Projects", desc: "Engineered CareerOS AI personalized platform and e-commerce stores.", icon: "💻" },
        { title: "Coding Contests", desc: "Solved 600+ problems across LeetCode and CodeChef challenges.", icon: "🚀" },
        { title: "Credentials Earned", desc: "Acquired 9+ technical certifications validating stack proficiencies.", icon: "📜" }
      ]
    },
    {
      id: 2,
      degree: "Diploma in Mechanical Engineering",
      institution: "Government Polytechnic College",
      location: "Saharsa, Bihar",
      duration: "Aug 2021 – May 2024",
      grade: "CGPA: 8.07 / 10.0",
      status: "Completed",
      logo: <TechIcon />,
      coursework: [
        "Mechanical Design & CAD",
        "Manufacturing Technology & CAM",
        "Computational Simulation & CAE",
        "Applied Physics & Systems Modeling"
      ],
      skillsGained: ["AutoCAD", "SolidWorks", "MATLAB", "Numerical Methods", "Python (Self-Learned)", "CS Fundamentals (Self-Learned)"],
      highlights: [
        { title: "High Academic Score", desc: "Graduated with honors scoring an 8.07/10.0 CGPA.", icon: "🏆" },
        { title: "Design Projects", desc: "Engineered CAD gearboxes and stress analysis simulations.", icon: "🔧" },
        { title: "Career Pivot", desc: "Self-learned computer science basics, OOP, and data structures.", icon: "🌱" }
      ]
    },
    {
      id: 3,
      degree: "Class X CBSE",
      institution: "Shanti Mission Academy",
      location: "Saharsa, Bihar",
      duration: "Completed 2021",
      grade: "Grade: 64.4%",
      status: "Completed",
      logo: <SchoolIcon />,
      coursework: [
        "Mathematics",
        "Science",
        "Social Sciences",
        "Computer Applications"
      ],
      skillsGained: ["Computer Operations", "MS Office Suite", "Mathematical Basics"],
      highlights: [
        { title: "Mathematics Base", desc: "Built strong logical foundations in algebra and trigonometry.", icon: "📊" },
        { title: "Science Projects", desc: "Designed early mechanical energy science exhibits.", icon: "🧪" }
      ]
    }
  ];

  const learningJourney = [
    { title: "Continuous Learning", desc: "Reading official documentation, technical blogs, and textbook algorithms daily.", icon: "📚" },
    { title: "Hands-on Development", desc: "Building full-stack systems like CareerOS AI and HostelHub to practice architectures.", icon: "💻" },
    { title: "Competitive Coding", desc: "Solving 600+ algorithmic puzzles across LeetCode and CodeChef profiles.", icon: "🚀" },
    { title: "Cloud & AI Studies", desc: "Deploying setups to Vercel/Render and training Scikit-learn/XGBoost models.", icon: "☁️" },
    { title: "Always Exploring", desc: "Experimenting with Next.js, Framer Motion, and secure JWT verification loops.", icon: "🌱" }
  ];

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

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
      
      {/* Floating Graduation Caps in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08] z-0">
        {FLOATING_ICONS.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute text-emerald-500"
            style={{
              top: icon.top,
              left: icon.left,
              scale: icon.scale
            }}
            animate={{
              y: [0, icon.yMove, 0],
              x: [0, icon.xMove, 0],
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: icon.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: icon.delay
            }}
          >
            <GraduationCap size={48} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            My academic journey and continuous pursuit of knowledge in Computer Science and Software Engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-4 md:ml-8 pl-8 md:pl-12 py-2 flex flex-col gap-12"
        >
          {educationData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 rounded-full bg-slate-950 border-4 border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.2)] dark:shadow-[0_0_12px_rgba(16,185,129,0.4)] group-hover:bg-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(52,211,153,0.5)] transition-all duration-300 z-10 flex items-center justify-center">
                {item.status === "Pursuing" && (
                  <span className="absolute w-full h-full rounded-full bg-emerald-500/30 animate-ping" />
                )}
              </div>

              {/* Education details card */}
              <SpotlightCard className="p-6 md:p-8 hover:border-emerald-500/30 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2.5 text-slate-900 dark:text-white leading-snug">
                      <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                        {item.logo}
                      </span>
                      <span>{item.degree}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-theme-text-sec">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{item.institution}</span>
                      <span className="text-slate-300 dark:text-gray-700">•</span>
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin size={12} className="text-emerald-500" />
                        <span>{item.location}</span>
                      </span>
                      <span className="text-slate-300 dark:text-gray-700">•</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wide border ${
                        item.status === "Pursuing"
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                          : "bg-slate-100 dark:bg-white/3 border-slate-200 dark:border-white/5 text-gray-500"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-white/3 border border-slate-200 dark:border-white/5 rounded-lg text-xs text-slate-600 dark:text-gray-400 font-mono font-bold shrink-0 self-start md:self-auto">
                    <Calendar size={12} className="text-emerald-500" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                {/* Score Summary */}
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-extrabold font-mono border border-emerald-500/10 bg-emerald-500/5 px-3.5 py-1.5 rounded-lg w-fit">
                  <Award size={16} />
                  <span>{item.grade}</span>
                </div>

                {/* Toggle details button */}
                <div className="mt-6 flex justify-center border-t border-slate-200/50 dark:border-white/5 pt-4">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="px-4 py-2 rounded-xl text-xs font-bold font-mono text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/15 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer select-none"
                  >
                    {expandedCard === item.id ? "Hide Academic Breakdown ▲" : "View Academic Breakdown ▼"}
                  </button>
                </div>

                {/* Expandable Info Container */}
                <AnimatePresence>
                  {expandedCard === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-white/5 space-y-6">
                        
                        {/* Coursework */}
                        <div>
                          <h4 className="text-[10px] font-mono text-emerald-500 uppercase tracking-wider mb-2.5 font-black">Relevant Coursework</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/2 border border-slate-200/50 dark:border-white/5 text-[10px] font-semibold text-slate-700 dark:text-gray-400"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Skills gained */}
                        <div>
                          <h4 className="text-[10px] font-mono text-emerald-500 uppercase tracking-wider mb-2.5 font-black">Technical Skills Gained</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.skillsGained.map((skill) => (
                              <span
                                key={skill}
                                className="px-2.5 py-1 rounded bg-emerald-500/5 border border-emerald-500/10 text-[10px] font-bold text-emerald-500 font-mono"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Academic Highlights */}
                        <div>
                          <h4 className="text-[10px] font-mono text-emerald-500 uppercase tracking-wider mb-3.5 font-black">Academic Highlights</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {item.highlights.map((hl) => (
                              <div
                                key={hl.title}
                                className="p-3.5 rounded-xl border border-slate-200/40 dark:border-white/5 bg-slate-900/10 dark:bg-white/1 hover:border-emerald-500/20 transition-all duration-300"
                              >
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="text-sm shrink-0">{hl.icon}</span>
                                  <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200">{hl.title}</h5>
                                </div>
                                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                  {hl.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Journey Block */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
              My Learning Journey
            </h3>
            <div className="h-[1px] w-12 bg-emerald-500/40 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {learningJourney.map((journey, jIdx) => (
              <motion.div
                key={journey.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: jIdx * 0.08 }}
                className="h-full"
              >
                <SpotlightCard className="p-5 h-full flex flex-col justify-between hover-lift border-theme-border/60 bg-theme-card/35">
                  <div className="w-full">
                    <span className="text-2xl block mb-3">{journey.icon}</span>
                    <h4 className="text-xs font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                      {journey.title}
                    </h4>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                      {journey.desc}
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
