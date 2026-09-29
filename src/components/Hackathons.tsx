import React from 'react';
import { Lightbulb, Calendar, Users, Trophy, Rocket, PlusCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hackathons: React.FC = () => {
  return (
    <section id="hackathons" className="py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
            Collaborative Exploration
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Hackathons & Ideathons
          </h2>
          <div className="mt-4 p-5 rounded-xl bg-white border border-slate-200/80">
            <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed">
              "{PORTFOLIO_DATA.hackathons.intro}"
            </p>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed">
            {PORTFOLIO_DATA.hackathons.statement}
          </p>
        </div>

        {/* Structured Timeline / Register Cards for Future and Upcoming Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.hackathons.placeholders.map((event, idx) => (
            <div
              key={event.id}
              className="bg-white rounded-xl border border-dashed border-slate-300 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header status */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-medium text-blue-600">
                    <Rocket className="w-4 h-4 text-blue-600" />
                    <span>Slot 0{idx + 1} — {event.statusBadge}</span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Year: {event.year}
                  </span>
                </div>

                {/* Event Name */}
                <h3 className="text-base font-bold text-slate-900 mb-4">
                  {event.title}
                </h3>

                {/* Structured Metadata Fields */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-700">Timeline / Year: </span>
                      <span className="text-slate-500">{event.year} (1st Year B.Tech)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-700">Role / Contribution: </span>
                      <span className="text-slate-500">{event.role}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Lightbulb className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-700">Project / Idea: </span>
                      <span className="text-slate-500">{event.projectIdea}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Trophy className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-semibold text-slate-700">Achievement / Result: </span>
                      <span className="text-slate-500 italic">{event.achievement}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ready for Update Label */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <PlusCircle className="w-3.5 h-3.5 text-blue-500" />
                  <span>Structured for upcoming event documentation</span>
                </span>
                <span className="font-mono text-[11px] text-slate-400">Active Register</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Participation Mindset */}
        <div className="mt-8 text-center sm:text-left">
          <p className="text-xs text-slate-500">
            <strong>Commitment:</strong> I actively seek opportunities to team up with peers, experiment with fresh concepts, and turn theoretical computer science knowledge into actionable prototypes.
          </p>
        </div>

      </div>
    </section>
  );
};
