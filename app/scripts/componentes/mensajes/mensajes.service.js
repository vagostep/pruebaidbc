(function() {
	'use strict';
	
	/**
    * @ngdoc service
    * @name mensajes.service:MensajesServ
    * @requires 
    * @description
    *
    *   Proporciona los servicios para el componente de mensaes de la aplicación.
    **/
	angular
		.module('mensajes')
		.service('MensajesServ', MensajesServ);

	MensajesServ.$inject = ['$q', 'MensajesDatos', 'HttpServ', 'TwitterDatos'];

	/* @ngInject */
	function MensajesServ($q, MensajesDatos, HttpServ, TwitterDatos)
	{
		var service = this;

		service.iniciarTwitter = iniciarTwitter;
		service.solicitarUltimosTweets = solicitarUltimosTweets;

		function iniciarTwitter()
		{ 
			TwitterDatos.initialize();
		}

		function solicitarUltimosTweets(cantidad)
		{
			var defered = $q.defer();
            var promesa = defered.promise;

			TwitterDatos.connectTwitter().then(function() {

	            if (TwitterDatos.isReady()) {

	                TwitterDatos.getLatestTweets(cantidad).then(function(data) {
	                    MensajesDatos.setTweets(data);
	                    defered.resolve();
	                }, function() {

	                });
	            } else {

	            }
	        });

	        return promesa;
		}
	}

})();