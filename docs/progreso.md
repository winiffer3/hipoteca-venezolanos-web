# Registro de progreso

## 01/06/2026

### Actividades realizadas

- Análisis de páginas de referencia.
- Revisión de la web actual de la empresa.
- Investigación de estructura y contenido.
- Definición inicial del proyecto.
- Elaboración de propuesta visual en Excalidraw.

### Resultado

- Se definió la arquitectura general de la web.
- Se establecieron las páginas principales.
- Se preparó la propuesta inicial para presentar al cliente.

---

## 02/06/2026

### Actividades realizadas

- Continuación del análisis de referencias.
- Ajustes en la propuesta visual.
- Preparación de documentación inicial.
- Organización de contenidos.

### Resultado

- Estructura funcional definida.
- Documentación preparada para revisión.

---

## 03/06/2026

### Actividades realizadas

- Preparación y envío de la propuesta.
- Revisión de tecnologías a utilizar.
- Planificación del entorno de desarrollo.

### Resultado

- Proyecto listo para iniciar desarrollo.

---

## 04/06/2026

### Actividades realizadas

- Creación del repositorio GitHub.
- Inicialización del proyecto con Vite.
- Configuración de React Router.
- Creación de páginas Home, About, Contacto y NotFound.
- Creación de componentes base.
- Integración del logo provisional.
- Integración del favicon.
- Configuración de estilos globales.
- Desarrollo del Header.
- Desarrollo del Navbar.
- Desarrollo del Footer.
- Primeros commits y subida al repositorio.

### Resultado

- Aplicación funcional con estructura base completa.
- Navegación operativa entre páginas.
- Identidad visual provisional integrada.

---

## 05/06/2026

### Actividades realizadas

- Desarrollo de la sección Hero.
- Integración de imagen principal.
- Maquetación visual del Home.
- Configuración de botones de navegación.
- Ajustes de estilos y responsive inicial.

### Resultado

- Home con estructura visual principal definida.
- Base preparada para añadir contenido y funcionalidades.

---

## 08/06/2026

### Actividades realizadas
- Continuación del desarrollo de la página Home.
- Implementación de la banda de confianza (Trust Band).
- Actualización de la sección de estadísticas utilizando información de referencia de la empresa.
- Desarrollo de la sección de puntos clave (Pain Points).
- Revisión inicial del contenido de los Pain Points, pendiente de validación.
- Creación de la página Servicios.
- Integración de la nueva ruta dentro de la navegación principal.
- Ajustes de estilos generales y organización de componentes.
.

### Resultado
- La página Home incorpora nuevas secciones informativas y continúa tomando forma.
- Se amplió la estructura del sitio con la incorporación de la página Servicios.
- Se mantiene el proyecto organizado y documentado para facilitar las siguientes fases de desarrollo.
- Quedan pendientes pequeñas revisiones de contenido y la validación de algunos elementos.

---

## 09/06/2026

### Actividades realizadas

- Desarrollo completo de la página Servicios.
- Diseño y maquetación de la sección del proceso de asesoramiento.
- Adaptación de los pasos del servicio tomando como referencia la web principal de i-credit.
- Reorganización de la sección del proceso en formato de dos columnas.
- Desarrollo del componente Calculadora.
- Creación de la sección de testimonios.
- Desarrollo del componente FAQ con acordeón.
- Integración de imagen principal y banda de confianza en la página Servicios.
- Creación de la llamada a la acción (CTA) final con botones de WhatsApp y llamada.
- Desarrollo de la página Sobre Nosotros.
- Desarrollo de la página Contacto.
- Ajustes generales de estilos y estructura visual del proyecto.

### Resultado

- Página Servicios prácticamente finalizada a falta de validación de contenidos.
- Página About estructurada y maquetada.
- Página Contacto preparada para futura integración del formulario.
- Arquitectura principal de la web prácticamente completada.
- Pendiente revisión de algunos textos y contenidos junto al responsable del proyecto.

---

## 10/06/2026

### Actividades realizadas

- Integración del formulario de contacto con Formspree.
- Implementación de validaciones personalizadas en el formulario.
- Desarrollo de la página 404 personalizada.
- Implementación del responsive completo en todas las páginas.
- Desarrollo del menú hamburguesa para móvil.
- Optimización SEO básica en index.html.
- Integración de meta tags Open Graph para redes sociales.
- Ajuste del idioma del documento a español.
- Despliegue de la web en Netlify conectado con GitHub.
- Configuración del dominio hipotecavenezolanos.com apuntando a Netlify.
- Verificación del funcionamiento del formulario en producción.
- Corrección de rutas React Router en producción mediante archivo _redirects.

### Resultado

- Web en producción y accesible en hipotecavenezolanos.com.
- Deploy automático configurado — cada git push actualiza la web.
- Formulario de contacto verificado y operativo en producción.
- Todas las rutas funcionando correctamente en producción.

---

## 11/06/2026

### Actividades realizadas

- Cambio del email destino del formulario de Formspree a info@i-credit.es.
- Resolución de problema de entrega: el correo corporativo bloqueaba emails de Formspree.  
- Configuración de formspree.io como remitente seguro en Outlook.
- Verificación del email info@i-credit.es en Formspree (estado: VERIFIED).
- Actualización del endpoint de Formspree en el código (Contacto.jsx).
- Verificación del deploy automático desde la cuenta colaboradora Practicas-I-credit — funcionando correctamente.
- Pruebas del formulario en producción confirmadas.
- Instalación y configuración de vite-plugin-sitemap.
- Generación de sitemap.xml con todas las rutas del sitio.
- Sitemap accesible en producción: hipotecavenezolanos.com/sitemap.xml.

### Resultado

- Formulario operativo y enviando a info@i-credit.es correctamente.
- Deploy automático desde cuenta empresa verificado y funcional.
- Emails llegan a carpeta de no deseado por política del servidor corporativo — pendiente de que i-credit configure una regla de bandeja de entrada desde su gestión interna de correo.
- Sitemap.xml generado automáticamente en cada build y desplegado en producción.

---

## Próximos pasos

- Que i-credit configure regla en su servidor para que emails de formspree.io lleguen a bandeja de entrada.
- Dar de alta hipotecavenezolanos.com en Google Search Console y enviar sitemap.xml — pendiente de acceso a cuenta Google de la empresa.
- Ajustes finales tras revisión con Antonio.

