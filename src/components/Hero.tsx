import React from 'react';
import { ArrowDown, ArrowUpRight, Code2, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introduction & Primary Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Supporting tag/subtitle */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100/90 border border-slate-200/80 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{PORTFOLIO_DATA.personal.heroBadge}</span>
            </div>

            {/* Name */}
            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-700 uppercase mb-1">
                Student Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {PORTFOLIO_DATA.personal.name}
              </h1>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 leading-snug">
              {PORTFOLIO_DATA.personal.roleHeadline}
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.personal.bioSubtext}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-all"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Supporting Micro-Highlights */}
            <div className="pt-4 border-t border-slate-200/80 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-600" />
                <span>Active Python Learner</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Generative AI Basics</span>
              </div>
              <span className="text-slate-300">|</span>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-600" />
                <span>Hands-on Code Explorer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle, Minimal Python Code & Logic Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200/90 bg-slate-900 text-slate-100 shadow-md overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/90 border-b border-slate-700 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-slate-600" />
                    <span className="w-3 h-3 rounded-full bg-slate-600" />
                    <span className="w-3 h-3 rounded-full bg-slate-600" />
                  </div>
                  <span className="font-mono text-slate-400 ml-2">portfolio_profile.py</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">Python 3.12</span>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-1.5 overflow-x-auto text-slate-200">
                <p className="text-slate-400"># B.Tech Engineering Profile</p>
                <p>
                  <span className="text-blue-400">class</span>{' '}
                  <span className="text-emerald-400">EngineeringStudent</span>:
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">def</span>{' '}
                  <span className="text-amber-300">__init__</span>(self):
                </p>
                <p className="pl-8 text-slate-300">
                  self.name = <span className="text-emerald-300">"Dimple Sri Nutalapati"</span>
                </p>
                <p className="pl-8 text-slate-300">
                  self.semester = <span className="text-emerald-300">"B.Tech 1st Semester"</span>
                </p>
                <p className="pl-8 text-slate-300">
                  self.current_languages = [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"HTML/CSS/JS"</span>]
                </p>
                <p className="pl-8 text-slate-300">
                  self.interests = [<span className="text-emerald-300">"Generative AI"</span>, <span className="text-emerald-300">"AI Engineering"</span>]
                </p>
                <p className="pl-8 text-slate-300">
                  self.activities = [<span className="text-emerald-300">"Hackathons"</span>, <span className="text-emerald-300">"Ideathons"</span>]
                </p>
                
                <p className="pl-4 pt-2">
                  <span className="text-blue-400">def</span>{' '}
                  <span className="text-amber-300">current_mission</span>(self):
                </p>
                <p className="pl-8 text-emerald-300">
                  return "Building foundations & solving practical problems."
                </p>
              </div>

              {/* Output status row */}
              <div className="px-4 py-2.5 bg-slate-950/70 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Status: Actively learning & coding
                </span>
                <span>Dimple Sri</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
