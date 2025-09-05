import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';
import { skillsData } from '@/lib/data';

const row1Skills = [...skillsData.languages, ...skillsData.dataEngineering];
const row2Skills = [...skillsData.visualizationAndBI, ...skillsData.visualizationAndBI];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('skills-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const renderRow = (skills: string[], keyPrefix: string, animation: string) => (
    <div className="relative h-14 mb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

      <div className="flex absolute" style={{ animation }}>
        <div className="flex flex-nowrap gap-6 pr-6">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${keyPrefix}-${index}`}
              className="px-5 py-2.5 whitespace-nowrap text-sm text-gray-800 font-medium hover:bg-gray-100 transition-colors duration-300 bg-white/90 border border-gray-300 rounded-full backdrop-blur-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills-section" className="pt-8 pb-16 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <SectionHeader title="Skills" subtitle="Technologies & Tools" className="mb-12" />
        <div className={cn("transition-opacity duration-700", isVisible ? "opacity-100" : "opacity-0")}>
          {renderRow(row1Skills, 'row1', 'scroll 100s linear infinite')}
          {renderRow(row2Skills, 'row2', 'scroll 120s linear infinite reverse')}
        </div>
      </div>
    </section>
  );
};

export default Skills;
