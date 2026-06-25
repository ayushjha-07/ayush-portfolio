"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  ChevronLeft, ChevronRight, Quote, Star, Users, 
  Zap, Target, Code2, LineChart, Flame, Info, Eye
} from "lucide-react";
import SpotlightCard from "./SpotlightCard";

// Static background particles to avoid Next.js hydration mismatches
const TESTIMONIAL_PARTICLES = [
  { id: 1, top: "15%", left: "10%", size: 4, delay: 0 },
  { id: 2, top: "50%", left: "88%", size: 5, delay: 1.5 },
  { id: 3, top: "80%", left: "12%", size: 4, delay: 3 },
];

function LinkedInIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface TestimonialCardData {
  id: number;
  name: string;
  position: string;
  organization: string;
  quote: string;
  rating: number;
  avatarText: string;
  linkedin?: string;
}

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });
  const [activeTab, setActiveTab] = useState<"current" | "preview">("current");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const sampleTestimonials: TestimonialCardData[] = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Senior CSE Mentor & Professor",
      organization: "CGC Mohali",
      quote: "Ayush consistently demonstrates excellent problem-solving skills and quickly adapts to new technologies. His dedication to continuous learning is impressive.",
      rating: 5,
      avatarText: "RK",
      linkedin: "https://linkedin.com"
    },
    {
      id: 2,
      name: "Sneha Sharma",
      position: "Software Engineering Peer",
      organization: "Full-Stack Project Partner",
      quote: "Working with Ayush was a great experience. He writes clean code, communicates effectively, and always contributes valuable ideas.",
      rating: 5,
      avatarText: "SS",
      linkedin: "https://linkedin.com"
    },
    {
      id: 3,
      name: "Amit Verma",
      position: "Engineering Lead & Supervisor",
      organization: "Web Dev division",
      quote: "Ayush showed strong ownership of assigned tasks and delivered high-quality work on time. He has great potential as a software engineer.",
      rating: 5,
      avatarText: "AV",
      linkedin: "https://linkedin.com"
    }
  ];

  const highlights = [
    { title: "Team Player", desc: "Collaborative, effective communicator, and agile developer.", icon: <Users size={18} /> },
    { title: "Fast Learner", desc: "Rapidly picks up new libraries, stacks, and logic structures.", icon: <Zap size={18} /> },
    { title: "Problem Solver", desc: "Enjoys tackling complex algorithm puzzles and database latency issues.", icon: <Target size={18} /> },
    { title: "Clean Code Advocate", desc: "Writes modular, readable, and well-documented TypeScript/Java code.", icon: <Code2 size={18} /> },
    { title: "Growth Mindset", desc: "Constantly seeking constructive feedback and continuous improvement.", icon: <LineChart size={18} /> },
    { title: "Passionate Developer", desc: "Driven by building software that solves real-world human needs.", icon: <Flame size={18} /> },
  ];

  const nextSlide = useCallback(() => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % sampleTestimonials.length);
  }, [sampleTestimonials.length]);

  const prevSlide = useCallback(() => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + sampleTestimonials.length) % sampleTestimonials.length);
  }, [sampleTestimonials.length]);

  // Autoplay effect
  useEffect(() => {
    if (activeTab !== "preview" || isAutoplayPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeTab, isAutoplayPaused, nextSlide]);

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/10"
    >
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {TESTIMONIAL_PARTICLES.map((particle) => (
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
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Testimonials & <span className="gradient-text">Recommendations</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            Feedback from mentors, colleagues, and collaborators who have worked with me.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-slate-900/10 dark:bg-white/5 border border-theme-border/60 p-1 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("current")}
              className={`flex items-center gap-2 py-2 px-4 rounded-lg text-xs font-bold font-mono transition-all duration-200 cursor-pointer ${
                activeTab === "current"
                  ? "bg-emerald-500 text-white dark:text-slate-950 shadow-md shadow-emerald-500/20"
                  : "text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Info size={13} />
              <span>Current Status</span>
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 py-2 px-4 rounded-lg text-xs font-bold font-mono transition-all duration-200 cursor-pointer ${
                activeTab === "preview"
                  ? "bg-emerald-500 text-white dark:text-slate-950 shadow-md shadow-emerald-500/20"
                  : "text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Eye size={13} />
              <span>Layout Preview</span>
            </button>
          </div>
        </div>

        {/* Carousel / Empty State Display */}
        <div className="max-w-3xl mx-auto mb-20 min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            
            {/* Tab 1: Professional Placeholder (Empty State) */}
            {activeTab === "current" && (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <SpotlightCard className="p-8 md:p-10 border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.05)] rounded-2xl text-center relative overflow-hidden group">
                  <div className="absolute top-4 right-6 text-emerald-500/10 pointer-events-none">
                    <Quote size={80} />
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                      <Quote size={20} className="scale-x-[-1]" />
                    </div>
                    
                    <p className="text-sm md:text-base font-bold text-slate-800 dark:text-gray-200 leading-relaxed max-w-xl italic">
                      &ldquo;Recommendations will be added as I continue collaborating with mentors, teams, and industry professionals.&rdquo;
                    </p>
                    
                    <div className="h-[1px] w-12 bg-emerald-500/25" />
                    
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                      Awaiting Verifications
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            )}

            {/* Tab 2: Sliding Carousel Layout Preview */}
            {activeTab === "preview" && (
              <motion.div
                key="carousel-preview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full relative"
                onMouseEnter={() => setIsAutoplayPaused(true)}
                onMouseLeave={() => setIsAutoplayPaused(false)}
              >
                {/* Carousel Card Slider */}
                <div className="overflow-hidden p-1">
                  <AnimatePresence mode="wait">
                    {sampleTestimonials.map((item, idx) => {
                      if (idx !== carouselIndex) return null;
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="w-full"
                        >
                          <SpotlightCard className="p-8 border border-theme-border/60 hover:border-emerald-500/30 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 rounded-2xl relative overflow-hidden">
                            {/* Quotation Logo */}
                            <div className="absolute top-4 right-6 text-emerald-500/10 pointer-events-none">
                              <Quote size={80} />
                            </div>

                            <div className="flex flex-col gap-6 relative z-10">
                              {/* Quote text */}
                              <p className="text-xs md:text-sm text-slate-600 dark:text-gray-300 leading-relaxed italic pr-8">
                                &ldquo;{item.quote}&rdquo;
                              </p>

                              {/* Rating Stars & Profile row */}
                              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-theme-border/40">
                                <div className="flex items-center gap-3">
                                  {/* Initials Avatar bubble */}
                                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-xs text-emerald-600 dark:text-emerald-400 font-mono shadow-sm shrink-0">
                                    {item.avatarText}
                                  </div>
                                  <div>
                                    <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">
                                      {item.name}
                                    </h4>
                                    <span className="block text-[10px] text-slate-400 dark:text-gray-500">
                                      {item.position} &bull; {item.organization}
                                    </span>
                                  </div>
                                </div>

                                {/* Stars & Action */}
                                <div className="flex flex-col items-end gap-1.5 shrink-0">
                                  <div className="flex gap-0.5">
                                    {[...Array(item.rating)].map((_, starIdx) => (
                                      <Star 
                                        key={starIdx} 
                                        size={12} 
                                        className="fill-amber-500 stroke-amber-600 text-amber-500" 
                                      />
                                    ))}
                                  </div>
                                  {item.linkedin && (
                                    <a
                                      href={item.linkedin}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1 text-[9px] font-bold font-mono text-emerald-600 dark:text-emerald-400 hover:underline hover:text-emerald-500 transition-colors"
                                    >
                                      <LinkedInIcon size={10} />
                                      <span>LinkedIn</span>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          </SpotlightCard>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Manual Navigation Chevrons */}
                <div className="flex justify-center gap-3 mt-6">
                  <button
                    onClick={prevSlide}
                    className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 transition-colors duration-200 cursor-pointer shadow-sm"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <div className="flex items-center gap-1.5 px-2">
                    {sampleTestimonials.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCarouselIndex(dotIdx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          dotIdx === carouselIndex 
                            ? "w-5 bg-emerald-500 shadow-[0_0_6px_#10B981]" 
                            : "w-1.5 bg-slate-300 dark:bg-white/10"
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextSlide}
                    className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 transition-colors duration-200 cursor-pointer shadow-sm"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Recommendation Highlights Title */}
        <div className="text-center mb-10">
          <h3 className="text-lg font-bold font-mono uppercase tracking-widest text-slate-400 dark:text-gray-500">
            💡 Core Professional Attributes
          </h3>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={gridVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <SpotlightCard className="p-5 border border-theme-border/60 hover:border-emerald-500/25 transition-all duration-300 bg-slate-50/40 dark:bg-slate-900/40 rounded-xl flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200">
                    {item.title}
                  </h4>
                  <p className="text-[10px] md:text-xs text-slate-500 dark:text-gray-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
