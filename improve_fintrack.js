import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Update the Personal Projects highlights item referencing FinTrack
const oldHighlight = '"Created FinTrack native personal budget assistant using Clean Architecture and local SQLite transaction models.",';
const newHighlight = '"Created FinTrack full-stack personal budget manager using React 19, Node.js, Firebase, and Google Gemini API for smart AI receipt parsing.",';

if (content.includes(oldHighlight)) {
  content = content.replace(oldHighlight, newHighlight);
  console.log('Updated experience highlight for FinTrack.');
} else {
  console.log('Could not find FinTrack experience highlight to update.');
}

// 2. Update the main FinTrack project entry
const oldProjectBlock = `      {
        name: "FinTrack",
        tech: ["Kotlin", "SQLite", "Clean Architecture"],
        desc: "A native Android personal finance application with Clean Architecture and SQLite, featuring multi-account tracking, detailed spending charts, and dynamic recurring transaction management.",
        collaborators: ["Solo Creator"],
        technicalDoc: "Architected utilizing a Room-inspired SQL wrapper for native performance. Built robust database migrations and designed modular repositories separating synchronization pipelines from UI logic.",
        thumbnail: "/assets/compressed/fintrack/Screenshot 2026-06-29 181223.webp",
        category: "Fintech & Security",
        images: [
          "/assets/compressed/fintrack/Screenshot 2026-06-29 181223.webp",
          "/assets/compressed/fintrack/Screenshot 2026-06-29 181252.webp",
          "/assets/compressed/fintrack/Screenshot 2026-06-29 181313.webp",
          "/assets/compressed/fintrack/Screenshot 2026-06-29 181450.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.yudikarma.fintrack"
      }`;

const newProjectBlock = `      {
        name: "FinTrack",
        tech: ["React", "Node.js", "Firebase", "Gemini API"],
        desc: "A comprehensive, full-stack personal finance and budget management application featuring a visual dashboard, an AI-powered receipt scanner, real-time budgeting alerts, and integrations with Google Workspace.",
        collaborators: ["Solo Creator"],
        technicalDoc: "Architected a full-stack dashboard utilizing React 19, Vite, and Tailwind CSS v4. Developed a custom Node.js and Express backend integrated with Firebase Firestore and Authentication. Embedded Google Gemini API (@google/genai) to power an AI-powered receipt scanner and financial assistant. Integrated Google Workspace APIs (Sheets & Calendar) to export formatted transaction sheets and sync bill reminders. Implemented zero-dependency client-side PDF generation using jsPDF.",
        thumbnail: "/assets/compressed/fintrack/Screenshot 2026-06-29 181223.webp",
        category: "Fintech & Security",
        images: [
          "/assets/compressed/fintrack/Screenshot 2026-06-29 181223.webp",
          "/assets/compressed/fintrack/Screenshot 2026-06-29 181252.webp",
          "/assets/compressed/fintrack/Screenshot 2026-06-29 181313.webp",
          "/assets/compressed/fintrack/Screenshot 2026-06-29 181450.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.yudikarma.fintrack"
      }`;

if (content.includes(oldProjectBlock)) {
  content = content.replace(oldProjectBlock, newProjectBlock);
  console.log('Updated FinTrack project details.');
} else {
  console.log('Could not find FinTrack project block in App.tsx');
}

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('App.tsx FinTrack details updated successfully!');
