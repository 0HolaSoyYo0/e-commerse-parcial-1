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
