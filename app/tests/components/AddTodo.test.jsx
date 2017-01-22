var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


import * as actions from 'actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('shoulds dispatch ADDtodo wen valid text', () => {
        var todoText = 'Checkmail';
        var action = actions.startAddTodo(todoText);
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);


        expect(spy).toHaveBeenCalledWith(action);
    });

    it('shoulds not dispatch addtodo wen invalid todo text', () => {
        var todoText='';
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);


        expect(spy).toNotHaveBeenCalled();
    });
});
