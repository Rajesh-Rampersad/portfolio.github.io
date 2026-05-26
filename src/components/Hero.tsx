'use strict';
'use client';

import React from 'react';
import { Terminal, Database, Server, Cpu, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden tech-grid-bg"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-indigo/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Area */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-dark-card/90 border border-brand-dark-border px-3 py-1.5 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-wider text-brand-emerald">
                {t('systemActive')}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              {t('heroTitle')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-emerald">
                {t('heroSubtitle')}
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
              {t('heroDescription')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-mono font-bold tracking-wider text-brand-dark-base bg-brand-cyan rounded-lg hover:bg-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.02] duration-300"
                data-analytics-event="hero_explore_projects"
              >
                {t('heroCtaProjects')}
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-mono font-bold tracking-wider text-gray-300 border border-brand-dark-border rounded-lg hover:bg-brand-dark-card/50 hover:text-white transition-all duration-300"
                data-analytics-event="hero_contact"
              >
                {t('heroCtaContact')}
              </a>
            </div>

            {/* Tech Specs Micro metrics */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-dark-border max-w-lg">
              <div>
                <span className="block text-2xl font-black text-brand-cyan">L7</span>
                <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">{t('levelBackend')}</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-brand-emerald">100%</span>
                <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">{t('saasIsolation')}</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-brand-indigo">99.9%</span>
                <span className="text-[10px] sm:text-xs font-mono text-gray-500 uppercase tracking-widest">{t('guaranteedUptime')}</span>
              </div>
            </div>
          </div>

          {/* Graphical/Terminal Area */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-brand-cyan/20 rounded-2xl blur-3xl opacity-30 pointer-events-none"></div>
            
            {/* Systems Panel Simulation */}
            <div className="relative glass-panel rounded-2xl border border-brand-dark-border overflow-hidden shadow-2xl">
              {/* Header Bar */}
              <div className="bg-brand-dark-base/80 border-b border-brand-dark-border px-4 py-3 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-gray-500 flex items-center space-x-1">
                  <Terminal className="h-3 w-3 text-brand-cyan" />
                  <span>{t('terminalTitle')}</span>
                </div>
                <div className="w-12"></div>
              </div>

              {/* Console Output */}
              <div className="p-5 font-mono text-[11px] sm:text-xs text-gray-400 space-y-4 leading-relaxed bg-brand-dark-base/40">
                <div className="flex space-x-2">
                  <span className="text-brand-indigo font-bold">$</span>
                  <span className="text-white">{t('terminalRole')}</span>
                </div>
                <div className="text-brand-cyan pl-4 whitespace-pre-line leading-relaxed">
                  {t('terminalLoad')}
                </div>
                <div className="flex space-x-2">
                  <span className="text-brand-indigo font-bold">$</span>
                  <span className="text-white">{t('terminalMonitor')}</span>
                </div>
                <div className="pl-4 space-y-1.5 bg-brand-dark-base/60 p-3 rounded border border-brand-dark-border/40">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="flex items-center space-x-1"><Database className="h-3 w-3 text-brand-cyan" /> <span>PostgreSQL:</span></span>
                    <span className="text-brand-emerald">Conectado (Aislado)</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="flex items-center space-x-1"><Server className="h-3 w-3 text-brand-indigo" /> <span>Celery Worker:</span></span>
                    <span className="text-brand-emerald">Activo (12 colas)</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="flex items-center space-x-1"><Cpu className="h-3 w-3 text-brand-emerald" /> <span>ElasticSearch:</span></span>
                    <span className="text-brand-emerald">Estable (Cluster Green)</span>
                  </div>
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 pt-2 border-t border-brand-dark-border/50">
                  <span>RAM: 4.8GB / 16GB</span>
                  <span>CPU: 12.4%</span>
                  <span>Latencia: 8ms</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <a 
            href="#arquitectura" 
            className="flex flex-col items-center text-gray-500 hover:text-white transition-colors duration-200"
            data-analytics-event="hero_scroll_indicator"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase mb-2">Desplazar</span>
            <ArrowDown className="h-4 w-4 animate-bounce text-brand-cyan" />
          </a>
        </div>
      </div>
    </section>
  );
}
