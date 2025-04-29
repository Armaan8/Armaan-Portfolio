import { ProjectData } from '../components/projects/ProjectCard';

// Project data based on actual resume information
export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Project Management System",
    description: "Developed a comprehensive project management system with 4 sections: To Do, Work In Progress, Under Review, and Completed. Implemented drag-and-drop functionality, task prioritization, and real-time progress updates. Integrated Gantt charts for project timelines, reducing planning time by 25%.",
    imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Redux Toolkit", "Prisma", "Material UI"]
  },
  {
    id: 2,
    title: "AI Image Generation Application",
    description: "Built an AI image generation app using Replicate's flux-dev and flux-schnell models, generating 30+ images during testing. Created a modern, responsive UI with ShadCN UI, optimizing navigation and reducing interaction time. Implemented authentication with Supabase for secure access.",
    imageUrl: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    tags: ["Next.js", "Supabase", "Replicate API", "ShadCN UI", "Authentication"]
  },
  {
    id: 3,
    title: "Financial Data Tracking System",
    description: "Developed a financial tracking system with data visualization capabilities, expense categorization, and budget planning tools. Used React for the frontend and Node.js for backend services, with PostgreSQL for data storage. Implemented responsive design for cross-platform functionality.",
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
    "React", "Next.js", "Node.js", "Redux", "Numpy", "Pandas", "Ski-kit Learn"
  ],
  tools: [
    "Git", "Github", "Docker", "Firebase", "Supabase", "AWS", "Prisma", "PostgreSQL"
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
