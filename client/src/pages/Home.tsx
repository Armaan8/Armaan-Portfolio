import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Skills from '../components/home/Skills';
import Contact from '../components/home/Contact';

const Home = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle hash navigation for smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial hash if present
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background grid pattern for the entire page */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Subtle accent spots */}
        <div className="absolute top-48 left-[15%] w-72 h-72 rounded-full bg-white/2 blur-3xl"></div>
        <div className="absolute bottom-64 right-[10%] w-96 h-96 rounded-full bg-white/2 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
