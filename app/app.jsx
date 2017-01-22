var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp=require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// import './../playground/index.js';

store.subscribe(() => {
  var state = store.getState();
  console.log('New State ', state);

  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
// store.dispatch(actions.addTodo('Clean yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());

// require('foundation-sites/dist/foundation.min.css')


require('applicationStyles')
$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>  
  </Provider>,
  document.getElementById('app')
);
