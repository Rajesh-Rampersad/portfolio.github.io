'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Activity, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Project } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { t, tProject } = useLanguage();

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 tech-grid-bg relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-mono text-gray-400 hover:text-brand-cyan transition-colors mb-8 group"
            data-analytics-event="project_detail_back"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>{t('projBack')}</span>
          </Link>

          {/* Heading Area */}
          <div className="border-b border-brand-dark-border pb-8 mb-8">
            <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono font-bold tracking-widest uppercase bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 rounded text-brand-cyan mb-4">
              <span>{project.category} SYSTEM</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {tProject(project.title)}
            </h1>
            <p className="text-sm font-mono text-gray-400 mt-2 uppercase tracking-widest">
              {tProject(project.subtitle)}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Technical description */}
            <div className="lg:col-span-8 space-y-8">
              {/* Detail section */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold font-mono text-brand-cyan flex items-center space-x-2">
                  <Activity className="h-4.5 w-4.5" />
                  <span>{t('projChallenge')}</span>
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                  {tProject(project.longDescription)}
                </p>
              </div>

              {/* Architecture Blueprint section */}
              {project.architecture && (
                <div className="glass-panel p-6 rounded-2xl border border-brand-dark-border space-y-4">
                  <h3 className="text-md font-bold font-mono text-white flex items-center space-x-2">
                    <Award className="h-4.5 w-4.5 text-brand-indigo" />
                    <span>{t('projBlueprint')}</span>
                  </h3>
                  <div className="bg-brand-dark-base p-4 rounded-xl border border-brand-dark-border/40 font-mono text-[11px] text-gray-400 space-y-2">
                    <div className="text-gray-500 uppercase tracking-widest text-[9px] mb-2">{t('projRelations')}:</div>
                    {project.architecture.edges.map((edge, index) => (
                      <div key={index} className="flex items-center space-x-2 py-0.5">
                        <span className="text-white font-bold">{edge.from}</span>
                        <span className="text-brand-cyan">──({edge.label ? tProject(edge.label) : 'DATA'})──&gt;</span>
                        <span className="text-brand-emerald font-bold">{edge.to}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core technical tools */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest">{t('projStack')}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono bg-brand-dark-card border border-brand-dark-border px-3 py-1.5 rounded-lg text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {project.metrics && project.metrics.length > 0 && (
                <div className="glass-panel p-6 rounded-2xl border border-brand-dark-border shadow-xl space-y-6">
                  <h3 className="text-sm font-bold font-mono text-white border-b border-brand-dark-border pb-3 uppercase tracking-wider">
                    {t('projQuality')}
                  </h3>
                  
                  <div className="space-y-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1">
                        <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest">
                          {tProject(metric.label)}
                        </span>
                        <span className="text-sm font-bold font-mono text-brand-emerald">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Sidebar */}
              <div className="glass-panel p-6 rounded-2xl border border-brand-dark-border text-center space-y-4">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">{t('projSimilar')}</span>
                <Link
                  href="/#contacto"
                  className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-mono font-bold tracking-widest text-brand-dark-base bg-brand-cyan rounded-lg hover:bg-white shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all active:scale-95"
                  data-analytics-event={`project_detail_cta_${project.id}`}
                >
                  {t('projConsult')}
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

