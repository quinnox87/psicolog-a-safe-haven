export interface ManualResource {
  id: string;
  title: string;
  category: string;
  size: string;
  pages: number;
  image: string;
  downloadUrl: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface QAItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  institution: string;
  period: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
  content: string;
}

export interface PodcastItem {
  id: string;
  title: string;
  type: 'audio' | 'video';
  duration: string;
  imageUrl: string;
  category: string;
  mediaUrl: string;
  downloadUrl?: string;
}

export interface PatientSession {
  id: string;
  date: string;
  summaryTitle: string;
  doctorNotes: string;
  downloadUrl: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  institution?: string;
  description?: string;
}

export interface StoreItem {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  tags?: string[];
  ctaLabel?: string;
  imageAlt?: string; // SEO optimization
  // Extended details for Product Page
  fullDescription?: string;
  features?: string[]; // Ficha Técnica
  benefits?: string[]; // Evidencia/Beneficios
  purchaseUrl?: string; // In a real app, this might link to a checkout flow
}

export interface PublicationItem {
  id: string;
  title: string;
  type: string;
  date: string;
  conference?: string;
  url: string;
  doi?: string; // Optional DOI field
  downloadUrl?: string; // Placeholder for PDF upload
}

export interface QuestionnaireItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}

export interface ClinicalReport {
  id: string;
  date: string;
  title: string;
  type: 'Evaluación' | 'Seguimiento' | 'Alta';
  downloadUrl: string;
}

export interface PatientMaterial {
  id: string;
  title: string;
  type: 'PDF' | 'Video' | 'Audio';
  description: string;
  downloadUrl: string;
  assignedDate: string;
}
export interface InteractiveResource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
}
