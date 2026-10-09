import type { ScheduleItem } from '../types';

export const scheduleData: ScheduleItem[] = [
  {
    time: "06:00",
    shift: "morning",
    name: "Entrenamiento Funcional",
    days: "Lunes a Viernes",
    coach: "Coach Elena Ramos",
    intensity: "Alta",
    slots: "Cupos disponibles"
  },
  {
    time: "07:30",
    shift: "morning",
    name: "Powerlifting & Fuerza Base",
    days: "Lunes, Miércoles y Viernes",
    coach: "Coach Carlos Mendoza",
    intensity: "Media - Alta",
    slots: "Cupos disponibles"
  },
  {
    time: "09:00",
    shift: "morning",
    name: "Spinning & Cardio Interval",
    days: "Lunes a Sábado",
    coach: "Coach Elena Ramos",
    intensity: "Alta",
    slots: "Últimos cupos"
  },
  {
    time: "18:00",
    shift: "evening",
    name: "Boxeo & Combat Striking",
    days: "Martes y Jueves",
    coach: "Coach Marcos Silva",
    intensity: "Explosiva",
    slots: "Cupos disponibles"
  },
  {
    time: "19:15",
    shift: "night",
    name: "Funcional Spartan HIIT",
    days: "Lunes, Miércoles y Viernes",
    coach: "Coach Elena Ramos",
    intensity: "Muy Alta",
    slots: "Cupos disponibles"
  },
  {
    time: "20:30",
    shift: "night",
    name: "Boxeo Técnico & Sparring Guiado",
    days: "Lunes a Jueves",
    coach: "Coach Marcos Silva",
    intensity: "Alta",
    slots: "Cupos disponibles"
  }
];
