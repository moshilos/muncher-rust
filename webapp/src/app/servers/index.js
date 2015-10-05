/**
 * Created by Moshi.los on 10/4/2015.
 */
var angular = require('angular');
var name = 'feature-servers';
var templatePath = require('./servers.html');

angular.module(name, [
        require('angular-ui-router')
    ])
    .config(function($stateProvider) {

        $stateProvider
            .state('servers', {
                url: '/servers',
                templateUrl: templatePath
            });

    });
module.exports = name;







