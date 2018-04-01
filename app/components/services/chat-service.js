
'use strict';
angular
    .module('chatFrontendApp')
    .factory('ChatMessage', ['$resource', function ($resource) {
        var resourceUrl =  'http://localhost:8080/api/chat-messages/:id';

        var convertLocalDateFromServer = function(date) {
            if (date) {
                var dateString = date.split('-');
                return new Date(dateString[0], dateString[1] - 1, dateString[2]);
            }
            return null;
        };
        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });

    }]);

