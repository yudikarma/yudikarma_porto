import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether

def create_mobile_cv(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    primary_color = colors.HexColor("#0f172a") # Slate 900
    accent_color = colors.HexColor("#0284c7")  # Sky 600
    dark_text = colors.HexColor("#1e293b")     # Slate 800
    muted_text = colors.HexColor("#475569")    # Slate 600

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=19,
        leading=22,
        textColor=primary_color,
        spaceAfter=2
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=accent_color,
        spaceAfter=5
    )

    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=dark_text
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=primary_color,
        spaceBefore=9,
        spaceAfter=4,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=dark_text,
        spaceAfter=3
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=dark_text,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2.5
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=primary_color
    )

    job_meta_style = ParagraphStyle(
        'JobMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=accent_color,
        alignment=2
    )

    company_style = ParagraphStyle(
        'CompanyText',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=muted_text,
        spaceAfter=3
    )

    story = []

    # Header Section
    header_data = [
        [
            Paragraph("YUDI KARMA", title_style),
            Paragraph("<b>Email:</b> yudikarmateknik@gmail.com<br/><b>Location:</b> South Jakarta, Indonesia", contact_style)
        ],
        [
            Paragraph("SENIOR MOBILE & SECURITY SDK ENGINEER", subtitle_style),
            Paragraph("<b>LinkedIn:</b> linkedin.com/in/yudikarma<br/><b>GitHub:</b> github.com/yudikarma | <b>Portfolio:</b> yudikarma.vercel.app", contact_style)
        ]
    ]

    header_table = Table(header_data, colWidths=[320, 220])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.5, color=primary_color, spaceBefore=2, spaceAfter=6))

    # Executive Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    summary_text = (
        "Senior Mobile Developer and Security SDK Specialist with over 8 years of software engineering experience "
        "architecting native Android applications, mobile banking security hardening, and real-time VoIP communications. "
        "Extensive enterprise experience consulting for national financial institutions including Bank Central Asia (BCA), "
        "Bank Negara Indonesia (BNI), Bank Tabungan Negara (BTN), CIMB Niaga, Panin Bank, and Bank BJB. Expert in Kotlin, "
        "Java, Jetpack Compose, MVVM/Clean Architecture, OneSpan Mobile Security Suite, DexGuard RASP shielding, mTLS pin enforcement, "
        "Avaya WebRTC, and Tetherfi SDK integrations."
    )
    story.append(Paragraph(summary_text, body_style))

    # Core Competencies
    story.append(Paragraph("TECHNICAL COMPETENCIES", section_heading))
    skills_data = [
        [
            Paragraph("<b>Mobile Engineering:</b>", body_style),
            Paragraph("Kotlin, Java, Jetpack Compose, Android SDK, MVVM, Clean Architecture, Coroutines, Flow, Dagger Hilt, Room DB, WorkManager, Camera 1 & 2 APIs, EXIF Metadata", body_style)
        ],
        [
            Paragraph("<b>Security & Hardening:</b>", body_style),
            Paragraph("OneSpan Mobile Security Suite, DexGuard (RASP & Obfuscation), Soft Token Authentication, Cryptographic Signing, mTLS, Root & Tamper Detection", body_style)
        ],
        [
            Paragraph("<b>VoIP & Omnichannel:</b>", body_style),
            Paragraph("Avaya Elite WebRTC & Oceana SDK, Tetherfi Customer Engagement SDK, SIP Signaling, WebSockets, Audio/Video Stream Tuning", body_style)
        ],
        [
            Paragraph("<b>APM & Utilities:</b>", body_style),
            Paragraph("Dynatrace APM (Real User Monitoring & Telemetry), Flutter, Dart, React Native, RESTful APIs, SQLite, Git, Jira, Automated Testing", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[125, 415])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)

    # Work Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))

    # Job 1: Phintraco
    job1_header = [
        [Paragraph("Senior Android Developer & Enterprise Consultant", job_title_style), Paragraph("Jun 2021 — Present", job_meta_style)]
    ]
    t1 = Table(job1_header, colWidths=[380, 160])
    t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t1)
    story.append(Paragraph("PT. Phintraco Technology — Enterprise Financial & Security Consulting", company_style))
    story.append(Paragraph("• <b>KeyBCA Soft Token (Client: Bank Central Asia):</b> Developed and maintained KeyBCA mobile soft token client featuring cryptographic authentication algorithms and mTLS API integration for enterprise transaction validation.", bullet_style))
    story.append(Paragraph("• <b>OneSpan Security Suite (Clients: Panin Bank & Bank BJB):</b> Consulted client development teams on BJB Digi and Panin Mobile for multi-factor authentication, biometric binding, dynamic device fingerprinting, and application shielding.", bullet_style))
    story.append(Paragraph("• <b>Avaya Elite WebRTC SDK (Clients: Bank Central Asia & Bank Negara Indonesia):</b> Engineered reference sample applications in Kotlin using Jetpack Compose UI for Halo BCA and Wondr BNI demonstrating WebRTC media stream handling and SIP signaling.", bullet_style))
    story.append(Paragraph("• <b>Tetherfi Customer Engagement SDK (Clients: Bank BTN & CIMB Niaga):</b> Integrated Tetherfi SDK into bale by BTN and OCTO Mobile (CIMB Niaga), delivering secure Jetpack Compose UI sample components for native in-app customer chat and agent routing.", bullet_style))
    story.append(Paragraph("• <b>Security Hardening:</b> Enforced enterprise-level application shielding utilizing DexGuard dynamic obfuscation, root-detection algorithms, and mutual TLS (mTLS) certificate pinning.", bullet_style))
    story.append(Paragraph("• <b>Dynatrace APM & Telemetry:</b> Configured Dynatrace Real User Monitoring (RUM), performance telemetry dashboards, and real-time crash alerting for banking mobile clients.", bullet_style))
    story.append(Spacer(1, 4))

    # Job 2: Derap Kreasi Persada
    job2_header = [
        [Paragraph("Android Developer & Core Mobile Engineer", job_title_style), Paragraph("Nov 2019 — Jun 2021", job_meta_style)]
    ]
    t2 = Table(job2_header, colWidths=[380, 160])
    t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t2)
    story.append(Paragraph("PT. Derap Kreasi Persada — Full-Time Mobile Engineering", company_style))
    story.append(Paragraph("• <b>Santriqu App (Client: Educational Institutions):</b> Architected school fintech application using MVVM and Clean Architecture principles, integrating secure local payment gateways for PPOB and tuition processing.", bullet_style))
    story.append(Paragraph("• <b>Yipy Operations (Client: Centratama Group Staff):</b> Developed Flutter & Dart cross-platform application for facility management staff, handling real-time ticket updates over WebSockets and Google Maps logistics.", bullet_style))
    story.append(Paragraph("• <b>Warung Babe (Client: Giropos / PT Pos Indonesia Merchant Network):</b> Built native Android P2P gold trading client with Giropos API billing integration and reactive state updates for live market price feeds.", bullet_style))
    story.append(Spacer(1, 4))

    # Job 3: PT 107 BSD
    job3_header = [
        [Paragraph("Native Android Developer", job_title_style), Paragraph("Nov 2018 — Nov 2019", job_meta_style)]
    ]
    t3 = Table(job3_header, colWidths=[380, 160])
    t3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t3)
    story.append(Paragraph("PT. 107, BSD — Full-Time Mobile Developer", company_style))
    story.append(Paragraph("• <b>Snow Remove Camera Utility (Client: Industrial Snow Removal Contractor, Japan):</b> Developed specialized industrial camera application for snow removal workers in Japan using low-level Camera 1 and Camera 2 APIs, reverse-engineering raw open-source code to handle device-specific kernel crashes.", bullet_style))
    story.append(Paragraph("• <b>Zonapets Social Platform (Client: Hyrax Pet Network):</b> Engineered media sharing social app for pet owners, implementing image compression pipelines and nested RecyclerView feed caching.", bullet_style))
    story.append(Paragraph("• <b>EXIF Authentication:</b> Integrated custom EXIF location metadata injection into captured images to verify authentic field operational data.", bullet_style))
    story.append(Spacer(1, 4))

    # Job 4: QA Internship
    job4_header = [
        [Paragraph("Software Quality Assurance Intern (E-Procurement)", job_title_style), Paragraph("2018 (6 Months)", job_meta_style)]
    ]
    t4 = Table(job4_header, colWidths=[380, 160])
    t4.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t4)
    story.append(Paragraph("PT. Mitra Mandiri Informatika — E-Procurement Systems", company_style))
    story.append(Paragraph("• <b>Promise Platform (Client: Enterprise E-Procurement):</b> Authored comprehensive manual test plans and automated regression scripts for enterprise e-procurement management systems on Jira.", bullet_style))
    story.append(Spacer(1, 5))

    # Detailed Featured Projects Section (Mobile CV)
    story.append(Paragraph("DETAILED PROJECTS & TECHNICAL SPECIFICATIONS", section_heading))
    
    # Project 1: KeyBCA
    story.append(Paragraph("<b>KeyBCA (Individu & Bisnis) — Mobile Banking Soft Token</b>", job_title_style))
    story.append(Paragraph("<i>Client App: KeyBCA | Client: Bank Central Asia (BCA) | Employer: PT. Phintraco Technology</i>", company_style))
    story.append(Paragraph("<b>Tech Stack:</b> Kotlin, Android SDK, OneSpan Security Suite, DexGuard RASP, mTLS, Cryptography<br/>"
                           "Developed and maintained banking soft token application to authenticate financial transactions. Implemented cryptographic token generation algorithms complying with strict banking regulatory standards. Integrated with internal BCA microservices over mTLS and enforced dynamic code obfuscation using DexGuard to mitigate reverse engineering and tampering risks.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 2: Avaya
    story.append(Paragraph("<b>Halo BCA & Wondr BNI — Avaya WebRTC Integration</b>", job_title_style))
    story.append(Paragraph("<i>Client Apps: Halo BCA (BCA) & Wondr BNI (BNI) | Employer: PT. Phintraco Technology</i>", company_style))
    story.append(Paragraph("<b>Tech Stack:</b> Kotlin, Jetpack Compose, Avaya Elite WebRTC SDK, Oceana, SIP Signaling<br/>"
                           "Technical consultant for Avaya Elite WebRTC SDK integrations. Engineered customized reference sample applications in Kotlin using Jetpack Compose UI demonstrating WebRTC audio/video calling and SIP signaling for Halo BCA and Wondr BNI mobile banking applications.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 3: Tetherfi
    story.append(Paragraph("<b>bale by BTN & OCTO Mobile — Tetherfi Customer Engagement Integration</b>", job_title_style))
    story.append(Paragraph("<i>Client Apps: bale by BTN (Bank BTN) & OCTO Mobile (CIMB Niaga) | Employer: PT. Phintraco Technology</i>", company_style))
    story.append(Paragraph("<b>Tech Stack:</b> Kotlin, Jetpack Compose, Tetherfi SDK, WebSockets, In-App Customer Engagement<br/>"
                           "Integrated Tetherfi customer engagement SDKs inside mobile banking platforms for Bank BTN (bale by BTN) and CIMB Niaga (OCTO Mobile). Delivered modular Kotlin and Jetpack Compose UI components for interactive real-time messaging, notification queues, and custom brand styling.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 4: BJB & Panin
    story.append(Paragraph("<b>BJB Digi & Panin Mobile — OneSpan Security Integration</b>", job_title_style))
    story.append(Paragraph("<i>Client Apps: BJB Digi (Bank BJB) & Panin Mobile (Panin Bank) | Employer: PT. Phintraco Technology</i>", company_style))
    story.append(Paragraph("<b>Tech Stack:</b> Kotlin, Jetpack Compose, OneSpan Security Suite, Biometric Binding, RASP<br/>"
                           "Led security implementation consulting for ONE SPAN Mobile Security Suite. Created Kotlin and Jetpack Compose sample applications to guide banking clients on integrating multi-factor authentication, biometric binding, and device fingerprinting to comply with financial regulatory requirements.", bullet_style))
    story.append(Spacer(1, 5))

    # All Certifications Section
    story.append(Paragraph("PROFESSIONAL CERTIFICATIONS", section_heading))
    cert_data = [
        [Paragraph("• <b>Google Cloud Certified Associate Cloud Engineer</b> — Google Cloud (May 2025 — May 2028)", body_style)],
        [Paragraph("• <b>Google Cloud Certified Cloud Digital Leader</b> — Google Cloud (Mar 2025 — Mar 2028)", body_style)],
        [Paragraph("• <b>Dynatrace Certified Associate</b> — Dynatrace (Mar 2026 — Mar 2028)", body_style)],
        [Paragraph("• <b>Dynatrace Certified Essentials</b> — Dynatrace (Mar 2026 — Mar 2028)", body_style)],
        [Paragraph("• <b>Avaya Infinity™ Design and Workflows</b> — Avaya (Sep 2025 — Lifetime)", body_style)],
        [Paragraph("• <b>Google Developer Kejar (Android Developer)</b> — Google x Dicoding (2019)", body_style)],
        [Paragraph("• <b>Technical Support Certification</b> — Balai Pelatihan Kerja (2018)", body_style)]
    ]
    t_cert = Table(cert_data, colWidths=[540])
    t_cert.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0.5), ('BOTTOMPADDING', (0,0), (-1,-1), 0.5)]))
    story.append(t_cert)
    story.append(Spacer(1, 4))

    # Education Section
    story.append(Paragraph("EDUCATION", section_heading))
    edu_data = [
        [Paragraph("<b>Politeknik Aceh</b> — Bachelor of Applied Science in Informatic Engineering (GPA: 3.56/4.00)", body_style), Paragraph("2014 — 2018", job_meta_style)]
    ]
    t_edu = Table(edu_data, colWidths=[410, 130])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_edu)

    doc.build(story)
    print(f"Successfully generated {filename}")

def create_fullstack_cv(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    primary_color = colors.HexColor("#0f172a") # Slate 900
    accent_color = colors.HexColor("#0d9488")  # Teal 600
    dark_text = colors.HexColor("#1e293b")     # Slate 800
    muted_text = colors.HexColor("#475569")    # Slate 600

    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=19,
        leading=22,
        textColor=primary_color,
        spaceAfter=2
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=accent_color,
        spaceAfter=5
    )

    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=dark_text
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=primary_color,
        spaceBefore=9,
        spaceAfter=4,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=dark_text,
        spaceAfter=3
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=dark_text,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2.5
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=primary_color
    )

    job_meta_style = ParagraphStyle(
        'JobMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=accent_color,
        alignment=2
    )

    company_style = ParagraphStyle(
        'CompanyText',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=muted_text,
        spaceAfter=3
    )

    story = []

    # Header Section
    header_data = [
        [
            Paragraph("YUDI KARMA", title_style),
            Paragraph("<b>Email:</b> yudikarmateknik@gmail.com<br/><b>Location:</b> South Jakarta, Indonesia", contact_style)
        ],
        [
            Paragraph("SENIOR FULL-STACK & MOBILE SOLUTIONS ARCHITECT", subtitle_style),
            Paragraph("<b>LinkedIn:</b> linkedin.com/in/yudikarma<br/><b>GitHub:</b> github.com/yudikarma | <b>Portfolio:</b> yudikarma.vercel.app", contact_style)
        ]
    ]

    header_table = Table(header_data, colWidths=[320, 220])
    header_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 4))
    story.append(HRFlowable(width="100%", thickness=1.5, color=primary_color, spaceBefore=2, spaceAfter=6))

    # Executive Summary
    story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    summary_text = (
        "Versatile Senior Full-Stack & Mobile Engineer with over 8 years of software architecture experience "
        "building scalable web platforms, native mobile applications, cloud backend infrastructure, and AI API integrations. "
        "Proven background consulting tier-1 financial institutions (BCA, BNI, Bank BTN, CIMB Niaga, Panin Bank, Bank BJB) "
        "on enterprise security and real-time communication systems. Proficient across React 19, TypeScript, Tailwind CSS, "
        "Node.js, Laravel 12, Kotlin/Android, Flutter, Supabase, Firebase, WebSockets, WebRTC, and Google Gemini AI."
    )
    story.append(Paragraph(summary_text, body_style))

    # Core Competencies
    story.append(Paragraph("TECHNICAL COMPETENCIES", section_heading))
    skills_data = [
        [
            Paragraph("<b>Web Frontend & UI:</b>", body_style),
            Paragraph("React 19, React 18, TypeScript, JavaScript (ES6+), Next.js, Tailwind CSS, Framer Motion, HTML5/CSS3, State Management, Recharts / D3.js", body_style)
        ],
        [
            Paragraph("<b>Backend & Databases:</b>", body_style),
            Paragraph("Node.js, Express, Laravel 12, RESTful APIs, WebSockets, PostgreSQL, Supabase BaaS, Firebase, Room DB, SQLite, LocalStorage Caching", body_style)
        ],
        [
            Paragraph("<b>Mobile Engineering:</b>", body_style),
            Paragraph("Kotlin, Java, Jetpack Compose, Android SDK, Flutter, Dart, React Native, CameraX ML Kit, Biometrics, Offline-first Architecture", body_style)
        ],
        [
            Paragraph("<b>Cloud & Infrastructure:</b>", body_style),
            Paragraph("Google Cloud Platform (GCP), Google Gemini AI API, Dynatrace APM, OneSpan Security, DexGuard RASP, Git, Docker, CI/CD, System Design", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[125, 415])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)

    # Work Experience
    story.append(Paragraph("PROFESSIONAL EXPERIENCE", section_heading))

    # Job 1: Phintraco
    job1_header = [
        [Paragraph("Senior Enterprise Solutions & Mobile Architect", job_title_style), Paragraph("Jun 2021 — Present", job_meta_style)]
    ]
    t1 = Table(job1_header, colWidths=[380, 160])
    t1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t1)
    story.append(Paragraph("PT. Phintraco Technology — Enterprise Technical Consulting", company_style))
    story.append(Paragraph("• <b>KeyBCA Soft Token (Client: Bank Central Asia):</b> Architected and maintained native banking soft token authentication application with custom cryptographic signing algorithms and mTLS microservice integrations.", bullet_style))
    story.append(Paragraph("• <b>Halo BCA & Wondr BNI WebRTC (Clients: BCA & BNI):</b> Spearheaded WebRTC and Avaya Elite SDK technical integrations, engineering custom Kotlin & Jetpack Compose UI reference applications for real-time video/voice signaling.", bullet_style))
    story.append(Paragraph("• <b>Tetherfi Omnichannel Chat (Clients: Bank BTN & CIMB Niaga):</b> Integrated Tetherfi customer engagement SDKs for bale by BTN and OCTO Mobile (CIMB Niaga) to power secure digital chat channels and agent routing inside mobile apps.", bullet_style))
    story.append(Paragraph("• <b>Banking Security Consulting (Clients: Bank BJB & Panin Bank):</b> Consulted banking client engineering teams on BJB Digi and Panin Mobile for OneSpan Security Suite and DexGuard app shielding (RASP, dynamic obfuscation, mTLS).", bullet_style))
    story.append(Paragraph("• <b>Dynatrace APM Telemetry:</b> Configured Dynatrace Real User Monitoring (RUM) and performance dashboards to track end-to-end API transaction latency and server response queries.", bullet_style))
    story.append(Spacer(1, 4))

    # Job 2: Derap Kreasi Persada
    job2_header = [
        [Paragraph("Full-Stack Mobile & Web Engineer", job_title_style), Paragraph("Nov 2019 — Jun 2021", job_meta_style)]
    ]
    t2 = Table(job2_header, colWidths=[380, 160])
    t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t2)
    story.append(Paragraph("PT. Derap Kreasi Persada — Full-Stack Systems Engineering", company_style))
    story.append(Paragraph("• <b>Santriqu Fintech (Client: Educational Institutions):</b> Architected school fintech application using MVVM and Clean Architecture, integrating multiple local payment gateways for tuition processing and real-time PPOB transactions.", bullet_style))
    story.append(Paragraph("• <b>Yipy Operations (Client: Centratama Group Staff):</b> Developed Yipy operations utility using Flutter & Dart, implementing real-time complaint ticket tracking over WebSockets and Google Maps logistics integration.", bullet_style))
    story.append(Paragraph("• <b>Warung Babe P2P (Client: Giropos / PT Pos Indonesia Merchant Network):</b> Built Warung Babe P2P gold trading native client, optimizing reactive state updates to synchronize real-time market feeds with Giropos API billing.", bullet_style))
    story.append(Spacer(1, 4))

    # Job 3: Freelance & Solo Maker
    job3_header = [
        [Paragraph("Senior Full-Stack & Mobile Developer (Freelance / Solo Maker)", job_title_style), Paragraph("2020 — Present", job_meta_style)]
    ]
    t3 = Table(job3_header, colWidths=[380, 160])
    t3.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t3)
    story.append(Paragraph("Independent Product Engineering & Consulting", company_style))
    story.append(Paragraph("• <b>FinTrack (AI Budget Manager):</b> Built full-stack web application using React 19, Node.js, Firebase, and Google Gemini AI API for automated receipt OCR parsing.", bullet_style))
    story.append(Paragraph("• <b>Wedly Finance (SaaS Platform):</b> Designed dual-role React 18 & TypeScript wedding management web platform featuring interactive timeline builders, vendor comparison analytics, and Framer Motion UI.", bullet_style))
    story.append(Paragraph("• <b>Warkop Modern POS:</b> Engineered full-stack Laravel 12 multi-tenant coffee shop ordering platform featuring role-based access control and encrypted QR table-ordering.", bullet_style))
    story.append(Paragraph("• <b>LogamHub SaaS (Client: Irvan Gold Roger / Private Client):</b> Built native Kotlin Android app for gold price tracking & inventory auditing using Room DB, WorkManager sync, CameraX ML Kit scanning, and Supabase BaaS.", bullet_style))
    story.append(Spacer(1, 4))

    # Job 4: PT 107 BSD
    job4_header = [
        [Paragraph("Android & Utilities Developer", job_title_style), Paragraph("Nov 2018 — Nov 2019", job_meta_style)]
    ]
    t4 = Table(job4_header, colWidths=[380, 160])
    t4.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t4)
    story.append(Paragraph("PT. 107, BSD — Native Developer", company_style))
    story.append(Paragraph("• <b>Snow Remove Camera Utility (Client: Industrial Snow Removal Contractor, Japan):</b> Developed specialized industrial camera application for snow removal operations in Japan using low-level Camera 1 & Camera 2 APIs with custom EXIF location metadata verification.", bullet_style))
    story.append(Paragraph("• <b>Zonapets Social Platform (Client: Hyrax Pet Network):</b> Built Zonapets social networking client featuring media compression pipelines and nested RecyclerView feed caching.", bullet_style))
    story.append(Spacer(1, 5))

    # Detailed Featured Projects Section (Fullstack CV - Web + Mobile Solutions)
    story.append(Paragraph("DETAILED PROJECTS & TECHNICAL SPECIFICATIONS", section_heading))
    
    # Project 1: FinTrack
    story.append(Paragraph("<b>FinTrack — AI-Powered Personal Finance Platform</b>", job_title_style))
    story.append(Paragraph("<i>Product Type: Open-Source AI Web App | Tech: React 19, Node.js, Firebase, Google Gemini API, Tailwind CSS</i>", company_style))
    story.append(Paragraph("Full-stack web application featuring Google Gemini AI automated receipt parsing, real-time expenditure charts, and secure Firebase backend architecture.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 2: Wedly Finance
    story.append(Paragraph("<b>Wedly Finance — Editorial Wedding Management SaaS</b>", job_title_style))
    story.append(Paragraph("<i>Product Type: Independent Web SaaS | Tech: React 18, TypeScript, Tailwind CSS, Framer Motion</i>", company_style))
    story.append(Paragraph("Dual-role web architecture supporting administrative planning analytics and guest portals. Built zero-dependency vendor analytics matrix using React state math and editorial timeline tools.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 3: Warkop Modern POS
    story.append(Paragraph("<b>Warkop Modern POS — Multi-Tenant Coffee Shop POS</b>", job_title_style))
    story.append(Paragraph("<i>Product Type: Enterprise Multi-Tenant POS | Tech: Laravel 12, PHP, PostgreSQL, Blade, QR Code Engine</i>", company_style))
    story.append(Paragraph("Full-stack Laravel 12 multi-tenant coffee shop ordering platform featuring role-based access controls, encrypted QR table-ordering, and real-time sales reporting dashboards.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 4: KeyBCA (Mobile Architecture on Fullstack CV)
    story.append(Paragraph("<b>KeyBCA (Individu & Bisnis) — Mobile Banking Soft Token</b>", job_title_style))
    story.append(Paragraph("<i>Client App: KeyBCA | Client: Bank Central Asia (BCA) | Employer: PT. Phintraco Technology</i>", company_style))
    story.append(Paragraph("<b>Tech Stack:</b> Kotlin, Android SDK, OneSpan Security Suite, DexGuard RASP, mTLS, Cryptography<br/>"
                           "Developed and maintained banking soft token application to authenticate financial transactions. Implemented cryptographic token generation algorithms complying with strict banking regulatory standards. Integrated with internal BCA microservices over mTLS and enforced dynamic code obfuscation using DexGuard.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 5: Halo BCA & Wondr BNI
    story.append(Paragraph("<b>Halo BCA & Wondr BNI — Avaya WebRTC Integration</b>", job_title_style))
    story.append(Paragraph("<i>Client Apps: Halo BCA (BCA) & Wondr BNI (BNI) | Employer: PT. Phintraco Technology</i>", company_style))
    story.append(Paragraph("<b>Tech Stack:</b> Kotlin, Jetpack Compose, Avaya Elite WebRTC SDK, Oceana, SIP Signaling<br/>"
                           "Technical consultant for Avaya Elite WebRTC SDK integrations. Engineered customized reference sample applications in Kotlin using Jetpack Compose UI demonstrating WebRTC audio/video calling and SIP signaling for Halo BCA and Wondr BNI mobile banking applications.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 6: bale by BTN & OCTO Mobile
    story.append(Paragraph("<b>bale by BTN & OCTO Mobile — Tetherfi Customer Engagement Integration</b>", job_title_style))
    story.append(Paragraph("<i>Client Apps: bale by BTN (Bank BTN) & OCTO Mobile (CIMB Niaga) | Employer: PT. Phintraco Technology</i>", company_style))
    story.append(Paragraph("<b>Tech Stack:</b> Kotlin, Jetpack Compose, Tetherfi SDK, WebSockets, In-App Customer Engagement<br/>"
                           "Integrated Tetherfi customer engagement SDKs inside mobile banking platforms for Bank BTN (bale by BTN) and CIMB Niaga (OCTO Mobile). Delivered modular Kotlin and Jetpack Compose UI components for interactive real-time messaging and notification queues.", bullet_style))
    story.append(Spacer(1, 3))

    # Project 7: LogamHub
    story.append(Paragraph("<b>LogamHub (formerly Irvan Gold Roger) — Gold Inventory & Trading SaaS</b>", job_title_style))
    story.append(Paragraph("<i>Client App: LogamHub | Client: Private Client (Irvan Gold Roger) | Tech: Kotlin, Jetpack Compose, Supabase, Node.js</i>", company_style))
    story.append(Paragraph("Architected an offline-first Android application in Kotlin using Jetpack Compose (Material 3), MVVM, and Dagger Hilt. Implemented Room local caching, background sync using WorkManager, Supabase SDK (Auth, Realtime, Database), and custom Node.js backend.", bullet_style))
    story.append(Spacer(1, 5))

    # All Certifications Section
    story.append(Paragraph("PROFESSIONAL CERTIFICATIONS", section_heading))
    cert_data = [
        [Paragraph("• <b>Google Cloud Certified Associate Cloud Engineer</b> — Google Cloud (May 2025 — May 2028)", body_style)],
        [Paragraph("• <b>Google Cloud Certified Cloud Digital Leader</b> — Google Cloud (Mar 2025 — Mar 2028)", body_style)],
        [Paragraph("• <b>Dynatrace Certified Associate</b> — Dynatrace (Mar 2026 — Mar 2028)", body_style)],
        [Paragraph("• <b>Dynatrace Certified Essentials</b> — Dynatrace (Mar 2026 — Mar 2028)", body_style)],
        [Paragraph("• <b>Avaya Infinity™ Design and Workflows</b> — Avaya (Sep 2025 — Lifetime)", body_style)],
        [Paragraph("• <b>Google Developer Kejar (Android Developer)</b> — Google x Dicoding (2019)", body_style)],
        [Paragraph("• <b>Technical Support Certification</b> — Balai Pelatihan Kerja (2018)", body_style)]
    ]
    t_cert = Table(cert_data, colWidths=[540])
    t_cert.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0.5), ('BOTTOMPADDING', (0,0), (-1,-1), 0.5)]))
    story.append(t_cert)
    story.append(Spacer(1, 4))

    # Education Section
    story.append(Paragraph("EDUCATION", section_heading))
    edu_data = [
        [Paragraph("<b>Politeknik Aceh</b> — Bachelor of Applied Science in Informatic Engineering (GPA: 3.56/4.00)", body_style), Paragraph("2014 — 2018", job_meta_style)]
    ]
    t_edu = Table(edu_data, colWidths=[410, 130])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_edu)

    doc.build(story)
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    mobile_pdf = os.path.join(base_dir, "CV_Yudi_Karma_Mobile_Developer.pdf")
    fullstack_pdf = os.path.join(base_dir, "CV_Yudi_Karma_Fullstack_Developer.pdf")
    
    create_mobile_cv(mobile_pdf)
    create_fullstack_cv(fullstack_pdf)
