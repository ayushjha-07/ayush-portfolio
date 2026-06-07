import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Stats from "@/components/Stats";
import CodingProfiles from "@/components/CodingProfiles";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Global Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner with orbiting icons & typing code IDE */}
        <HeroSection />

        {/* Biography Story */}
        <About />

        {/* Quantitative Counter Stats */}
        <Stats />

        {/* Achievements & Coding Profiles */}
        <CodingProfiles />

        {/* Skills Cards & Rating Meters */}
        <Skills />

        {/* Projects Showcase cards with Mockups */}
        <Projects />

        {/* Internships Timeline */}
        <Experience />

        {/* Academics Timeline */}
        <Education />

        {/* Verifiable Credentials */}
        <Certifications />

        {/* Interactive Milestones Badges */}
        <Achievements />

        {/* Connect CTAs Form */}
        <Contact />
      </main>

      {/* Footer Branding Links */}
      <Footer />
    </>
  );
}
