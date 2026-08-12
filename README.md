💻 Nexus Store — Evaluación 1

Proyecto grupal correspondiente a la Evaluación 1 del Diplomado Full Stack.

Nexus Store es un mini catálogo web de productos tecnológicos desarrollado con HTML5, CSS3, Bootstrap 5,
JavaScript Vanilla y Git/GitHub.

El proyecto aplica diseño responsive, estructura semántica, accesibilidad básica, manipulación del DOM y un flujo de trabajo colaborativo basado en ramas, Pull Requests y Code Review.


👥 Integrantes

Rodrigo Astudillo

Waldo Araya


🎯 Objetivo del proyecto

Desarrollar un mini sitio web responsive de productos tecnológicos que permita aplicar los principales contenidos trabajados durante el módulo:

HTML5 semántico

CSS3

Bootstrap 5

Responsive Design

JavaScript Vanilla

Manipulación del DOM

Eventos con addEventListener

Git

GitHub

Trabajo colaborativo mediante Pull Requests


🛠️ Tecnologías utilizadas

Tecnología

Uso

HTML5

Estructura semántica de las páginas

CSS3

Estilos personalizados

Bootstrap 5

Grid, componentes y responsive

JavaScript Vanilla

Interactividad y manipulación del DOM

LocalStorage

Persistencia del contador del carrito

Git

Control de versiones

GitHub

Repositorio, ramas, Pull Requests y Code Review

Visual Studio Code

Entorno de desarrollo

Live Server

Ejecución local del proyecto


📁 Estructura del proyecto

Evaluacion_1/
│
├── .github/
├── css/
│   └── custom.css
├── img/
├── js/
│   └── main.js
├── index.html
├── productos.html
├── producto.html
├── contacto.html
├── .gitignore
└── README.md

🌐 Páginas del sitio

🏠 Inicio — index.html

Página principal de Nexus Store.

Incluye:

Navbar responsive

Hero principal

Llamadas a la acción

Secciones informativas

Beneficios

Productos destacados

Footer

🛒 Productos — productos.html

Catálogo general de productos tecnológicos.

Incluye:

Buscador preparado para JavaScript

Filtro por categoría

Selector de ordenamiento

Contador de resultados

Grid responsive

Cards de productos

Imágenes locales

Paginación visual

Navegación hacia el detalle de producto

Distribución responsive:

Mobile       → 1 producto por fila
Tablet       → 2 productos por fila
Desktop      → 3 productos por fila


💻 Detalle de producto — producto.html

Página con información detallada del producto seleccionado.

Incluye:

Breadcrumb

Imagen principal

Galería de miniaturas

Nombre

Precio

Valoración

Descripción

Características técnicas

Disponibilidad

Selector de cantidad

Botón Agregar al carrito

Botón Comprar ahora

Información de envío y garantía

El diseño fue desarrollado siguiendo un enfoque mobile-first.


✉️ Contacto — contacto.html

Página destinada a consultas de los usuarios.

Incluye:

Información de contacto

Email

Teléfono

Ubicación

Horario de atención

Formulario de contacto

Nombre

Email

Asunto

Mensaje

Validaciones HTML5

Footer compartido

El formulario utiliza atributos como:

required
type="email"
minlength

para proporcionar una primera capa de validación nativa.


📱 Responsive Design

El proyecto fue desarrollado con enfoque mobile-first utilizando Bootstrap Grid y Media Queries.

Se realizaron pruebas principalmente en:

Mobile:   375px
Tablet:   768px
Desktop:  1200px

También se verificó que las páginas responsive no produzcan overflow horizontal.

Ejemplo de comprobación utilizada durante las pruebas:

document.documentElement.scrollWidth ===
document.documentElement.clientWidth

Resultado esperado:

true


⚡ JavaScript

El proyecto utiliza JavaScript Vanilla para agregar comportamiento dinámico a la interfaz.

Carrito

La funcionalidad del carrito contempla:

Aumentar cantidad

Disminuir cantidad

Agregar productos

Actualizar contador

Mostrar feedback al usuario

Persistir información mediante localStorage

Ejemplo de evento:

element.addEventListener("click", () => {
    // cambio visible en el DOM
});

Catálogo

La estructura HTML está preparada para implementar:

Búsqueda de productos

Filtros por categoría

Ordenamiento

Actualización dinámica del contador

Las cards utilizan atributos data-* para facilitar la manipulación desde JavaScript.

Ejemplo:

data-name="Notebook ASUS VivoBook 15"
data-category="notebooks"
data-price="699990"


♿ Accesibilidad

Durante el desarrollo se incorporaron prácticas básicas de accesibilidad:

HTML semántico

Atributos alt en imágenes

label asociados a formularios

aria-label

aria-current

aria-live

Navegación mediante botones reales

Estados focus

Contraste visual

Jerarquía adecuada de títulos


🎨 Identidad visual

Nexus Store utiliza una identidad moderna orientada a productos tecnológicos.

Paleta principal

Primario:         #6366F1
Primario Hover:   #4F46E5
Secundario:       #22D3EE
Oscuro:           #0F172A
Oscuro suave:     #1E293B
Texto:            #1E293B
Texto secundario: #64748B
Fondo:            #F8FAFC
Superficie:       #FFFFFF
Borde:            #E2E8F0

Tipografía principal

Inter


🌿 Flujo de trabajo Git

El proyecto utiliza un flujo basado en ramas por funcionalidad.

Ejemplo:

main
│
├── feature/estructura-inicial
├── feature/navbar
├── feature/hero
├── feature/home-secciones
├── feature/listado-productos
├── feature/detalle-producto
├── feature/contacto
├── feature/carrito-js
└── feature/documentacion-readme

Flujo utilizado:

main actualizado
      ↓
crear feature
      ↓
desarrollo
      ↓
commits pequeños
      ↓
push
      ↓
Pull Request
      ↓
Code Review del compañero
      ↓
correcciones si corresponden
      ↓
Approve
      ↓
Merge a main


🔍 Code Review

Los Pull Requests son revisados por el otro integrante antes de realizar el merge.

Durante las revisiones se consideran aspectos como:

Estructura HTML

Separación de responsabilidades

Responsive

Consistencia visual

Accesibilidad

Comportamiento JavaScript

Posibles errores

Casos límite

Integración con código existente

Cuando se detecta una observación se utiliza:

Request changes

El desarrollador realiza la corrección en la misma rama y posteriormente se ejecuta una nueva revisión.


📝 Convención de commits

Se utilizan mensajes descriptivos siguiendo una convención simple.

Ejemplos:

feat: agregar estructura del detalle de producto
style: aplicar diseño responsive al detalle de producto
fix: unificar footer y beneficios del detalle
chore: agregar imagenes del catalogo
docs: ampliar documentacion del proyecto

Prefijos utilizados:

feat:   nueva funcionalidad
style:  cambios visuales
fix:    corrección
chore:  tareas auxiliares
docs:   documentación


▶️ Cómo ejecutar el proyecto

1. Clonar el repositorio

git clone https://github.com/OGRodrigo/Evaluacion_1.git

2. Entrar al proyecto

cd Evaluacion_1

3. Abrir con Visual Studio Code

code .

4. Ejecutar

Abrir index.html utilizando Live Server.

También es posible abrir directamente:

index.html
productos.html
producto.html
contacto.html


🧪 Pruebas realizadas

Durante el desarrollo se realizaron pruebas manuales sobre:

Navegación entre páginas

Navbar responsive

Menú mobile

Grid de productos

Imágenes

Adaptación responsive

Formularios

Validaciones HTML5

Controles de cantidad

Contador del carrito

Persistencia mediante localStorage

Comportamiento entre páginas

Ausencia de overflow horizontal


🚧 Estado del proyecto

El proyecto se encuentra en desarrollo activo.

Las principales estructuras visuales y responsive del sitio ya fueron implementadas.

Las funcionalidades JavaScript se están incorporando mediante features independientes y Pull Requests para mantener una historia Git clara y facilitar el Code Review.

# 📸 Capturas del proyecto

Las siguientes capturas muestran la interfaz de Nexus Store tanto en escritorio como en dispositivos móviles, permitiendo visualizar la adaptación responsive del proyecto.

---

## 🏠 Home

### Desktop

<img src="docs/screenshots/home.jpg"
     alt="Nexus Store Home en escritorio"
     width="850">

El Home presenta la navegación principal, el Hero y las categorías de productos del sitio.

---

## 📦 Catálogo de productos

### Desktop

<img src="docs/screenshots/productos.jpg"
     alt="Catálogo de productos Nexus Store en escritorio"
     width="850">

### Mobile

<img src="docs/screenshots/productos-mobile.jpg"
     alt="Catálogo de productos Nexus Store en dispositivo móvil"
     width="320">

En dispositivos móviles, los controles de búsqueda, categoría y ordenamiento se organizan verticalmente y las cards de productos se adaptan al ancho disponible.

---

## 🔍 Detalle de producto

### Desktop

<img src="docs/screenshots/producto.jpg"
     alt="Detalle de producto Nexus Store en escritorio"
     width="850">

### Mobile

<img src="docs/screenshots/producto-mobile.jpg"
     alt="Detalle de producto Nexus Store en dispositivo móvil"
     width="320">

La vista de detalle cambia desde una distribución horizontal en escritorio a una distribución vertical en dispositivos móviles.

---

## ✉️ Contacto

### Desktop

<img src="docs/screenshots/contacto.jpg"
     alt="Página de contacto Nexus Store en escritorio"
     width="850">

### Mobile

<img src="docs/screenshots/contacto-mobile.jpg"
     alt="Página de contacto Nexus Store en dispositivo móvil"
     width="320">

La información de contacto y el formulario se reorganizan para mantener una correcta visualización y experiencia de usuario en pantallas pequeñas.

---



👥 Trabajo colaborativo

El desarrollo se realiza de forma colaborativa utilizando GitHub.

Cada integrante:

Desarrolla funcionalidades en ramas independientes

Realiza commits propios

Crea Pull Requests

Revisa el código del compañero

Solicita correcciones cuando corresponde

Aprueba los cambios antes del merge

Este flujo permite mantener main estable y documentar claramente la participación de ambos integrantes.


📄 Evaluación

Proyecto desarrollado para:

Diplomado Full Stack — Evaluación 1

Tecnologías principales:

HTML5 · CSS3 · Bootstrap 5 · JavaScript · Git · GitHub


👨‍💻 Autores

Rodrigo Astudillo
Waldo Araya

Proyecto académico desarrollado con fines educativos.