(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name informacionUsuario.service:InformacionUsuarioDatos
     * @description
     *
     *  Factoría que proporciona los getter y setter que controlan los datos referentes a la Información del Usuario. 
     */
    angular
        .module('informacionUsuario')
        .factory('InformacionUsuarioDatos', InformacionUsuarioDatos);

    InformacionUsuarioDatos.$inject = [];

    /* @ngInject */
    function InformacionUsuarioDatos() 
    {	    	
        var datosUsuario = undefined;

        var factory = {
            setDatosUsuario: setDatosUsuario,
            getDatosUsuario: getDatosUsuario,
            setNombreUsuario: setNombreUsuario,
            getNombreUsuario: getNombreUsuario,
            setApellidoUsuario: setApellidoUsuario,
            getApellidoUsuario: getApellidoUsuario,
            setTipoUsuario: setTipoUsuario,
            getTipoUsuario: getTipoUsuario,
            setSocial: setSocial,
            getSocial: getSocial
        };
        
        return factory;

        ////////////////

        function setDatosUsuario(data) 
        {
        	datosUsuario = data; 
        }

        function getDatosUsuario()
        {
        	return datosUsuario;
        }

        function setNombreUsuario(nombre)
        {
            datosUsuario.nombreUsuario = nombre;
        }

        function getNombreUsuario()
        {
            return datosUsuario.nombreUsuario;
        }

        function setApellidoUsuario(apellido)
        {
            datosUsuario.apellidoUsuario = apellido;
        }

        function getApellidoUsuario()
        {
            return datosUsuario.apellidoUsuario
        }

        function setTipoUsuario(tipo)
        {
            datosUsuario.tipoUsuario = tipo;
        }

        function getTipoUsuario()
        {
            return datosUsuario.tipoUsuario;
        }

        function setSocial(sociales)
        {
            datosUsuario.social = sociales;
        }

        function getSocial()
        {
            return datosUsuario.social;
        }
    }
})();