import { useEffect, useRef, useState } from 'react';

interface AnimationConfig {
  threshold?: number;
  rootMargin?: string;
  duration?: number;
  delay?: number;
  easing?: string;
  disabled?: boolean;
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
  hasAnimated: boolean;
}

export const useScrollAnimation = (config: AnimationConfig = {}): UseScrollAnimationReturn => {
  const {
    threshold = 0.2,
    rootMargin = '0px 0px -50px 0px',
    duration = 600,
    delay = 0,
    easing = 'cubic-bezier(0.33, 1, 0.68, 1)',
    disabled = false
  } = config;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || disabled) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Check if mobile device (disable animations on mobile for performance)
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
            
            // Trigger animation
            requestAnimationFrame(() => {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            });
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      // Clean up will-change to prevent performance issues
      if (element) {
        element.style.willChange = 'auto';
      }
    };
  }, [threshold, rootMargin, duration, delay, easing, disabled, hasAnimated]);

  // Set will-change only when needed
  useEffect(() => {
    const element = ref.current;
    if (element && isVisible && !hasAnimated) {
      element.style.willChange = 'opacity, transform';
    }
  }, [isVisible, hasAnimated]);

  return { ref, isVisible, hasAnimated };
};

// Hook for staggered animations (like service cards)
export const useStaggeredAnimation = (
  itemCount: number,
  staggerDelay: number = 100,
  config: AnimationConfig = {}
) => {
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Check if mobile device
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: config.threshold || 0.2,
        rootMargin: config.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [config.threshold, config.rootMargin, hasAnimated]);

  return { containerRef, isVisible, hasAnimated };
};