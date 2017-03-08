# README #

Aplicación de prueba para IDBC

Como probar en modo desarrollo

0) Se debe tener instalado NODE y BOWER
1) Ejecutar dentro del directorio del proyecto, a través de la consola el comando npm install y luego, el comando bower install.
Esto le instalará todas las herramientas para el gulp y los plugins que el proyecto utiliza.
2) En el directorio del proyecto, en la consola ejecutar gulp serve
3) En el navegador, ir a la ruta localhost:8000/ e iniciará la aplicación.

Que se hizo en la aplicación

1) Diseño de la plantilla apegada al enviado por correo
2) Utilización de node, bower y gulp.
3) Integración de AngularJs, utilizando conceptualmente los servicios y módulos, desarrollando bajo un estilo personalizado, basándome en la guia de estilo de angularJS. Todo está dividido en módulos. Cada modulo almacena vistas, controladores, servicios, componentes y factorias.
Toda vista tiene asociada un controlador, los controladores solo manejan la data, para funcionalidades, se requiere un servicio. Los datos, son manejados a través de factorias, con una programacion orientada a objetos.
4) La mayoria de la data de la aplicación, se almacenó en archivos JSON y se accede a ellas a través de peticiones GET, simulando un backend.
5) Integración con la API de twitter via OAuth.io (Por motivos de tiempo, fue la solución mas rápida que encontré). Obtiene los ultimos 3 tweets del timeline de un usuario de prueba creado.

Que faltó por hacer en la aplicación

1) Si bien se utilizó bootstrap, no se elaboraron los media query necesarios para la parte responsiva de la aplicación.
2) Calendario para seleccionar una fecha en el dashboard.
3) Añadir mas funcionalidades de twitter