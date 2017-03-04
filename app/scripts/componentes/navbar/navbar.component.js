(function() {
    'use strict';

    angular
        .module('navbar')
        .component('navBar', {
            templateUrl: 'scripts/componentes/navbar/navbar.html',
            controller: 'NavBarController',
            controllerAs: 'ctrl'
        });
})();