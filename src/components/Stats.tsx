"use client";

import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Code, FolderGit, FileCheck, Landmark } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

function Counter({ target, suffix = "", duration = 1500, trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = target;
    if (start === end) {
      const t = setTimeout(() => setCount(end), 0);
      return () => clearTimeout(t);
    }

    const incrementTime = 15;
    const totalSteps = duration / incrementTime;
    const stepIncrement = end / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [trigger, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const statsData = [
    {
      icon: <Code className="text-theme-primary" size={24} />,
      target: 270,
      suffix: "+",
      title: "Algorithmic Problems",
      subtitle: "Solved on LeetCode & HackerRank",
    },
    {
      icon: <FolderGit className="text-theme-primary" size={24} />,
      target: 3,
      suffix: "",
      title: "Full Projects",
      subtitle: "Deployed React & Systems apps",
    },
    {
      icon: <FileCheck className="text-theme-primary" size={24} />,
      target: 9,
      suffix: "",
      title: "Technical Certifications",
      subtitle: "Cisco, CodeChef & Skill Missions",
    },
    {
      icon: <Landmark className="text-theme-primary" size={24} />,
      target: 12,
      suffix: " Wks",
      title: "Internship Experience",
      subtitle: "A2IT Online & CIPET Patna",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-theme-bg-sec/40 border-t border-b border-theme-border relative z-10 text-theme-text transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <div
              key={stat.title}
              className="bg-theme-card/75 backdrop-blur-md border border-theme-border shadow-theme-card rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-theme-primary/30 hover:shadow-theme-primary/10"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-theme-bg border border-theme-border flex items-center justify-center mb-4 transition-colors duration-300">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-theme-text mb-2 font-mono transition-colors duration-300">
                <Counter
                  target={stat.target}
                  suffix={stat.suffix}
                  trigger={isInView}
                />
              </div>

              {/* Text */}
              <h3 className="text-sm font-semibold text-theme-text mb-1 transition-colors duration-300">{stat.title}</h3>
              <p className="text-xs text-theme-text-sec font-medium transition-colors duration-300">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
