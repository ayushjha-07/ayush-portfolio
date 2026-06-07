"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { Github, Linkedin } from "./BrandIcons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

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

    // Confetti!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#10b981", "#34d399", "#059669", "#047857", "#a7f3d0"],
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden text-theme-text border-t border-theme-border transition-colors duration-300">
      {/* Toast */}
      <div
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-xl border border-emerald-500/20 bg-white dark:bg-emerald-950/90 backdrop-blur-lg flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all duration-500 ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 size={18} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">Message Sent!</h4>
          <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">Logged in mock database. I&apos;ll get back to you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Connect and Build Something Amazing
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Get in touch</h3>
            <p className="text-sm text-theme-text-sec leading-relaxed mb-6">
              I am open to discussions regarding internship options, software engineering positions, and collaborative algorithmic problem-solving. Feel free to contact me directly:
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50/50 dark:bg-theme-card/75 border border-slate-200 dark:border-theme-border hover:border-emerald-500/30 hover:bg-slate-100 dark:hover:bg-white/5 shadow-theme-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs font-mono text-theme-text-sec/60 uppercase tracking-wider">{"// Email"}</h4>
                <a href="mailto:jhaayushkumar18@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  jhaayushkumar18@gmail.com
                </a>
              </div>
            </div>
 
            {/* Phone */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-theme-card/75 border border-theme-border hover:border-emerald-500/30 hover:bg-slate-100 dark:hover:bg-white/5 shadow-theme-card transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-xs font-mono text-theme-text-sec/60 uppercase tracking-wider">{"// Phone"}</h4>
                <a href="tel:+919905315622" className="text-sm font-semibold text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  +91 99053 15622
                </a>
              </div>
            </div>

 
            {/* Social Panel */}
            <div className="flex gap-4">
              {/* GitHub Link */}
              <a
                href="https://github.com/ayushjha-07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3 p-5 rounded-2xl bg-theme-card/75 border border-theme-border hover:border-emerald-500/30 hover:bg-slate-100 dark:hover:bg-white/5 shadow-theme-card transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Github size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-theme-text-sec/60 uppercase tracking-wider">GitHub</h4>
                  <span className="text-xs font-semibold text-slate-800 dark:text-white">ayushjha-07</span>
                </div>
              </a>
 
              {/* LinkedIn Link */}
              <a
                href="https://linkedin.com/in/ayushjha07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3 p-5 rounded-2xl bg-theme-card/75 border border-theme-border hover:border-emerald-500/30 hover:bg-slate-100 dark:hover:bg-white/5 shadow-theme-card transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Linkedin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-theme-text-sec/60 uppercase tracking-wider">LinkedIn</h4>
                  <span className="text-xs font-semibold text-slate-800 dark:text-white">ayushjha07</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="gradient-border-wrapper p-8 border border-theme-border flex flex-col gap-6"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono text-theme-text-sec">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`px-4 py-3 rounded-xl bg-theme-card/75 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-colors ${
                    errors.name ? "border-rose-500/50 focus:border-rose-500" : "border-theme-border"
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="text-[10px] text-rose-500 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono text-theme-text-sec">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`px-4 py-3 rounded-xl bg-theme-card/75 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-colors ${
                    errors.email ? "border-rose-500/50 focus:border-rose-500" : "border-theme-border"
                  }`}
                  placeholder="Your Email Address"
                />
                {errors.email && (
                  <span className="text-[10px] text-rose-500 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-theme-text-sec">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`px-4 py-3 rounded-xl bg-theme-card/75 border text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-colors resize-none ${
                    errors.message ? "border-rose-500/50 focus:border-rose-500" : "border-theme-border"
                  }`}
                  placeholder="Write your message here..."
                />
                {errors.message && (
                  <span className="text-[10px] text-rose-500 flex items-center gap-1">
                    <AlertCircle size={10} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 disabled:opacity-55 disabled:cursor-not-allowed text-white font-semibold rounded-xl shadow-[0_4px_12px_rgba(16,185,129,0.12)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
