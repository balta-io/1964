/// <reference path="../_all.ts" />

module doo {
    export interface ITodoService {
        addTodoList(title: string): void;
        addTodoItem(index: number, title: string): void;
        save(): void;
        clearData(): void;
    }
}