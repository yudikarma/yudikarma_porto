import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Update the Personal Projects highlights item referencing Warkop Modern
const oldHighlight = '"Engineered Warkop Modern, an offline-first Flutter POS solution custom-optimized for low-end Android devices with receipt exports.",';
const newHighlight = '"Engineered Warkop Modern POS, a full-stack Laravel 12 multi-tenant coffee shop ordering platform featuring role-based access controls and encrypted QR table-ordering.",';

if (content.includes(oldHighlight)) {
  content = content.replace(oldHighlight, newHighlight);
  console.log('Updated experience highlight for Warkop Modern.');
} else {
  console.log('Could not find Warkop Modern experience highlight to update.');
}

// 2. Update the main Warkop Modern project entry
const oldProjectBlock = `      {
        name: "Warkop Modern",
        tech: ["Flutter", "Dart", "POS & Inventory"],
        desc: "An offline-first Flutter point-of-sale (POS) and inventory management app designed for local street-side coffee shops, featuring receipt invoice exports and offline database backups.",
        collaborators: ["Solo Creator"],
        technicalDoc: "Leveraged Flutter's reactive framework with offline-first local state storage. Optimized item search queries and integrated receipt mockup layout exports for digital invoicing.",
        thumbnail: "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.50.webp",
        category: "Operations & Utilities",
        images: [
          "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.50.webp",
          "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.50 (1).webp",
          "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.50 (2).webp",
          "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.51.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.yudikarma.warkopmodern"
      }`;

const newProjectBlock = `      {
        name: "Warkop Modern POS",
        tech: ["Laravel", "PHP", "Tailwind CSS", "SQLite"],
        desc: "A full-stack, multi-tenant Point of Sale (POS) and self-service QR ordering platform designed for modern cafes and coffee shops, featuring role-based access control, multi-outlet data scoping, and dynamic product customization.",
        collaborators: ["Solo Creator"],
        technicalDoc: "Architected a multi-tenant POS SaaS utilising Laravel 12 and PHP 8.2+. Engineered self-service table ordering using encrypted QR tokens generated via bacon/bacon-qr-code to prevent URL tampering. Implemented dynamic pricing calculations for product customization in Vanilla JS. Designed hierarchical Role-Based Access Control (RBAC) and data-scoped multi-outlet query boundaries. Crafted a modern glassmorphic interface using Laravel Blade and TailwindCSS v4.",
        thumbnail: "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.50.webp",
        category: "Operations & Utilities",
        images: [
          "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.50.webp",
          "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.50 (1).webp",
          "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.50 (2).webp",
          "/assets/compressed/wakrop_modern/WhatsApp Image 2026-06-29 at 18.04.51.webp"
        ],
        demoUrl: ""
      }`;

if (content.includes(oldProjectBlock)) {
  content = content.replace(oldProjectBlock, newProjectBlock);
  console.log('Updated Warkop Modern project details.');
} else {
  console.log('Could not find Warkop Modern project block in App.tsx');
}

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('App.tsx Warkop Modern details updated successfully!');
