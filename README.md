Entendido. Aquí tienes el contenido del `README.md` directamente, listo para copiar y pegar en GitHub:

````markdown
# 🏋️ E-Commerce de Productos Deportivos

Proyecto académico desarrollado por estudiantes del **Instituto Profesional DuocUC** para la asignatura **DESARROLLO FULLSTACK II_004D**.

El proyecto corresponde a la **Evaluación 1 (30%)** y consiste en el desarrollo de una tienda online básica utilizando **HTML, CSS y JavaScript**, estableciendo las bases para la evolución del sistema en futuras evaluaciones.

---

## 📌 Descripción del proyecto

El proyecto consiste en el desarrollo de una plataforma web de **venta de productos deportivos**, compuesta por dos áreas principales:

- **Tienda:** interfaz pública destinada a los clientes.
- **Sistema administrativo:** interfaz destinada a la gestión de productos y usuarios.

Durante esta primera etapa, el proyecto se enfoca principalmente en el desarrollo del **frontend**, trabajando con HTML, CSS y JavaScript.

Actualmente **no existe una base de datos ni un backend implementado**. Para el prototipado y manejo inicial de los datos se utilizan estructuras de JavaScript y archivos JSON. Esta solución es temporal y permitirá establecer las reglas de negocio que posteriormente serán utilizadas para la implementación de una base de datos real.

---

## 🎓 Contexto académico

| Información | Detalle |
|---|---|
| Institución | Instituto Profesional DuocUC |
| Asignatura | DESARROLLO FULLSTACK II_004D |
| Evaluación | Evaluación 1 |
| Ponderación | 30% |
| Tipo de proyecto | Académico |
| Área | Desarrollo Web / Full Stack |
| Estado | En desarrollo |

---

## 🎯 Objetivos de la Evaluación 1

La evaluación tiene como objetivo desarrollar una tienda online básica aplicando los fundamentos del desarrollo web.

Los principales objetivos son:

- Utilizar HTML para construir una estructura web clara, semántica y organizada.
- Utilizar CSS para crear un diseño personalizado, consistente y responsivo.
- Utilizar JavaScript para agregar lógica e interactividad.
- Implementar validaciones de formularios mediante JavaScript.
- Crear mensajes de error y sugerencias dinámicas para mejorar la experiencia del usuario.
- Implementar navegación entre las diferentes páginas del sistema.
- Utilizar Git y GitHub para gestionar el código fuente.
- Trabajar colaborativamente mediante un repositorio remoto.
- Establecer las bases del sistema que será desarrollado y ampliado en futuras evaluaciones.

---

# 🛒 Tienda

La tienda corresponde a la parte pública del sistema y representa la interfaz visible para los usuarios.

## Vistas de la tienda

### Home

La página principal debe permitir la navegación hacia las distintas secciones de la tienda e incluir:

- Logo de la empresa.
- Menú de navegación.
- Carrito de compras.
- Información principal de la tienda.
- Imágenes.
- Listado de productos destacados.
- Nombre y precio de los productos.
- Footer.

### Registro de usuario

Permite a los usuarios registrarse dentro de la plataforma mediante un formulario.

La información ingresada debe ser validada mediante JavaScript.

### Inicio de sesión

Permite el ingreso de usuarios registrados.

Debe incluir:

- Logo de la empresa.
- Nombre de la empresa.
- Formulario de inicio de sesión.
- Validaciones mediante JavaScript.

### Nosotros

Página destinada a explicar:

- Información sobre la empresa.
- Propósito de la tienda.
- Información relacionada con los desarrolladores del proyecto.

### Blogs

Sección destinada a mostrar noticias, artículos o datos relacionados con la tienda y el mundo deportivo.

Cada publicación debe incluir:

- Imagen.
- Título.
- Descripción corta.

Además, se deben desarrollar al menos **dos páginas de detalle de blogs**, incluyendo:

- Imagen.
- Título.
- Descripción extensa.

### Contacto

Página que permitirá a los usuarios enviar mensajes mediante un formulario.

El formulario deberá incorporar las validaciones correspondientes mediante JavaScript.

### Productos

Página destinada a mostrar el catálogo completo de productos disponibles.

Cada producto debe presentar:

- Imagen.
- Nombre.
- Precio.
- Botón para añadir al carrito.

Además, cada producto debe permitir acceder a una vista de **detalle del producto**.

### Detalle del producto

Vista donde se muestra información ampliada de un producto y donde el usuario podrá añadirlo al carrito.

### Carrito de compras

El carrito permitirá:

- Añadir productos.
- Visualizar productos seleccionados.
- Aplicar las reglas de negocio definidas para el carrito.
- Mantener la información almacenada mediante `localStorage`.

---

# ⚙️ Sistema administrativo

El sistema administrativo permitirá gestionar la información utilizada por la tienda.

Esta sección está destinada principalmente a usuarios con permisos administrativos y deberá considerar un sistema de roles.

## Vistas administrativas

### Home administrativo

La interfaz administrativa contará con:

- Menú lateral o vertical.
- Área principal de contenido.
- Navegación hacia las diferentes funciones administrativas.

El diseño visual del administrador es libre, siempre que exista un menú claramente visible.

### Mantenedor de productos

Debe permitir administrar los productos del sistema.

Entre sus funcionalidades se contempla:

- Listar productos.
- Crear productos.
- Editar productos.
- Visualizar información de los productos.

### Mantenedor de usuarios

Debe permitir:

- Listar usuarios.
- Crear nuevos usuarios.
- Editar información de usuarios.

---

# ✅ Validaciones con JavaScript

Una de las principales exigencias de esta evaluación es implementar validaciones utilizando JavaScript.

Las validaciones deberán entregar mensajes claros al usuario y, cuando corresponda, realizarse en tiempo real.

## Registro e inicio de sesión

### Correo

- Campo requerido según corresponda.
- Máximo de 100 caracteres.
- Solo se aceptan direcciones pertenecientes a:
  - `@duoc.cl`
  - `@profesor.duoc.cl`
  - `@gmail.com`

### Contraseña

- Campo requerido.
- Mínimo de 4 caracteres.
- Máximo de 10 caracteres.

---

## Formulario de contacto

### Nombre

- Campo requerido.
- Máximo de 100 caracteres.

### Correo

- Máximo de 100 caracteres.
- Solo se aceptan:
  - `@duoc.cl`
  - `@profesor.duoc.cl`
  - `@gmail.com`

### Comentario

- Campo requerido.
- Máximo de 500 caracteres.

---

# 🛍️ Productos y carrito

Los productos deben ser manejados mediante JavaScript.

La evaluación considera:

- Crear un arreglo de productos.
- Mostrar los productos dinámicamente.
- Filtrar o manipular los productos según corresponda.
- Permitir agregar productos al carrito.
- Definir las reglas de funcionamiento del carrito.
- Guardar el carrito utilizando `localStorage`.

En esta etapa, la información puede apoyarse en datos JSON como parte del prototipo.

Ejemplo de producto:

```json
{
  "id": 1,
  "nombre": "Nombre del producto",
  "precio": 22990,
  "categoria": "fitness_musculacion"
}
````

---

# 📦 Validaciones de productos

Los formularios de productos deberán considerar las siguientes reglas.

## Código del producto

* Requerido.
* Debe ser texto.
* Mínimo de 3 caracteres.
* Sin límite máximo establecido.

## Nombre

* Requerido.
* Máximo de 100 caracteres.

## Descripción

* Opcional.
* Máximo de 500 caracteres.

## Precio

* Requerido.
* Valor mínimo de `0`.
* Puede contener números decimales.
* Un valor de `0` representa un producto gratuito.

## Stock

* Requerido.
* Valor mínimo de `0`.
* Debe contener solamente números enteros.

## Stock crítico

* Opcional.
* Valor mínimo de `0`.
* Debe contener solamente números enteros.
* Se debe mostrar una alerta cuando el stock sea igual o inferior al stock crítico.

## Categoría

* Campo requerido.
* Debe utilizar un elemento `select`.

## Imagen

* Campo opcional.

---

# 👤 Validaciones de usuarios

## RUN

* Requerido.
* Debe validarse que el RUN sea correcto.
* No debe contener puntos ni guion.
* Ejemplo:
  `19011022K`
* Mínimo de 7 caracteres.
* Máximo de 9 caracteres.

## Nombre

* Requerido.
* Máximo de 50 caracteres.

## Apellidos

* Requerido.
* Máximo de 100 caracteres.

## Correo

* Requerido.
* Máximo de 100 caracteres.
* Solo se aceptan:

  * `@duoc.cl`
  * `@profesor.duoc.cl`
  * `@gmail.com`

## Fecha de nacimiento

* Campo opcional.

## Tipo de usuario

Debe existir un selector que permita definir el perfil del usuario:

* Administrador.
* Cliente.
* Vendedor.

## Región y comuna

Las regiones deberán obtenerse desde un arreglo de JavaScript.

Al seleccionar una región, las comunas disponibles deberán actualizarse dinámicamente.

## Dirección

* Requerida.
* Máximo de 300 caracteres.

---

# 🔐 Roles del sistema

El sistema considera tres perfiles principales.

### Administrador

Tiene acceso total al sistema.

### Vendedor

Puede:

* Visualizar la lista de productos.
* Visualizar el detalle de los productos.
* Visualizar la lista de órdenes.
* Visualizar el detalle de las órdenes.

Las demás opciones administrativas no deben estar disponibles para este perfil.

### Cliente

Solo puede acceder a la parte pública de la tienda.

---

# 🏗️ Arquitectura del proyecto

El proyecto utiliza una estructura frontend separada por responsabilidades.

```text
HTML
 │
 ├── Estructura de las páginas
 │
 ▼
CSS
 │
 ├── Diseño y estilos
 │
 ▼
JavaScript
 │
 ├── Interactividad
 ├── Validaciones
 ├── Catálogo
 └── Carrito
 │
 ▼
JSON / Datos locales
 │
 └── Información utilizada durante el prototipado
```

La arquitectura actual corresponde principalmente a un **frontend estático**, ya que aún no existe una capa backend ni una base de datos real.

---

# 📁 Estructura actual del proyecto

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
```

### `index.html`

Contiene la página principal de la tienda.

### `paginas/`

Contiene las diferentes páginas HTML del proyecto.

### `estilos/`

Contiene las hojas de estilos CSS.

### `logica/`

Contiene los archivos JavaScript responsables de la lógica del sistema.

### `db/`

Contiene los archivos utilizados como fuente de datos durante el prototipado.

---

# 🔄 Flujo del catálogo

El funcionamiento esperado del catálogo es:

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
Filtrado / procesamiento
       │
       ▼
Creación de tarjetas
       │
       ▼
Visualización en el catálogo
```

---

# 💾 Persistencia temporal

Actualmente no se utiliza una base de datos.

Los datos de productos pueden ser representados mediante archivos JSON durante el proceso de prototipado.

Para el carrito de compras se utilizará `localStorage`, permitiendo conservar temporalmente la información del carrito en el navegador.

En futuras etapas, estos mecanismos serán reemplazados o complementados por un **backend y una base de datos real**.

---

# 🧩 Estado actual del proyecto

El proyecto se encuentra en desarrollo y algunas funcionalidades todavía deben ser completadas para cumplir completamente con los requerimientos de la Evaluación 1.

### Implementado / iniciado

* [x] Estructura inicial del proyecto.
* [x] Página principal.
* [x] Formularios de inicio de sesión y registro.
* [x] Hojas de estilos externas.
* [x] Estructura inicial del catálogo.
* [x] Archivo JSON para prototipado de productos.
* [x] Lógica JavaScript inicial para el catálogo.

### Pendiente

* [ ] Completar la navegación entre todas las páginas.
* [ ] Crear la página Nosotros.
* [ ] Crear la sección de Blogs.
* [ ] Crear los detalles de Blogs.
* [ ] Crear la página de Contacto.
* [ ] Completar la vista de Productos.
* [ ] Crear el detalle de producto.
* [ ] Implementar completamente el carrito.
* [ ] Implementar `localStorage` para el carrito.
* [ ] Completar las validaciones de formularios.
* [ ] Implementar el sistema administrativo.
* [ ] Crear el mantenedor de productos.
* [ ] Crear el mantenedor de usuarios.
* [ ] Implementar la lógica de roles.
* [ ] Implementar la selección dinámica de regiones y comunas.
* [ ] Incorporar las alertas de stock crítico.
* [ ] Mejorar el diseño responsivo.
* [ ] Completar la documentación técnica.
* [ ] Preparar la integración futura con backend y base de datos.

---

# 🚀 Ejecución del proyecto

Actualmente el proyecto está compuesto por archivos HTML, CSS, JavaScript y JSON.

Para visualizarlo de manera local se puede abrir:

```text
index.html
```

Durante el desarrollo se recomienda utilizar un servidor local, especialmente al trabajar con la carga de archivos JSON mediante JavaScript.

---

# 🔧 Próximas etapas

Este proyecto corresponde a la primera etapa de un sistema que será ampliado durante el semestre.

La evolución esperada contempla:

```text
Frontend actual
      │
      ▼
JavaScript y validaciones
      │
      ▼
Backend
      │
      ▼
API
      │
      ▼
Base de datos
      │
      ▼
Sistema Full Stack completo
```

Entre las futuras implementaciones se considera:

* Backend.
* Base de datos.
* API.
* Autenticación.
* Gestión de usuarios.
* Gestión de productos.
* Gestión de órdenes.
* Persistencia de información.
* Control de permisos y roles.

---

# 📚 Entregables de la Evaluación 1

La entrega contempla:

1. **Enlace público al repositorio de GitHub del proyecto frontend.**
2. **Proyecto frontend comprimido.**
3. **Documento ERS, versión 1.**

Además, el proyecto deberá ser presentado ante el docente mediante:

* 15 minutos de presentación por equipo.
* 5 minutos de preguntas.
* Demostración del desarrollo funcional.
* Preguntas abiertas sobre las decisiones técnicas y los cambios realizados en GitHub.

---

# 🌿 Control de versiones y trabajo colaborativo

El proyecto utiliza **Git y GitHub** para el control de versiones y la colaboración entre los integrantes del equipo.

Se busca mantener:

* Commits claros y descriptivos.
* Distribución equitativa de tareas.
* Registro de cambios.
* Trabajo colaborativo mediante el repositorio remoto.
* Organización del código durante el desarrollo.

---

# 👥 Equipo de desarrollo

**Proyecto desarrollado por estudiantes del Instituto Profesional DuocUC.**

**Asignatura:** DESARROLLO FULLSTACK II_004D

> Los integrantes y sus respectivos roles pueden incorporarse en esta sección.

```

Esta versión queda mucho más alineada con la pauta porque el README **documenta el proyecto que se está construyendo**, pero no confunde los requisitos de la evaluación con funcionalidades que todavía no están implementadas.
```
