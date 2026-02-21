// Framer Motion — 공통 애니메이션 variants
// 레퍼런스(ludental.co.kr)와 동일한 Fade-in + Slide-up 패턴

import type { Variants } from 'framer-motion';

// --- Easing Functions (BezierDefinition = [number, number, number, number]) ---
type BezierCurve = [number, number, number, number];
const easeOut: BezierCurve = [0.25, 0.46, 0.45, 0.94];
const easeInOut: BezierCurve = [0.42, 0, 0.58, 1];
const easeSpring: BezierCurve = [0.16, 1, 0.3, 1];

// --- Fade In Up (핵심 스크롤 애니메이션) ---
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

// --- Fade In Down ---
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

// --- Fade In Left ---
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

// --- Fade In Right ---
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

// --- Fade In (without movement) ---
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

// --- Scale In ---
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

// --- Stagger Container ---
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// --- Stagger Container (faster) ---
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// --- Hero Text Animation ---
export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: easeSpring,
    },
  },
};

// --- viewport options ---
export const viewportOnce = {
  once: true,
  amount: 0.3,
};

export const viewportHalf = {
  once: true,
  amount: 0.5,
};

// --- Page Transition ---
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};
