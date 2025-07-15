import React from 'react';
import { cn } from '@/lib/utils';

interface GradientHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'hero' | 'medical' | 'emergency';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}

const GradientHeader: React.FC<GradientHeaderProps> = ({
  title,
  subtitle,
  variant = 'primary',
  size = 'md',
  className,
  children
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-dark)]';
      case 'secondary':
        return 'gradient-header-secondary';
      case 'accent':
        return 'bg-gradient-to-r from-[var(--accent-teal)] to-[var(--accent-teal-dark)]';
      case 'hero':
        return 'bg-gradient-to-br from-[var(--primary-red)] via-[var(--primary-red-dark)] to-[var(--primary-red-darker)]';
      case 'medical':
        return 'gradient-header-medical';
      case 'emergency':
        return 'gradient-header-emergency';
      default:
        return 'bg-gradient-to-r from-[var(--primary-red)] to-[var(--primary-red-dark)]';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-8 px-6';
      case 'md':
        return 'py-12 px-8';
      case 'lg':
        return 'py-16 px-10';
      case 'xl':
        return 'py-20 px-12';
      default:
        return 'py-12 px-8';
    }
  };

  const getTitleSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'text-2xl md:text-3xl';
      case 'md':
        return 'text-3xl md:text-4xl';
      case 'lg':
        return 'text-4xl md:text-5xl';
      case 'xl':
        return 'text-5xl md:text-6xl';
      default:
        return 'text-3xl md:text-4xl';
    }
  };

  const getSubtitleSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'text-sm md:text-base';
      case 'md':
        return 'text-base md:text-lg';
      case 'lg':
        return 'text-lg md:text-xl';
      case 'xl':
        return 'text-xl md:text-2xl';
      default:
        return 'text-base md:text-lg';
    }
  };

  return (
    <div className={cn(
      'relative overflow-hidden',
      getGradientClass(),
      getSizeClasses(),
      className
    )}>
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="relative z-10 text-center">
        <h1 className={cn(
          'font-bold text-white mb-2 drop-shadow-lg',
          getTitleSizeClass()
        )}>
          {title}
        </h1>
        
        {subtitle && (
          <p className={cn(
            'text-white/90 font-medium drop-shadow-md',
            getSubtitleSizeClass()
          )}>
            {subtitle}
          </p>
        )}
        
        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-10 -translate-y-10" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full translate-x-8 translate-y-8" />
      <div className="absolute top-1/2 right-0 w-12 h-12 bg-white/10 rounded-full translate-x-6 -translate-y-6" />
    </div>
  );
};

export default GradientHeader;
