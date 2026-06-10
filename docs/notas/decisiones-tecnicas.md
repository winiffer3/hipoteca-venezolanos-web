# Decisiones técnicas

## Deploy — Netlify
Se eligió Netlify en lugar del hosting de Nominalia porque:
- El hosting de Nominalia incluido es solo para WordPress
- Netlify es gratuito y compatible con React + Vite
- Deploy automático con cada git push sin pasos manuales
- HTTPS incluido sin configuración adicional

## Formulario — Formspree
Se eligió Formspree para el formulario de contacto porque:
- No requiere backend propio
- Gratuito para proyectos pequeños
- Los mensajes llegan directamente al email configurado
- Fácil integración con React

## Imágenes — WebP
Las imágenes de paisajes venezolanos se convirtieron a formato WebP porque:
- Pesan hasta un 50% menos que JPEG sin pérdida visible de calidad
- Mejora el tiempo de carga de la web
- Compatible con todos los navegadores modernos

## React Router — _redirects
Se añadió el archivo public/_redirects con /* /index.html 200 porque:
- Netlify no sabe manejar rutas de React Router por defecto
- Sin este archivo las rutas /about, /servicios, etc. daban error 404

## Dominio
- hipotecavenezolanos.com — dominio principal
- hipotecavenezolanos.es — alias, apunta al mismo sitio
- Ambos gestionados en Nominalia, apuntando a Netlify via registro A