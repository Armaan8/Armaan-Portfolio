import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = false, 
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      centered ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
      
      {subtitle && (
        <p className="mt-2 text-gray-400 text-base tracking-wide">
          {subtitle}
        </p>
      )}
      
      {!centered && (
        <div className="relative mt-5">
          <div className="h-px w-24 bg-gradient-to-r from-white/20 to-transparent"></div>
          <div className="h-px w-12 bg-white/30 mt-1"></div>
        </div>
      )}
      
      {centered && (
        <div className="flex justify-center mt-5">
          <div className="relative">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
