import React from 'react';
import { Compass, BookOpen, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Background & Mindset
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <p className="font-normal text-slate-800">
              {PORTFOLIO_DATA.personal.aboutParagraph}
            </p>

            <p className="text-slate-600 text-base">
              My philosophy at this stage of my engineering education is centered on continuous learning and disciplined practice. Rather than jumping ahead, I believe in mastering the core fundamentals—writing clean Python scripts, grasping algorithmic workflows, constructing responsive web interfaces, and understanding how modern generative models function under the hood.
            </p>

            <div className="pt-2">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">
                      Early-Stage Growth Perspective
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                      Every project I build is an opportunity to strengthen logic, test assumptions, and learn from mistakes. My portfolio serves as a living document of this educational journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Currently Exploring" Area */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-200">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold tracking-tight text-slate-900 uppercase">
                  Currently Exploring
                </h3>
              </div>

              <p className="text-xs text-slate-500 mb-5 leading-normal">
                Key subjects, tools, and technical domains I am actively studying during my 1st semester coursework and self-directed practice:
              </p>

              <div className="space-y-3">
                {PORTFOLIO_DATA.personal.currentlyExploring.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200/70 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-medium text-slate-400">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-medium text-slate-800">
                        {topic}
                      </span>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">
                      Active
                    </span>
                  </div>
                ))}
              </div>

              {/* Learning Principle Card */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Focus: Consistent daily progress & practical application</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
