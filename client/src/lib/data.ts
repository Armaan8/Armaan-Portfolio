import { ProjectData } from '../components/projects/ProjectCard';

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Project Management System",
    description: "Manage workflows with drag-and-drop functionality and Gantt charts for timeline visualization. Features real-time updates and task prioritization for improved planning efficiency.",
    imageUrl: "public/project.png",
    demoUrl: "https://master.d34cnzde3di62y.amplifyapp.com/",
    githubUrl: "https://github.com/Armaan8/project-management",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Redux Toolkit", "Prisma", "Material UI"]
  },
  {
    id: 2,
    title: "AI Image Generation Application",
    description: "Creative image generator using Replicate's AI models. Features modern ShadCN UI and secure Supabase authentication in a responsive, intuitive interface for seamless user experience.",
    imageUrl: "public/picgen.png",
    demoUrl: "",
    githubUrl: "https://github.com/Armaan8/PicGen-A",
    tags: ["Next.js", "Tailwind","Supabase", "Replicate API", "ShadCN UI"]
  },
];

export const skillsData = {
  languages: [
    "Python", "HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Java"
  ],
  frameworks: [
    "React", "Next.js", "Node.js", "Redux", "Numpy", "Pandas", "Scikit-Learn"
  ],
  tools: [
    "Git", "Github", "Docker", "Material UI", "Supabase", "AWS", "Prisma", "PostgreSQL"
  ]
};

export const certificationData = [
  {
    name: "Python for Development, AI & Data Science",
    organization: " IBM (Coursera)",
  },
  {
    name: "Python and SQL Course",
    organization: "Scaler Topics",
  },
  {
    name: "Data Science Real World Projects in Python",
    organization: "Udemy",
  },
];
