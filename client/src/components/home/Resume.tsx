import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('resume-section');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) setIsVisible(true);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  
  const resumeData = [
    {
      title: "B.Tech in Computer Science",
      subtitle: "Vellore Institute of Technology",
      duration: "2022 - 2026",
      description: "Pursuing a bachelor's degree with specialization in artificial intelligence and machine learning.",
    },
    {
      title: "Core Member",
      subtitle: "Computer Society of India",
      duration: "2023 - Present",
      description: "Contributing to web development projects, workshops, and organizing technical events and hackathons.",
    }
  ];

  return (
    <section id="resume-section" className="py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <SectionHeader title="Education" subtitle="Academic Background" className="mb-12" />

        <div className={cn("transition-all duration-700 transform", isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0")}>
          {resumeData.map((item, index) => (
            <div key={index} className="mb-12 border-l border-gray-800 pl-6 relative">
              <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-white" />
              <h4 className="text-white font-medium">{item.title}</h4>
              <p className="text-gray-400 mt-1">{item.subtitle}</p>
              <p className="text-gray-500 text-sm mt-1">{item.duration}</p>
              <p className="text-gray-400 mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
