import { useEffect, useRef } from 'react';

export const useAnimations = () => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const addAnimationClass = (element: HTMLElement, animationClass: string) => {
    element.classList.add('animate__animated', animationClass);
  };

  const removeAnimationClass = (element: HTMLElement, animationClass: string) => {
    element.classList.remove('animate__animated', animationClass);
  };

  return {
    elementRef,
    addAnimationClass,
    removeAnimationClass
  };
}; 