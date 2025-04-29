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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start gap-6">
          {/* Name */}
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-700 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            Armaan Sharma
          </h1>
          
          {/* Quote */}
          <p 
            className={cn(
              "text-xl md:text-2xl text-emerald-500 font-medium transition-all duration-700 delay-150 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            Building digital experiences that matter
          </p>
          
          {/* Role */}
          <p 
            className={cn(
              "text-gray-400 max-w-2xl text-lg transition-all duration-700 delay-300 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            Full Stack Developer skilled in building scalable web applications with modern tech stacks
          </p>
          
          {/* CTA Button */}
          <Link 
            to="/projects"
            className={cn(
              "mt-4 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-medium px-6 py-3 rounded-md transition-all duration-300 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              "delay-450"
            )}
          >
            View Projects
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-40 -right-64 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-emerald-700/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;
