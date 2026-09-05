
const selector = document.querySelector("#categorias");
const catalogo = document.querySelector("#catalogo");

async function iniciarCatalogo() {
    try {
        const respuesta = await fetch("../db/productos.json");
        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar productos.json (${respuesta.status})`);
        }
        const productos = await respuesta.json();

    function crearCatalogo(categoria) {
        if (!catalogo || !selector) {
            return;
        }

        catalogo.innerHTML = "";

        const productosFiltrados = categoria === "todos"
            ? productos
            : productos.filter(producto => producto.categoria === categoria);

        for (const producto of productosFiltrados) {
            const tarjeta = document.createElement("article");

            tarjeta.classList.add("tarjeta-producto");

            tarjeta.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
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

iniciarCatalogo();