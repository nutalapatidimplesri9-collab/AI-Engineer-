import React from 'react';
import { ArrowRight, CheckCircle2, CircleDot, Clock, Milestone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Long-Term Roadmap
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {PORTFOLIO_DATA.learningJourney.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {PORTFOLIO_DATA.learningJourney.subtext}
          </p>
        </div>

        {/* Visual Progression Ribbon: B.Tech Student → Python Foundations → Web Development → Generative AI → AI Engineering */}
        <div className="p-4 sm:p-6 rounded-xl bg-slate-50 border border-slate-200/90 mb-12 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[700px] gap-2">
            {PORTFOLIO_DATA.learningJourney.steps.map((step, idx) => (
              <React.Fragment key={step.step}>
                <div className="flex flex-col items-center text-center px-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs mb-2 transition-colors ${
                      step.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : step.status === 'Current Focus'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white text-slate-500 border border-slate-200'
                    }`}
                  >
                    {step.status === 'Completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                    ) : (
                      <span>0{step.step}</span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-slate-900 whitespace-nowrap">
                    {step.stage}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {step.status}
                  </span>
                </div>

                {idx < PORTFOLIO_DATA.learningJourney.steps.length - 1 && (
                  <div className="flex items-center text-slate-300 px-1">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Detailed Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.learningJourney.steps.map((step) => {
            const isCompleted = step.status === 'Completed';
            const isCurrent = step.status === 'Current Focus';

            return (
              <div
                key={step.step}
                className={`p-6 rounded-xl border transition-all ${
                  isCurrent
                    ? 'bg-white border-blue-300 shadow-xs'
                    : 'bg-slate-50/50 border-slate-200/80 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Milestone className={`w-4 h-4 ${isCurrent ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Phase 0{step.step}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      isCompleted
                        ? 'text-emerald-700'
                        : isCurrent
                        ? 'text-blue-600 font-semibold'
                        : 'text-slate-400'
                    }`}
                  >
                    {step.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.stage}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {step.summary}
                </p>

                <div className="pt-3 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Target Focus Areas
                  </span>
                  <div className="space-y-1">
                    {step.focusAreas.map((area) => (
                      <div key={area} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <span className="text-blue-500 font-bold">›</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational Statement */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900 text-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-semibold text-white">
              An Evolving Digital Portfolio
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              As I learn new libraries, complete academic milestones, and participate in hackathons, this platform will continuously document my growth toward becoming an AI Engineer.
            </p>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shrink-0"
          >
            <span>Explore Current Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
