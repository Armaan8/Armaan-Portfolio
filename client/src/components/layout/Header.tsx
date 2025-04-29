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
    { name: 'Projects', path: '/projects' }
  ];
  
  return (
    <header 
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-white">
            AS
          </NavLink>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  cn(
                    'text-sm font-medium hover:text-white transition-colors',
                    isActive ? 'text-white' : 'text-gray-400'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a 
              href="#contact" 
              className="text-sm text-gray-400 hover:text-white font-medium transition-colors"
            >
              Contact
            </a>
          </nav>
          
          {/* Mobile Hamburger */}
          <button 
            className="md:hidden flex items-center"
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
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-black/98 flex flex-col justify-center items-center md:hidden transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 z-40' : 'opacity-0 -z-10'
        )}
      >
        <nav className="flex flex-col items-center gap-6 text-base">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                cn(
                  'font-medium hover:text-white transition-colors',
                  isActive ? 'text-white' : 'text-gray-400'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a 
            href="#contact" 
            className="text-gray-400 hover:text-white font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
