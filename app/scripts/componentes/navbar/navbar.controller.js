(function() {
    'use strict';

    /**
    * @ngdoc controller
    * @name navbar.controller:NavBarController
    * @description
    * 
    * Controlador de la barra de navegación de la aplicación
    **/
    angular
        .module('navbar')
        .controller('NavBarController', NavBarController);

    NavBarController.$inject = [];

    /* @ngInject */
    function NavBarController() 
    {
        var vm = this;

        vm.menus = [{nombre: 'Dashboard'}];
    }
})();