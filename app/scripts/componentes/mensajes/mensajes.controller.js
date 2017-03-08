(function() {
    'use strict';

    /**
    * @ngdoc controller
    * @name mensajes.controller:MensajesController
    * @description
    * 
    * Controlador el componente de los mensajes de la aplicación.
    **/
    angular
        .module('mensajes')
        .controller('MensajesController', MensajesController);

    MensajesController.$inject = ['MensajesServ', 'MensajesDatos'];

    /* @ngInject */
    function MensajesController(MensajesServ, MensajesDatos) 
    {
        var vm = this;

        vm.tweets = [];

        //iniciarTwitter()

        function iniciarTwitter()
        {
            MensajesServ.iniciarTwitter();

            var promesa = MensajesServ.solicitarUltimosTweets(3);

            if(promesa !== undefined)
            {
                promesa.then(function() {
                    vm.tweets = MensajesDatos.getTweets();
                });
            }
        }

        /*TwitterDatos.initialize();

        TwitterDatos.connectTwitter().then(function() {
            if (TwitterDatos.isReady()) {
                TwitterDatos.getLatestTweets(3).then(function(data) {
                    vm.tweets = data;
                }, function() {

                });
            } else {

            }
        });*/
    }
})();