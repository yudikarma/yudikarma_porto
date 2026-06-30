import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_PATH = path.join(__dirname, 'src', 'App.tsx');

const NEW_EXPERIENCES = `const EXPERIENCES: Experience[] = [
  {
    company: "PT. Phintraco Technology",
    role: "Android Developer",
    type: "Enterprise Consultant",
    period: "Jun 2021 — Present",
    description: "Android Developer consultant for major financial institutions, specializing in banking applications, secure SDK integrations, APM tooling, and providing technical support for complex enterprise environments.",
    techStack: ["Kotlin", "Java", "DexGuard", "ONE SPAN Security", "Avaya SDK", "Tetherfi SDK", "Dynatrace APM", "WebRTC", "mTLS", "Symmetric Cryptography"],
    highlights: [
      "Engineered and maintained secure soft token application with cryptographic authentication algorithms for over 10M+ active banking users.",
      "Designed and delivered customized sample apps and integration middleware for Avaya Elite WebRTC & Oceana SDK, resolving high-priority support tickets.",
      "Consulted leading national banks (BCA, Panin, BJB) on ONE SPAN Mobile Security Suite, securing biometric and device fingerprinting flows.",
      "Integrated Dynatrace APM to set up Real User Monitoring (RUM), performance telemetry dashboards, and live crash-reporting alerts for core banking apps.",
      "Integrated and customized Tetherfi SDK to enable secure digital customer experience, live chat interactions, and real-time support channels for banking clients.",
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
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.bca.token"
      },
      {
        name: "Halo BCA & Wondr BNI - Avaya SDK",
        tech: ["Avaya VOIP SDK", "WebRTC", "Oceana"],
        desc: "Technical consultant for Avaya Elite WebRTC & Oceana SDK integrations. Built sample apps, managed support tickets, and resolved integration issues.",
        collaborators: ["Avaya Global Support", "BNI Dev Team", "BCA Mobile Team"],
        technicalDoc: "Engineered customized sample applications showcasing Avaya WebRTC capabilities within native Android contexts. Handled SIP/VoIP signaling, WebRTC audio/video streams, and provided exhaustive integration guides and troubleshooting playbooks.",
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
        tech: ["ONE SPAN SDK", "Mobile Securite Suite"],
        desc: "Consulted development teams on integrating the ONE SPAN SDK, providing customized sample applications and troubleshooting integration challenges.",
        collaborators: ["ONE SPAN Engineers", "Panin Dev Team", "BJB Security Team"],
        technicalDoc: "Led the implementation of ONE SPAN Mobile Security Suite. Configured multi-factor authentication flows, biometric binding, and device fingerprinting to comply with stringent financial regulatory requirements.",
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
      },
      {
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
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.yipy.app"
      },
      {
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
      }
    ]
  },
  {
    company: "PT. 107, BSD",
    role: "Android Developer",
    type: "Full-Time Mobile Developer",
    period: "Nov 2018 — Nov 2019",
    description: "Responsible for building specialized native applications, ranging from social networking to niche industrial utilities.",
    techStack: ["Android SDK", "CameraX API", "EXIF Data", "Nested RecyclerView", "JSON REST APIs", "FCM Push Notifications"],
    highlights: [
      "Delivered Zonapets pet-lovers social network, optimizing media upload pipelines and implementing nested RecyclerView feed caching.",
      "Developed Snow Remove Camera application for field operators in Japan, leveraging CameraX APIs and custom EXIF GPS data injection to restrict upload fraud.",
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
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.zonapets.app"
      },
      {
        name: "Snow Remove - Camera",
        tech: ["Camera X", "Location Tagging"],
        desc: "Built a specialized camera app for snow removal workers in Japan with pinch-to-zoom, location tagging, and restricted photo uploads.",
        collaborators: ["Japanese Operations Team", "Hardware Engineers"],
        technicalDoc: "Utilized Android CameraX API for robust, device-agnostic camera interactions. Engineered custom exif data manipulation for precise location tagging. Implemented security measures to restrict uploads to photos captured exclusively within the app to prevent fraud.",
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
      }
    ]
  },
  {
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
        desc: "Designed and built a custom boutique brand application for 'Irvan Gold Roger' featuring interactive lookbooks, curated product filtering, and custom order requests.",
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
  },
  {
    company: "Personal Projects",
    role: "Independent Indie Maker",
    type: "Solo Engineering",
    period: "2021 — Present",
    description: "Conceived, architected, and deployed a suite of independent digital applications exploring financial planning, automated POS utilities, and e-commerce architectures.",
    techStack: ["React", "Kotlin", "Flutter", "SQLite Room", "Recharts / D3.js", "Offline-first LocalStorage Sync", "Responsive UI Layouts"],
    highlights: [
      "Designed Wedly Finance React wedding budget planner, implementing instant offline-first localStorage database backups.",
      "Created FinTrack native personal budget assistant using Clean Architecture and local SQLite transaction models.",
      "Engineered Warkop Modern, an offline-first Flutter POS solution custom-optimized for low-end Android devices with receipt exports.",
      "Launched LogamHub gold tracking web portal, integrating hourly asset pricing APIs, custom weight calculators, and interactive Recharts data panels."
    ],
    projects: [
      {
        name: "Wedly Finance",
        tech: ["React", "Tailwind CSS", "Financial Planning"],
        desc: "A responsive wedding budget planner that enables couples to calculate projected costs, track actual vendor payments, and optimize event logistics.",
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
      },
      {
        name: "FinTrack",
        tech: ["Kotlin", "SQLite", "Clean Architecture"],
        desc: "A cross-platform personal finance utility supporting multi-account tracking, detailed spending breakdowns, and dynamic recurring transaction management.",
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
      },
      {
        name: "Warkop Modern",
        tech: ["Flutter", "Dart", "POS & Inventory"],
        desc: "An offline-first point-of-sale (POS) and inventory application custom-designed to modernize Indonesian street-side coffee shops (Warkops).",
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
      },
      {
        name: "LogamHub",
        tech: ["Web Portal", "Market Feeds", "Gold Trading"],
        desc: "An elegant gold market tracking platform providing hourly asset pricing, custom metal volume calculators, and interactive investment estimators.",
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
      }
    ]
  }
];`;

let content = fs.readFileSync(APP_PATH, 'utf8');

const startMarker = 'const EXPERIENCES: Experience[] = [';
const endMarker = 'const getTechIcon = (techName: string) => {';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find experiences placeholder markers in App.tsx');
  process.exit(1);
}

// Replace the Experiences block
const updatedContent = content.slice(0, startIndex) + NEW_EXPERIENCES + '\\n\\n' + content.slice(endIndex);

fs.writeFileSync(APP_PATH, updatedContent, 'utf8');
console.log('App.tsx EXPERIENCES updated successfully!');
