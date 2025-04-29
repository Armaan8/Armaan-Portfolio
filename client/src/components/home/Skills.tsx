import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';

// Simplified skill list for scrolling animation
const row1Skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 
  'GraphQL', 'REST API', 'HTML', 'CSS', 'Tailwind CSS', 'SCSS',
  'Redux', 'Git', 'GitHub', 'AWS', 'Docker', 'PostgreSQL'
];

const row2Skills = [
  'MongoDB', 'SQL', 'NoSQL', 'Python', 'Django', 'Jest',
  'Testing Library', 'CI/CD', 'Webpack', 'Vite', 'WebSockets',
  'Firebase', 'Authentication', 'Authorization', 'Responsive Design'
];

// Duplicate the skills to create a continuous scroll effect
const duplicatedRow1 = [...row1Skills, ...row1Skills];
const duplicatedRow2 = [...row2Skills, ...row2Skills];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills-section');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;
      
      if (isVisible) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section id="skills-section" className="py-24 overflow-hidden relative">
      {/* Aesthetic background for skills section */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/20 z-0"></div>
      
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <SectionHeader title="Skills" subtitle="Technologies & Tools" className="mb-16" />
        
        {/* Main skills section with scrolling animation - just 2 rows */}
        <div 
          className={cn(
            "transition-opacity duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {/* First row - Left to right */}
          <div className="relative h-14 mb-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <div className="animate-scroll flex absolute">
              <div className="flex flex-nowrap gap-6 pr-6">
                {duplicatedRow1.map((skill, index) => (
                  <div 
                    key={`row1-${index}`} 
                    className="border border-gray-800 px-5 py-2.5 whitespace-nowrap text-sm hover:border-white/50 hover:text-white transition-colors duration-300 backdrop-blur-sm bg-black/30 hover-lift"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Second row - Right to left */}
          <div className="relative h-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <div className="animate-scroll flex absolute" style={{ animationDirection: 'reverse' }}>
              <div className="flex flex-nowrap gap-6 pr-6">
                {duplicatedRow2.map((skill, index) => (
                  <div 
                    key={`row2-${index}`} 
                    className="border border-gray-800 px-5 py-2.5 whitespace-nowrap text-sm hover:border-white/50 hover:text-white transition-colors duration-300 backdrop-blur-sm bg-black/30 hover-lift"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Subtle glowing effect in the center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 blur-3xl rounded-full pointer-events-none opacity-70 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
