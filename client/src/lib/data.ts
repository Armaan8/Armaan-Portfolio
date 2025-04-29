import { ProjectData } from '../components/projects/ProjectCard';

// Project data for the portfolio with the three specific projects requested
export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Project Management System",
    description: "A comprehensive project management tool for teams with task tracking, timeline visualization, and resource allocation features.",
    imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://project-management-demo.com",
    githubUrl: "https://github.com/armaansharma/project-management",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"]
  },
  {
    id: 2,
    title: "AI Photo Generation App",
    description: "Generate unique, high-quality images from text descriptions using advanced AI models. Features style customization and batch processing.",
    imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://ai-photo-generator-demo.com",
    githubUrl: "https://github.com/armaansharma/ai-photo-generator",
    tags: ["Next.js", "Python", "TensorFlow", "OpenAI API", "AWS"]
  },
  {
    id: 3,
    title: "AI-Powered Financial Tracker",
    description: "Smart financial management application that uses AI to analyze spending patterns, forecast budgets, and provide personalized saving recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1579170053380-58828d9c31d4?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://financial-tracker-demo.com",
    githubUrl: "https://github.com/armaansharma/financial-tracker",
    tags: ["React", "Express", "PostgreSQL", "Machine Learning", "D3.js"]
  }
];

// Skills data grouped by category
export const skillsData = {
  frontend: [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML/CSS", "JavaScript"
  ],
  backend: [
    "Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"
  ],
  database: [
    "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"
  ],
  devOps: [
    "Git", "Docker", "AWS", "CI/CD", "Webpack", "Jest", "Vercel"
  ]
};

// Certification data
export const certificationData = [
  {
    name: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "Dec 2023",
    verifyLink: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    name: "Professional Full Stack Engineer",
    organization: "Meta",
    date: "Aug 2023",
    verifyLink: "https://www.meta.com"
  },
  {
    name: "TensorFlow Developer Certificate",
    organization: "Google",
    date: "May 2023",
    verifyLink: "https://www.tensorflow.org/certificate"
  },
  {
    name: "Advanced React and Redux",
    organization: "Udemy",
    date: "Jan 2023",
    verifyLink: "https://www.udemy.com"
  }
];
