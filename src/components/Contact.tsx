import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom clean SVG icons for LinkedIn and GitHub for maximum fidelity and brand recognition
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74V9.93H5.06v8.57h2.8z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Tag */}
        <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
          Connect With Me
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          {PORTFOLIO_DATA.personal.contactHeading}
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          {PORTFOLIO_DATA.personal.contactSubtext}
        </p>

        {/* Connection Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-10">
          
          {/* LinkedIn Button Card */}
          <a
            href={PORTFOLIO_DATA.personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 rounded-xl shadow-xs transition-all duration-200 group text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block">
                  Professional Network
                </span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  LinkedIn Profile
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </a>

          {/* GitHub Button Card */}
          <a
            href={PORTFOLIO_DATA.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-white hover:bg-slate-100/60 border border-slate-200 hover:border-slate-400 rounded-xl shadow-xs transition-all duration-200 group text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 bg-slate-100 text-slate-800 rounded-lg group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <GitHubIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block">
                  Code Repositories
                </span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                  GitHub Profile
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
          </a>

        </div>

        {/* Engagement Philosophy Note */}
        <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
          Open to connecting with college seniors, faculty, peers, and developer communities for collaborative hackathon participation and learning discussions.
        </p>

      </div>
    </section>
  );
};
