import type { PricingPlan } from '../types';

export const pricingPlansData: PricingPlan[] = [
  {
    id: "basico",
    name: "Básico",
    price: "S/ 119",
    period: "/ mes",
    tagline: "Para quienes buscan entrenar fuerza a su propio ritmo.",
    isPopular: false,
    features: [
      "Acceso ilimitado a sala de pesas y máquinas",
      "Horario valle (06:00 a 17:00)",
      "Evaluación corporal inicial y rutina base",
      "Uso de vestuarios, lockers y duchas",
      "Sin permanencia obligatoria"
    ],
    ctaText: "Elegir Básico"
  },
  {
    id: "full",
    name: "Spartan Full",
    price: "S/ 169",
    period: "/ mes",
    tagline: "El plan favorito de nuestros guerreros. Acceso total.",
    isPopular: true,
    features: [
      "Sala de pesas + TODAS las clases grupales",
      "Horario 100% ilimitado (06:00 a 22:30)",
      "Funcional, Boxeo, Spinning y BootCamp",
      "App Spartan con rutinas y progresiones",
      "1 pase de invitado gratis al mes",
      "Asesoría técnica continua en sala"
    ],
    ctaText: "Elegir Full (Más Popular)"
  },
  {
    id: "pro",
    name: "Spartan Pro",
    price: "S/ 249",
    period: "/ mes",
    tagline: "Máximo rendimiento con seguimiento personalizado.",
    isPopular: false,
    features: [
      "Todo lo incluido en el Plan Full",
      "4 sesiones 1 a 1 con Coach Personal al mes",
      "Plan nutricional personalizado y ajustes",
      "Bioimpedancia mensual InBody",
      "Acceso prioritario a eventos Spartan",
      "15% de descuento en suplementación"
    ],
    ctaText: "Elegir Spartan Pro"
  }
];
