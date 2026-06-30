import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Update Personal Projects highlights (remove the fourth LogamHub highlight bullet point)
const oldPersonalHighlights = `    highlights: [
      "Designed Wedly Finance Editorial Wedding Management Platform, implementing a dual-role React 18 / TypeScript architecture with interactive timeline builders and state-driven vendor comparison matrices.",
      "Created FinTrack full-stack personal budget manager using React 19, Node.js, Firebase, and Google Gemini API for smart AI receipt parsing.",
      "Engineered Warkop Modern POS, a full-stack Laravel 12 multi-tenant coffee shop ordering platform featuring role-based access controls and encrypted QR table-ordering.",
      "Launched LogamHub gold tracking web portal, integrating hourly asset pricing APIs, custom weight calculators, and interactive Recharts data panels."
    ],`;

const newPersonalHighlights = `    highlights: [
      "Designed Wedly Finance Editorial Wedding Management Platform, implementing a dual-role React 18 / TypeScript architecture with interactive timeline builders and state-driven vendor comparison matrices.",
      "Created FinTrack full-stack personal budget manager using React 19, Node.js, Firebase, and Google Gemini API for smart AI receipt parsing.",
      "Engineered Warkop Modern POS, a full-stack Laravel 12 multi-tenant coffee shop ordering platform featuring role-based access controls and encrypted QR table-ordering."
    ],`;

if (content.includes(oldPersonalHighlights)) {
  content = content.replace(oldPersonalHighlights, newPersonalHighlights);
  console.log('Successfully updated Personal Projects highlights.');
} else {
  console.error('Could not find Personal Projects highlights block in App.tsx');
}

// 2. Remove standalone LogamHub project from Personal Projects array
const logamHubProjectBlock = `      {
        name: "LogamHub",
        tech: ["Web Portal", "Market Feeds", "Gold Trading"],
        desc: "A responsive React web portal that tracks real-time gold market feeds, providing hourly pricing updates, interactive Recharts dashboard visualizations, and custom metal volume estimators.",
        collaborators: ["Solo Creator"],
        technicalDoc: "Integrated robust gold and precious metals pricing feeds. Handled caching policies using localStorage and built mathematical engines for precision gold trade calculations.",
        thumbnail: "https://picsum.photos/seed/logamhub/800/600",
        category: "Fintech & Security",
        images: [
          "https://picsum.photos/seed/logamhub/800/600",
          "https://picsum.photos/seed/logamhub-2/800/600",
          "https://picsum.photos/seed/logamhub-3/800/600"
        ],
        demoUrl: "https://logamhub.com"
      }`;

if (content.includes(logamHubProjectBlock)) {
  // Replace the block and the preceding comma if present (the previous block has a comma)
  content = content.replace(logamHubProjectBlock, '');
  console.log('Successfully removed standalone LogamHub project from Personal Projects.');
} else {
  console.error('Could not find standalone LogamHub project block to remove.');
}

// 3. Update Freelance Projects block details, highlights, and project entry
const oldFreelanceBlock = `  {
    company: "Freelance Projects",
    role: "Freelance Mobile & Full-Stack Developer",
    type: "Independent Consultant",
    period: "2020 — Present",
    description: "Collaborated directly with businesses and private clients to engineer custom digital solutions, boutique brand applications, and localized automation tools.",
    techStack: ["React Native", "Tailwind CSS", "Localized Messaging Queues", "Image Memory-Caching", "Apple & Play Store Deployments"],
    highlights: [
      "Collaborated with private boutique brand 'Irvan Gold Roger' to deploy a premium React Native lookbook app with curated filtering.",
      "Managed end-to-end client communications, from initial product requirement drafting to deployment on mobile storefronts.",
      "Implemented high-performance client-side image memory-caching to preserve fluid 60fps scrolling on heavy media pages."
    ],
    projects: [
      {
        name: "Irvan Gold Roger",
        tech: ["React Native", "Boutique Catalog", "Interactive Lookbook"],
        desc: "A premium React Native lookbook and e-catalog application designed for the 'Irvan Gold Roger' boutique brand, featuring curated product filters, high-performance image caching, and customized customer orders.",
        collaborators: ["Irvan (Client)", "UI/UX Designer"],
        technicalDoc: "Engineered high-performance image caching and fluid scrolling pipelines for media-heavy lookbooks. Created an optimized communication module using localized messaging queues and custom push notification structures.",
        thumbnail: "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.51 (1).webp",
        category: "Operations & Utilities",
        images: [
          "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.51 (1).webp",
          "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.51 (2).webp",
          "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.51.webp",
          "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.52 (1).webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.irvangoldroger"
      }
    ]
  }`;

const newFreelanceBlock = `  {
    company: "Freelance Projects",
    role: "Freelance Mobile & Full-Stack Developer",
    type: "Independent Consultant",
    period: "2020 — Present",
    description: "Collaborated directly with businesses and private clients to engineer custom digital solutions, boutique brand applications, and localized automation tools.",
    techStack: ["Kotlin", "Supabase", "WorkManager", "Jetpack Compose", "Android SDK", "Biometrics", "Room DB"],
    highlights: [
      "Partnered with private client to engineer LogamHub (formerly Irvan Gold Roger) native Kotlin Android app for gold transaction and inventory monitoring.",
      "Architected offline-first SQLite cache (Room) with dynamic background synchronization using WorkManager and Supabase BaaS.",
      "Integrated AndroidX Biometrics, Google Credential Manager, and CameraX ML Kit barcode scanning for high-security inventory workflows."
    ],
    projects: [
      {
        name: "LogamHub (formerly Irvan Gold Roger)",
        tech: ["Kotlin", "Jetpack Compose", "Supabase", "Node.js"],
        desc: "A modern, offline-first Android application designed for gold price tracking, transaction ledger management, and inventory auditing. Originally developed for a private client, the application is being expanded into a multi-tenant SaaS gold trading and tracking platform under the LogamHub brand.",
        collaborators: ["Irvan (Client)", "UI/UX Designer"],
        technicalDoc: "Architected a native offline-first Android application in Kotlin using Jetpack Compose (Material 3), MVVM, and Dagger Hilt. Implemented Room local caching and robust background synchronization using WorkManager. Developed dynamic data visualizations using Vico Compose for live gold price charts. Integrated Supabase SDK (Auth, Realtime, Database, Storage) alongside a custom Node.js backend. Enforced secure biometric authentication, Google Credential Manager login, and dynamic CameraX ML Kit barcode scanning.",
        thumbnail: "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.51 (1).webp",
        category: "Operations & Utilities",
        images: [
          "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.51 (1).webp",
          "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.51 (2).webp",
          "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.51.webp",
          "/assets/compressed/irvan_gold_roger/WhatsApp Image 2026-06-29 at 18.03.52 (1).webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.irvangoldroger"
      }
    ]
  }`;

if (content.includes(oldFreelanceBlock)) {
  content = content.replace(oldFreelanceBlock, newFreelanceBlock);
  console.log('Successfully updated Freelance Projects block.');
} else {
  console.error('Could not find Freelance Projects block in App.tsx');
}

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('App.tsx LogamHub / Irvan Gold Roger details updated successfully!');
