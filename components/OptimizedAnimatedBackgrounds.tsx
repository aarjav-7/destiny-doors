'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Lazy load the animated backgrounds with no SSR
const AnimatedBackground = dynamic(
  () => import('@/components/AnimatedBackground').then(mod => ({ default: mod.AnimatedBackground })),
  { ssr: false }
);

const GradientOrbs = dynamic(
  () => import('@/components/AnimatedBackground').then(mod => ({ default: mod.GradientOrbs })),
  { ssr: false }
);

export function OptimizedAnimatedBackgrounds() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!mediaQuery.matches) {
      setShouldRender(true);
    }

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setShouldRender(!e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <>
      <AnimatedBackground />
      <GradientOrbs />
    </>
  );
}