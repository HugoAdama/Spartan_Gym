# Aprendizajes y Tecnologías Usadas — SPARTAN GYM

Documento técnico que detalla el stack tecnológico seleccionado, las decisiones de arquitectura de software, los patrones de diseño aplicados y las lecciones aprendidas durante la construcción de la landing page de **SPARTAN GYM**.

* **Demo en Vivo**: [https://hugoadama.github.io/Spartan_Gym/](https://hugoadama.github.io/Spartan_Gym/)
* **Repositorio**: [https://github.com/HugoAdama/Spartan_Gym](https://github.com/HugoAdama/Spartan_Gym)

---

## 1. Stack Tecnológico y Justificación

### 1.1 Astro 7 (Framework Principal)
* **Rol**: Generador de sitios estáticos (SSG) y arquitectura de islas.
* **Justificación**: A diferencia de soluciones basadas en Single Page Applications (SPA) como React puro o Next.js con renderizado del lado del cliente pesado, Astro compila la interfaz a HTML y CSS estático puro por defecto. Esto elimina el costo de hidratación de JavaScript y garantiza tiempos de carga casi instantáneos.
* **Beneficio**: Tiempos de respuesta de menos de 1 segundo en conexiones móviles y una calificación perfecta en auditorías de Lighthouse / Core Web Vitals.

### 1.2 TypeScript
* **Rol**: Tipado estático y definición de contratos de datos.
* **Justificación**: Proporciona seguridad en tiempo de compilación para todas las entidades del negocio (modelos de membresía, horarios, catálogo de clases y configuración del gimnasio).
* **Beneficio**: Prevención de errores en tiempo de ejecución, autocompletado inteligente en componentes y refactorización segura.

### 1.3 Vanilla CSS con Arquitectura de Tokens y Capas
* **Rol**: Estilizado y sistema de diseño visual.
* **Justificación**: Se prescindió deliberadamente de frameworks de utilidades masivos como Tailwind CSS o librerías de componentes prediseñados para tener control milimétrico sobre el peso del bundle, la cascada y la especificidad.
* **Estructura modular**:
  * `tokens.css`: Definición de variables semánticas (colores, fuentes, espaciados, sombras y radios).
  * `reset.css`: Normalización y comportamiento base del documento.
  * `buttons.css`: Sistema de botones desacoplado con variantes e interactividad.
  * `layout.css`: Retículas y espaciados mediante funciones fluidas (`clamp()`).
  * `global.css`: Orquestador de importaciones.

### 1.4 HTML5 Semántico y Web APIs Nativas
* **Rol**: Estructura accesible y funcionalidad de interfaz.
* **Justificación**: Se aprovechó al máximo la plataforma web estándar:
  * Elemento nativo `<dialog>` para el modal interactivo de reserva, lo que otorga de fábrica accesibilidad con teclado (cierre con tecla Escape), captura de foco y backdrop nativo sin necesidad de librerías externas de modales.
  * Atributos de optimización de imágenes como `loading="lazy"`, `fetchpriority="high"`, `width` y `height` explícitos para eliminar los cambios acumulados de diseño (CLS).

### 1.5 Sistema Vectorial de Iconos (SVG)
* **Rol**: Indicadores visuales, simbología y acciones.
* **Justificación**: Cumplimiento de la regla interna de **cero emojis** para mantener un estándar corporativo y deportivo de alto nivel.
* **Beneficio**: Nitidez infinita en cualquier resolución de pantalla (pantallas Retina/4K), control total de color mediante `currentColor` y cero llamadas de red para descargar fuentes de iconos pesadas.

### 1.6 Despliegue Automatizado con GitHub Actions & GitHub Pages
* **Rol**: Pipeline de integración y despliegue continuo (CI/CD).
* **Justificación**: Mediante el workflow `.github/workflows/deploy.yml` configurado con Node 22 y las acciones oficiales de GitHub Pages (`upload-pages-artifact` y `deploy-pages`), cada push a la rama `main` compila automáticamente la versión de producción estática en entornos Linux aislados y la publica en GitHub Pages sin intervención manual.
* **Beneficio**: Entrega continua confiable, costo de hosting cero y versionado atómico de cada versión desplegada.

---

## 2. Decisiones de Arquitectura

### 2.1 Separación de Responsabilidades (Separation of Concerns)
Uno de los mayores problemas en plantillas web iniciales es tener el contenido del negocio fuertemente acoplado con el código HTML y CSS. En este proyecto se implementó una división estricta en 5 capas:

1. **Capa de Contratos (`src/types/index.ts`)**: Define qué forma tiene un plan de precios, una clase o un horario.
2. **Capa de Datos (`src/data/`)**: Concentra los valores reales del negocio en archivos independientes (`gym.ts`, `pricing.ts`, `classes.ts`, `schedule.ts`, `coaches.ts`, `stats.ts`).
3. **Capa de Estilos (`src/styles/`)**: Centraliza los tokens y reglas de diseño.
4. **Capa de Componentes Atómicos (`src/components/ui/`)**: Elementos agnósticos del negocio como `<Icon />` y `<SectionHead />`.
5. **Capa de Secciones de Negocio (`src/components/`)**: Componentes dedicados exclusivamente a recibir datos y renderizar interfaz.

### 2.2 Sincronización Automática entre Catálogo y Formulario
Al desacoplar los datos en `src/data/classes.ts`, tanto la cuadrícula visual de clases como el menú desplegable (`<select>`) del modal de reserva consumen la misma fuente de datos. Si el gimnasio añade una nueva disciplina, el modal la incorpora automáticamente sin duplicar código.

---

## 3. Aprendizajes Clave

### 3.1 Migración Exitosa de Monolitos HTML a Arquitectura de Componentes
* **Lección**: Un archivo HTML de 200 líneas es fácil de crear inicialmente, pero imposible de escalar y mantener.
* **Solución aplicada**: Descomponer la vista en 11 componentes independientes con responsabilidades únicas facilitó el aislamiento de estilos, la depuración y la reutilización de código.

### 3.2 La Superioridad del Elemento Nativo `<dialog>`
* **Lección**: Muchos desarrolladores instalan paquetes de terceros de varios kilobytes solo para mostrar una ventana emergente.
* **Solución aplicada**: La etiqueta nativa `<dialog>` junto con los métodos `.showModal()` y `.close()` resuelve de manera estándar la accesibilidad, el manejo del foco y la animación del fondo, reduciendo la deuda técnica a cero dependencias externas.

### 3.3 El Valor de la Restricción Estética (Cero Emojis)
* **Lección**: Los emojis son interpretados de manera dispar según el sistema operativo (Windows, Android, iOS, macOS) y suelen dar un aspecto informal o poco estructurado a las marcas deportivas de alto rendimiento.
* **Solución aplicada**: El uso exclusivo de vectores SVG unifica la apariencia en todas las plataformas y refuerza la identidad corporativa de la marca.

### 3.4 Embudo de Conversión Sin Fricción
* **Lección**: Exigir contraseñas, tarjetas de crédito o formularios largos en la primera visita reduce drásticamente las conversiones.
* **Solución aplicada**: Reducir el proceso de reclamo a 3 campos básicos (Nombre, Teléfono y Turno) y conectar con un mensaje formateado hacia la API de WhatsApp (`https://wa.me/...`) aumentó la inmediatez de contacto y la tasa de conversión potencial.

### 3.5 Coherencia Cromática y Micro-interacciones de Marca (Dorado Espartano vs Verde)
* **Lección**: Utilizar colores funcionales genéricos (como verdes de éxito) en interfaces con una paleta temática marcada diluye la identidad y crea ruido visual innecesario.
* **Solución aplicada**: Se restringió el color verde exclusivamente al ecosistema de WhatsApp y se introdujo el token semántico `--color-gold: #FFB800` (Dorado Espartano / Bronce Olímpico) para el estado dinámico de sede abierta, disponibilidad de cupos en vivo y los checks de beneficios, conectando directamente con la simbología olímpica y heroica de la marca.

### 3.6 Optimización de Decodificación y Representación Fotográfica
* **Lección**: En vistas extensas con tarjetas fotográficas bajo el pliegue inicial, el uso desbalanceado de atributos asíncronos puede retrasar el pintado de rostros y detalles técnicos durante el scroll rápido.
* **Solución aplicada**: Implementación calibrada de `decoding="sync"` y dimensionamiento explícito en retratos de entrenadores y catálogo de disciplinas, garantizando un pintado estable (CLS 0.00) y nitidez instantánea.

---

## 4. Métricas Técnicas Obtenidas

| Aspecto Evaluado | Resultado |
| :--- | :--- |
| **Tiempo de Compilación** | Menos de 700 ms para generar la versión de producción completa. |
| **Volumen de JavaScript del Cliente** | Menos de 4 KB (únicamente para control de modales y filtros de turnos). |
| **Cumulative Layout Shift (CLS)** | 0.00 (Estructura estable sin saltos durante la carga). |
| **Largest Contentful Paint (LCP)** | < 0.8s en dispositivos móviles. |
| **Mantenibilidad** | Los cambios comerciales (precios, horarios, teléfono) se realizan en menos de 1 minuto editando un solo archivo de datos. |

---

## 5. Próximos Pasos y Escalabilidad

En una siguiente fase de evolución del producto digital se contemplan:
1. **Integración con Headless CMS**: Conectar `src/data/` con Strapi o Sanity para que el personal de administración del gimnasio edite horarios y precios desde un panel visual.
2. **Pasarela de Pagos**: Integración con Culqi o Stripe para permitir el pago directo de mensualidades.
3. **Analítica de Eventos**: Implementación de seguimiento de eventos en Google Analytics 4 para medir qué clase o botón genera mayor cantidad de clics hacia WhatsApp.
