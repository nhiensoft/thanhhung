import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const visible = entry.isIntersecting;
    setIsVisible(visible);
    
    // Only calculate position when element becomes visible for better performance
    if (visible) {
      const rect = entry.boundingClientRect;
      const viewportCenter = window.innerWidth / 2;
      const elementCenter = rect.left + rect.width / 2;
      setIsLeft(elementCenter < viewportCenter);
    }
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, handleIntersection]);

  return { elementRef, isVisible, isLeft };
}