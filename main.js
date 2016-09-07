import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todoApp">
        Hello, I am sasata299.
        <TodoCreator />
        <TodoList />
      </div>
    );
  }
}

class TodoCreator extends React.Component {
  render() {
    return (
      <div className="todoCreator">
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('myApp')
);
