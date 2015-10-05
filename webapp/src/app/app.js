var angular = require('angular');
angular.module('muncher-rust', [
        require('angular-ui-router'),
        require('./directives'),
        'features'
    ])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.rule(function ($i, $location) {
            var path = $location.path();
            var normalized = path.toLowerCase();
            if (path != normalized) return normalized;
        });

        $locationProvider.html5Mode(true);
    });

angular.module('features', [
    require('./home'),
    require('./servers'),
    require('./users')
]);
