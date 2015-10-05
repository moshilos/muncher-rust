/**
 * Created by Moshi.los on 10/4/2015.
 */
var angular = require('angular');
var name = 'feature-users';
var templatePath = require('./users.html');

angular.module(name, [
        require('angular-ui-router')
    ])
    .config(function($stateProvider) {

        $stateProvider
            .state('users', {
                url: '/users',
                templateUrl: templatePath
            });

    });
module.exports = name;







