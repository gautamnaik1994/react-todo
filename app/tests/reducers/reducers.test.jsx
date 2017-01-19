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
                text: 'Walk dog'
            };
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        var todoData = [{
            id: 11,
            text: 'Test featues',
            completed: true,
            createdAt: 0,
            completedAt: 125
        }];

        it('should toggle todo', () => {
            var action = {
                type: 'TOGGLE_TODO',
                id:11
            };
            var res = reducers.todosReducer(df(todoData), df(action));
           console.log("res",res);
           expect(res[0].completed).toEqual(false);
           expect(res[0].completedAt).toEqual(undefined); 
            
        });

    });
});