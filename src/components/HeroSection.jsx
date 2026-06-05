import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import CanvasBackground from './CanvasBackground';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center text-center justify-center py-20 px-4 bg-gray-950/40 text-white overflow-hidden">
      {/* Interactive Canvas Particles Backdrop */}
      <CanvasBackground />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Open Opportunities Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 animate-pulse">
        <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]" />
        Open for Opportunities
      </div>

      {/* 1. Profile Headshot Container */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-r from-emerald-400 to-blue-500 shadow-[0_0_35px_rgba(52,211,153,0.25)] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.35)] mb-8">
        <img 
          src={profileImg} 
          alt="Ayush Kumar Jha" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* 2. Text Titles */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
        Building <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">scalable web solutions</span> &amp; solving complex <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">algorithmic problems</span>.
      </h1>
      
      <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl">
        Hello! I'm <span className="text-white font-semibold">Ayush Kumar Jha</span>, a Software Engineer proficient in <strong className="text-white font-semibold">React.js</strong>, <strong className="text-white font-semibold">C++</strong>, and <strong className="text-white font-semibold">Python</strong>, focused on clean architecture and high-performance algorithms.
      </p>
      
      {/* 3. Interactive Social & Platform Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 z-10">
        {/* View Work Button */}
        <a 
          href="#projects" 
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-xl font-semibold text-white hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-200"
        >
          <span>View My Work</span>
          <ArrowRight size={18} />
        </a>

        {/* GitHub Button */}
        <a 
          href="https://github.com/ayushjha-07" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl font-medium text-slate-200 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)] transition-all duration-200"
        >
          <Github size={18} className="text-emerald-400" />
          <span>GitHub</span>
        </a>

        {/* LinkedIn Button */}
        <a 
          href="https://linkedin.com/in/ayushjha07" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl font-medium text-slate-200 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-200"
        >
          <Linkedin size={18} className="text-cyan-400" />
          <span>LinkedIn</span>
        </a>

        {/* Email Button */}
        <a 
          href="mailto:jhaayushkumar18@gmail.com" 
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl font-semibold text-slate-950 hover:opacity-90 shadow-md transition-all duration-200"
        >
          <Mail size={18} />
          <span>Contact Me</span>
        </a>
      </div>
    </section>
  );
}
