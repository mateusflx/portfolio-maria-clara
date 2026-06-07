'use client';

import { useEffect } from 'react';

/**
 * Progressive-enhancement scroll animations.
 * Elements marked with `data-reveal` fade/slide into view as they enter the
 * viewport. Without JS (or with reduced-motion), content stays fully visible.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]')
    );

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    elements.forEach((el, index) => {
      el.classList.add('reveal');
      // Subtle stagger between neighbouring elements.
      el.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
