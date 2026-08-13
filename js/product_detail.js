/* =========================================
   NEXUS STORE
   DETALLE DINÁMICO DE PRODUCTOS
========================================= */


/* =========================================
   DATOS DE PRODUCTOS
========================================= */

/*
    Los nombres, precios e imágenes coinciden
    con los productos disponibles actualmente
    en productos.html.

    Las descripciones, ratings y características
    restantes corresponden al contenido de maqueta
    utilizado para esta evaluación académica.
*/

const PRODUCTS_DATA = {

    "asus-vivobook": {
        name: "Notebook ASUS VivoBook 15",
        price: "$699.990",
        image: "img/asus-vivobook.jpg",
        badge: "Nuevo",
        rating: "4.8",
        reviews: "24 reseñas",
        description:
            "Notebook potente y liviano, ideal para trabajo, estudio y entretenimiento. Diseñado para ofrecer un rendimiento eficiente y una experiencia moderna para el uso diario.",
        specifications: [
            "Procesador Intel Core i5-1335U",
            "16 GB de memoria RAM",
            "SSD de 512 GB",
            'Pantalla 15.6" Full HD',
            "Windows 11 Home"
        ]
    },

    "macbook-air-m2": {
        name: "MacBook Air M2",
        price: "$1.299.990",
        image: "img/macbook-air-m2.jpg",
        badge: "Nuevo",
        rating: "4.9",
        reviews: "31 reseñas",
        description:
            "Notebook delgado y liviano orientado a productividad, estudio y creación de contenido, con diseño portátil y una experiencia fluida para el uso diario.",
        specifications: [
            "Chip Apple M2",
            "Diseño delgado y liviano",
            "Pantalla de alta resolución",
            "Almacenamiento SSD",
            "Sistema operativo macOS"
        ]
    },

    "samsung-galaxy-s24": {
        name: "Samsung Galaxy S24",
        price: "$799.990",
        image: "img/samsung-galaxy-s24.jpg",
        badge: "Nuevo",
        rating: "4.8",
        reviews: "42 reseñas",
        description:
            "Smartphone moderno diseñado para comunicación, fotografía, contenido multimedia y productividad móvil.",
        specifications: [
            "Pantalla de alta definición",
            "Sistema de múltiples cámaras",
            "Conectividad móvil de alta velocidad",
            "Almacenamiento interno",
            "Sistema operativo Android"
        ]
    },

    "iphone-15": {
        name: "iPhone 15",
        price: "$929.990",
        image: "img/iphone-15.jpg",
        badge: "Nuevo",
        rating: "4.9",
        reviews: "38 reseñas",
        description:
            "Smartphone diseñado para ofrecer una experiencia rápida, intuitiva y versátil en fotografía, comunicación y entretenimiento.",
        specifications: [
            "Pantalla de alta resolución",
            "Sistema avanzado de cámaras",
            "Conectividad USB-C",
            "Almacenamiento interno",
            "Sistema operativo iOS"
        ]
    },

    "sony-wh-ch720n": {
        name: "Audífonos Sony WH-CH720N",
        price: "$129.990",
        image: "img/sony-wh-ch720n.jpg",
        badge: "Destacado",
        rating: "4.7",
        reviews: "19 reseñas",
        description:
            "Audífonos inalámbricos orientados a música, trabajo y entretenimiento, con diseño cómodo para sesiones prolongadas.",
        specifications: [
            "Conectividad inalámbrica",
            "Cancelación de ruido",
            "Micrófono integrado",
            "Controles incorporados",
            "Diseño liviano"
        ]
    },

    "jbl-charge-5": {
        name: "Parlante JBL Charge 5",
        price: "$149.990",
        image: "img/jbl-charge-5.jpg",
        badge: "Destacado",
        rating: "4.8",
        reviews: "27 reseñas",
        description:
            "Parlante portátil pensado para música y entretenimiento, con diseño resistente y conectividad inalámbrica.",
        specifications: [
            "Conectividad Bluetooth",
            "Diseño portátil",
            "Batería recargable",
            "Sonido de alta potencia",
            "Diseño resistente para uso cotidiano"
        ]
    },

    "logitech-g913": {
        name: "Teclado Mecánico Logitech G913",
        price: "$199.990",
        image: "img/logitech-g913.jpg",
        badge: "Gaming",
        rating: "4.8",
        reviews: "22 reseñas",
        description:
            "Teclado mecánico orientado a gaming y productividad, con diseño moderno y controles pensados para una respuesta rápida.",
        specifications: [
            "Teclas mecánicas",
            "Diseño de perfil bajo",
            "Iluminación integrada",
            "Controles multimedia",
            "Orientado a gaming"
        ]
    },

    "logitech-mx-master-3s": {
        name: "Mouse Inalámbrico Logitech MX Master 3S",
        price: "$99.990",
        image: "img/logitech-mx-master-3s.jpg",
        badge: "Destacado",
        rating: "4.9",
        reviews: "35 reseñas",
        description:
            "Mouse inalámbrico ergonómico orientado a productividad, navegación precisa y trabajo prolongado.",
        specifications: [
            "Conectividad inalámbrica",
            "Diseño ergonómico",
            "Sensor de alta precisión",
            "Rueda de desplazamiento",
            "Botones configurables"
        ]
    },

    "corsair-tc100": {
        name: "Silla Gamer Corsair TC100",
        price: "$249.990",
        image: "img/corsair-tc100.jpg",
        badge: "Gaming",
        rating: "4.7",
        reviews: "18 reseñas",
        description:
            "Silla gamer diseñada para brindar comodidad durante sesiones prolongadas de juego, estudio o trabajo.",
        specifications: [
            "Diseño ergonómico",
            "Respaldo reclinable",
            "Apoyabrazos ajustables",
            "Soporte lumbar",
            "Diseño orientado a gaming"
        ]
    }

};


/* =========================================
   ELEMENTOS DEL DOM
========================================= */

const productBreadcrumb =
    document.querySelector("#product-breadcrumb-name");

const mainProductImage =
    document.querySelector("#main-product-image");

const thumbnailImages =
    document.querySelectorAll(".thumbnail-button img");

const thumbnailButtons =
    document.querySelectorAll(".thumbnail-button");

const productBadge =
    document.querySelector("#product-detail-badge");

const productTitle =
    document.querySelector("#product-detail-title");

const productPrice =
    document.querySelector("#product-detail-price");

const productRating =
    document.querySelector("#product-detail-rating");

const productRatingText =
    document.querySelector("#product-rating-text");

const productDescription =
    document.querySelector("#product-description");

const specificationsList =
    document.querySelector("#product-specifications-list");


/* =========================================
   OBTENER PRODUCTO DESDE LA URL
========================================= */

const urlParameters =
    new URLSearchParams(window.location.search);

const productId =
    urlParameters.get("id");


/*
    Si no existe el parámetro o no coincide con
    ningún producto, dejamos ASUS como respaldo.
*/

const selectedProduct =
    PRODUCTS_DATA[productId] ||
    PRODUCTS_DATA["asus-vivobook"];


/* =========================================
   RENDERIZAR PRODUCTO
========================================= */

function renderProduct(product) {

    if (!product) {
        return;
    }


    /*
        Título de la pestaña.
    */

    document.title =
        `Nexus Store | ${product.name}`;


    /*
        Breadcrumb.
    */

    if (productBreadcrumb) {
        productBreadcrumb.textContent =
            product.name;
    }


    /*
        Imagen principal.
    */

    if (mainProductImage) {

        mainProductImage.src =
            product.image;

        mainProductImage.alt =
            `${product.name} vista principal`;

    }


    /*
        Miniaturas.

        Actualmente el proyecto utiliza una
        imagen por producto, por lo que repetimos
        esa imagen en las tres miniaturas.
    */

    thumbnailImages.forEach(
        (thumbnail) => {

            thumbnail.src =
                product.image;

            thumbnail.alt = "";

        }
    );


    /*
        Actualizamos etiquetas accesibles
        de las miniaturas.
    */

    thumbnailButtons.forEach(
        (button, index) => {

            button.setAttribute(
                "aria-label",
                `Ver imagen ${index + 1} de ${product.name}`
            );

        }
    );


    /*
        Badge.
    */

    if (productBadge) {
        productBadge.textContent =
            product.badge;
    }


    /*
        Nombre.
    */

    if (productTitle) {
        productTitle.textContent =
            product.name;
    }


    /*
        Precio.
    */

    if (productPrice) {
        productPrice.textContent =
            product.price;
    }


    /*
        Rating.
    */

    if (productRating) {

        productRating.setAttribute(
            "aria-label",
            `Calificación ${product.rating} de 5`
        );

    }


    if (productRatingText) {

        productRatingText.textContent =
            `${product.rating} (${product.reviews})`;

    }


    /*
        Descripción.
    */

    if (productDescription) {

        productDescription.textContent =
            product.description;

    }


    /*
        Características.
    */

    if (specificationsList) {

        specificationsList.innerHTML = "";

        product.specifications.forEach(
            (specification) => {

                const listItem =
                    document.createElement("li");

                listItem.textContent =
                    specification;

                specificationsList.appendChild(
                    listItem
                );

            }
        );

    }

}


/* =========================================
   MINIATURAS
========================================= */

thumbnailButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            () => {

                /*
                    Quitamos el estado activo
                    de todas las miniaturas.
                */

                thumbnailButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                /*
                    Marcamos la seleccionada.
                */

                button.classList.add(
                    "active"
                );


                /*
                    En esta versión todas las miniaturas
                    usan la misma imagen del producto,
                    pero dejamos preparada la lógica
                    para futuras imágenes diferentes.
                */

                const selectedThumbnail =
                    thumbnailImages[index];

                if (
                    mainProductImage &&
                    selectedThumbnail
                ) {

                    mainProductImage.src =
                        selectedThumbnail.src;

                }

            }
        );

    }
);


/* =========================================
   INICIALIZACIÓN
========================================= */

renderProduct(
    selectedProduct
);