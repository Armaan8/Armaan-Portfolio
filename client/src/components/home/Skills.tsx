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
const duplicatedRow1 = [...row1Skills, ...row1Skills, ...row1Skills];
const duplicatedRow2 = [...row2Skills, ...row2Skills, ...row2Skills];

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
    <section id="skills-section" className="py-14 overflow-hidden border-b border-gray-900">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Skills" subtitle="Technologies & Tools" />
        
        {/* Main skills section with scrolling animation - just 2 rows */}
        <div 
          className={cn(
            "mt-8 transition-opacity duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="h-24 overflow-hidden relative">
            {/* First row - Left to right */}
            <div className="animate-scroll flex absolute" style={{ animationDuration: '40s' }}>
              <div className="flex flex-nowrap gap-3 pr-6">
                {duplicatedRow1.map((skill, index) => (
                  <div 
                    key={`row1-${index}`} 
                    className="border border-gray-800 px-4 py-2 whitespace-nowrap text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second row - Right to left */}
            <div className="animate-scroll flex absolute mt-12" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
              <div className="flex flex-nowrap gap-3 pr-6">
                {duplicatedRow2.map((skill, index) => (
                  <div 
                    key={`row2-${index}`} 
                    className="border border-gray-800 px-4 py-2 whitespace-nowrap text-sm"
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
