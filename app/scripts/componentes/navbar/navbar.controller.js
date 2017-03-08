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

    NavBarController.$inject = ['NavBarServ', 'NavBarDatos'];

    /* @ngInject */
    function NavBarController(NavBarServ, NavBarDatos) 
    {
        var vm = this;

        /**
        * @ngdoc property
        * @name graficos.controller:GraficosController#graficos 
        * @propertyOf graficos.controller:GraficosController
        * @description
        *
        * Menus de la barra de navegación.
        **/
        vm.menus = undefined;

        //////////////// FIN /////////////////

        //////////////// LLAMADA A FUNCIONES /////////////////        

        obtenerMenus();

        //////////////// FUNCIONES PRIVADAS /////////////////

        function obtenerMenus()
        {
            var promesa = NavBarServ.obtenerMenus();

            if(promesa !== undefined)
            {
                promesa.then(function() {
                    vm.menus = NavBarDatos.getMenus();
                });
            }
        }        

        //////////////// FIN /////////////////
    }
})();