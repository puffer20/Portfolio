export type Category = "Python" | "AI" | "Machine Learning" | "Data Engineering" | "Cloud & APIs" | "Java";

export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  technology: string[];
  tags?: string[];
  categories: Category[];
  link?: { label: string; href: string };
  visual: "orbit" | "stream" | "pulse" | "weather" | "rag" | "gemma" | "tracezero" | "client-management";
}

export const FILTERS: Array<"All" | Category> = ["All", "Python", "AI", "Machine Learning", "Data Engineering", "Cloud & APIs", "Java"];

export const projects: Project[] = [
  {
    id: "cosmic", number: "01", category: "AI", title: "Knowledge Copilot",
    subtitle: "Hybrid RAG System",
    description: "A fully local, high-performance hybrid RAG system featuring dual-stage reranking (RRF + Cross-Encoder) and pure-Python offline LLM inference.",
    technology: ["Python", "Fast API", "Quadrant", "BM25"],
    tags: ["Python", "Data Engineering", "Data Visualization", "APIs"],
    categories: ["Python", "AI", "Data Engineering"],
    link: { label: "View on GitHub", href: "https://github.com/chipkarsaish/Knowledge-Copilot-Hybrid-RAG-Document-Intelligence-System.git" },
    visual: "rag",
  },
  {
    id: "gemma-3-knowledge-graph",
    number: "02",
    category: "Python · AI · NLP",
    title: "Fine-tuning google/gemma-3-1b-it for Knowledge Graph Generation",
    subtitle: "Parameter-Efficient Fine-Tuning (PEFT/LoRA) for Scientific Text Extraction",
    description: "Fine-tuned Google's Gemma-3-1B-IT model using LoRA and TRL to extract and construct detailed knowledge graphs from complex scientific and physics texts.",
    technology: ["Python", "Hugging Face", "PEFT / LoRA", "TRL", "PyTorch"],
    tags: ["LLM", "Fine-Tuning", "Knowledge Graph", "Gemma-3", "LoRA"],
    categories: ["Python", "AI"],
    link: { label: "View on GitHub", href: "https://github.com/chipkarsaish/Gemma3_1B_it_Fine_Tuning_LoRA.git" },
    visual: "gemma",
  },
  {
    id: "heart", number: "03", category: "Java", title: "TRACEZERO",
    subtitle: "Metadata Privacy Firewall data",
    description: "TRACEZERO (TraceZero Sentinel) is a Java-based security tool that detects, analyzes, and removes sensitive metadata from documents, images, and archives, acting as a privacy firewall against accidental data leaks.",
    technology: ["Java", "MVC Architecture", "File System APIs", "Thread Management"],
    tags: ["Java", "MVC Architecture", "File System APIs", "Thread Management"],
    categories: ["Java"],
    link: { label: "View on GitHub", href: "https://github.com/chipkarsaish/TRACEZERO_mod.git" },
    visual: "tracezero",
  },
  {
    id: "client-management",
    number: "05",
    category: "Full-Stack Development",
    title: "Client Management System",
    subtitle: "Client, document & relationship management",
    description: "A full-stack management system for handling client profiles, tracking documents, visualizing family relationships, and managing locations through a React frontend, Spring Boot REST APIs, and MySQL database.",
    technology: ["React", "Java", "Spring Boot", "SQL", "REST APIs"],
    tags: ["React", "Java", "Spring Boot", "SQL", "REST APIs"],
    categories: ["Java"],
    link: { label: "View on GitHub", href: "https://github.com/chipkarsaish/client_managment_system_Springboot.git" },
    visual: "client-management",
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  logo?: string;
  skills: string[];
  credentialUrl?: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issueDate: "",
    expiryDate: "",
    credentialId: "",
    logo: "/certificates/aws-cloud-practitioner.png",
    skills: ["AWS", "Cloud Computing", "EC2", "S3"],
    credentialUrl: "",
    category: "Cloud Computing",
  },
  {
    id: "google-advanced-data-analytics",
    title: "Google Advanced Data Analytics Professional Certificate",
    issuer: "Google (via Coursera)",
    issueDate: "January 2026",
    expiryDate: "",
    credentialId: "BHVE1K5O58W6",
    logo: "/certificates/google.png",
    skills: [
      "Python",
      "Data Analysis",
      "Statistics",
      "Regression",
      "Machine Learning",
      "Predictive Modeling"
    ],
    credentialUrl: "https://coursera.org/verify/professional-cert/BHVE1K5O58W6",
    category: "Data Science"
  }
];

export const skillGroups = [
  {
    label: "Programming",
    items: ["Java", "Python", "SQL"],
  },
  {
    label: "Software Development",
    items: [
      "Spring Boot MVC",
      "REST APIs",
      "JPA / Hibernate",
      "Spring Security",
      "React.js",
    ],
  },
  {
    label: "Data Science",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "TensorFlow",
    ],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    label: "Cloud & Tools",
    items: [
      "AWS (EC2, S3, IAM, VPC, RDS)",
      "Docker",
      "Linux",
      "Git",
    ],
  },
];

export const approach = [
  { step: "01", title: "Understand the problem", body: "Clarify who it's for, what the data looks like, and what a useful outcome actually means before writing code." },
  { step: "02", title: "Build the system", body: "Ship a working pipeline end to end — data, model or logic, and an interface people can use." },
  { step: "03", title: "Validate and refine", body: "Test against real inputs, measure what matters, and iterate until it holds up." },
];

export const profile = {
  name: "Saish Chipkar",
  role: "Software Developer · Data Science & Machine Learning",
  location: "Mumbai, India",
  email: "saish.chipkar25@gmail.com",
  github: "https://github.com/chipkarsaish",
  site: "",
  // TODO: Replace with your real LinkedIn profile URL.
  linkedin: "https://www.linkedin.com/in/saishchipkar",
  // TODO: Add your actual resume PDF at public/resume.pdf (no resume is included yet).
  resume: "/resume.pdf",
};
