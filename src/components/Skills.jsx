import React, { useEffect, useState, useRef } from 'react';
import { Code, Globe, Database, Terminal, Cpu } from 'lucide-react';

export default function Skills() {
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

  const categories = [
    {
      title: "Languages",
      icon: <Code size={20} className="text-amber-500" />,
      items: ["C++", "Java", "Python"],
    },
    {
      title: "Web Technologies",
      icon: <Globe size={20} className="text-blue-500" />,
      items: ["HTML & CSS", "JavaScript", "React.js", "MERN Stack"],
    },
    {
      title: "Databases",
      icon: <Database size={20} className="text-rose-500" />,
      items: ["SQL", "MongoDB"],
    },
    {
      title: "Core CS Concepts",
      icon: <Cpu size={20} className="text-emerald-500" />,
      items: ["DSA", "OOP", "Operating Systems", "DBMS"],
    },
  ];

  return (
    <section id="tech" ref={sectionRef} className="py-24 bg-gray-950/20 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="font-mono text-emerald-400 text-xs tracking-wider uppercase block mb-2">// Technical Proficiency</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">My Tech Stack</h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 transition-all duration-500 hover:border-emerald-500/30 hover:bg-slate-900/60 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Category Title */}
              <h3 className="text-lg font-bold flex items-center gap-3 mb-6">
                {cat.icon}
                <span>{cat.title}</span>
              </h3>

              {/* Items List */}
              <div className="flex flex-col gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-4 py-3 bg-white/2 border border-white/5 rounded-xl text-sm text-gray-400 hover:text-white hover:bg-white/5 hover:-translate-x-0.5 hover:border-white/15 transition-all duration-200 cursor-default"
                  >
                    <Terminal size={14} className="text-gray-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
