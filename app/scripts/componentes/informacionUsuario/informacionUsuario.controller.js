(function() {
    'use strict';

    /**
    * @ngdoc controller
    * @name informacionUsuario.controller:NavBarController
    * @description
    * 
    * Controlador del componente de información del usuario de la aplicación.
    **/
    angular
        .module('informacionUsuario')
        .controller('InformacionUsuarioController', InformacionUsuarioController);

    InformacionUsuarioController.$inject = [];

    /* @ngInject */
    function InformacionUsuarioController() 
    {
        var vm = this;

        //////////////// ASIGNACIÓN DE PROPIEDADES A LA VISTA /////////////////

        /**
        * @ngdoc property
        * @name informacionUsuario.controller:NavBarController#nombreUsuario 
        * @propertyOf informacionUsuario.controller:NavBarController
        * @description
        *
        * Nombre del usuario activo.
        **/
        vm.nombreUsuario = "Andrés Díaz";

        /**
        * @ngdoc property
        * @name informacionUsuario.controller:NavBarController#tipoUsuario 
        * @propertyOf informacionUsuario.controller:NavBarController
        * @description
        *
        * Tipo de usuario activo.
        **/
        vm.tipoUsuario = "Administrador";

        /**
        * @ngdoc property
        * @name informacionUsuario.controller:NavBarController#sociales 
        * @propertyOf informacionUsuario.controller:NavBarController
        * @description
        *
        * Objeto que contiene toda la información social del usuario de la aplicación.
        **/
        vm.sociales = 
        [
            {nombre: "amigos", valor: "26k", nuevos: "+14", icono: "person"},
            {nombre: "compartidos", valor: "1095", nuevos: "+56", icono: "share"},
            {nombre: "vistas", valor: "428", nuevos:"+38", icono: "visibility"}
        ];
    }
})();