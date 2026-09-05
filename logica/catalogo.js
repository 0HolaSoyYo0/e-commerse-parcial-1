
const selector = document.querySelector("#categorias");
const catalogo = document.querySelector("#catalogo");
const claveCarrito = "carrito";
let productosDisponibles = [];

function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem(claveCarrito)) || [];
    } catch (error) {
        console.error("No se pudo leer el carrito:", error);
        return [];
    }
}

function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
}

async function iniciarCatalogo() {
    try {
        const respuesta = await fetch("../db/productos.json");
        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar productos.json (${respuesta.status})`);
        }
        productosDisponibles = await respuesta.json();

    function crearCatalogo(categoria) {
        if (!catalogo || !selector) {
            return;
        }

        catalogo.innerHTML = "";

        const productosFiltrados = categoria === "todos"
            ? productosDisponibles
            : productosDisponibles.filter(producto => producto.categoria === categoria);

        for (const producto of productosFiltrados) {
            const tarjeta = document.createElement("article");

            tarjeta.classList.add("tarjeta-producto");

            tarjeta.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <button type="button" data-producto-id="${producto.id}">
                    Agregar al carrito
                </button>
            `;

            catalogo.appendChild(tarjeta);
        }
    }

        if (selector) {
            selector.addEventListener("change", () => {
                crearCatalogo(selector.value);
            });

            crearCatalogo(selector.value);
        }
    
    } catch (error) {
        if (catalogo) {
            catalogo.innerHTML = `
                <p class="mensaje-error">
                    No se pudieron cargar los productos.
                    Abre el proyecto mediante un servidor local (por ejemplo, Live Server).
                </p>
            `;
        }

        console.error("Error al iniciar el catálogo:", error);
    }
}

catalogo?.addEventListener("click", event => {
    const boton = event.target.closest("button[data-producto-id]");

    if (!boton) {
        return;
    }

    const producto = productosDisponibles.find(
        item => item.id === Number(boton.dataset.productoId)
    );

    if (producto) {
        agregarAlCarrito(producto);
        boton.textContent = "Agregado";
        boton.disabled = true;

        window.setTimeout(() => {
            boton.textContent = "Agregar al carrito";
            boton.disabled = false;
        }, 900);
    }
});

iniciarCatalogo();