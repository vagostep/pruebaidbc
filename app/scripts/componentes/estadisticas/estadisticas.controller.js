(function() {
    'use strict';

    /**
    * @ngdoc controller
    * @name estadisticas.controller:EstadisticasController
    * @description
    * 
    * Controlador el componente de estadísticas de la aplicación.
    **/
    angular
        .module('estadisticas')
        .controller('EstadisticasController', EstadisticasController);

    EstadisticasController.$inject = ['EstadisticasServ', 'EstadisticasDatos'];

    /* @ngInject */
    function EstadisticasController(EstadisticasServ, EstadisticasDatos) 
    {
        var vm = this;

        //////////////// ASIGNACIÓN DE PROPIEDADES A LA VISTA /////////////////

        /**
        * @ngdoc property
        * @name estadisticas.controller:EstadisticasController#etiquetas 
        * @propertyOf estadisticas.controller:EstadisticasController
        * @description
        *
        * Etiquetas del gráfico.
        **/
        vm.etiquetas = [];

        /**
        * @ngdoc property
        * @name estadisticas.controller:EstadisticasController#series 
        * @propertyOf estadisticas.controller:EstadisticasController
        * @description
        *
        * Nombres de las series del gráfico.
        **/
        vm.series = [];

        /**
        * @ngdoc property
        * @name estadisticas.controller:EstadisticasController#datos 
        * @propertyOf estadisticas.controller:EstadisticasController
        * @description
        *
        * Datos con los que se llenará el gráfico.
        **/
        vm.datos = [];

        /**
        * @ngdoc property
        * @name estadisticas.controller:EstadisticasController#colores 
        * @propertyOf estadisticas.controller:EstadisticasController
        * @description
        *
        * Colores con los que se coloreará las líneas del gráfico.
        **/
        vm.colores = [];

        /**
        * @ngdoc property
        * @name estadisticas.controller:EstadisticasController#opciones 
        * @propertyOf estadisticas.controller:EstadisticasController
        * @description
        *
        * Opciones de configuración del gráfico.
        **/
        vm.opciones = {};

        /**
        * @ngdoc property
        * @name estadisticas.controller:EstadisticasController#visitas 
        * @propertyOf estadisticas.controller:EstadisticasController
        * @description
        *
        * Número de visitas a la aplicación.
        **/
        vm.visitas;        

        //////////////// FIN /////////////////

        //////////////// LLAMADA A FUNCIONES /////////////////        

        obtenerEstadisticas();

        //////////////// FUNCIONES PRIVADAS /////////////////

        function obtenerEstadisticas()
        {
            var promesa = EstadisticasServ.obtenerEstadisticas();

            if(promesa !== undefined)
            {
                promesa.then(function() {
                    vm.etiquetas = EstadisticasDatos.getEtiquetas();
                    vm.series = EstadisticasDatos.getSeries();
                    vm.datos = EstadisticasDatos.getDatos();
                    vm.colores = EstadisticasDatos.getColores();
                    vm.opciones = EstadisticasDatos.getOpciones();
                    vm.visitas = EstadisticasDatos.getVisitas();
                });
            }
        }

        //////////////// FIN /////////////////
    }
})();