import { TeamMember, ProductDetail } from '../types';

export const COMPANY_INFO = {
  name: 'VIYON Defence Technologies Pvt. Ltd',
  shortName: 'VIYON',
  motto: 'Predict. Protect. Prevail.',
  tagline: 'INTELLIGENCE BEYOND DEFENCE',
  email: 'viyondefencetech@gmail.com',
  location: 'India',
  sector: 'Deep-Tech Defence & Autonomous Systems',
  vision: 'To build a safer future through intelligent, autonomous, and next-generation defence technologies.',
  mission: 'To develop AI-powered defence systems that transform complex real-time data into intelligent, actionable insights for faster and smarter threat response.',
  about: 'VIYON Defence Technologies Pvt. Ltd. is a deep-tech defence technology startup focused on developing AI-powered, intelligent and autonomous defence solutions. The company aims to integrate advanced AI, sensor technologies, embedded systems, and intelligent software to transform real-time data into actionable threat intelligence and faster decision support. Our flagship vision is to build next-generation defence systems that can detect, analyse, predict, and respond to evolving threats while keeping human operators in control.',
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sakthi-saravanan',
    name: 'Sakthi Saravanan',
    role: 'Founder',
    position: 'Founder & Chief Executive Officer',
    category: 'Founder',
    description: 'Visionary leader behind VIYON Defence Technologies. Directs strategic vision, core defence AI architecture, and partnerships for national security technological independence.',
<<<<<<< HEAD
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
=======
    photoUrl: '/team/sakthi-saravanan.jpeg',
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
    photoSetting: 'Seated comfortably on executive sofa, leading strategic vision & core enterprise direction.',
    email: 'sakthiece932008@gmail.com',
    skills: ['Strategic Defence AI', 'Executive Leadership', 'System Architecture', 'Product Roadmap']
  },
  {
    id: 'sanjay-deivasigamani',
    name: 'Sanjay Deivasigamani',
    role: 'Co-Founder',
    position: 'Co-Founder & Chief Technology Officer',
    category: 'Co-Founder',
    description: 'Co-founder driving hardware-software integration, autonomous systems engineering, and multi-sensor edge intelligence framework.',
<<<<<<< HEAD
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
=======
    photoUrl: '/team/sanjay-deivasigamani.jpeg',
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
    photoSetting: 'Formal blazer in corporate innovation bay, leading hardware-software R&D.',
    skills: ['Embedded Hardware', 'Autonomous Robotics', 'Sensor Fusion', 'System Integration']
  },
  {
    id: 'rubesh-chinnasamy',
    name: 'Rubesh Chinnasamy',
    role: 'AI Engineer',
    position: 'Lead AI Engineer & Threat Perception Specialist',
    category: 'Engineering',
    description: 'Pioneers real-time deep learning models, neural threat evaluation, and multi-sensor target classification algorithms for CERON OS.',
<<<<<<< HEAD
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
=======
    photoUrl: '/team/rubesh-chinnasamy.jpeg',
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
    photoSetting: 'Keynote presentation speaker with microphone at Global Tech Innovate 2024.',
    skills: ['Deep Learning', 'Computer Vision', 'Threat Prediction Models', 'Neural Networks']
  },
  {
    id: 'rohith-varatharaj',
    name: 'Rohith Varatharaj',
    role: 'Software Engineer',
    position: 'Lead Software Engineer & CERON OS Platform Architect',
    category: 'Engineering',
    description: 'Architect of CERON OS high-performance core kernel, real-time command dashboard, low-latency data pipelines, and tactical display systems.',
<<<<<<< HEAD
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
=======
    photoUrl: '/team/rohith-varatharaj.jpg',
>>>>>>> 4c95d42 (Update team photos, full page video intro, and website layout)
    photoSetting: 'Presenting analytics, metric growth and software architecture on digital display.',
    skills: ['CERON OS Architecture', 'Real-Time Systems', 'Full-Stack Tactical UI', 'Low-Latency Pipelines']
  }
];

export const PRODUCTS: ProductDetail[] = [
  {
    id: 'ceron-os',
    name: 'CERON OS',
    tagline: 'Next-Gen Defence Command & AI Tactical Operating System',
    overview: 'We are developing an advanced, scalable defense platform designed to convert complex multi-source data into real-time actionable intelligence. The system aggregates multi-sensor inputs and processes them through an intelligent AI engine for comprehensive situational analysis. It continuously identifies, categorizes, tracks, and evaluates emerging operational threats while maintaining an updated tactical picture. By measuring threat severity and confidence levels, the AI delivers optimal response strategies to commanders in real time. Human operators retain ultimate control, utilizing configurable AI-assisted automation alongside direct decision-making capabilities. A flexible, modular design seamlessly incorporates new sensors, advanced AI models, and future defense hardware over time. Our objective is to minimize response latency, elevate domain awareness, and empower decisive action against evolving global risks. This will be critical for national security missions.',
    status: 'ACTIVE DEVELOPMENT / DEPLOYMENT READY',
    keyFeatures: [
      {
        title: 'Multi-Sensor Aggregation',
        description: 'Combines inputs from 3D Radar, Thermal/IR Cameras, RF Spectrum Sensors, and IFF telemetry into a unified tactical picture.',
        icon: 'Radar'
      },
      {
        title: 'AI Threat Evaluation',
        description: 'Automated deep learning engine calculates threat severity, time to impact, trajectory prediction, and confidence levels in under 500ms.',
        icon: 'Cpu'
      },
      {
        title: 'Electronic Countermeasures (ECM)',
        description: 'Recommends optimal response strategies such as directional RF jamming, kinetic intercepts, or electronic counter-measures.',
        icon: 'ShieldAlert'
      },
      {
        title: 'Human-In-The-Loop Control',
        description: 'Empowers commanders with configurable automation levels, full override authority, and instant manual action protocols.',
        icon: 'UserCheck'
      },
      {
        title: 'Modular & Scalable Design',
        description: 'Plug-and-play architecture for seamlessly adding new sensor arrays, tactical radio bands, and autonomous hardware modules.',
        icon: 'Layers'
      }
    ],
    specifications: [
      { label: 'Response Latency', value: '< 50ms Real-Time Data Pipeline' },
      { label: 'Sensor Integration', value: '3D Radar, IR/EO Camera, RF Detector, Satellite Telemetry' },
      { label: 'Automation Mode', value: 'Configurable Dual-Mode (AI Automation & Manual Command)' },
      { label: 'Target Tracking Capability', value: 'Up to 250 Simultaneous High-Risk Air/Ground Assets' },
      { label: 'Security Standard', value: 'Military-Grade Encrypted Data Link (AES-256 / Quantum Resistant)' }
    ]
  }
];

export const ZOYA_FAQS = [
  {
    keywords: ['vision', 'aim', 'future', 'goal'],
    answer: `VIYON's Vision: "${COMPANY_INFO.vision}"`,
    tab: 'home' as const
  },
  {
    keywords: ['mission', 'purpose', 'what do you do'],
    answer: `VIYON's Mission: "${COMPANY_INFO.mission}"`,
    tab: 'home' as const
  },
  {
    keywords: ['motto', 'tagline', 'slogan'],
    answer: `Motto: "${COMPANY_INFO.motto}" | Tagline: "${COMPANY_INFO.tagline}"`,
    tab: 'home' as const
  },
  {
    keywords: ['founder', 'sakthi', 'ceo', 'who started', 'chief executive'],
    answer: `Sakthi Saravanan is the Founder & CEO of VIYON Defence Technologies. He leads strategic vision, core defence AI architecture, and partnerships.`,
    tab: 'about' as const
  },
  {
    keywords: ['cofounder', 'co-founder', 'co founder', 'sanjay', 'cto', 'chief technology'],
    answer: `Sanjay Deivasigamani is the Co-Founder & CTO of VIYON Defence Technologies. He leads hardware-software integration, autonomous robotics, and multi-sensor edge intelligence.`,
    tab: 'about' as const
  },
  {
    keywords: ['ai engineer', 'ai developer', 'ai specialist', 'rubesh', 'threat perception'],
    answer: `Rubesh Chinnasamy is our Lead AI Engineer & Threat Perception Specialist. He pioneers real-time deep learning models and multi-sensor target classification algorithms.`,
    tab: 'about' as const
  },
  {
    keywords: ['software engineer', 'software developer', 'platform architect', 'rohith'],
    answer: `Rohith Varatharaj is our Lead Software Engineer & CERON OS Platform Architect. He is responsible for the CERON OS high-performance core kernel, low-latency pipelines, and command displays.`,
    tab: 'about' as const
  },
  {
    keywords: ['team', 'leadership', 'members', 'who works', 'who built'],
    answer: `VIYON's Core Leadership Team:\n- Founder & CEO: Sakthi Saravanan\n- Co-Founder & CTO: Sanjay Deivasigamani\n- Lead AI Engineer: Rubesh Chinnasamy\n- Lead Software Engineer: Rohith Varatharaj`,
    tab: 'about' as const
  },
  {
    keywords: ['ceron', 'product', 'software', 'platform', 'os', 'system'],
    answer: `CERON OS is our flagship AI-powered tactical command operating system that aggregates multi-sensor radar, thermal, and RF data to evaluate threats in real time.`,
    tab: 'product' as const
  },
  {
    keywords: ['contact', 'email', 'enquiry', 'inquiry', 'reach', 'mail'],
    answer: `You can reach VIYON directly at ${COMPANY_INFO.email}. You can also fill out the Enquiry form on our website to send a direct message.`,
    tab: 'enquiry' as const
  }
];
