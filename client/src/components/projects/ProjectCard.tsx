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
          "flex flex-col rounded-xl overflow-hidden border border-gray-700/50 bg-gray-800/70 h-full transition-all duration-300",
          isHovered ? "transform shadow-xl shadow-emerald-500/10" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
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
          
          {/* Project title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag}
                  className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-md backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs bg-gray-700/70 text-gray-300 px-2 py-1 rounded-md backdrop-blur-sm">
                  +{project.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-5 flex flex-col">
          <p className="text-gray-300 text-sm mb-5 flex-1 leading-relaxed">{project.description}</p>
          
          {/* Links */}
          <div className="flex gap-3 mt-auto">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-gray-900 text-sm font-medium px-4 py-2 rounded-md transition-colors flex-1"
            >
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-gray-200 hover:bg-gray-700 text-sm font-medium px-4 py-2 rounded-md transition-colors flex-1"
            >
              Code
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
