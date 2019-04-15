/// <reference path="../_all.ts" />

module doo {
    export interface IRootScope extends ng.IRootScopeService {
        TodoLists: TodoList[];
    }
}