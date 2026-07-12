import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  History, 
  Layers, 
  Award, 
  Linkedin, 
  Github,
  Globe, 
  Building2, 
  Smartphone, 
  Cpu, 
  ShieldCheck, 
  Code2,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Grid,
  ChevronLeft,
  ChevronRight,
  Quote,
  MessageSquare,
  ExternalLink,
  Database,
  Camera,
  Server,
  Search,
  Terminal,
  LineChart,
  Printer,
  FileText,
  Sun,
  Moon,
  ArrowRight,
  FileDown,
  Send,
  GraduationCap,
  BookOpen
} from 'lucide-react';

import { ImageWithPlaceholder } from './components/ImageWithPlaceholder';
import { Experience, Project } from './types';

const ContactModal = React.lazy(() => import('./components/ContactModal'));
const PrintModal = React.lazy(() => import('./components/PrintModal'));
const ProjectDetailsModal = React.lazy(() => import('./components/ProjectDetailsModal'));
const RecruiterConsole = React.lazy(() => import('./components/RecruiterConsole'));

const EXPERIENCES: Experience[] = [
  {
    company: "PT. Phintraco Technology",
    role: "Android Developer",
    type: "Enterprise Consultant",
    period: "Jun 2021 — Present",
    description: "Android Developer consultant for major financial institutions, specializing in banking applications, secure SDK integrations, APM tooling, and providing technical support for complex enterprise environments.",
    techStack: ["Kotlin", "Java", "Jetpack Compose", "DexGuard", "ONE SPAN Security", "Avaya SDK", "Tetherfi SDK", "Dynatrace APM", "WebRTC", "mTLS", "Symmetric Cryptography"],
    highlights: [
      "Engineered and maintained secure soft token application with cryptographic authentication algorithms for over 10M+ active banking users.",
      "Designed and delivered customized reference sample apps in Kotlin using Jetpack Compose UI alongside integration middleware for Avaya Elite WebRTC & Oceana SDK, showing clients how to adapt features to their business needs.",
      "Consulted leading national banks (BCA, Panin, BJB) on ONE SPAN Mobile Security Suite, providing production-ready Kotlin and Jetpack Compose sample applications to guide their custom security implementations.",
      "Integrated Dynatrace APM to set up Real User Monitoring (RUM), performance telemetry dashboards, and live crash-reporting alerts for core banking apps.",
      "Integrated and customized Tetherfi SDK, delivering secure Jetpack Compose UI sample apps to enable banks to build tailor-made digital customer engagement channels.",
      "Enforced enterprise-level application hardening utilizing DexGuard, dynamic obfuscation, root-detection, and secure mTLS connections."
    ],
    partnerProducts: [
      {
        name: "Avaya Elite WebRTC & Oceana SDK",
        tagline: "Omnichannel Communications & VoIP",
        description: "Enables secure native voice, video, and customer chat integrations in mobile banking environments with advanced SIP signaling and media stream tuning."
      },
      {
        name: "Dynatrace Performance Management",
        tagline: "Application Performance Monitoring (APM)",
        description: "Provides end-to-end transaction visibility, real-user monitoring (RUM), and AI-driven telemetry to identify bottleneck queries and mobile app crashes."
      },
      {
        name: "OneSpan Mobile Security Suite",
        tagline: "Multi-Factor Authentication & Cryptography",
        description: "Secures transactions with robust soft-tokens, biometric-binding, dynamic device fingerprinting, and application shielding (RASP)."
      },
      {
        name: "Tetherfi Omnichannel",
        tagline: "Secure Customer Experience & Chat",
        description: "Enables interactive native secure chat messaging, digital engagement channels, and dynamic agent routing integrated directly into mobile platforms."
      }
    ],
    projects: [
      {
        name: "BCA - keyBCA Individu & Bisnis",
        tech: ["Android", "Security", "Soft Token", "ONE SPAN Security", "DexGuard"],
        desc: "Developed and maintained a banking soft token application to help general and corporate users authenticate transactions securely.",
        collaborators: ["BCA Core Security Team", "QA Engineers", "Product Managers"],
        technicalDoc: "Implemented cryptographic token generation algorithms complying with banking standards. Integrated with internal BCA APIs using mTLS. Enforced code obfuscation using DexGuard to mitigate reverse engineering and tampering risks.",
        thumbnail: "/assets/compressed/keybca/Screenshot_2022-07-29-10-55-25-229_com.bca.keybca.webp",
        category: "Fintech & Security",
        images: [
          "/assets/compressed/keybca/Screenshot_2022-07-29-10-55-25-229_com.bca.keybca.webp",
          "/assets/compressed/keybca/Screenshot_2022-07-29-13-41-21-856_com.bca.keybca.webp",
          "/assets/compressed/keybca/Screenshot_2022-07-29-13-41-32-579_com.bca.keybca.webp",
          "/assets/compressed/keybca/Screenshot_2022-07-29-13-51-04-676_com.bca.keybca.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.bca.keybca"
      },
      {
        name: "Halo BCA & Wondr BNI - Avaya SDK",
        tech: ["Kotlin", "Jetpack Compose", "Avaya VOIP SDK", "WebRTC", "Oceana"],
        desc: "Technical consultant for Avaya Elite WebRTC & Oceana SDK integrations. Built reference sample apps in Kotlin and Jetpack Compose UI showing clients how to adapt features to their business needs.",
        collaborators: ["Avaya Global Support", "BNI Dev Team", "BCA Mobile Team"],
        technicalDoc: "Engineered customized sample applications in Kotlin using Jetpack Compose UI showcasing Avaya WebRTC capabilities and custom business workflows. Handled SIP/VoIP signaling, WebRTC audio/video streams, and provided exhaustive integration guides and troubleshooting playbooks.",
        thumbnail: "/assets/compressed/avaya/wondr1.webp",
        category: "VoIP & Social",
        images: [
          "/assets/compressed/avaya/wondr1.webp",
          "/assets/compressed/avaya/halobca1.webp",
          "/assets/compressed/avaya/halobca.webp",
          "/assets/compressed/avaya/avaya.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.bca"
      },
      {
        name: "Panin & BJB Bank - ONE SPAN Security",
        tech: ["Kotlin", "Jetpack Compose", "ONE SPAN SDK", "Mobile Security Suite"],
        desc: "Consulted development teams on integrating the ONE SPAN SDK, providing custom-built Kotlin and Jetpack Compose UI sample applications showing how to adapt secure authentication flows to their business requirements.",
        collaborators: ["ONE SPAN Engineers", "Panin Dev Team", "BJB Security Team"],
        technicalDoc: "Led the implementation of ONE SPAN Mobile Security Suite. Created full-featured sample apps in Kotlin and Jetpack Compose UI to guide banking clients on integrating multi-factor authentication, biometric binding, and device fingerprinting to comply with stringent financial regulatory requirements.",
        thumbnail: "/assets/compressed/onespan/authentication-suite.webp",
        category: "Fintech & Security",
        images: [
          "/assets/compressed/onespan/authentication-suite.webp",
          "/assets/compressed/onespan/onespan.webp",
          "/assets/compressed/onespan/social-homepage.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=id.co.bankbjb.bjbdigi"
      },

      {
        name: "Enterprise Chat - Tetherfi Integration",
        tech: ["Kotlin", "Jetpack Compose", "Tetherfi SDK", "WebRTC", "Customer Engagement"],
        desc: "Integrated Tetherfi customer engagement SDKs within secure mobile banking apps, delivering Kotlin and Jetpack Compose UI sample apps to enable banks to build custom engagement channels.",
        collaborators: ["Phintraco Solutions Team", "Tetherfi Technical Support", "QA Engineers"],
        technicalDoc: "Configured secure websocket session handoffs, interactive real-time messaging, custom notification queues, and customized Jetpack Compose UI styles to match banking brand guidelines.",
        thumbnail: "/assets/compressed/tetherfi/WhatsApp Image 2026-06-30 at 10.41.41.webp",
        category: "VoIP & Social",
        images: [
          "/assets/compressed/tetherfi/WhatsApp Image 2026-06-30 at 10.41.41.webp",
          "/assets/compressed/tetherfi/WhatsApp Image 2026-06-30 at 10.51.57.webp",
          "/assets/compressed/tetherfi/Screenshot_2020-05-20-22-13-41-225_com.centratamagroup.bm.centratamagroup_bm_staff.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.centratamagroup.bm.centratamagroup_bm_staff"
      }
    ]
  },
  {
    company: "PT. Derap Kreasi Persada",
    role: "Android Developer",
    type: "Full-Time Core Engineer",
    period: "Nov 2019 — Jun 2021",
    description: "Developed and maintained multiple mobile applications focused on fintech, e-commerce, and streamlined internal operations.",
    techStack: ["Kotlin", "Flutter", "Dart", "MVVM", "Clean Architecture", "WebSockets", "SQLite", "Google Maps SDK"],
    highlights: [
      "Architected Santriqu school fintech application using MVVM and Clean Architecture, integrating multiple secure local payment gateways for real-time transactions.",
      "Developed Yipy operations utility using Flutter, incorporating real-time complaint ticket tracking over WebSockets and offline-first database synchronization.",
      "Built Warung Babe P2P gold trading native client, optimizing reactive state updates to synchronize real-time gold trading feeds and post-office billing (PPOB)."
    ],
    projects: [
      {
        name: "Santriqu",
        tech: ["Kotlin", "MVVM", "Payment Gateways"],
        desc: "Maintained a Kotlin/MVVM app for school enrollments and financial transactions (PPOB, zakat, tuition, money transfers).",
        collaborators: ["Backend API Team", "UI/UX Designers", "School Administrators"],
        technicalDoc: "Architected the application using MVVM and Clean Architecture principles. Integrated multiple payment gateways for PPOB and tuition fee processing. Designed a modular codebase to separate core banking features from general utilities.",
        thumbnail: "/assets/compressed/santriqu/2 Onboarding.webp",
        category: "QA & Edutech",
        images: [
          "/assets/compressed/santriqu/2 Onboarding.webp",
          "/assets/compressed/santriqu/Pendaftaran.webp",
          "/assets/compressed/santriqu/Akademik.webp",
          "/assets/compressed/santriqu/Zakat.webp",
          "/assets/compressed/santriqu/Donasi.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=id.derap.santriqu"
      },
      {
        name: "Yipy",
        tech: ["Flutter", "Dart", "Operations"],
        desc: "Developed a Flutter application to streamline internal operations for security staff handling room complaints and food delivery.",
        collaborators: ["Operations Managers", "Flutter Dev Team"],
        technicalDoc: "Leveraged Flutter to deliver a cross-platform solution. Implemented real-time complaint tracking via WebSockets and integrated Google Maps APIs for internal delivery logistics. Optimized state management for robust offline capabilities.",
        thumbnail: "/assets/compressed/yipy/yipy1.webp",
        category: "Operations & Utilities",
        images: [
          "/assets/compressed/yipy/yipy1.webp",
          "/assets/compressed/yipy/yipy2.webp",
          "/assets/compressed/yipy/yipy3.webp",
          "/assets/compressed/yipy/yipy4.webp",
          "/assets/compressed/yipy/yipy5.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.yipy.centratamagroup.staff"
      },
      {
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
      }
    ]
  },
  {
    company: "PT. 107, BSD",
    role: "Android Developer",
    type: "Full-Time Mobile Developer",
    period: "Nov 2018 — Nov 2019",
    description: "Responsible for building specialized native applications, ranging from social networking to niche industrial utilities.",
    techStack: ["Android SDK", "Camera 1 API", "Camera 2 API", "EXIF Data", "Nested RecyclerView", "JSON REST APIs", "FCM Push Notifications"],
    highlights: [
      "Delivered Zonapets pet-lovers social network, optimizing media upload pipelines and implementing nested RecyclerView feed caching.",
      "Developed a specialized camera application for industrial snow removal workers in Japan directly with low-level Camera 1 and Camera 2 APIs, reverse-engineering code to handle device-specific kernel crashes.",
      "Integrated robust real-time notifications, local image compression algorithms, and multi-threaded background synchronization."
    ],
    projects: [
      {
        name: "Zonapets",
        tech: ["Social Media", "Media Sharing"],
        desc: "Developed a social media application for pet lovers with user profiles, friendship connections, and media sharing functionalities.",
        collaborators: ["iOS Developers", "Backend Engineers"],
        technicalDoc: "Implemented rich media uploading, compression, and caching strategies. Engineered complex nested RecyclerViews for the main feed, supporting various content types (images, videos, text). Integrated push notifications and real-time chat.",
        thumbnail: "/assets/compressed/zonapets/Screenshot_2019-10-02-14-50-11-580_es.hyrax.zonapets.webp",
        category: "VoIP & Social",
        images: [
          "/assets/compressed/zonapets/Screenshot_2019-10-02-14-50-11-580_es.hyrax.zonapets.webp",
          "/assets/compressed/zonapets/Screenshot_2019-10-02-14-50-18-477_es.hyrax.zonapets.webp",
          "/assets/compressed/zonapets/Screenshot_2019-10-02-14-50-29-586_es.hyrax.zonapets.webp",
          "/assets/compressed/zonapets/Screenshot_2019-10-02-14-53-22-644_es.hyrax.zonapets.webp"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=es.hyrax.zonapets"
      },
      {
        name: "Snow Remove - Camera",
        tech: ["Camera 1 API", "Camera 2 API", "Location Tagging"],
        desc: "Built a specialized camera application for industrial snow removal workers in Japan. Developed directly with low-level Camera 1 and Camera 2 APIs without modern AI assistance, meticulously reverse-engineering raw open-source code on GitHub and analyzing documentation to overcome unpredictable, device-specific kernel crashes and proprietary manufacturer hardware variances.",
        collaborators: ["Japanese Operations Team", "Hardware Engineers"],
        technicalDoc: "Developed directly with low-level Camera 1 and Camera 2 APIs without modern AI assistance, meticulously reverse-engineering raw open-source code on GitHub and analyzing documentation to overcome unpredictable, device-specific kernel crashes and proprietary manufacturer hardware variances. Engineered custom EXIF metadata injection to prevent upload fraud.",
        thumbnail: "https://picsum.photos/seed/snow-camera/800/600",
        category: "Operations & Utilities",
        images: [
          "https://picsum.photos/seed/snow-camera/800/600",
          "https://picsum.photos/seed/snow-camera-2/800/600",
          "https://picsum.photos/seed/snow-camera-3/800/600"
        ],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.snowremove.camera"
      }
    ]
  },
  {
    company: "PT. Mitra Mandiri Informatika",
    role: "QA - E-Procurement",
    type: "Internship (6 Months)",
    period: "2018",
    description: "6-month internship focused on software quality assurance and testing for enterprise e-procurement systems.",
    techStack: ["Manual Testing", "Regression Suites", "Integration Testing", "Jira Bug Tracking", "QA Test Scripting"],
    highlights: [
      "Authored comprehensive manual and automated test suites for enterprise e-procurement management systems.",
      "Constructed end-to-end regression scripts, systematically reporting and validating critical workflow bugs on Jira.",
      "Collaborated closely with lead DevOps and backend developers to streamline bug tracking lifecycles."
    ],
    projects: [
      {
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
      }
    ]
  },
  {
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
  },
  {
    company: "Personal Projects",
    role: "Independent Indie Maker",
    type: "Solo Engineering",
    period: "2021 — Present",
    description: "Conceived, architected, and deployed a suite of independent digital applications exploring financial planning, automated POS utilities, and e-commerce architectures.",
    techStack: ["React", "Kotlin", "Flutter", "SQLite Room", "Recharts / D3.js", "Offline-first LocalStorage Sync", "Responsive UI Layouts"],
    highlights: [
      "Designed Wedly Finance Editorial Wedding Management Platform, implementing a dual-role React 18 / TypeScript architecture with interactive timeline builders and state-driven vendor comparison matrices.",
      "Created FinTrack full-stack personal budget manager using React 19, Node.js, Firebase, and Google Gemini API for smart AI receipt parsing.",
      "Engineered Warkop Modern POS, a full-stack Laravel 12 multi-tenant coffee shop ordering platform featuring role-based access controls and encrypted QR table-ordering."
    ],
    projects: [
      {
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
      },
      {
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
      },
      {
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
      },

    ]
  }
];

const getTechIcon = (techName: string) => {
  const name = techName.toLowerCase();
  
  if (name.includes('android') || name.includes('kotlin') || name.includes('flutter') || name.includes('dart') || name.includes('mobile') || name.includes('ios')) {
    return Smartphone;
  }
  if (name.includes('security') || name.includes('token') || name.includes('onespan') || name.includes('dexguard') || name.includes('cryptography') || name.includes('mtls') || name.includes('testing') || name.includes('bug') || name.includes('qa')) {
    return ShieldCheck;
  }
  if (name.includes('database') || name.includes('sqlite') || name.includes('room') || name.includes('sync') || name.includes('localstorage')) {
    return Database;
  }
  if (name.includes('web portal') || name.includes('react') || name.includes('tailwind') || name.includes('globe')) {
    return Globe;
  }
  if (name.includes('camera') || name.includes('exif') || name.includes('image')) {
    return Camera;
  }
  if (name.includes('voip') || name.includes('webrtc') || name.includes('avaya') || name.includes('sip') || name.includes('websockets') || name.includes('operations')) {
    return Cpu;
  }
  if (name.includes('api') || name.includes('rest') || name.includes('fcm') || name.includes('push') || name.includes('payment') || name.includes('gateway') || name.includes('integration') || name.includes('ppob')) {
    return Server;
  }
  if (name.includes('architecture') || name.includes('mvvm') || name.includes('structure') || name.includes('design')) {
    return Layers;
  }
  if (name.includes('search') || name.includes('find') || name.includes('filter')) {
    return Search;
  }
  if (name.includes('chart') || name.includes('recharts') || name.includes('d3') || name.includes('rate') || name.includes('trading') || name.includes('market') || name.includes('gold') || name.includes('finance') || name.includes('planning') || name.includes('pos') || name.includes('inventory')) {
    return LineChart;
  }
  
  return Code2; // Fallback
};

const getIssuerLogo = (logoType: string, logoUrl?: string) => {
  if (logoUrl) {
    const isSized = logoUrl.includes('size/');
    const isBlob = logoUrl.endsWith('blob');
    const scaleClass = isSized ? 'scale-[1.0]' : (isBlob ? 'scale-[1.9]' : 'scale-[2.2]');
    const paddingClass = isSized ? 'p-2.5' : '';
    
    return (
      <div className={`w-16 h-16 rounded-xl bg-white border border-outline-variant/30 flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform ${paddingClass}`}>
        <img 
          src={logoUrl} 
          alt="" 
          className={`w-full h-full object-contain ${scaleClass}`} 
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }
  if (logoType === 'google-cloud') {
    return (
      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-outline-variant/40 flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform">
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-2.6-4.53-2.6-4.53z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            fill="#EA4335"
          />
        </svg>
      </div>
    );
  }
  if (logoType === 'dynatrace') {
    return (
      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform">
        <div className="absolute inset-0 bg-emerald-500/10 blur-md animate-pulse" />
        <svg viewBox="0 0 100 100" className="w-7 h-7 relative z-10">
          <path
            d="M50 15 C 31 15, 15 31, 15 50 C 15 69, 31 85, 50 85 C 69 85, 85 69, 85 50 C 85 40, 80 30, 72 24 L 62 34 C 67 38, 70 44, 70 50 C 70 61, 61 70, 50 70 C 39 70, 30 61, 30 50 C 30 39, 39 30, 50 30 L 50 15 Z"
            fill="#73B526"
          />
          <rect x="44" y="38" width="12" height="24" rx="2" fill="#73B526" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-outline-variant/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
      <Award className="w-6 h-6 text-primary" />
    </div>
  );
};

const ALL_PROJECTS = EXPERIENCES.flatMap(exp => {
  let projectType = "Corporate";
  if (exp.company === "Freelance Projects") {
    projectType = "Freelance";
  } else if (exp.company === "Personal Projects") {
    projectType = "Personal";
  }
  return exp.projects.map(proj => {
    let client = "";
    const name = proj.name.toLowerCase();
    
    if (name.includes("keybca")) {
      client = "PT. Bank Central Asia, Tbk. (BCA)";
    } else if (name.includes("halo bca") || name.includes("wondr")) {
      client = "Bank Central Asia (BCA) & Bank Negara Indonesia (BNI)";
    } else if (name.includes("panin") || name.includes("bjb")) {
      client = "Panin Bank & Bank BJB";
    } else if (name.includes("dynatrace") || name.includes("apm")) {
      client = "Bank BJB & Enterprise Clients";
    } else if (name.includes("tetherfi")) {
      client = "Partner/Financial Clients";
    } else if (name.includes("santriqu")) {
      client = "Islamic Boarding School Association";
    } else if (name.includes("yipy")) {
      client = "Yipy Property Management / Security Operations";
    } else if (name.includes("warung babe")) {
      client = "Warung Babe Gold & PPOB Merchants";
    } else if (name.includes("zonapets")) {
      client = "Zonapets Pet Lovers Community";
    } else if (name.includes("snow remove")) {
      client = "Japanese Field Operations (Hokkaido & Tohoku)";
    } else if (name.includes("promise")) {
      client = "E-Procurement Enterprise Clients";
    } else if (name.includes("irvan gold roger")) {
      client = "Irvan (Boutique Fashion Brand)";
    } else {
      client = "Personal / Solo Project";
    }

    return {
      ...proj,
      company: exp.company,
      role: exp.role,
      period: exp.period,
      projectType,
      client
    };
  });
});

const ENDORSEMENTS = [
  {
    name: "Heri Susanto",
    role: "Senior Solution Architect at PT. Phintraco Technology",
    relation: "Professional Supervisor",
    text: "Yudi is an exceptional Android Developer who excels at security SDK integrations. His work on keyBCA Individu & Bisnis soft token displayed deep technical competence, cryptographic precision, and an uncompromised commitment to banking-grade mobile security.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    name: "Irvan",
    role: "Founder, Irvan Gold Roger",
    relation: "Freelance Client",
    text: "Working with Yudi on our premium digital lookbook was an absolute pleasure. He transformed our complex catalogue layout requirements into a buttery-smooth React Native interface. Highly recommended for freelance mobile engineering!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    name: "Dr. Eng. Wahyu Pratama",
    role: "Academic Mentor & Lecturer at STMIK Nusa Mandiri",
    relation: "Academic Supervisor",
    text: "Throughout his academic tenure, Yudi demonstrated outstanding analytic prowess and a natural talent for mobile software engineering. His independent projects always reflected a high level of technical maturity, clean architecture, and practical execution.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

const SKILLS = [
  {
    category: "Languages & Frameworks",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    items: ["Kotlin", "Java", "Dart", "Flutter", "Android SDK"]
  },
  {
    category: "Architecture & Injection",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    items: ["Clean Architecture", "MVVM", "MVP", "Jetpack Components", "Dagger"]
  },
  {
    category: "Enterprise & Security Platforms",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    items: ["OneSpan Mobile Security Suite", "Avaya Elite WebRTC & Oceana SDK", "Tetherfi Omnichannel", "DexGuard (mTLS, RASP)"]
  },
  {
    category: "Observability & Tools",
    icon: <LineChart className="w-6 h-6 text-primary" />,
    items: ["Dynatrace APM (RUM & Telemetry)", "Retrofit", "SQLite"]
  }
];

const CERTS = [
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    start: "May 2025",
    expire: "May 2028",
    logoType: "google-cloud",
    logoUrl: "https://images.credly.com/size/128x128/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
    verificationUrl: "https://www.credly.com/badges/cb03f2e7-414a-40d5-bd19-06ae84a60b56"
  },
  {
    title: "Cloud Digital Leader",
    issuer: "Google Cloud",
    start: "Mar 2025",
    expire: "Mar 2028",
    logoType: "google-cloud",
    logoUrl: "https://images.credly.com/size/128x128/images/44994cda-b5b0-44cb-9a6d-d29b57163073/image.png",
    verificationUrl: "https://www.credly.com/badges/43242dc2-0bfb-483a-a24e-23473a8d97c2"
  },
  {
    title: "Dynatrace Associate",
    issuer: "Dynatrace",
    start: "Mar 2026",
    expire: "Mar 2028",
    logoType: "dynatrace",
    logoUrl: "https://images.credly.com/images/18125c52-ecb0-4971-bdc8-05af6c797fd8/linkedin_thumb_blob",
    verificationUrl: "https://www.credly.com/badges/8e0df7ac-f9ee-43c4-898f-8be35b06965c"
  },
  {
    title: "Avaya Infinity™ Design and Workflows",
    issuer: "Avaya",
    start: "Sep 2025",
    expire: "Never",
    logoType: "avaya",
    logoUrl: "https://images.credly.com/images/7fc45c91-dcb3-4611-bf0f-b2a560875811/linkedin_thumb_blob",
    verificationUrl: "https://www.credly.com/badges/7220b9c4-b6cd-4563-9aaf-17f7c3104853"
  },
  {
    title: "Dynatrace Essentials",
    issuer: "Dynatrace",
    start: "Mar 2026",
    expire: "Mar 2028",
    logoType: "dynatrace",
    logoUrl: "https://images.credly.com/images/6260bd98-5ea5-4e42-96bf-0bcea7f1a7df/linkedin_thumb_blob",
    verificationUrl: "https://www.credly.com/badges/f6c0d08a-ac58-44b3-9722-df7afeb0e233"
  }
];

const EDUCATIONS = [
  {
    school: "Politeknik Aceh",
    degree: "Informatic Engineering",
    period: "2015 — 2018",
    details: "Ask the Veterinarian Android app | GPA: 3.56/4.00"
  }
];

const NON_FORMAL = [
  {
    course: "Google Developer Kejar",
    institution: "Google x Dicoding",
    year: "2019"
  },
  {
    course: "Technical Support",
    institution: "Balai Pelatihan kerja",
    year: "2018"
  }
];



const staggerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14
    }
  }
};

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const modalContentPanelVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 18,
      staggerChildren: 0.06,
      delayChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: 20, 
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

const modalElementVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  }
};

const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : direction < 0 ? '-100%' : 0,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : direction > 0 ? '-100%' : 0,
    opacity: 0
  })
};

interface ProjectCardProps {
  proj: Project;
  isProjectMatch: boolean;
  onSelect: (proj: Project, initialImageIdx: number) => void;
  isRecruiterMode: boolean;
  recruiterHighlightTech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  proj,
  isProjectMatch,
  onSelect,
  isRecruiterMode,
  recruiterHighlightTech,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = proj.images && proj.images.length > 0 ? proj.images : (proj.thumbnail ? [proj.thumbnail] : []);

  const navigateCarousel = (newIdx: number, customDirection?: number) => {
    if (customDirection !== undefined) {
      setDirection(customDirection);
    } else {
      setDirection(newIdx > activeImageIdx ? 1 : -1);
    }
    setActiveImageIdx(newIdx);
  };

  const handleDragEnd = (e: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      // Swiped left -> next
      const newIdx = (activeImageIdx + 1) % images.length;
      navigateCarousel(newIdx, 1);
    } else if (info.offset.x > threshold) {
      // Swiped right -> prev
      const newIdx = (activeImageIdx - 1 + images.length) % images.length;
      navigateCarousel(newIdx, -1);
    }
  };

  return (
    <motion.div
      variants={staggerItemVariants}
      layout
      onClick={() => onSelect(proj, activeImageIdx)}
      className={`relative overflow-hidden flex flex-col h-full rounded-xl transition-all duration-300 ease-out cursor-pointer group ${
        isProjectMatch 
          ? 'bg-gradient-to-br from-white to-emerald-50/10 border-2 border-emerald-500 shadow-lg shadow-emerald-500/15 scale-[1.02] ring-4 ring-emerald-500/10' 
          : 'bg-white border border-outline-variant/60 shadow-sm hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-primary/50'
      }`}
    >
      {isProjectMatch && (
        <div className="absolute top-3 right-3 z-30 bg-emerald-500 text-white font-mono text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow flex items-center gap-1 animate-pulse">
          <span className="w-1.5 h-1.5 bg-white rounded-full" />
          Requirements Match
        </div>
      )}
      
      {/* Carousel Container */}
      <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 relative border-b border-outline-variant/30 group/carousel">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeImageIdx}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 w-full h-full"
          >
            <ImageWithPlaceholder 
              src={images[activeImageIdx]} 
              alt={`${proj.name} ${activeImageIdx + 1}`} 
              className="group-hover:scale-105 transition-transform duration-500"
              containerClassName="w-full h-full"
              category={proj.category}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md border border-outline-variant/40 px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm pointer-events-none">
          {proj.category}
        </div>

        {/* Carousel indicators & buttons */}
        {images.length > 1 && (
          <>
            {/* Dots indicators */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-25 flex gap-1.5 bg-slate-950/40 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-none">
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeImageIdx ? 'bg-white scale-110' : 'bg-white/55'
                  }`}
                />
              ))}
            </div>

            {/* Left and Right Nav Buttons (hidden by default, shown on hover in desktop, always visible on mobile) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIdx = (activeImageIdx - 1 + images.length) % images.length;
                navigateCarousel(newIdx, -1);
              }}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity flex items-center justify-center hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const newIdx = (activeImageIdx + 1) % images.length;
                navigateCarousel(newIdx, 1);
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 p-1.5 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-md md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity flex items-center justify-center hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </>
        )}
      </div>

      {/* Info Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 block">
          {proj.role} • {proj.company}
        </span>
        <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {proj.name}
        </h4>
        <p className="text-slate-700 text-sm mb-5 flex-1 leading-relaxed line-clamp-3">
          {proj.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-outline-variant/30">
          {proj.tech.map((t, k) => {
            const IconComponent = getTechIcon(t);
            const isPillMatch = isRecruiterMode && recruiterHighlightTech.some(highlight => 
              t.toLowerCase().includes(highlight.toLowerCase()) || 
              highlight.toLowerCase().includes(t.toLowerCase())
            );
            return (
              <span 
                key={k} 
                className={`inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded transition-colors border font-medium ${
                  isPillMatch 
                    ? 'bg-emerald-500/15 border-emerald-500 text-emerald-800 scale-105 ring-1 ring-emerald-500/20 font-bold' 
                    : 'bg-slate-50 border-outline-variant/40 text-slate-600 hover:bg-slate-100 text-opacity-100'
                }`}
              >
                {IconComponent && <IconComponent className={`w-3 h-3 ${isPillMatch ? 'text-emerald-600' : 'text-slate-500'}`} />}
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedProjectInitialImageIdx, setSelectedProjectInitialImageIdx] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const [campaignForm, setCampaignForm] = useState({ name: '', email: '', company: '', role: '', message: '' });
  const [isSubmittingCampaign, setIsSubmittingCampaign] = useState(false);
  const [campaignSuccess, setCampaignSuccess] = useState(false);

  const [galleryFilter, setGalleryFilter] = useState<string>('All');
  const [galleryScope, setGalleryScope] = useState<string>('All');
  const [experienceTab, setExperienceTab] = useState<'professional' | 'freelance' | 'personal'>('professional');

  const [scrolled, setScrolled] = useState(false);

  // Recruiter Suite and Personalized Direct PDF EXPORT States
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);
  const [recruiterName, setRecruiterName] = useState('');
  const [recruiterCompany, setRecruiterCompany] = useState('');
  const [recruiterHighlightTech, setRecruiterHighlightTech] = useState<string[]>([]);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  const handlePrint = () => {
    try {
      const isInIframe = window.self !== window.top;
      if (isInIframe) {
        setIsPrintModalOpen(true);
      } else {
        window.print();
      }
    } catch (e) {
      console.error(e);
      setIsPrintModalOpen(true);
    }
  };

  // Automatically propagate recruiter information into the direct campaign booking form
  useEffect(() => {
    if (isRecruiterMode) {
      setCampaignForm(prev => ({
        ...prev,
        name: recruiterName || prev.name,
        company: recruiterCompany || prev.company,
        message: recruiterName && recruiterCompany 
          ? `Hi Yudi! Let's schedule an engineering consultation regarding Android opportunities at ${recruiterCompany}.`
          : prev.message
      }));
    }
  }, [isRecruiterMode, recruiterName, recruiterCompany]);

  // Dynamic calculations for Project Gallery statistics
  const totalProjectsCount = ALL_PROJECTS.length;
  const corporateProjectsCount = ALL_PROJECTS.filter(p => p.projectType === 'Corporate').length;
  const freelanceProjectsCount = ALL_PROJECTS.filter(p => p.projectType === 'Freelance').length;
  const personalProjectsCount = ALL_PROJECTS.filter(p => p.projectType === 'Personal').length;

  const corporatePct = totalProjectsCount > 0 ? Math.round((corporateProjectsCount / totalProjectsCount) * 100) : 0;
  const freelancePct = totalProjectsCount > 0 ? Math.round((freelanceProjectsCount / totalProjectsCount) * 100) : 0;
  const personalPct = totalProjectsCount > 0 ? Math.round((personalProjectsCount / totalProjectsCount) * 100) : 0;

  const categoriesList = ['Fintech & Security', 'VoIP & Social', 'Operations & Utilities', 'QA & Edutech'];
  const categoryStats = categoriesList.map(cat => {
    const count = ALL_PROJECTS.filter(p => p.category === cat).length;
    const pct = totalProjectsCount > 0 ? Math.round((count / totalProjectsCount) * 100) : 0;
    return { name: cat, count, pct };
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['overview', 'credentials', 'stack', 'experience', 'gallery', 'endorsements', 'education'];
      const scrollPosition = window.scrollY + 250;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectProject = (proj: Project | null, initialImageIdx = 0) => {
    setSelectedProject(proj);
    setSelectedProjectInitialImageIdx(initialImageIdx);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    
    // Simulate API processing
    setTimeout(() => {
      setIsSubmittingContact(false);
      setSubmitSuccess(true);
      
      const text = encodeURIComponent(`Hi Yudi, I am ${contactForm.name} (${contactForm.email}).\n\n${contactForm.message}`);
      window.open(`https://wa.me/6282168004756?text=${text}`, '_blank');
      
      setTimeout(() => {
        setIsContactModalOpen(false);
        setSubmitSuccess(false);
        setContactForm({ name: '', email: '', message: '' });
      }, 2000);
    }, 800);
  };

  const handleCampaignSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingCampaign(true);
    
    setTimeout(() => {
      setIsSubmittingCampaign(false);
      setCampaignSuccess(true);
      
      const whatsappText = encodeURIComponent(`Hi Yudi! I am ${campaignForm.name} (${campaignForm.email}) representing ${campaignForm.company || 'our company'}.\n\nWe are looking to hire a ${campaignForm.role || 'Senior Android Engineer'} and would love to collaborate.\n\nProject/Message details:\n${campaignForm.message}`);
      window.open(`https://wa.me/6282168004756?text=${whatsappText}`, '_blank');
      
      setTimeout(() => {
        setCampaignSuccess(false);
        setCampaignForm({ name: '', email: '', company: '', role: '', message: '' });
      }, 3000);
    }, 800);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-on-surface selection:bg-primary/20">
      <div className="print:hidden flex flex-col min-h-screen w-full">
        {/* Top Navigation */}
      <header className={`fixed top-0 inset-x-0 h-16 lg:h-20 z-40 flex items-center justify-center transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' 
          : 'bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/30'
      }`}>
        <div className="w-full max-w-5xl px-6 md:px-12 flex items-center justify-between gap-4">
          {/* Logo & Name */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-primary font-display font-bold shadow-sm flex items-center justify-center hover:scale-105 hover:border-primary/50 hover:shadow-md transition-all duration-300">
              YK
            </div>
            <div>
              <div className="font-display text-base font-extrabold text-slate-900 dark:text-white tracking-tight leading-none flex items-center gap-1.5">
                Yudi Karma
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Available for opportunities" />
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary mt-1.5 leading-none">
                SOFTWARE ENGINEER
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-0.5 border border-outline-variant/30 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-900/60 backdrop-blur-sm rounded-full p-1 transition-all duration-300`}>
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'credentials', label: 'Certifications' },
              { id: 'stack', label: 'Tech Stack' },
              { id: 'experience', label: 'Experience' },
              { id: 'gallery', label: 'Projects' },
              { id: 'endorsements', label: 'References' },
              { id: 'education', label: 'Education' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                  activeSection === item.id 
                    ? 'bg-primary text-on-primary shadow-sm' 
                    : 'text-on-surface-variant hover:text-primary dark:text-slate-400 dark:hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls (Theme + Hamburger Menu) */}
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => setIsRecruiterMode(!isRecruiterMode)}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:scale-95 ${
                isRecruiterMode 
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100/80 shadow-emerald-100/50 dark:bg-emerald-950/20 dark:border-emerald-800 dark:text-emerald-400' 
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
              title="Toggle Recruiter Mode"
            >
              <Award className={`w-3.5 h-3.5 ${isRecruiterMode ? 'text-emerald-600 dark:text-emerald-400 animate-pulse' : 'text-primary'}`} />
              <span>Recruiter Mode</span>
            </button>
            <button 
              onClick={handlePrint} 
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-700 shadow-sm transition-all cursor-pointer active:scale-95 group dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
              title="Export PDF Resume"
            >
              <Printer className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
              <span>Export PDF</span>
            </button>
            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Switch Theme Mode"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-amber-400" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95 z-50 relative"
              title="Toggle Menu"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Dropdown Overlay */}
      <div className={`
        fixed inset-0 z-30 bg-white/98 backdrop-blur-md pt-24 pb-8 px-6 md:px-12 flex flex-col transform transition-all duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
      `}>
        <nav className="flex flex-col gap-2 mt-8 max-w-md mx-auto w-full">
          <button 
            onClick={() => { scrollToSection('overview'); setMobileMenuOpen(false); }} 
            className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all border ${
              activeSection === 'overview' 
                ? 'bg-slate-50 border-outline-variant/60 text-on-surface shadow-sm font-extrabold' 
                : 'bg-transparent border-transparent text-on-surface hover:bg-slate-50 hover:border-outline-variant/30'
            }`}
          >
            Overview <LayoutDashboard className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button 
            onClick={() => { scrollToSection('experience'); setMobileMenuOpen(false); }} 
            className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all border ${
              activeSection === 'experience' 
                ? 'bg-slate-50 border-outline-variant/60 text-on-surface shadow-sm font-extrabold' 
                : 'bg-transparent border-transparent text-on-surface hover:bg-slate-50 hover:border-outline-variant/30'
            }`}
          >
            Experience <History className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button 
            onClick={() => { scrollToSection('gallery'); setMobileMenuOpen(false); }} 
            className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all border ${
              activeSection === 'gallery' 
                ? 'bg-slate-50 border-outline-variant/60 text-on-surface shadow-sm font-extrabold' 
                : 'bg-transparent border-transparent text-on-surface hover:bg-slate-50 hover:border-outline-variant/30'
            }`}
          >
            Project Gallery <Grid className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button 
            onClick={() => { scrollToSection('credentials'); setMobileMenuOpen(false); }} 
            className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all border ${
              activeSection === 'credentials' 
                ? 'bg-slate-50 border-outline-variant/60 text-on-surface shadow-sm font-extrabold' 
                : 'bg-transparent border-transparent text-on-surface hover:bg-slate-50 hover:border-outline-variant/30'
            }`}
          >
            Certifications <Award className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button 
            onClick={() => { scrollToSection('stack'); setMobileMenuOpen(false); }} 
            className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all border ${
              activeSection === 'stack' 
                ? 'bg-slate-50 border-outline-variant/60 text-on-surface shadow-sm font-extrabold' 
                : 'bg-transparent border-transparent text-on-surface hover:bg-slate-50 hover:border-outline-variant/30'
            }`}
          >
            Tech Stack <Layers className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button 
            onClick={() => { scrollToSection('endorsements'); setMobileMenuOpen(false); }} 
            className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all border ${
              activeSection === 'endorsements' 
                ? 'bg-slate-50 border-outline-variant/60 text-on-surface shadow-sm font-extrabold' 
                : 'bg-transparent border-transparent text-on-surface hover:bg-slate-50 hover:border-outline-variant/30'
            }`}
          >
            Endorsements <MessageSquare className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button 
            onClick={() => { scrollToSection('education'); setMobileMenuOpen(false); }} 
            className={`w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all border ${
              activeSection === 'education' 
                ? 'bg-slate-50 border-outline-variant/60 text-on-surface shadow-sm font-extrabold' 
                : 'bg-transparent border-transparent text-on-surface hover:bg-slate-50 hover:border-outline-variant/30'
            }`}
          >
            Education <Award className="w-5 h-5 text-on-surface-variant" />
          </button>
          <button onClick={() => { setIsRecruiterMode(true); setMobileMenuOpen(false); }} className="w-full flex items-center justify-between p-4 rounded-xl text-lg font-bold text-slate-900 bg-emerald-50 border border-emerald-200 transition-all shadow-sm">
            Recruiter Mode 💼 <Award className="w-5 h-5 text-emerald-600" />
          </button>
          <button onClick={() => { handlePrint(); setMobileMenuOpen(false); }} className="w-full flex items-center justify-between p-4 mt-2 rounded-xl text-lg font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-outline-variant/50 transition-all shadow-sm">
            Export PDF Resume <Printer className="w-5 h-5 text-primary" />
          </button>
        </nav>
        
        <div className="mt-auto mb-12 pt-8 border-t border-outline-variant/40 max-w-md mx-auto w-full">
          <div className="flex justify-center gap-6">
            <a href="https://github.com/yudikarma" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-on-surface hover:text-primary hover:bg-slate-100 transition-all shadow-sm" title="GitHub Profile" aria-label="GitHub Profile">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/yudikarma" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-on-surface hover:text-primary hover:bg-slate-100 transition-all shadow-sm" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://yudikarma.page.link/6RQi" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-on-surface hover:text-primary hover:bg-slate-100 transition-all shadow-sm" aria-label="Personal Portfolio Website">
              <Globe className="w-5 h-5" />
            </a>
            <button onClick={() => setIsContactModalOpen(true)} className="p-3 rounded-full bg-slate-50 text-on-surface hover:text-primary hover:bg-slate-100 transition-all shadow-sm cursor-pointer" aria-label="Open Contact Form">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col pt-16 lg:pt-20">
        {isRecruiterMode && (
          <div className="mx-auto w-full max-w-5xl px-6 md:px-12 mt-6">
            <div className="bg-gradient-to-r from-emerald-500/10 to-primary/10 border border-emerald-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600">
                  <Award className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    Recruiter Suite Active 💼
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {recruiterName || recruiterCompany ? (
                      <>
                        Customized for <strong className="text-primary">{recruiterName || 'Guest'}</strong> {recruiterCompany && <>at <strong className="text-emerald-600">{recruiterCompany}</strong></>}
                      </>
                    ) : (
                      "Configure your requirements in the recruiter control panel to live-highlight matches."
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 relative z-10">
                <button 
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary text-white hover:bg-primary/95 text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Generate Customized PDF</span>
                </button>
                <button 
                  onClick={() => {
                    setIsRecruiterMode(false);
                    setRecruiterName('');
                    setRecruiterCompany('');
                    setRecruiterHighlightTech([]);
                  }}
                  className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold transition-all cursor-pointer"
                >
                  Disable
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex-1 p-6 md:p-12 lg:p-16 max-w-5xl mx-auto w-full flex flex-col gap-24">
          
          {/* Hero / Overview */}
          <motion.section 
            id="overview" 
            className="relative overflow-hidden py-12 md:py-16 px-8 md:px-12 rounded-3xl bg-white border border-outline-variant/60 shadow-md shadow-slate-100/50 scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Soft Ambient Glows */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2.5 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/30 px-3.5 py-1.5 rounded-full shadow-sm w-fit text-emerald-800 dark:text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-sans text-[10px] font-extrabold uppercase tracking-wider">AVAILABLE FOR OPPORTUNITIES</span>
                </div>
                {isRecruiterMode && (recruiterName || recruiterCompany) && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
                    <span>TAILORED ENGAGEMENT ACTIVE</span>
                  </motion.div>
                )}
              </div>

              {isRecruiterMode && (recruiterName || recruiterCompany) && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50/70 border border-emerald-100 p-4 rounded-2xl mb-6 text-xs text-emerald-800 flex items-start gap-3 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900 mb-0.5">Customized Executive Greeting:</span>
                    Hi <strong className="font-bold text-primary">{recruiterName || 'Guest'}</strong>! This portfolio is dynamically customized to show how my 8+ years of secure Android expertise, enterprise SDK integrations, and mobile cryptography align with your mission at <strong className="font-bold text-emerald-700">{recruiterCompany || 'your team'}</strong>.
                  </div>
                </motion.div>
              )}
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-6 leading-[1.1] tracking-tight text-balance">
                Building Resilient <br className="hidden md:block" />
                Mobile Architecture.
              </h1>
              
              <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-10 text-balance">
                I am an experienced Android Developer specializing in high-performance applications, security SDK integrations, and technical consultation for enterprise-grade financial systems. Bridging the gap between robust engineering and modern product development.
              </p>

              {/* Professional Engineering Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 p-6 bg-slate-50 border border-outline-variant/40 rounded-2xl">
                <div>
                  <div className="font-display text-2xl md:text-3xl font-black text-primary">8+ Years</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">Mobile Engineering</div>
                </div>
                <div>
                  <div className="font-display text-2xl md:text-3xl font-black text-on-surface">20+ Apps</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">Shipped & Maintained</div>
                </div>
                <div>
                  <div className="font-display text-2xl md:text-3xl font-black text-on-surface">99.9%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">Crash-Free Rate</div>
                </div>
                <div>
                  <div className="font-display text-2xl md:text-3xl font-black text-on-surface">30M+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">Secure Users Served</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-outline-variant/30 pt-8 mt-6">
                {/* 1. Experience Widget */}
                <div 
                  className="flex items-center gap-4 p-3.5 bg-white border border-outline-variant/60 shadow-sm rounded-2xl cursor-pointer hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
                >
                  <div 
                    onClick={() => scrollToSection('experience')}
                    className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0" onClick={() => scrollToSection('experience')}>
                    <div className="text-[10px] font-bold text-on-surface uppercase tracking-wider">Work Experience</div>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {['Professional', 'Freelance', 'Personal'].map((tab) => {
                        const tabId = tab.toLowerCase().split(' ')[0] as any;
                        const isCurrent = experienceTab === tabId;
                        return (
                          <span 
                            key={tab}
                            onClick={(e) => {
                              e.stopPropagation();
                              setExperienceTab(tabId);
                              scrollToSection('experience');
                            }}
                            className={`px-2 py-0.5 rounded text-[8.5px] font-bold uppercase transition-all ${
                              isCurrent 
                                ? 'bg-primary text-on-primary shadow-sm' 
                                : 'bg-white text-on-surface-variant hover:text-on-surface border border-outline-variant/60'
                            }`}
                          >
                            {tab.split(' ')[0]}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-on-primary border border-primary transition-all duration-200 shrink-0 cursor-pointer active:scale-95"
                  >
                    EXPLORE
                  </button>
                </div>

                {/* 2. Resume PDF Widget */}
                <div 
                  onClick={handlePrint}
                  className="flex items-center gap-4 p-3.5 bg-white border border-outline-variant/60 shadow-sm rounded-2xl cursor-pointer hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <FileDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold text-on-surface uppercase tracking-wider">Executive Resume</div>
                    <p className="text-[11px] text-on-surface-variant/80 mt-0.5 leading-tight truncate">Print or export offline copy.</p>
                  </div>
                  <button 
                    className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-on-surface border border-outline-variant/60 transition-all duration-200 shrink-0 cursor-pointer active:scale-95"
                  >
                    EXPORT
                  </button>
                </div>

                {/* 3. Get In Touch Widget */}
                <div 
                  onClick={() => setIsContactModalOpen(true)}
                  className="flex items-center gap-4 p-3.5 bg-white border border-outline-variant/60 shadow-sm rounded-2xl cursor-pointer hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Send className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold text-on-surface uppercase tracking-wider">Direct Contact</div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">Available for secure Android contracts</span>
                    </div>
                  </div>
                  <button 
                    className="px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-on-surface border border-outline-variant/60 transition-all duration-200 shrink-0 cursor-pointer active:scale-95"
                  >
                    MESSAGE
                  </button>
                </div>

                {/* 4. Recruiter Suite Widget */}
                <div 
                  onClick={() => setIsRecruiterMode(true)}
                  className="flex items-center gap-4 p-3.5 bg-white border border-outline-variant/60 shadow-sm rounded-2xl cursor-pointer hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Award className={`w-5 h-5 ${isRecruiterMode ? 'animate-bounce text-emerald-500' : 'animate-pulse'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-bold text-on-surface uppercase tracking-wider">Recruiter Suite</div>
                    <div className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      {isRecruiterMode ? 'Tailored Profile ACTIVE ✨' : 'Live-match your requirements'}
                    </div>
                  </div>
                  <button 
                    className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer active:scale-95 border ${
                      isRecruiterMode 
                        ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-emerald-500' 
                        : 'bg-white hover:bg-slate-50 text-on-surface border-outline-variant/60'
                    }`}
                  >
                    {isRecruiterMode ? 'ACTIVE ✨' : 'CONFIGURE'}
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications (Moved to Top & UI Improved) */}
          <motion.section 
            id="credentials" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-10 border-b border-outline-variant/50 pb-4">
              <h2 className="font-display text-2xl font-bold text-on-surface">Elite Certifications</h2>
              <p className="text-on-surface-variant text-sm mt-1">Industry-standard credentials verifying my cloud architecture and system observability expertise.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CERTS.map((cert, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-white border border-outline-variant/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full pointer-events-none" />
                  
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      {getIssuerLogo(cert.logoType, cert.logoUrl)}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-100 border border-outline-variant/40 text-on-surface-variant">
                        {cert.issuer}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-on-surface text-base mb-3 leading-snug group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>

                    {/* Duration timeline */}
                    <div className="space-y-2 mb-6 bg-slate-50 border border-outline-variant/30 p-3.5 rounded-xl text-[11px] font-medium text-on-surface-variant">
                      <div className="flex justify-between items-center">
                        <span className="text-on-surface-variant/70">Issued:</span>
                        <span className="font-sans text-on-surface font-semibold">{cert.start}</span>
                      </div>
                      <div className="flex justify-between items-center border-t border-dashed border-outline-variant/40 pt-2">
                        <span className="text-on-surface-variant/70">Expires:</span>
                        <span className="font-sans text-on-surface font-semibold">{cert.expire}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end pt-3 border-t border-outline-variant/40">
                    {cert.verificationUrl && (
                      <a 
                        href={cert.verificationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-primary/20 hover:border-primary/80 bg-white hover:bg-primary text-[11px] font-bold text-primary hover:text-white dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-primary dark:hover:text-slate-950 rounded-lg shadow-sm transition-all duration-200"
                      >
                        Verify <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section 
            id="education" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-10 border-b border-outline-variant/50 pb-4">
              <h2 className="font-display text-2xl font-bold text-on-surface">Education</h2>
              <p className="text-on-surface-variant text-sm mt-1">Academic background and continuous professional development.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Formal Education */}
              {EDUCATIONS.map((edu, idx) => (
                <motion.div 
                  key={`formal-${idx}`} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  className="bg-white border border-outline-variant/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full pointer-events-none" />
                  
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary">
                        Formal
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-on-surface text-base mb-1 leading-snug group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-on-surface-variant text-sm font-medium mb-4">
                      {edu.school}
                    </div>

                    <div className="space-y-2 mb-6 bg-slate-50 border border-outline-variant/30 p-3.5 rounded-xl text-[11px] font-medium text-on-surface-variant">
                      <div className="flex justify-between items-center">
                        <span className="text-on-surface-variant/70">Period:</span>
                        <span className="font-sans text-on-surface font-semibold">{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-outline-variant/40">
                    <span className="text-[11px] text-on-surface-variant line-clamp-2">
                      {edu.details}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Non-Formal Education */}
              {NON_FORMAL.map((nf, idx) => (
                <motion.div 
                  key={`nonformal-${idx}`} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (EDUCATIONS.length + idx) * 0.08, ease: "easeOut" }}
                  className="bg-white border border-outline-variant/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-100 to-transparent rounded-bl-full pointer-events-none" />
                  
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-slate-100 group-hover:text-slate-700 transition-colors duration-300 border border-outline-variant/40">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-100 border border-outline-variant/40 text-on-surface-variant">
                        Non-Formal
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-on-surface text-base mb-1 leading-snug group-hover:text-primary transition-colors">
                      {nf.course}
                    </h3>
                    <div className="text-on-surface-variant text-sm font-medium mb-4">
                      {nf.institution}
                    </div>

                    <div className="space-y-2 mb-6 bg-slate-50 border border-outline-variant/30 p-3.5 rounded-xl text-[11px] font-medium text-on-surface-variant">
                      <div className="flex justify-between items-center">
                        <span className="text-on-surface-variant/70">Year:</span>
                        <span className="font-sans text-on-surface font-semibold">{nf.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Core Expertise / Tech Stack */}
          <motion.section 
            id="stack" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8 border-b border-outline-variant/50 pb-3 flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold text-on-surface">Core Expertise</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILLS.map((skillGroup, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="bg-white border border-outline-variant/60 rounded-xl p-6 hover:shadow-[0_4px_12px_rgba(32,33,36,0.05)] hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {skillGroup.icon}
                    </div>
                    <h3 className="font-bold text-lg text-on-surface">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-primary/5 dark:bg-primary/10 border border-primary/15 hover:border-primary/45 hover:bg-primary hover:text-on-primary text-primary rounded-full text-xs font-semibold px-3.5 py-1.5 transition-all duration-200 cursor-default select-none inline-block shadow-sm hover:shadow-[0_0_12px_rgba(0,91,191,0.15)] dark:hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Professional Experience */}
          <motion.section 
            id="experience" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-12 border-b border-outline-variant/50 pb-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-on-surface">Experience Timeline</h2>
                <p className="text-on-surface-variant text-sm mt-1">A curated summary of my professional, freelance, and personal engineering journey.</p>
              </div>
              
              {/* Sliding Pill Tabs */}
              <div className="flex bg-slate-100 p-1 rounded-xl border border-outline-variant/40 w-fit shrink-0 relative overflow-hidden">
                {[
                  { id: 'professional', label: 'Professional' },
                  { id: 'freelance', label: 'Freelance' },
                  { id: 'personal', label: 'Personal & Indie' }
                ].map((tab) => {
                  const isActive = experienceTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setExperienceTab(tab.id as any)}
                      className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer focus:outline-none ${
                        isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeExperienceTabIndicator"
                          className="absolute inset-0 bg-white rounded-lg shadow-sm border border-outline-variant/30 z-0"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="relative border-l-2 border-outline-variant/60 ml-4 md:ml-6 pb-4">
              {EXPERIENCES.filter(exp => {
                if (experienceTab === 'professional') {
                  return exp.company !== 'Freelance Projects' && exp.company !== 'Personal Projects';
                }
                if (experienceTab === 'freelance') {
                  return exp.company === 'Freelance Projects';
                }
                if (experienceTab === 'personal') {
                  return exp.company === 'Personal Projects';
                }
                return true;
              }).map((exp, index) => {
                const isExpMatch = isRecruiterMode && recruiterHighlightTech.length > 0 && exp.techStack.some(tech => 
                  recruiterHighlightTech.some(highlight => 
                    tech.toLowerCase().includes(highlight.toLowerCase()) || 
                    highlight.toLowerCase().includes(tech.toLowerCase())
                  )
                );

                return (
                  <motion.div 
                    key={exp.company} 
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    className="relative mb-16 last:mb-0 pl-8 md:pl-12 w-full"
                  >
                    {/* Timeline Node */}
                    <div className="absolute -left-[11px] top-6 w-5 h-5 bg-white border-2 border-primary rounded-full flex items-center justify-center ring-4 ring-slate-100">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className={`relative rounded-xl p-6 md:p-8 transition-all duration-300 ${
                      isExpMatch 
                        ? 'bg-gradient-to-br from-white to-emerald-50/10 border-2 border-emerald-500 shadow-lg shadow-emerald-500/10 ring-4 ring-emerald-500/10' 
                        : 'bg-white border border-outline-variant/60 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:border-primary/30'
                    }`}>
                      {isExpMatch && (
                        <span className="absolute top-4 right-4 bg-emerald-500 text-white font-mono text-[8.5px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow flex items-center gap-1.5 animate-pulse">
                          <span className="w-1.5 h-1.5 bg-white rounded-full" />
                          Requirements Match
                        </span>
                      )}
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-2xl font-bold text-on-surface">{exp.role}</h3>
                          {exp.type && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold tracking-wider uppercase bg-primary/5 text-primary border border-primary/20 shrink-0">
                              {exp.type}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-on-surface-variant">
                          <Building2 className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-sm">{exp.company}</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center justify-center bg-slate-100 border border-outline-variant/50 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-widest shrink-0 text-on-surface-variant">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* High-Impact Contributions & Achievements */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          Key Contributions & Achievements
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 text-xs text-on-surface-variant leading-relaxed">
                              <span className="text-teal-600 font-bold shrink-0 mt-0.5">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies & Tools */}
                    {exp.techStack && exp.techStack.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mb-2.5 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                          Technologies & Tools Utilized
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech, tIdx) => {
                            const isPillMatch = isRecruiterMode && recruiterHighlightTech.some(highlight => 
                              tech.toLowerCase().includes(highlight.toLowerCase()) || 
                              highlight.toLowerCase().includes(tech.toLowerCase())
                            );
                            return (
                              <span 
                                key={tIdx} 
                                className={`font-mono text-[10px] px-2 py-1 rounded transition-all shadow-sm font-medium border ${
                                  isPillMatch 
                                    ? 'bg-emerald-500/15 border-emerald-500 text-emerald-800 scale-105 ring-1 ring-emerald-500/20 font-bold' 
                                    : 'bg-slate-50 border-outline-variant/50 hover:border-primary/30 text-on-surface-variant'
                                }`}
                              >
                                {tech}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Partner Products / Vendor Integrations */}
                    {exp.partnerProducts && exp.partnerProducts.length > 0 && (
                      <div className="mb-8 pt-6 border-t border-outline-variant/30">
                        <div className="mb-4">
                          <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            Specialized Enterprise Platform Integrations
                          </h4>
                        </div>
                        <div className="space-y-4">
                          {exp.partnerProducts.map((prod, pIdx) => {
                            const isAvaya = prod.name.toLowerCase().includes("avaya");
                            const isDyna = prod.name.toLowerCase().includes("dynatrace");
                            const isOneSpan = prod.name.toLowerCase().includes("onespan");
                            const isTether = prod.name.toLowerCase().includes("tetherfi");

                            let icon = <Layers className="w-4 h-4" />;
                            let iconBgClasses = "bg-slate-50 border-slate-200 text-slate-600";

                            if (isAvaya) {
                              icon = <Phone className="w-4 h-4" />;
                              iconBgClasses = "bg-blue-50/50 border-blue-100 text-blue-600";
                            } else if (isDyna) {
                              icon = <LineChart className="w-4 h-4" />;
                              iconBgClasses = "bg-emerald-50/50 border-emerald-100 text-emerald-600";
                            } else if (isOneSpan) {
                              icon = <ShieldCheck className="w-4 h-4" />;
                              iconBgClasses = "bg-indigo-50/50 border-indigo-100 text-indigo-600";
                            } else if (isTether) {
                              icon = <MessageSquare className="w-4 h-4" />;
                              iconBgClasses = "bg-purple-50/50 border-purple-100 text-purple-600";
                            }

                            return (
                              <div 
                                key={pIdx} 
                                className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 py-3 border-b border-outline-variant/20 last:border-b-0"
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${iconBgClasses} shadow-sm`}>
                                  {icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                                    <h5 className="font-bold text-xs text-on-surface leading-snug">{prod.name}</h5>
                                    <span className="text-[9px] font-mono text-slate-400 font-medium">
                                      — {prod.tagline}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-on-surface-variant leading-relaxed">
                                    {prod.description}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {exp.projects && exp.projects.length > 0 && (
                      <div className="pt-6 border-t border-outline-variant/50">
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">Client Production Applications</h4>
                        <div className="flex flex-col gap-3">
                          {exp.projects.map((proj, pIdx) => (
                            <motion.div 
                              key={pIdx} 
                              onClick={() => handleSelectProject(proj)}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.4, delay: pIdx * 0.05 }}
                              className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-slate-50 border border-outline-variant/30 hover:border-primary/40 hover:bg-slate-100/50 transition-all cursor-pointer gap-4"
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                  <h5 className="font-bold text-on-surface text-sm group-hover:text-primary transition-colors">{proj.name}</h5>
                                </div>
                                <p className="text-on-surface-variant text-xs mt-1 leading-relaxed max-w-2xl">
                                  {proj.desc}
                                </p>
                              </div>
                              <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                <div className="flex flex-wrap gap-1.5">
                                  {proj.tech.map((t, k) => (
                                    <span key={k} className="font-mono text-[9px] bg-white border border-outline-variant/40 px-2 py-0.5 rounded text-on-surface-variant font-medium">
                                      {t}
                                    </span>
                                  ))}
                                </div>
                                <span className="text-[10px] font-bold text-primary bg-white group-hover:bg-primary group-hover:text-white dark:bg-slate-900 dark:group-hover:bg-primary dark:group-hover:text-slate-950 border border-primary/20 dark:border-slate-800 px-3 py-1.5 rounded-lg transition-all shadow-sm shrink-0">
                                  Specs →
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Project Gallery Showcase */}
          <motion.section 
            id="gallery" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-10 border-b border-outline-variant/50 pb-6 flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-bold text-on-surface">Interactive Project Gallery</h2>
                  <p className="text-on-surface-variant text-sm mt-1">A comprehensive showcase of engineering initiatives, SDK integrations, and specialized mobile utilities.</p>
                </div>
              </div>

              {/* Portfolio Metrics Panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                {/* 1. Total Projects Stat Card */}
                <div className="bg-white border border-outline-variant/60 rounded-xl p-5 shadow-sm flex flex-col justify-between group hover:border-primary/40 transition-colors">
                  <div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-2">Total Deliverables</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-display font-black text-primary tracking-tight">{totalProjectsCount}</span>
                      <span className="text-xs font-semibold text-on-surface-variant">Production Projects</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {corporateProjectsCount} Corporate
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      {freelanceProjectsCount} Freelance
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      {personalProjectsCount} Personal
                    </span>
                  </div>
                </div>

                {/* 2. Category Breakdown Chart Card */}
                <div className="bg-white border border-outline-variant/60 rounded-xl p-5 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-colors">
                  <div>
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest block mb-3">Breakdown by Specialization</span>
                    <div className="space-y-2.5">
                      {categoryStats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="text-[11px] font-semibold text-on-surface/90 truncate w-32 shrink-0">{stat.name}</span>
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-slate-900 rounded-full" 
                              style={{ width: `${stat.pct}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-mono text-on-surface-variant font-bold w-8 text-right shrink-0">{stat.count} ({stat.pct}%)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Dual Filter Control Panel */}
              <div className="bg-slate-50 border border-outline-variant/60 rounded-xl p-4 flex flex-col gap-4">
                {/* 1. Project Scope Filter */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest shrink-0 md:w-32">Project Scope:</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'All', label: 'All Projects' },
                      { id: 'Corporate', label: 'Corporate' },
                      { id: 'Freelance', label: 'Freelance' },
                      { id: 'Personal', label: 'Personal' }
                    ].map((scope) => (
                      <button
                        key={scope.id}
                        onClick={() => setGalleryScope(scope.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                          galleryScope === scope.id 
                            ? 'bg-primary border-primary text-white shadow-sm' 
                            : 'bg-white border-outline-variant/60 text-on-surface-variant hover:text-primary hover:border-primary/50'
                        }`}
                      >
                        {scope.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-outline-variant/40"></div>

                {/* 2. Specialization Filter */}
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest shrink-0 md:w-32">Specialization:</span>
                  <div className="flex flex-wrap gap-2">
                    {['All', 'Fintech & Security', 'VoIP & Social', 'Operations & Utilities', 'QA & Edutech'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setGalleryFilter(cat)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                          galleryFilter === cat 
                            ? 'bg-slate-900 border-slate-900 text-white shadow-sm' 
                            : 'bg-white border-outline-variant/60 text-on-surface-variant hover:text-slate-900 hover:border-slate-900/50'
                        }`}
                      >
                        {cat === 'All' ? 'All Tech Categories' : cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            {(() => {
              const filteredProjects = ALL_PROJECTS.filter(p => {
                const matchesScope = galleryScope === 'All' || p.projectType === galleryScope;
                const matchesCategory = galleryFilter === 'All' || p.category === galleryFilter;
                return matchesScope && matchesCategory;
              });
              
              const indieProjectNames = [
                'Warkop Modern POS', 
                'Wedly Finance (Editorial Wedding Management Platform)', 
                'FinTrack'
              ];
              const enterpriseProjects = filteredProjects.filter(p => !indieProjectNames.includes(p.name));
              const independentProjects = filteredProjects.filter(p => indieProjectNames.includes(p.name));

              if (filteredProjects.length > 0) {
                return (
                  <div className="space-y-12">
                    {/* Enterprise Projects */}
                    {enterpriseProjects.length > 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Enterprise & Core Systems</h4>
                        </div>
                        <motion.div 
                          key={`enterprise-${galleryScope}-${galleryFilter}`}
                          variants={staggerContainerVariants}
                          initial="hidden"
                          animate="show"
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                          {enterpriseProjects.map((proj) => {
                            const isProjectMatch = isRecruiterMode && recruiterHighlightTech.length > 0 && proj.tech.some(tech => 
                              recruiterHighlightTech.some(highlight => 
                                tech.toLowerCase().includes(highlight.toLowerCase()) || 
                                highlight.toLowerCase().includes(tech.toLowerCase())
                              )
                            );
                            return (
                              <ProjectCard
                                key={proj.name}
                                proj={proj}
                                isProjectMatch={isProjectMatch}
                                onSelect={(p, idx) => handleSelectProject(p, idx)}
                                isRecruiterMode={isRecruiterMode}
                                recruiterHighlightTech={recruiterHighlightTech}
                              />
                            );
                          })}
                        </motion.div>
                      </div>
                    )}

                    {/* Independent Projects */}
                    {independentProjects.length > 0 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2">
                          <span className="w-2 h-2 rounded-full bg-slate-400" />
                          <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Independent Projects</h4>
                        </div>
                        <motion.div 
                          key={`independent-${galleryScope}-${galleryFilter}`}
                          variants={staggerContainerVariants}
                          initial="hidden"
                          animate="show"
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                          {independentProjects.map((proj) => {
                            const isProjectMatch = isRecruiterMode && recruiterHighlightTech.length > 0 && proj.tech.some(tech => 
                              recruiterHighlightTech.some(highlight => 
                                tech.toLowerCase().includes(highlight.toLowerCase()) || 
                                highlight.toLowerCase().includes(tech.toLowerCase())
                              )
                            );
                            return (
                              <ProjectCard
                                key={proj.name}
                                proj={proj}
                                isProjectMatch={isProjectMatch}
                                onSelect={(p, idx) => handleSelectProject(p, idx)}
                                isRecruiterMode={isRecruiterMode}
                                recruiterHighlightTech={recruiterHighlightTech}
                              />
                            );
                          })}
                        </motion.div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-slate-50 border border-dashed border-outline-variant/80 rounded-2xl p-12 text-center max-w-xl mx-auto"
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 border border-outline-variant/40">
                    <Grid className="w-5 h-5 text-on-surface-variant" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-on-surface mb-1">No Projects Found</h3>
                  <p className="text-on-surface-variant text-sm">
                    There are no {galleryScope !== 'All' ? `${galleryScope} ` : ''}projects classified under "{galleryFilter}" at the moment. Try adjusting your filter parameters above.
                  </p>
                </motion.div>
              );
            })()}
          </motion.section>

          {/* Endorsements & Client Reviews */}
          <motion.section 
            id="endorsements" 
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8 border-b border-outline-variant/50 pb-4">
              <h2 className="font-display text-2xl font-bold text-on-surface">Endorsements & Reviews</h2>
              <p className="text-on-surface-variant text-sm mt-1">
                Feedback and professional recommendations from university mentors, boutique clients, and enterprise engineering supervisors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ENDORSEMENTS.map((endorsement, idx) => {
                // Determine pill badge colors based on relation
                let badgeStyle = "bg-blue-50 border-blue-200 text-blue-700";
                if (endorsement.relation === "Freelance Client") {
                  badgeStyle = "bg-amber-50 border-amber-200 text-amber-700";
                } else if (endorsement.relation === "Academic Supervisor") {
                  badgeStyle = "bg-purple-50 border-purple-200 text-purple-700";
                }

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white border border-outline-variant/60 rounded-xl p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-primary/30 transition-all flex flex-col justify-between relative overflow-hidden group"
                  >
                    {/* Top quote layout decoration */}
                    <div className="absolute right-6 top-6 text-slate-100 group-hover:text-primary/10 transition-colors">
                      <Quote className="w-12 h-12 transform rotate-180" />
                    </div>

                    <div className="flex-1 relative z-10">
                      {/* Relation Badge */}
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase border mb-4 ${badgeStyle}`}>
                        {endorsement.relation}
                      </span>
                      
                      {/* Message text */}
                      <p className="text-on-surface-variant text-sm italic leading-relaxed mb-6 text-slate-600">
                        "{endorsement.text}"
                      </p>
                    </div>

                    {/* Author block */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-outline-variant/40 mt-auto relative z-10">
                      <img
                        src={endorsement.avatar}
                        alt={endorsement.name}
                        className="w-10 h-10 rounded-full border border-outline-variant/40 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-bold text-on-surface text-sm">{endorsement.name}</h4>
                        <p className="text-[10.5px] font-medium text-on-surface-variant leading-tight mt-0.5">{endorsement.role}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>


        </div>

        {/* Dynamic Hiring Campaign & Interactive Contact Form */}
        <section id="hire-me" className="w-full bg-slate-900 text-slate-100 border-t border-slate-800 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
          {/* Subtle background abstract decorative elements to match corporate minimalism */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Bold Campaign Copywriting */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs font-bold tracking-[0.25em] text-emerald-400 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Now Open to Q3/Q4 Engagements
              </span>
              
              <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Secure your core <br className="hidden md:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-emerald-400 to-primary">mobile infrastructure.</span>
              </h2>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-light">
                You aren’t just looking for an Android developer. You are looking for an engineering partner to protect your transactions and power your digital customer relationships.
              </p>


            </div>

            {/* Right Column: High-converting interactive proposal form */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/80 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-md relative">
                {campaignSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 flex flex-col items-center justify-center gap-4"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-500/30">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">Engagement Initiated!</h3>
                    <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                      Your proposal has been compiled. You are being redirected to WhatsApp to send this brief directly to Yudi...
                    </p>
                    <span className="text-[10px] text-slate-500 font-mono mt-2">Opening secure messenger link...</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleCampaignSubmit} className="flex flex-col gap-4">
                    <div className="mb-2">
                      <h3 className="font-display text-xl font-bold text-white">Initiate Consultation</h3>
                      <p className="text-slate-400 text-xs mt-1">Submit your details to receive an executive briefing & schedule a call.</p>
                    </div>

                    <div>
                      <label htmlFor="camp-name" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Your Name</label>
                      <input 
                        type="text" 
                        id="camp-name"
                        required
                        value={campaignForm.name}
                        onChange={e => setCampaignForm({...campaignForm, name: e.target.value})}
                        className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="Jane Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="camp-email" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Work Email</label>
                        <input 
                          type="email" 
                          id="camp-email"
                          required
                          value={campaignForm.email}
                          onChange={e => setCampaignForm({...campaignForm, email: e.target.value})}
                          className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="jane@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="camp-company" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Company</label>
                        <input 
                          type="text" 
                          id="camp-company"
                          value={campaignForm.company}
                          onChange={e => setCampaignForm({...campaignForm, company: e.target.value})}
                          className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="PT. Financial Corp"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="camp-role" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Collaboration Intent</label>
                      <select 
                        id="camp-role"
                        value={campaignForm.role}
                        onChange={e => setCampaignForm({...campaignForm, role: e.target.value})}
                        className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                      >
                        <option value="Senior Solutions Architect (Full-Time)">Senior Solutions Architect (Full-Time)</option>
                        <option value="Enterprise Consulting Contract (Part-Time)">Enterprise Consulting Contract (Part-Time)</option>
                        <option value="Custom Vendor SDK Integration Project">Custom Vendor SDK Integration Project</option>
                        <option value="Mobile Security & RASP / Hardening Audit">Mobile Security & RASP / Hardening Audit</option>
                        <option value="VoIP WebRTC & Chat Implementation">VoIP WebRTC & Chat Implementation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="camp-msg" className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Brief Project Scope</label>
                      <textarea 
                        id="camp-msg"
                        required
                        rows={3}
                        value={campaignForm.message}
                        onChange={e => setCampaignForm({...campaignForm, message: e.target.value})}
                        className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        placeholder="Detail your requirements or technical challenges here..."
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmittingCampaign}
                      className="mt-2 w-full bg-primary text-white py-3 rounded-lg font-bold text-xs uppercase tracking-wider hover:bg-primary/95 transition-all shadow-md active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer border border-primary-light/10"
                    >
                      {isSubmittingCampaign ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                          Compiling Brief...
                        </>
                      ) : (
                        'Secure Architect Briefing'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto border-t border-outline-variant/60 bg-white py-8 px-6 md:px-12 w-full">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] font-bold tracking-widest uppercase text-on-surface-variant text-center md:text-left">
              © {new Date().getFullYear()} Yudi Karma. Built with Modern Corporate Minimalism.
            </p>
            <div className="flex gap-6 text-sm text-primary font-medium">
              <button onClick={() => setIsContactModalOpen(true)} className="hover:underline transition-all cursor-pointer">Contact</button>
              <a href="https://github.com/yudikarma" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">GitHub</a>
              <a href="https://linkedin.com/in/yudikarma" className="hover:underline transition-all">LinkedIn</a>
              <a href="https://yudikarma.page.link/6RQi" className="hover:underline transition-all">Portfolio</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <React.Suspense fallback={null}>
            <ContactModal 
              onClose={() => setIsContactModalOpen(false)}
              contactForm={contactForm}
              setContactForm={setContactForm}
              isSubmittingContact={isSubmittingContact}
              submitSuccess={submitSuccess}
              onSubmit={handleContactSubmit}
            />
          </React.Suspense>
        )}
      </AnimatePresence>

      {/* PDF Export Support Modal */}
      <AnimatePresence>
        {isPrintModalOpen && (
          <React.Suspense fallback={null}>
            <PrintModal onClose={() => setIsPrintModalOpen(false)} />
          </React.Suspense>
        )}
      </AnimatePresence>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <React.Suspense fallback={null}>
            <ProjectDetailsModal 
              selectedProject={selectedProject}
              initialImageIdx={selectedProjectInitialImageIdx}
              onClose={() => handleSelectProject(null)}
            />
          </React.Suspense>
        )}
      </AnimatePresence>

      {/* Floating Recruiter Suite Console */}
      <AnimatePresence>
        {isRecruiterMode && (
          <React.Suspense fallback={null}>
            <RecruiterConsole 
              onClose={() => setIsRecruiterMode(false)}
              recruiterName={recruiterName}
              setRecruiterName={setRecruiterName}
              recruiterCompany={recruiterCompany}
              setRecruiterCompany={setRecruiterCompany}
              recruiterHighlightTech={recruiterHighlightTech}
              setRecruiterHighlightTech={setRecruiterHighlightTech}
              onPrint={handlePrint}
            />
          </React.Suspense>
        )}
      </AnimatePresence>
    </div>
    {/* Printable Resume Document - EXACT CORPORATE ATS-FRIENDLY RESUME FORMAT */}
    <div className="hidden print:block w-full bg-white text-slate-900 font-sans p-2">
      {/* Dynamic Recruiter Header Add-on for PDF */}
      {isRecruiterMode && (recruiterName || recruiterCompany) && (
        <div className="mb-4 p-3 bg-slate-50 border border-slate-300 rounded-lg text-[9.5px] leading-relaxed text-slate-800">
          <span className="font-bold text-slate-900 uppercase tracking-wider block mb-0.5 text-[8px] text-emerald-700">Customized Dossier Summary:</span>
          Prepared specifically for <strong className="font-bold text-slate-950">{recruiterName || 'Guest Recruiter'}</strong> {recruiterCompany && <>at <strong className="font-bold text-slate-950">{recruiterCompany}</strong></>}. This profile dynamically highlights core mobile SDK engineering, high-security financial hardening (ONE SPAN, DexGuard), performance optimization (Dynatrace APM), and native VoIP systems (Avaya SDK) aligning with your technical roadmap.
        </div>
      )}

      {/* Print Header */}
      <div className="flex justify-between items-start border-b-2 border-slate-950 pb-4 mb-5">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-950">YUDI KARMA</h1>
          <p className="text-xs font-bold text-primary uppercase tracking-wider mt-1">
            Software Engineer
            {isRecruiterMode && recruiterCompany && <span className="text-slate-500 font-normal lowercase italic text-[11px]"> (Tailored for {recruiterCompany})</span>}
          </p>
        </div>
        <div className="text-right text-[10px] text-slate-700 space-y-0.5">
          <p className="font-semibold">yudikarmateknik@gmail.com</p>
          <p>github.com/yudikarma</p>
          <p>linkedin.com/in/yudikarma</p>
          <p>yudikarma.page.link/6RQi</p>
          <p>Jakarta Selatan, Indonesia</p>
        </div>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-3 gap-6 text-[10px]">
        {/* Left Column (1/3 Width): Skills, Certs, Education */}
        <div className="col-span-1 border-r border-slate-200 pr-5 space-y-5">
          
          {/* Core Skills */}
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">Core Expertise</h2>
            <div className="space-y-2.5">
              {SKILLS.map((grp, i) => (
                <div key={i} className="break-inside-avoid">
                  <h3 className="font-bold text-[8.5px] text-slate-500 uppercase tracking-wide mb-0.5">{grp.category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {grp.items.map((item, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-800 text-[8px] px-1.5 py-0.5 rounded font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">Certifications</h2>
            <div className="space-y-2">
              {CERTS.map((cert, i) => (
                <div key={i} className="break-inside-avoid bg-slate-50 border border-slate-200/60 p-2 rounded-lg">
                  <div className="font-bold text-[8.5px] text-slate-900 leading-tight">{cert.title}</div>
                  <div className="text-[8px] text-slate-600 mt-0.5">{cert.issuer}</div>
                  <div className="text-[7.5px] font-sans text-slate-500 mt-1 flex justify-between">
                    <span>Issued: {cert.start}</span>
                    <span>Expires: {cert.expire}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">Education</h2>
            <div className="space-y-2.5">
              {EDUCATIONS.map((edu, i) => (
                <div key={i} className="break-inside-avoid">
                  <div className="font-bold text-[8.5px] text-slate-900 leading-tight">{edu.degree}</div>
                  <div className="text-[8px] text-slate-700">{edu.school}</div>
                  <div className="text-[7.5px] text-slate-500 font-sans">{edu.period}</div>
                  <div className="text-[8px] text-slate-500 italic mt-0.5">{edu.details}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Formal */}
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">Courses</h2>
            <div className="space-y-1.5">
              {NON_FORMAL.map((nf, i) => (
                <div key={i} className="break-inside-avoid flex justify-between gap-2 text-[8px] text-slate-700 leading-tight">
                  <div>
                    <div className="font-bold text-slate-900">{nf.course}</div>
                    <div className="text-[7.5px] text-slate-500">{nf.institution}</div>
                  </div>
                  <span className="font-sans text-[7.5px] text-slate-500 shrink-0">{nf.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (2/3 Width): Summary & Work Experience */}
        <div className="col-span-2 space-y-5">
          
          {/* Summary */}
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">Professional Summary</h2>
            <p className="text-[9px] text-slate-700 leading-relaxed">
              Experienced and certified Software Engineer with over 8 years in the mobile engineering space. Specializes in building high-performance, secure mobile banking platforms, custom SDK developments, and robust VOIP/WebRTC communication implementations. Proven track record of consulting and shipping bulletproof solutions for tier-1 national banks and enterprise organizations.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">Work Experience</h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="break-inside-avoid">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[10px] text-slate-950">{exp.role}</h3>
                      <div className="text-[9px] font-semibold text-slate-700">{exp.company} <span className="text-[8px] font-normal text-slate-500 italic">({exp.type})</span></div>
                    </div>
                    <span className="font-sans text-[8px] text-slate-500 shrink-0">{exp.period}</span>
                  </div>
                  <p className="text-[8.5px] text-slate-600 mt-1 mb-1.5 italic">{exp.description}</p>
                  <ul className="list-disc pl-3.5 space-y-0.5 text-[8.5px] text-slate-700 leading-relaxed mb-1.5">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 items-center">
                    <span className="text-[7.5px] font-bold text-slate-500 mr-1 uppercase">Tech:</span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="bg-slate-100 text-slate-700 border border-slate-200 text-[7.5px] px-1 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="break-inside-avoid mt-5">
            <h2 className="text-[10px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">Professional Shipped Projects & Client Portfolio</h2>
            <div className="grid grid-cols-2 gap-3">
              {ALL_PROJECTS.filter(proj => proj.projectType !== 'Personal').map((proj, i) => {
                const isMatch = isRecruiterMode && recruiterHighlightTech.length > 0 && proj.tech.some(tech => 
                  recruiterHighlightTech.some(highlight => 
                    tech.toLowerCase().includes(highlight.toLowerCase()) || 
                    highlight.toLowerCase().includes(tech.toLowerCase())
                  )
                );

                return (
                  <div 
                    key={i} 
                    className={`p-2.5 rounded-lg break-inside-avoid border transition-all flex flex-col justify-between ${
                      isMatch 
                        ? 'bg-emerald-50/40 border-emerald-400 ring-1 ring-emerald-400/20' 
                        : 'bg-slate-50 border-slate-200/40'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <span className="font-bold text-[8.5px] text-slate-900 leading-tight flex items-center gap-1">
                          {isMatch && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />}
                          {proj.name}
                        </span>
                        <span className="text-[6.5px] font-mono text-slate-400 font-bold uppercase shrink-0 px-1 bg-white border border-slate-200 rounded">{proj.projectType}</span>
                      </div>
                      
                      {/* Employer & Client details */}
                      <div className="mt-1 flex flex-col gap-0.5 text-[7px] text-slate-500 font-medium">
                        <div>
                          <span className="font-bold text-slate-700">Employer:</span> {proj.company}
                        </div>
                        {proj.client && (
                          <div>
                            <span className="font-bold text-slate-800">Client:</span> {proj.client}
                          </div>
                        )}
                      </div>

                      <p className="text-[7.5px] text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">{proj.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {proj.tech.map((t, idx) => {
                        const isTechMatch = isRecruiterMode && recruiterHighlightTech.some(highlight => 
                          t.toLowerCase().includes(highlight.toLowerCase()) || 
                          highlight.toLowerCase().includes(t.toLowerCase())
                        );
                        return (
                          <span 
                            key={idx} 
                            className={`border text-[6.5px] px-1 rounded font-mono ${
                              isTechMatch 
                                ? 'bg-emerald-500/10 border-emerald-400 text-emerald-800 font-bold' 
                                : 'bg-white border-slate-200 text-slate-700'
                            }`}
                          >
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>

    </div>
  );
}
