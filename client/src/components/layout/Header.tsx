import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
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
          
          {/* Nav links - always visible */}
          <nav className="flex items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  cn(
                    'text-sm tracking-wide font-medium hover:text-white transition-colors relative group px-2 sm:px-3 md:px-4',
                    isActive ? 'text-white' : 'text-gray-400'
                  )
                }
              >
                {item.name}
                <span className="absolute h-px w-0 bg-white/30 bottom-0 left-0 right-0 mx-auto transition-all duration-300 group-hover:w-1/2"></span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
