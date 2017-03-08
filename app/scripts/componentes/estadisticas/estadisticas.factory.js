(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name estadisticas.service:EstadisticasDatos
     * @description
     *
     *  Factoría que proporciona los getter y setter que controlan los datos referentes a las estadísticas de la aplicación. 
     */
    angular
        .module('estadisticas')
        .factory('EstadisticasDatos', EstadisticasDatos);

    EstadisticasDatos.$inject = [];

    /* @ngInject */
    function EstadisticasDatos() 
    {	    	
        var estadisticas = undefined;

        var factory = {
            setEstadisticas: setEstadisticas,
            getSeries: getSeries,
            getEtiquetas: getEtiquetas,
            getDatos: getDatos,
            getColores: getColores,
            getOpciones: getOpciones,
            getVisitas: getVisitas
        };
        
        return factory;

        ////////////////

        function setEstadisticas(data) 
        {
        	estadisticas = data;
        }

        function getSeries()
        {
            return estadisticas.series;
        }

        function getEtiquetas()
        {
            return estadisticas.etiquetas;
        }

        function getDatos()
        {
            return estadisticas.datos;
        }

        function getColores()
        {
            return estadisticas.colores;
        }

        function getOpciones()
        {
            return estadisticas.opciones;
        }

        function getVisitas()
        {
            return estadisticas.visitas;
        }
    }
})();