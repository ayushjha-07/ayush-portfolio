import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#tech', id: 'tech' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Shrink Nav
      setIsScrolled(window.scrollY > 50);

      // Active Section Tracking
      const scrollPos = window.scrollY + 150;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-gray-950/85 backdrop-blur-md border-b border-white/5 shadow-xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-extrabold text-white flex items-center gap-1 font-sans">
          <span className="text-blue-500">&lt;</span>
          Ayush
          <span className="text-emerald-500">.</span>
          Jha
          <span className="text-blue-500">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors duration-200 hover:text-white ${
                    activeSection === link.id ? 'text-white font-semibold' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed top-0 right-0 w-72 h-screen bg-gray-950/98 backdrop-blur-lg border-l border-white/5 flex flex-col justify-center gap-8 pl-12 z-40 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-white ${
                  activeSection === link.id ? 'text-blue-400 font-semibold' : 'text-gray-400'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
