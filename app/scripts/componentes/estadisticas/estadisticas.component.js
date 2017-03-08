(function() {
    'use strict';

    angular
        .module('estadisticas')
        .component('estadistica', {
            templateUrl: 'scripts/componentes/estadisticas/estadisticas.html',
            controller: 'EstadisticasController',
            controllerAs: 'ctrl'
        });
})();