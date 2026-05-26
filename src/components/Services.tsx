'use strict';
'use client';

import React from 'react';
import { Palette, Code, Search, Bot } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const servicesList = [
    {
      title: t('service1Title'),
      icon: <Palette className="h-6 w-6 text-brand-cyan" />,
      description: t('service1Desc'),
      details: 'Figma // DB Schemas // Architectural Blueprints'
    },
    {
      title: t('service2Title'),
      icon: <Code className="h-6 w-6 text-brand-indigo" />,
      description: t('service2Desc'),
      details: 'TypeScript // PHP 8 // Python // REST APIs'
    },
    {
      title: t('service3Title'),
      icon: <Bot className="h-6 w-6 text-brand-emerald" />,
      description: t('service3Desc'),
      details: 'Flow Management // Webhook APIs // CRM Sync'
    },
    {
      title: t('service4Title'),
      icon: <Search className="h-6 w-6 text-yellow-500" />,
      description: t('service4Desc'),
      details: 'Semántica HTML5 // Google Search Console // PageSpeed'
    }
  ];

  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-indigo/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-indigo/10 border border-brand-indigo/20 px-3 py-1 rounded-full text-brand-indigo text-xs font-mono font-bold tracking-wider mb-3">
            <span>{t('servicesBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('servicesTitle')}
          </h2>
          <p className="text-gray-400 mt-4">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="glass-panel p-6 rounded-2xl border border-brand-dark-border flex flex-col justify-between group hover:border-brand-indigo/30 transition-all duration-300"
            >
              <div>
                <div className="p-3 bg-brand-dark-base border border-brand-dark-border w-fit rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-md font-bold font-mono tracking-tight text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <div className="border-t border-brand-dark-border/40 pt-4">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none block">
                  {service.details}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
