import { ProjectData } from '../components/projects/ProjectCard';

// Project data for the portfolio
export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, user authentication, and real-time inventory management.",
    imageUrl: "https://images.unsplash.com/photo-1523289619464-d9be9d0d5ca2?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/armaansharma/ecommerce-platform",
    tags: ["React", "Node.js", "MongoDB", "Stripe API", "Redux"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workflows, and analytics dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://taskapp-demo.com",
    githubUrl: "https://github.com/armaansharma/task-manager",
    tags: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Weather Forecast PWA",
    description: "A progressive web app providing real-time weather data with offline capabilities and location-based forecasts.",
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://weather-pwa-demo.com",
    githubUrl: "https://github.com/armaansharma/weather-pwa",
    tags: ["React", "PWA", "Weather API", "Geolocation", "Workbox"]
  },
  {
    id: 4,
    title: "Financial Dashboard",
    description: "An interactive dashboard visualizing financial data with customizable charts, reports, and expense tracking.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://finance-dashboard-demo.com",
    githubUrl: "https://github.com/armaansharma/finance-dashboard",
    tags: ["Vue.js", "D3.js", "Express", "Firebase", "Tailwind CSS"]
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "A social networking application with real-time messaging, content sharing, and personalized feeds.",
    imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://social-demo.com",
    githubUrl: "https://github.com/armaansharma/social-platform",
    tags: ["React", "Socket.io", "MongoDB", "Redis", "AWS S3"]
  },
  {
    id: 6,
    title: "AI Image Generator",
    description: "A web application leveraging AI to generate unique images based on text prompts with various style options.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=700",
    demoUrl: "https://ai-image-demo.com",
    githubUrl: "https://github.com/armaansharma/ai-image-generator",
    tags: ["Next.js", "Python", "TensorFlow", "FastAPI", "Docker"]
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
