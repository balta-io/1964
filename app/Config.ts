/// <reference path="_all.ts" />

module doo {
    'use strict';

    function config($mdThemingProvider: ng.material.IThemingProvider)
    {
        // http://www.getmdl.io/customize/index.html
        // https://materialdesignicons.com/
        $mdThemingProvider.theme('default').primaryPalette('pink').accentPalette('orange');
    }

    config.$inject = ['$mdThemingProvider'];

    angular.module('doo').config(config);
}