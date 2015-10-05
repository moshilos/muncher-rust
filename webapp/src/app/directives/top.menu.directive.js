/**
 * Created by Moshi.los on 10/5/2015.
 */
var angular = require('angular');
var templateUrl = require('./top.menu.directive.html');
angular.module('directives')
    .directive('topMenu', function(){
        return {
            restrict: 'E',
            templateUrl: templateUrl,
            controller: 'TopMenuDirectiveCtrl',
            controllerAs: 'menu'
        };
    })
    .controller('TopMenuDirectiveCtrl', function(){
        var self = this;
        self.items = [
            {
                name: 'Home',
                state: 'home'
            },
            {
                name: 'Users',
                state: 'users'
            },
            {
                name: 'Servers',
                state: 'servers'
            }
        ]
    });
