'use strict';
'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navInicio'), href: '#inicio', event: 'nav_inicio' },
    { name: t('navArquitectura'), href: '#arquitectura', event: 'nav_arquitectura' },
    { name: t('navServicios'), href: '#servicios', event: 'nav_servicios' },
    { name: t('navProyectos'), href: '#proyectos', event: 'nav_proyectos' },
    { name: t('navAcerca'), href: '#acerca', event: 'nav_acerca' },
    { name: t('navContacto'), href: '#contacto', event: 'nav_contacto' },
  ];

  const langs: ('es' | 'en' | 'pt')[] = ['es', 'en', 'pt'];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-dark-base/80 backdrop-blur-md border-b border-brand-dark-border py-4 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#inicio" 
              className="flex items-center space-x-2 text-white font-bold text-xl tracking-wider group"
              data-analytics-event="logo_click"
            >
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-brand-indigo via-brand-cyan to-brand-emerald flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-brand-cyan">
                RAJESH<span className="text-brand-cyan font-extrabold">.DEV</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-xs font-mono font-bold uppercase relative py-1 group"
                  data-analytics-event={link.event}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              {/* Dynamic Language Switcher */}
              <div className="flex items-center space-x-1.5 bg-brand-dark-card border border-brand-dark-border p-1 rounded-lg">
                {langs.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 text-[10px] font-mono font-bold rounded transition-all duration-200 uppercase ${
                      language === lang 
                        ? 'bg-brand-cyan text-brand-dark-base font-black shadow-[0_0_8px_rgba(6,182,212,0.4)]' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    data-analytics-event={`lang_switcher_${lang}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/in/rajesh-daniel-rampersad-garcia-085736229"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-brand-dark-border bg-brand-dark-card/50 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-colors"
                aria-label="LinkedIn Profile"
                data-analytics-event="nav_linkedin"
              >
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* CTA Consultar */}
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold tracking-widest text-brand-dark-base bg-brand-cyan rounded-md hover:bg-white hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300 active:scale-95"
                data-analytics-event="nav_cta_contacto"
              >
                {t('consultar')}
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Dynamic Language Switcher Mobile */}
              <div className="flex items-center space-x-1 bg-brand-dark-card border border-brand-dark-border p-0.5 rounded-lg">
                {langs.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-1.5 py-0.5 text-[9px] font-mono font-bold rounded uppercase ${
                      language === lang 
                        ? 'bg-brand-cyan text-brand-dark-base' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                aria-label="Toggle menu"
                data-analytics-event="mobile_menu_toggle"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden bg-brand-dark-base/95 backdrop-blur-lg border-b border-brand-dark-border py-6 shadow-2xl px-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white block px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800/40 transition-colors duration-200"
                  data-analytics-event={`mobile_${link.event}`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex gap-2 pt-2">
                <a 
                  href="https://www.linkedin.com/in/rajesh-daniel-rampersad-garcia-085736229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow inline-flex items-center justify-center space-x-2 px-4 py-3 text-xs font-mono font-bold text-gray-300 border border-brand-dark-border rounded-lg bg-brand-dark-card/50"
                  data-analytics-event="mobile_nav_linkedin"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LINKEDIN</span>
                </a>

                <a
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex-grow inline-flex items-center justify-center px-5 py-3 text-xs font-mono font-bold text-brand-dark-base bg-brand-cyan rounded-lg hover:bg-white"
                  data-analytics-event="mobile_nav_cta"
                >
                  {t('consultar')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
