import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

let content = fs.readFileSync(APP_PATH, 'utf8');

// 1. Remove Dynatrace project block (including trailing comma)
const dynatraceBlock = `      {
        name: "Enterprise APM Integration - Dynatrace",
        tech: ["Dynatrace APM", "Monitoring", "Telemetry"],
        desc: "Implemented application performance monitoring and telemetry pipelines using Dynatrace to ensure 99.99% availability for enterprise banking applications.",
        collaborators: ["Phintraco DevOps Team", "Bank BJB Infrastructure Team", "Dynatrace Support"],
        technicalDoc: "Configured real-user monitoring (RUM), dynamic request tracing, crash reporting, and threshold-based alerts. Set up performance dashboards to monitor API latency, network request failure rates, and memory utilization across production banking apps.",
        thumbnail: "https://picsum.photos/seed/dynatrace-apm/800/600",
        category: "Operations & Utilities",
        images: [
          "https://picsum.photos/seed/dynatrace-apm/800/600",
          "https://picsum.photos/seed/dynatrace-2/800/600",
          "https://picsum.photos/seed/dynatrace-3/800/600"
        ],
        playStoreUrl: ""
      },`;

if (content.includes(dynatraceBlock)) {
  content = content.replace(dynatraceBlock, '');
  console.log('Successfully removed Dynatrace project.');
} else {
  console.error('Could not find Dynatrace project block to remove.');
}

// 2. Update Tetherfi project to show compressed webp images and add actual playStoreUrl
const oldTetherfiBlock = `      {
        name: "Enterprise Chat - Tetherfi Integration",
        tech: ["Tetherfi SDK", "WebRTC", "Customer Engagement"],
        desc: "Integrated Tetherfi customer engagement SDKs within secure mobile banking apps, enabling smooth customer-to-agent session handoffs.",
        collaborators: ["Phintraco Solutions Team", "Tetherfi Technical Support", "QA Engineers"],
        technicalDoc: "Configured secure websocket session handoffs, interactive real-time messaging, custom notification queues, and customized UI styles to match banking brand guidelines.",
        thumbnail: "https://picsum.photos/seed/tetherfi-chat/800/600",
        category: "VoIP & Social",
        images: [
          "https://picsum.photos/seed/tetherfi-chat/800/600",
          "https://picsum.photos/seed/tetherfi-2/800/600",
          "https://picsum.photos/seed/tetherfi-3/800/600"
        ],
        playStoreUrl: ""
      }`;

const newTetherfiBlock = `      {
        name: "Enterprise Chat - Tetherfi Integration",
        tech: ["Tetherfi SDK", "WebRTC", "Customer Engagement"],
        desc: "Integrated Tetherfi customer engagement SDKs within secure mobile banking apps, enabling smooth customer-to-agent session handoffs.",
        collaborators: ["Phintraco Solutions Team", "Tetherfi Technical Support", "QA Engineers"],
        technicalDoc: "Configured secure websocket session handoffs, interactive real-time messaging, custom notification queues, and customized UI styles to match banking brand guidelines.",
        thumbnail: "/assets/compressed/tetherfi/WhatsApp Image 2026-06-30 at 10.41.41.webp",
        category: "VoIP & Social",
        images: [
          "/assets/compressed/tetherfi/WhatsApp Image 2026-06-30 at 10.41.41.webp",
          "/assets/compressed/tetherfi/WhatsApp Image 2026-06-30 at 10.51.57.webp",
          "/assets/compressed/tetherfi/Screenshot_2020-05-20-22-13-41-225_com.centratamagroup.bm.centratamagroup_bm_staff.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.centratamagroup.bm.centratamagroup_bm_staff"
      }`;

if (content.includes(oldTetherfiBlock)) {
  content = content.replace(oldTetherfiBlock, newTetherfiBlock);
  console.log('Successfully updated Tetherfi integration project.');
} else {
  console.error('Could not find Tetherfi project block to update.');
}

// 3. Update Promise project to specify Internship
const oldPromiseBlock = `      {
        name: "Promise",
        tech: ["Manual Testing", "Automated Testing", "Bug Tracking"],
        desc: "Performed manual and automated testing, designed test plans, and conducted regression, integration, and UAT testing.",
        collaborators: ["Senior QA Analysts", "DevOps Engineers"],
        technicalDoc: "Designed comprehensive test scripts covering edge cases in the e-procurement lifecycle. Utilized bug tracking software to document defects systematically. Contributed to the transition towards automated UI testing frameworks.",
        thumbnail: "/assets/compressed/promise/procurement-management-promise.webp",
        category: "QA & Edutech",
        images: [
          "/assets/compressed/promise/procurement-management-promise.webp",
          "/assets/compressed/promise/promise-lifecycle.webp",
          "/assets/compressed/promise/promise.webp"
        ],
        demoUrl: "https://mmi.co.id"
      }`;

const newPromiseBlock = `      {
        name: "Promise (Internship)",
        tech: ["Manual Testing", "Automated Testing", "Bug Tracking"],
        desc: "Performed manual and automated software quality testing during a 6-month QA internship, creating comprehensive test plans and regression suites.",
        collaborators: ["Senior QA Analysts", "DevOps Engineers"],
        technicalDoc: "Designed comprehensive test scripts covering edge cases in the e-procurement lifecycle. Utilized bug tracking software to document defects systematically. Contributed to the transition towards automated UI testing frameworks.",
        thumbnail: "/assets/compressed/promise/procurement-management-promise.webp",
        category: "QA & Edutech",
        images: [
          "/assets/compressed/promise/procurement-management-promise.webp",
          "/assets/compressed/promise/promise-lifecycle.webp",
          "/assets/compressed/promise/promise.webp"
        ],
        demoUrl: "https://mmi.co.id"
      }`;

if (content.includes(oldPromiseBlock)) {
  content = content.replace(oldPromiseBlock, newPromiseBlock);
  console.log('Successfully updated Promise project.');
} else {
  console.error('Could not find Promise project block to update.');
}

// 4. Update Personal Project descriptions to better represent the projects

// FinTrack description update
content = content.replace(
  'desc: "A cross-platform personal finance utility supporting multi-account tracking, detailed spending breakdowns, and dynamic recurring transaction management."',
  'desc: "A native Android personal finance application with Clean Architecture and SQLite, featuring multi-account tracking, detailed spending charts, and dynamic recurring transaction management."'
);

// Irvan Gold Roger description update
content = content.replace(
  'desc: "Designed and built a custom boutique brand application for \'Irvan Gold Roger\' featuring interactive lookbooks, curated product filtering, and custom order requests."',
  'desc: "A premium React Native lookbook and e-catalog application designed for the \'Irvan Gold Roger\' boutique brand, featuring curated product filters, high-performance image caching, and customized customer orders."'
);

// Wedly Finance description update
content = content.replace(
  'desc: "A responsive wedding budget planner that enables couples to calculate projected costs, track actual vendor payments, and optimize event logistics."',
  'desc: "An offline-first React web application that serves as a wedding budget planner, allowing couples to track costs, manage vendor milestones, and sync data securely to localStorage."'
);

// Warkop Modern description update
content = content.replace(
  'desc: "An offline-first point-of-sale (POS) and inventory application custom-designed to modernize Indonesian street-side coffee shops (Warkops)."',
  'desc: "An offline-first Flutter point-of-sale (POS) and inventory management app designed for local street-side coffee shops, featuring receipt invoice exports and offline database backups."'
);

// LogamHub description update
content = content.replace(
  'desc: "An elegant gold market tracking platform providing hourly asset pricing, custom metal volume calculators, and interactive investment estimators."',
  'desc: "A responsive React web portal that tracks real-time gold market feeds, providing hourly pricing updates, interactive Recharts dashboard visualizations, and custom metal volume estimators."'
);

fs.writeFileSync(APP_PATH, content, 'utf8');
console.log('All project details updated successfully!');
