import React from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'medical' | 'emergency' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  animated?: boolean;
  className?: string;
  children: React.ReactNode;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  animated = true,
  className,
  children,
  disabled,
  ...props
}) => {
  const getBaseClasses = () => {
    return cn(
      'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 overflow-hidden',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'active:scale-95',
      animated && 'hover:shadow-lg transform hover:-translate-y-0.5',
      fullWidth && 'w-full',
      disabled && 'opacity-50 cursor-not-allowed',
      (isLoading || disabled) && 'pointer-events-none'
    );
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return cn(
          'gradient-button-primary text-white',
          'focus:ring-[var(--primary-red-light)]',
          'shadow-[0_4px_14px_rgba(238,45,46,0.3)]',
          animated && 'hover:shadow-[0_8px_25px_rgba(238,45,46,0.4)]'
        );
      case 'secondary':
        return cn(
          'gradient-button-secondary text-white',
          'focus:ring-[var(--secondary-green-light)]',
          'shadow-[0_4px_14px_rgba(85,123,104,0.3)]',
          animated && 'hover:shadow-[0_8px_25px_rgba(85,123,104,0.4)]'
        );
      case 'accent':
        return cn(
          'gradient-button-accent text-white',
          'focus:ring-[var(--accent-teal-light)]',
          'shadow-[0_4px_14px_rgba(74,124,126,0.3)]',
          animated && 'hover:shadow-[0_8px_25px_rgba(74,124,126,0.4)]'
        );
      case 'medical':
        return cn(
          'gradient-button-medical text-white',
          'focus:ring-[var(--primary-red-light)]',
          'shadow-[0_4px_14px_rgba(161,84,72,0.3)]',
          animated && 'hover:shadow-[0_8px_25px_rgba(161,84,72,0.4)]'
        );
      case 'emergency':
        return cn(
          'bg-gradient-to-r from-[var(--primary-red-dark)] to-[var(--primary-red-darker)] text-white',
          'focus:ring-[var(--primary-red)]',
          'shadow-[0_4px_14px_rgba(238,45,46,0.4)]',
          animated && 'hover:shadow-[0_8px_25px_rgba(238,45,46,0.5)]',
          'hover:from-[var(--primary-red-darker)] hover:to-[var(--primary-red-darkest)]'
        );
      case 'outline':
        return cn(
          'bg-transparent border-2 border-[var(--primary-red)] text-[var(--primary-red)]',
          'focus:ring-[var(--primary-red-light)]',
          'hover:bg-[var(--primary-red)] hover:text-white',
          'shadow-[0_2px_8px_rgba(238,45,46,0.2)]',
          animated && 'hover:shadow-[0_4px_15px_rgba(238,45,46,0.3)]'
        );
      case 'ghost':
        return cn(
          'bg-transparent text-[var(--primary-red)]',
          'focus:ring-[var(--primary-red-light)]',
          'hover:bg-[var(--primary-red-lightest)]',
          animated && 'hover:shadow-[0_2px_8px_rgba(238,45,46,0.2)]'
        );
      default:
        return getVariantClasses();
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'xl':
        return 'px-10 py-5 text-xl';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'md':
        return 'w-5 h-5';
      case 'lg':
        return 'w-6 h-6';
      case 'xl':
        return 'w-7 h-7';
      default:
        return 'w-5 h-5';
    }
  };

  return (
    <button
      className={cn(
        getBaseClasses(),
        getVariantClasses(),
        getSizeClasses(),
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="flex items-center justify-center gap-2">
        {leftIcon && (
          <span className={cn('flex-shrink-0', getIconSize())}>
            {leftIcon}
          </span>
        )}
        
        <span className={cn(
          'relative z-10',
          isLoading && 'opacity-0'
        )}>
          {children}
        </span>
        
        {rightIcon && (
          <span className={cn('flex-shrink-0', getIconSize())}>
            {rightIcon}
          </span>
        )}
      </div>

      {/* Shimmer Effect */}
      {animated && !disabled && !isLoading && (
        <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full hover:translate-x-full transition-transform duration-1000" />
      )}

      {/* Ripple Effect Container */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-white/10 scale-0 rounded-full transition-transform duration-300 active:scale-100" />
      </div>
    </button>
  );
};

export default GradientButton;
