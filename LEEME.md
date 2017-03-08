# README #

Aplicaci�n de prueba para IDBC

Como probar en modo desarrollo

0) Se debe tener instalado NODE y BOWER
1) Ejecutar dentro del directorio del proyecto, a trav�s de la consola el comando npm install y luego, el comando bower install.
Esto le instalar� todas las herramientas para el gulp y los plugins que el proyecto utiliza.
2) En el directorio del proyecto, en la consola ejecutar gulp serve
3) En el navegador, ir a la ruta localhost:8000/ e iniciar� la aplicaci�n.

Que se hizo en la aplicaci�n

1) Dise�o de la plantilla apegada al enviado por correo
2) Utilizaci�n de node, bower y gulp.
3) Integraci�n de AngularJs, utilizando conceptualmente los servicios y m�dulos, desarrollando bajo un estilo personalizado, bas�ndome en la guia de estilo de angularJS. Todo est� dividido en m�dulos. Cada modulo almacena vistas, controladores, servicios, componentes y factorias.
Toda vista tiene asociada un controlador, los controladores solo manejan la data, para funcionalidades, se requiere un servicio. Los datos, son manejados a trav�s de factorias, con una programacion orientada a objetos.
4) La mayoria de la data de la aplicaci�n, se almacen� en archivos JSON y se accede a ellas a trav�s de peticiones GET, simulando un backend.
5) Integraci�n con la API de twitter via OAuth.io (Por motivos de tiempo, fue la soluci�n mas r�pida que encontr�). Obtiene los ultimos 3 tweets del timeline de un usuario de prueba creado.

Que falt� por hacer en la aplicaci�n

1) Si bien se utiliz� bootstrap, no se elaboraron los media query necesarios para la parte responsiva de la aplicaci�n.
2) Calendario para seleccionar una fecha en el dashboard.
3) A�adir mas funcionalidades de twitter