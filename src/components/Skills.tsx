import React from 'react';
import { Code, Globe, Cpu, Brain } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    Programming: <Code className="w-5 h-5 text-blue-600" />,
    'Web Development': <Globe className="w-5 h-5 text-blue-600" />,
    AI: <Cpu className="w-5 h-5 text-blue-600" />,
    'Development & Problem Solving': <Brain className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Technical Foundations
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Skills & Competencies
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A transparent overview of the core technologies, methods, and concepts I am studying and applying in my first semester.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.skills.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  {categoryIcons[category.title] || <Code className="w-5 h-5 text-blue-600" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skill Items (Clean unboxed cards with typography, no fake percentage bars or candy pills) */}
              <div className="mt-5 space-y-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50/70 border border-slate-200/60"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="text-sm font-semibold text-slate-800">
                        {skill.name}
                      </span>
                    </div>
                    {skill.status && (
                      <span className="text-xs text-slate-500 font-medium">
                        {skill.status}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Note */}
        <div className="mt-10 p-4 rounded-lg bg-white border border-slate-200 text-xs text-slate-500 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>
            <strong>Academic Integrity Notice:</strong> All listed proficiencies correspond to actual coursework and self-directed practice without fabricated certifications or inflated proficiency tiers.
          </span>
          <span className="shrink-0 text-blue-600 font-medium">
            Semester 1 Curriculum
          </span>
        </div>

      </div>
    </section>
  );
};
