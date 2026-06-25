"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { Search, X, Calendar, ShieldCheck, ExternalLink } from "lucide-react";

interface Cert {
  title: string;
  issuer: string;
  category: string;
  link: string;
  date: string;
  credentialId?: string;
  featured?: boolean;
  badgeStyle?: string;
}

const getCategoryStyle = (category: string) => {
  switch (category.toLowerCase()) {
    case "programming":
      return "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400";
    case "data science":
      return "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400";
    case "cloud":
      return "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400";
    case "ai / ml":
      return "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400";
    case "web development":
      return "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400";
    default:
      return "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400";
  }
};

function IssuerLogo({ issuer }: { issuer: string }) {
  switch (issuer.toLowerCase()) {
    case "cisco networking academy":
      return (
        <div className="flex flex-col items-start select-none shrink-0">
          <svg className="h-4 w-auto text-[#00b0ea]" viewBox="0 0 24 14" fill="currentColor">
            <rect x="1" y="8" width="1.2" height="4" rx="0.6" />
            <rect x="3.5" y="6" width="1.2" height="6" rx="0.6" />
            <rect x="6" y="4" width="1.2" height="8" rx="0.6" />
            <rect x="8.5" y="2" width="1.2" height="10" rx="0.6" />
            <rect x="11.5" y="0" width="1.2" height="12" rx="0.6" />
            <rect x="14.5" y="2" width="1.2" height="10" rx="0.6" />
            <rect x="17" y="4" width="1.2" height="8" rx="0.6" />
            <rect x="19.5" y="6" width="1.2" height="6" rx="0.6" />
            <rect x="22" y="8" width="1.2" height="4" rx="0.6" />
          </svg>
          <span className="text-[9px] font-black text-[#00b0ea] tracking-[0.18em] font-sans mt-0.5 select-none leading-none">
            CISCO
          </span>
        </div>
      );
    case "mongodb university":
      return (
        <div className="flex items-center gap-1.5 select-none shrink-0">
          <svg className="w-5.5 h-5.5 text-[#13aa52] fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-.39 0-.75.05-1.12.14C6.54 1.15 4.3 4.29 4.3 8.35c0 5.41 4.7 10.97 7.22 15.06a.6.6 0 0 0 .96 0c2.52-4.09 7.22-9.65 7.22-15.06 0-4.06-2.24-7.2-6.58-8.21C12.75.05 12.39 0 12 0zm.66 4.31c.06 0 .12.01.17.02 2.65.62 3.97 2.66 3.97 5.48 0 3.32-2.73 7.02-4.14 9.48V4.31zM11.34 4.31v14.98c-1.41-2.46-4.14-6.16-4.14-9.48 0-2.82 1.32-4.86 3.97-5.48.05-.01.11-.02.17-.02z"/>
          </svg>
          <span className="text-[13px] font-black text-slate-900 dark:text-white tracking-tight leading-none font-sans select-none">
            MongoDB<span className="text-[#13aa52]">.</span>
          </span>
        </div>
      );
    case "infosys springboard":
      return (
        <div className="flex flex-col select-none justify-center shrink-0">
          <span className="text-[14px] font-extrabold text-[#007cc3] tracking-tighter leading-none font-sans">
            Infosys
          </span>
          <span className="text-[8.5px] font-bold text-[#00a2e8] tracking-[0.05em] leading-none mt-0.5">
            Springboard
          </span>
        </div>
      );
    case "codechef academy":
      return (
        <div className="flex items-center gap-1.5 select-none shrink-0">
          <svg className="w-5 h-5 text-slate-800 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18H18" />
            <path d="M6 14H18" />
            <path d="M6 10H18" />
            <path d="M3 22H21" />
            <path d="M3 2H21" />
          </svg>
          <span className="text-[10px] font-black text-slate-900 dark:text-white tracking-[0.06em] font-sans">
            CODECHEF
          </span>
        </div>
      );
    case "nasscom futureskills prime":
      return (
        <div className="flex flex-col select-none justify-center shrink-0">
          <span className="text-[12px] font-black text-purple-500 tracking-tight leading-none font-sans uppercase">
            NASSCOM
          </span>
          <span className="text-[7.5px] font-bold text-slate-500 dark:text-gray-400 tracking-[0.05em] leading-none mt-0.5 uppercase">
            FutureSkills
          </span>
        </div>
      );
    case "bihar skill development mission":
      return (
        <div className="flex flex-col select-none justify-center shrink-0">
          <span className="text-[12px] font-black text-orange-500 tracking-tighter leading-none font-sans uppercase">
            BSDM
          </span>
          <span className="text-[7.5px] font-bold text-slate-500 dark:text-gray-400 tracking-[0.02em] leading-none mt-0.5 uppercase">
            BSDM Bihar
          </span>
        </div>
      );
    default:
      return (
        <div className="flex items-center select-none shrink-0">
          <span className="text-[11px] font-bold text-slate-400 dark:text-gray-500 tracking-wide font-sans uppercase">
            {issuer}
          </span>
        </div>
      );
  }
}

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"latest" | "category" | "title">("latest");

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });

  const certsData: Cert[] = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      category: "Programming",
      link: "https://drive.google.com/file/d/1XFV4B0WrhM0-1u252jX1g22L91mTLiN2/view",
      date: "Jan 2024",
      credentialId: "CISCO-PY-ESS1",
      featured: true,
      badgeStyle: "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400"
    },
    {
      title: "Learn C++",
      issuer: "CodeChef Academy",
      category: "Programming",
      link: "https://drive.google.com/file/d/1lcL8QWl40f3A1F1uTaZoqjWVmExYiYKI/view",
      date: "Dec 2023",
      credentialId: "CODECHEF-CPP",
      featured: true,
      badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400"
    },
    {
      title: "Database and SQL",
      issuer: "Infosys Springboard",
      category: "Data Science",
      link: "https://drive.google.com/file/d/1UZao3abB5h6D07UpdhRF-UtVA5p7M0RI/view?usp=drivesdk",
      date: "Feb 2024",
      credentialId: "INFOSYS-DB-SQL",
      featured: true,
      badgeStyle: "bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400"
    },
    {
      title: "MongoDB Transactions",
      issuer: "MongoDB University",
      category: "Data Science",
      link: "https://drive.google.com/drive/folders/1KiF63XLCx-8exMHNJeJ8Fju036iHqdJ2",
      date: "Mar 2024",
      credentialId: "MONGO-TRANS-101",
      featured: true,
      badgeStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "Infosys Springboard",
      category: "Cloud",
      link: "https://drive.google.com/drive/folders/1KiF63XLCx-8exMHNJeJ8Fju036iHqdJ2",
      date: "Mar 2024",
      credentialId: "INFOSYS-AWS-FOUNDATIONS",
      featured: true,
      badgeStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      category: "Cloud",
      link: "https://drive.google.com/file/d/15fe4YMIAzpJUWDzGgn5jrxiiz1I6ideb/view",
      date: "Oct 2023",
      credentialId: "CISCO-NET-BASICS",
      featured: false,
      badgeStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
    },
    {
      title: "Cyber Security",
      issuer: "Cisco Networking Academy",
      category: "Cloud",
      link: "https://drive.google.com/file/d/1FN55j_tLyZdd6cL97jBFNRTZIyQ834cV/view",
      date: "Oct 2023",
      credentialId: "CISCO-CYBER-SEC",
      featured: false,
      badgeStyle: "bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400"
    },
    {
      title: "React & Frontend Development",
      issuer: "Infosys Springboard",
      category: "Web Development",
      link: "https://drive.google.com/drive/folders/1KiF63XLCx-8exMHNJeJ8Fju036iHqdJ2",
      date: "Feb 2024",
      credentialId: "INFOSYS-REACT-FE",
      featured: true,
      badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400"
    },
    {
      title: "Developing IoT Applications",
      issuer: "NASSCOM FutureSkills Prime",
      category: "AI / ML",
      link: "https://drive.google.com/file/d/1OzhR6b8f3saXX6vN7XDjXHMmzZ_Hczza/view?usp=drivesdk",
      date: "Dec 2023",
      credentialId: "NASSCOM-IoT-APP",
      featured: false,
      badgeStyle: "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400"
    },
    {
      title: "Kushal Yuva Program (BS-CIT, BS-CLS, BS-CSS)",
      issuer: "Bihar Skill Development Mission",
      category: "Web Development",
      link: "https://drive.google.com/file/d/1WJzvR5ZY298hBalMbVg6pPMzWVbOjLSu/view",
      date: "Jun 2023",
      credentialId: "BSDM-KYP-2023",
      featured: false,
      badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400"
    }
  ];

  const featuredCerts = certsData.filter((c) => c.featured);

  const filters = [
    { name: "All", value: "all" },
    { name: "AI / ML", value: "ai / ml" },
    { name: "Cloud", value: "cloud" },
    { name: "Programming", value: "programming" },
    { name: "Web Dev", value: "web development" },
    { name: "Data Science", value: "data science" }
  ];

  // Search, Filter & Sort Combined Logic
  const filteredCerts = certsData
    .filter((cert) => {
      const matchesFilter =
        activeFilter === "all" ||
        cert.category.toLowerCase() === activeFilter.toLowerCase();
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cert.credentialId && cert.credentialId.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      } else {
        const parseDate = (dStr: string) => {
          const [m, y] = dStr.split(" ");
          const months: { [key: string]: number } = {
            Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
            Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
          };
          return new Date(parseInt(y), months[m] || 0);
        };
        return parseDate(b.date).getTime() - parseDate(a.date).getTime();
      }
    });

  const sectionMetrics = [
    { value: "9+", label: "Certifications", icon: "📜" },
    { value: "AWS / Cisco", label: "Cloud Certified", icon: "☁️" },
    { value: "IoT / ML", label: "AI & ML Certified", icon: "🤖" },
    { value: "100%", label: "Continuous Learner", icon: "📈" }
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: idx * 0.08,
        duration: 0.6,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden text-theme-text border-b border-theme-border transition-colors duration-300">
      
      {/* Decorative Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 right-0 opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 left-0 opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 dark:border-white/5 pb-8">
          <div className="flex items-start gap-4">
            {/* Shield Verified Icon Badge */}
            <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 shrink-0 select-none">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                Certifications
              </h2>
              <p className="text-slate-500 dark:text-gray-400 mt-2 text-sm max-w-2xl leading-relaxed">
                Professional certifications demonstrating my commitment to continuous learning and technical excellence.
              </p>
            </div>
          </div>
          
          <a
            href="https://drive.google.com/drive/folders/1KiF63XLCx-8exMHNJeJ8Fju036iHqdJ2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 self-start md:self-auto shadow-[0_2px_8px_rgba(16,185,129,0.05)] cursor-pointer"
          >
            <span>View All Certifications</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Achievement Summary Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          {sectionMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUpVariants}
              className="h-full"
            >
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-md flex items-center gap-3 hover:border-emerald-500/25 transition-all duration-300">
                <span className="text-2xl shrink-0 select-none">{metric.icon}</span>
                <div className="min-w-0">
                  <span className="text-sm md:text-base font-black font-mono text-emerald-400 block leading-tight">{metric.value}</span>
                  <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-wider block truncate">{metric.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full select-none">Highlight</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Featured Credentials</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCerts.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group h-full"
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] border-slate-200 dark:border-white/10 hover:border-emerald-500/40 relative overflow-hidden bg-slate-50/60 dark:bg-slate-900/60">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-500 pointer-events-none" />
                  
                  <div>
                    {/* Top Row with Logo & Category */}
                    <div className="flex items-center justify-between mb-5 pb-2.5 border-b border-white/5">
                      <IssuerLogo issuer={cert.issuer} />
                      <span className={`px-2 py-0.5 rounded border text-[9px] font-mono font-bold uppercase tracking-wider ${cert.badgeStyle || getCategoryStyle(cert.category)}`}>
                        {cert.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                      {cert.title}
                    </h4>
                    
                    {/* Organization details */}
                    <div className="flex items-center text-[10px] text-slate-500 dark:text-gray-400 mb-2 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-500 shrink-0" />
                      <span>{cert.issuer}</span>
                    </div>

                    {/* Credential ID */}
                    {cert.credentialId && (
                      <div className="text-[9px] font-mono text-gray-500 dark:text-gray-500 mb-1.5">
                        ID: {cert.credentialId}
                      </div>
                    )}

                    {/* Date with calendar icon */}
                    <div className="flex items-center text-slate-500 dark:text-gray-400 text-[10px] font-mono mt-3 select-none">
                      <Calendar size={11} className="mr-1.5 text-emerald-500" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Verify CTA button */}
                  <div className="text-center mt-5 pt-3.5 border-t border-slate-200/60 dark:border-white/5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] group-hover:text-[#34D399] transition-colors duration-200">
                      <span>Verify Certificate</span>
                      <ExternalLink size={11} />
                    </span>
                  </div>
                </SpotlightCard>
              </a>
            ))}
          </div>
        </div>

        {/* Filter Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full select-none">Explore</span>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Credential Catalog</h3>
        </div>

        {/* Filter Controls, Search & Sorting */}
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between mb-8 max-w-5xl mx-auto bg-slate-950/20 backdrop-blur-md p-3.5 rounded-2xl border border-white/5">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start w-full md:w-auto">
            {filters.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer select-none ${
                  activeFilter === tab.value
                    ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 shadow-[0_0_12px_rgba(16,185,129,0.1)]"
                    : "text-gray-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Search bar & Sorting */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            {/* Search input */}
            <div className="relative w-full sm:w-56">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
                <Search size={12} />
              </span>
              <input
                type="text"
                placeholder="Search credentials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-2 text-xs rounded-lg border border-slate-200 dark:border-white/5 bg-slate-950/40 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/25 transition-all duration-300 placeholder:text-gray-500 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-white cursor-pointer"
                >
                  <X size={10} />
                </button>
              )}
            </div>

            {/* Sorting Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "latest" | "category" | "title")}
              className="w-full sm:w-36 px-2 py-2 text-xs rounded-lg border border-slate-200 dark:border-white/5 bg-slate-950/40 text-slate-500 dark:text-slate-300 focus:outline-none focus:border-emerald-500/50 cursor-pointer select-none font-bold"
            >
              <option value="latest" className="bg-slate-900 text-white">Sort by: Latest</option>
              <option value="category" className="bg-slate-900 text-white">Sort by: Category</option>
              <option value="title" className="bg-slate-900 text-white">Sort by: Title</option>
            </select>
          </div>

        </div>

        {/* Regular/Filtered Grid with layout transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={cert.title}
                className="h-full"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full group"
                >
                  <SpotlightCard className="p-6 h-full flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(16,185,129,0.06)] dark:hover:shadow-[0_15px_30px_rgba(16,185,129,0.1)] transition-all duration-500 bg-slate-50/40 dark:bg-slate-900/40">
                    <div>
                      {/* Top Row with Logo & Category */}
                      <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                        <IssuerLogo issuer={cert.issuer} />
                        <span className={`px-2 py-0.5 rounded border text-[9px] font-mono font-bold uppercase tracking-wider ${cert.badgeStyle || getCategoryStyle(cert.category)}`}>
                          {cert.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-extrabold text-slate-900 dark:text-white text-sm leading-snug group-hover:text-emerald-400 transition-colors duration-300 mb-2.5">
                        {cert.title}
                      </h4>
                      
                      {/* Verified Issuer Row */}
                      <div className="flex items-center text-[10px] text-slate-500 dark:text-gray-400 mb-2 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-500 shrink-0" />
                        <span>{cert.issuer}</span>
                      </div>

                      {/* Credential ID */}
                      {cert.credentialId && (
                        <div className="text-[9px] font-mono text-gray-500 dark:text-gray-500 mb-1">
                          ID: {cert.credentialId}
                        </div>
                      )}

                      {/* Date with calendar icon */}
                      <div className="flex items-center text-slate-500 dark:text-gray-400 text-[10px] font-mono mt-3 select-none">
                        <Calendar size={11} className="mr-1.5 text-emerald-500" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Verify button */}
                    <div className="text-center mt-5 pt-3.5 border-t border-slate-200/60 dark:border-white/5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] group-hover:text-[#34D399] transition-colors duration-200">
                        <span>Verify Certificate</span>
                        <ExternalLink size={11} />
                      </span>
                    </div>
                  </SpotlightCard>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* If no certifications match filter/search */}
        {filteredCerts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-gray-500 font-medium">No certifications found matching your criteria. Try another keyword or tab.</p>
          </div>
        )}

      </div>
    </section>
  );
}
