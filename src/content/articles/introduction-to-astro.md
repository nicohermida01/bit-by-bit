---
title: Introducción a Astro
description: '¿Querés crear sitios web ultrarrápidos con la mínima cantidad de JavaScript? En este artículo te presento Astro, un framework moderno ideal para construir páginas eficientes, bien estructuradas y con un gran rendimiento. Aprendé desde cero a instalarlo, usar componentes, definir rutas y desplegar tu sitio.'
img: introduction-to-astro.jpg
publishedAt: 2025-05-09
lastUpdate: 2025-05-27
---

## 🚀 ¿Qué es Astro?

Astro es un **framework moderno para construir sitios web rápidos, ligeros y altamente optimizados**. Su objetivo es permitirte crear contenido web con un enfoque centrado en el rendimiento y la simplicidad.

Una de sus características más llamativas es que **envía cero JavaScript por defecto al cliente**, lo que lo convierte en una de las opciones más eficientes para generar páginas estáticas o híbridas.

> 🌐 **Página oficial**: <a href="https://astro.build" target="_blank" rel="noopener noreferrer">Astro.build</a>

### ¿Qué lo hace diferente?

- Soporta múltiples frameworks (React, Vue, Svelte, Solid...).
- Usa **arquitectura basada en islas (Island Architecture)** para hidratar solo lo necesario.
- Excelente para sitios de contenido como blogs, portafolios, documentaciones o landing pages.

<br /><br />

## ⚙️ ¿Para qué sirve Astro?

Astro está diseñado especialmente para **sitios donde el contenido es lo más importante**, pero también permite agregar interactividad cuando se necesita.

### Casos de uso comunes:

- Blogs personales
- Documentación técnica
- Sitios corporativos
- Portafolios
- E-commerce estáticos

### Sitios famosos que usan Astro:

- El blog oficial de Astro
- Docs de Frameworks como SolidJS

<br /><br />

## 🛠️ Instalación y primer proyecto

Para comenzar, necesitás tener instalado Node.js. Luego, creás tu proyecto con el comando:

```bash
npm create astro@latest
```

Seguí las instrucciones del asistente y una vez instalado:

```bash
cd mi-proyecto
npm install
npm run dev
```

¡Listo! Ya tenés tu primer proyecto Astro corriendo en `http://localhost:4321`.

<br /><br />

## 📦 Componentes y arquitectura

Astro trabaja principalmente con archivos `.astro`, que combinan HTML, JavaScript y Markdown de forma sencilla.

Ejemplo básico de componente `.astro`:

```astro
---
// Lógica en la parte superior
const nombre = "Bit by Bit";
---

<h1>Bienvenido a {nombre}!</h1>
```

También podés **usar componentes de otros frameworks**:

```astro
---
// Importar un componente de React
import Boton from '../componentes/Boton.jsx'
---

<Boton texto="Haz clic aquí" />
```

Astro renderiza estos componentes solo si es necesario, optimizando el uso de JavaScript.

<br /><br />

## 🌐 Ruteo y páginas

Astro usa un sistema de rutas basado en archivos. Cada archivo `.astro` dentro de la carpeta `/src/pages` se convierte automáticamente en una ruta.

Ejemplos:

- `/src/pages/index.astro` → `/`
- `/src/pages/about/index.astro` → `/about`

También podés trabajar con rutas dinámicas y pasar parámetros.

- `/src/pages/blog/[slug].astro` → `/blog/mi-primer-post`

<br /><br />

## 🧠 Renderizado inteligente

Astro permite elegir entre diferentes tipos de renderizado según tus necesidades:

- **Static Site Generation (SSG)**: el predeterminado, ideal para rendimiento.
- **Server-Side Rendering (SSR)**: útil si necesitás contenido dinámico en el servidor.
- **Hydration parcial (Island Architecture)**: solo hidrata los componentes interactivos que lo requieren, lo que reduce al mínimo el JS en el cliente.

<br /><br />

## 📂 Integraciones y ecosistema

Astro tiene un **ecosistema rico y en expansión**, con integraciones oficiales como:

- Markdown / MDX
- TailwindCSS
- Sitemap
- Google Fonts
- Partytown, entre muchas más

También podés usar archivos `.md` o `.mdx` como fuente de contenido, ideales para blogs. Además, Astro genera rutas y layouts automáticamente para estos archivos.
