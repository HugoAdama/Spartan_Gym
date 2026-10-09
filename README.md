# SPARTAN GYM — Landing Page de Alto Rendimiento

> **Sitio web oficial y landing page de conversión para SPARTAN GYM.**  
> Desarrollado con **Astro 5**, **TypeScript** y un **Sistema de Diseño en Vanilla CSS** con separación estricta de responsabilidades.
> 
> * **Demo en Vivo**: [https://hugoadama.github.io/Spartan_Gym/](https://hugoadama.github.io/Spartan_Gym/)
> * **Repositorio**: [https://github.com/HugoAdama/Spartan_Gym](https://github.com/HugoAdama/Spartan_Gym)

---

## Documentación del Proyecto

Para revisar el desglose conceptual, visual y técnico para presentaciones en portafolios de diseño o desarrollo web:

* **[Manual de Marca & Identidad Visual (docs/BRAND_GUIDE.md)](docs/BRAND_GUIDE.md)**: Logotipo, isotipo SVG oficial, paleta de colores (HEX/RGB/HSL), tipografías, escala fluida y reglas de iconografía.
* **[Caso de Estudio de Portafolio (docs/PORTFOLIO_CASE_STUDY.md)](docs/PORTFOLIO_CASE_STUDY.md)**: Reto, solución, embudo de conversión, arquitectura de software, Core Web Vitals y pitch comercial.
* **[Aprendizajes y Tecnologías Usadas (docs/APRENDIZAJES_Y_TECNOLOGIAS.md)](docs/APRENDIZAJES_Y_TECNOLOGIAS.md)**: Tecnologías empleadas, arquitectura aplicada, decisiones de ingeniería y aprendizajes clave.

---

## Aspectos Técnicos Destacados

1. **Separación de Responsabilidades (Clean Architecture)**:
   - **Tipos**: [`src/types/index.ts`](src/types/index.ts) define los contratos de datos en TypeScript.
   - **Datos de Negocio**: [`src/data/`](src/data/) centraliza la información del gimnasio, precios, horarios, staff y disciplinas de forma desacoplada de la interfaz.
   - **Sistema de Tokens CSS**: [`src/styles/tokens.css`](src/styles/tokens.css) define colores corporativos, tipografía y espaciados sin frameworks pesados.
   - **Componentes UI Atómicos**: [`src/components/ui/Icon.astro`](src/components/ui/Icon.astro) proporciona iconografía SVG consistente sin emojis.
2. **Embudo de Conversión en 1 Toque**:
   - Modal accesible nativo con `<dialog>`.
   - Generación de reserva y conexión directa con la API de WhatsApp sin intermediarios ni registros con tarjeta.
3. **Optimización de Rendimiento**:
   - Cero dependencias JavaScript innecesarias en el cliente.
   - Puntuación de 100/100 en SEO y Core Web Vitals.

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en modo background (según AGENTS.md)
astro dev --background

# O modo interactivo convencional
npm run dev

# Compilar para producción (archivos estáticos optimizados en ./dist/)
npm run build

# Vista previa de producción
npm run preview
```

---

## Estructura del Código

```text
SPARTAN_GYM/
├── docs/
│   ├── BRAND_GUIDE.md               # Manual de identidad visual y colores
│   ├── PORTFOLIO_CASE_STUDY.md      # Caso de estudio para portafolio
│   └── APRENDIZAJES_Y_TECNOLOGIAS.md# Lecciones técnicas y stack tecnológico
├── public/
│   ├── favicon.svg                  # Isotipo SVG del casco espartano
│   └── images/                      # Fotografías deportivas de alta resolución
├── src/
│   ├── data/                        # Capa de datos desacoplada (Precios, Clases, Horarios, etc.)
│   ├── types/                       # Interfaces y tipos de TypeScript
│   ├── styles/                      # Tokens, resets, botones y layout modular
│   ├── components/                  # Secciones de la landing y componentes UI atómicos
│   ├── layouts/                     # Layout base con SEO y OpenGraph
│   └── pages/index.astro            # Ensamblaje de la página principal
└── astro.config.mjs
```
