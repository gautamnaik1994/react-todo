import React, { Component } from 'react';
import * as Redux from 'react-redux';

//var TodoList = require('TodoList');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
//var AddTodo = require('AddTodo');
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';
//var TodoSearch = require('TodoSearch');
//var TodoAPI = require('TodoAPI');

export class TodoApp extends Component{
    // getInitialState: function () {
    //     return {
    //         showCompleted: false,
    //         searchText: '',
    //         todos: TodoAPI.getTodos()
    //     };
    // },
    // componentDidUpdate: function () {
    //     TodoAPI.setTodos(this.state.todos);
    // },
    // handleAddTodo: function (text) {
    //     this.setState({
    //         todos: [
    //             ...this.state.todos,
    //             {
    //                 id: uuid(),
    //                 text: text,
    //                 completed: false,
    //                 createdAt: moment().unix(),
    //                 completedAt: undefined
    //             }
    //         ]
    //     });
    // },
    // handleToggle: function (id) {
    //     var updatedTodos = this.state.todos.map((todo) => {

    //         if (todo.id === id) {
    //             todo.completed = !todo.completed;
    //             todo.completedAt = todo.completed ? moment().unix() : undefined;
    //         }
    //         return todo;
    //     });
    //     this.setState({ todos: updatedTodos });
    // },
    // handleSearch: function (showCompleted, searchText) {
    //     this.setState({
    //         showCompleted: showCompleted,
    //         searchText: searchText.toLowerCase()
    //     });
    // },
    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }
    
    onLogout(e) {
        var {dispatch} = this.props;
        e.preventDefault();
        dispatch(actions.startLogout());
    }

    render(){
        // var {todos, showCompleted, searchText} = this.state;
        // var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout}>Logout</a>
                </div>
                <h1 className="page-title">Todo App</h1>
                <div className="row align-center">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch />
                            <TodoList />
                            <AddTodo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Redux.connect()(TodoApp);

