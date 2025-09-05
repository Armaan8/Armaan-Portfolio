import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/section-header';
import Certifications from '../components/home/Certifications';
import { cn } from '@/lib/utils';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen pt-32 pb-16 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        <div className="absolute top-48 left-[15%] w-72 h-72 rounded-full bg-white/2 blur-3xl"></div>
        <div className="absolute bottom-64 right-[10%] w-96 h-96 rounded-full bg-white/2 blur-3xl"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className={cn("transition-opacity duration-500", isLoaded ? 'opacity-100' : 'opacity-0')}>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 text-sm group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="transition-colors duration-300">Back to Home</span>
          </Link>
          
          <SectionHeader 
  title="About Me" 
  subtitle="My background and experience"
  centered={false}
  className="mb-10"
/>

{/* Internship Experience */}
<div className="mb-12">
  <h3 className="text-xl font-medium text-white mb-4">Internship Experience</h3>
  <div className="border-l border-gray-800 pl-6 pb-1">
    <div className="mb-6 relative">
      <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-white"></div>
      <h4 className="text-white font-medium">Data/AI/ML Intern</h4>
      <p className="text-gray-400 mt-1">Kantar – Bengaluru (Onsite)</p>
      <p className="text-gray-500 text-sm mt-1">May 2025 – July 2025</p>
      <p className="text-gray-400 mt-2">
        Built a Gemini AI assistant integrated into Power BI dashboards for natural language Q&A and data uploads, 
        and developed an end-to-end MLOps pipeline for hotel booking predictions with automated retraining and CI/CD deployment.
      </p>
    </div>
  </div>
</div>

{/* Education */}
<div className="mb-12">
  <h3 className="text-xl font-medium text-white mb-4">Education</h3>
  <div className="border-l border-gray-800 pl-6 pb-1">
    <div className="mb-6 relative">
      <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-white"></div>
      <h4 className="text-white font-medium">B.Tech in Computer Science</h4>
      <p className="text-gray-400 mt-1">Vellore Institute of Technology</p>
      <p className="text-gray-500 text-sm mt-1">2022 – 2026</p>
      <p className="text-gray-400 mt-2">
        Pursuing a bachelor's degree with specialization in Data Science.
      </p>
    </div>
  </div>
</div>

{/* Positions of Responsibility */}
<div className="mb-12">
  <h3 className="text-xl font-medium text-white mb-4">Positions of Responsibility</h3>
  <div className="border-l border-gray-800 pl-6 pb-1">
    
    <div className="mb-6 relative">
      <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-white"></div>
      <h4 className="text-white font-medium">Core Member</h4>
      <p className="text-gray-400 mt-1">Computer Society of India – VIT Vellore</p>
      <p className="text-gray-500 text-sm mt-1">Apr 2023 – Present</p>
      <p className="text-gray-400 mt-2">
        Contributed to organizing Yantra '23 and '24, VIT’s central hackathons, streamlining execution for 1000+ attendees.
      </p>
      <p className="text-gray-400 mt-2">
        Led planning and execution of technical workshops and events, overseeing logistics, outreach, and engagement.
      </p>
    </div>

    <div className="mb-6 relative">
      <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-white"></div>
      <h4 className="text-white font-medium">Organizing Team Member</h4>
      <p className="text-gray-400 mt-1">Yantra '23 & '24 Hackathon – VIT Vellore</p>
      <p className="text-gray-500 text-sm mt-1">2023 – 2024</p>
      <p className="text-gray-400 mt-2">
        Managed operations for VIT’s central hackathon with a prize pool of 3+ lakh INR and 500+ participants.
      </p>
    </div>

    <div className="mb-6 relative">
      <div className="absolute -left-[25px] top-1 h-4 w-4 rounded-full bg-white"></div>
      <h4 className="text-white font-medium">Student Body Coordinator</h4>
      <p className="text-gray-400 mt-1">Student Council Management Team – VIT Vellore</p>
      <p className="text-gray-500 text-sm mt-1">2023 – 2024</p>
      <p className="text-gray-400 mt-2">
        Served as liaison for 10+ student clubs, streamlining event approvals and resource allocation 
        to enable successful club activities each semester.
      </p>
    </div>

  </div>
</div>

          
          <div className="mb-12">
            <Certifications />
          </div>
          
          <div className="flex justify-center mt-10 mb-6">
            <a 
              href="https://drive.google.com/file/d/1C5ZdK8AH0jHHbnPerSvuiKm5AZ0uhj9X/view?usp=sharing" 
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
    </div>
  );
};

export default About;