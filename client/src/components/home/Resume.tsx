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
        <SectionHeader title="Resume" subtitle="Education & Experience" className="mb-12" />
        
        <div 
          className={cn(
            "transition-all duration-700 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-lg font-medium text-white mb-6">Education</h3>
            
            <div className="border-l border-gray-800 pl-6 pb-1">
              <div className="mb-8 relative">
                <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-white"></div>
                <h4 className="text-white font-medium">B.Tech in Computer Science</h4>
                <p className="text-gray-400 mt-1">Vellore Institute of Technology</p>
                <p className="text-gray-500 text-sm mt-1">2021 - 2025</p>
                <p className="text-gray-400 mt-3">
                  Pursuing a bachelor's degree with specialization in artificial intelligence and machine learning.
                  CGPA: 8.5/10
                </p>
              </div>
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-lg font-medium text-white mb-6">Technical Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-medium mb-3">Frontend Development</h4>
                <p className="text-gray-400">
                  Experienced in creating responsive user interfaces with modern JavaScript frameworks
                  including React and Next.js. Proficient in TypeScript, CSS frameworks like Tailwind CSS,
                  and implementing responsive design principles.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-3">Backend Development</h4>
                <p className="text-gray-400">
                  Skilled in building robust server-side applications using Node.js with Express.
                  Experience with RESTful API design, database integration, and authentication systems
                  using JWT and OAuth.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-3">Database Management</h4>
                <p className="text-gray-400">
                  Proficient in SQL and NoSQL databases including PostgreSQL, Firebase, and Supabase.
                  Experience with ORM tools like Prisma and implementing efficient data models.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-3">Machine Learning</h4>
                <p className="text-gray-400">
                  Knowledge of machine learning principles and libraries including NumPy, Pandas, and Scikit-Learn.
                  Experience with data preprocessing, model training, and implementing machine learning algorithms.
                </p>
              </div>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="flex justify-center mt-10">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-medium px-6 py-2.5 text-sm transition-colors rounded-sm"
            >
              Download Full Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;