# E-Commerce de Productos Deportivos

Proyecto académico correspondiente a la asignatura **DESARROLLO FULLSTACK II_004D** de **DuocUC (Instituto Profesional)**.

## Descripción

Este proyecto consiste en el desarrollo de una página web tipo **e-commerce de productos deportivos**, construida como parte del proceso de aprendizaje de desarrollo Full Stack.

La aplicación está orientada a presentar un catálogo de productos deportivos y establecer una primera estructura para una futura tienda en línea.

Actualmente, el proyecto se encuentra en una etapa de **prototipado frontend**. La aplicación no cuenta todavía con un backend ni con una base de datos real. Para simular la fuente de información de los productos se utiliza un archivo **JSON**, que es leído y procesado mediante JavaScript.

El objetivo de esta etapa es construir y organizar la interfaz, la navegación y la lógica inicial del catálogo, dejando preparada la estructura para futuras integraciones con un backend y una base de datos.

---

## Información académica

| Campo | Información |
|---|---|
| Institución | DuocUC |
| Asignatura | DESARROLLO FULLSTACK II_004D |
| Tipo de proyecto | Proyecto académico |
| Área | Desarrollo Web / Full Stack |
| Estado | En desarrollo |

---

## Tecnologías utilizadas

El proyecto está construido utilizando tecnologías web fundamentales:

- **HTML5** — Estructura y contenido de las páginas.
- **CSS3** — Diseño y estilos visuales.
- **JavaScript** — Lógica e interacción de la aplicación.
- **JSON** — Fuente de datos utilizada para prototipar el catálogo.

---

## Estructura del proyecto

```text
e-commerse-parcial-1/
├── index.html
├── README.md
│
├── estilos/
│   ├── style-index.css
│   ├── form-login.css
│   └── form-registro.css
│
├── paginas/
│   ├── productos.html
│   ├── formulario-login.html
│   └── formulario-registro.html
│
├── logica/
│   └── catalogo.js
│
└── db/
    └── productos.json
````

### Descripción de las carpetas

#### `index.html`

Página principal del sitio. Contiene la estructura inicial de la tienda y sus principales elementos de navegación.

#### `paginas/`

Contiene las páginas secundarias del proyecto:

* `productos.html`: página destinada a la visualización del catálogo.
* `formulario-login.html`: formulario de inicio de sesión.
* `formulario-registro.html`: formulario de registro de usuarios.

#### `estilos/`

Contiene los archivos CSS utilizados para definir la apariencia de las diferentes páginas:

* `style-index.css`: estilos de la página principal.
* `form-login.css`: estilos del formulario de inicio de sesión.
* `form-registro.css`: estilos del formulario de registro.

#### `logica/`

Contiene la lógica JavaScript relacionada con el funcionamiento del catálogo:

* `catalogo.js`: encargado de obtener, filtrar y mostrar los productos dinámicamente.

#### `db/`

Contiene los datos utilizados durante la etapa de prototipado:

* `productos.json`: archivo JSON que representa temporalmente la información de los productos.

---

## Arquitectura

La aplicación se organiza separando las principales responsabilidades del frontend:

```text
┌─────────────────────┐
│       HTML          │
│   Presentación      │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│        CSS          │
│   Estilos y diseño  │
└─────────────────────┘

┌─────────────────────┐
│     JavaScript      │
│ Lógica e interacción│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│       JSON          │
│ Datos del catálogo  │
└─────────────────────┘
```

Actualmente, esta arquitectura corresponde principalmente a un **frontend estático**, donde JavaScript utiliza el archivo JSON como fuente local de información.

---

## Funcionamiento del catálogo

El flujo esperado para la carga del catálogo es:

```text
productos.html
       │
       ▼
 catalogo.js
       │
       ▼
productos.json
       │
       ▼
Obtención de productos
       │
       ▼
Filtrado por categoría
       │
       ▼
Creación dinámica de tarjetas
       │
       ▼
Visualización del catálogo
```

Los productos se representan mediante objetos JSON.

Ejemplo:

```json
{
    "id": 1,
    "nombre": "Nombre del producto",
    "precio": 22990,
    "categoria": "fitness_musculacion"
}
```

Este mecanismo permite prototipar la gestión de productos sin necesidad de implementar todavía una base de datos o un servidor backend.

---

## Ejecución del proyecto

Como el proyecto está construido con HTML, CSS, JavaScript y JSON, no requiere actualmente la instalación de dependencias externas.

Para ejecutarlo se debe abrir el archivo:

```text
index.html
```

También se recomienda utilizar un servidor local para trabajar con mayor facilidad durante el desarrollo, especialmente al cargar archivos JSON desde JavaScript.

---

## Estado actual

El proyecto se encuentra **en desarrollo**.

La estructura general ya separa presentación, estilos, lógica y datos, pero todavía existen funcionalidades y ajustes pendientes para completar la integración del sistema.

### Tareas pendientes

* [ ] Crear un archivo CSS exclusivo para la página de productos.
* [ ] Corregir la ruta utilizada para acceder a `productos.json`.
* [ ] Corregir la inserción de las tarjetas de productos para utilizar el contenedor `#catalogo`.
* [ ] Unificar las categorías utilizadas en HTML y JSON.
* [ ] Implementar correctamente el filtro de categoría `todos`.
* [ ] Completar los enlaces de navegación entre las páginas.
* [ ] Implementar el carrito de compras.
* [ ] Agregar funcionalidad a los botones de los productos.
* [ ] Incorporar validaciones en los formularios.
* [ ] Completar el comportamiento de inicio de sesión y registro.
* [ ] Reemplazar posteriormente el archivo JSON por una base de datos real.
* [ ] Incorporar un backend para gestionar la información y las operaciones de la aplicación.

---

## Limitaciones actuales

En esta versión no existe:

* Backend.
* Base de datos real.
* Persistencia de usuarios.
* Sistema de autenticación funcional.
* Carrito de compras completamente implementado.
* Gestión de productos mediante un servidor.

Por lo tanto, el archivo `productos.json` debe considerarse una **solución temporal de prototipado** y no una base de datos definitiva.

---

## Próximas etapas

La evolución esperada del proyecto contempla avanzar progresivamente desde el prototipo actual hacia una aplicación Full Stack.

Entre las futuras mejoras se considera:

1. Implementación de un backend.
2. Incorporación de una base de datos.
3. Conexión entre frontend y backend mediante una API.
4. Gestión de usuarios y autenticación.
5. Implementación completa del carrito de compras.
6. Persistencia de productos y pedidos.
7. Validación y manejo de datos desde el servidor.

---

## Contexto del proyecto

Este repositorio corresponde a un **proyecto académico desarrollado por estudiantes de DuocUC** para la asignatura:

**DESARROLLO FULLSTACK II_004D**

El proyecto tiene como finalidad aplicar los conocimientos adquiridos durante la asignatura en el desarrollo progresivo de una aplicación web Full Stack.

---

## Licencia

Este proyecto fue desarrollado con fines **académicos y educativos**.

No corresponde actualmente a un producto comercial.

```

Esta versión sigue una estructura más apropiada para un repositorio: identificación del proyecto, contexto académico, descripción, tecnologías, estructura, funcionamiento, ejecución, estado, limitaciones y evolución futura. Ese enfoque coincide con las recomendaciones habituales para README de proyectos, que priorizan explicar qué contiene el proyecto, para qué sirve, cómo utilizarlo y cuál es su estado. :contentReference[oaicite:1]{index=1}

También corregí el enfoque de la frase **“la base de datos actualmente es inexistente”**: en documentación técnica queda más claro decir que *no existe una base de datos real y que JSON se utiliza como fuente de datos temporal para prototipado*.
```

[1]: https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories?utm_source=chatgpt.com "Best practices for repositories - GitHub Docs"
# E-Commerce de Productos Deportivos

Proyecto académico correspondiente a la asignatura **DESARROLLO FULLSTACK II_004D** de **DuocUC (Instituto Profesional)**.

## Descripción

Este proyecto consiste en el desarrollo de una página web tipo **e-commerce de productos deportivos**, construida como parte del proceso de aprendizaje de desarrollo Full Stack.

La aplicación está orientada a presentar un catálogo de productos deportivos y establecer una primera estructura para una futura tienda en línea.

Actualmente, el proyecto se encuentra en una etapa de **prototipado frontend**. La aplicación no cuenta todavía con un backend ni con una base de datos real. Para simular la fuente de información de los productos se utiliza un archivo **JSON**, que es leído y procesado mediante JavaScript.

El objetivo de esta etapa es construir y organizar la interfaz, la navegación y la lógica inicial del catálogo, dejando preparada la estructura para futuras integraciones con un backend y una base de datos.

---

## Información académica

| Campo | Información |
|---|---|
| Institución | DuocUC |
| Asignatura | DESARROLLO FULLSTACK II_004D |
| Tipo de proyecto | Proyecto académico |
| Área | Desarrollo Web / Full Stack |
| Estado | En desarrollo |

---

## Tecnologías utilizadas

El proyecto está construido utilizando tecnologías web fundamentales:

- **HTML5** — Estructura y contenido de las páginas.
- **CSS3** — Diseño y estilos visuales.
- **JavaScript** — Lógica e interacción de la aplicación.
- **JSON** — Fuente de datos utilizada para prototipar el catálogo.

---

## Estructura del proyecto

```text
e-commerse-parcial-1/
├── index.html
├── README.md
│
├── estilos/
│   ├── style-index.css
│   ├── form-login.css
│   └── form-registro.css
│
├── paginas/
│   ├── productos.html
│   ├── formulario-login.html
│   └── formulario-registro.html
│
├── logica/
│   └── catalogo.js
│
└── db/
    └── productos.json
