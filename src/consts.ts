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
  { id: "github", name: "GitHub", url: "https://github.com/camilo-lehue" },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/camilo-lehue",
  },
  { id: "X", name: "X", url: "https://x.com/camilo_lehue" },
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
  { id: "inicio", path: "/", name: "Inicio" },
  { id: "proyectos", path: "#projects", name: "Proyectos" },
  { id: "works", path: "#works", name: "Works" },
  { id: "contacto", path: "#contact", name: "Contacto" },
] as const;

export const WORKS = [
  {
    name: "AST Networks Technology",
    description:
      "Investigación e innovación, desarrollo fullstack de sistemas complejos con arquitecturas escalables desde cero, con tecnologías modernas, utilizando e integrando hardware como radares, sensores, cámaras PTZ, entre otros, unificados en sistemas de monitoreo para diferentes empresas nacionales e internacionales.",
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
      "Desarrollador FullStack como contribuidor de un sistema avanzado, creando módulos hospitalarios nuevos de urgencias, oncología, agenda, farmacia, abastecimiento, informes médicos, entre otros.",
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
