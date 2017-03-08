(function() {
	'use strict';
	
	/**
    * @ngdoc service
    * @name navbar.service:NavBarServ
    * @requires 
    * @description
    *
    *   Proporciona los servicios para la Barra de Navegación de la aplicación.
    **/
	angular
		.module('navbar')
		.service('NavBarServ', NavBarServ);

	NavBarServ.$inject = ['$q', 'NavBarDatos', 'HttpServ'];

	/* @ngInject */
	function NavBarServ($q, NavBarDatos, HttpServ)
	{
		var service = this;

		service.obtenerMenus = obtenerMenus;

		function obtenerMenus()
		{ 
			var defered = $q.defer();
            var promesa = defered.promise;

			function exito(datos)
			{
				NavBarDatos.setMenus(datos);
				defered.resolve();
			}

			var recurso = "menus.json";

			HttpServ.get(recurso, exito);

			return promesa;
		}
	}

})();