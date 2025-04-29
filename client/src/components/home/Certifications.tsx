import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';

interface Certification {
  name: string;
  organization: string;
  date: string;
  verifyLink: string;
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    date: 'Dec 2023',
    verifyLink: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
  },
  {
    name: 'Professional Full Stack Engineer',
    organization: 'Meta',
    date: 'Aug 2023',
    verifyLink: 'https://www.meta.com'
  },
  {
    name: 'TensorFlow Developer Certificate',
    organization: 'Google',
    date: 'May 2023',
    verifyLink: 'https://www.tensorflow.org/certificate'
  },
  {
    name: 'Advanced React and Redux',
    organization: 'Udemy',
    date: 'Jan 2023',
    verifyLink: 'https://www.udemy.com'
  }
];

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
    <section id="certifications-section" className="py-16 bg-gray-900/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader title="Certifications" subtitle="Professional qualifications" />
        
        <div className="mt-12">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li 
                key={cert.name}
                className={cn(
                  "bg-gray-800/50 rounded-lg p-4 md:p-6 transition-all duration-500 hover:bg-gray-800 transform",
                  isVisible 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-8 opacity-0",
                  `delay-${index * 100}`
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">{cert.name}</h3>
                    <p className="text-gray-400 mt-1">{cert.organization} • {cert.date}</p>
                  </div>
                  <a 
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-500 hover:text-emerald-400 transition-colors text-sm"
                  >
                    Verify
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
