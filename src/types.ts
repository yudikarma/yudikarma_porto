export interface Project {
  name: string;
  tech: string[];
  desc: string;
  collaborators: string[];
  technicalDoc: string;
  thumbnail?: string;
  category?: string;
  images?: string[];
  projectType?: string;
  company?: string;
  role?: string;
  period?: string;
  demoUrl?: string;
  playStoreUrl?: string;
  client?: string;
}

export interface Experience {
  company: string;
  role: string;
  type?: string;
  period: string;
  description: string;
  techStack: string[];
  highlights: string[];
  projects: Project[];
  partnerProducts?: { name: string; tagline: string; description: string; }[];
}
