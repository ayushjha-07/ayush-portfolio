"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, 
  Calendar, FileText, Briefcase, HelpCircle, MessageSquare, User 
} from "lucide-react";
import confetti from "canvas-confetti";
import SpotlightCard from "./SpotlightCard";
import Magnetic from "./Magnetic";
import { motion, useInView, useAnimation } from "framer-motion";

// Static background particles to avoid Next.js hydration mismatches
const CONTACT_PARTICLES = [
  { id: 1, top: "8%", left: "15%", size: 4, delay: 0 },
  { id: 2, top: "22%", left: "75%", size: 5, delay: 3 },
  { id: 3, top: "38%", left: "5%", size: 6, delay: 1 },
  { id: 4, top: "58%", left: "85%", size: 4, delay: 4 },
  { id: 5, top: "72%", left: "18%", size: 5, delay: 2 },
  { id: 6, top: "88%", left: "72%", size: 6, delay: 5 },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Brand SVG Icons
function LeetCodeIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.867-5.67a1.16 1.16 0 0 1 0-1.677l5.867-5.67c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-1.87 1.807a.56.56 0 0 0 0 .81l1.87 1.807c.466.45.466 1.17 0 1.62z" fill="#FFA116" />
      <path d="M13.102 12l-3-2.88 3-2.88 3 2.88z" fill="#FFA116" opacity="0.8" />
    </svg>
  );
}

function CodeChefIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M21 17H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zm-4-4H7a4.996 4.996 0 0 1-3.664-8.397A5 5 0 0 1 12 3a5 5 0 0 1 8.664 1.603A4.996 4.996 0 0 1 17 13z" fill="currentColor" />
    </svg>
  );
}

function HackerRankIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M17.15 19.12H6.85c-.93 0-1.68-.75-1.68-1.68V6.56c0-.93.75-1.68 1.68-1.68h10.3c.93 0 1.68.75 1.68 1.68v10.88c0 .93-.75 1.68-1.68 1.68zM8.53 7.82v8.36h1.92v-3.23h3.1v3.23h1.92V7.82h-1.92v3.25h-3.1V7.82H8.53z" fill="#2EC866" />
    </svg>
  );
}

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);

  const isContainerInView = useInView(containerRef, { once: true, amount: 0.05 });
  const isLeftSideInView = useInView(leftSideRef, { once: true, amount: 0.1 });
  const isRightSideInView = useInView(rightSideRef, { once: true, amount: 0.1 });

  const controls = useAnimation();

  useEffect(() => {
    if (isContainerInView) {
      controls.start("visible");
    }
  }, [isContainerInView, controls]);

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "name" && !value.trim()) {
      error = "Full Name is required";
    }
    if (name === "email") {
      if (!value.trim()) {
        error = "Email Address is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Please enter a valid email address";
      }
    }
    if (name === "subject" && !value.trim()) {
      error = "Subject is required";
    }
    if (name === "message") {
      if (!value.trim()) {
        error = "Message is required";
      } else if (value.trim().length < 10) {
        error = "Message must be at least 10 characters long";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error || undefined }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform final check
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Animated submitting wait

    try {
      const existingSubmissions = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
      const submission = {
        ...formData,
        id: Date.now(),
        date: new Date().toISOString(),
      };
      localStorage.setItem("contact_submissions", JSON.stringify([...existingSubmissions, submission]));
    } catch (e) {
      console.error(e);
    }

    setIsSubmitting(false);
    setShowToast(true);

    // Canvas Confetti
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#10b981", "#34d399", "#059669", "#047857", "#a7f3d0"],
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById("contact-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      const nameInput = document.getElementById("name");
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 850);
      }
    }
  };

  const contactGrid = [
    {
      platform: "Email",
      value: "jhaayushkumar18@gmail.com",
      link: "mailto:jhaayushkumar18@gmail.com",
      icon: <Mail size={16} className="text-emerald-500" />,
    },
    {
      platform: "Phone",
      value: "+91 99053 15622",
      link: "tel:+919905315622",
      icon: <Phone size={16} className="text-emerald-500" />,
    },
    {
      platform: "Location",
      value: "Mohali, Punjab, India",
      link: "https://maps.google.com/?q=Mohali,Punjab,India",
      icon: <MapPin size={16} className="text-emerald-500" />,
    },
    {
      platform: "LinkedIn",
      value: "ayushjha07",
      link: "https://linkedin.com/in/ayushjha07",
      icon: <LinkedinIcon size={16} className="text-[#0A66C2] dark:text-[#78b3ff]" />,
    },
    {
      platform: "GitHub",
      value: "ayushjha-07",
      link: "https://github.com/ayushjha-07",
      icon: <GithubIcon size={16} className="text-slate-800 dark:text-white" />,
    },
    {
      platform: "LeetCode",
      value: "ayushjha07",
      link: "https://leetcode.com/u/ayushjha07/",
      icon: <LeetCodeIcon size={16} />,
    },
    {
      platform: "HackerRank",
      value: "ayushjha07",
      link: "https://www.hackerrank.com/profile/ayushjha07",
      icon: <HackerRankIcon size={16} />,
    },
    {
      platform: "CodeChef",
      value: "ayushjha07",
      link: "https://www.codechef.com/users/ayushjha07",
      icon: <CodeChefIcon size={16} className="text-[#D0011B] dark:text-[#FFA0A0]" />,
    },
  ];

  const availabilityList = [
    "Software Engineering Internships",
    "Full-Time Roles",
    "Freelance Projects",
    "Open Source Collaboration",
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/ayushjha-07", icon: <GithubIcon size={18} /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/ayushjha07", icon: <LinkedinIcon size={18} /> },
    { label: "LeetCode", href: "https://leetcode.com/u/ayushjha07/", icon: <LeetCodeIcon size={18} /> },
    { label: "HackerRank", href: "https://www.hackerrank.com/profile/ayushjha07", icon: <HackerRankIcon size={18} /> },
    { label: "CodeChef", href: "https://www.codechef.com/users/ayushjha07", icon: <CodeChefIcon size={18} /> },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300 bg-theme-bg/30">
      
      {/* Glow Orbs */}
      <div className="glow-orb-emerald top-1/4 left-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />
      <div className="glow-orb-emerald bottom-1/4 right-[-150px] opacity-[var(--glow-opacity)] transition-opacity duration-300" />

      {/* Floating Sparks */}
      {CONTACT_PARTICLES.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-emerald-500/10 blur-[1.5px] animate-float pointer-events-none hidden md:block"
          style={{
            top: particle.top,
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Toast Notification */}
      <div
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl border border-emerald-500/30 bg-slate-900/90 dark:bg-emerald-950/90 backdrop-blur-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all duration-500 ${
          showToast ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          <CheckCircle2 size={18} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">Message Logged!</h4>
          <p className="text-xs text-gray-400 font-medium">Recorded in local storage. I&apos;ll get back to you shortly.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={headerVariants}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-400 mx-auto mt-4 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <p className="text-slate-500 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed">
            I&apos;m actively seeking Software Engineering internships and full-time opportunities. Whether you have a project, job opportunity, or just want to connect, I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column – Contact Information */}
          <div ref={leftSideRef} className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Availability Card */}
            <motion.div
              initial="hidden"
              animate={isLeftSideInView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-slate-900/40 to-emerald-500/5 border border-emerald-500/20 dark:border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)] backdrop-blur-md relative overflow-hidden group">
                <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-3 h-3 flex items-center justify-center shrink-0">
                    <div className="absolute w-3.5 h-3.5 rounded-full bg-emerald-500 animate-ping opacity-75" />
                    <div className="absolute w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-emerald-100 uppercase tracking-widest font-mono">
                    Available For:
                  </h4>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
                  {availabilityList.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 shadow-[0_0_6px_#10B981] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Contact Details Grid */}
            <motion.div
              initial="hidden"
              animate={isLeftSideInView ? "visible" : "hidden"}
              variants={{
                visible: { transition: { staggerChildren: 0.05 } }
              }}
              className="grid grid-cols-2 gap-4"
            >
              {contactGrid.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group h-full"
                  >
                    <SpotlightCard className="p-4 h-full flex flex-col justify-between hover:border-emerald-500/40 border border-theme-border/60 transition-all duration-300 bg-slate-50/50 dark:bg-slate-900/40">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <span className="text-[9px] font-bold font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          {item.platform}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-800 dark:text-white truncate group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors leading-relaxed">
                        {item.value}
                      </p>
                    </SpotlightCard>
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Actions Buttons */}
            <motion.div
              initial="hidden"
              animate={isLeftSideInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {/* Download Resume */}
              <Magnetic>
                <a
                  href="https://drive.google.com/file/d/18nS71h1Sl7QcVHP8YrtwlfDBXjebI-JN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-[0_0_10px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 w-full group cursor-pointer"
                >
                  <FileText size={14} className="shrink-0" />
                  <span>Resume</span>
                </a>
              </Magnetic>

              {/* Hire Me */}
              <Magnetic>
                <button
                  onClick={handleHireMeClick}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-[0_0_10px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 w-full group cursor-pointer"
                >
                  <Briefcase size={14} className="shrink-0" />
                  <span>Hire Me</span>
                </button>
              </Magnetic>

              {/* Schedule Meeting */}
              <Magnetic>
                <a
                  href="mailto:jhaayushkumar18@gmail.com?subject=Meeting%20Scheduling%20with%20Ayush"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-[0_0_10px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 w-full group cursor-pointer"
                >
                  <Calendar size={14} className="shrink-0" />
                  <span>Meeting</span>
                </a>
              </Magnetic>

              {/* Send Email */}
              <Magnetic>
                <a
                  href="mailto:jhaayushkumar18@gmail.com"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs shadow-[0_0_10px_rgba(16,185,129,0.05)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-300 w-full group cursor-pointer"
                >
                  <Mail size={14} className="shrink-0" />
                  <span>Send Email</span>
                </a>
              </Magnetic>
            </motion.div>

            {/* Social Section */}
            <motion.div
              initial="hidden"
              animate={isLeftSideInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="flex flex-col gap-2.5 mt-2"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Connect With Me
              </span>
              <div className="flex items-center gap-4">
                {socialLinks.map((soc) => (
                  <div key={soc.label} className="group relative">
                    
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-950 border border-emerald-500/30 text-emerald-400 text-[10px] rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.3)] text-center w-24 z-20">
                      {soc.label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
                    </div>

                    <Magnetic>
                      <a
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-theme-border flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300 shadow-theme-card"
                      >
                        {soc.icon}
                      </a>
                    </Magnetic>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Side – Contact Form */}
          <div ref={rightSideRef} id="contact-form" className="lg:col-span-7">
            <motion.div
              initial="hidden"
              animate={isRightSideInView ? "visible" : "hidden"}
              variants={itemVariants}
            >
              <form
                onSubmit={handleSubmit}
                className="gradient-border-wrapper p-8 border border-theme-border flex flex-col gap-6"
              >
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <User size={12} className="text-emerald-500" /> Full Name
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300 ${
                        errors.name ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" : "border-theme-border/80"
                      }`}
                      placeholder="Ayush Kumar Jha"
                    />
                    <div className="absolute inset-0 -z-10 rounded-xl bg-emerald-500/10 opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
                  </div>
                  {errors.name && (
                    <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle size={10} /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail size={12} className="text-emerald-500" /> Email Address
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300 ${
                        errors.email ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" : "border-theme-border/80"
                      }`}
                      placeholder="ayush@example.com"
                    />
                    <div className="absolute inset-0 -z-10 rounded-xl bg-emerald-500/10 opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
                  </div>
                  {errors.email && (
                    <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle size={10} /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <HelpCircle size={12} className="text-emerald-500" /> Subject
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300 ${
                        errors.subject ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" : "border-theme-border/80"
                      }`}
                      placeholder="Collaborative DSA Practice / Job Opportunity"
                    />
                    <div className="absolute inset-0 -z-10 rounded-xl bg-emerald-500/10 opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
                  </div>
                  {errors.subject && (
                    <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle size={10} /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <MessageSquare size={12} className="text-emerald-500" /> Message
                  </label>
                  <div className="relative group">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-5 py-4 rounded-xl bg-slate-50/50 dark:bg-slate-950/40 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300 resize-none ${
                        errors.message ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20" : "border-theme-border/80"
                      }`}
                      placeholder="Write your message here..."
                    />
                    <div className="absolute inset-0 -z-10 rounded-xl bg-emerald-500/10 opacity-0 group-focus-within:opacity-100 blur-sm transition-opacity duration-300" />
                  </div>
                  {errors.message && (
                    <span className="text-[10px] text-rose-500 flex items-center gap-1 mt-1 font-mono">
                      <AlertCircle size={10} /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-[0_4px_15px_rgba(16,185,129,0.18)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.35)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>

        {/* Footer CTA */}
        <motion.div
          initial="hidden"
          animate={isContainerInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center"
        >
          <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-slate-900/30 to-emerald-500/5 border border-emerald-500/10 dark:border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)] backdrop-blur-xl max-w-4xl mx-auto relative overflow-hidden group">
            <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h4 className="text-sm md:text-lg font-bold tracking-tight text-slate-800 dark:text-emerald-100 max-w-2xl mx-auto leading-relaxed italic">
              &ldquo;Thanks for visiting my portfolio. I&apos;m always excited to collaborate, learn, and build innovative software that makes a difference.&rdquo;
            </h4>
            <div className="h-0.5 w-12 bg-emerald-500/30 mx-auto mt-5 rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
