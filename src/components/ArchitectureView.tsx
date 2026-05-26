'use strict';
'use client';

import React, { useState } from 'react';
import { Cpu, Server, Database, MessageSquare, Play, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SystemNode {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  role: string;
  details: string;
  metrics: string;
  solved: string;
}

export default function ArchitectureView() {
  const [activeNode, setActiveNode] = useState<string>('gateway');
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const { language, t } = useLanguage();

  const nodes: SystemNode[] = [
    {
      id: 'client',
      label: language === 'pt' ? 'Cliente Móvel / Web' : language === 'en' ? 'Mobile / Web Client' : 'Cliente Móvil / Web',
      icon: <MessageSquare className="h-6 w-6" />,
      color: 'border-brand-cyan text-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.15)]',
      role: language === 'pt' ? 'Frontend interativo' : language === 'en' ? 'Interactive Frontend' : 'Frontend interactivo',
      details: language === 'pt' 
        ? 'Interface otimizada para dispositivos móveis construída em React e Next.js. Implementa telemetria por padrão para rastrear o funil de captação e interações do cliente.'
        : language === 'en'
        ? 'Mobile-optimized frontend built with React and Next.js. Implements built-in telemetry to track lead acquisition funnels and client interactions.'
        : 'Interfaz optimizada para dispositivos móviles construida en React y Next.js. Implementa telemetría por defecto para trazar el embudo de captación e interacciones del cliente final.',
      metrics: 'Core Web Vitals FCP < 1.2s // 100% Mobile Ready',
      solved: language === 'pt'
        ? 'Otimização de assets, renderização estática progressiva e hidratação veloz em conexões de baixa velocidade.'
        : language === 'en'
        ? 'Asset optimization, progressive static rendering, and fast hydration under low-speed connection conditions.'
        : 'Optimización de assets, renderizado estático progresivo e hidratación veloz en conexiones de baja velocidad.'
    },
    {
      id: 'gateway',
      label: language === 'pt' ? 'Core API Gateway' : language === 'en' ? 'Core API Gateway' : 'Core API Gateway',
      icon: <Cpu className="h-6 w-6" />,
      color: 'border-brand-indigo text-brand-indigo shadow-[0_0_15px_rgba(99,102,241,0.15)]',
      role: language === 'pt' ? 'Motor Laravel 11 / Django' : language === 'en' ? 'Laravel 11 / Django Engine' : 'Motor Laravel 11 / Django',
      details: language === 'pt'
        ? 'Serviço de API centralizado com injeção estrita de dependências, rate limiting por IP/Token e validação rigorosa de contratos de dados (DTOs).'
        : language === 'en'
        ? 'Centralized API service with strict dependency injection, rate limiting per IP/Token, and rigid validation of schemas (DTOs).'
        : 'Servicio API centralizado con inyección estricta de dependencias, rate limiting por IP/Token y validación rigurosa de contratos de datos (Pydantic / DTOs).',
      metrics: language === 'pt' ? 'Capacidade de +500 req/s // Autenticação JWT' : language === 'en' ? 'Capacity of +500 req/s // JWT Authentication' : 'Capacidad de +500 req/s // Autenticación JWT',
      solved: language === 'pt'
        ? 'Prevenção de falhas em cascada e isolamento lógico de consultas de tenant em microssegundos.'
        : language === 'en'
        ? 'Prevention of cascading failures and logical tenant query isolation in microseconds.'
        : 'Prevención de fallas en cascada y aislamiento lógico de consultas por tenant en microsegundos.'
    },
    {
      id: 'worker',
      label: language === 'pt' ? 'Motor de Filas' : language === 'en' ? 'Task Queue Engine' : 'Task Queue Engine',
      icon: <Server className="h-6 w-6" />,
      color: 'border-yellow-500 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.15)]',
      role: 'Celery & Redis Worker',
      details: language === 'pt'
        ? 'Gerenciador assíncrono de tarefas pesadas como faturamento fiscal brasileiro, envio automatizado de e-mails e integrações de chatbots.'
        : language === 'en'
        ? 'Asynchronous tasks manager for heavy jobs like Brazilian fiscal invoicing signatures, automatic email campaigns, and chatbot webhook processing.'
        : 'Gestor asíncrono de tareas pesadas como el firmado digital de facturas fiscales, envío automatizado de correos/SMS, e integraciones con webhooks de chatbots.',
      metrics: language === 'pt' ? 'Processamento sub-segundo // Multi-filas ativas' : language === 'en' ? 'Sub-second task run // Active multi-queue' : 'Procesamiento sub-segundo // Multi-cola activa',
      solved: language === 'pt'
        ? 'Estratégia de retentativas com backoff exponencial para evitar gargalos ante falhas de APIs externas.'
        : language === 'en'
        ? 'Exponential backoff retry strategy to prevent bottleneck congestion when third-party APIs fail.'
        : 'Estrategia de reintentos con backoff exponencial para evitar cuellos de botella ante fallas de APIs externas.'
    },
    {
      id: 'database',
      label: language === 'pt' ? 'Persistência Isolada' : language === 'en' ? 'Isolated Persistence' : 'Isolated Persistence',
      icon: <Database className="h-6 w-6" />,
      color: 'border-brand-emerald text-brand-emerald shadow-[0_0_15px_rgba(16,185,129,0.15)]',
      role: 'PostgreSQL & ElasticSearch',
      details: language === 'pt'
        ? 'Arquitetura de banco de dados robusta. Utiliza Database-per-Tenant no Laravel e bloqueios de registro no Django POS (`select_for_update`).'
        : language === 'en'
        ? 'Robust database architecture. Utilizes Database-per-Tenant in Laravel SaaS and row-level blocking locks (`select_for_update`) in Django POS.'
        : 'Arquitectura de base de datos segura. Utiliza Database-per-Tenant en Laravel para aislamiento estricto y bloqueos a nivel de fila (`select_for_update`) en Django POS.',
      metrics: language === 'pt' ? 'Consultas ElasticSearch < 150ms // Zero vazamentos SQL' : language === 'en' ? 'ElasticSearch queries < 150ms // Zero SQL injection leaks' : 'Consultas ElasticSearch < 150ms // Cero fugas SQL',
      solved: language === 'pt'
        ? 'Eliminação do problema N+1 usando otimizações com select_related e replicação assíncrona.'
        : language === 'en'
        ? 'Eliminated N+1 query problem through smart select_related prefetching and asynchronous replication.'
        : 'Eliminación del problema N+1 mediante optimizaciones con select_related y replicación de datos fluida.'
    }
  ];

  const simulateStep = () => {
    setIsSimulating(true);
    setActiveStep(1);
    
    setTimeout(() => setActiveStep(2), 1500);
    setTimeout(() => setActiveStep(3), 3000);
    setTimeout(() => setActiveStep(4), 4500);
    setTimeout(() => {
      setIsSimulating(false);
      setActiveStep(0);
    }, 6000);
  };

  const currentNode = nodes.find(n => n.id === activeNode) || nodes[1];

  return (
    <section id="arquitectura" className="py-24 border-y border-brand-dark-border relative bg-brand-dark-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full text-brand-cyan text-xs font-mono font-bold tracking-wider mb-3">
            <span>{t('archTitle')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t('archHeader')}
          </h2>
          <p className="text-gray-400 mt-4">
            {t('archDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Flowchart Diagram (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-center space-y-8 bg-brand-dark-base/40 border border-brand-dark-border p-6 rounded-2xl relative overflow-hidden">
            <div className="absolute top-4 left-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center space-x-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
              <span>{t('archVisualizer')}</span>
            </div>

            {/* Simulating Trigger */}
            <button
              onClick={simulateStep}
              disabled={isSimulating}
              className={`absolute top-3 right-4 inline-flex items-center space-x-1.5 bg-brand-dark-base border border-brand-dark-border px-3 py-1 rounded text-[10px] font-mono hover:text-brand-cyan hover:border-brand-cyan transition-colors ${
                isSimulating ? 'opacity-50 cursor-not-allowed text-brand-cyan' : 'text-gray-400'
              }`}
              data-analytics-event="arch_simulation_start"
            >
              <span>{isSimulating ? t('archSimulating') : t('archSimulate')}</span>
            </button>

            {/* Flowchart Nodes Grid */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8 relative">
              
              {nodes.map((node, index) => {
                const isSelected = activeNode === node.id;
                const isStepActive = isSimulating && activeStep === (index + 1);

                return (
                  <React.Fragment key={node.id}>
                    {/* Node Card */}
                    <button
                      onClick={() => setActiveNode(node.id)}
                      className={`relative z-10 flex flex-col items-center p-4 rounded-xl border w-full md:w-36 transition-all duration-300 ${
                        isSelected 
                          ? `${node.color} bg-brand-dark-card/90 ring-1 ring-white/10 scale-105` 
                          : 'border-brand-dark-border bg-brand-dark-base/80 text-gray-400 hover:text-white hover:border-gray-700'
                      } ${isStepActive ? 'ring-2 ring-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.4)] animate-pulse' : ''}`}
                      data-analytics-event={`arch_node_click_${node.id}`}
                    >
                      <div className="p-2.5 rounded-lg bg-brand-dark-base mb-2 border border-brand-dark-border/40">
                        {node.icon}
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-tight text-center">
                        {node.label}
                      </span>

                      {/* Connection Line indicator */}
                      {isStepActive && (
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                        </span>
                      )}
                    </button>

                    {/* Horizontal connector line on desktop */}
                    {index < nodes.length - 1 && (
                      <div className="hidden md:block flex-1 h-[2px] bg-brand-dark-border relative">
                        <div 
                          className={`absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-indigo transition-all duration-1000 ${
                            isSimulating && activeStep > index ? 'w-full' : 'w-0'
                          }`}
                        ></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

            </div>

            {/* Simulating Flow Description */}
            {isSimulating && (
              <div className="text-[11px] font-mono text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 px-4 py-2.5 rounded-lg w-full text-center animate-pulse">
                {activeStep === 1 && t('step1')}
                {activeStep === 2 && t('step2')}
                {activeStep === 3 && t('step3')}
                {activeStep === 4 && t('step4')}
              </div>
            )}

            {!isSimulating && (
              <div className="text-[10px] font-mono text-gray-500 flex items-center space-x-1.5 pt-2">
                <Info className="h-3.5 w-3.5" />
                <span>{t('archClickInfo')}</span>
              </div>
            )}

          </div>

          {/* Solution Spec Details Card (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-brand-dark-border shadow-xl">
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-lg bg-brand-dark-base border border-brand-dark-border text-brand-cyan">
                  {currentNode.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-500 block tracking-widest">{currentNode.role}</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">{currentNode.label}</h3>
                </div>
              </div>

              <div className="space-y-4">
                {/* Specs */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase text-brand-cyan tracking-wider font-semibold">{t('archMetrics')}</h4>
                  <p className="text-sm font-mono text-gray-300 mt-1 bg-brand-dark-base/50 p-2.5 rounded border border-brand-dark-border/40">
                    {currentNode.metrics}
                  </p>
                </div>

                {/* Details */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase text-gray-400 tracking-wider">{t('archRole')}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {currentNode.details}
                  </p>
                </div>

                {/* Challenged Solved */}
                <div className="pt-3 border-t border-brand-dark-border">
                  <h4 className="text-[11px] font-mono uppercase text-brand-emerald tracking-wider font-semibold flex items-center space-x-1">
                    <span>{t('archSolved')}</span>
                  </h4>
                  <p className="text-xs text-gray-300 mt-1 italic leading-relaxed">
                    "{currentNode.solved}"
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
