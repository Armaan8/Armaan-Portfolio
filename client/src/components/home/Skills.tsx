import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';
import { skillsData } from '@/lib/data';

// Combine languages and frameworks for row 1
const row1Skills = [
  ...skillsData.languages,
  ...skillsData.frameworks
];

// Use tools and some repeats for row 2
const row2Skills = [
  ...skillsData.tools,
  'REST API', 'Responsive Design', 'Authentication', 'Authorization'
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
    <section id="skills-section" className="pt-8 pb-16 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <SectionHeader title="Skills" subtitle="Technologies & Tools" className="mb-12" />
        
        {/* Main skills section with scrolling animation - just 2 rows */}
        <div 
          className={cn(
            "transition-opacity duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {/* First row - Left to right */}
          <div className="relative h-14 mb-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
            
            <div className="flex absolute" style={{ animation: 'scroll 100s linear infinite' }}>
              <div className="flex flex-nowrap gap-6 pr-6">
                {duplicatedRow1.map((skill, index) => (
                  <div 
                    key={`row1-${index}`} 
                    className="px-5 py-2.5 whitespace-nowrap text-sm text-gray-800 hover:bg-gray-100 transition-colors duration-300 bg-white/80 border border-gray-300 rounded-full backdrop-blur-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Second row - Right to left */}
          <div className="relative h-14 overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>
            
            <div className="flex absolute" style={{ animation: 'scroll 120s linear infinite reverse' }}>
              <div className="flex flex-nowrap gap-6 pr-6">
                {duplicatedRow2.map((skill, index) => (
                  <div 
                    key={`row2-${index}`} 
                    className="px-5 py-2.5 whitespace-nowrap text-sm text-gray-800 hover:bg-gray-100 transition-colors duration-300 bg-white/80 border border-gray-300 rounded-full backdrop-blur-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
