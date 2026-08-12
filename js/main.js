/* =========================================
   NEXUS STORE
   JAVASCRIPT PRINCIPAL
========================================= */


/* =========================================
   CARRITO
========================================= */


/*
    Buscamos el contador del carrito
    que aparece en el Navbar.
*/

const cartCount =
    document.querySelector("#cart-count");


/*
    Elementos disponibles en
    producto.html.
*/

const quantityDecrease =
    document.querySelector("#quantity-decrease");

const quantityIncrease =
    document.querySelector("#quantity-increase");

const productQuantity =
    document.querySelector("#product-quantity");

const addToCartButton =
    document.querySelector("#add-to-cart");

const cartMessage =
    document.querySelector("#cart-message");


/* =========================================
   ESTADO DEL CARRITO
========================================= */


/*
    Recuperamos desde localStorage
    la cantidad de productos guardada.

    localStorage devuelve texto,
    por eso usamos Number().
*/

let cartQuantity =
    Number(
        localStorage.getItem("nexusCartQuantity")
    ) || 0;

/* =========================================
   ACTUALIZAR CONTADOR
========================================= */

function updateCartCounter() {

    /*
        main.js puede cargarse en varias páginas.

        Si la página tiene #cart-count,
        actualizamos su contenido.
    */

    if (!cartCount) {
        return;
    }


    /*
        Modificamos visiblemente el DOM.
    */

    cartCount.textContent =
        cartQuantity;
}


/* =========================================
   GUARDAR CARRITO
========================================= */

function saveCart() {

    /*
        localStorage almacena información
        dentro del navegador.

        El dato permanece incluso si
        recargamos la página.
    */

    localStorage.setItem(
        "nexusCartQuantity",
        cartQuantity
    );
}


/* =========================================
   OBTENER CANTIDAD DEL PRODUCTO
========================================= */

function getProductQuantity() {

    if (!productQuantity) {
        return 1;
    }


    const quantity =
        Number(productQuantity.value);


    const minQuantity =
        Number(productQuantity.min) || 1;


    const maxQuantity =
        Number(productQuantity.max) || 10;


    /*
        Si el valor no es válido,
        devolvemos null.
    */

    if (
        Number.isNaN(quantity) ||
        quantity < minQuantity ||
        quantity > maxQuantity
    ) {
        return null;
    }


    return quantity;

}

function showInventoryMessage() {

    if (!cartMessage || !productQuantity) {
        return;
    }


    const maxQuantity =
        Number(productQuantity.max) || 10;


    cartMessage.textContent =
        `La cantidad máxima de compra por producto es de ${maxQuantity} unidades.`;

}


/* =========================================
   DISMINUIR CANTIDAD
========================================= */

function decreaseQuantity() {

    if (!productQuantity) {
        return;
    }


    const currentQuantity =
        Number(productQuantity.value);


    const minQuantity =
        Number(productQuantity.min) || 1;


    /*
        Si el valor no es válido
        usamos el mínimo.
    */

    if (
        Number.isNaN(currentQuantity) ||
        currentQuantity < minQuantity
    ) {

        productQuantity.value =
            minQuantity;

        return;

    }


    if (currentQuantity > minQuantity) {

        productQuantity.value =
            currentQuantity - 1;

    }

}


/* =========================================
   AUMENTAR CANTIDAD
========================================= */

function increaseQuantity() {

    if (!productQuantity) {
        return;
    }


    const currentQuantity =
        Number(productQuantity.value);


    const maxQuantity =
        Number(productQuantity.max) || 10;


    /*
        Si el valor actual no es válido,
        volvemos al mínimo.
    */

    if (Number.isNaN(currentQuantity)) {

        productQuantity.value = 1;

        return;

    }


    /*
        Solo aumentamos si no
        alcanzamos el máximo.
    */

    if (currentQuantity < maxQuantity) {

        productQuantity.value =
            currentQuantity + 1;

    }

}


/* =========================================
   MOSTRAR MENSAJE DEL CARRITO
========================================= */

function showCartMessage(quantity) {

    if (!cartMessage) {
        return;
    }


    const message =
        quantity === 1
            ? "1 producto agregado al carrito."
            : `${quantity} productos agregados al carrito.`;


    cartMessage.textContent =
        message;

}


/* =========================================
   AGREGAR AL CARRITO
========================================= */

function addProductToCart() {

    const selectedQuantity =
        getProductQuantity();


    /*
        Si la cantidad está fuera
        del rango permitido,
        no agregamos productos.
    */

    if (selectedQuantity === null) {

        showInventoryMessage();

        return;

    }


    cartQuantity +=
        selectedQuantity;


    saveCart();


    updateCartCounter();


    showCartMessage(
        selectedQuantity
    );

}


/* =========================================
   EVENTO: DISMINUIR CANTIDAD
========================================= */

if (quantityDecrease) {
    quantityDecrease.addEventListener(
        "click",
        decreaseQuantity
    );
}


/* =========================================
   EVENTO: AUMENTAR CANTIDAD
========================================= */

if (quantityIncrease) {
    quantityIncrease.addEventListener(
        "click",
        increaseQuantity
    );
}


/* =========================================
   EVENTO: AGREGAR AL CARRITO
========================================= */

if (addToCartButton) {
    addToCartButton.addEventListener(
        "click",
        addProductToCart
    );
}

/* =========================================
   INICIALIZACIÓN
========================================= */

/*
    Cada vez que se carga una página,
    mostramos el valor guardado
    previamente en localStorage.
*/

updateCartCounter();

/* =========================================
   CATÁLOGO DE PRODUCTOS
========================================= */


/*
    Elementos disponibles solamente
    en productos.html.
*/

const productSearch =
    document.querySelector("#product-search");

const categoryFilter =
    document.querySelector("#category-filter");

const sortProducts =
    document.querySelector("#sort-products");

const productsCounter =
    document.querySelector("#products-counter");

const productsGrid =
    document.querySelector("#products-grid");

const productItems =
    Array.from(
        document.querySelectorAll(".product-item")
    );


/* =========================================
   NORMALIZAR TEXTO
========================================= */

/*
    Convertimos el texto a minúsculas
    y eliminamos tildes.

    De esta forma:

    "Mecánico"
    "mecanico"

    pueden coincidir en una búsqueda.
*/

function normalizeProductText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


/* =========================================
   ACTUALIZAR CONTADOR DE RESULTADOS
========================================= */

function updateProductsCounter(quantity) {

    if (!productsCounter) {
        return;
    }

    const message =
        quantity === 1
            ? "1 producto encontrado"
            : `${quantity} productos encontrados`;

    productsCounter.textContent =
        message;

}


/* =========================================
   FILTRAR PRODUCTOS
========================================= */

function filterProducts() {

    if (productItems.length === 0) {
        return;
    }


    /*
        Obtenemos el texto escrito
        por el usuario.
    */

    const searchValue =
        normalizeProductText(
            productSearch?.value.trim() || ""
        );


    /*
        Obtenemos la categoría seleccionada.
    */

    const selectedCategory =
        categoryFilter?.value || "all";


    let visibleProducts = 0;


    productItems.forEach((product) => {

        const productName =
            normalizeProductText(
                product.dataset.name || ""
            );

        const productCategory =
        normalizeProductText(
            product.dataset.category || ""
        );


        /*
            Coincidencia por nombre.
        */

        const matchesSearch =
                productName.includes(searchValue) ||
                productCategory.includes(searchValue);


        /*
            Coincidencia por categoría.

            "all" significa mostrar todas.
        */

        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        /*
            El producto se muestra solamente
            cuando cumple ambas condiciones.
        */

        const shouldShow =
            matchesSearch &&
            matchesCategory;


        /*
            d-none es una clase de Bootstrap
            que oculta el elemento.
        */

        product.classList.toggle(
            "d-none",
            !shouldShow
        );


        if (shouldShow) {
            visibleProducts++;
        }

    });


    /*
        Actualizamos visiblemente
        el contador del DOM.
    */

    updateProductsCounter(
        visibleProducts
    );

}
/* =========================================
   ORDENAR PRODUCTOS
========================================= */

function orderProducts() {

    if (
        !productsGrid ||
        productItems.length === 0
    ) {
        return;
    }

    const selectedOrder =
        sortProducts?.value || "default";


    /*
        Creamos una copia para no alterar
        permanentemente el arreglo original.
    */

    const orderedProducts =
        [...productItems];


    /*
        MENOR PRECIO
    */

    if (selectedOrder === "price-low") {

        orderedProducts.sort(
            (productA, productB) => {

                const priceA =
                    Number(productA.dataset.price);

                const priceB =
                    Number(productB.dataset.price);

                return priceA - priceB;

            }
        );

    }


    /*
        MAYOR PRECIO
    */

    else if (
        selectedOrder === "price-high"
    ) {

        orderedProducts.sort(
            (productA, productB) => {

                const priceA =
                    Number(productA.dataset.price);

                const priceB =
                    Number(productB.dataset.price);

                return priceB - priceA;

            }
        );

    }


    /*
        NOMBRE A-Z
    */

    else if (
        selectedOrder === "name-az"
    ) {

        orderedProducts.sort(
            (productA, productB) => {

                const nameA =
                    normalizeProductText(
                        productA.dataset.name || ""
                    );

                const nameB =
                    normalizeProductText(
                        productB.dataset.name || ""
                    );

                return nameA.localeCompare(
                    nameB,
                    "es"
                );

            }
        );

    }


    /*
        Reinsertamos las cards
        en el nuevo orden.

        appendChild mueve el elemento,
        no lo duplica.
    */

    orderedProducts.forEach(
        (product) => {

            productsGrid.appendChild(product);

        }
    );

}

/* =========================================
   EVENTO: BUSCADOR
========================================= */

if (productSearch) {

    productSearch.addEventListener(
        "input",
        filterProducts
    );

}
/* =========================================
   EVENTO: ORDENAMIENTO
========================================= */

if (sortProducts) {

    sortProducts.addEventListener(
        "change",
        orderProducts
    );

}

/* =========================================
   EVENTO: CATEGORÍA
========================================= */

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterProducts
    );

}


/* =========================================
   INICIALIZACIÓN DEL CATÁLOGO
========================================= */

if (
    productsGrid &&
    productItems.length > 0
) {

    updateProductsCounter(
        productItems.length
    );

}