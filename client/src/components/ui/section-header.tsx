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
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
      
      {subtitle && (
        <p className="mt-2 text-gray-400 text-sm">
          {subtitle}
        </p>
      )}
      
      {!centered && (
        <div className="mt-4">
          <div className="h-px w-16 bg-gray-800"></div>
        </div>
      )}
      
      {centered && (
        <div className="flex justify-center mt-4">
          <div className="h-px w-16 bg-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
