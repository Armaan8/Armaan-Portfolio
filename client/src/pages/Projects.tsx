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
    <div className="min-h-screen pt-32 pb-16 relative">
      {/* Enhanced background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Subtle accent spots */}
        <div className="absolute top-48 left-[15%] w-72 h-72 rounded-full bg-white/2 blur-3xl"></div>
        <div className="absolute bottom-64 right-[10%] w-96 h-96 rounded-full bg-white/2 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className={cn("transition-opacity duration-500", isLoaded ? 'opacity-100' : 'opacity-0')}>
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 text-sm group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="transition-colors duration-300">Back to Home</span>
          </Link>
          
          <SectionHeader 
            title="Projects" 
            subtitle="Innovative web applications I've built"
            centered={false}
            className="mb-16"
          />
          
          <div className="mt-10 mb-32">
            <ProjectsGrid projects={projectsData} />
          </div>
          
          {/* Divider */}
          <div className="relative py-6 mb-16">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          
          {/* Certifications section moved from Home to here */}
          <div>
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
