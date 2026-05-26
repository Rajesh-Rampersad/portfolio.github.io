export interface TranslatedString {
  es: string;
  en: string;
  pt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: TranslatedString;
  subtitle: TranslatedString;
  description: TranslatedString;
  longDescription: TranslatedString;
  category: 'web' | 'system' | 'saas' | 'chatbot';
  tags: string[];
  technologies: string[];
  metrics?: {
    label: TranslatedString;
    value: string;
  }[];
  architecture?: {
    nodes: { id: string; label: TranslatedString; type: 'client' | 'server' | 'database' | 'queue' | 'external' }[];
    edges: { from: string; to: string; label?: TranslatedString }[];
  };
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}
