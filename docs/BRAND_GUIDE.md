# SPARTAN GYM — Manual de Identidad Visual & Design Tokens

Guía técnica y visual para la presentación de **SPARTAN GYM** en portafolios de diseño web, frontend y producto digital.

---

## 1. Concepto y Personalidad de Marca

| Atributo | Definición |
| :--- | :--- |
| **Nombre comercial** | **SPARTAN GYM** |
| **Arquetipo de marca** | El Héroe / El Guerrero (Superación, disciplina, fuerza comunitaria) |
| **Propuesta de valor** | Gimnasio de alto rendimiento sin excusas, con acompañamiento técnico real y ambiente motivador sin juicios. |
| **Lema principal** | *"Fuerza, honor y disciplina."* |
| **Tagline comercial** | *"Tu mejor versión empieza hoy."* |
| **Tono de voz** | Firme, directo, inspirador, profesional y cercano. |

---

## 2. Logotipo e Isotipo

### 2.1 Anatomía del Imagotipo
El imagotipo está compuesto por:
1. **Isotipo (Símbolo)**: Silueta geométrica del **Casco Espartano Corinthio** con cimera alta y ranuras de visión en ángulo recto.
2. **Logotipo (Tipografía)**: Tipografía grotesca condensada de alto impacto en mayúsculas sostenidas: **SPARTAN** en grafito/blanco y **GYM** en acento carmesí.

```text
┌────────────────────────────────────────────────────────┐
│                                                        │
│     ▲           SPARTAN [GYM]                          │
│   [ █ ]         ──────────────                         │
│  [█ █ █]        ISOTIPO + LOGOTIPO                     │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### 2.2 Vector del Isotipo (SVG Oficial)
Ubicado en [`public/favicon.svg`](file:///e:/SPARTAN_GYM/public/favicon.svg) y reutilizable mediante `<Icon name="helmet" />`:

```xml
<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Cresta espartana superior -->
  <path d="M50 12C36 12 28 20 28 26C38 24 62 24 72 26C72 20 64 12 50 12Z" fill="#D62F0F"/>
  <path d="M48 24V40H52V24H48Z" fill="#D62F0F"/>
  <!-- Armadura y protección facial lateral -->
  <path d="M30 34C30 34 32 60 42 70V54H47V88C35 84 22 68 22 45C22 38 25 34 30 34Z" fill="#D62F0F"/>
  <path d="M70 34C70 34 68 60 58 70V54H53V88C65 84 78 68 78 45C78 38 75 34 70 34Z" fill="#D62F0F"/>
  <!-- Protector nasal y ranuras de combate -->
  <path d="M47 38H53V62H47V38Z" fill="#D62F0F"/>
  <path d="M35 48L44 50V44L35 42V48Z" fill="#141414"/>
  <path d="M65 48L56 50V44L65 42V48Z" fill="#141414"/>
</svg>
```

---

## 3. Gama Cromática (Color Palette)

La paleta se inspira en el hierro forjado, la disciplina espartana y el vigor del entrenamiento de fuerza.

### 3.1 Colores Principales

| Tonalidad | Nombre | HEX | RGB | HSL | Rol en la Interfaz |
| :--- | :--- | :---: | :---: | :---: | :--- |
| Rojo Primario | **Spartan Red** | `#D62F0F` | `214, 47, 15` | `10°, 87%, 45%` | Color primario de marca, CTAs principales, acentos de titulares, bordes activos. |
| Rojo Hover | **Red Hover / Dark** | `#B8250A` | `184, 37, 10` | `9°, 90%, 38%` | Estados hover de botones primarios e interactivos. |
| Resalte Rojo | **Red Soft Glow** | `rgba(214,47,15,0.15)` | — | — | Resaltes de badges, focus ring y sombras ambientales. |
| Grafito Oscuro | **Onyx Ink** | `#141414` | `20, 20, 20` | `0°, 0%, 8%` | Fondo de tarjetas destacadas, números de métricas, textos principales y footer. |
| Grafito Medio | **Graphite Soft** | `#1E1E1E` | `30, 30, 30` | `0°, 0%, 12%` | Fondos de componentes secundarios en modo oscuro e inputs profundos. |
| Arena Cálida | **Warm Sand / Paper**| `#F5F2EE` | `245, 242, 238` | `34°, 21%, 95%` | Fondo de sección Hero, Equipo y bloques de contraste suave. |
| Blanco Puro | **Pure White** | `#FFFFFF` | `255, 255, 255` | `0°, 0%, 100%` | Fondo base de la web, tarjetas de clases y contraste de textos oscuros. |
| Acento Dorado | **Spartan Gold / Olympic Bronze** | `#FFB800` | `255, 184, 0` | `43°, 100%, 50%` | Insignias de disponibilidad en vivo (Cupo disponible, Sede abierta hoy), checks de beneficios VIP y estrellas de valoración comunitaria. |
| Verde Conversión | **WhatsApp Green** | `#25D366` | `37, 211, 102` | `142°, 70%, 49%` | Exclusivo para el botón directo de WhatsApp y confirmación del embudo comercial por convención de canal. |

---

## 4. Sistema Tipográfico

Combinación deliberada entre una tipografía display atlética y una fuente suiza moderna para interfaces de alta legibilidad:

### 4.1 Tipografía Display (Titulares)
* **Familia**: `Anton`, Impact, sans-serif
* **Pesos**: Regular (400)
* **Transformación**: Mayúsculas (`text-transform: uppercase`)
* **Tracking**: Ligeramente expandido (`letter-spacing: 0.01em` a `0.04em`)
* **Uso**: Logotipo, H1, H2, H3, cifras estadísticas numéricas y cinta de disciplinas.

### 4.2 Tipografía Sans (Lectura & UI)
* **Familia**: `Archivo`, -apple-system, BlinkMacSystemFont, sans-serif
* **Pesos**: 400 (Regular), 600 (Semibold), 700 (Bold), 800 (Extrabold)
* **Uso**: Cuerpo de texto, botones (`.btn`), etiquetas de navegación, inputs de formulario y badges.

### 4.3 Escala Fluida (`clamp()`)
```css
/* Titular Hero */
--font-h1: clamp(48px, 6.8vw, 102px);

/* Titulares de Sección */
--font-h2: clamp(38px, 5.5vw, 64px);

/* Subtítulos de Tarjetas */
--font-h3: clamp(24px, 3vw, 32px);

/* Cifras de Impacto (Stats) */
--font-stat: clamp(54px, 7vw, 88px);
```

---

## 5. Componentes Clave & Reglas de UI

### 5.1 Tarjeta Pase VIP Digital (Spartan Pass)
* **Concepto**: Boleto digital conmemorativo de cortesía que emula una credencial de combate físico.
* **Muescas Perforadas**: Muescas circulares laterales creadas con pseudo-elementos coincidentes con el degradado del fondo y línea discontinua de desprendimiento (`border-bottom: 2px dashed rgba(255,255,255,0.16)`).
* **Marca de Agua**: Símbolo vectorial del casco espartano al 5% de opacidad posicionado en la esquina inferior.
* **Indicador en Vivo**: Píldora en Spartan Gold (`#FFB800`) con micro-animación de pulso (`pulse-gold`) para denotar inmediatez y disponibilidad de plazas.
* **Código de Invitación**: Formato monoespaciado (`SPTN-2026-FREE`) acompañado de código QR vectorial.

### 5.2 Reglas de Iconografía & UI
* **Cero Emojis**: Ningún emoji nativo del sistema operativo es permitido en botones, badges ni textos.
* **Vectorial Puro (SVG)**: Todos los recursos gráficos secundarios utilizan el componente `<Icon name="..." />` en formato SVG estricto con viewBox estándar y colores atados a `currentColor` o variables del tema.
* **Geometría de Contenedores**:
  * Esquinas sutiles (`border-radius: 2px`, `4px` o `12px` en tickets) que transmiten solidez industrial y fuerza.
  * Cortes diagonales atléticos mediante `clip-path: polygon(...)` en el encuadre fotográfico del Hero.

---

## 6. Fotografía y Estética Visual

* **Atmósfera**: Iluminación deportiva dramática tipo claroscuro, fondos industriales de gimnasio hardcore con reflejos de neón rojo cálido.
* **Protagonistas**: Atletas en movimiento con técnica limpia, pesas de hierro, mancuernas, cuerdas funcionales y sacos de boxeo.
* **Sin placeholders**: Imágenes fotorrealistas de alta fidelidad alojadas en `/images/`.
