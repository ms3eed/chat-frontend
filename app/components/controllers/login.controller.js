'use strict';

angular.module('chatFrontendApp.login', ['ngRoute'])
// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/', {
		controller: 'LoginController',
		templateUrl: 'components/views/login-view.html'
	});
}]).controller('LoginController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
	$rootScope.alerts = [];
	$scope.submit = function (){
		if($scope.userName){
			$rootScope.userName = $scope.userName;
			$location.path( "/chat" );
		}else {
			$rootScope.alerts.push( { type: 'danger', msg: 'Please choose a name to be assigned while chatting' });
		}
	}
}]);
