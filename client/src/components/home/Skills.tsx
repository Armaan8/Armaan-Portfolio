import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML/CSS', 'JavaScript']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL']
  },
  {
    name: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis']
  },
  {
    name: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack', 'Jest', 'Vercel']
  }
];

const Skills = () => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills-section');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight - 100;
      
      if (isVisible) {
        const newVisibleCategories: number[] = [];
        for (let i = 0; i < skillCategories.length; i++) {
          setTimeout(() => {
            setVisibleCategories(prev => [...prev, i]);
          }, i * 200);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section id="skills-section" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Skills" subtitle="Technologies I work with" />
        
        <div className="mt-12 space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className={cn(
                "transition-all duration-700 transform",
                visibleCategories.includes(categoryIndex) 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-12 opacity-0"
              )}
            >
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-gray-800 rounded-full px-4 py-2 inline-flex items-center justify-center text-sm font-medium hover:bg-gray-700 transition-colors"
                  >
                    {skill}
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
