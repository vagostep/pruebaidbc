(function() {
    'use strict';

    /**
    * @ngdoc controller
    * @name graficos.controller:GraficosController
    * @description
    * 
    * Controlador el componente de las gráficas de la aplicación.
    **/
    angular
        .module('graficos')
        .controller('GraficosController', GraficosController);

    GraficosController.$inject = ['GraficosServ', 'GraficosDatos'];

    /* @ngInject */
    function GraficosController(GraficosServ, GraficosDatos) 
    {
        var vm = this;

        //////////////// ASIGNACIÓN DE PROPIEDADES A LA VISTA /////////////////

        /**
        * @ngdoc property
        * @name graficos.controller:GraficosController#colores 
        * @propertyOf graficos.controller:GraficosController
        * @description
        *
        * colores del gráfico.
        **/        
        vm.colores = [];

        /**
        * @ngdoc property
        * @name graficos.controller:GraficosController#etiquetas 
        * @propertyOf graficos.controller:GraficosController
        * @description
        *
        * Etiquetas del gráfico.
        **/
        vm.etiquetas = [];
        
        /**
        * @ngdoc property
        * @name graficos.controller:GraficosController#datos 
        * @propertyOf graficos.controller:GraficosController
        * @description
        *
        * Datos para rellenar el gráfico.
        **/
        vm.datos;

        /**
        * @ngdoc property
        * @name graficos.controller:GraficosController#balance 
        * @propertyOf graficos.controller:GraficosController
        * @description
        *
        * Balance del gráfico.
        **/
        vm.balance;

        /**
        * @ngdoc property
        * @name graficos.controller:GraficosController#balanceTotal 
        * @propertyOf graficos.controller:GraficosController
        * @description
        *
        * Balance total del gráfico.
        **/
        vm.balanceTotal;

        /**
        * @ngdoc property
        * @name graficos.controller:GraficosController#graficos 
        * @propertyOf graficos.controller:GraficosController
        * @description
        *
        * Configuración de la leyenda.
        **/
        vm.graficos = [];

        //////////////// FIN /////////////////

        //////////////// LLAMADA A FUNCIONES /////////////////        

        obtenerGraficos()

        //////////////// FUNCIONES PRIVADAS /////////////////

        function obtenerGraficos()
        {
            var promesa = GraficosServ.obtenerDatosGraficos();

            if(promesa !== undefined)
            {
                promesa.then(function() {
                    vm.colores = GraficosDatos.getColores();
                    vm.etiquetas = GraficosDatos.getEtiquetas();
                    vm.datos = GraficosDatos.getDatos();
                    vm.balance = GraficosDatos.getBalance();
                    vm.balanceTotal = GraficosDatos.getBalanceTotal();
                    vm.graficos = GraficosDatos.getGraficos();
                });
            }
        }

        //////////////// FIN /////////////////

    }
})();