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
    <section className="relative pt-32 pb-20 md:py-36 overflow-hidden">
      {/* Aesthetic background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-48 left-[10%] w-64 h-64 rounded-full bg-white/3 blur-3xl"></div>
        <div className="absolute bottom-24 right-[5%] w-96 h-96 rounded-full bg-white/3 blur-3xl"></div>
      </div>
      
      {/* Main content with increased spacing */}
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col items-start md:max-w-2xl">
          {/* Name with stylish minimal background */}
          <div className="mb-3 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -skew-y-2 transform"></div>
            <h1 
              className={cn(
                "relative text-4xl md:text-5xl font-bold tracking-tight text-white py-2 pl-2 transition-all duration-500 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              Armaan Sharma
              <span className="block h-px w-1/2 bg-white/50 mt-3"></span>
            </h1>
          </div>
          
          <p 
            className={cn(
              "text-lg text-gray-400 font-medium mt-2 ml-2 transition-all duration-500 delay-100 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            Full Stack Developer
          </p>
          
          {/* Bio with increased spacing */}
          <p 
            className={cn(
              "text-gray-500 max-w-xl text-base mt-10 leading-relaxed transition-all duration-500 delay-200 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            I design and build digital experiences with a focus on minimalism, functionality, and performance. Specializing in modern web applications that make an impact.
          </p>
          
          {/* Action buttons */}
          <div 
            className={cn(
              "flex gap-5 mt-12 transition-all duration-500 delay-300 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
          >
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-medium px-6 py-2.5 text-sm transition-colors"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 border border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white font-medium px-6 py-2.5 text-sm transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
