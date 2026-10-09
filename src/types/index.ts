export interface GymConfig {
  name: string;
  tagline: string;
  slogan: string;
  address: {
    street: string;
    district: string;
    city: string;
    country: string;
    reference: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    whatsappUrl: string;
    email: string;
  };
  hours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
  social: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}

export interface ClassItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  intensity: string;
  features: string[];
}

export interface ScheduleItem {
  time: string;
  shift: 'morning' | 'evening' | 'night';
  name: string;
  days: string;
  coach: string;
  intensity: string;
  slots: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  certifications: string;
  bio: string;
  photo: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  tagline: string;
  isPopular: boolean;
  features: string[];
  ctaText: string;
}

export interface StatItem {
  value: string;
  label: string;
  detail: string;
}
