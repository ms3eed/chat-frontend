'use strict';

angular.module('chatFrontendApp.chat', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/chat', {
		controller: 'ChatController',
		templateUrl: 'components/views/chat-view.html'
	});
}]).controller('ChatController', ['$scope', '$rootScope', '$location', 'ChatMessage', function($scope, $rootScope, $location, ChatMessage) {

	if(!$rootScope.userName){
		$rootScope.alerts.push( { type: 'danger', msg: 'Please choose a name to be assigned while chatting' });
		$location.path( "/" );
	}
	$scope.$on('chat-message-posted', function() {
		console.log('onMessagePosted');
	});
	$scope.messages = [];
	$scope.messages = ChatMessage.query(function (){
		console.log("DONE");
	});

	$scope.addMessage = function(){
		var msg = {message : $scope.chatMessage, userName: $rootScope.userName};
		ChatMessage.save(msg, function(data){
			console.log(data);
			$rootScope.$broadcast('chat-message-posted', msg);
		});
	}

}]);