import ProjectCard, { ProjectData } from './ProjectCard';

interface ProjectsGridProps {
  projects: ProjectData[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="space-y-16">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          delay={index * 150}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
