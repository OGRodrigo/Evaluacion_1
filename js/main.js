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


    /*
        Si por alguna razón recibimos
        un valor incorrecto, usamos 1.
    */

    if (
        Number.isNaN(quantity) ||
        quantity < 1
    ) {
        return 1;
    }

    return quantity;
}


/* =========================================
   DISMINUIR CANTIDAD
========================================= */

function decreaseQuantity() {

    if (!productQuantity) {
        return;
    }

    const currentQuantity =
        getProductQuantity();


    /*
        No permitimos bajar de 1.
    */

    if (currentQuantity > 1) {

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
        getProductQuantity();


    productQuantity.value =
        currentQuantity + 1;
}


/* =========================================
   MOSTRAR MENSAJE DEL CARRITO
========================================= */

function showCartMessage(quantity) {

    if (!cartMessage) {
        return;
    }


    /*
        Elegimos singular o plural.
    */

    const word =
        quantity === 1
            ? "producto"
            : "productos";


    /*
        Modificamos visiblemente el DOM.
    */

    cartMessage.textContent =
        `${quantity} ${word} agregado al carrito.`;

}


/* =========================================
   AGREGAR AL CARRITO
========================================= */

function addProductToCart() {

    /*
        Obtenemos la cantidad seleccionada
        en producto.html.
    */

    const selectedQuantity =
        getProductQuantity();


    /*
        Sumamos esa cantidad al carrito.
    */

    cartQuantity +=
        selectedQuantity;


    /*
        Guardamos el nuevo valor.
    */

    saveCart();


    /*
        Actualizamos el contador
        del Navbar.
    */
    updateCartCounter();


    /*
        Mostramos feedback visible.
    */
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