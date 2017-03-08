(function() {
	'use strict';
	
	/**
    * @ngdoc service
    * @name estadisticas.service:EstadisticasServ
    * @requires 
    * @description
    *
    *   Proporciona los servicios para el componente de Información de Usuario de la aplicación.
    **/
	angular
		.module('estadisticas')
		.service('EstadisticasServ', EstadisticasServ);

	EstadisticasServ.$inject = ['$q', 'EstadisticasDatos', 'HttpServ'];

	/* @ngInject */
	function EstadisticasServ($q, EstadisticasDatos, HttpServ)
	{
		var service = this;

		service.obtenerEstadisticas = obtenerEstadisticas;

		function obtenerEstadisticas()
		{ 
			var defered = $q.defer();
            var promesa = defered.promise;

			function exito(estadisticas)
			{
				EstadisticasDatos.setEstadisticas(estadisticas);
				defered.resolve();
			}

			var recurso = "estadisticas.json";

			HttpServ.get(recurso, exito);

			return promesa;
		}
	}

})();