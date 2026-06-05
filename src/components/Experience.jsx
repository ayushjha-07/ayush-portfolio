import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-gray-950/20 text-white relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="font-mono text-emerald-400 text-xs tracking-wider uppercase block mb-2">// Career Journey</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Work Experience</h2>
        </div>

        {/* Timeline wrapper */}
        <div className="relative border-l-2 border-blue-500/20 ml-4 md:ml-8 pl-8 md:pl-12 py-2">
          
          {/* Timeline Node dot */}
          <div className="absolute -left-[11px] top-6 w-5 h-5 rounded-full bg-gray-950 border-4 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300 hover:bg-emerald-500 hover:border-emerald-500" />
          
          {/* Experience Card */}
          <div className={`bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 hover:shadow-[0_15px_35px_rgba(59,130,246,0.08)] transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Briefcase className="text-blue-500" size={20} />
                  <span>Web Development Intern</span>
                </h3>
                <h4 className="text-sm font-semibold text-emerald-400 mt-1">A2IT Pvt. Ltd.</h4>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/3 border border-white/5 rounded-lg text-xs text-gray-400 font-mono">
                <Calendar size={12} />
                <span>June 2025 - July 2025</span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-4 list-none text-gray-400 text-sm leading-relaxed">
              <li className="relative pl-6 before:content-['➔'] before:absolute before:left-0 before:text-emerald-500 before:text-xs">
                Engineered interactive front-end components and page templates utilizing React.js, optimizing component reusability and render times.
              </li>
              <li className="relative pl-6 before:content-['➔'] before:absolute before:left-0 before:text-emerald-500 before:text-xs">
                Collaborated on designing fluid, responsive layouts, establishing cross-browser layouts and mobile-first design system elements.
              </li>
              <li className="relative pl-6 before:content-['➔'] before:absolute before:left-0 before:text-emerald-500 before:text-xs">
                Identified, logged, and debugged complex client-side errors, streamlining codebase reliability and increasing UI metrics.
              </li>
              <li className="relative pl-6 before:content-['➔'] before:absolute before:left-0 before:text-emerald-500 before:text-xs">
                Participated in daily agile sync-ups, presenting layout prototypes, and contributing directly to group coding repositories.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
