import type {ImageMetadata} from "astro";
import photo from "../assets/photo.jpg";
import amazonLogo from "../assets/logos/amazon.webp";
import utsLogo from "../assets/logos/uts.png";
import mouserLogo from "../assets/logos/mouser.avif";
import utaLogo from "../assets/logos/uta.png";
import sellmarkLogo from "../assets/logos/sellmark.jpeg";
import polymathImg from "../assets/projects/polymath-rpc.png";
import genaiProBadge from "../assets/certs/genai-pro.png";
import developerBadge from "../assets/certs/developer-associate.png";

export type Role = {
  title: string;
  shortTitle: string;
  company: string;
  team?: string;
  logo: ImageMetadata;
  start: string;
  // Leave out while the role is current.
  end?: string;
  featured?: boolean;
  bullets: string[];
  tags?: string[];
};

export type Project = {
  name: string;
  description: string;
  url: string;
  icon?: string;
  image?: ImageMetadata;
  tags?: string[];
  featured?: boolean;
};

export const profile = {
  name: "Aashish Maharjan",
  headline: ["I build backends,", "cloud systems &"],
  headlineAccent: "AI agents.",
  intro:
    "Software developer with 2+ years shipping APIs and microservices on AWS. MS CS at UT Arlington.",
  photo,
  email: "aashishmaharjan177@gmail.com",
  github: "https://github.com/aashish177",
  linkedin: "https://www.linkedin.com/in/aashishmaharjan1/",
  resume:
    "https://drive.google.com/file/d/1S0nN6C5uuY6LC4CHZtffKh-ynNM_clcV/view?usp=sharing",
  openTo: "Open to roles in backend, cloud and AI engineering."
};

export const experience: Role[] = [
  {
    title: "Software Development Engineer Intern",
    shortTitle: "SDE Intern",
    company: "Amazon",
    logo: amazonLogo,
    start: "Sep 2026",
    featured: true,
    bullets: [
      "Built conversational job search for Amazon's hourly hiring site end to end, from an MCP server on a Bedrock AgentCore gateway to the LangGraph agent, CDK infrastructure and React frontend."
    ],
    tags: ["MCP", "Bedrock AgentCore", "LangGraph", "AWS CDK", "React"]
  },
  {
    title: "Application Services Intern",
    shortTitle: "Application Services Intern",
    company: "UT System",
    logo: utsLogo,
    start: "May 2026",
    end: "Aug 2026",
    bullets: [
      "Helped migrate 50+ legacy applications to the cloud for 100,000+ students, faculty and staff across 14 campuses."
    ]
  },
  {
    title: "Developer I",
    shortTitle: "Developer I",
    company: "Mouser Electronics",
    logo: mouserLogo,
    start: "Jul 2023",
    end: "Jan 2025",
    bullets: [
      "Built REST APIs in Java and Spring Boot, and a FastAPI microservice that cut client-side API calls by 40%."
    ]
  },
  {
    title: "Student Assistant",
    shortTitle: "Student Assistant",
    company: "UT Arlington",
    logo: utaLogo,
    start: "Aug 2022",
    end: "Apr 2023",
    bullets: [
      "Added features and API integrations to dashboard and onboarding tools with Flask and MySQL."
    ]
  },
  {
    title: "Intern",
    shortTitle: "Intern",
    company: "Sellmark Corporation",
    logo: sellmarkLogo,
    start: "Jun 2022",
    end: "Aug 2022",
    bullets: [
      "Built Django features for warehouse task logging on mobile and tablet, backed by PostgreSQL."
    ]
  }
];

export const education = {
  degree: "M.S. Computer Science",
  school: "University of Texas at Arlington",
  logo: utaLogo,
  dates: "2025 – 2027",
  note: "Expected May",
  gpa: "4.0",
  award: "Lonestar Excellence Scholarship",
  coursework: [
    "Deep Learning",
    "Distributed Systems",
    "Cloud Computing",
    "Big Data",
    "Data Mining",
    "Design & Analysis of Algorithms",
    "Data Analysis & Modeling"
  ]
};

export const certifications = [
  {
    name: "Generative AI Developer",
    level: "Professional",
    badge: genaiProBadge,
    description:
      "Design GenAI architectures, integrate foundation models into applications, and build agentic AI solutions.",
    url: "https://www.credly.com/badges/11858832-f073-4fe6-8166-2aaecf43ab87/public_url"
  },
  {
    name: "Developer",
    level: "Associate",
    badge: developerBadge,
    description:
      "Build on AWS APIs, CLI and SDKs, use containers, and deploy through CI/CD pipelines.",
    url: "https://www.credly.com/badges/4d8257f0-bfae-4a1d-a90d-fe4cbe66f951"
  }
];

export const projects: Project[] = [
  {
    name: "Digital Scribe",
    description:
      "An autonomous content system where 5 specialized LangGraph agents produce SEO-optimized articles.",
    url: "https://github.com/aashish177/Digital-Scribe",
    tags: ["LangGraph", "Multi-agent", "Python"],
    featured: true
  },
  {
    name: "Polymath RPC",
    description:
      "A distributed gRPC calculator with Java and Go servers and Python and Node.js clients.",
    url: "https://github.com/aashish177/Polymath-RPC",
    image: polymathImg,
    tags: ["gRPC", "Java", "Go", "Docker"],
    featured: true
  },
  {
    name: "Insight",
    description:
      "Generates inline comments and docstrings for Python code with GPT-4 Turbo and AST parsing.",
    url: "https://github.com/aashish177/Insight",
    icon: "✎"
  },
  {
    name: "Nexus",
    description:
      "Social media backend in FastAPI with PostgreSQL, JWT authentication and Alembic migrations, in Docker.",
    url: "https://github.com/aashish177/Nexus",
    icon: "◎"
  },
  {
    name: "Cosmic Cluster",
    description:
      "Spring Boot microservices ERP backend with an API gateway, Eureka discovery and centralized config.",
    url: "https://github.com/aashish177/Cosmic-Cluster",
    icon: "⌘"
  }
];

const featuredRole = experience.find(r => r.featured);

// Hero pill and photo tag follow the featured role, so ending it is a one-line change.
export const status = featuredRole
  ? featuredRole.end
    ? {
        pill: `Ex-${featuredRole.company} ${featuredRole.shortTitle} · Open to roles`,
        tag: `Ex-${featuredRole.company}`
      }
    : {
        pill: `${featuredRole.shortTitle} @ ${featuredRole.company}`,
        tag: `@ ${featuredRole.company}`
      }
  : {pill: "Open to roles", tag: undefined};
