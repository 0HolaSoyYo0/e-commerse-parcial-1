E-Commerce de Productos Deportivos
Proyecto académico de una tienda online de productos deportivos desarrollado para la asignatura DESARROLLO FULLSTACK II_004D de DuocUC – Instituto Profesional.
Estado del proyecto: En desarrollo — Evaluación 1
Descripción
Este proyecto tiene como objetivo desarrollar una tienda online básica utilizando HTML, CSS y JavaScript, estableciendo las bases para las siguientes evaluaciones de la asignatura.
La solución contempla dos áreas principales: una tienda pública, orientada a los clientes, y un sistema administrativo, destinado a la gestión de productos y usuarios.
En esta primera etapa el foco está puesto en la construcción de la interfaz web, navegación entre vistas, diseño responsivo, validaciones mediante JavaScript, manipulación dinámica de productos y uso de localStorage para el carrito de compras.
Actualmente no existe un backend ni una base de datos real. Para prototipar la información de productos se utiliza un archivo JSON, complementado con estructuras de datos en JavaScript según los requerimientos de esta evaluación. Las reglas de negocio y decisiones implementadas durante esta etapa servirán como base para el desarrollo posterior de la solución Full Stack.
Contexto académico
Campo	Información
Institución	DuocUC – Instituto Profesional
Asignatura	DESARROLLO FULLSTACK II_004D
Evaluación	Evaluación 1 — 30%
Tipo de proyecto	Académico
Modalidad	Desarrollo colaborativo
Estado	En desarrollo

Objetivos de la Evaluación 1
La primera evaluación busca establecer las bases del proyecto mediante:
·	Desarrollo de una tienda online básica con HTML, CSS y JavaScript.
·	Construcción de una estructura HTML clara, semántica y navegable.
·	Implementación de estilos externos, consistentes y responsivos.
·	Desarrollo de validaciones y mensajes dinámicos mediante JavaScript.
·	Implementación de elementos interactivos, formularios y navegación entre páginas.
·	Uso de GitHub como repositorio remoto y herramienta de colaboración.
Alcance del sistema
Tienda pública
La tienda corresponde a la cara visible del sistema y contempla las siguientes vistas:
·	Home: presentación de la tienda, navegación, productos destacados y footer.
·	Registro de usuario: formulario para registrar nuevos usuarios.
·	Inicio de sesión: formulario de acceso de usuarios.
·	Nosotros: información de la empresa y de los desarrolladores.
·	Blogs: listado de noticias o contenidos relacionados con la tienda.
·	Detalle de blogs: páginas con el contenido completo de dos publicaciones.
·	Contacto: formulario para enviar mensajes a la tienda.
·	Productos: listado de productos disponibles, con imagen, nombre, precio y opción para añadir al carrito.
·	Detalle de producto: información detallada de un producto y opción para añadirlo al carrito.
·	Carrito de compras: gestión de productos seleccionados y persistencia mediante localStorage.
Sistema administrativo
El sistema administrativo está orientado a la gestión interna de la tienda y contempla:
·	Home administrativo: panel con menú de navegación y contenido principal.
·	Mantenedor de productos: listado y gestión de productos.
·	Mantenedor de usuarios: listado y gestión de usuarios.
·	Crear y editar productos: formulario para administrar la información de cada producto.
·	Crear y editar usuarios: formulario para administrar la información de los usuarios.
·	Roles del sistema: Administrador, Vendedor y Cliente.
Arquitectura y organización
El proyecto se organiza separando las responsabilidades de presentación, estilos, lógica y datos.
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

Capas principales
Presentación — HTML

Define la estructura de las páginas, formularios, menús, enlaces, botones y contenedores de contenido.
Estilos — CSS

Define la apariencia visual de las páginas y busca mantener una presentación consistente y adaptable a distintos tamaños de pantalla.
Lógica — JavaScript

Gestiona la interacción del usuario, las validaciones de formularios, la manipulación de productos, el filtrado del catálogo y el funcionamiento del carrito.
Datos — JSON / JavaScript

productos.json se utiliza como fuente de datos para prototipar el catálogo. Para los requerimientos de esta evaluación también se contempla el uso de arreglos de productos en JavaScript para su representación dinámica.
Tecnologías
·	HTML5
·	CSS3
·	JavaScript
·	JSON
·	LocalStorage
·	Git y GitHub
Validaciones de formularios
Las validaciones son parte fundamental de la Evaluación 1. JavaScript debe proporcionar comprobaciones y mensajes de error dinámicos para mejorar la experiencia del usuario.
Registro e inicio de sesión
Entre las reglas contempladas se encuentran:
·	Correo obligatorio en los formularios donde corresponda.
·	Longitud máxima de 100 caracteres para el correo.
·	Dominios permitidos: @duoc.cl, @profesor.duoc.cl y @gmail.com.
·	Contraseña obligatoria en el inicio de sesión.
·	Contraseña entre 4 y 10 caracteres.
Formulario de contacto
·	Nombre obligatorio.
·	Nombre con un máximo de 100 caracteres.
·	Correo con un máximo de 100 caracteres.
·	Validación de dominios permitidos.
·	Comentario obligatorio.
·	Comentario con un máximo de 500 caracteres.
Productos del sistema administrativo
Se consideran las siguientes validaciones:
Campo	Reglas principales
Código	Obligatorio, texto, mínimo 3 caracteres
Nombre	Obligatorio, máximo 100 caracteres
Descripción	Opcional, máximo 500 caracteres
Precio	Obligatorio, mínimo 0, permite decimales
Stock	Obligatorio, entero, mínimo 0
Stock crítico	Opcional, entero, mínimo 0
Categoría	Obligatoria, selección mediante select
Imagen	Opcional

Usuarios del sistema administrativo
Campo	Reglas principales
RUN	Obligatorio, sin puntos ni guion, entre 7 y 9 caracteres y con validación de formato
Nombre	Obligatorio, máximo 50 caracteres
Apellidos	Obligatorio, máximo 100 caracteres
Correo	Obligatorio, máximo 100 caracteres y con dominios permitidos
Fecha de nacimiento	Opcional
Tipo de usuario	Selección de perfil
Región	Selección desde un arreglo en JavaScript
Comuna	Debe actualizarse según la región seleccionada
Dirección	Obligatoria, máximo 300 caracteres

Carrito de compras
El carrito forma parte de la funcionalidad principal de la tienda.
Su implementación contempla:
·	Listar productos mediante JavaScript.
·	Utilizar un arreglo de productos.
·	Mostrar productos dinámicamente.
·	Añadir productos al carrito.
·	Definir reglas de negocio para su funcionamiento.
·	Guardar la información del carrito utilizando localStorage.
El flujo esperado es:
Productos
   ↓
Seleccionar producto
   ↓
Añadir al carrito
   ↓
Actualizar carrito
   ↓
Guardar en LocalStorage
   ↓
Recuperar carrito al volver a cargar la página

Roles del sistema
El proyecto contempla tres perfiles principales:
Administrador
Tiene acceso total al sistema administrativo y puede gestionar los recursos disponibles.
Vendedor
Puede:
·	Visualizar el listado de productos.
·	Visualizar el detalle de productos.
·	Visualizar el listado de órdenes.
·	Visualizar el detalle de órdenes.
Las demás opciones administrativas no deben estar disponibles para este perfil.
Cliente
Tiene acceso a la tienda pública.
Flujo general
                    ┌───────────────┐
                    │     INICIO    │
                    └───────┬───────┘
                            │
             ┌──────────────┴──────────────┐
             │                             │
             ▼                             ▼
     ┌───────────────┐             ┌────────────────┐
     │     TIENDA    │             │ ADMINISTRACIÓN │
     └───────┬───────┘             └───────┬────────┘
             │                             │
     ┌───────┼─────────┐           ┌───────┴────────┐
     │       │         │           │                │
     ▼       ▼         ▼           ▼                ▼
  Productos Login   Registro   Productos         Usuarios
     │
     ▼
 Detalle
     │
     ▼
 Carrito

Estado actual
El proyecto se encuentra en una etapa de desarrollo correspondiente a la Evaluación 1. La estructura inicial del frontend se encuentra separada por responsabilidades, pero todavía existen funcionalidades que deben implementarse o completarse para alcanzar todo el alcance solicitado.
Implementado o iniciado
·	Estructura inicial del proyecto.
·	Página principal.
·	Formularios de inicio de sesión y registro.
·	Página inicial del catálogo.
·	Separación inicial entre HTML, CSS y JavaScript.
·	Archivo JSON para prototipado de productos.
Pendiente o en desarrollo
·	Completar la navegación entre todas las vistas.
·	Implementar página Nosotros.
·	Implementar Blogs y sus dos vistas de detalle.
·	Implementar formulario de Contacto.
·	Completar listado y detalle de productos.
·	Implementar completamente el carrito y localStorage.
·	Completar validaciones JavaScript en tiempo real.
·	Implementar las vistas del sistema administrativo.
·	Implementar mantenedores de productos y usuarios.
·	Implementar selección dinámica de región y comuna.
·	Completar la lógica de roles y restricciones de acceso.
·	Revisar consistencia de categorías entre HTML, JavaScript y JSON.
·	Completar estilos responsivos de todas las vistas.
Datos y persistencia
En esta primera etapa no existe una base de datos real ni un backend.
El archivo:
/db/productos.json

se utiliza como apoyo para el prototipado de los datos del catálogo.
El carrito utiliza localStorage como mecanismo de almacenamiento del lado del navegador. Esto permite conservar información del carrito entre cargas de la página sin necesidad de una base de datos.
La implementación de un backend, una API y una base de datos se contempla para etapas posteriores del proyecto.
Ejecución del proyecto
Este proyecto está compuesto actualmente por archivos HTML, CSS, JavaScript y JSON, por lo que no requiere un proceso de instalación de dependencias de Node.js.
Para ejecutar el proyecto durante el desarrollo se recomienda utilizar un servidor local. Luego se debe acceder a index.html desde el navegador y recorrer las vistas disponibles.
Control de versiones y trabajo colaborativo
El proyecto utiliza Git y GitHub como herramientas de control de versiones y colaboración.
Se busca mantener un historial de cambios claro mediante commits descriptivos y distribuir las tareas entre los integrantes del equipo de manera equitativa.
El repositorio debe permitir identificar el avance realizado por cada integrante y facilitar la integración de los distintos componentes del proyecto.
Entregables de la Evaluación 1
De acuerdo con las instrucciones de la asignatura, la entrega considera:
·	Enlace público al repositorio de GitHub del frontend.
·	Proyecto frontend comprimido.
·	Documento ERS, correspondiente a la propuesta previa en su versión inicial.
·	Presentación del caso y del desarrollo funcional.
·	Participación de cada integrante en la ronda de preguntas técnicas.
Proyección del proyecto
La Evaluación 1 establece las bases para las siguientes etapas del desarrollo. La evolución prevista es pasar desde este prototipo frontend hacia una solución Full Stack completa, incorporando progresivamente:
·	Backend.
·	API para comunicación entre frontend y servidor.
·	Base de datos real.
·	Persistencia de usuarios, productos, órdenes y demás información.
·	Autenticación y control de acceso basado en roles.
·	Gestión completa de productos y usuarios.
·	Procesamiento de órdenes y compras.
Documentación relacionada
·	ERS: documento de especificación de requisitos del sistema, desarrollado progresivamente durante el semestre.
·	Repositorio GitHub: fuente principal del código y seguimiento del desarrollo.
Autores
Proyecto desarrollado por estudiantes de DuocUC – Instituto Profesional para la asignatura DESARROLLO FULLSTACK II_004D.
Los nombres de los integrantes del equipo pueden agregarse en esta sección.
Licencia
Este proyecto ha sido desarrollado con fines académicos y educativos en el contexto de la asignatura DESARROLLO FULLSTACK II_004D.
