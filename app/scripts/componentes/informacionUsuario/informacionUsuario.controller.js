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
    }
})();