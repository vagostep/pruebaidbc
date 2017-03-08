(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name dashboard.service:DashboardDatos
     * @description
     *
     *  Factoría que proporciona los getter y setter que controlan los datos referentes a la Información del Usuario. 
     */
    angular
        .module('dashboard')
        .factory('DashboardDatos', DashboardDatos);

    DashboardDatos.$inject = [];

    /* @ngInject */
    function DashboardDatos() 
    {	    	
        var datos = undefined;

        var factory = {
            setDatos: setDatos,
            getResumen: getResumen,
            getGraficos: getGraficos
        };
        
        return factory;

        ////////////////

        function setDatos(data)
        {
            datos = data;
        }

        function getResumen()
        {
            return datos.resumen;
        }

        function getGraficos()
        {
            return datos.graficos;
        }
    }
})();