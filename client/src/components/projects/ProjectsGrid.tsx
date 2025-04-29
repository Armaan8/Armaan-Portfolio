import { useMemo, useState } from 'react';
import ProjectCard, { ProjectData } from './ProjectCard';
import { cn } from '@/lib/utils';

interface ProjectsGridProps {
  projects: ProjectData[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [projects]);
  
  // Filter projects by active tag
  const filteredProjects = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter(project => project.tags.includes(activeTag));
  }, [projects, activeTag]);
  
  return (
    <div className="space-y-8">
      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button
          className={cn(
            "px-4 py-2 text-sm rounded-md transition-colors font-medium",
            !activeTag 
              ? "bg-emerald-500 text-gray-900" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          )}
          onClick={() => setActiveTag(null)}
        >
          All Projects
        </button>
        
        {allTags.slice(0, 8).map(tag => (
          <button
            key={tag}
            className={cn(
              "px-4 py-2 text-sm rounded-md transition-colors font-medium",
              activeTag === tag 
                ? "bg-emerald-500 text-gray-900" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            )}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      
      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            delay={index * 150} // Stagger the animations
          />
        ))}
      </div>
      
      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No projects match the selected filter.</p>
          <button
            className="mt-4 px-4 py-2 bg-emerald-500 text-gray-900 rounded-md font-medium"
            onClick={() => setActiveTag(null)}
          >
            Show all projects
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
