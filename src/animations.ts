import type { Variants } from 'framer-motion';

export const pageAnimation: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
};

export const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemFadeInUp: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export const iconHover = {
  scale: 1.2,
  rotate: 5,
  transition: { type: 'spring' as const, stiffness: 300, damping: 10 },
};

export const buttonTap = {
  scale: 0.95,
  transition: { type: 'spring' as const, stiffness: 400, damping: 15 },
}; 