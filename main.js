import React from 'react';
import ReactDOM from 'react-dom';

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

class TodoCreator extends React.Component {
  _onAdd(e) {
    const newTodo = this.refs.inputText.value;
    this.props.onAdd(newTodo);
  }

  _onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="todoCreator">
        <input type="text" value={this.props.value} ref="inputText" placeholder="Input your new todo" onChange={(e) => this._onChange(e)} />
        <button onClick={(e) => this._onAdd(e)}>Add</button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  _onDelete(e, i) {
    this.props.onDelete(i);
  }

  render() {
    var todos = this.props.todos.map((todo, i) => {
      if (todo.status == 0) {
        return (
          <li key={i}>
            <input type="checkbox" onClick={(e) => this._onDelete(e, i)} />
            {todo.item}
          </li>
        )
      }
      else { return <li key={i}><s>{todo.item}</s></li> }
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
