import { ProjectData } from '../components/projects/ProjectCard';

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "E-commerce Business Insights (Olist)",
    description: "End-to-end SQL analytics on 100k+ rows joining 8+ tables; built multi-page Power BI dashboards to monitor sales, shipping performance, payment method impact and key business KPIs.",
    imageUrl: "public/olist.png",
    demoUrl: "",
    githubUrl: "https://github.com/Armaan8/Olist-Analysis",
    tags: ["SQL", "PostgreSQL", "Power BI", "Data Modeling", "Time Series"]
  },
  {
    id: 2,
    title: "Am I Healthy? — Apple Health Analytics",
    description: "Processed and transformed 1.6M+ Apple Health records into a daily analytics store; performed feature engineering, time-series trend analysis and predictive modeling for resting heart rate and activity forecasting.",
    imageUrl: "public/health.png",
    demoUrl: "",
    githubUrl: "https://github.com/Armaan8/Apple_Health_Analysis",
    tags: ["Python", "Pandas", "Feature Engineering", "Time Series", "Predictive Modeling"]
  },
  {
    id: 3,
    title: "Interactive HR Analytics Dashboard",
    description: "Designed a Tableau dashboard to track 10+ HR KPIs (attrition, headcount, income); implemented drill-downs and exportable reports to support stakeholder decision-making and self-service analytics.",
    imageUrl: "public/hr.png",
    demoUrl: "https://public.tableau.com/app/profile/armaan.sharma5268/viz/HRDashboard_17244247612440/HRSummary",
    githubUrl: "",
    tags: ["Tableau", "KPI Reporting", "Data Visualization", "Self-Service BI"]
  },
  {
    id: 4,
    title: "AI Image Generation Application",
    description: "Full-stack AI application leveraging Replicate’s diffusion models; integrated secure Supabase auth, history tracking, and prompt tuning to provide responsive, personalized image generation workflows.",
    imageUrl: "public/picgen.png",
    demoUrl: "",
    githubUrl: "https://github.com/Armaan8/PicGen-A",
    tags: ["Next.js", "Tailwind", "Supabase", "Replicate API", "AI Deployment"]
  },
  {
    id: 5,
    title: "Project Management System (Data Ops Features)",
    description: "Full-stack Kanban app with metadata tracking, task analytics and exportable timelines; added instrumentation for usage metrics and dashboards to monitor team throughput and SLA compliance.",
    imageUrl: "public/project.png",
    demoUrl: "https://master.d34cnzde3di62y.amplifyapp.com/",
    githubUrl: "https://github.com/Armaan8/project-management",
    tags: ["Next.js", "PostgreSQL", "Analytics", "Prisma", "Instrumentation"]
  }
];

export const skillsData = {
  languages: [
    "Python",
    "SQL",
    "JavaScript",
    "TypeScript",
    "Java",
  ],
  dataEngineering: [
    "ETL",
    "Data Modeling",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Prisma",
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "PyTorch",
    "Time Series Analysis",
    "Feature Engineering",
    "Anomaly Detection"
  ],
  visualizationAndBI: [
    "Power BI",
    "Tableau",
    "Looker",
    "Excel",
    "Dashboard Design",
    "DVC",
    "Docker",
    "GitHub Actions (CI/CD)",
    "AWS",
    "Model Versioning",
    "Monitoring & Logging"
  ]
};

export const certificationData = [
  {
    name: "AWS Certified AI Practitioner",
    organization: "Amazon Web Services",
    note: "Score: 1000/1000",
    link: "https://drive.google.com/file/d/1fP_VEWyJ9q2L3ud_AzmtXZQChS9s71F5/view?usp=sharing"
  },
  {
    name: "Amazon ML Summer School",
    organization: "Amazon India",
    note: "Selected for a competitive 4-week program (Aug 2025)"
  },
  {
    name: "Data Science Real World Projects in Python",
    organization: "Udemy"
  },
  {
    name: "Python and SQL Course",
    organization: "Scaler Topics"
  },
  {
    name: "LLM Engineering",
    organization: "Ed Donner (Udemy)"
  }
];
