import {
  ConsultlyLogo,
  EvercastLogo,
  JarockiMeLogo,
  MonitoLogo,
  ParabolLogo,

} from "@/images/logos";
import { GitHubIcon, LinkedInIcon} from "@/components/icons";
import { Twitter } from "lucide-react";

export const RESUME_DATA = {
  name: "Muhammad Jumi'at Mokhtar",
  initials: "MJ",
  location: "Jakarta, Indonesia",
  locationLink: "https://maps.app.goo.gl/2s7FBP1uNst6EjQB8",
  about:
    "Generalist.",
  summary:
    "A physics graduate from Lambung Mangkurat University in 2022. Currently, I'm working as a Engineer at PT. RESTEK. I have a career interest as a Researcher, Embedded System & Firmware Engineer, IoT Developer, and Electronics, Intrumentation & Calibration Technician. I have proficiency in creating, prototype, programming, and modifying calibrated measuring instruments.",
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
        url: "https://www.linkedin.com/in/muhammadjumiatmokhtar/",
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
      company: "RESTEK",
      link: "https://www.rsteknologi.com/",
      badges: ["Office"],
      title: "Engineer",
      logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description:
        "a technology and engineering based company that provides solutions for various Special Industrial sectors including Automotive, Railway, Control Systems, Multimedia, Manufacturing, Security, Sea Transportation, Maritime Industry including Navigation and Marine Telecommunications.",
    },
  ],
  skills: [
    "JavaScript",  
    "Node.js",
    "Node-RED",
    "Go",
    "php",    
    "SQL",
    "espressif",
    "Arduino",
    "STM32",
    "C",
    "C++",    
    "Python",
    "Linux",
    "Raspberry Pi",    
    "Lattepanda",
    "EAGLE",
    "PLC Schneider"
  ],
  projects: [
    {
      title: "EAMMS ATWP",
      techStack: [                
        "Node.js",
        "RESTful API",
        "Node-RED",
        "Modbus TCP/IP",
        "UDP",
        "PostgreSQL"
      ],
      description:
        "Integration monitoring and control system of Automatic Train Wash Plant (ATWP) and RFID tag & Reader Train of the Jabodebek LRT based on Modbus TCP/IP",
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
      ],
      description:
        "Designed hardware PCB and firmware for a running text display unit using dot matrix LED panels on trains as front display information system",
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
        "Electrical design",
        "OpenCV",        
        "Python",
        "Modbus TCP/IP"     
      ],
      description:
        "Integration PLC Schneider M221 PLC and wired ultrasonic sensors and CCTV for monitoring Current Collector Device (CCD) Train",
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
        "FTP",
        "UDP",        
        "MySQL",
        "RESTful API"     
      ],
      description:
        "Weight Sensor Data Processing System real-time data transmission, featuring backup systems, FTP image uploads, and camera integration for material analysis.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "IoT Hobbies",
      techStack: [
        "Side Project",
        "Arduino",
        "espressif",
        "STM32",
        "C",
        "C++",
        "Eagle PCB",        
        "Python",
        "Node-RED",
      ],
      description:
        "Create something for fun and learning same time",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Portfolio",
      techStack: ["Side Project"],
      description:
        "Personal website and blog",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://mjmokhtar.netlify.app/",
      },
    }
  ],
} as const;
