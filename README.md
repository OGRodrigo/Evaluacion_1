💻 Nexus Store — Evaluación 1

Proyecto grupal correspondiente a la Evaluación 1 del Diplomado Full Stack.

Nexus Store es un mini catálogo web de productos tecnológicos desarrollado con HTML5, CSS3, Bootstrap 5, JavaScript Vanilla y Git/GitHub.

El proyecto aplica diseño responsive, estructura semántica, accesibilidad, manipulación del DOM y un flujo de trabajo colaborativo basado en ramas, Pull Requests y Code Review.

🌐 Demo en vivo

Nexus Store se encuentra desplegado mediante GitHub Pages:

👉 https://ogrodrigo.github.io/Evaluacion_1/

🔗 Repositorio

https://github.com/OGRodrigo/Evaluacion_1

👥 Integrantes

Rodrigo Astudillo

Waldo Araya

🎯 Objetivo del proyecto

Desarrollar un mini sitio web responsive de productos tecnológicos que permita aplicar los principales contenidos trabajados durante el módulo:

HTML5 semántico.

CSS3.

Bootstrap 5.

Responsive Design y enfoque Mobile First.

JavaScript Vanilla.

Manipulación del DOM.

Eventos con addEventListener.

Persistencia con localStorage.

Git y GitHub.

Trabajo colaborativo mediante ramas, Pull Requests y Code Review.

🛠️ Tecnologías utilizadas

Tecnología

Uso

HTML5

Estructura semántica de las páginas

CSS3

Estilos personalizados e identidad visual

Bootstrap 5

Grid, componentes y responsive

JavaScript Vanilla

Interactividad y manipulación del DOM

localStorage

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
│   └── pull_request_template.md
├── css/
│   └── custom.css
├── docs/
│   └── screenshots/
│       ├── home.JPG
│       ├── productos.JPG
│       ├── productos-mobile.JPG
│       ├── producto.JPG
│       ├── producto-mobile.JPG
│       ├── contacto.JPG
│       └── contacto-mobile.JPG
├── img/
├── js/
│   ├── main.js
│   └── product_detail.js
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

Navbar responsive.

Hero principal.

Llamadas a la acción.

Categorías de productos.

Productos destacados.

Beneficios.

Footer.

🛒 Productos — productos.html

Catálogo general de productos tecnológicos.

Incluye:

Buscador dinámico de productos.

Filtro por categoría.

Selector de ordenamiento.

Contador dinámico de resultados.

Grid responsive.

Cards de productos.

Imágenes locales.

Paginación visual.

Navegación hacia el detalle de producto.

Distribución responsive:

Mobile   → 1 producto por fila
Tablet   → 2 productos por fila
Desktop  → 3 productos por fila

💻 Detalle de producto — producto.html

Página con información detallada del producto seleccionado.

Incluye:

Breadcrumb.

Imagen principal.

Galería de miniaturas.

Nombre.

Precio.

Valoración.

Descripción.

Características técnicas.

Disponibilidad.

Selector de cantidad.

Botón Agregar al carrito.

Botón Comprar ahora.

Información de envío y garantía.

El diseño fue desarrollado siguiendo un enfoque Mobile First.

🔄 Detalle dinámico

Las 9 tarjetas del catálogo están conectadas con producto.html mediante un identificador enviado en la URL.

Ejemplo:

producto.html?id=macbook-air-m2

El archivo js/product_detail.js obtiene el identificador mediante URLSearchParams y actualiza dinámicamente:

Título de la pestaña.

Breadcrumb.

Imagen principal y miniaturas.

Badge.

Nombre.

Precio.

Valoración y cantidad de reseñas.

Descripción.

Características técnicas.

De esta forma se reutiliza una única página producto.html para mostrar el detalle de los nueve productos del catálogo:

Notebook ASUS VivoBook 15.

MacBook Air M2.

Samsung Galaxy S24.

iPhone 15.

Audífonos Sony WH-CH720N.

Parlante JBL Charge 5.

Teclado Mecánico Logitech G913.

Mouse Inalámbrico Logitech MX Master 3S.

Silla Gamer Corsair TC100.

Si el identificador recibido no existe, el detalle utiliza el ASUS VivoBook como producto de respaldo.

✉️ Contacto — contacto.html

Página destinada a consultas de los usuarios.

Incluye:

Información de contacto.

Email.

Teléfono.

Ubicación.

Horario de atención.

Formulario de contacto.

Nombre.

Email.

Asunto.

Mensaje.

Validaciones HTML5.

Footer compartido.

El formulario utiliza atributos como:

required
type="email"
minlength

para proporcionar una primera capa de validación nativa.

📱 Responsive Design

El proyecto fue desarrollado con enfoque Mobile First utilizando Bootstrap Grid y Media Queries.

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

Aumentar cantidad.

Disminuir cantidad.

Validar límites mínimos y máximos.

Limitar la compra a un máximo de 10 unidades por producto.

Agregar productos.

Actualizar el contador del carrito.

Mostrar feedback al usuario.

Persistir información mediante localStorage.

Ejemplo de evento:

element.addEventListener("click", () => {
// cambio visible en el DOM
});

Catálogo

El catálogo incorpora funcionalidades dinámicas desarrolladas con JavaScript Vanilla:

Búsqueda de productos por nombre y categoría.

Normalización de texto para búsquedas con y sin tildes.

Filtro por categoría.

Ordenamiento por menor precio.

Ordenamiento por mayor precio.

Ordenamiento alfabético A-Z.

Actualización dinámica del contador de resultados.

Combinación de búsqueda, filtro y ordenamiento.

Las cards utilizan atributos data-* para facilitar la manipulación desde JavaScript.

Ejemplo:

data-name="Notebook ASUS VivoBook 15"
data-category="notebooks"
data-price="699990"

Detalle dinámico

El archivo product_detail.js contiene la información de los nueve productos y renderiza el producto correspondiente según el parámetro id presente en la URL.

Ejemplo:

const urlParameters =
new URLSearchParams(window.location.search);

const productId =
urlParameters.get("id");

El detalle actualiza el DOM sin duplicar páginas HTML y también modifica atributos de accesibilidad como aria-label en la valoración del producto.

♿ Accesibilidad

Durante el desarrollo se incorporaron prácticas de accesibilidad:

HTML semántico.

Atributos alt en imágenes.

label asociados a formularios.

aria-label.

aria-current.

aria-live.

Uso de botones reales para acciones.

Estados focus.

Contraste visual.

Jerarquía adecuada de títulos.

Correcciones específicas detectadas mediante validación W3C.

✅ Validación W3C

Las cuatro páginas principales de Nexus Store fueron verificadas utilizando W3C Nu HTML Checker, con el objetivo de comprobar la correcta estructura y conformidad del marcado HTML5.

Página

Errores

Advertencias

Estado

index.html

0

0

✅ Válido

productos.html

0

0

✅ Válido

producto.html

0

0

✅ Válido

contacto.html

0

0

✅ Válido

La validación final fue realizada sobre la versión consolidada en main, después de integrar las correcciones de accesibilidad, búsqueda, filtros, ordenamiento, carrito y detalle dinámico de productos.

Herramienta utilizada: W3C Nu HTML Checker
Fecha de validación: 12 de agosto de 2026

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

Ejemplos de ramas utilizadas:

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
├── feature/busqueda-js
├── feature/navbar-w3c
├── feature/producto-w3c
├── feature/detalle-dinamico
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

Estructura HTML.

Separación de responsabilidades.

Responsive.

Consistencia visual.

Accesibilidad.

Comportamiento JavaScript.

Posibles errores.

Casos límite.

Integración con código existente.

Cuando se detecta una observación se utiliza Request changes.

El desarrollador realiza la corrección en la misma rama y posteriormente se ejecuta una nueva revisión antes del merge.

📝 Convención de commits

Se utilizan mensajes descriptivos siguiendo Conventional Commits.

Ejemplos:

feat: agregar estructura del detalle de producto
style: aplicar diseño responsive al detalle de producto
fix: unificar footer y beneficios del detalle
chore: agregar imagenes del catalogo
feat: conectar catalogo con detalle dinamico
feat: renderizar datos dinamicos de productos
fix: mejorar accesibilidad del detalle dinamico
docs: ampliar documentacion del proyecto

Prefijos utilizados:

feat:   nueva funcionalidad
style:  cambios visuales
fix:    corrección
chore:  tareas auxiliares
docs:   documentación

▶️ Cómo ejecutar el proyecto

Clonar el repositorio

git clone https://github.com/OGRodrigo/Evaluacion_1.git

Entrar al proyecto

cd Evaluacion_1

Abrir con Visual Studio Code

code .

Ejecutar

Abrir index.html utilizando Live Server.

También es posible abrir directamente:

index.html
productos.html
producto.html
contacto.html

🧪 Pruebas realizadas

Durante el desarrollo se realizaron pruebas manuales sobre:

Navegación entre páginas.

Navbar responsive.

Menú mobile.

Grid de productos.

Imágenes.

Adaptación responsive.

Formularios.

Validaciones HTML5.

Controles de cantidad.

Límite máximo de 10 unidades.

Contador del carrito.

Persistencia mediante localStorage.

Búsqueda de productos.

Búsqueda con y sin tildes.

Filtro por categoría.

Ordenamiento por precio.

Ordenamiento alfabético.

Actualización dinámica del contador de resultados.

Combinación de búsqueda, filtros y ordenamiento.

Navegación desde las nueve cards hacia su detalle correspondiente.

Render dinámico de nombre, imagen, precio, rating, descripción y características.

Funcionamiento del carrito desde el detalle dinámico.

Comportamiento entre páginas.

Ausencia de overflow horizontal.

Consola del navegador sin errores durante las pruebas finales.

Validación W3C de las cuatro páginas principales.

📸 Capturas del proyecto

Las siguientes capturas muestran la interfaz de Nexus Store tanto en escritorio como en dispositivos móviles, permitiendo visualizar la adaptación responsive del proyecto.

🏠 Home

Desktop

<img src="docs/screenshots/home.JPG"
alt="Nexus Store Home en escritorio"
width="850">

El Home presenta la navegación principal, el Hero y las categorías de productos del sitio.

📦 Catálogo de productos

Desktop

<img src="docs/screenshots/productos.JPG"
alt="Catálogo de productos Nexus Store en escritorio"
width="850">

Mobile

<img src="docs/screenshots/productos-mobile.JPG"
alt="Catálogo de productos Nexus Store en dispositivo móvil"
width="320">

En dispositivos móviles, los controles de búsqueda, categoría y ordenamiento se organizan verticalmente y las cards de productos se adaptan al ancho disponible.

🔍 Detalle de producto

Desktop

<img src="docs/screenshots/producto.JPG"
alt="Detalle de producto Nexus Store en escritorio"
width="850">

Mobile

<img src="docs/screenshots/producto-mobile.JPG"
alt="Detalle de producto Nexus Store en dispositivo móvil"
width="320">

La vista de detalle cambia desde una distribución horizontal en escritorio a una distribución vertical en dispositivos móviles. La misma página se reutiliza para los nueve productos mediante el sistema de detalle dinámico.

✉️ Contacto

Desktop

<img src="docs/screenshots/contacto.JPG"
alt="Página de contacto Nexus Store en escritorio"
width="850">

Mobile

<img src="docs/screenshots/contacto-mobile.JPG"
alt="Página de contacto Nexus Store en dispositivo móvil"
width="320">

La información de contacto y el formulario se reorganizan para mantener una correcta visualización y experiencia de usuario en pantallas pequeñas.

✅ Estado del proyecto

Nexus Store se encuentra finalizado para la Evaluación 1 del Diplomado Full Stack.

Las cuatro páginas requeridas se encuentran implementadas:

Home.

Listado de productos.

Detalle de producto.

Contacto.

El proyecto cuenta con:

HTML5 semántico.

CSS3 personalizado.

Bootstrap 5 mediante CDN.

Diseño Mobile First.

Layout responsive para mobile y desktop.

JavaScript Vanilla.

Manipulación del DOM.

Eventos propios mediante addEventListener.

Búsqueda, filtros y ordenamiento del catálogo.

Detalle dinámico para los nueve productos.

Carrito básico con persistencia mediante localStorage.

Validación W3C de las cuatro páginas con 0 errores y 0 advertencias.

Flujo colaborativo mediante ramas, Pull Requests y Code Review.

Conventional Commits.

Capturas responsive del proyecto.

Pruebas finales en 375px, 768px y 1200px.

Ausencia de overflow horizontal y consola sin errores.

El proyecto queda preparado para su presentación y defensa correspondiente a la Evaluación 1.

👥 Trabajo colaborativo

El desarrollo se realizó de forma colaborativa utilizando GitHub.

Cada integrante:

Desarrolló funcionalidades en ramas independientes.

Realizó commits propios.

Creó Pull Requests.

Revisó el código del compañero.

Solicitó correcciones cuando correspondió.

Aprobó los cambios antes del merge.

Este flujo permitió mantener main estable y documentar claramente la participación de ambos integrantes.

📄 Evaluación

Proyecto desarrollado para:

Diplomado Full Stack — Evaluación 1

Tecnologías principales:

HTML5 · CSS3 · Bootstrap 5 · JavaScript Vanilla · Git · GitHub

👨‍💻 Autores

Rodrigo Astudillo

Waldo Araya

Proyecto académico desarrollado con fines educativos.