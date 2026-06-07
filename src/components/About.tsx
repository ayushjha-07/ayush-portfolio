"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Cpu, Target, Compass, BookOpen } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cards = [
    {
      icon: <Target className="text-emerald-400" size={24} />,
      title: "Problem Solving",
      desc: "Solved 600+ DSA algorithmic questions across platforms, establishing computational speed and analytical logic.",
    },
    {
      icon: <Cpu className="text-emerald-400" size={24} />,
      title: "System Design",
      desc: "Deep interest in virtual memory systems, operating systems, and building scalable full-stack web applications.",
    },
    {
      icon: <Compass className="text-emerald-400" size={24} />,
      title: "Interdisciplinary Focus",
      desc: "Blending physical system logic from mechanical engineering with abstract computer science paradigms.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden text-theme-text transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Text/Story Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-theme-text-sec text-base md:text-lg leading-relaxed">
            <motion.h3
              initial={{ opacity: 0, x: -25 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2"
            >
              Bridging physical systems engineering with digital architecture.
            </motion.h3>
            
            <p>
              My journey into technology is built upon a unique blend of structural organization and algorithmic problem-solving. Beginning with a 3-year <span className="text-slate-900 dark:text-white font-semibold">Diploma in Mechanical Engineering</span> (where I graduated with an <span className="text-emerald-600 dark:text-emerald-400 font-semibold">8.07/10.0 CGPA</span>), I gained a strong understanding of physical systems, CAD/CAM optimization, and logical modeling. 
            </p>
            <p>
              Driven by a desire to apply system-level optimization frameworks to software, I transitioned into a <span className="text-slate-900 dark:text-white font-semibold">B.Tech in Computer Science and Engineering</span> at CGC University. Maintaining a strong academic trajectory with a <span className="text-emerald-600 dark:text-emerald-400 font-semibold">7.67/10.0 SGPA</span>, I have immersed myself in Operating Systems, Database Management Systems, and Object-Oriented paradigms.
            </p>
            <p>
              As a developer, I focus on building responsive frontends in <span className="text-slate-900 dark:text-white font-semibold">React.js</span> and crafting efficient backend engines. My competitive coding experience spans over <span className="text-slate-900 dark:text-white font-semibold">600 solved challenges</span>, sharpening my ability to write clean, time-complex-optimized code. I am eager to leverage this analytical mindset and team-first attitude to solve complex software problems for top companies.
            </p>
          </div>

          {/* Visualization Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Transition Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
              <h4 className="font-mono text-sm text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2">
                <BookOpen size={16} />
                <span>Academic Timeline &amp; Performance</span>
              </h4>
 
              {/* Diploma Progress */}
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex justify-between text-xs font-mono text-theme-text-sec">
                  <span>Diploma in Mechanical Eng.</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">8.07/10 CGPA</span>
                </div>
                <div className="w-full h-3 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "80.7%" } : {}}
                    transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                  />
                </div>
              </div>
 
              {/* B.Tech Progress */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-xs font-mono text-theme-text-sec">
                  <span>CSE B.Tech (CGC Jhanjeri)</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">7.67/10 SGPA</span>
                </div>
                <div className="w-full h-3 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "76.7%" } : {}}
                    transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Micro-cards Grid */}
            <div className="grid grid-cols-1 gap-4">
              {cards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  custom={idx}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                  className="flex gap-4 p-5 rounded-xl bg-theme-bg-sec border border-theme-border shadow-sm dark:shadow-none hover:bg-white dark:hover:bg-white/5 hover:border-emerald-500/20 dark:hover:border-white/10 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 h-fit flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{card.title}</h4>
                    <p className="text-xs text-theme-text-sec leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
