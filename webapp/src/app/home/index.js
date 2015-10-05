/**
 * Created by Moshi.los on 10/4/2015.
 */
var angular = require('angular');
var name = 'feature-home';
var templatePath = require('./home.html');

angular.module(name, [
        require('angular-ui-router')
    ])
    .config(function($stateProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: templatePath
            });

    });
module.exports = name;







