import React from 'react';
import ReactDOM from 'react-dom';
import TodoCreator from './components/TodoCreator.js'
import TodoList from './components/TodoList.js'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ item: "sample", status: 0 }],
      value: ''
    };
  }

  onAdd(newTodo) {
    this.setState({
      todos: this.state.todos.concat({ item: newTodo, status: 0 }),
      value: ''
    });
  }

  onChange(value) {
    this.setState({
      value: value
    });
  }

  onDelete(i) {
    const targetTodo = this.state.todos[i];
    targetTodo.status = 1
    this.setState({
      todos: this.state.todos
    });
  }

  render() {
    return (
      <div className="todoApp">
        Hello, I am sasata299.
        <TodoCreator value={this.state.value} onAdd={this.onAdd.bind(this)} onChange={this.onChange.bind(this)} />
        <TodoList todos={this.state.todos} onDelete={this.onDelete.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('myApp')
);
