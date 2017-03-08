(function() {
    'use strict';

    angular
        .module('graficos')
        .component('grafico', {
            templateUrl: 'scripts/componentes/graficos/graficos.html',
            controller: 'GraficosController',
            controllerAs: 'ctrl'
        });
})();