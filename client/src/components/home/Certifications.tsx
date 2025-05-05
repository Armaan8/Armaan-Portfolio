import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionHeader from '../ui/section-header';
import { certificationData } from '@/lib/data';

interface Certification {
  name: string;
  organization: string;
  date: string;
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
    handleScroll();

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
          {certificationData.map((cert, index) => (
            <div
              key={cert.name}
              className={cn(
                "pb-4 transition-all duration-500 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                index !== certificationData.length - 1 && "border-b border-gray-800"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col">
                <h3 className="text-base font-medium text-white">{cert.name}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {cert.organization}
                </p>
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
