export interface ManualResource {
  id: string;
  title: string;
  category: string;
  size: string;
  pages: number;
  image: string;
  downloadUrl: string;
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
