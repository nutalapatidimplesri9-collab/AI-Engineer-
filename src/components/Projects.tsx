import React, { useState } from 'react';
import { ExternalLink, Terminal, Code2, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectCodeModal } from './ProjectCodeModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
              Hands-On Code
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Projects I've Built
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Practical Python projects developed to apply procedural logic, conditional branching, user input validation, and real-world simulation concepts.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors shrink-0"
          >
            <FolderGit2 className="w-4 h-4 text-blue-600" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Project Cards Grid (3 projects) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50/50 hover:bg-white rounded-xl border border-slate-200/80 hover:border-blue-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between p-6 sm:p-7 group"
            >
              <div>
                {/* Unboxed Metadata (Zero-pill discipline) */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-3">
                  <span className="text-blue-600 font-semibold">{project.technology}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{project.category}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Implementation Features Preview */}
                <div className="space-y-1.5 mb-6 pt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase block mb-1">
                    Key Highlights
                  </span>
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="text-blue-500 font-bold">·</span>
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 text-blue-600" />
                  <span>Inspect Code</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Repository Callout */}
        <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-100 text-blue-700 rounded-lg">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Continuous Repository Updates
              </h4>
              <p className="text-xs text-slate-600">
                All coursework exercises and project scripts are committed to GitHub as part of my ongoing Python practice.
              </p>
            </div>
          </div>
          <a
            href={PORTFOLIO_DATA.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Open dimple-sri-python</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Code Modal */}
      <ProjectCodeModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
