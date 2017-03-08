(function() {
    'use strict';

    /**
    * @ngdoc controller
    * @name dashboard.controller:DashboardController
    * @description
    * 
    * Controlador del dashboard de la aplicación.
    **/
    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['DashboardServ', 'DashboardDatos'];

    /* @ngInject */
    function DashboardController(DashboardServ, DashboardDatos) 
    {
        var vm = this;

        vm.resumen;

        vm.dia;

        vm.graficos = [];

        vm.obtenerDatosPorDia = obtenerDatosPorDia;

        obtenerDatosIniciales()

        function obtenerDatosIniciales()
        {
            var promesa = DashboardServ.obtenerDatos("Ayer");

            if(promesa !== undefined)
            {
                promesa.then(function() {
                    vm.resumen = DashboardDatos.getResumen();
                    vm.graficos = DashboardDatos.getGraficos();
                });
            }
        }

        function obtenerDatosPorDia(dia)
        { 
            var promesa = DashboardServ.obtenerDatos(dia)
            {
                if(promesa !== undefined)
                {
                    promesa.then(function() {
                        vm.resumen = DashboardDatos.getResumen();
                        vm.graficos = DashboardDatos.getGraficos();
                    })
                }
            }
        }
    }
})();