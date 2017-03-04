(function() {
    'use strict';

    angular
        .module('informacionUsuario')
        .component('informacionUsuario', {
            templateUrl: 'scripts/componentes/informacionUsuario/informacionUsuario.html',
            controller: 'InformacionUsuarioController',
            controllerAs: 'ctrl'
        });
})();