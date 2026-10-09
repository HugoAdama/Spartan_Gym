# Caso de Estudio: SPARTAN GYM — Landing Page de Alta Conversión

> **Categoría**: Diseño Web • Desarrollo Frontend • Arquitectura de Sistemas en Astro  
> **Cliente / Negocio**: SPARTAN GYM (Centro de Entrenamiento & Fitness)  
> **Tecnologías**: Astro 5, TypeScript, Vanilla CSS (Design Tokens), SVG Vector System  
> **Enfoque**: Conversión de prospectos (Leads), Rendimiento Web Extremo (Core Web Vitals) y Mantenibilidad.  
> **Demo en Vivo**: [https://hugoadama.github.io/Spartan_Gym/](https://hugoadama.github.io/Spartan_Gym/)  
> **Repositorio**: [https://github.com/HugoAdama/Spartan_Gym](https://github.com/HugoAdama/Spartan_Gym)

---

## 1. El Reto (Problem Statement)

Muchos gimnasios y centros deportivos enfrentan sitios web lentos, sobrecargados de scripts de terceros, con diseños genéricos y textos llenos de marcadores provisionales que no generan confianza ni consiguen que los visitantes den el primer paso.

**Objetivos clave del proyecto:**
1. **Transmitir identidad y autoridad inmediata**: Crear una experiencia visual que comunique disciplina, fuerza y comunidad desde el primer segundo.
2. **Eliminar la fricción de reserva**: Permitir a cualquier visitante reclamar una clase gratuita en menos de 20 segundos y conectar directamente con el WhatsApp del negocio.
3. **Mantenibilidad absoluta del código**: Separar totalmente los datos del negocio (precios, horarios, clases, entrenadores) de las plantillas y el código fuente.
4. **Cero emojis**: Cumplir con una estética profesional rigurosa basada exclusivamente en iconografía vectorial SVG de alta definición.

---

## 2. La Solución (The Solution)

Se diseñó e implementó una **Landing Page de Alto Rendimiento** construida con **Astro 5**, utilizando un sistema de diseño modular en Vanilla CSS y desacoplamiento de datos en TypeScript.

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        EMBUDO DE CONVERSIÓN                            │
│                                                                        │
│   [ 1. ATRACCIÓN ] ──> Hero Section + Propuesta de Valor Directa       │
│                                                                        │
│   [ 2. CONFIANZA ] ──> Catálogo de Clases + Horarios + Staff Técnico   │
│                                                                        │
│   [ 3. DECISIÓN  ] ──> Membresías Transparentes + Plan Más Popular     │
│                                                                        │
│   [ 4. ACCIÓN    ] ──> Modal Nativo <dialog> + Enlace Instantáneo a WA │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Características de Conversión & UX

### A. Hero Section con Doble Llamado a la Acción (CTA)
* Titular enfocado en el beneficio del usuario: *"Tu mejor versión empieza hoy"*.
* Propuesta sin riesgos: Badges claros de *"1ª Clase 100% gratuita"*, *"Coaches en sala siempre"* y *"Sin permanencia"*.
* Prueba social flotante: Insignia de 4.9/5 estrellas respaldada por la comunidad espartana.

### B. Módulo de Horarios con Filtro Interactivo por Turnos
* Permite al usuario filtrar entre turnos de **Mañana**, **Tarde** y **Noche** sin recargar la página.
* Cada fila expone la hora, intensidad, entrenador a cargo y botón de reserva directa.

### C. Psicología de Precios y Membresías Transparentes
* Estructuración en 3 niveles (Básico, Full y Pro).
* El plan **Spartan Full** se resalta visualmente en grafito oscuro con bordes y botones en rojo espartano, guiando la atención del usuario al producto con mayor margen y retención.

### D. Modal Nativo `<dialog>` con Cierre en 1 Toque a WhatsApp
* Utiliza el elemento nativo HTML `<dialog>` (accesibilidad por teclado con `Esc`, bloqueo de scroll de fondo y cero dependencias externas).
* Al confirmar el formulario, se arma de forma automática un mensaje preconfigurado y formateado listo para enviar al WhatsApp del gimnasio con el nombre, turno y disciplina elegida.

### E. Boleto Digital VIP (Spartan Pass) con Gamificación de Acceso
* En la sección final de conversión, se presenta un pase de cortesía tangible digital con muescas perforadas y código de invitación exclusivo (`SPTN-2026-FREE`).
* Integra anclaje de precios (`S/ 35.00` regular vs `S/ 0.00` en primera visita) para amplificar el valor percibido.
* Indicador de disponibilidad en tiempo real en Dorado Espartano (`#FFB800`) con micro-animación de pulso, generando urgencia orgánica sin saturar la paleta de la marca.

---

## 4. Arquitectura de Software & Separación de Responsabilidades

El proyecto aplica principios de **Clean Architecture** adaptados a Astro:

1. **Capa de Tipos (`src/types/index.ts`)**: Interfaces de datos tipadas rígidamente.
2. **Capa de Datos (`src/data/`)**: Centraliza la información del gimnasio (`gym.ts`), clases (`classes.ts`), horarios (`schedule.ts`), equipo (`coaches.ts`) y precios (`pricing.ts`).  
   *Si el gimnasio ajusta sus tarifas o cambia de dirección, se edita un solo archivo TypeScript sin tocar componentes.*
3. **Capa de Tokens y Estilos (`src/styles/`)**:
   * `tokens.css`: Variables semánticas de color, tipografía y transiciones.
   * `buttons.css`: Botones primarios, secundarios, delineados y oscuros.
   * `layout.css`: Retículas y espaciados calculados mediante `clamp()`.
4. **Capa Atómica de UI (`src/components/ui/`)**:
   * `<Icon name="..." />`: Catálogo centralizado de iconos vectoriales SVG.
   * `<SectionHead />`: Encabezados consistentes en todas las secciones.

---

## 5. Métricas de Rendimiento & Buenas Prácticas

| Métrica / Auditoría | Resultado |
| :--- | :--- |
| **Tiempo de carga (LCP)** | < 0.8s en redes móviles gracias a pre-render estático y prioridad de fetch en Hero |
| **Cambios de diseño acumulados (CLS)** | 0.00 (Dimensiones explícitas en todas las imágenes) |
| **Interactividad (INP)** | < 50ms (Lógica ligera vanilla JS sin frameworks pesados) |
| **Peso total de JS del cliente** | < 4 KB en total |
| **SEO Score** | 100/100 (Open Graph completo, meta descripciones, jerarquía semántica H1-H3) |

---

## 6. Pitch Breve para Presentación en Portafolio

> *"Landing page de alto impacto para **SPARTAN GYM**, desarrollada con Astro 5 y un sistema de diseño desacoplado. Diseñada para maximizar la captación de prospectos mediante un embudo directo de prueba gratuita conectada a WhatsApp, eliminando toda fricción y logrando un tiempo de carga instantáneo con 100% de cumplimiento en Core Web Vitals."*
