const listaCarrito = document.querySelector("#lista-carrito");
const totalCarrito = document.querySelector("#total-carrito");
const mensajeCarrito = document.querySelector("#mensaje-carrito");
const claveCarrito = "carrito";

function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem(claveCarrito)) || [];
    } catch (error) {
        console.error("No se pudo leer el carrito:", error);
        return [];
    }
}

function formatoPrecio(precio) {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0
    }).format(precio);
}

function mostrarCarrito() {
    const carrito = obtenerCarrito();

    if (!listaCarrito || !totalCarrito) {
        return;
    }

    listaCarrito.replaceChildren();

    if (carrito.length === 0) {
        mensajeCarrito.textContent = "El carrito está vacío.";
        totalCarrito.textContent = formatoPrecio(0);
        return;
    }

    mensajeCarrito.textContent = "Productos seleccionados";
    let total = 0;

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const item = document.createElement("li");
        item.innerHTML = `
            <span>${producto.nombre} x ${producto.cantidad}</span>
            <strong>${formatoPrecio(subtotal)}</strong>
            <button type="button" data-producto-id="${producto.id}">Quitar</button>
        `;
        listaCarrito.appendChild(item);
    });

    totalCarrito.textContent = formatoPrecio(total);
}

listaCarrito?.addEventListener("click", event => {
    const boton = event.target.closest("button[data-producto-id]");

    if (!boton) {
        return;
    }

    const carrito = obtenerCarrito().filter(
        producto => producto.id !== Number(boton.dataset.productoId)
    );

    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
    mostrarCarrito();
});

mostrarCarrito();
