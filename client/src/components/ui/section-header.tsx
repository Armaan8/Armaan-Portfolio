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
  centered = true, 
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn(
      centered ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-400">{subtitle}</p>
      )}
      <div className={cn(
        "h-1 bg-emerald-500 mt-4 rounded-full w-16",
        centered ? "mx-auto" : ""
      )} />
    </div>
  );
};

export default SectionHeader;
