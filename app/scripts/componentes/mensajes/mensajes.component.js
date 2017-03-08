(function() {
    'use strict';

    angular
        .module('mensajes')
        .component('mensaje', {
            templateUrl: 'scripts/componentes/mensajes/mensajes.html',
            controller: 'MensajesController',
            controllerAs: 'ctrl'
        });
})();