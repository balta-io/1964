/// <reference path="../_all.ts" />
module doo {
    export class HomeController {
        constructor() {
            document.getElementById('splash-screen').remove();
        };
    }

    angular.module('doo')
        .controller('homeCtrl', HomeController);
}