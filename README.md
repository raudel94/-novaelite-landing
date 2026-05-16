# NovaElite — Landing Page

Landing page interactiva para NovaElite (agencia de generación de leads + plataforma CRM).

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (paleta navy + dorado)
- **Framer Motion** (animaciones)
- **lucide-react** (iconos)

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # build de producción
npm run preview    # previsualizar el build
```

## Personalización rápida

Edita [src/config.ts](src/config.ts) para cambiar:

- Número de **WhatsApp** (`whatsapp`)
- **Email** de contacto (`email`)
- Enlace de **Calendly** (`calendly`)
- URLs de redes sociales (`social.*`)

## Logo

El logo SVG está incrustado en [src/components/Logo.tsx](src/components/Logo.tsx). Para usar tu PNG/SVG real:

1. Guarda tu logo en `public/logo.svg` (o `.png`)
2. Reemplaza el SVG del componente por `<img src="/logo.svg" />`

## Imágenes del producto

Coloca tus 2 imágenes en `public/` (ej. `public/hero-mockup.png`) y referénciaselas en [src/components/Hero.tsx](src/components/Hero.tsx) reemplazando el mockup actual.

## Formulario de contacto

El formulario multi-paso ([src/components/ContactForm.tsx](src/components/ContactForm.tsx)) actualmente envía la solicitud por **WhatsApp** con todos los datos pre-rellenados.

Para enviarlo por **email** además:

- **Formspree** (recomendado, sin backend): cambia el `<form>` por `<form action="https://formspree.io/f/TU_ID" method="POST">` y borra el `e.preventDefault()`.
- **EmailJS**: instala `@emailjs/browser` y usa `emailjs.send(...)` en `handleSubmit`.
- **Resend / API propia**: añade un endpoint serverless en Vercel/Netlify.

## Analítica

Añade el snippet de Google Analytics 4 y Meta Pixel en `index.html` antes de `</head>`.

## Deploy

- **Vercel**: `vercel` (auto-detecta Vite)
- **Netlify**: `netlify deploy --build`
- Build manual: `npm run build` → carpeta `dist/`

## Secciones

1. Navbar fijo + menú móvil
2. Hero con CTA dual + mockup animado
3. Stats animados (contadores)
4. Grid de nichos (4 verticales)
5. Cómo funciona (4 pasos)
6. **Calculadora ROI interactiva** (sliders)
7. Plataforma CRM (6 features)
8. Marquee de integraciones
9. Carrusel de testimonios
10. FAQ acordeón (8 preguntas)
11. **Formulario multi-paso de contacto** (4 pasos)
12. Footer con redes sociales
13. Botón flotante de WhatsApp + scroll-to-top
