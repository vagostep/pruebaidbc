(function(){
	'use strict';

	/**
	* @ngdoc service
	* @name serviciosHttp.service:HttpServ
	* @description
	*
	* Controla las peticiones HTTP de la aplicación.
	*
	**/
	angular
		.module('serviciosHttp')
		.service('HttpServ', HttpServ);

	HttpServ.$inject = ['$http'];

	/* @ngInject */
	function HttpServ($http)
	{
		var service = this;

		/* Asignación de métodos a variables del servicio */
		service.get = get;

		//////////////// MÉTODOS ////////////////

		/**
        * 
        * @ngdoc method
        * @name serviciosHttp.service:HttpServ#get
        * @methodOf serviciosHttp.service:HttpServ
        * @param {Object} recurso Recurso al cual se hará la petición GET.
        * @param {Object} successCallback Método que ejecuta una acción si la petición es exitosa.
        *
        * @description
        * 
        * Petición GET a través de $http hacia un Web Service determinado.
        *
        **/
		function get(recurso, successCallback) 
		{
			var config = {
				method: 'GET',
				url: "/jsons/" + recurso,
				timeout: 120000		
			};

			$http(config).then(exito, error);			

			function exito(respuesta) 
			{				
				successCallback(respuesta.data);
			}

			function error(respuesta) 
			{
				alert("Ocurrió el siguente error: "+respuesta);
			}
		}
	}
})();