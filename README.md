# Luis Emmanuel — Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/.../deploy-status)](https://luisemmanuel.dev)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-3-646CFF?logo=vite)

Portfolio personal de **Luis Emmanuel Estrada Rodríguez** — Full Stack Developer & SysAdmin. Diseñado con un enfoque oscuro, minimalista y de alto contraste, inspirado en portafolios como brittanychiang.com.

---

## Stack

| Tecnología | Versión |
|---|---|
| [React](https://reactjs.org/) | 18 |
| [Vite](https://vitejs.dev/) | 3 |
| [Tailwind CSS](https://tailwindcss.com/) | 3 |
| [AOS](https://michalsnik.github.io/aos/) | 2.3 |
| [FontAwesome](https://fontawesome.com/) | 6 |

## Características

- **Diseño oscuro profesional** — Paleta `#0a0f1e` (fondo), `#64ffda` (acento), tipografía Inter + Fira Code
- **Navegación glassmórfica** — Header fijo con `backdrop-blur`, enlaces con animación underline y botón "Descargar CV"
- **Hero con video** — Video de teclado como fondo sutil (opacidad 8%) con overlay degradado
- **Proyectos con modales** — Cada proyecto muestra un modal con enlaces a demo (Netlify) y código (GitHub)
- **Secciones optimizadas** — About Me con biografía profesional, Skills agrupados por categoría en pills, Contacto con enlaces directos
- **Animaciones suaves** — AOS con efectos `fade-up` (700ms, offset 100)
- **Multimedia optimizada** — Videos en 640×360 (~1.8 MB total), imágenes en WebP/JPEG, lazy loading
- **Responsive** — Menú móvil con hamburguesa, grid adaptable

## Instalación

```bash
git clone https://github.com/luiseer/newPortfolio.git
cd newPortfolio
npm install
npm run dev
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción en `dist/` |
| `npm run preview` | Previsualiza el build localmente |

## Estructura

```
src/
  assets/
    docs/          # PDF del CV
    img/           # Imágenes de proyectos y perfil
    video/         # Video de fondo (keyboard)
  components/
    Header.jsx     # Nav fijo glassmórfico
    Projects.jsx   # Grid de proyectos con modales
    AboutMe.jsx    # Biografía + foto + datos rápidos
    Skills.jsx     # Habilidades agrupadas por categoría
    Contact.jsx    # Enlaces directos (email, GitHub, LinkedIn)
    Footer.jsx     # Pie de página minimalista
  App.jsx          # Layout principal con Hero
  main.jsx         # Entry point + inicialización AOS
  index.css        # Estilos base Tailwind + clases personalizadas
```

## Despliegue

El proyecto está desplegado en **Netlify** y se actualiza automáticamente al hacer push a `main`.

---

<p align="center">
  <a href="https://luisemmanuel.dev">🌐 luisemmanuel.dev</a> ·
  <a href="mailto:luiseer@example.com">✉️ Correo</a> ·
  <a href="https://github.com/luiseer">🐙 GitHub</a> ·
  <a href="https://www.linkedin.com/in/luis-estrada-746701a3/">💼 LinkedIn</a>
</p>
