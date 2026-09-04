const selector = document.querySelector("#categorias");

const catalogo = document.querySelector("#catalogo");

async function iniciarCatalogo() {
    const respuesta = await fetch("./db/productos.json");

    const productos = await respuesta.json();

    function crearCatalogo(categoria) {
        if (!catalogo || !selector) {
            return;
        }

        catalogo.innerHTML = "";

        const productosFiltrados = productos.filter(producto => producto.categoria === categoria);

        for (const producto of productosFiltrados) {
            const tarjeta = document.createElement("article");

            tarjeta.classList.add("tarjeta-producto");

            tarjeta.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
            `;

            selector.appendChild(tarjeta);
        }

        selector.addEventListener("change", () => {
            crearCatalogo(selector.value);
        });
    }

    if (selector) {
        crearCatalogo(selector.value);
    }
}

iniciarCatalogo();