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
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-gray-500 text-sm">{subtitle}</p>
      )}
      {!centered && (
        <div className="h-px bg-gray-800 mt-4 w-16" />
      )}
    </div>
  );
};

export default SectionHeader;
