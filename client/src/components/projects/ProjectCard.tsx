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
      className="opacity-0 translate-y-4 animate-fade-in-up"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative">
        {/* Subtle connecting line between image and content */}
        <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        
        {/* Project Image */}
        <div 
          className="relative h-[300px] overflow-hidden group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 z-10"></div>
          
          <div 
            className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
          
          {/* Overlay that appears on hover */}
          <div className={cn(
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
            isHovered ? "opacity-60" : "opacity-0"
          )}></div>
          
          {/* Project title visible on mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden z-20">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex flex-col">
          {/* Title hidden on mobile, visible on larger screens */}
          <h3 className="hidden md:block text-2xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
          
          <p className="text-gray-400 text-base mb-8 leading-relaxed">{project.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs px-3 py-1.5 border border-gray-800 text-gray-300 hover:border-white/30 hover:text-white transition-colors duration-300 hover-lift backdrop-blur-sm bg-black/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex gap-5">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-medium px-6 py-2.5 transition-all duration-300 hover:-translate-y-1"
            >
              View Demo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white text-sm font-medium px-6 py-2.5 transition-all duration-300 hover:-translate-y-1"
            >
              View Code
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
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
