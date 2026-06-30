import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Fix ONE SPAN project tech stack spelling error (Mobile Securite Suite -> Mobile Security Suite)
content = content.replace('Mobile Securite Suite', 'Mobile Security Suite');

// 2. Update Zonapets Play Store package name to match the screenshot filename (es.hyrax.zonapets)
const oldZonapetsUrl = 'playStoreUrl: "https://play.google.com/store/apps/details?id=com.zonapets.app"';
const newZonapetsUrl = 'playStoreUrl: "https://play.google.com/store/apps/details?id=es.hyrax.zonapets"';
if (content.includes(oldZonapetsUrl)) {
  content = content.replace(oldZonapetsUrl, newZonapetsUrl);
}

// 3. Update Warung Babe project entry to use compressed local webp paths and corrected Play Store URL
const oldWarungBabeBlock = `      {
        name: "Warung Babe",
        tech: ["Native Android", "PPOB", "P2P Trading"],
        desc: "Created a merchant app empowering small businesses to sell PPOB products and trade gold peer-to-peer.",
        collaborators: ["Business Analysts", "Giropos Integration Team"],
        technicalDoc: "Built a native Android client featuring complex peer-to-peer trading interfaces. Interfaced securely with Giropos APIs for gold transactions. Handled concurrent state updates for real-time market pricing and user balances.",
        thumbnail: "https://picsum.photos/seed/warung-babe/800/600",
        category: "Fintech & Security",
        images: [
          "https://picsum.photos/seed/warung-babe/800/600",
          "https://picsum.photos/seed/warung-babe-2/800/600",
          "https://picsum.photos/seed/warung-babe-3/800/600"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.warungbabe.app"
      }`;

const newWarungBabeBlock = `      {
        name: "Warung Babe",
        tech: ["Native Android", "PPOB", "P2P Trading"],
        desc: "Created a merchant app empowering small businesses to sell PPOB products and trade gold peer-to-peer.",
        collaborators: ["Business Analysts", "Giropos Integration Team"],
        technicalDoc: "Built a native Android client featuring complex peer-to-peer trading interfaces. Interfaced securely with Giropos APIs for gold transactions. Handled concurrent state updates for real-time market pricing and user balances.",
        thumbnail: "/assets/compressed/warung_babe/Screenshot_2020-10-09-17-51-23-598_com.dekape.okbabe.webp",
        category: "Fintech & Security",
        images: [
          "/assets/compressed/warung_babe/Screenshot_2020-10-09-17-51-23-598_com.dekape.okbabe.webp",
          "/assets/compressed/warung_babe/Screenshot_2020-10-09-17-51-26-546_com.dekape.okbabe.webp",
          "/assets/compressed/warung_babe/IMG-20200303-WA0054.webp",
          "/assets/compressed/warung_babe/IMG-20200513-WA0004.webp",
          "/assets/compressed/warung_babe/IMG-20201019-WA0014.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.dekape.okbabe"
      }`;

if (content.includes(oldWarungBabeBlock)) {
  content = content.replace(oldWarungBabeBlock, newWarungBabeBlock);
  console.log('Warung Babe project entry updated successfully.');
} else {
  console.log('Could not find exact Warung Babe block in App.tsx');
}

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('App.tsx project details updated successfully!');
