import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  animationType?: 'fade-up' | 'fade-in' | 'scale-up';
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  delay = 0,
  duration = 600,
  className = '',
  as: Component = 'div',
  animationType = 'fade-up'
}) => {
  const { ref } = useScrollAnimation({
    delay,
    duration,
  });

  const getInitialStyles = () => {
    switch (animationType) {
      case 'fade-in':
        return { opacity: 0 };
      case 'scale-up':
        return { opacity: 0, transform: 'scale(0.98)' };
      case 'fade-up':
      default:
        return { opacity: 0, transform: 'translateY(20px)' };
    }
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={getInitialStyles()}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;