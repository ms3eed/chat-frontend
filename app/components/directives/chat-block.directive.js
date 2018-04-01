"use strict";
angular
    .module('chatFrontendApp')
    .directive('chatBlock', ['$timeout', function($timeout) {
        var directive = {
            bindToController: true,
            controller: function ($scope, ChatMessage){
                //$scope.messages = ChatMessage.query(function (){alert("DONE");});
            },
            controllerAs: 'cbl',
            link: link,
            restrict: 'E',
            templateUrl: 'components/directives/templates/chat-block.html',
            scope: {
                messages: '=',
                user: '@'
            }
        };
        return directive;

        function link(scope, element, attrs, ctrl) {

            if (angular.isUndefined(ctrl.messages)) {
                ctrl.messages = [];
            }

            var chatBlockContainer = angular.element(element.children()[0])[0];
            var scrollToBottom = function() {
                chatBlockContainer.scrollTop = chatBlockContainer.scrollHeight;
            };

            scope.$on('chat-message-posted', function(event, message) {
                ctrl.messages.push(message)
                $timeout(scrollToBottom, 0);

            });

            scope.$watchCollection(function() {
                return scope.cbl.messages;
            }, function(newVal, oldVal) {
                $timeout(scrollToBottom, 0);
            });

            if (angular.isDefined(ctrl.messages) && ctrl.messages.length > 0) {
                $timeout(scrollToBottom, 0);
            }

        }
    }]);