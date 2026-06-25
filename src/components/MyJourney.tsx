"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { 
  Rocket, Laptop, Brain, Trophy, Star, ShieldCheck, 
  Terminal, ExternalLink, Code2, Award, Briefcase, 
  ChevronRight, Calendar, Sparkles
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Static background particles to avoid hydration mismatches
const TIMELINE_PARTICLES = [
  { id: 1, top: "10%", left: "8%", size: 4, delay: 0 },
  { id: 2, top: "35%", left: "82%", size: 5, delay: 1.5 },
  { id: 3, top: "60%", left: "12%", size: 4, delay: 3 },
  { id: 4, top: "80%", left: "88%", size: 6, delay: 1 },
  { id: 5, top: "95%", left: "15%", size: 5, delay: 2.5 },
];

// SVGs for coding platforms & languages
const LeetCodeLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#FFA116]" fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.867-5.67a1.16 1.16 0 0 1 0-1.677l5.867-5.67c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-1.87 1.807a.56.56 0 0 0 0 .81l1.87 1.807c.466.45.466 1.17 0 1.62z" />
    <path d="M13.102 12l-3-2.88 3-2.88 3 2.88z" opacity="0.8" />
  </svg>
);

const CodeChefLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#8B4513]" fill="currentColor">
    <path d="M21 17H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm-4-4H7a4.996 4.996 0 0 1-3.664-8.397A5 5 0 0 1 12 3a5 5 0 0 1 8.664 1.603A4.996 4.996 0 0 1 17 13z" />
  </svg>
);

const HackerRankLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-[#2EC866]" fill="currentColor">
    <path d="M17.15 19.12H6.85c-.93 0-1.68-.75-1.68-1.68V6.56c0-.93.75-1.68 1.68-1.68h10.3c.93 0 1.68.75 1.68 1.68v10.88c0 .93-.75 1.68-1.68 1.68zM8.53 7.82v8.36h1.92v-3.23h3.1v3.23h1.92V7.82h-1.92v3.25h-3.1V7.82H8.53z" />
  </svg>
);

const JavaLogo = () => (
  <svg className="w-5 h-5 text-[#F89820]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a3 3 0 1 1 0 6h-1" />
    <path d="M3 8h14v7a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" x2="6" y1="2" y2="4" />
    <line x1="10" x2="10" y1="2" y2="4" />
    <line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);

const PythonLogo = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
    <path d="M12.126 2C9.378 2 7.747 3.197 7.747 5.922v1.948h4.437V8.4h-6.26C3.992 8.4 2 9.948 2 12.696c0 2.748 1.83 4.226 4.312 4.226h1.487v-2.091c0-2.478 1.974-4.574 4.456-4.574h4.437V7.87c0-2.725-1.812-5.87-5.566-5.87z" fill="#3776AB"/>
    <path d="M11.874 22c2.748 0 4.379-1.197 4.379-3.922v-1.948h-4.437V15.6h6.26c1.932 0 3.922-1.548 3.922-4.296C22 8.556 20.17 7.078 17.688 7.078h-1.487v2.091c0 2.478-1.974 4.574-4.456 4.574H7.308v2.387c0 2.725 1.812 5.87 5.566 5.87z" fill="#FFD43B"/>
  </svg>
);

const GithubLogo = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width={size}
    height={size}
    className={`text-slate-800 dark:text-white ${className}`} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface MilestoneItemProps {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  align: "left" | "right";
}

function MilestoneCard({ title, icon, content, align }: MilestoneItemProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <div
      ref={cardRef}
      className={`relative flex flex-col md:flex-row items-stretch w-full mb-12 last:mb-0 ${
        align === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Central Connector Node */}
      <div className="absolute left-[31px] md:left-1/2 top-4 w-8 h-8 rounded-full border-2 border-emerald-500 bg-slate-950 flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_12px_rgba(16,185,129,0.4)]">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]"
        />
      </div>

      {/* Spacing for layout alignment */}
      <div className="hidden md:block w-1/2" />

      {/* Content Block */}
      <div className="w-full md:w-1/2 pl-16 md:pl-12 md:pr-12">
        <motion.div
          initial={{ opacity: 0, x: align === "left" ? -40 : 40, y: 15 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SpotlightCard className="p-6 border border-theme-border/60 hover:border-emerald-500/30 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 relative group overflow-hidden">
            {/* Ambient hover line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm shadow-emerald-500/5 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-2 font-sans tracking-tight">
                  {title}
                </h3>
                <div className="text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-sans">
                  {content}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </div>
  );
}

export default function MyJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  const certLogos = [
    "Cisco Networking Academy", "Infosys Springboard", "MongoDB University", "NASSCOM FutureSkills", "BSDM Skill Mission"
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="my-journey"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Background Glows */}
      <div className="glow-orb-emerald top-1/3 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/3 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {TIMELINE_PARTICLES.map((particle) => (
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
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            From learning programming to building production-ready applications and solving 600+ coding problems.
          </p>
        </motion.div>

        {/* Timeline Stack Container */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto py-12">
          
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200/50 dark:bg-white/5 -translate-x-1/2 z-10">
            <motion.div
              style={{ scaleY }}
              className="w-full h-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)] origin-top rounded-full"
            />
          </div>

          {/* Milestone 1 */}
          <MilestoneCard
            id={1}
            title="🚀 Started Programming"
            icon={<Rocket size={18} />}
            align="right"
            content={
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-1 flex items-center gap-1">
                  <Calendar size={12} /> 2021
                </span>
                <p>Began learning programming fundamentals and basic problem-solving. Explored foundational logic structures development steps.</p>
              </div>
            }
          />

          {/* Milestone 2 */}
          <MilestoneCard
            id={2}
            title="💻 First Web Application"
            icon={<Laptop size={18} />}
            align="left"
            content={
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-1 flex items-center gap-1">
                  <Calendar size={12} /> 2022
                </span>
                <p>Built my first responsive web project using HTML, CSS, and JavaScript. Understood layout rendering, browser DOM elements, and responsive designs.</p>
              </div>
            }
          />

          {/* Milestone 3 */}
          <MilestoneCard
            id={3}
            title="🧠 Started Data Structures & Algorithms"
            icon={<Brain size={18} />}
            align="right"
            content={
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-1 flex items-center gap-1">
                  <Calendar size={12} /> 2022 - 2023
                </span>
                <p>Focused on improving logical thinking and coding skills through regular DSA practice. Gained familiarity with arrays, linked lists, hash maps, and recursion.</p>
              </div>
            }
          />

          {/* Milestone 4 */}
          <MilestoneCard
            id={4}
            title="🏆 Solved 100+ Problems"
            icon={<Trophy size={18} />}
            align="left"
            content={
              <div className="flex items-center gap-4 mt-1">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-amber-500/25 blur-md rounded-full animate-pulse" />
                  <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-slate-900/80 flex items-center justify-center text-amber-500 relative z-10">
                    <Award size={22} className="animate-bounce" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400">100+ Problems Badge</h4>
                  <p className="mt-0.5">Unlocked initial milestones solving competitive coding puzzles and building consistent consistency habits.</p>
                </div>
              </div>
            }
          />

          {/* Milestone 5 */}
          <MilestoneCard
            id={5}
            title="⭐ CodeChef Rating Reached 1239"
            icon={<CodeChefLogo />}
            align="right"
            content={
              <div className="flex flex-col gap-2 mt-1">
                <div className="p-3 rounded-lg border border-theme-border/60 bg-slate-900/5 dark:bg-white/3 flex items-center justify-between gap-4 font-mono text-xs">
                  <div className="text-center">
                    <span className="block text-[9px] text-slate-400 uppercase font-bold">Division</span>
                    <span className="text-emerald-500 font-extrabold">Div 4</span>
                  </div>
                  <div className="h-6 w-[1px] bg-theme-border/50" />
                  <div className="text-center">
                    <span className="block text-[9px] text-slate-400 uppercase font-bold">Global Rank</span>
                    <span className="text-slate-800 dark:text-white font-extrabold">76,621</span>
                  </div>
                  <div className="h-6 w-[1px] bg-theme-border/50" />
                  <div className="text-center">
                    <span className="block text-[9px] text-slate-400 uppercase font-bold">Country Rank</span>
                    <span className="text-slate-800 dark:text-white font-extrabold">72,732</span>
                  </div>
                </div>
                <p>Competed in CodeChef division contest challenges. Standardized algorithm efficiency and optimized logic structures within tight deadlines.</p>
              </div>
            }
          />

          {/* Milestone 6 */}
          <MilestoneCard
            id={6}
            title="☕ Earned HackerRank Java 5★ Gold"
            icon={<JavaLogo />}
            align="left"
            content={
              <div className="flex flex-col gap-2 mt-1">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} className="fill-amber-500 stroke-amber-600 text-amber-500 animate-pulse" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 uppercase tracking-wider font-mono">
                    Gold Badge
                  </span>
                </div>
                <p className="mt-1">Successfully solved algorithmic puzzles in Java. Demonstrated deep understanding of object-oriented concepts, syntax handling, and libraries.</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
                  <HackerRankLogo />
                  <span>Verified by HackerRank</span>
                </div>
              </div>
            }
          />

          {/* Milestone 7 */}
          <MilestoneCard
            id={7}
            title="🐍 Earned HackerRank Python 3★ Silver"
            icon={<PythonLogo />}
            align="right"
            content={
              <div className="flex flex-col gap-2 mt-1">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} size={11} className="fill-slate-400 stroke-slate-500 text-slate-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-500/10 border border-slate-500/20 text-slate-600 dark:text-slate-400 uppercase tracking-wider font-mono">
                    Silver Badge
                  </span>
                </div>
                <p className="mt-1">Earned 3-Star Silver status solving programming challenges in Python. Mastered data processing scripts and library hooks.</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
                  <HackerRankLogo />
                  <span>Verified by HackerRank</span>
                </div>
              </div>
            }
          />

          {/* Milestone 8 */}
          <MilestoneCard
            id={8}
            title="🟨 Solved 138 LeetCode Problems"
            icon={<LeetCodeLogo />}
            align="left"
            content={
              <div className="flex flex-col gap-3 mt-1">
                <div className="p-3.5 rounded-xl border border-emerald-500/15 bg-emerald-500/5 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 dark:text-white">Solved: 138 / 3100+</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">4.5% Completeness</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "35%" }} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center font-mono text-[9px] md:text-[10px] mt-1">
                    <div className="p-1 rounded bg-slate-900/5 dark:bg-white/3 text-emerald-600 dark:text-emerald-400">
                      <span className="block font-bold">Easy</span>
                      <span>70</span>
                    </div>
                    <div className="p-1 rounded bg-slate-900/5 dark:bg-white/3 text-amber-500">
                      <span className="block font-bold">Med</span>
                      <span>55</span>
                    </div>
                    <div className="p-1 rounded bg-slate-900/5 dark:bg-white/3 text-rose-500">
                      <span className="block font-bold">Hard</span>
                      <span>13</span>
                    </div>
                  </div>
                </div>
                <p>Designed optimized answers targeting hash tables, trees, sliding windows, and searching algorithms.</p>
              </div>
            }
          />

          {/* Milestone 9 */}
          <MilestoneCard
            id={9}
            title="🚀 Built 5 Live Projects"
            icon={<Terminal size={18} />}
            align="right"
            content={
              <div className="flex flex-col gap-3 mt-1">
                <p>Designed, built, and deployed 5 production-ready projects utilizing frontend visual dashboards, microservices, database transactions, and OS algorithm virtual simulators.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                  {[
                    { name: "CareerOS AI", code: "https://github.com/ayushjha-07/smartlearn-ai" },
                    { name: "HostelHub", code: "https://github.com/ayushjha-07/hostelhub-repo" },
                    { name: "Kirana Store", code: "https://github.com/ayushjha-07/Kirana-Store", demo: "https://kirana-store-oq3u.vercel.app/" },
                    { name: "OS Simulator", code: "https://github.com/ayushjha-07/Management-System", demo: "https://rohitiwari2001.github.io/Rohitiwari2001.github.in/" },
                  ].map((p, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg border border-theme-border/60 bg-slate-900/5 dark:bg-white/3 flex items-center justify-between text-[10px]">
                      <span className="font-bold text-slate-800 dark:text-white truncate max-w-[120px]">{p.name}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <a href={p.code} target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" title="Source Code">
                          <GithubLogo size={12} />
                        </a>
                        {p.demo && (
                          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" title="Live Demo">
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="p-2.5 rounded-lg border border-theme-border/60 bg-slate-900/5 dark:bg-white/3 flex items-center justify-between text-[10px] sm:col-span-2">
                    <span className="font-bold text-slate-800 dark:text-white">University Course Portal</span>
                    <a href="https://github.com/ayushjha-07" target="_blank" rel="noopener noreferrer" className="p-1 rounded hover:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" title="Source Code">
                      <GithubLogo size={12} />
                    </a>
                  </div>
                </div>
              </div>
            }
          />

          {/* Milestone 10 */}
          <MilestoneCard
            id={10}
            title="💼 Completed 2 Internships"
            icon={<Briefcase size={18} />}
            align="left"
            content={
              <div className="flex flex-col gap-2 mt-1">
                <ul className="space-y-2">
                  <li className="flex gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white text-xs block">Web Development Intern</span>
                      <span className="text-[10px] text-slate-400 block font-mono">Hands-on application development, REST integrations, API optimizations</span>
                    </div>
                  </li>
                  <li className="flex gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white text-xs block">Industrial Intern (CIPET)</span>
                      <span className="text-[10px] text-slate-400 block font-mono">Managed workflow automation, structured operations, collaborated in agile team structures</span>
                    </div>
                  </li>
                </ul>
              </div>
            }
          />

          {/* Milestone 11 */}
          <MilestoneCard
            id={11}
            title="📜 Earned 9+ Technical Certifications"
            icon={<ShieldCheck size={18} />}
            align="right"
            content={
              <div className="flex flex-col gap-3 mt-1 overflow-hidden">
                <p>Acquired 9+ verification credentials from global educational institutions (Cisco Academy, Infosys, MongoDB) validating computer networks, cloud computing, React development, and cybersecurity.</p>
                
                {/* Infinite Marquee Loop */}
                <div className="w-full overflow-hidden relative py-1.5 mt-1 border-y border-theme-border/30 bg-slate-900/5 dark:bg-white/3 rounded-lg">
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
                  <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      repeat: Infinity,
                      ease: "linear",
                      duration: 15,
                    }}
                  >
                    {/* First Loop */}
                    <div className="flex gap-6 shrink-0">
                      {certLogos.map((logo, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[9px] font-bold font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                          <Award size={10} /> {logo}
                        </div>
                      ))}
                    </div>
                    {/* Second Loop (Duplicate) */}
                    <div className="flex gap-6 shrink-0">
                      {certLogos.map((logo, idx) => (
                        <div key={`dup-${idx}`} className="flex items-center gap-1.5 text-[9px] font-bold font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                          <Award size={10} /> {logo}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            }
          />

          {/* Milestone 12 */}
          <MilestoneCard
            id={12}
            title="💻 Crossed 600+ DSA Problems"
            icon={<Code2 size={18} />}
            align="left"
            content={
              <div className="relative mt-2 p-5 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.08)] overflow-hidden group/final text-center">
                {/* Neon glow effect */}
                <div className="absolute -inset-10 bg-emerald-500/5 rounded-full blur-2xl group-hover/final:scale-110 transition-transform duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-1 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                    <Sparkles size={20} className="animate-spin-slow" />
                  </div>
                  
                  <div className="font-mono text-4xl font-extrabold text-slate-900 dark:text-white tracking-wider flex items-center justify-center gap-1">
                    <span>600</span>
                    <span className="text-emerald-500 text-3xl font-normal animate-pulse">+</span>
                  </div>
                  
                  <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    DSA Solutions Deployed
                  </h4>
                  
                  <p className="text-[11px] text-slate-500 dark:text-gray-400 leading-normal max-w-sm mt-1">
                    Consistently optimized problem layouts across array matrices, graphs, linked chains, sliding buffers, and tree pointers.
                  </p>
                </div>
              </div>
            }
          />

        </div>

        {/* Closing Message Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <SpotlightCard className="p-8 border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_25px_rgba(16,185,129,0.05)] rounded-2xl relative overflow-hidden text-center group">
            {/* Ambient hover sparkles */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0,transparent_60%)] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Award size={20} />
              </div>
              <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-relaxed italic max-w-2xl">
                &ldquo;Every milestone represents continuous learning, persistence, and a passion for building impactful software. This journey is just getting started.&rdquo;
              </p>
              <div className="flex items-center gap-1 mt-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">
                <span>AYUSH KUMAR JHA</span>
                <ChevronRight size={10} />
                <span>SOFTWARE ENGINEER</span>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
