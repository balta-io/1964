/// <reference path="../_all.ts" />

module doo {
    export class TodoList {
        constructor(public title: string, public todos: TodoItem[]) { }
    }
}