'use strict';
'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-base border-t border-brand-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Note */}
          <div className="text-center md:text-left">
            <span className="font-mono text-sm text-gray-400">
              © {currentYear} <strong className="text-white">Rajesh Rampersad</strong>. Todos los derechos reservados.
            </span>
            <p className="text-[10px] font-mono text-gray-600 mt-1">
              DISEÑO PREMIUM EN NEXT.JS // CODIFICADO BAJO PRINCIPIOS DE SISTEMAS L7
            </p>
          </div>

          {/* Social Links using robust inline SVGs */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/rajesh-daniel-rampersad-garcia-085736229" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-brand-dark-border bg-brand-dark-card text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-colors"
              aria-label="LinkedIn Profile"
              data-analytics-event="footer_linkedin"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/profile.php?id=100091138985956" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-brand-dark-border bg-brand-dark-card text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-colors"
              aria-label="Facebook Profile"
              data-analytics-event="footer_facebook"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/rajeshgarcia52" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-brand-dark-border bg-brand-dark-card text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-colors"
              aria-label="Instagram Profile"
              data-analytics-event="footer_instagram"
            >
              <svg className="h-4.5 w-4.5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-brand-dark-border bg-brand-dark-card text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-colors"
              aria-label="GitHub Developer Profile"
              data-analytics-event="footer_github"
            >
              <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
