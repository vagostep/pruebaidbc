(function() {
	'use strict';

	angular
		.module('pruebaIdbc')
		.config(rutas)
		.config(graficos);

	rutas.$inject = ['$stateProvider', '$urlRouterProvider'];
	graficos.$inject = ['ChartJsProvider'];

	/* @ngInject */
	function rutas($stateProvider, $urlRouterProvider)
	{
		$urlRouterProvider.otherwise('app/dashboard');
		$stateProvider		

			.state('app', {
				abstract: true,
				url: '/app',
				controller: 'PruebaIdbcController',
				controllerAs: 'ctrl',
				templateUrl: 'scripts/vistas/pruebaIdbc/pruebaIdbc.html'
			})

			.state('app.dashboard', {
				url: '/dashboard',
				controller: 'DashboardController',
				controllerAs: 'ctrl',
				templateUrl: 'scripts/vistas/dashboard/dashboard.html'
			})
	}

	function graficos(ChartJsProvider)
	{
		ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
	}

})();
