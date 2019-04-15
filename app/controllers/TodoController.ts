/// <reference path="../_all.ts" />
module doo {
    export class TodoController {
        static $inject = ['$routeParams', '$mdDialog', 'todoService'];

        private order: string = 'title';        
        private todo: string;   
        private index: number = 0;
        private todoService: ITodoService;

        constructor(private $routeParams: IRouteParams,
            private $mdDialog: ng.material.IDialogService,
            service: ITodoService) {
            this.todoService = service;
            this.index = $routeParams.index;
        };

        showAddDialog(): void {
            this.$mdDialog.show({
                templateUrl: 'pages/add-todo.html',
                clickOutsideToClose: true
            });
        }
        
        add(): void {
            this.todoService.addTodoItem(this.index, this.todo);
            this.$mdDialog.cancel();
        }
        
        save(): void{
            this.todoService.save();
        }
        
        changeOrder(order: string): void { 
            this.order = order;
        }
    }

    angular.module('doo')
        .controller('todoCtrl', TodoController);
}