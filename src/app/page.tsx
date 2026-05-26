'use strict';
'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ArchitectureView from '@/components/ArchitectureView';
import Services from '@/components/Services';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { t } = useLanguage();

  const categories = [
    { label: t('projectsFilterAll'), value: 'all' },
    { label: t('projectsFilterSaas'), value: 'saas' },
    { label: t('projectsFilterPos'), value: 'system' },
    { label: t('projectsFilterWeb'), value: 'web' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory || (selectedCategory === 'saas' && p.category === 'saas'));

  return (
    <>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Systems Architecture Interactive Section */}
        <ArchitectureView />

        {/* Services Grid Section */}
        <Services />

        {/* Projects Filterable Grid Section */}
        <section id="proyectos" className="py-24 border-t border-brand-dark-border relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full text-brand-cyan text-xs font-mono font-bold tracking-wider mb-3">
                <span>{t('projectsBadge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {t('projectsTitle')}
              </h2>
              <p className="text-gray-400 mt-4 text-sm sm:text-base">
                {t('projectsSubtitle')}
              </p>
            </div>

            {/* Category Filter Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-wider transition-all duration-300 ${
                    selectedCategory === cat.value
                      ? 'bg-brand-cyan text-brand-dark-base shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'bg-brand-dark-card border border-brand-dark-border text-gray-400 hover:text-white hover:border-gray-700'
                  }`}
                  data-analytics-event={`project_filter_${cat.value}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                  {t('noProjects')}
                </span>
              </div>
            )}

          </div>
        </section>

        {/* Profile / About Section */}
        <About />

        {/* Lead Capture Form Section */}
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
