import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ item: "sample", status: 0 }]
    };
  }

  render() {
    return (
      <div className="todoApp">
        Hello, I am sasata299.
        <TodoCreator />
        <TodoList todos={this.state.todos} />
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
    var todos = this.props.todos.map((todo, i) => {
      if (todo.status == 0) { return <li>{todo.item}</li> }
      else { return <li><s>{todo.item}</s></li> }
    });

    return (
      <ul className="todoList">
        {todos}
      </ul>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('myApp')
);
