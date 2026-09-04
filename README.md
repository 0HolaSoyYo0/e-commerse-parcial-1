# E-Commerce de Productos Deportivos

## Descripción

Se desarrolla una página web tipo **e-commerce de productos deportivos** utilizando **HTML, CSS y JavaScript**.

Actualmente, el proyecto **no cuenta con una base de datos real**. Para prototipar y simular la gestión de productos, se utiliza un archivo **JSON** como fuente de datos local.

El proyecto se encuentra en una etapa de desarrollo, por lo que algunas funcionalidades todavía están pendientes de implementación o requieren ajustes.

## Tecnologías utilizadas

* **HTML5** — Estructura y contenido de las páginas.
* **CSS3** — Diseño y estilos visuales.
* **JavaScript** — Lógica e interacción del catálogo.
* **JSON** — Prototipo de almacenamiento de productos.

## Estructura del proyecto

```text
e-commerse-parcial-1/
├── index.html
├── README.md
├── estilos/
│   ├── style-index.css
│   ├── form-login.css
│   └── form-registro.css
├── paginas/
│   ├── productos.html
│   ├── formulario-login.html
│   └── formulario-registro.html
├── logica/
│   └── catalogo.js
└── db/
    └── productos.json
```

## Arquitectura

El proyecto utiliza una arquitectura **frontend estática**, separando las responsabilidades principales entre presentación, estilos, lógica y datos.

### Capa de presentación

Está compuesta por los archivos HTML:

* `index.html`: página principal de la tienda.
* `productos.html`: página destinada a mostrar el catálogo.
* `formulario-login.html`: formulario de inicio de sesión.
* `formulario-registro.html`: formulario de registro.

Los archivos HTML definen la estructura de las páginas, textos, formularios, enlaces, botones y contenedores visuales.

### Capa de estilos

Se encuentra dentro de la carpeta `estilos`:

* `style-index.css`: estilos de la página principal, encabezado, productos destacados y pie de página.
* `form-login.css`: estilos correspondientes al inicio de sesión.
* `form-registro.css`: estilos correspondientes al registro de usuarios.

Los estilos se encuentran separados según la página, facilitando su mantenimiento y modificación.

### Capa de lógica

Está representada principalmente por `logica/catalogo.js`.

Su responsabilidad es:

* Obtener la categoría seleccionada en el filtro.
* Consultar los productos disponibles.
* Filtrar los productos según su categoría.
* Crear tarjetas de productos dinámicamente.
* Insertar las tarjetas en la página.

Actualmente, esta lógica todavía requiere algunos ajustes para completar correctamente la integración del catálogo.

### Capa de datos

Los datos se encuentran en:

```text
db/productos.json
```

Este archivo funciona como una **base de datos local para el prototipo** y contiene una lista de productos representados mediante objetos JSON.

Ejemplo:

```json
{
    "id": 1,
    "nombre": "Nombre del producto",
    "precio": 22990,
    "categoria": "fitness_musculacion"
}
```

Por el momento, **no existe un backend ni una base de datos real**. Los productos son obtenidos desde el archivo JSON mediante JavaScript.

## Flujo de funcionamiento

El funcionamiento esperado del catálogo es:

```text
productos.html
       ↓
catalogo.js
       ↓
productos.json
       ↓
Filtrado por categoría
       ↓
Creación dinámica de tarjetas
       ↓
Visualización en #catalogo
```

## Estado actual del proyecto

La organización general del proyecto está encaminada, manteniendo separadas las capas de **presentación, estilos, lógica y datos**.

Sin embargo, existen funcionalidades y ajustes pendientes:

* [ ] Crear un archivo CSS exclusivo para la página de productos.
* [ ] Corregir la ruta hacia `productos.json`.
* [ ] Corregir la inserción de las tarjetas para que se realice dentro de `#catalogo`.
* [ ] Hacer coincidir las categorías utilizadas en HTML con las categorías definidas en el JSON.
* [ ] Implementar correctamente la opción **"todos"** del filtro.
* [ ] Conectar correctamente los enlaces de navegación.
* [ ] Implementar el carrito de compras.
* [ ] Implementar las acciones de los botones de productos.
* [ ] Agregar validaciones y comportamiento a los formularios.
* [ ] Completar y mantener actualizada la documentación del proyecto.

## Proyección

Como siguiente etapa, el proyecto puede evolucionar desde el prototipo actual hacia una aplicación e-commerce más completa, incorporando un **backend y una base de datos real**, además de funcionalidades como autenticación de usuarios, carrito de compras, gestión de productos y persistencia de información.
