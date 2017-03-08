(function() {
    'use strict';

    /**
    *
    * @ngdoc interface
    * @name pruebaIdbc
    * @description
    *
    * Módulo principal de la aplicación pruebaIdbc.
    **/
    angular
        .module('pruebaIdbc', ['navbar', 'informacionUsuario', 'dashboard', 'serviciosHttp', 'ui.router', 'chart.js']);
})();