'use strict';
'use client';

import React from 'react';
import { Project } from '@/types';
import { ExternalLink, Database, Cpu, Server, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, tProject } = useLanguage();

  // Get icon by category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'saas':
        return <Cpu className="h-4 w-4" />;
      case 'system':
        return <Server className="h-4 w-4" />;
      case 'chatbot':
        return <MessageSquare className="h-4 w-4" />;
      default:
        return <Database className="h-4 w-4" />;
    }
  };

  return (
    <div 
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full border border-brand-dark-border"
      data-testid={`project-card-${project.id}`}
    >
      {/* Top Banner Tag Area */}
      <div className="p-5 flex-grow">
        
        {/* Category & Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold tracking-widest uppercase bg-brand-dark-base border border-brand-dark-border px-2.5 py-1 rounded text-brand-cyan">
            {getCategoryIcon(project.category)}
            <span>{project.category}</span>
          </span>

          {project.featured && (
            <span className="inline-flex items-center text-[9px] font-mono font-extrabold uppercase bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald px-2 py-0.5 rounded animate-pulse">
              FEATURED SYSTEM
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white tracking-tight leading-tight group-hover:text-brand-cyan transition-colors">
          {tProject(project.title)}
        </h3>
        <p className="text-xs font-mono text-gray-500 mt-1 uppercase tracking-wider">{tProject(project.subtitle)}</p>

        {/* Short description */}
        <p className="text-xs text-gray-400 mt-4 leading-relaxed line-clamp-3">
          {tProject(project.description)}
        </p>

        {/* Performance metrics micro grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mt-6 bg-brand-dark-base/40 border border-brand-dark-border/40 p-3 rounded-lg">
            {project.metrics.map((metric, idx) => (
              <div key={idx}>
                <span className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none">
                  {tProject(metric.label)}
                </span>
                <span className="block text-xs font-bold font-mono text-white mt-1">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies / Stack tags */}
        <div className="flex flex-wrap gap-1.5 mt-6">
          {project.technologies.slice(0, 5).map((tech) => (
            <span 
              key={tech} 
              className="text-[9px] font-mono bg-brand-dark-base/60 text-gray-400 px-2 py-1 rounded border border-brand-dark-border/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[9px] font-mono bg-brand-dark-base/60 text-gray-500 px-2 py-1 rounded border border-brand-dark-border/30">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Footer link click with analytics tracking */}
      <div className="bg-brand-dark-base/40 border-t border-brand-dark-border px-5 py-4 flex items-center justify-between">
        <a 
          href={`/projects/${project.slug}`}
          className="text-xs font-mono font-bold tracking-wider text-brand-cyan hover:text-white transition-colors duration-200"
          data-analytics-event={`view_project_details_${project.id}`}
        >
          {t('auditDetails')}
        </a>
        <a 
          href={`/projects/${project.slug}`}
          className="p-1.5 rounded-lg border border-brand-dark-border bg-brand-dark-base text-gray-400 hover:text-white hover:border-brand-cyan transition-colors"
          data-analytics-event={`view_project_icon_${project.id}`}
          aria-label={`Auditar`}
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
