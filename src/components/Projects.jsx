import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import kiranaImg from '../assets/project-kirana.png';
import memoryImg from '../assets/project-memory.png';
import fashionImg from '../assets/project-fashion.png';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'React.js', value: 'react' },
    { name: 'E-Commerce', value: 'ecommerce' },
    { name: 'Systems/OS', value: 'systems' },
  ];

  const projectList = [
    {
      id: 1,
      title: "Kirana Store E-Commerce",
      desc: "A responsive Indian grocery store web app built with React.js. Features intuitive product category filtering, custom product search, a fluid animated shopping cart, and persistent state management. Deployed on Vercel.",
      image: kiranaImg,
      tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Vercel"],
      category: ["react", "ecommerce"],
      github: "https://github.com/ayushjha-07",
      highlightColor: "hover:border-blue-500/30 hover:shadow-blue-500/10",
    },
    {
      id: 2,
      title: "Memory Management Simulator",
      desc: "An interactive operational simulation of virtual memory replacement. Models physical page frames and tracks cache hits/faults utilizing FIFO and LRU (Least Recently Used) algorithms with step-by-step visual reports.",
      image: memoryImg,
      tags: ["HTML5", "CSS3", "JavaScript", "Operating Systems"],
      category: ["systems"],
      github: "https://github.com/ayushjha-07",
      highlightColor: "hover:border-emerald-500/30 hover:shadow-emerald-500/10",
    },
    {
      id: 3,
      title: "Guys Fashion E-Commerce",
      desc: "A clean, high-performance storefront styling showcase for modern menswear. Features modern grid structures, fluid zoom previews on product cards, structural responsiveness, and sleek, styled user interfaces.",
      image: fashionImg,
      tags: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
      category: ["ecommerce"],
      github: "https://github.com/ayushjha-07",
      highlightColor: "hover:border-blue-500/30 hover:shadow-blue-500/10",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? projectList
    : projectList.filter(p => p.category.includes(activeFilter));

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gray-950/20 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="font-mono text-emerald-400 text-xs tracking-wider uppercase block mb-2">// Portfolio Showcase</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Featured Projects</h2>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2 rounded-xl text-xs font-mono border transition-all duration-200 cursor-pointer ${
                activeFilter === f.value
                  ? 'bg-blue-500/10 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                  : 'bg-white/3 border-white/5 text-gray-400 hover:border-blue-500/30 hover:text-white'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 ${project.highlightColor} hover:-translate-y-1.5`}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-slate-950/80 border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 hover:text-blue-400 transition-colors duration-200">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-gray-500 text-[10px] font-mono hover:text-blue-400 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-white/5 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 rounded-xl text-xs font-semibold transition-all duration-200"
                  >
                    <Github size={14} />
                    <span>View GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
