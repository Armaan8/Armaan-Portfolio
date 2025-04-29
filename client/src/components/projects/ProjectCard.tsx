import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  tags: string[];
}

interface ProjectCardProps {
  project: ProjectData;
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="opacity-0 translate-y-8 animate-fade-in-up"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <div
        className={cn(
          "flex flex-col rounded-xl overflow-hidden bg-gray-800/50 h-full transition-all duration-300",
          isHovered ? "transform scale-[1.02] shadow-xl shadow-emerald-500/10" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          {/* Use background style for the image to avoid loading actual images */}
          <div 
            className="absolute inset-0 bg-center bg-cover transition-transform duration-500"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 transition-opacity duration-300",
            isHovered ? "opacity-50" : "opacity-70"
          )} />
        </div>
        
        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 my-3">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
          
          {/* Links */}
          <div className="flex justify-between mt-auto">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-500 hover:text-emerald-400 text-sm font-medium transition-colors"
            >
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
