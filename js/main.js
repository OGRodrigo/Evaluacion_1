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