# Hospital San Miguel - Gradient Design System Documentation

## Overview

This design system provides a comprehensive set of components and utilities based on the Hospital San Miguel brand colors, with the primary red color **#EE2D2E** as the foundation.

## Color Palette

### Primary Colors
- **Primary Red**: `#EE2D2E` - Main brand color
- **Primary Red Light**: `#F55859` - Lighter variant
- **Primary Red Dark**: `#D11B1C` - Darker variant
- **Primary Red Darker**: `#B50B0C` - Much darker variant
- **Primary Red Darkest**: `#990000` - Darkest variant

### Secondary Colors
- **Secondary Teal**: `#2EE8EE` - Complementary color
- **Accent Green**: `#2EEE2D` - Triadic harmony color

### Neutral Colors
- **White**: `#FFFFFF`
- **Gray 100-900**: Various shades for text and backgrounds

## Components

### 1. HeroSection Component

```tsx
import HeroSection from '@/components/ui/HeroSection';

<HeroSection 
  title="Hospital San Miguel"
  subtitle="Excelencia en Salud"
  description="Comprometidos con brindar la mejor atención médica..."
  variant="medical" // primary | medical | emergency | animated
  size="lg" // sm | md | lg | xl
  backgroundImage="/path/to/image.jpg" // optional
  overlay={true} // optional
>
  <GradientButton variant="primary" size="lg">
    Solicitar Cita
  </GradientButton>
</HeroSection>
```

#### Props
- `title`: Main title text
- `subtitle`: Secondary title text
- `description`: Description text
- `variant`: Style variant (primary, medical, emergency, animated)
- `size`: Component size (sm, md, lg, xl)
- `backgroundImage`: Optional background image URL
- `overlay`: Whether to show gradient overlay
- `children`: JSX content (buttons, etc.)

### 2. GradientCard Component

```tsx
import GradientCard from '@/components/ui/GradientCard';

<GradientCard 
  title="Cardiología"
  subtitle="Cuidado especializado del corazón"
  variant="primary" // primary | secondary | accent | neutral | medical | emergency
  size="md" // sm | md | lg
  hover={true} // hover effects
>
  <p>Content goes here...</p>
</GradientCard>
```

#### Props
- `title`: Card title
- `subtitle`: Card subtitle
- `variant`: Visual style variant
- `size`: Card size
- `hover`: Enable hover effects
- `onClick`: Click handler function
- `children`: Card content

### 3. GradientButton Component

```tsx
import GradientButton from '@/components/ui/GradientButton';

<GradientButton 
  variant="primary" // primary | secondary | accent | medical | emergency | outline | ghost
  size="md" // sm | md | lg | xl
  isLoading={false}
  fullWidth={false}
  animated={true}
  leftIcon={<Icon />}
  rightIcon={<Icon />}
  onClick={handleClick}
>
  Button Text
</GradientButton>
```

#### Props
- `variant`: Button style variant
- `size`: Button size
- `isLoading`: Show loading state
- `fullWidth`: Make button full width
- `animated`: Enable animations
- `leftIcon`: Icon on the left
- `rightIcon`: Icon on the right
- `disabled`: Disable button
- Standard button props (onClick, etc.)

### 4. GradientHeader Component

```tsx
import GradientHeader from '@/components/ui/GradientHeader';

<GradientHeader 
  title="Servicios Médicos"
  subtitle="Atención especializada las 24 horas"
  variant="primary" // primary | secondary | accent | hero | medical | emergency
  size="md" // sm | md | lg | xl
>
  <p>Additional content</p>
</GradientHeader>
```

#### Props
- `title`: Header title
- `subtitle`: Header subtitle
- `variant`: Visual style variant
- `size`: Header size
- `children`: Additional content

## CSS Classes

### Background Gradients
- `.gradient-primary` - Primary red gradient
- `.gradient-secondary` - Secondary teal gradient
- `.gradient-accent` - Accent green gradient
- `.gradient-hero` - Hero section gradient
- `.gradient-medical` - Medical-themed gradient
- `.gradient-header-primary` - Primary header gradient
- `.gradient-header-medical` - Medical header gradient
- `.gradient-header-emergency` - Emergency header gradient
- `.gradient-card-primary` - Primary card gradient
- `.gradient-card-secondary` - Secondary card gradient
- `.gradient-card-accent` - Accent card gradient
- `.gradient-radial-primary` - Radial primary gradient
- `.gradient-animated-primary` - Animated primary gradient
- `.gradient-animated-medical` - Animated medical gradient

### Button Gradients
- `.gradient-button-primary` - Primary button gradient
- `.gradient-button-secondary` - Secondary button gradient
- `.gradient-button-accent` - Accent button gradient

### Borders
- `.border-gradient-primary` - Primary gradient border
- `.border-gradient-secondary` - Secondary gradient border
- `.border-gradient-accent` - Accent gradient border

### Medical-Specific Classes
- `.medical-header` - Complete medical header with background pattern
- `.medical-card` - Complete medical card with hover effects
- `.emergency-alert` - Emergency alert with animation

### Shadows
- `.shadow-primary` - Primary color shadow
- `.shadow-secondary` - Secondary color shadow
- `.shadow-medical` - Medical-themed shadow
- `.shadow-primary-lg` - Large primary shadow
- `.shadow-secondary-lg` - Large secondary shadow

## Color Variables

All colors are available as CSS custom properties:

```css
/* Primary Colors */
var(--primary-red)
var(--primary-red-light)
var(--primary-red-dark)
var(--primary-red-darker)
var(--primary-red-darkest)

/* Secondary Colors */
var(--secondary-teal)
var(--secondary-teal-light)
var(--secondary-teal-dark)

/* Accent Colors */
var(--accent-green)
var(--accent-green-light)
var(--accent-green-dark)

/* Neutral Colors */
var(--neutral-white)
var(--neutral-gray-100)
var(--neutral-gray-200)
/* ... up to gray-900 */

/* Status Colors */
var(--success)
var(--warning)
var(--error)
var(--info)
```

## Usage Examples

### Medical Services Page
```tsx
<HeroSection 
  title="Servicios Médicos"
  subtitle="Atención especializada 24/7"
  variant="medical"
  size="lg"
>
  <GradientButton variant="primary" size="lg">
    Agendar Cita
  </GradientButton>
</HeroSection>

<section className="py-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <GradientCard 
      title="Cardiología"
      variant="primary"
      size="md"
    >
      <p>Specialized heart care...</p>
    </GradientCard>
    
    <GradientCard 
      title="Neurología"
      variant="secondary"
      size="md"
    >
      <p>Brain and nervous system...</p>
    </GradientCard>
    
    <GradientCard 
      title="Pediatría"
      variant="accent"
      size="md"
    >
      <p>Children's healthcare...</p>
    </GradientCard>
  </div>
</section>
```

### Emergency Section
```tsx
<div className="emergency-alert p-6 rounded-lg">
  <h3 className="text-xl font-bold">¡Emergencia!</h3>
  <p>Llame al 911 inmediatamente</p>
  <GradientButton variant="emergency" size="lg" fullWidth>
    Llamar Ahora
  </GradientButton>
</div>
```

### Custom Styling
```css
/* Custom gradient using CSS variables */
.custom-gradient {
  background: linear-gradient(135deg, 
    var(--primary-red) 0%, 
    var(--accent-green) 100%
  );
}

/* Custom medical card */
.custom-medical-card {
  background: var(--gradient-card-primary);
  border: 1px solid var(--primary-red-lighter);
  box-shadow: 0 8px 30px rgba(238, 45, 46, 0.15);
}
```

## Responsive Design

All components are fully responsive and include:
- Mobile-first approach
- Responsive text sizes
- Adaptive spacing
- Touch-friendly interactions

## Accessibility

- Proper color contrast ratios
- Focus indicators
- Keyboard navigation support
- Screen reader compatibility
- ARIA attributes where needed

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Best Practices

1. **Color Consistency**: Always use the defined color variables
2. **Gradient Usage**: Don't overuse gradients - use them strategically
3. **Accessibility**: Ensure text remains readable on gradient backgrounds
4. **Performance**: Gradients are GPU-accelerated but use them wisely
5. **Brand Consistency**: Stick to the Hospital San Miguel color palette

## Installation

1. Install dependencies:
```bash
npm install clsx tailwind-merge
```

2. Import the color system:
```css
@import './colors.css';
```

3. Use components in your project:
```tsx
import { GradientButton, GradientCard, HeroSection } from '@/components/ui';
```

## Support

For questions or issues with the design system, please contact the development team or refer to this documentation.

---

*Hospital San Miguel Design System v1.0 - Based on brand color #EE2D2E*
