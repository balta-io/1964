/// <reference path="../_all.ts" />

module doo {
    export class TodoService implements ITodoService {
        static $inject = ['$rootScope'];

        private $rootScope: IRootScope;

        constructor(private rootScope: IRootScope) {
            this.$rootScope = rootScope;
        };

        addTodoList(title): void {
            this.$rootScope.TodoLists.push(new TodoList(title, []));
            localStorage.setItem('2doos', angular.toJson(this.$rootScope.TodoLists));
        }

        addTodoItem(index, title): void {
            this.$rootScope.TodoLists[index].todos.push(new TodoItem(title, false));
            localStorage.setItem('2doos', angular.toJson(this.$rootScope.TodoLists));
        }

        save(): void {
            localStorage.setItem('2doos', angular.toJson(this.$rootScope.TodoLists));
        }

        clearData(): void {
            localStorage.removeItem('2doos');
            this.$rootScope.TodoLists = [];
        }
    }

    angular.module('doo')
        .service('todoService', TodoService);
}