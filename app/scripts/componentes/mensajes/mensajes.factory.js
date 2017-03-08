(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name mensajes.service:MensajesDatos
     * @description
     *
     *  Factoría que proporciona los getter y setter que controlan los datos referentes al componente de mensajes. 
     */
    angular
        .module('mensajes')
        .factory('MensajesDatos', MensajesDatos);

    MensajesDatos.$inject = [];

    /* @ngInject */
    function MensajesDatos() 
    {	    	
        var tweets = undefined;

        var factory = {
            setTweets: setTweets,
            getTweets: getTweets
        };
        
        return factory;

        ////////////////

        function setTweets(data) 
        {
        	tweets = data;
        }

        function getTweets()
        {
        	return tweets;
        }
    }
})();