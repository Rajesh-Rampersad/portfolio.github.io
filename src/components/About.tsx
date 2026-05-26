'use strict';
'use client';

import React from 'react';
import { PenTool } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  const tools = [
    { name: 'Figma / XD / Sketch', cat: 'diseño' },
    { name: 'Photoshop', cat: 'diseño' },
    { name: 'Illustrator', cat: 'diseño' },
    { name: 'HTML5 / CSS3', cat: 'front' },
    { name: 'Bootstrap / Tailwind', cat: 'front' },
    { name: 'JavaScript / TypeScript', cat: 'front' },
    { name: 'Next.js / React', cat: 'front' },
    { name: 'PHP / Laravel', cat: 'back' },
    { name: 'Python / Django', cat: 'back' },
    { name: 'MySQL / PostgreSQL', cat: 'db' },
    { name: 'ElasticSearch', cat: 'db' },
    { name: 'Chatbot APIs & Webhooks', cat: 'auto' }
  ];

  return (
    <section id="acerca" className="py-24 border-t border-brand-dark-border relative bg-brand-dark-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Timeline and Intro (col-span-7) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 border border-brand-emerald/20 px-3 py-1 rounded-full text-brand-emerald text-xs font-mono font-bold tracking-wider mb-3">
                <span>{t('aboutBadge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {t('aboutTitle')}
              </h2>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              {language === 'pt' ? (
                <>Olá, sou <strong>Rajesh Rampersad</strong>. Desenvolvo soluções web de alto impacto há mais de 4 anos. Gosto de intervir em todo o ciclo de vida do produto: desde o modelo lógico do conceito técnico e design de interfaces, até o desenvolvimento robusto do backend, estruturação de bancos de dados e orquestração do deploy.</>
              ) : language === 'en' ? (
                <>Hi, I am <strong>Rajesh Rampersad</strong>. I have been designing and building high-impact web solutions for over 4 years. I love working through the entire product lifecycle: from logical concept modeling and interface design, to robust backend development, database structure, and deployment orchestration.</>
              ) : (
                <>Hola, soy <strong>Rajesh Rampersad</strong>. Llevo más de 4 años diseñando y construyendo soluciones web de alto impacto. Me apasiona intervenir en todo el ciclo de vida del producto: desde el modelado visual del concepto técnico y diseño de interfaces, hasta el desarrollo robusto del backend, estructuración de bases de datos y orquestación del despliegue.</>
              )}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {language === 'pt' ? (
                <>Minha filosofia está centrada na <strong>confiabilidade do código</strong>. Projetar sistemas que não quebrem sob carga concorrente, manter bancos de dados bem indexados e criar fluxos de chatbots de conversação integrados que otimizem a experiência final do usuário.</>
              ) : language === 'en' ? (
                <>My philosophy is centered on <strong>code reliability</strong>. Designing systems that do not break under concurrent load, keeping properly indexed databases, and creating smooth conversational chatbot flows that optimize final user experience.</>
              ) : (
                <>Mi filosofía se centra en la <strong>fiabilidad del código</strong>. Diseñar sistemas que no rompan bajo carga concurrente, mantener bases de datos debidamente indexadas y crear flujos conversacionales fluidos que optimicen la experiencia del usuario final.</>
              )}
            </p>

            {/* Timeline */}
            <div className="border-l-2 border-brand-dark-border pl-6 space-y-8 mt-6">
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 h-4.5 w-4.5 rounded-full bg-brand-dark-base border-2 border-brand-cyan"></span>
                <span className="block text-[10px] font-mono text-brand-cyan uppercase tracking-widest font-bold">
                  {language === 'pt' ? '2019 - Presente' : language === 'en' ? '2019 - Present' : '2019 - Presente'}
                </span>
                <h4 className="text-md font-bold text-white mt-1">
                  {t('timelineTitle')}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{t('timelineSub')}</p>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  {t('timelineDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Tools & Tech Specs (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-brand-dark-border shadow-xl">
              <h3 className="text-md font-bold font-mono tracking-tight text-white mb-6 flex items-center space-x-2">
                <PenTool className="h-4.5 w-4.5 text-brand-cyan" />
                <span>{t('arsenalTitle')}</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span 
                    key={tool.name}
                    className="inline-flex items-center text-xs font-mono bg-brand-dark-base/80 hover:bg-brand-dark-base border border-brand-dark-border px-3 py-1.5 rounded-lg text-gray-300 transition-colors"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-brand-cyan"></span>
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Status Board */}
            <div className="glass-panel p-6 rounded-2xl border border-brand-dark-border shadow-xl bg-brand-dark-base/40">
              <h3 className="text-sm font-bold font-mono tracking-widest text-gray-400 uppercase mb-4 flex items-center justify-between">
                <span>{t('serverStatus')}</span>
                <span className="h-2 w-2 rounded-full bg-brand-emerald animate-pulse"></span>
              </h3>
              <div className="space-y-2 text-xs font-mono text-gray-500">
                <div className="flex justify-between">
                  <span>SSL Cert:</span>
                  <span className="text-brand-emerald font-bold">{t('sslActive')}</span>
                </div>
                <div className="flex justify-between">
                  <span>DB Clusters:</span>
                  <span className="text-white">{t('dbClusters')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Webhook Uptime:</span>
                  <span className="text-brand-cyan">100.00%</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
