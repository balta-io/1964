/// <reference path="../_all.ts" />

module doo {
    export class SideBarController {
        static $inject = ['$mdSidenav', '$mdDialog', '$mdBottomSheet', '$location', 'todoService'];

        private todoService: ITodoService;
        private listName: string;

        constructor(
            private $mdSidenav: ng.material.ISidenavService,
            private $mdDialog: ng.material.IDialogService,
            private $mdBottomSheet: ng.material.IBottomSheetService,
            private $location: ng.ILocationService,
            service: ITodoService) {
            this.todoService = service;
        };

        close(): void {
            this.$mdSidenav('left').close();
        }

        open(): void {
            this.$mdSidenav('left').open();
        }

        toggle(): void {
            this.$mdSidenav('left').toggle();
        }

        showAddList(): void {
            this.$mdDialog.show({
                templateUrl: 'pages/add-list.html',
                clickOutsideToClose: true
            });
        }

        cancelAddList(): void {
            this.$mdDialog.cancel();
        }

        addList(): void {
            this.todoService.addTodoList(this.listName);
            this.$mdDialog.cancel();
        }

        showBottomMenu(): void {
            this.$mdBottomSheet.show({
                templateUrl: 'pages/bottom-menu.html'
            });
        }
        
        clearData(): void{
            this.todoService.clearData();
            this.$location.path('/');
            this.$mdBottomSheet.cancel();
        }
    }

    angular.module('doo')
        .controller('sideBarCtrl', SideBarController);
}