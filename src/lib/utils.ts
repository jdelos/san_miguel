import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Color utility functions for working with CSS custom properties
export const colorUtils = {
  // Get CSS custom property value
  getCSSVariable: (property: string): string => {
    if (typeof document !== 'undefined') {
      return getComputedStyle(document.documentElement).getPropertyValue(property);
    }
    return '';
  },
  
  // Convert hex to rgba
  hexToRgba: (hex: string, alpha: number = 1): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return hex;
    
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },
  
  // Generate color variations
  generateColorVariations: (baseColor: string) => {
    // This is a simplified version - in a real app you might want to use a color manipulation library
    return {
      base: baseColor,
      light: baseColor + '20', // Adding transparency for light version
      dark: baseColor + 'CC',  // Adding transparency for dark version
    };
  }
};

// Gradient utility functions
export const gradientUtils = {
  // Create custom gradient with Hospital San Miguel colors
  createMedicalGradient: (direction: string = '135deg', colors: string[] = ['var(--primary-red)', 'var(--primary-red-dark)']) => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
  },
  
  // Create gradient with opacity
  createGradientWithOpacity: (color1: string, color2: string, opacity: number = 1, direction: string = '135deg') => {
    return `linear-gradient(${direction}, ${color1}${Math.round(opacity * 255).toString(16).padStart(2, '0')}, ${color2}${Math.round(opacity * 255).toString(16).padStart(2, '0')})`;
  },
  
  // Predefined Hospital San Miguel gradients
  medical: {
    primary: 'linear-gradient(135deg, var(--primary-red) 0%, var(--primary-red-dark) 100%)',
    secondary: 'linear-gradient(135deg, var(--secondary-teal) 0%, var(--secondary-teal-dark) 100%)',
    accent: 'linear-gradient(135deg, var(--accent-green) 0%, var(--accent-green-dark) 100%)',
    hero: 'linear-gradient(135deg, var(--primary-red) 0%, var(--primary-red-dark) 50%, var(--primary-red-darker) 100%)',
    medical: 'linear-gradient(135deg, var(--primary-red) 0%, var(--accent-green) 100%)',
    emergency: 'linear-gradient(135deg, var(--primary-red-dark) 0%, var(--primary-red-darker) 100%)',
    subtle: 'linear-gradient(135deg, var(--primary-red-lightest) 0%, var(--primary-red-lighter) 100%)',
    card: 'linear-gradient(145deg, var(--neutral-white) 0%, var(--neutral-gray-100) 100%)',
    cardHover: 'linear-gradient(145deg, var(--primary-red-lightest) 0%, var(--neutral-white) 100%)',
  }
};

// Animation utility functions
export const animationUtils = {
  // Create smooth transitions
  createTransition: (properties: string[] = ['all'], duration: string = '300ms', easing: string = 'ease-in-out') => {
    return properties.map(prop => `${prop} ${duration} ${easing}`).join(', ');
  },
  
  // Common animation classes
  fadeIn: 'animate-in fade-in duration-300',
  slideUp: 'animate-in slide-in-from-bottom-4 duration-300',
  scaleIn: 'animate-in zoom-in-95 duration-300',
  
  // Hover effects
  hoverScale: 'hover:scale-105 transition-transform duration-300',
  hoverShadow: 'hover:shadow-lg transition-shadow duration-300',
  hoverGlow: 'hover:shadow-[0_0_30px_rgba(238,45,46,0.3)] transition-shadow duration-300',
};

// Typography utility functions
export const typographyUtils = {
  // Get responsive text size classes
  getResponsiveTextSize: (size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl') => {
    const sizeMap = {
      xs: 'text-xs sm:text-sm',
      sm: 'text-sm sm:text-base',
      base: 'text-base sm:text-lg',
      lg: 'text-lg sm:text-xl',
      xl: 'text-xl sm:text-2xl',
      '2xl': 'text-2xl sm:text-3xl',
      '3xl': 'text-3xl sm:text-4xl',
      '4xl': 'text-4xl sm:text-5xl',
      '5xl': 'text-5xl sm:text-6xl',
      '6xl': 'text-6xl sm:text-7xl',
    };
    
    return sizeMap[size] || sizeMap.base;
  },
  
  // Get text color for different backgrounds
  getTextColor: (background: 'light' | 'dark' | 'primary' | 'secondary' | 'accent') => {
    const colorMap = {
      light: 'text-[var(--text-on-light)]',
      dark: 'text-[var(--text-on-dark)]',
      primary: 'text-[var(--text-on-primary)]',
      secondary: 'text-[var(--text-on-secondary)]',
      accent: 'text-[var(--text-on-accent)]',
    };
    
    return colorMap[background] || colorMap.light;
  }
};
