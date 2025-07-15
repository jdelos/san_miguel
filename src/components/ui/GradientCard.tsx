import React from 'react';
import { cn } from '@/lib/utils';

interface GradientCardProps {
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'medical' | 'emergency';
  size?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const GradientCard: React.FC<GradientCardProps> = ({
  title,
  subtitle,
  variant = 'neutral',
  size = 'md',
  hover = true,
  className,
  children,
  onClick
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-br from-[var(--primary-red-lightest)] via-white to-[var(--primary-red-lighter)]';
      case 'secondary':
        return 'bg-gradient-to-br from-[var(--secondary-green-lightest)] via-white to-[var(--secondary-green-lighter)]';
      case 'accent':
        return 'bg-gradient-to-br from-[var(--accent-teal-lightest)] via-white to-[var(--accent-teal-lighter)]';
      case 'neutral':
        return 'bg-gradient-to-br from-[var(--neutral-gray-100)] to-white';
      case 'medical':
        return 'gradient-card-medical';
      case 'emergency':
        return 'bg-gradient-to-br from-[var(--primary-red-lighter)] via-[var(--primary-red-lightest)] to-white';
      default:
        return 'bg-gradient-to-br from-[var(--neutral-gray-100)] to-white';
    }
  };

  const getHoverClass = () => {
    if (!hover) return '';
    
    switch (variant) {
      case 'primary':
        return 'hover:shadow-[0_8px_30px_rgba(238,45,46,0.15)] hover:scale-[1.02] hover:border-[var(--primary-red-light)]';
      case 'secondary':
        return 'hover:shadow-[0_8px_30px_rgba(85,123,104,0.15)] hover:scale-[1.02] hover:border-[var(--secondary-green-light)]';
      case 'accent':
        return 'hover:shadow-[0_8px_30px_rgba(74,124,126,0.15)] hover:scale-[1.02] hover:border-[var(--accent-teal-light)]';
      case 'neutral':
        return 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:scale-[1.02] hover:border-[var(--neutral-gray-400)]';
      case 'medical':
        return 'hover:shadow-[0_8px_30px_rgba(161,84,72,0.15)] hover:scale-[1.02] hover:border-[var(--border-medical)]';
      case 'emergency':
        return 'hover:shadow-[0_8px_30px_rgba(238,45,46,0.2)] hover:scale-[1.02] hover:border-[var(--primary-red)]';
      default:
        return 'hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:scale-[1.02] hover:border-[var(--neutral-gray-400)]';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'p-4 rounded-lg';
      case 'md':
        return 'p-6 rounded-xl';
      case 'lg':
        return 'p-8 rounded-2xl';
      default:
        return 'p-6 rounded-xl';
    }
  };

  const getBorderClass = () => {
    switch (variant) {
      case 'primary':
        return 'border border-[var(--primary-red-lighter)]';
      case 'secondary':
        return 'border border-[var(--secondary-green-lighter)]';
      case 'accent':
        return 'border border-[var(--accent-teal-lighter)]';
      case 'neutral':
        return 'border border-[var(--neutral-gray-200)]';
      case 'medical':
        return 'border border-[var(--border-medical)]';
      case 'emergency':
        return 'border border-[var(--primary-red-light)]';
      default:
        return 'border border-[var(--neutral-gray-200)]';
    }
  };

  const getTitleColor = () => {
    switch (variant) {
      case 'primary':
        return 'text-[var(--primary-red-dark)]';
      case 'secondary':
        return 'text-[var(--secondary-green-dark)]';
      case 'accent':
        return 'text-[var(--accent-teal-dark)]';
      case 'neutral':
        return 'text-[var(--neutral-gray-800)]';
      case 'medical':
        return 'text-[var(--primary-red-dark)]';
      case 'emergency':
        return 'text-[var(--primary-red-darker)]';
      default:
        return 'text-[var(--neutral-gray-800)]';
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden transition-all duration-300 cursor-pointer',
        getGradientClass(),
        getBorderClass(),
        getSizeClasses(),
        getHoverClass(),
        className
      )}
      onClick={onClick}
    >
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-[inherit] p-[1px] bg-gradient-to-br from-white/20 via-transparent to-white/20" />
      
      <div className="relative z-10">
        {title && (
          <h3 className={cn(
            'font-bold mb-2',
            getTitleColor(),
            size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
          )}>
            {title}
          </h3>
        )}
        
        {subtitle && (
          <p className={cn(
            'text-[var(--neutral-gray-600)] mb-4',
            size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-base' : 'text-sm'
          )}>
            {subtitle}
          </p>
        )}
        
        {children}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-white/30 to-transparent rounded-full translate-x-4 -translate-y-4" />
      <div className="absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-x-3 translate-y-3" />
    </div>
  );
};

export default GradientCard;
