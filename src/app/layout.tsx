import type { Metadata } from 'next';
import { Outfit, Fira_Code } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rajesh Rampersad | Arquitecto de Sistemas & Full Stack Developer',
  description: 'Portafolio profesional de Rajesh Rampersad, Ingeniero Full Stack especializado en la arquitectura de plataformas escalables SaaS (Laravel/Django), automatización inteligente, chatbots e integraciones robustas de bases de datos.',
  keywords: [
    'Rajesh Garcia',
    'Rajesh Rampersad',
    'Arquitecto de Sistemas',
    'Full Stack Developer',
    'Laravel SaaS',
    'Django Developer',
    'Chatbots Inteligentes',
    'Base de Datos',
    'Desarrollo Mobile First'
  ],
  authors: [{ name: 'Rajesh Rampersad' }],
  creator: 'Rajesh Rampersad',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://portfolio.github.io',
    title: 'Rajesh Rampersad | Arquitecto de Sistemas & Full Stack Developer',
    description: 'Explora arquitecturas SaaS, sistemas POS de alto rendimiento y desarrollos a medida construidos con tecnologías modernas como Laravel, Django y Next.js.',
    siteName: 'Portafolio de Rajesh Rampersad',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajesh Rampersad | Arquitecto de Sistemas & Full Stack Developer',
    description: 'Ingeniería de software de alta calidad, robustez backend y experiencias web dinámicas.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${firaCode.variable} scroll-smooth`}>
      <body className="bg-brand-dark-base text-gray-100 min-h-screen antialiased flex flex-col selection:bg-brand-cyan/30 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
