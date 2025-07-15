import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  variant?: 'primary' | 'medical' | 'emergency' | 'animated';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
  overlay?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  variant = 'primary',
  size = 'lg',
  className,
  children,
  backgroundImage,
  overlay = true
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'primary':
        return 'gradient-header-primary';
      case 'medical':
        return 'gradient-header-medical';
      case 'emergency':
        return 'gradient-header-emergency';
      case 'animated':
        return 'gradient-animated-medical';
      default:
        return 'gradient-header-primary';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'py-16 px-6';
      case 'md':
        return 'py-20 px-8';
      case 'lg':
        return 'py-24 px-10';
      case 'xl':
        return 'py-32 px-12';
      default:
        return 'py-24 px-10';
    }
  };

  const getTitleSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'text-3xl md:text-4xl lg:text-5xl';
      case 'md':
        return 'text-4xl md:text-5xl lg:text-6xl';
      case 'lg':
        return 'text-5xl md:text-6xl lg:text-7xl';
      case 'xl':
        return 'text-6xl md:text-7xl lg:text-8xl';
      default:
        return 'text-5xl md:text-6xl lg:text-7xl';
    }
  };

  const getSubtitleSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'text-lg md:text-xl';
      case 'md':
        return 'text-xl md:text-2xl';
      case 'lg':
        return 'text-2xl md:text-3xl';
      case 'xl':
        return 'text-3xl md:text-4xl';
      default:
        return 'text-2xl md:text-3xl';
    }
  };

  const getDescriptionSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'text-base md:text-lg';
      case 'md':
        return 'text-lg md:text-xl';
      case 'lg':
        return 'text-xl md:text-2xl';
      case 'xl':
        return 'text-2xl md:text-3xl';
      default:
        return 'text-xl md:text-2xl';
    }
  };

  return (
    <section className={cn(
      'relative overflow-hidden text-center',
      getGradientClass(),
      getSizeClasses(),
      className
    )}>
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Overlay */}
      {overlay && (
        <div className={cn(
          'absolute inset-0',
          backgroundImage ? 'gradient-overlay-primary' : 'opacity-20'
        )}>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 0c22.091 0 40 17.909 40 40S62.091 80 40 80 0 62.091 0 40 17.909 0 40 0zm0 2c-20.987 0-38 17.013-38 38s17.013 38 38 38 38-17.013 38-38-17.013-38-38-38zm0 6c17.673 0 32 14.327 32 32s-14.327 32-32 32-32-14.327-32-32 14.327-32 32-32z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Medical Cross Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm">
            <svg 
              className="w-8 h-8 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
        
        {/* Title */}
        <h1 className={cn(
          'font-bold text-white mb-4 drop-shadow-lg leading-tight',
          getTitleSizeClass()
        )}>
          {title}
        </h1>
        
        {/* Subtitle */}
        {subtitle && (
          <h2 className={cn(
            'text-white/90 font-semibold mb-6 drop-shadow-md',
            getSubtitleSizeClass()
          )}>
            {subtitle}
          </h2>
        )}
        
        {/* Description */}
        {description && (
          <p className={cn(
            'text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed',
            getDescriptionSizeClass()
          )}>
            {description}
          </p>
        )}
        
        {/* Children (buttons, etc.) */}
        {children && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {children}
          </div>
        )}
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-0 w-20 h-20 bg-white/10 rounded-full translate-x-10 -translate-y-10 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-white/10 rounded-full -translate-x-8 animate-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Medical Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M60 20v20h20v20H60v20H40V60H20V40h20V20h20zm0 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
