(function() {
	'use strict';
	
	/**
    * @ngdoc service
    * @name informacionUsuario.service:InformacionUsuarioServ
    * @requires 
    * @description
    *
    *   Proporciona los servicios para el componente de Información de Usuario de la aplicación.
    **/
	angular
		.module('informacionUsuario')
		.service('InformacionUsuarioServ', InformacionUsuarioServ);

	InformacionUsuarioServ.$inject = ['$q', 'InformacionUsuarioDatos', 'HttpServ'];

	/* @ngInject */
	function InformacionUsuarioServ($q, InformacionUsuarioDatos, HttpServ)
	{
		var service = this;

		service.obtenerDatosUsuario = obtenerDatosUsuario;

		function obtenerDatosUsuario()
		{ 
			var defered = $q.defer();
            var promesa = defered.promise;

			function exito(datos)
			{
				InformacionUsuarioDatos.setDatosUsuario(datos);
				defered.resolve();
			}

			var recurso = "datosUsuario.json";

			HttpServ.get(recurso, exito);

			return promesa;
		}
	}

})();