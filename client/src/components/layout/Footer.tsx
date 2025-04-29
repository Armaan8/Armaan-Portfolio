import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-900">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} Armaan Sharma</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
