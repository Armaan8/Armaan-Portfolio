import { ProjectData } from '../components/projects/ProjectCard';

// Project data based on actual resume information
export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Project Management System",
    description: "Kanban-style task manager with drag-and-drop functionality and Gantt charts for timeline visualization. Features real-time updates, task prioritization, and 25% reduced planning time.",
    imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Redux Toolkit", "Prisma", "Material UI"]
  },
  {
    id: 2,
    title: "AI Image Generation Application",
    description: "Creative image generator using Replicate's AI models with 30+ test images. Features modern ShadCN UI and secure Supabase authentication in a responsive, intuitive interface.",
    imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    tags: ["Next.js", "Supabase", "Replicate API", "ShadCN UI", "Authentication"]
  },
  {
    id: 3,
    title: "Financial Data Tracking System",
    description: "Comprehensive finance tracker with interactive visualizations and budget planning tools. Built with React and Node.js, featuring expense categorization and cross-platform functionality.",
    imageUrl: "https://images.unsplash.com/photo-1579170053380-58828d9c31d4?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    tags: ["React", "Node.js", "PostgreSQL", "Data Visualization", "Responsive Design"]
  }
];

// Skills data from resume
export const skillsData = {
  languages: [
    "Python", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Java"
  ],
  frameworks: [
    "React", "Next.js", "Node.js", "Redux", "Numpy", "Pandas", "Scikit-Learn"
  ],
  tools: [
    "Git", "Github", "Docker", "Firebase", "Supabase", "AWS", "Prisma", "PostgreSQL"
  ]
};

// Certification data from resume
export const certificationData = [
  {
    name: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "Oct 2023",
    verifyLink: "https://aws.amazon.com/certification/"
  },
  {
    name: "Full Stack Development Certificate",
    organization: "LinkedIn Learning",
    date: "Aug 2023",
    verifyLink: "https://www.linkedin.com/learning/"
  },
  {
    name: "Machine Learning Specialization",
    organization: "Coursera",
    date: "May 2023",
    verifyLink: "https://www.coursera.org/"
  },
  {
    name: "Python Data Structures and Algorithms",
    organization: "Udemy",
    date: "Jan 2023",
    verifyLink: "https://www.udemy.com"
  }
];
