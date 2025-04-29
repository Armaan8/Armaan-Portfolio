import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative pt-24 pb-12 md:py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start md:max-w-2xl">
          {/* Name and Title */}
          <h1 
            className={cn(
              "text-3xl md:text-4xl font-bold tracking-tight text-white transition-all duration-500 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            Armaan Sharma
          </h1>
          
          <p 
            className={cn(
              "text-lg text-gray-400 font-medium mt-1 transition-all duration-500 delay-100 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            Full Stack Developer
          </p>
          
          {/* Bio */}
          <p 
            className={cn(
              "text-gray-500 max-w-xl text-base mt-6 leading-relaxed transition-all duration-500 delay-200 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            I design and build digital experiences with a focus on minimalism, functionality, and performance. Specializing in modern web applications that make an impact.
          </p>
          
          {/* Action buttons */}
          <div 
            className={cn(
              "flex gap-4 mt-8 transition-all duration-500 delay-300 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-medium px-4 py-2 text-sm rounded-sm transition-colors"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-700 text-gray-300 hover:border-white hover:text-white font-medium px-4 py-2 text-sm rounded-sm transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Minimal background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-gray-900 to-transparent opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-gray-900 to-transparent opacity-20"></div>
    </section>
  );
};

export default Hero;
