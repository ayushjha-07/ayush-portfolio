import React, { useEffect, useState, useRef } from 'react';
import { Code2, GraduationCap, Award } from 'lucide-react';

function Counter({ targetValue, prefix = '', suffix = '', duration = 1500, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(targetValue, 10);
    if (start === end) {
      setCount(end);
      return;
    }

    const totalMiliseconds = duration;
    const incrementTime = 15;
    const totalSteps = totalMiliseconds / incrementTime;
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
  }, [isVisible, targetValue, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const achievementsList = [
    {
      id: 1,
      icon: <Code2 className="text-blue-400" size={24} />,
      numEl: <Counter targetValue="600" suffix="+" isVisible={isVisible} />,
      title: "Coding Problems Solved",
      subtitle: "LeetCode, CodeChef, HackerRank",
      borderColor: "hover:border-blue-500/30 hover:shadow-blue-500/10",
    },
    {
      id: 2,
      icon: <GraduationCap className="text-emerald-400" size={24} />,
      numEl: <Counter targetValue="100" suffix="/100" isVisible={isVisible} />,
      title: "Computer Science AMCAT Score",
      subtitle: "Perfect 100/100 Percentile",
      borderColor: "hover:border-emerald-500/30 hover:shadow-emerald-500/10",
    },
    {
      id: 3,
      icon: <Award className="text-blue-400" size={24} />,
      numEl: <Counter targetValue="3" suffix="rd" isVisible={isVisible} />,
      title: "Startup Bihar Ideation Award",
      subtitle: "3rd Position Award Winner",
      borderColor: "hover:border-blue-500/30 hover:shadow-blue-500/10",
    },
  ];

  return (
    <section ref={gridRef} className="py-16 bg-gray-950/40 text-white border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsList.map((item) => (
            <div 
              key={item.id}
              className={`bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 text-center flex flex-col items-center justify-center transition-all duration-300 ${item.borderColor} hover:-translate-y-1 hover:bg-slate-900/60`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Number */}
              <div className="text-4xl font-extrabold tracking-tight mb-2">
                {item.numEl}
              </div>

              {/* Descriptions */}
              <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-xs font-mono text-gray-500">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
