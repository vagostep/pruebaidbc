(function() {
    'use strict';

    /**
    * @ngdoc controller
    * @name informacionUsuario.controller:NavBarController
    * @description
    * 
    * Controlador del componente de información del usuario de la aplicación.
    **/
    angular
        .module('informacionUsuario')
        .controller('InformacionUsuarioController', InformacionUsuarioController);

    InformacionUsuarioController.$inject = ['InformacionUsuarioServ', 'InformacionUsuarioDatos'];

    /* @ngInject */
    function InformacionUsuarioController(InformacionUsuarioServ, InformacionUsuarioDatos) 
    {
        var vm = this;

        //////////////// ASIGNACIÓN DE PROPIEDADES A LA VISTA /////////////////

        /**
        * @ngdoc property
        * @name informacionUsuario.controller:NavBarController#nombreUsuario 
        * @propertyOf informacionUsuario.controller:NavBarController
        * @description
        *
        * Nombre del usuario activo.
        **/
        vm.nombreUsuario;

        /**
        * @ngdoc property
        * @name informacionUsuario.controller:NavBarController#tipoUsuario 
        * @propertyOf informacionUsuario.controller:NavBarController
        * @description
        *
        * Tipo de usuario activo.
        **/
        vm.tipoUsuario;

        /**
        * @ngdoc property
        * @name informacionUsuario.controller:NavBarController#sociales 
        * @propertyOf informacionUsuario.controller:NavBarController
        * @description
        *
        * Objeto que contiene toda la información social del usuario de la aplicación.
        **/
        vm.sociales = [];

        //////////////// FIN /////////////////

        //////////////// LLAMADA A FUNCIONES /////////////////        

        obtenerDatosUsuario();

        //////////////// FIN /////////////////

        //////////////// FUNCIONES PRIVADAS /////////////////

        function obtenerDatosUsuario()
        {
            var promesa = InformacionUsuarioServ.obtenerDatosUsuario();

            if(promesa !== undefined)
            {
                promesa.then(function() {
                    vm.nombreUsuario = InformacionUsuarioDatos.getNombreUsuario() + " " + InformacionUsuarioDatos.getApellidoUsuario();
                    vm.tipoUsuario = InformacionUsuarioDatos.getTipoUsuario();
                    vm.sociales = InformacionUsuarioDatos.getSocial();
                });
            }
        }
    }
})();