'use strict';
'use client';

import React, { useState } from 'react';
import { Mail, Phone, User, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('errName');
    if (!formData.phone.trim()) newErrors.phone = t('errPhone');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t('errEmail');
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('errEmailInvalid');
    }

    if (!formData.message.trim()) newErrors.message = t('errMsg');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    setIsSubmitting(true);
  };

  return (
    <section id="contacto" className="py-24 border-t border-brand-dark-border relative bg-brand-dark-base tech-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Details (col-span-5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full text-brand-cyan text-xs font-mono font-bold tracking-wider mb-3">
                <span>{t('contactBadge')}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                {t('contactTitle')}
              </h2>
              <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                {t('contactDesc')}
              </p>
            </div>

            <div className="space-y-6 font-mono text-xs text-gray-400">
              <div className="flex items-center space-x-4 bg-brand-dark-card border border-brand-dark-border p-4 rounded-xl">
                <Mail className="h-5 w-5 text-brand-cyan" />
                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[9px]">{t('contactEmail')}</span>
                  <a href="mailto:daniegarcia.negocio@gmail.com" className="text-white hover:text-brand-cyan transition-colors">
                    daniegarcia.negocio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-brand-dark-card border border-brand-dark-border p-4 rounded-xl">
                <Phone className="h-5 w-5 text-brand-emerald" />
                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[9px]">WHATSAPP DIRECTO</span>
                  <a 
                    href="https://wa.me/5541996236083" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-emerald transition-colors font-bold"
                  >
                    +55 41 99623-6083
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-brand-dark-card border border-brand-dark-border p-4 rounded-xl">
                <div className="h-5 w-5 flex items-center justify-center font-bold text-brand-indigo text-lg">⏳</div>
                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[9px]">{t('contactResponse')}</span>
                  <span className="text-white">{t('contactResponseVal')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-brand-dark-border shadow-2xl relative">
              <div className="absolute top-4 right-4 text-[9px] font-mono text-gray-500 flex items-center space-x-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-ping"></span>
                <span>Active Connection Terminal</span>
              </div>

              <form 
                action="https://formsubmit.co/daniegarcia.negocio@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Anti-spam y configuraciones de FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://portfolio.github.io/thanks" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      {t('contactName')}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Ej. Juan Pérez"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-dark-base border border-brand-dark-border rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>
                    {errors.name && <span className="text-[10px] font-mono text-red-400 block">{errors.name}</span>}
                  </div>

                  {/* Telefono */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      {t('contactPhone')}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        placeholder="Ej. +55 41 99623-6083"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-dark-base border border-brand-dark-border rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                      />
                    </div>
                    {errors.phone && <span className="text-[10px] font-mono text-red-400 block">{errors.phone}</span>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    Correo Electrónico / Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder="juan.perez@empresa.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-dark-base border border-brand-dark-border rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all"
                    />
                  </div>
                  {errors.email && <span className="text-[10px] font-mono text-red-400 block">{errors.email}</span>}
                </div>

                {/* Mensaje */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    {t('contactMsg')}
                  </label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4}
                    placeholder={t('contactMsgPlaceholder')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-dark-base border border-brand-dark-border rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-cyan transition-all resize-none animate-none"
                  ></textarea>
                  {errors.message && <span className="text-[10px] font-mono text-red-400 block">{errors.message}</span>}
                </div>

                {/* Submit button with GTM analytics hook */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-mono font-bold tracking-wider text-brand-dark-base bg-brand-cyan rounded-lg hover:bg-white shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 disabled:opacity-50"
                  data-analytics-event="contact_form_submit"
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? t('contactBtnSending') : t('contactBtn')}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
