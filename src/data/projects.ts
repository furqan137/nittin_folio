import { Project } from "../types";

// === WORKS PROJECTS ===
import Project1 from "../images/Works/Project1.png";
import Project2 from "../images/Works/Project2.png";
import Project3 from "../images/Works/Project3.png";
import Project4 from "../images/Works/Project4.png";
import Project5 from "../images/Works/Project5.png";
import Project6 from "../images/Works/Project6.png";
import Project7 from "../images/Works/Project7.png";
import Project8 from "../images/Works/Project8.png";
import Project9 from "../images/Works/Project9.png";

// === PAST WORKS PROJECTS ===
import Past1 from "../images/pastworks/pastwork1.png";
import Past2 from "../images/pastworks/pastwork2.png";
import Past3 from "../images/pastworks/pastwork3.png";
import Past4 from "../images/pastworks/pastwork4.png";
import Past5 from "../images/pastworks/pastwork5.png";
import Past6 from "../images/pastworks/pastwork6.png";

// === PLAYGROUND PROJECTS ===
import Playground1 from "../images/Playgrounds/Playground1.png";
import Playground2 from "../images/Playgrounds/Playground2.png";
import Playground3 from "../images/Playgrounds/Playground3.png";
import Playground4 from "../images/Playgrounds/Playground4.png";
import Playground5 from "../images/Playgrounds/Playground5.png";
import Playground6 from "../images/Playgrounds/Playground6.png";
import Playground7 from "../images/Playgrounds/Playground7.png";
import Playground8 from "../images/Playgrounds/Playground8.png";



// =========================================================
// ✅ WORKS PROJECTS (FULL DETAILED VERSION WITH SLUGS + TABS)
// =========================================================
export const worksProjects: Project[] = [
  {
    id: 1,
    slug: "17-west",
    title: "17 West",
    category: "digital_art",
    image: Project1,
    link: "/works/17-west",
    description: "Modern real estate concept branding.",
    client: "17 West Group",
    services: "Brand Identity, Web UI/UX",
    duration: "3 Weeks",
    year: "2024",
    tabs: [
      {
        label: "Overview",
        heading: "Brand Design",
        description: "Created a modern digital identity for a premium real estate company.",
        images: [{ src: Project1, title: "Logo Concept", desc: "Elegant design showcasing urban sophistication." }],
      },
    ],
  },

  {
    id: 2,
    slug: "aura-music-app",
    title: "Aura Music App",
    category: "ui_ux",
    image: Project2,
    link: "/works/aura-music-app",
    description: "Music app interface design focusing on user flow.",
    client: "Aura Audio",
    services: "App UI/UX Design",
    duration: "2 Weeks",
    year: "2024",
    tabs: [
      {
        label: "UI Design",
        heading: "Vibrant Dark Mode",
        description: "Designed a sleek dark interface for smooth navigation.",
        images: [{ src: Project2, title: "Main Interface", desc: "Neon-accented layout for music enthusiasts." }],
      },
    ],
  },

  {
    id: 3,
    slug: "neon-dystopia",
    title: "Neon Dystopia",
    category: "digital_art",
    image: Project3,
    link: "/works/neon-dystopia",
    description: "Cyberpunk-inspired artwork with glowing effects.",
    client: "Self Project",
    services: "Digital Illustration",
    duration: "1 Week",
    year: "2024",
    tabs: [
      {
        label: "Concept",
        heading: "Cyberpunk Vision",
        description: "A personal artwork exploring futuristic neon themes.",
        images: [{ src: Project3, title: "Artwork", desc: "Illustration in vibrant purples and blues." }],
      },
    ],
  },

  {
    id: 4,
    slug: "terra-coffee",
    title: "Terra Coffee",
    category: "branding",
    image: Project4,
    link: "/works/terra-coffee",
    description: "Branding project for an eco-friendly coffee brand.",
    client: "Terra Co.",
    services: "Logo Design, Branding",
    duration: "2 Weeks",
    year: "2024",
    tabs: [
      {
        label: "Identity",
        heading: "Eco Brand",
        description: "Minimal and sustainable aesthetic for organic coffee.",
        images: [{ src: Project4, title: "Logo Mockup", desc: "Earth-toned branding assets." }],
      },
    ],
  },

  {
    id: 5,
    slug: "geometric-harmony",
    title: "Geometric Harmony",
    category: "abstract",
    image: Project5,
    link: "/works/geometric-harmony",
    description: "Abstract art balancing symmetry and color contrast.",
    client: "Freelance",
    services: "Digital Art",
    duration: "1 Week",
    year: "2023",
    tabs: [
      {
        label: "Artwork",
        heading: "Shapes in Balance",
        description: "Explores geometric form balance and symmetry.",
        images: [{ src: Project5, title: "Main Artwork", desc: "Visual balance of color gradients." }],
      },
    ],
  },

  {
    id: 6,
    slug: "android-soul",
    title: "Android Soul",
    category: "digital_art",
    image: Project6,
    link: "/works/android-soul",
    description: "Futuristic digital artwork exploring machine emotions.",
    client: "Private Commission",
    services: "Concept Art",
    duration: "4 Days",
    year: "2023",
    tabs: [
      {
        label: "Inspiration",
        heading: "AI Consciousness",
        description: "Artwork expressing the soul within machines.",
        images: [{ src: Project6, title: "Digital Portrait", desc: "Surreal neon tones and emotionless gaze." }],
      },
    ],
  },

  {
    id: 7,
    slug: "zen-garden",
    title: "Zen Garden",
    category: "digital_art",
    image: Project7,
    link: "/works/zen-garden",
    description: "Calming visuals inspired by nature and Japanese art.",
    client: "Wellness Brand",
    services: "Digital Art, Concept Visualization",
    duration: "1 Week",
    year: "2023",
    tabs: [
      {
        label: "Design",
        heading: "Serenity in Motion",
        description: "A soothing visual palette representing calmness.",
        images: [{ src: Project7, title: "Nature Scene", desc: "Pastel gradients and natural forms." }],
      },
    ],
  },

  {
    id: 8,
    slug: "pixel-perk-cafe",
    title: "Pixel Perk Cafe",
    category: "branding",
    image: Project8,
    link: "/works/pixel-perk-cafe",
    description: "Cafe logo and branding with pixel-art theme.",
    client: "Pixel Perk",
    services: "Logo Design, Brand Identity",
    duration: "2 Weeks",
    year: "2023",
    tabs: [
      {
        label: "Logo",
        heading: "Retro Cafe Vibe",
        description: "Playful pixel-art inspired design system.",
        images: [{ src: Project8, title: "Logo Preview", desc: "Pixel-based typography with coffee motif." }],
      },
    ],
  },

  {
    id: 9,
    slug: "etherea-skincare",
    title: "Etherea Skincare",
    category: "branding",
    image: Project9,
    link: "/works/etherea-skincare",
    description: "Minimalist skincare branding project.",
    client: "Etherea",
    services: "Packaging Design, Brand Aesthetic",
    duration: "3 Weeks",
    year: "2024",
    tabs: [
      {
        label: "Branding",
        heading: "Clean & Soft Look",
        description: "Subtle tones and elegant packaging visuals.",
        images: [{ src: Project9, title: "Product Mockups", desc: "Minimalist cream container and logo design." }],
      },
    ],
  },
];



// =========================================================
// ✅ PAST WORKS PROJECTS (FULL SLUG VERSION)
// =========================================================
export const pastWorksProjects: Project[] = [
  {
    id: 101,
    slug: "whispering-woods",
    title: "Whispering Woods",
    category: "digital_art",
    image: Past1,
    link: "/pastworks/whispering-woods",
    description: "Atmospheric nature-inspired artwork.",
    client: "Freelance",
    services: "Digital Illustration",
    duration: "1 Week",
    year: "2023",
    tabs: [
      {
        label: "Overview",
        heading: "Mystic Forest Scene",
        description: "Soft lighting and fantasy tones inspired this illustration.",
        images: [{ src: Past1, title: "Concept Artwork", desc: "Calm forest ambience with magical highlights." }],
      },
    ],
  },

  {
    id: 102,
    slug: "neon-dystopia-past",
    title: "Neon Dystopia Past",
    category: "digital_art",
    image: Past2,
    link: "/pastworks/neon-dystopia-past",
    description: "Retro neon illustration with dystopian elements.",
    client: "Self Project",
    services: "Poster Art",
    duration: "5 Days",
    year: "2023",
    tabs: [
      {
        label: "Artwork",
        heading: "Neon Chaos",
        description: "A darker version of the Neon Dystopia universe.",
        images: [{ src: Past2, title: "Main Poster", desc: "Neon cyber themes." }],
      },
    ],
  },

  {
    id: 103,
    slug: "geometric-harmony-past",
    title: "Geometric Harmony Past",
    category: "digital_art",
    image: Past3,
    link: "/pastworks/geometric-harmony-past",
    description: "Symmetrical abstract art piece.",
    client: "Freelance",
    services: "Digital Abstract Art",
    duration: "4 Days",
    year: "2022",
    tabs: [
      {
        label: "Design",
        heading: "Abstract Symmetry",
        description: "A colorful geometric exploration.",
        images: [{ src: Past3, title: "Artwork", desc: "Shapes & symmetry." }],
      },
    ],
  },

  {
    id: 104,
    slug: "android-soul-past",
    title: "Android Soul Past",
    category: "digital_art",
    image: Past4,
    link: "/pastworks/android-soul-past",
    description: "Sci-fi illustration representing machine emotion.",
    client: "Private Commission",
    services: "Concept Art",
    duration: "6 Days",
    year: "2023",
    tabs: [
      {
        label: "Concept",
        heading: "Emotion in Machines",
        description: "Exploring the soul of AI.",
        images: [{ src: Past4, title: "Concept Portrait", desc: "Futuristic tones." }],
      },
    ],
  },

  {
    id: 105,
    slug: "zen-garden-past",
    title: "Zen Garden Past",
    category: "digital_art",
    image: Past5,
    link: "/pastworks/zen-garden-past",
    description: "Nature illustration focused on calm and balance.",
    client: "Zen Studios",
    services: "Digital Art",
    duration: "1 Week",
    year: "2023",
    tabs: [
      {
        label: "Overview",
        heading: "Soft Nature",
        description: "Peaceful visuals inspired by Japanese gardens.",
        images: [{ src: Past5, title: "Art Shot", desc: "Warm & calm tones." }],
      },
    ],
  },

  {
    id: 106,
    slug: "pixel-perk-cafe-past",
    title: "Pixel Perk Cafe Past",
    category: "digital_art",
    image: Past6,
    link: "/pastworks/pixel-perk-cafe-past",
    description: "Retro pixel-themed branding concept.",
    client: "Pixel Perk",
    services: "Illustration",
    duration: "1 Week",
    year: "2022",
    tabs: [
      {
        label: "Design",
        heading: "Retro Pixel Branding",
        description: "Fun visual identity using pixel-style art.",
        images: [{ src: Past6, title: "Pixel Mockup", desc: "Coffee meets pixels." }],
      },
    ],
  },
];



// =========================================================
// ✅ PLAYGROUND PROJECTS (SLUG + FILTER + TABS)
// =========================================================
export const playgroundProjects: Project[] = [
  {
    id: 201,
    slug: "error-404-exe",
    title: "ERROR_404.exe",
    subtitle: "When reality.exe stops working",
    category: "experimental",
    filter: "glitch",
    image: Playground1,
    link: "/playground/error-404-exe",
    description: "A glitch-themed experimental design project.",
    client: "Self Project",
    services: "Glitch Art, Experimental Design",
    duration: "3 Days",
    year: "2025",
    tabs: [
      {
        label: "Overview",
        heading: "System Failure Aesthetic",
        description: "Exploring glitch, distortion and broken pixel systems.",
        images: [{ src: Playground1, title: "Glitch Preview", desc: "Digital distortion imagery." }],
      },
    ],
  },

  {
    id: 202,
    slug: "neon-dreams",
    title: "NEON DREAMS",
    subtitle: "Typography Chaos",
    category: "unconventional",
    filter: "type",
    image: Playground2,
    link: "/playground/neon-dreams",
    description: "A neon chaos concept exploring experimental typography.",
    client: "Self Project",
    services: "Typography, Digital Art",
    duration: "4 Days",
    year: "2025",
    tabs: [
      {
        label: "Artwork",
        heading: "Neon Typography",
        description: "Distorted neon letters creating visual rhythm.",
        images: [{ src: Playground2, title: "Typography Art", desc: "Bold neon contrasts." }],
      },
    ],
  },

  {
    id: 203,
    slug: "impossible-geometries",
    title: "Impossible Geometries",
    subtitle: "Physics left the chat",
    category: "weird",
    filter: "3d",
    image: Playground3,
    link: "/playground/impossible-geometries",
    description: "Mind-bending geometric illusions.",
    client: "Concept Lab",
    services: "3D Art, Visual Illusion",
    duration: "5 Days",
    year: "2024",
    tabs: [
      {
        label: "Design",
        heading: "Impossible Shapes",
        description: "Geometry that breaks logic and perception.",
        images: [{ src: Playground3, title: "Impossible Shape", desc: "Optical illusion artwork." }],
      },
    ],
  },

  {
    id: 204,
    slug: "broken-reality",
    title: "Broken.Reality",
    subtitle: "System.malfunction.beautiful",
    category: "experimental",
    filter: "chaos",
    image: Playground4,
    link: "/playground/broken-reality",
    description: "A surreal breakdown of reality.",
    client: "Self Project",
    services: "Surreal Digital Art",
    duration: "2 Days",
    year: "2025",
    tabs: [
      {
        label: "Concept",
        heading: "Reality Collapse",
        description: "Exploring surreal distortions and destroyed forms.",
        images: [{ src: Playground4, title: "Surreal Scene", desc: "Fragmented reality visualization." }],
      },
    ],
  },

  {
    id: 205,
    slug: "data-dreams",
    title: "Data Dreams",
    subtitle: "What AI sees when it sleeps",
    category: "unconventional",
    filter: "chaos",
    image: Playground5,
    link: "/playground/data-dreams",
    description: "Abstract neural concept art.",
    client: "AI Lab",
    services: "Generative Art",
    duration: "1 Week",
    year: "2024",
    tabs: [
      {
        label: "Dream View",
        heading: "Inside Machine Dreams",
        description: "Visual interpretation of neural thought patterns.",
        images: [{ src: Playground5, title: "AI Dream", desc: "Neural pathways & artificial imagination." }],
      },
    ],
  },

  {
    id: 206,
    slug: "wild-and-free",
    title: "WILD & FREE",
    subtitle: "Rebellious Letters",
    category: "weird",
    filter: "type",
    image: Playground6,
    link: "/playground/wild-and-free",
    description: "A rebellious typography experiment.",
    client: "Creative Studio",
    services: "Typography, Visual Design",
    duration: "3 Days",
    year: "2024",
    tabs: [
      {
        label: "Typography",
        heading: "Uncontrolled Lettering",
        description: "Chaotic but expressive letter movements.",
        images: [{ src: Playground6, title: "Type Motion", desc: "Letters breaking design rules." }],
      },
    ],
  },

  {
    id: 207,
    slug: "dreamscape-architecture",
    title: "Dreamscape Architecture",
    subtitle: "Building in the impossible",
    category: "experimental",
    filter: "3d",
    image: Playground7,
    link: "/playground/dreamscape-architecture",
    description: "Architectural concepts that defy physics.",
    client: "Concept Architect",
    services: "3D Art, Concept Design",
    duration: "6 Days",
    year: "2024",
    tabs: [
      {
        label: "3D Art",
        heading: "Impossible Structures",
        description: "Visualizing dream-driven structures.",
        images: [{ src: Playground7, title: "Architecture Concept", desc: "Dreamlike impossible buildings." }],
      },
    ],
  },

  {
    id: 208,
    slug: "liquid-thoughts",
    title: "Liquid Thoughts",
    subtitle: "Consciousness in motion",
    category: "unconventional",
    filter: "glitch",
    image: Playground8,
    link: "/playground/liquid-thoughts",
    description: "Fluid expressions of consciousness.",
    client: "Self Project",
    services: "Abstract Art",
    duration: "2 Days",
    year: "2025",
    tabs: [
      {
        label: "Fluid Design",
        heading: "Flow of Mind",
        description: "Liquid forms representing deep thought.",
        images: [{ src: Playground8, title: "Liquid Concept", desc: "Smooth flowing shapes & reflections." }],
      },
    ],
  },
];
