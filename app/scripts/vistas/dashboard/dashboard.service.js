(function() {
	'use strict';
	
	/**
    * @ngdoc service
    * @name dashboard.service:DashboardServ
    * @requires 
    * @description
    *
    *   Proporciona los servicios para el componente de mensaes de la aplicación.
    **/
	angular
		.module('dashboard')
		.service('DashboardServ', DashboardServ);

	DashboardServ.$inject = ['$q', 'DashboardDatos', 'HttpServ'];

	/* @ngInject */
	function DashboardServ($q, DashboardDatos, HttpServ)
	{
		var service = this;

		service.obtenerDatos = obtenerDatos;

		function obtenerDatos(dia)
		{
			var defered = $q.defer();
            var promesa = defered.promise;

			function exito(datos)
			{
				DashboardDatos.setDatos(datos);
				defered.resolve();
			}

			var recurso = "datos" + dia + ".json";

			HttpServ.get(recurso, exito);

	        return promesa;
		}
	}

})();