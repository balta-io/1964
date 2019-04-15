/// <reference path="_all.ts" />

module doo {
    'use strict';

    function config($routeProvider: ng.route.IRouteProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/home.html",
                controller: "homeCtrl",
                controllerAs: "vm"
            })
            .when("/todos/:index", {
                templateUrl: "pages/todo-items.html",
                controller: "todoCtrl",
                controllerAs: "vm"
            })
            .otherwise({
                templateUrl: "pages/404.html",
                controller: "homeCtrl",
                controllerAs: "vm"
            });
    }

    config.$inject = ['$routeProvider'];

    angular.module('doo').config(config);
}