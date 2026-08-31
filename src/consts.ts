import { timerMessage } from "node_modules/astro/dist/core/logger/core";

export const SEO = {
  siteName: "Camilo Lehue - Software Engineer",
  description:
    "Camilo Lehue is a software engineer with a passion for building web applications and exploring new technologies.",
  url: "https://camilo-lehue.cl",
  image: "https://camilo-lehue.cl/imgage.png",
  keywords: "software engineer, web development, programming",
  author: "Camilo Lehue",
} as const;

export const CONFIG_SITE = {
  color: "#000004",
};

export interface Socials {
  id: string;
  name: string;
  url: string;
}

export const SOCIALS: Socials[] = [
  { id: "github", name: "GitHub", url: "https://github.com/CamiloLehue" },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://cl.linkedin.com/in/camilo-lehue-igor-1b7712234",
  },
  {
    id: "Gmail",
    name: "camilolehue1995@gmail.com",
    url: "https://mail.google.com/mail/u/0/#inbox",
  },
] as const;

export interface Section {
  id: string;
  name: string;
}

export const SECTIONS: Section[] = [
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact" },
] as const;

export interface Navigation {
  id: string;
  path: string;
  name: string;
}
export const NAVIGATION = [
  { id: "home", path: "/", name: "Home" },
  { id: "works", path: "#works", name: "Works" },
  { id: "activity", path: "#activity", name: "Activity" },
  { id: "projects", path: "#projects", name: "Projects" },
  { id: "services", path: "#services", name: "Services" },
] as const;

export const WORKS = [
  {
    name: "AST Networks Technology",
    description:
      "Arquitectura y desarrollo Full Stack en múltiples proyectos de investigación y desarrollo desde cero, integrando hardware especializado (radares, sensores y cámaras PTZ) en diferentes softwares de monitoreo (Seguimientos, detección, seguridad, prevención) para diversos clientes nacionales e internacionales.",
    url: "https://ast.cl",
    position: "Full Stack Developer",
    timerMessage: "Enero 2025 - Presente",
    projects: [
      {
        name: "TrackIoT",
        description:
          "TrackIoT es una aplicación web que permite a los usuarios rastrear y gestionar sus dispositivos IoT. Ofrece visualización de datos en tiempo real, gestión de dispositivos y notificaciones de alerta.",
        technologies: [
          "ReactJS",
          "TypeScript",
          "Python - FastAPI",
          "MongoDB",
          "Socket.IO",
          "PostgreSQL",
          "Docker",
        ],
      },
      {
        name: "RadareSoftware",
        description:
          "Sistema de rastreo y gestión de radares, con visualización de datos en tiempo real y notificaciones de alerta, manejo visual con cámaras PTZ y gestión de usuarios.",
        technologies: [
          "ReactJS",
          "TypeScript",
          "Python - FastAPI",
          "MongoDB",
          "PostgreSQL",
          "Socket.IO",
        ],
      },
      {
        name: "AST Website",
        description:
          "El sitio web de AST Networks Technology es una plataforma que proporciona información sobre la empresa, sus servicios y proyectos. Incluye un panel administrativo.",
        technologies: [
          "ReactJS",
          "TypeScript",
          "Python - FastAPI",
          "MongoDB",
          "PostgreSQL",
        ],
      },
    ],
  },
  {
    name: "Sistemas Expertos Ingeniería de Software",
    description:
      "Desarrollador Full Stack especializado en la creación de módulos clave para plataformas de salud, abarcando desde la atención al paciente (Urgencias, Oncología, Agenda) hasta la operativa hospitalaria (Farmacia, Abastecimiento y Reportes).",
    url: "https://www.sistemasexpertos.cl/",
    position: "Full Stack Developer",
    timerMessage: "Agosto 2021 - Enero 2025",
    projects: [
      {
        name: "Hospital Puerto Montt",
        description:
          "ERP Clínico es un sistema de gestión hospitalaria que permite a los hospitales y clínicas gestionar sus operaciones diarias, incluyendo la gestión de pacientes, citas, facturación y más.",
        technologies: [
          "PHP",
          "AJAX",
          "PostgreSQL",
          "Git",
          "Javascript",
          "HTML",
          "CSS",
        ],
      },
      {
        name: "SAMU ERP RELONCAVÍ",
        description:
          "ERP Clínico es un sistema de gestión hospitalaria que permite a los hospitales y clínicas gestionar sus operaciones diarias, incluyendo la gestión de pacientes, citas, facturación y más.",
        technologies: [
          "PHP",
          "AJAX",
          "PostgreSQL",
          "Git",
          "Javascript",
          "HTML",
          "CSS",
        ],
      },
      {
        name: "DESAM",
        description:
          "ERP Clínico es un sistema de gestión hospitalaria que permite a los hospitales y clínicas gestionar sus operaciones diarias, incluyendo la gestión de pacientes, citas, facturación y más.",
        technologies: [
          "PHP",
          "AJAX",
          "PostgreSQL",
          "Git",
          "Javascript",
          "HTML",
          "CSS",
        ],
      },
      {
        name: "SSDR",
        description:
          "ERP Clínico es un sistema de gestión hospitalaria que permite a los hospitales y clínicas gestionar sus operaciones diarias, incluyendo la gestión de pacientes, citas, facturación y más.",
        technologies: [
          "PHP",
          "AJAX",
          "PostgreSQL",
          "Git",
          "Javascript",
          "HTML",
          "CSS",
        ],
      },
      {
        name: "Chiloé",
        description:
          "ERP Clínico es un sistema de gestión hospitalaria que permite a los hospitales y clínicas gestionar sus operaciones diarias, incluyendo la gestión de pacientes, citas, facturación y más.",
        technologies: [
          "PHP",
          "AJAX",
          "PostgreSQL",
          "Git",
          "Javascript",
          "HTML",
          "CSS",
        ],
      },
    ],
  },
];

export const PROJECTS = [
  {
    name: "TrackIoT",
    srcImg: "/projects/trackiot.png",
  },
  {
    name: "RadareSoftware",
    srcImg: "/projects/radares.png",
  },
  {
    name: "AST Website",
    srcImg: "/projects/ast.png",
  },
];
