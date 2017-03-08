(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name navbar.service:NavBarDatos
     * @description
     *
     *  Factoría que proporciona los getter y setter que controlan los datos referentes a la barra de navegación. 
     */
    angular
        .module('navbar')
        .factory('NavBarDatos', NavBarDatos);

    NavBarDatos.$inject = [];

    /* @ngInject */
    function NavBarDatos() 
    {	    	
        var menus = undefined;

        var factory = {
            setMenus: setMenus,
            getMenus: getMenus
        };
        
        return factory;

        ////////////////

        function setMenus(data) 
        {
        	menus = data;
        }

        function getMenus()
        {
        	return menus;
        }
    }
})();