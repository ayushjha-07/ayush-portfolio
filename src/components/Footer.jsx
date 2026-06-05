import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="border-t border-white/5 bg-gray-950/80 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="#hero" className="text-lg font-extrabold text-white flex items-center gap-1 font-sans">
            <span className="text-blue-500">&lt;</span>
            Ayush
            <span className="text-emerald-500">.</span>
            Jha
            <span className="text-blue-500">/&gt;</span>
          </a>
          <p className="text-gray-500 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Ayush Kumar Jha. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-11 h-11 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-gray-400 flex items-center justify-center cursor-pointer transition-all duration-300 z-50 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.35)] hover:-translate-y-1 ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to Top"
      >
        <ChevronUp size={20} />
      </button>
    </>
  );
}
