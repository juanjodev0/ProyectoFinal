# Proyecto Backend para Reservas de Canchas

¡Bienvenido al proyecto backend para la gestión de reservas de canchas! Este repositorio contiene el código base de un backend desarrollado en TypeScript, Node.js, Express y MySQL, diseñado para gestionar reservas de canchas deportivas.

## Descripción del Proyecto

Este proyecto backend proporciona una API RESTful para administrar reservas de canchas deportivas. Permite a los usuarios realizar reservas, ver disponibilidad de las canchas, cancelar reservas, etc. Utiliza una base de datos MySQL para almacenar la información relacionada con las reservas, usuarios y canchas.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

* Node.js y npm
* MySQL Server
* TypeScript

## Installation

 1. Clona este repositorio en tu máquina local:

```bash
  git clone https://github.com/juanjodev0/ProyectoFinal.git
```
2. Instala las dependencias del proyecto:

```bash

  cd reservas-canchas-backend
  npm install

```

3. Configura tu base de datos MySQL:

* Crea una nueva base de datos.
* Copia el archivo **.env.example** y renómbralo a **.env.**
* Edita el archivo .env con los detalles de tu base de datos (nombre de la base de datos, usuario, contraseña, etc.).

4. Ejecuta las migraciones para crear las tablas necesarias en tu base de datos:

```bash

  npm run migrate

```
5. Inicia el servidor:

```bash

  npm run dev

```

5. Inicia el typescript (en otra terminal):

```bash

  npm run typescript

```

¡Listo! Ahora tienes tu servidor backend en funcionamiento.

## Estructura del Proyecto

* /src: Contiene el código fuente de la aplicación.
  * **/controllers:** Controladores para manejar las peticiones HTTP.
  * **/middlewares:** Middlewares para la lógica intermedia de las peticiones.
  * **/models:** Definiciones de los modelos de datos y operaciones de base de datos.
  * **/routes:** Definiciones de las rutas de la API.
  * **/services:** Lógica de negocio adicional o servicios externos.
  * **/utils:** Utilidades y funciones auxiliares.


## Contribuyendo
Si deseas contribuir a este proyecto, ¡serás bienvenido! Siéntete libre de abrir un problema para reportar errores o sugerir mejoras. También puedes enviar solicitudes de extracción con tus contribuciones.

## Autores

- [@juanjodev0](https://github.com/juanjodev0)
- [@angiecortesdev](https://github.com/angiecortesdev)
- [@santiago-gustin](https://github.com/santiago-gustin)

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo [MIT](https://choosealicense.com/licenses/mit/) para más detalles.