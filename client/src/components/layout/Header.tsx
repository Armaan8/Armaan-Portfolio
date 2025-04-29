import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Handle body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Nav items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Projects', path: '/projects' }
  ];
  
  return (
    <header 
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-black/80 backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo with subtle animation */}
          <NavLink 
            to="/" 
            className="relative group"
          >
            <span className="text-xl font-bold tracking-tight text-white transition-transform duration-300 inline-block group-hover:scale-110">
              AS
              <span className="absolute h-px w-0 bg-white/50 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  cn(
                    'text-sm tracking-wide font-medium hover:text-white transition-colors relative group',
                    isActive ? 'active-nav-link' : 'text-gray-400'
                  )
                }
              >
                {item.name}
                <span className="absolute h-px w-0 bg-white/30 bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
{/* Contact link removed */}
          </nav>
          
          {/* Mobile Hamburger with hover effect */}
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 hover:bg-white/5 rounded-sm transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Displayed at the top */}
      <div 
        className={cn(
          'fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-lg flex justify-center md:hidden transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 z-40 h-auto pt-20 pb-6' : 'opacity-0 -z-10 h-0 pt-0 pb-0'
        )}
      >
        <nav className="flex flex-col items-center gap-4 text-base relative z-10 w-full px-8">
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                cn(
                  'font-medium text-base tracking-wide transition-colors py-2 w-full text-center border-b border-white/10',
                  isActive ? 'text-white' : 'text-gray-400'
                )
              }
              style={{ 
                transitionDelay: `${index * 50}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'opacity 300ms, transform 300ms'
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
