<<<<<<< HEAD
// ========================
// PROJECT TYPES
// ========================

export interface ProjectTabImage {
  src: string;
  title?: string;
  desc?: string;
  download?: string;
}

export interface ProjectTab {
  label: string;
  heading?: string;
  description?: string;
  images?: ProjectTabImage[];
}

export interface Project {
  id: number | string;

  // NEW (REQUIRED BY CLIENT FOR URL STRUCTURE)
  slug: string;  // /works/slug or /playground/slug

  title: string;
  category: string;
  filter?: string;
  image: string;
  link: string;

  description?: string;
  subtitle?: string;
  

=======
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description?: string;
  subtitle?: string;
>>>>>>> fe0077a4e069fc6e8c4b18ea8ae6f30cb38d7da6
  client?: string;
  services?: string;
  duration?: string;
  year?: string;
<<<<<<< HEAD

  tabs?: ProjectTab[];
}


// ========================
// OTHER ENTITIES
// ========================

=======
  tabs?: {
    label: string;
    heading?: string;
    description?: string;
    images?: {
      src: string;
      title?: string;
      desc?: string;
      download?: string;
    }[];
  }[];
}


>>>>>>> fe0077a4e069fc6e8c4b18ea8ae6f30cb38d7da6
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
<<<<<<< HEAD
  size: "small" | "medium" | "large";
}
=======
  size: 'small' | 'medium' | 'large';
}
>>>>>>> fe0077a4e069fc6e8c4b18ea8ae6f30cb38d7da6
