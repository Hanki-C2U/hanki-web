// Common types used across components

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  company: string;
}

export interface Mentor {
  id: number;
  name: string;
  photo: string;
  role: string;
  flag: string;
  rating: number;
  certified: boolean;
}

export interface Skill {
  name: string;
  level: number;
  learningGoal?: string;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
  description: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

// Button component types
export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

// Hero section types
export interface HeroContent {
  badge: string;
  headline: string;
  subtitle: string;
  primaryCTA: string;
  secondaryCTA: string;
  statistics: Statistic[];
}

// Feature types for "Who It's For" section
export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

// Step types for "How It Works" section
export interface Step {
  id: number;
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}
