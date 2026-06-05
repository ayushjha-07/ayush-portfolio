import React, { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gray-950/20 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="font-mono text-emerald-400 text-xs tracking-wider uppercase block mb-2">// Biography</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Me</h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Transition Card & Stats */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="relative max-w-md mx-auto aspect-video md:aspect-auto md:h-80 bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-2xl flex flex-col justify-center gap-6 overflow-hidden">
              {/* Top gradient glow overlay */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              <span className="font-mono text-blue-400 text-sm">// The Transition</span>
              
              {/* Progress 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-mono text-gray-400">
                  <span>Mechanical Eng. Diploma</span>
                  <span>8.07/10 CGPA</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-gray-400 to-blue-500 rounded-full transition-all duration-1000 delay-500" 
                    style={{ width: isVisible ? '80.7%' : '0%' }}
                  />
                </div>
              </div>

              {/* Progress 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-mono text-gray-400">
                  <span>Computer Science B.Tech</span>
                  <span>7.7/10 SGPA</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full transition-all duration-1000 delay-700" 
                    style={{ width: isVisible ? '77%' : '0%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Biography Paragraphs */}
          <div className={`flex flex-col gap-6 text-gray-400 text-base leading-relaxed transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p>
              My journey into technology is driven by a unique blend of structural logic and algorithmic problem-solving. Having started with a 3-year Diploma in Mechanical Engineering, where I graduated with an impressive 8.07/10 CGPA, I developed a strong foundation in physical system design, optimization, and analytical thinking. Driven by a passion to apply these system-level problem-solving frameworks to the digital realm, I transitioned to a Bachelor of Technology in Computer Science and Engineering, maintaining a strong academic record with a 7.7/10 SGPA. This diverse background allows me to view software architecture through both a structured engineering lens and an abstract computational perspective.
            </p>
            <p>
              As a software engineer, I focus on building highly scalable web solutions and mastering complex algorithmic problems. I have solved over 600 data structures and algorithms (DSA) questions across competitive platforms like LeetCode and CodeChef, sharpening my computational efficiency and analytical depth. My hands-on industry experience includes working as a Web Development Intern at A2IT, Mohali, where I specialized in building responsive web layouts and debugging complex systems. Additionally, my innovative mindset was recognized with the 3rd Position at the prestigious Startup Bihar Initiative Ideation Award, proving my ability to conceptualize and pitch viable tech-driven solutions.
            </p>
            <p>
              Technically, I am highly proficient in building modern, interactive user interfaces using React.js and JavaScript, backed by solid understanding of core computer science fundamentals including Data Structures, Operating Systems, DBMS, and Object-Oriented Programming. Beyond coding, I believe that high-performance software is built by collaborative teams. My spirit of teamwork and discipline is mirrored in my athletics; I led our team to win 1st place in Volleyball at the State-Level Sports Fest. I am eager to leverage my analytical engineering background, web development skills, and collaborative mindset to tackle challenging software engineering roles.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
