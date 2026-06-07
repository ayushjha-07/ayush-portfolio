"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Briefcase, FileText } from "lucide-react";
import { Github, Linkedin } from "@/components/BrandIcons";

export default function FloatingRecruiterActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actions = [
    {
      icon: <FileText size={18} />,
      href: "https://drive.google.com/file/d/18nS71h1Sl7QcVHP8YrtwlfDBXjebI-JN/view?usp=sharing",
      label: "View Resume",
      color: "bg-emerald-500 hover:bg-emerald-400 text-white",
    },
    {
      icon: <Github size={18} />,
      href: "https://github.com/ayushjha-07",
      label: "GitHub",
      color: "bg-slate-900 dark:bg-white dark:text-slate-950 text-white hover:opacity-90",
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com/in/ayushjha07",
      label: "LinkedIn",
      color: "bg-[#0A66C2] hover:bg-[#0b5cac] text-white",
    },
    {
      icon: <Mail size={18} />,
      href: "mailto:jhaayushkumar18@gmail.com",
      label: "Email",
      color: "bg-rose-500 hover:bg-rose-400 text-white",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {/* Sub-actions menu */}
          <AnimatePresence>
            {isOpen && (
              <div className="flex flex-col gap-2.5 items-end mb-1">
                {actions.map((act, idx) => (
                  <motion.a
                    key={act.label}
                    href={act.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.9 }}
                    transition={{ delay: (actions.length - 1 - idx) * 0.05, duration: 0.2 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold shadow-lg hover-lift border border-white/10 ${act.color} group`}
                  >
                    <span className="font-mono text-[10px] hidden group-hover:block transition-all">{act.label}</span>
                    {act.icon}
                  </motion.a>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Primary Trigger FAB */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(actions[0].href, "_blank")}
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-white font-bold text-xs shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)] border border-emerald-400/20 hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.5)] cursor-pointer hover-lift group"
          >
            <Briefcase size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Recruiter Quick Menu</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
