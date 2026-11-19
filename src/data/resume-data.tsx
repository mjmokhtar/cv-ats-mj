import {
  ConsultlyLogo,
  EvercastLogo,
  JarockiMeLogo,
  MonitoLogo,
  ParabolLogo,

} from "@/images/logos";
import { GitHubIcon, GumroadIcon, LinkedInIcon} from "@/components/icons";


export const RESUME_DATA = {
  name: "Muhammad Jumi'at Mokhtar",
  initials: "MJ",
  location: "Jakarta, Indonesia",
  locationLink: "https://maps.app.goo.gl/2s7FBP1uNst6EjQB8",
  about:
    "Toaster. 🔌♨️🍞",
  summary:
    "Embedded Systems & IoT Engineer transitioning into product-driven roles, with experience leading end-to-end system development from requirement definition to deployment. Skilled in bridging business needs and technical execution, managing stakeholders, and delivering scalable IoT solutions for industrial and instrumentation applications.",
  avatarUrl: "/images/new2.jpg",
  personalWebsiteUrl: "https://mjmokhtar.cloud/",
  contact: {
    email: "mjmmiat01@gmail.com",  
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mjmokhtar",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mjmokhtar/",
        icon: LinkedInIcon,
      },
      {
        name: "Gumroad",
        url: "https://store.mjmokhtar.cloud",
        icon: GumroadIcon,
      },
    ],
  },
  education: [
    {
      school: "Lambung Mangkurat University",
      degree: "Bachelor's Degree in Instrumentation Physics",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    
    {
      company: "Toaster",
      link: "https://toaster.mjmokhtar.cloud",
      badges: ["Founder", "Consultant"],
      title: "IoT Engineer & Embedded Systems",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
  "Founded and led IoT and embedded systems consultancy, managing end-to-end project delivery from requirement gathering to deployment. Defined product requirements, designed system architecture, and coordinated with clients to ensure solutions aligned with business needs. Delivered hands-on development of smart devices, while also mentoring professionals and students in embedded systems, IoT protocols, and hardware product development.",
    },
    {
      company: "AMI",
      link: "https://amanmedia.id/",
      badges: ["Office"],
      title: "IoT Specialist",
      logo: ConsultlyLogo, // bisa pakai placeholder atau logo khusus
      start: "2025",
      end: null,
      description:
      "this Jakarta-based technology partner, established in 2019, focuses on helping industries build integrated systems through innovative, simple, and trusted solutions.",
    },
    {
      company: "RESTEK",
      link: "https://www.rsteknologi.com/",
      badges: ["Office"],
      title: "Engineer",
      logo: ConsultlyLogo,
      start: "2023",
      end: "2025",
      description:
        "a technology and engineering company founded in 2012. We design, integrate, and maintain Intelligent Transport Systems for railway and urban transit operators across Indonesia and Southeast Asia.",
    }
  ],
  skills: [
    "Technical Product & Project Manager (IoT)",
    "System Design & Integration",
    "IoT, Embedded & Firmware Systems",
    "PCB Layout & Circuit Design Engineer",
    "Programming & Scripting",
    "Network Configuration & Protocols"
],
  projects: [
    {
      title: "EAMMS ATWP",
      techStack: [                
        "RESTEK",
        "Node.js",
        "RESTful API",
        "Node-RED",
        "Modbus TCP/IP",
        "Network (UDP)",
        "PostgreSQL"
      ],
      description:
        "Developed a monitoring and control system for the Automatic Train Wash Plant (ATWP) and RFID Train System at Jabodebek LRT. Integrated PLCs via Modbus TCP/IP with a Node.js backend and PostgreSQL database, achieving 99% system uptime and reducing manual inspection by 40%.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://mjmokhtar.cloud/projects/atwp",
      },
    },
    {
      title: "Running Text LED",
      techStack: [
        "RESTEK",
        "Arduino",
        "espressif",        
        "C",
        "C++",
        "Eagle PCB",
        "Raspberry Pi"        
      ],
      description:
        "Designed and developed a ESP32-based RGB LED controller with Network communication for running text displays used in Jabodebek and Commuter Line trains. Enhanced display stability and reliability across 50+ deployed train units.",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "https://mjmokhtar.cloud/projects/running-text",
      },
    },    
    {
      title: "CCD Train",
      techStack: [
        "Side Project",
        "PLC Schneider",
        "Sensor & Electrical design",
        "OpenCV",        
        "Python",
        "Modbus TCP/IP",
        "PostgreSQL",
        "RESTful API",
        "Network (UDP)"
      ],
      description:
        "Integrated Schneider M221 PLC, ultrasonic sensors, and CCTV to remotely monitor the Current Collector Device (CCD) on trains. Built a Python-based backend to collect and analyze image and sensor data per trainset, reducing on-site inspection frequency by 60%.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Middleware of measurement system weightbridge ANTAM POMALA",
      techStack: [
        "Side Project",
        "Node.js",
        "Network (UDP, FTP)",
        "MySQL",
        "RESTful API"     
      ],
      description:
        "Developed a real-time data acquisition middleware for industrial weightbridge using UDP and FTP. Implemented automated image backup and camera-based material analysis, reducing manual reporting time by 40% and improving traceability.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Dashboard Train Moving Monitoring system",
      techStack: [
        "RESTEK",
        "Node.js",
        "php",
        "Network (UDP)",
        "MySQL",
        "RESTful API",
        "Arduino",
        "espressif",
        "Rapsberry PI"
      ],
      description:
        "Developed a hardware-software integrated platform for real-time trainset tracking and condition monitoring. Implemented RESTful APIs and edge gateways (ESP32 and Raspberry Pi) enabling <2s latency data updates and seamless cloud synchronization.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "ADAS and DSM Validator System",
      techStack: [
        "AMI",
        "Pyhton",
        "OpenCV",
        "YOLO",        
        "MySQL",
        "RESTful API"
      ],
      description:
        "Developed a validation system for ADAS and DSM video analytics to ensure accuracy, consistency, and reliability of driver behavior data. Enhanced anomaly detection and reduced manual validation time by 60%, improving event accuracy by 25%.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "DWE Corrective Maintenance MRT Jakarta",
      techStack: [
        "AMI",
        "Team Lead",
        "Corrective Maintenance",
        "SAT",
        "Python",
        "PyQt5",
        "UART Serial",
        "SCPI"
      ],
      description:
        "Led the team and coordinated with users on corrective maintenance of Depot Workshop Equipment (DWE) ultrasonic flaw detectors at MRT Jakarta: replacing faulty devices and running SAT. Also built a PyQt5 desktop middleware that converts legacy byte data from the old battery charging app into SCPI commands for the new device over serial.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Fuel Monitoring Installation GE U18C Locomotive",
      techStack: [
        "AMI",
        "Teltonika FMC650",
        "Eurosens Dominator",
        "CAN Bus",
        "Wialon",
        "Sensor Calibration",
        "Node.js"
      ],
      description:
        "Installed and commissioned fuel monitoring on GE U18C locomotives using Eurosens Dominator level sensors and Teltonika FMC650 trackers over CAN bus. Mapped CAN fuel level and flow data, built the tank calibration (geometry plus refueling points), and integrated the data into Wialon. Wrote a Node.js Codec 8 simulator to test the integration.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "HABD Dismantling Project MRT Jakarta",
      techStack: [
        "AMI",
        "Project Management",
        "WBS & Gantt",
        "RACI",
        "Risk Register",
        "Field Execution"
      ],
      description:
        "Managed end-to-end dismantling of the Hot Axle Box Detector (HABD) system for PT MRT Jakarta, from work breakdown planning and risk management to field execution and formal handover. Completed 100% of field work safely with full contractual documentation (progress reports, milestone certificates, and BAST).",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Managed Service Network Donggi Senoro LNG",
      techStack: [
        "AMI",
        "Project Coordination",
        "Managed Service",
        "Stakeholder Management"
      ],
      description:
        "Project Coordinator for LAN, WAN, PABX, and NAC installation and managed service (2026-2031) at Donggi Senoro LNG via PT Indosat Ooredoo Hutchison. Coordinate the client and Luwuk site technicians, run kick-off and routine meetings, and keep scope and schedule aligned with the RKS.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Docs Learning",
      techStack: [
        "Portfolio",
        "Arduino",
        "AVR-Atmel",
        "espressif",
        "STM32",
        "RPI",
        "C",
        "C++",
        "Eagle PCB",
        "KiCAD",        
        "Python",
        "Node.js",
        "Go",
        "Node-RED",
        "RDBMS"
      ],
      description:
        "Collection of experimental IoT projects exploring embedded firmware design, sensor networks, MQTT/TCP/UDP communication, and cloud integration using Arduino, ESP32, and STM32 microcontrollers.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://docs.mjmokhtar.cloud",
      },
    },
    {
      title: "Portfolio",
      techStack: ["Portfolio"],
      description:
        "Personal website and online portfolio showcasing embedded systems and IoT development projects.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://mjmokhtar.cloud/",
      },
    },
    {
      title: "Company Profile",
      techStack: ["Portfolio"],
      description:
        "Company profile website for Toaster showcasing services and projects.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://toaster.mjmokhtar.cloud",
      },
    },
    {
      title: "J2ME Retro",
      techStack: 
      ["Portfolio",
        "Vue.js",
        "Bun",
        "PostgreSQL",
        "Typescript"
      ],
      description:
        " J2ME Retro is a free archive of classic Java 2 Micro Edition (J2ME) mobile games. Remember the golden era of mobile gaming before smartphones? We're bringing it back! Download hundreds of legendary Gameloft titles and play them on J2ME emulators. Nostalgia guaranteed!",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://j2me-retro.mjmokhtar.cloud",
      },
    },
    {
      title: "Kampung Halaman (Game Product Management)",
      techStack: [
        "Side Project",
        "Product Management",
        "PRD & ERD",
        "Roadmap & Scope Control",
        "Vanilla JS",
        "Vercel",
        "Go-to-Market"
      ],
      description:
        "Product manager of an Indonesian open-world pixel-art game, from concept to public launch. Wrote the bilingual PRD and ERD, staged the roadmap, and cut or deferred features to keep it shippable. Defined a one-time lifetime-access pricing model and ran the launch promotion.",
      logo: JarockiMeLogo,
      link: {
        label: "kampung-halaman-sand.vercel.app",
        href: "https://kampung-halaman-sand.vercel.app/",
      },
    }
  ],
} as const;