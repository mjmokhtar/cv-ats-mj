import {
  ConsultlyLogo,
  EvercastLogo,
  JarockiMeLogo,
  MonitoLogo,
  ParabolLogo,

} from "@/images/logos";
import { GitHubIcon, LinkedInIcon} from "@/components/icons";


export const RESUME_DATA = {
  name: "Muhammad Jumi'at Mokhtar",
  initials: "MJ",
  location: "Jakarta, Indonesia",
  locationLink: "https://maps.app.goo.gl/2s7FBP1uNst6EjQB8",
  about:
    "Toaster. 🔌♨️🍞",
  summary:
    "Embedded Systems & (IoT Tinkerer and Developer at Same time also IoT Engineer) with physics background and several years of experience developing IoT solutions. Proven ability to design, prototype, and implement embedded systems for instrumentation applications, specializing in precision measuring instruments and calibration systems.",
  avatarUrl: "https://avatars.githubusercontent.com/u/108962994?v=4",
  personalWebsiteUrl: "https://mjmokhtar.netlify.app/",
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
      company: "Side Jobs",
      link: "",
      badges: ["Freelance"],
      title: "IoT Engineer & Embedded Systems Tutor",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Provide consultation and hands-on development of IoT and embedded systems. Design and integrate smart devices with sensors, microcontrollers, and communication protocols. Deliver personalized tutoring for professionals and students in microcontroller programming, PCB design, IoT protocols, and real-world hardware deployment.",
    },
    {
      company: "AMI",
      link: "https://amanmedia.id/",
      badges: ["Office"],
      title: "IoT Engineer",
      logo: ConsultlyLogo, // bisa pakai placeholder atau logo khusus
      start: "2025",
      end: null,
      description:
      "This Jakarta-based technology partner, established in 2019, focuses on helping industries build integrated systems through innovative, simple, and trusted solutions.",
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
        "A technology and engineering based company that provides solutions for various Special Industrial Railway",
    }
  ],
  skills: [
    "Programming & Scripting",  
    "IoT, Embedded & Firmware Systems",
    "PCB Layout & Circuit Design Engineer",
    "System Design & Integration",
    "Network Configuration & Protocols",    
],
  projects: [
    {
      title: "EAMMS ATWP",
      techStack: [                
        "Node.js",
        "RESTful API",
        "Node-RED",
        "Modbus TCP/IP",
        "Network (UDP)",
        "PostgreSQL",
        "RESTEK"
      ],
      description:
        "Developed a monitoring and control system for the Automatic Train Wash Plant (ATWP) and RFID Train System at Jabodebek LRT. Integrated PLCs via Modbus TCP/IP with a Node.js backend and PostgreSQL database, achieving 99% system uptime and reducing manual inspection by 40%.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Running Text LED",
      techStack: [
        "Arduino",
        "espressif",        
        "C",
        "C++",
        "Eagle PCB",
        "Raspberry Pi",
        "RESTEK"
      ],
      description:
        "Designed and developed a ESP32-based RGB LED controller with Network communication for running text displays used in Jabodebek and Commuter Line trains. Enhanced display stability and reliability across 50+ deployed train units.",
      logo: EvercastLogo,
      link: {
        label: "github.com",
        href: "",
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
      title: "Middleware of measurement system",
      techStack: [
        "Side Project",
        "Node.js",
        "Network (UDP, FTP)",
        "MySQL",
        "RESTful API"     
      ],
      description:
        "Developed a real-time data acquisition middleware for industrial weight sensors using UDP and FTP. Implemented automated image backup and camera-based material analysis, reducing manual reporting time by 40% and improving traceability.",
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
      title: "Middleware Apps",
      techStack: [
        "AMI",
        "Pyhton",
        "UART Serial",
        "PyQT5",        
        "Desktop Apps"
      ],
      description:
        "Developed a dekstop middleware system for Battery charging. using serial comunication protocol to convert byte data from old apps to new device battery charging using protocol SCPI.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "IoT Tinkerer",
      techStack: [
        "Portfolio",
        "Arduino",
        "espressif",
        "STM32",
        "RPI",
        "C",
        "C++",
        "Eagle PCB",        
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
        href: "",
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
        href: "https://mjmokhtar.netlify.app/",
      },
    }
  ],
} as const;
