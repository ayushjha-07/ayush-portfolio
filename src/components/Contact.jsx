import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Send, Check } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Form States
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.replace('form-', '')]: value }));
    // Clear error for this field
    setErrors((prev) => ({ ...prev, [id.replace('form-', '')]: '' }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submission Simulation
    setIsSubmitting(true);

    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Save to LocalStorage
    const existingSubmissions = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    existingSubmissions.push(submission);
    localStorage.setItem('portfolio_messages', JSON.stringify(existingSubmissions));

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactMethods = [
    {
      name: "Email Me",
      value: "jhaayushkumar18@gmail.com",
      href: "mailto:jhaayushkumar18@gmail.com",
      icon: <Mail size={20} className="text-emerald-400" />,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/ayushjha07",
      href: "https://www.linkedin.com/in/ayushjha07/",
      icon: <Linkedin size={20} className="text-emerald-400" />,
    },
    {
      name: "GitHub",
      value: "github.com/ayushjha-07",
      href: "https://github.com/ayushjha-07",
      icon: <Github size={20} className="text-emerald-400" />,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gray-950/20 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="font-mono text-emerald-400 text-xs tracking-wider uppercase block mb-2">// Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Let's Connect</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Info Column */}
          <div className={`flex flex-col gap-8 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div>
              <h3 className="text-2xl font-bold mb-3">Let's build something great.</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                I'm currently seeking new opportunities in Software Engineering and Frontend roles. Whether you have a project query, want to discuss software engineering, or just want to connect—feel free to reach out!
              </p>
            </div>

            {/* Methods */}
            <div className="flex flex-col gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.name}
                  href={method.href}
                  target={method.name !== 'Email Me' ? "_blank" : undefined}
                  rel={method.name !== 'Email Me' ? "noopener noreferrer" : undefined}
                  className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-emerald-500/30 hover:bg-slate-900/60 hover:translate-x-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">{method.name}</h4>
                    <p className="text-sm font-semibold text-white">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className={`relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-2xl transition-all duration-700 delay-400 overflow-hidden ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Success Overlay */}
            {isSuccess && (
              <div className="absolute inset-0 bg-slate-905 backdrop-blur-lg z-25 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <Check size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm max-w-xs mb-8">
                  Thank you, your message has been sent successfully. I will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-xl text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="text-xs font-mono text-gray-400 font-semibold">Your Name</label>
                  <input
                    type="text"
                    id="form-name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`bg-white/2 border rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-blue-500 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all ${
                      errors.name ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.15)]' : 'border-white/5'
                    }`}
                  />
                  {errors.name && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.name}</span>}
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="text-xs font-mono text-gray-400 font-semibold">Your Email</label>
                  <input
                    type="email"
                    id="form-email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@gmail.com"
                    className={`bg-white/2 border rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-blue-500 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all ${
                      errors.email ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.15)]' : 'border-white/5'
                    }`}
                  />
                  {errors.email && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.email}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-subject" className="text-xs font-mono text-gray-400 font-semibold">Subject</label>
                <input
                  type="text"
                  id="form-subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className={`bg-white/2 border rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-blue-500 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all ${
                    errors.subject ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.15)]' : 'border-white/5'
                  }`}
                />
                {errors.subject && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.subject}</span>}
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label htmlFor="form-message" className="text-xs font-mono text-gray-400 font-semibold">Message</label>
                <textarea
                  id="form-message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Ayush, I'd love to chat about..."
                  rows={4}
                  className={`bg-white/2 border rounded-xl px-4 py-3 text-sm text-white resize-y focus:outline-hidden focus:border-blue-500 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all ${
                    errors.message ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.15)]' : 'border-white/5'
                  }`}
                />
                {errors.message && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-75 rounded-xl font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <span className="w-4.5 h-4.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
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
