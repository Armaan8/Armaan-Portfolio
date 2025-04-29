import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';
import { certificationData } from '@/lib/data';

interface Certification {
  name: string;
  organization: string;
  date: string;
  verifyLink: string;
}

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('certifications-section');
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
    <section id="certifications-section" className="py-6">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Certifications" subtitle="Technical expertise and achievements" />
        
        <div className="mt-4">
          <div className="flex flex-col gap-4">
            {certificationData.map((cert: Certification, index: number) => (
              <div
                key={cert.name}
                className={cn(
                  "border-b border-gray-800 pb-4 transition-all duration-500 transform",
                  isVisible 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-4 opacity-0",
                  index === certificationData.length - 1 ? "border-b-0" : ""
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-white">{cert.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{cert.organization} • {cert.date}</p>
                  </div>
                  <a 
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-xs mt-2 md:mt-0"
                  >
                    Verify Certificate
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
