import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';

// Simplified skill list for scrolling animation
const allSkills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 
  'GraphQL', 'REST API', 'HTML', 'CSS', 'Tailwind CSS', 'SCSS',
  'Redux', 'Git', 'GitHub', 'AWS', 'Docker', 'PostgreSQL', 
  'MongoDB', 'SQL', 'NoSQL', 'Python', 'Django', 'Jest',
  'Testing Library', 'CI/CD', 'Webpack', 'Vite', 'WebSockets',
  'Firebase', 'Authentication', 'Authorization', 'Stripe',
  'Payment Integration', 'Responsive Design', 'Performance Optimization'
];

// Duplicate the skills to create a continuous scroll effect
const duplicatedSkills = [...allSkills, ...allSkills];

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
    <section id="skills-section" className="py-14 bg-gray-900/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Skills" subtitle="Technologies & Tools" />
        
        {/* Main skills section with scrolling animation */}
        <div 
          className={cn(
            "mt-8 transition-opacity duration-700",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="h-32 md:h-40 overflow-hidden relative">
            {/* First row - Left to right */}
            <div className="animate-scroll flex absolute pt-2">
              <div className="flex flex-nowrap gap-3 pr-6">
                {duplicatedSkills.map((skill, index) => (
                  <div 
                    key={`row1-${index}`} 
                    className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-sm whitespace-nowrap text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Second row - Right to left */}
            <div className="animate-scroll flex absolute pt-16 md:pt-20" style={{ animationDirection: 'reverse' }}>
              <div className="flex flex-nowrap gap-3 pr-6">
                {duplicatedSkills.reverse().map((skill, index) => (
                  <div 
                    key={`row2-${index}`} 
                    className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-sm whitespace-nowrap text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Core skills highlight */}
        <div 
          className={cn(
            "mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {['Frontend', 'Backend', 'Database', 'DevOps'].map((category, index) => (
            <div 
              key={category}
              className="border border-gray-800 rounded-sm p-4"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-sm font-medium uppercase tracking-wider text-white mb-3">{category}</h3>
              <div className="space-y-2">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    <span className="text-gray-400 text-sm">
                      {category === 'Frontend' && ['React', 'TypeScript', 'Next.js'][i]}
                      {category === 'Backend' && ['Node.js', 'Express', 'GraphQL'][i]}
                      {category === 'Database' && ['PostgreSQL', 'MongoDB', 'Redis'][i]}
                      {category === 'DevOps' && ['Docker', 'CI/CD', 'AWS'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
