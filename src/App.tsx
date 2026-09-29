/**
 * Dimple Sri Nutalapati - Personal Portfolio Website
 * 
 * Role & Profile:
 * - B.Tech 1st Semester Student
 * - Aspiring AI Engineer
 * - Beginner in Generative AI
 * - Python Developer
 * - Beginner Web Developer
 * - Hackathon & Ideathon Participant
 * 
 * Technology Stack:
 * - React 19 + TypeScript
 * - Tailwind CSS v4
 * - Lucide React Icons
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Hackathons } from './components/Hackathons';
import { LearningJourney } from './components/LearningJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Me Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Projects Section */}
        <Projects />

        {/* 6. Hackathons & Ideathons Section */}
        <Hackathons />

        {/* 7. My Learning Journey Section */}
        <LearningJourney />

        {/* 8 & 9. Contact / Connect With Me Section */}
        <Contact />
      </main>

      {/* 10. Footer Section */}
      <Footer />
    </div>
  );
}
