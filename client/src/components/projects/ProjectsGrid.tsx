import { useMemo } from 'react';
import ProjectCard, { ProjectData } from './ProjectCard';

interface ProjectsGridProps {
  projects: ProjectData[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  // Memoize the projects array to avoid unnecessary re-renders
  const memoizedProjects = useMemo(() => projects, [projects]);
  
  return (
    <div className="space-y-16">
      {memoizedProjects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          delay={index * 150} // Stagger the animations
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
