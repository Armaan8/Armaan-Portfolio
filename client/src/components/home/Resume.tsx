import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('resume-section');
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
    <section id="resume-section" className="py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <SectionHeader title="Education" subtitle="Academic Background" className="mb-12" />
        
        <div 
          className={cn(
            "transition-all duration-700 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {/* Education */}
          <div className="mb-12">            
            <div className="border-l border-gray-800 pl-6 pb-1">
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-white"></div>
                <h4 className="text-white font-medium">B.Tech in Computer Science</h4>
                <p className="text-gray-400 mt-1">Vellore Institute of Technology</p>
                <p className="text-gray-500 text-sm mt-1">2022 - 2026</p>
                <p className="text-gray-400 mt-3">
                  Pursuing a bachelor's degree with specialization in artificial intelligence and machine learning.
                </p>
              </div>
            </div>
          </div>
          
          {/* Computer Society of India */}
          <div className="mb-12">
            <h3 className="text-lg font-medium text-white mb-6">Organizations</h3>
            
            <div className="border-l border-gray-800 pl-6 pb-1">
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-white"></div>
                <h4 className="text-white font-medium">Technical Team Member</h4>
                <p className="text-gray-400 mt-1">Computer Society of India</p>
                <p className="text-gray-500 text-sm mt-1">2023 - Present</p>
                <p className="text-gray-400 mt-3">
                  Active member of the technical team, contributing to web development projects and technical workshops.
                  Participated in organizing technical events and hackathons for the student community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;