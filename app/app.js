'use strict';

angular.module('chatFrontendApp',[
	'ngRoute',
	'chatFrontendApp.chat',
	'chatFrontendApp.login',
	'ngResource',
	'yaru22.angular-timeago'
]).config(function($routeProvider, $locationProvider, $httpProvider) {
	
	// The default route if neither of the controllers is supporting the request path
	$routeProvider.otherwise({ redirectTo: '/'});

	// Settings for http communications
	$httpProvider.defaults.useXDomain = true;
	//delete $httpProvider.defaults.headers.common['X-Requested-With'];
}).run(['$rootScope', function($rootScope){
	$rootScope.alerts= [];
}]);
