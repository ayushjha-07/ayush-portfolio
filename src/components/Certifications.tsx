"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

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
      // Blue/Teal capsule
      return "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400";
    case "database":
      // Green capsule
      return "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400";
    case "networking":
      // Cyan capsule
      return "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400";
    case "security":
      // Red capsule
      return "bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400";
    case "iot":
      // Orange/Amber capsule
      return "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400";
    case "professional skills":
      // Purple capsule
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
          <svg className="w-5.5 h-5.5 text-slate-900 dark:text-white fill-current" viewBox="0 0 24 24">
            <path d="M11.2574.0039c-.37.0101-.7353.041-1.1003.095C9.6164.1539.0766.42368.482.694c-.757.3244-1.5147.6486-2.2176.7027-1.1896.3785-1.568.919-1.89251.35160.054-.054.1079-.054.1079-.4325.865-.48731.73-.3252.5952.1621.5407.37861.0282.54081.5148.37851.0274.75782.0007.923.1362.1622.3244.3235.7571.43161.1897.2704.8651.5421.83831.3532.5952l.0057-.0028c.0175.0183.0301.0387.0482.0568.0072-.0036.0141-.0063.0213-.0099l-.0213-.5849c.6489-.97331.5673-1.62212.865-1.8925.5195-.10931.081-.14971.6625-.1278a8.77338.77330011.7988.2357c1.4599.37852.5951.13582.64921.7846.0273.3549.0398.6952.03261.0364-.001.064-.0046.1285-.007.193l.1362.0682c.075-.0375.1424-.107.2059-.1902.0008-.001.002-.002.0028-.0028.0018-.0023.0039-.0061.0057-.0085.0396-.0536.0747-.1236.1107-.1931.0188-.0377.0372-.0866.0554-.1292.2048-.4622.362-1.1536.538-1.9635.0541-.2703.1092-.4864.1633-.7027.4326-.97331.0266-1.83821.6213-2.6492.9733-1.35181.8928-2.59621.7846-4.0561-1.784-3.4608-4.2718-4.0017-5.5695-4.272-.2163-.0541-.3233-.0539-.4856-.108-1.3382-.2433-2.4945-.3953-3.6046-.3648zm5.042814.3788a9.86029.8602000-.0326-.9824c-.0541-.703-1.1892-1.46-2.7032-1.8386-.588-.1336-1.1764-.2142-1.7448-.2356-.539-.0137-1.0657.0248-1.5546.1277-1.2436.2704-2.2162.9193-2.8111.8925l.05111.431c.6672-.35581.7326-.87473.139-.9994.0662-.0059.1368-.0059.2044-.0099.1177-.013.2667-.044.4444-.0441.607503.2682.53364.87671.6483.039-.2744.0611-.549.071-.8234l.044.0227c.0028-.0622.0143-.1268.0156-.1888zM11.256.0578c.1239-.0034.2538.01.379.0114-.23-.0022-.4588.0026-.6871.0156.103-.0061.2046-.0242.308-.027zm.4983.0156c.6552.0141.3255.07112.0387.1803-.6834-.0987-1.3646-.1671-2.0387-.1803zm-1.3147.0554c-.076.0087-.1527.0133-.2285.0241-.8168.1167-1.7742.7015-2.751.045.3545-.1323.7143-.29571.0747-.4501C9.0765.47749.6705.20710.1571.1529c.0939-.0139.1886-.0133.2825-.0241zm-.2285.24c.16220.3787-.0002.5409.0539-.1425-.0357-.2595-.026-.3706-.0142a1.1741.174001.3166.0681c.57961.0012-.42645.2791-.67868.1492.15591.0276.31381.9963.46282.7201-.7029-1.7843-1.4067-4.921-1.5148-7.354-.054-.9733.001-1.8386.2172-2.4874C9.401.85579.7244.422810.2111.3687zm3.1361.271c-.8112.1088-.91846.1092-.97257.3528-.054.5407-.00011.73.0542.59520.2163.054.4325.054.64880-.2163-.054-.3786-.054-.5948-.4326-3.2442-.974-7.1362.9185-10.002zm3.352.3777c-.27042.1628-1.40473.191-1.78325.2998-.10811.6762-.3253.6222-.3795.2984-.0541-1.6762-.0007-3.4601.2697-5.2444.2703-1.8384.8651-3.67761.8925-5.3538zm-10.381.433c-.3581.1194-.632.248-.8575.3805.2317-.1358.4996-.2666.8575-.3805zm.2101.1974c.2155.0025.4384.0734.6006.2357-.0067-.004-.0078-.0033-.0142-.0071.1331.0929.2666.2093.3932.3847-.2036.9673.25533.0317.03984.6694.07631.5485.07173.1804.8494.4594-.9796-1.5107-1.176-3.4375-1.3218-5.236-.1128-1.0907-.2035-2.0969-.4642-2.9033-.144-.3047-.2684-.5745-.3833-.822-.0247-.0369-.0447-.0784-.071-.1135-.1082-.1082-.1619-.2696-.1619-.37770-.054.0539-.1618.108-.1618.054-.0541.1616-.0553.2157-.1094a1.0131.013001.2101-.0184zm-1.3459.6133c-.0604.0201-.0923.041-.1405.061.1768-.034.3617.0339.5196.318-.1877.8916.43643.3685.428e" />
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
            FutureSkills Prime
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
            Skill Mission Bihar
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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.05 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const certsData: Cert[] = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      category: "Programming",
      link: "https://drive.google.com/file/d/1XFV4B0WrhM0-1u252jX1g22L91mTLiN2/view",
      date: "Jan 2024",
      credentialId: "CISCO-PY-ESS1",
      featured: true,
      badgeStyle: "bg-sky-500/10 border-sky-500/20 text-sky-600 dark:text-sky-400",
    },
    {
      title: "Learn C++",
      issuer: "CodeChef Academy",
      category: "Programming",
      link: "https://drive.google.com/file/d/1lcL8QWl40f3A1F1uTaZoqjWVmExYiYKI/view",
      date: "Dec 2023",
      credentialId: "CODECHEF-CPP",
      featured: true,
      badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400",
    },
    {
      title: "Database and SQL",
      issuer: "Infosys Springboard",
      category: "Database",
      link: "https://drive.google.com/file/d/1UZao3abB5h6D07UpdhRF-UtVA5p7M0RI/view?usp=drivesdk",
      date: "Feb 2024",
      credentialId: "INFOSYS-DB-SQL",
      featured: true,
      badgeStyle: "bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400",
    },
    {
      title: "MongoDB Transactions",
      issuer: "MongoDB University",
      category: "Database",
      link: "https://drive.google.com/drive/folders/1KiF63XLCx-8exMHNJeJ8Fju036iHqdJ2",
      date: "Mar 2024",
      credentialId: "MONGO-TRANS-101",
      featured: true,
      badgeStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      category: "Networking",
      link: "https://drive.google.com/file/d/15fe4YMIAzpJUWDzGgn5jrxiiz1I6ideb/view",
      date: "Oct 2023",
      credentialId: "CISCO-NET-BASICS",
      badgeStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    },
    {
      title: "Cyber Security",
      issuer: "Cisco Networking Academy",
      category: "Security",
      link: "https://drive.google.com/file/d/1FN55j_tLyZdd6cL97jBFNRTZIyQ834cV/view",
      date: "Oct 2023",
      credentialId: "CISCO-CYBER-SEC",
      badgeStyle: "bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400",
    },
    {
      title: "IT Essentials",
      issuer: "Cisco Networking Academy",
      category: "Networking",
      link: "https://drive.google.com/file/d/1-CuXB4G0EqpFDEbt_M8bIqB_UZZkXFMN/view",
      date: "Sep 2023",
      credentialId: "CISCO-IT-ESS",
      badgeStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400",
    },
    {
      title: "Developing IoT Applications",
      issuer: "NASSCOM FutureSkills Prime",
      category: "IoT",
      link: "https://drive.google.com/file/d/1OzhR6b8f3saXX6vN7XDjXHMmzZ_Hczza/view?usp=drivesdk",
      date: "Dec 2023",
      credentialId: "NASSCOM-IoT-APP",
      badgeStyle: "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",
    },
    {
      title: "Kushal Yuva Program (BS-CIT, BS-CLS, BS-CSS)",
      issuer: "Bihar Skill Development Mission",
      category: "Professional Skills",
      link: "https://drive.google.com/file/d/1WJzvR5ZY298hBalMbVg6pPMzWVbOjLSu/view",
      date: "Jun 2023",
      credentialId: "BSDM-KYP-2023",
      badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400",
    },
  ];

  const featuredCerts = certsData.filter((c) => c.featured);

  const filters = [
    { name: "All", value: "all" },
    { name: "Programming", value: "programming" },
    { name: "Database", value: "database" },
    { name: "Networking", value: "networking" },
    { name: "Security", value: "security" },
    { name: "IoT", value: "iot" },
    { name: "Professional Skills", value: "professional skills" },
  ];

  const filteredCerts =
    activeFilter === "all"
      ? certsData
      : certsData.filter((c) => c.category.toLowerCase() === activeFilter.toLowerCase());

  const bannerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: (idx: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: idx * 0.06, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden text-theme-text border-b border-theme-border transition-colors duration-300">
      {/* Floating Ambient Glow Background */}
      <div className="glow-orb-emerald top-1/4 right-0 opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 left-0 opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-200 dark:border-white/5 pb-8">
          <div className="flex items-start gap-4">
            {/* Cyan/Green Badge Icon */}
            <div className="p-3 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 shrink-0">
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
                Professional certifications and courses that validate my technical skills and knowledge.
              </p>
            </div>
          </div>
          
          <a
            href="https://drive.google.com/drive/folders/1KiF63XLCx-8exMHNJeJ8Fju036iHqdJ2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300 self-start md:self-auto shadow-[0_2px_8px_rgba(16,185,129,0.05)] cursor-pointer"
          >
            View All Certifications
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Statistics Banner */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={bannerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <span className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">9+</span>
            <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Certifications Earned</span>
          </div>
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <span className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">6+</span>
            <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Certification Providers</span>
          </div>
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <span className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">Multiple</span>
            <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Technology Domains</span>
          </div>
          <div className="bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-2xl p-6 text-center backdrop-blur-md hover:border-emerald-500/30 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
            <span className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2 font-mono">100%</span>
            <span className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">Continuous Learning</span>
          </div>
        </motion.div>

        {/* Featured Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full">Highlight</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Featured Credentials</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCerts.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)] dark:hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] border-slate-200 dark:border-white/10 hover:border-emerald-500/40 relative overflow-hidden bg-slate-50/60 dark:bg-slate-900/60">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-500" />
                  
                  <div>
                    {/* Top Row with Logo & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <IssuerLogo issuer={cert.issuer} />
                      <span className={`px-2.5 py-1 rounded border text-[10px] font-mono font-bold uppercase tracking-wider ${cert.badgeStyle || getCategoryStyle(cert.category)}`}>
                        {cert.category}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h4 className="text-sm font-extrabold text-slate-900 dark:text-white mb-2.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                      {cert.title}
                    </h4>
                    
                    {/* Verified Issuer Row */}
                    <div className="flex items-center text-[11px] text-slate-500 dark:text-gray-400 mb-2 font-medium">
                      <svg className="w-3.5 h-3.5 mr-1.5 text-emerald-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708-.522 6.085 6.085 0 01-3.5-.838.75.75 0 00-1.1.649v5.258c0 3.3 2.22 6.208 5.485 7.155a.75.75 0 00.412 0c3.265-.947 5.485-3.856 5.485-7.155V2.744a.75.75 0 00-1.1-.65 6.085 6.085 0 01-3.5.839.75.75 0 00-.708.522L6.267 3.455zM9.53 7.03a.75.75 0 00-1.06-1.06L6 8.44 4.53 6.97a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3-3z" clipRule="evenodd" />
                      </svg>
                      <span>{cert.issuer}</span>
                    </div>

                    {/* Date with calendar icon */}
                    <div className="flex items-center text-slate-500 dark:text-gray-400 text-xs mt-3 select-none">
                      <svg className="w-3.5 h-3.5 mr-2 text-slate-400 dark:text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Centered Verify CTA Button */}
                  <div className="text-center mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] dark:text-[#10B981] group-hover:text-[#34D399] transition-colors duration-200">
                      Verify Certificate
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  </div>
                </SpotlightCard>
              </a>
            ))}
          </div>
        </div>

        {/* Filter Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full">Explore</span>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">Credential Catalog</h3>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 pb-8 border-b border-slate-200 dark:border-white/5">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-xl text-xs font-mono border transition-all duration-200 cursor-pointer ${
                activeFilter === filter.value
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.1)]"
                  : "bg-slate-100 dark:bg-white/3 border-slate-200 dark:border-white/5 text-slate-500 dark:text-gray-400 hover:border-emerald-500/30 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Regular/Filtered Grid */}
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
                  <SpotlightCard className="p-6 h-full flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(16,185,129,0.04)] dark:hover:shadow-[0_15px_30px_rgba(16,185,129,0.08)] transition-all duration-500 bg-slate-50/40 dark:bg-slate-900/40">
                    <div>
                      {/* Top Row with Logo & Category */}
                      <div className="flex items-center justify-between mb-4">
                        <IssuerLogo issuer={cert.issuer} />
                        <span className={`px-2 py-0.5 rounded border text-[9px] font-mono font-bold uppercase tracking-wider ${cert.badgeStyle || getCategoryStyle(cert.category)}`}>
                          {cert.category}
                        </span>
                      </div>

                      {/* Title & Issuer */}
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 mb-2.5">
                        {cert.title}
                      </h4>
                      
                      {/* Verified Issuer Row */}
                      <div className="flex items-center text-[11px] text-slate-500 dark:text-gray-400 mb-2 font-medium">
                        <svg className="w-3.5 h-3.5 mr-1.5 text-emerald-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708-.522 6.085 6.085 0 01-3.5-.838.75.75 0 00-1.1.649v5.258c0 3.3 2.22 6.208 5.485 7.155a.75.75 0 00.412 0c3.265-.947 5.485-3.856 5.485-7.155V2.744a.75.75 0 00-1.1-.65 6.085 6.085 0 01-3.5.839.75.75 0 00-.708.522L6.267 3.455zM9.53 7.03a.75.75 0 00-1.06-1.06L6 8.44 4.53 6.97a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3-3z" clipRule="evenodd" />
                        </svg>
                        <span>{cert.issuer}</span>
                      </div>

                      {/* Date with calendar icon */}
                      <div className="flex items-center text-slate-500 dark:text-gray-400 text-xs mt-3 select-none">
                        <svg className="w-3.5 h-3.5 mr-2 text-slate-400 dark:text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    {/* Verify button */}
                    <div className="text-center mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] dark:text-[#10B981] group-hover:text-[#34D399] transition-colors duration-200">
                        Verify Certificate
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </span>
                    </div>
                  </SpotlightCard>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
