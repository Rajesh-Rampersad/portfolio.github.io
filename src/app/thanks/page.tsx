'use strict';
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, MessageSquare, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function ThanksPage() {
  const { language, t } = useLanguage();

  // Dynamically format WhatsApp greeting loop based on the user's active language
  const getWhatsAppMessage = () => {
    switch (language) {
      case 'pt':
        return encodeURIComponent('Olá Rajesh, acabei de ver seu portfólio e gostaria de fazer um orçamento para um projeto.');
      case 'en':
        return encodeURIComponent('Hello Rajesh, I just saw your portfolio and would like to get a quote for a project.');
      default:
        return encodeURIComponent('Hola Rajesh, acabo de ver tu portafolio y me gustaría cotizar un proyecto.');
    }
  };

  const whatsappUrl = `https://wa.me/5541996236083?text=${getWhatsAppMessage()}`;

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 tech-grid-bg flex items-center justify-center min-h-[80vh]">
        <div className="max-w-md mx-auto px-6 py-12 glass-panel rounded-2xl border border-brand-dark-border text-center shadow-2xl relative z-10 space-y-6 animate-fade-in">
          
          {/* Animated Success Circle Icon */}
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center animate-bounce">
              <CheckCircle className="h-8 w-8 text-brand-emerald" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t('thanksTitle')}
            </h1>
            <p className="text-[10px] sm:text-xs font-mono text-brand-cyan uppercase tracking-widest">
              {t('thanksBadge')}
            </p>
          </div>

          {/* Message */}
          <p className="text-xs text-gray-400 leading-relaxed">
            {t('thanksDesc')}
          </p>

          {/* Growth Loop Area: Direct Slack/WhatsApp & CV download */}
          <div className="border-t border-brand-dark-border/60 pt-6 space-y-3">
            <span className="block text-[9px] font-mono text-gray-500 uppercase tracking-widest">
              {t('thanksAccelerate')}
            </span>
            
            <div className="flex flex-col gap-2">
              {/* WhatsApp direct connection loop */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 text-xs font-mono font-bold tracking-wider text-brand-dark-base bg-brand-emerald hover:bg-white transition-all rounded-lg"
                data-analytics-event="thanks_whatsapp_direct"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{t('thanksWpp')}</span>
              </a>

              {/* CV Download loop */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    language === 'pt' 
                      ? 'Iniciando o download do currículo técnico...' 
                      : language === 'en' 
                      ? 'Starting technical resume download...' 
                      : 'Iniciando descarga de currículum técnico...'
                  );
                }}
                className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 text-xs font-mono font-bold tracking-wider text-gray-300 border border-brand-dark-border hover:bg-brand-dark-card/50 transition-all rounded-lg"
                data-analytics-event="thanks_download_cv"
              >
                <Download className="h-4 w-4 text-brand-cyan" />
                <span>{t('thanksCv')}</span>
              </a>
            </div>
          </div>

          {/* Back link */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-[10px] font-mono text-gray-500 hover:text-white transition-colors"
              data-analytics-event="thanks_go_home"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>{t('thanksHome')}</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
