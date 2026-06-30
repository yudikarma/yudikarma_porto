import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Update the Personal Projects highlights item referencing Wedly Finance
const oldHighlight = '"Designed Wedly Finance React wedding budget planner, implementing instant offline-first localStorage database backups.",';
const newHighlight = '"Designed Wedly Finance Editorial Wedding Management Platform, implementing a dual-role React 18 / TypeScript architecture with interactive timeline builders and state-driven vendor comparison matrices.",';

if (content.includes(oldHighlight)) {
  content = content.replace(oldHighlight, newHighlight);
  console.log('Updated experience highlight for Wedly Finance.');
} else {
  console.log('Could not find Wedly Finance experience highlight to update.');
}

// 2. Update the main Wedly Finance project entry
const oldProjectBlock = `      {
        name: "Wedly Finance",
        tech: ["React", "Tailwind CSS", "Financial Planning"],
        desc: "An offline-first React web application that serves as a wedding budget planner, allowing couples to track costs, manage vendor milestones, and sync data securely to localStorage.",
        collaborators: ["Solo Creator"],
        technicalDoc: "Designed modular reactive structures with local state sync to guarantee persistent client-side caching. Built real-time pricing estimators and comparative dashboard charts using lightweight state logic.",
        thumbnail: "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183344.webp",
        category: "Fintech & Security",
        images: [
          "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183344.webp",
          "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183540.webp",
          "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183742.webp",
          "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183850.webp"
        ],
        demoUrl: "https://wedly-finance.web.app"
      }`;

const newProjectBlock = `      {
        name: "Wedly Finance (Editorial Wedding Management Platform)",
        tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        desc: "An elegant, single-page web application featuring a dual-role interface. Planner Mode provides guest registries, visual timelines, and interactive vendor comparison dashboards, while Guest Mode serves as a personalized digital invitation and seating directory.",
        collaborators: ["Solo Creator"],
        technicalDoc: "Engineered a dual-role React 18 & TypeScript architecture featuring a toggle between administrative planning tools and a personalized guest portal. Developed a zero-dependency vendor analytics matrix utilizing React state math to drive responsive CSS-based comparison charts. Built an editorial event timeline creator and a real-time guest registry with instant client-side filtering and table assignment logic. Crafted a premium 'editorial botanical' UI using serif typography and fluid Framer Motion animations.",
        thumbnail: "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183344.webp",
        category: "Fintech & Security",
        images: [
          "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183344.webp",
          "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183540.webp",
          "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183742.webp",
          "/assets/compressed/wedly_finance/Screenshot 2026-06-29 183850.webp"
        ],
        demoUrl: "https://wedly-finance.web.app"
      }`;

if (content.includes(oldProjectBlock)) {
  content = content.replace(oldProjectBlock, newProjectBlock);
  console.log('Updated Wedly Finance project details.');
} else {
  console.log('Could not find Wedly Finance project block in App.tsx');
}

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('App.tsx Wedly Finance details updated successfully!');
