import type { ClassItem } from '../types';

export const classesData: ClassItem[] = [
  {
    id: "pesas",
    title: "Sala de pesas & Power",
    category: "Fuerza & Hipertrofia",
    description: "Máquinas biomecánicas de alta gama, zona de racks olímpicos y mancuernas hasta 50kg con asesoría técnica permanente en tu rutina.",
    image: "/images/class-weights.jpg",
    intensity: "Media - Alta",
    features: [
      "Racks olímpicos y tarimas",
      "Mancuernas y poleas Pro",
      "Rutina adaptada a tu objetivo"
    ]
  },
  {
    id: "funcional",
    title: "Entrenamiento Funcional",
    category: "Potencia & Condición",
    description: "Circuitos de alta intensidad que combinan kettlebells, battle ropes y peso corporal para quemar grasa y forjar resistencia real en grupo.",
    image: "/images/class-functional.jpg",
    intensity: "Alta intensidad",
    features: [
      "Pista de trineo y césped",
      "Monitoreo cardíaco en sala",
      "Grupos dinámicos y motivadores"
    ]
  },
  {
    id: "boxeo",
    title: "Boxeo & Striking",
    category: "Cardio & Descarga",
    description: "Aprende golpeo, juego de pies y combinaciones con sacos pesados y manoplas. Quema hasta 800 calorías y libera todo el estrés de la semana.",
    image: "/images/class-boxing.jpg",
    intensity: "Alta explosividad",
    features: [
      "Sacos pesados y ring Pro",
      "Técnica desde nivel cero",
      "Trabajo aeróbico y potencia"
    ]
  }
];
