(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name graficos.service:GraficosDatos
     * @description
     *
     *  Factoría que proporciona los getter y setter que controlan los datos referentes a la barra de navegación. 
     */
    angular
        .module('graficos')
        .factory('GraficosDatos', GraficosDatos);

    GraficosDatos.$inject = [];

    /* @ngInject */
    function GraficosDatos() 
    {	    	
        var grafico = undefined;

        var factory = {
            setGraficos: setGraficos,
            getColores: getColores,
            getEtiquetas: getEtiquetas,
            getDatos: getDatos,
            getBalance: getBalance,
            getBalanceTotal: getBalanceTotal,
            getGraficos: getGraficos
        };
        
        return factory;

        ////////////////

        function setGraficos(data) 
        { 
        	grafico = data; 
        }

        function getColores()
        {
            return grafico.colores;
        }

        function getEtiquetas()
        {
            return grafico.etiquetas;
        }

        function getDatos()
        {
            return grafico.datos;
        }

        function getBalance()
        {
            return grafico.balance;
        }

        function getBalanceTotal()
        {
            return grafico.balanceTotal;
        }

        function getGraficos()
        {
            return grafico.graficos;
        }
    }
})();