import { useEffect, useState } from 'react';
import ProjectsGrid from '../components/projects/ProjectsGrid'; 
import SectionHeader from '../components/ui/section-header';
import { projectsData } from '../lib/data';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading delay for transition effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <SectionHeader 
            title="My Projects" 
            subtitle="A showcase of my recent work and technical skills"
            centered={true}
          />
          
          <div className="mt-12">
            <ProjectsGrid projects={projectsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
