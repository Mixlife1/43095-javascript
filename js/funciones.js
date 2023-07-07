let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductosLS(productos)
    })


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

    return carrito.some(item => item.id === id)
}

function agregarProducto(id) {
    Toastify({
        text: "Agregado al carrito!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    const carrito = cargarCarritoLS();

    if (estaEnElCarrito(id)) {
        let pos = carrito.findIndex(item => item.id === id);
        carrito[pos].cantidad += 1;
    } else {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        carrito.push(producto);
    }

    guardarCarritoLS(carrito);
    renderBotonCarrito();
}

function eliminarProducto(id) {
    Toastify({
        text: "Producto eliminado del carrito!",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #8B0000, #8B0000)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    const carrito = cargarCarritoLS();
    let pos = carrito.findIndex(item => item.id === id);
    
    if (carrito[pos].cantidad > 1) {
        carrito[pos].cantidad -= 1;
    } else {
        carrito.splice(pos, 1);
    }

    guardarCarritoLS(carrito);
    renderBotonCarrito();
    renderProductos();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    renderBotonCarrito();
    renderProductos();
}

function cantidadTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0);
}

function sumaTotalProductos() {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.cantidad * item.precio, 0);
}

function verProducto(id) {
    const producto = buscarProducto(id);
    localStorage.setItem("producto", JSON.stringify(producto));
}

function renderBotonCarrito() {
    let botonCarrito = document.getElementById("botonCarrito");
    let contenido = `<button type="button" class="btn bg-light position-relative">
    <img src="multimedia/cart2.svg" alt="Carrito" width="32">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${cantidadTotalProductos()}
    </span>
    </button>`;
    botonCarrito.innerHTML = contenido;    
}

function filtrarProductos() {
    let productos = cargarProductosLS();
    let textoBusqueda = document.getElementById("textoBusqueda").value;
    let contenido = "";

    productos = textoBusqueda ? productos.filter(item => item.nombre.toUpperCase().includes(textoBusqueda.toUpperCase())) : productos;

    if (productos.length > 0) {
        productos.forEach(producto => {
            contenido += `<div class="col-md-3 mb-5">
            <a href="ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
                <div class="card text-center border border-0">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <p class="card-text text-primary"><b>$${producto.precio}</b></p>
                        <p class="text-secondary">${producto.nombre}</p>
                    </div>
                </div>
            </a>
            </div>`;
        });
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">No se encontraron productos por el término de búsqueda!</div>`;
    }
    
    document.getElementById("contenido").innerHTML = contenido;
}   

function filtrarProductosConCheck() {
    let productos = cargarProductosLS(); 
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");
    let check4 = document.getElementById("check4");
    let check5 = document.getElementById("check5");
    let contenido = "";

    productos = productos.filter(item => (check1.checked && item.marca == check1.value) || (check2.checked && item.marca == check2.value) || (check3.checked && item.marca == check3.value));

    if (check4.checked || check5.checked) {
        productos = productos.filter(item => (check4.checked && item.tipo == check4.value) || (check5.checked && item.tipo == check5.value));
    }

    if (productos.length > 0) {
        productos.forEach(producto => {
            contenido += `<div class="col-md-3 mb-5">
            <a href="ver-producto.html" onclick="verProducto(${producto.id})" class="text-decoration-none">
                <div class="card text-center border border-0">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <p class="card-text text-primary"><b>$${producto.precio}</b></p>
                        <p class="text-secondary">${producto.nombre}</p>
                    </div>
                </div>
            </a>
            </div>`;
        });
        
        document.getElementById("contenido").innerHTML = contenido;
    } else {
        renderProductos();
    }
}