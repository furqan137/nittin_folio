// ========================
// PROJECT TYPES
// ========================

// Tab images inside a project
export interface ProjectTabImage {
  src: string;
  title?: string;
  desc?: string;
  download?: string;
}

// Tab object inside a project
export interface ProjectTab {
  label: string;
  heading?: string;
  description?: string;
  images?: ProjectTabImage[];
}

// MAIN Project interface
export interface Project {
  id: number | string;

  // Used for URL structure: /works/slug or /playground/slug
  slug: string;

  title: string;
  category: string;

  // Used for playground filters (glitch, 3d, type, chaos)
  filter?: string;

  image: string;
  link: string;

  description?: string;
  subtitle?: string;
  client?: string;
  services?: string;
  duration?: string;
  year?: string;

  tabs?: ProjectTab[];
}

// ========================
// OTHER ENTITIES
// ========================

export interface Skill {
  name: string;
  icon: string;
  category?: "Design" | "Video" | "Illustration" | "UI/UX";
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

export interface FAQ {
  question: string;
  answer: string;
  icon: string;
}

export interface ProjectInfo {
  services: string[];
  client: string;
  duration: string;
  year: string;
}

export interface LogoVariation {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  size: "small" | "medium" | "large";
}
