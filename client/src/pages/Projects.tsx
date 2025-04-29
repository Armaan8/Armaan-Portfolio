import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectsGrid from '../components/projects/ProjectsGrid'; 
import SectionHeader from '../components/ui/section-header';
import Certifications from '../components/home/Certifications';
import { projectsData } from '../lib/data';
import { cn } from '@/lib/utils';

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
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className={cn("transition-opacity duration-500", isLoaded ? 'opacity-100' : 'opacity-0')}>
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
          
          <SectionHeader 
            title="Projects" 
            subtitle="Selected work"
            centered={false}
          />
          
          <div className="mt-10 mb-20">
            <ProjectsGrid projects={projectsData} />
          </div>
          
          {/* Certifications section moved from Home to here */}
          <div className="mt-16">
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
