import type { GymConfig } from '../types';

export const gymConfig: GymConfig = {
  name: "SPARTAN GYM",
  tagline: "Tu mejor versión empieza hoy",
  slogan: "Fuerza, honor y disciplina. Tu espacio de entrenamiento de alto rendimiento y comunidad fitness.",
  address: {
    street: "Av. Los Espartanos 300",
    district: "Distrito Central",
    city: "Lima",
    country: "Perú",
    reference: "Frente a la plaza central / Estacionamiento privado"
  },
  contact: {
    phone: "+51 999 999 999",
    whatsapp: "51999999999",
    whatsappUrl: "https://wa.me/51999999999?text=" + encodeURIComponent("¡Hola Spartan Gym! Quiero información sobre sus membresías y reclamar mi primera clase gratis."),
    email: "contacto@spartangym.pe"
  },
  hours: {
    weekdays: "06:00 - 22:30",
    saturdays: "07:00 - 18:00",
    sundays: "08:00 - 13:00"
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
  }
};
