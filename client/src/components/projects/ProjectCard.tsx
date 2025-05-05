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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div
      className="opacity-0 translate-y-4 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center relative">
        <div className="relative w-full">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto rounded-lg cursor-pointer"
            onClick={openLightbox} 
          />

          {isLightboxOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
              onClick={closeLightbox}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="max-w-full max-h-screen object-contain"
              />
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden bg-black/50 z-20">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="hidden md:block text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 border border-gray-700 text-gray-300 hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-5 py-2.5 hover:bg-gray-100 transition-transform hover:-translate-y-1"
              >
                View Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 text-sm font-medium px-5 py-2.5 hover:text-white hover:border-gray-500 transition-transform hover:-translate-y-1"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
