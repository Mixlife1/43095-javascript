function guardarProductosLS() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos"));
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}


function buscarProducto(id) {
    const productos = cargarProductosLS();
    return productos.find(item => item.id === id);
}

function estaEnElCarrito(id) {
    const carrito = cargarCarritoLS();
    return carrito.some(item => item.id === id);
}

function agregarProducto(id) {
    let carrito = cargarCarritoLS();
    
    if (estaEnElCarrito(id)) {
        let pos = carrito.findIndex(item => item.id === id);
        carrito[pos].cantidad += 1;
    } else {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        carrito.push(producto);
    }
    
    guardarCarritoLS(carrito);
    renderProducto();
    renderBotonCarrito();
}

function eliminarProducto(id) {
    let carrito = cargarCarritoLS();
    let pos = carrito.findIndex(item => item.id === id);

    if (carrito[pos].cantidad > 1) {
        carrito[pos].cantidad -= 1;
    } else {
        carrito.splice(pos, 1);
    }

    guardarCarritoLS(carrito);
    renderBotonCarrito();
    renderProducto();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderBotonCarrito();
    renderProducto();
}

function cantidadTotalProductos() {
    const carrito = cargarCarritoLS();
    return carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0);
}

function sumaTotalProductos() {
    const carrito = cargarCarritoLS();
    return carrito.reduce((acumulador, item) => acumulador += item.cantidad * item.precio, 0);
}

function renderBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let cantidadProductos = cantidadTotalProductos();
    let contenido = `<button type="button" class="btn bg-light position-relative">
    <img src="multimedia/cart2.svg" alt="Carrito" width="32">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadProductos}
    </span>
</button>`;
botonCarrito.innerHTML = contenido;}
