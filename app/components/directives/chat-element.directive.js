angular
    .module('chatFrontendApp')
    .directive('chatElement', function () {
        var directive = {
            bindToController: true,
            controller: function() {},
            controllerAs: 'ce',
            link: link,
            restrict: 'E',
            require: ['^chatBlock', 'chatElement'],
            templateUrl: 'components/directives/templates/chat-element.html',
            scope: {
                message: '='
            }
        };
        return directive;

        function link(scope, element, attrs, controllers) {
            var chatBlockCtrl = controllers[0],
                chatElementCtrl = controllers[1];
            chatElementCtrl.userName = chatBlockCtrl.userName;
        }
    });





