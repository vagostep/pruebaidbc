(function() {
	'use strict';
	
	/**
    * @ngdoc service
    * @name graficos.service:GraficosServ
    * @requires 
    * @description
    *
    *   Proporciona los servicios para el componente de gráficos de la aplicación.
    **/
	angular
		.module('graficos')
		.service('GraficosServ', GraficosServ);

	GraficosServ.$inject = ['$q', 'GraficosDatos', 'HttpServ'];

	/* @ngInject */
	function GraficosServ($q, GraficosDatos, HttpServ)
	{
		var service = this;

		service.obtenerDatosGraficos = obtenerDatosGraficos;

		function obtenerDatosGraficos()
		{ 
			var defered = $q.defer();
            var promesa = defered.promise;

			function exito(datos)
			{
				GraficosDatos.setGraficos(datos);
				defered.resolve();
			}

			var recurso = "graficos.json";

			HttpServ.get(recurso, exito);

			return promesa;
		}
	}

})();