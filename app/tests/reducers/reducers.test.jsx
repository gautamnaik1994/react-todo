var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('Search Text Reducer', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var res = reducers.searchTextReducer(df(''), df(action));
            expect(res).toEqual(action.searchText);
        });

    });
    describe('Show Completed Reducer', () => {
        it('should togle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(df(true), df(action));
            expect(res).toEqual(false);
        });

    });
    describe('Todos Reducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'sssss',
                    completed: false,
                    createdAt: 5454
                }
            };
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });



        it('should toggle todo', () => {
            var todoData = [{
                id: 11,
                text: 'Test featues',
                completed: true,
                createdAt: 0,
                completedAt: 125
            }];
            var updates = {
                completed: false,
                completedAt: null
            };
            var action = {
                type: 'UPDATE_TODO',
                id: todoData[0].id,
                updates
            };
           
            var res = reducers.todosReducer(df(todoData), df(action));

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
             expect(res[0].text).toEqual(todoData[0].text);

        });

        it('should add existing todos ', () => {

            var todos = [{
                id: 111,
                text: "hfdgkhdfg",
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            var action = {
                type: 'ADD_TODOS',
                todos

            };
            var res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);

        });

    });
});