const catalogoDestacados = document.querySelector("#productos-destacados");
const contadorCarrito = document.querySelector("#contador-carrito");
const mensajeCatalogo = document.querySelector("#mensaje-catalogo");
const claveCarrito = "carrito";
const nombresCategorias = {
    fitness_musculacion: "Fitness y musculación",
    running_atletismo: "Running y atletismo",
    deportes_equipo: "Deportes de equipo",
    deportes_raqueta: "Deportes de raqueta",
    deportes_combate: "Deportes de combate",
    ciclismo: "Ciclismo",
    outdoor_trekking: "Outdoor y trekking",
    nutricion_bienestar: "Nutrición y bienestar"
};

function obtenerCarrito() {
    try {
        return JSON.parse(localStorage.getItem(claveCarrito)) || [];
    } catch (error) {
        console.error("No se pudo leer el carrito:", error);
        return [];
    }
}

function guardarCarrito(carrito) {
    localStorage.setItem(claveCarrito, JSON.stringify(carrito));
}

function actualizarContadorCarrito() {
    const cantidad = obtenerCarrito()
        .reduce((total, producto) => total + producto.cantidad, 0);

    if (contadorCarrito) {
        contadorCarrito.textContent = cantidad;
    }
}

function formatoPrecio(precio) {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0
    }).format(precio);
}

function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
    actualizarContadorCarrito();
}

function crearTarjeta(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-producto";
    tarjeta.innerHTML = `
        <div class="imagen-placeholder" aria-label="Imagen pendiente de ${producto.nombre}">
            <span>Producto</span>
        </div>
        <a class="titulo-producto" href="paginas/detalle-producto.html?id=${producto.id}">
            ${producto.nombre}
        </a>
        <div class="detalles-producto">
            <span>${nombresCategorias[producto.categoria] || "Categoría"}</span>
            <span class="precio-producto">${formatoPrecio(producto.precio)}</span>
        </div>
        <div class="acciones-producto">
            <button class="boton-agregar" type="button" data-producto-id="${producto.id}">
                Añadir al carrito
            </button>
            <a class="boton-detalle" href="paginas/detalle-producto.html?id=${producto.id}">
                Ver detalle
            </a>
        </div>
    `;

    return tarjeta;
}

async function cargarProductosDestacados() {
    if (!catalogoDestacados) {
        return;
    }

    try {
        const respuesta = await fetch("db/productos.json");

        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar productos.json (${respuesta.status})`);
        }

        const productos = await respuesta.json();
        const destacados = productos.slice(0, 8);

        catalogoDestacados.replaceChildren(
            ...destacados.map(crearTarjeta)
        );

        catalogoDestacados.addEventListener("click", event => {
            const boton = event.target.closest(".boton-agregar");

            if (!boton) {
                return;
            }

            const producto = productos.find(
                item => item.id === Number(boton.dataset.productoId)
            );

            if (producto) {
                agregarAlCarrito(producto);
                boton.textContent = "Agregado";
                boton.disabled = true;

                setTimeout(() => {
                    boton.textContent = "Añadir al carrito";
                    boton.disabled = false;
                }, 1000);
            }
        });
    } catch (error) {
        if (mensajeCatalogo) {
            mensajeCatalogo.textContent = "No se pudieron cargar los productos. Usa un servidor local para abrir la página.";
        }

        console.error("Error al cargar productos destacados:", error);
    }
}

actualizarContadorCarrito();
cargarProductosDestacados();
