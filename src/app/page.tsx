import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Footer from "@/components/Footer";

// Lazy load below-the-fold components for bundle optimization
const Stats = dynamic(() => import("@/components/Stats"));
const CodingProfiles = dynamic(() => import("@/components/CodingProfiles"));
const Skills = dynamic(() => import("@/components/Skills"));
const TechWorkflow = dynamic(() => import("@/components/TechWorkflow"));
const Projects = dynamic(() => import("@/components/Projects"));
const ProjectCaseStudies = dynamic(() => import("@/components/ProjectCaseStudies"));
const Experience = dynamic(() => import("@/components/Experience"));
const Education = dynamic(() => import("@/components/Education"));
const Certifications = dynamic(() => import("@/components/Certifications"));
const Achievements = dynamic(() => import("@/components/Achievements"));
const MyJourney = dynamic(() => import("@/components/MyJourney"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const OpenSource = dynamic(() => import("@/components/OpenSource"));
const DevDashboard = dynamic(() => import("@/components/DevDashboard"));
const Contact = dynamic(() => import("@/components/Contact"));

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

        {/* Tech Stack & Development Workflow */}
        <TechWorkflow />

        {/* Projects Showcase cards with Mockups */}
        <Projects />

        {/* Project Case Studies deep dive */}
        <ProjectCaseStudies />

        {/* Internships Timeline */}
        <Experience />

        {/* Academics Timeline */}
        <Education />

        {/* Verifiable Credentials */}
        <Certifications />

        {/* Interactive Milestones Badges */}
        <Achievements />

        {/* My Journey interactive timeline */}
        <MyJourney />

        {/* Testimonials & Recommendations review portal */}
        <Testimonials />

        {/* Open Source & Community profile */}
        <OpenSource />

        {/* Developer Dashboard analytics */}
        <DevDashboard />

        {/* Connect CTAs Form */}
        <Contact />
      </main>

      {/* Footer Branding Links */}
      <Footer />
    </>
  );
}
