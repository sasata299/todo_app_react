import React from 'react';
import ReactDOM from 'react-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ item: "sample", status: 0 }]
    };
  }

  onAdd(newTodo) {
    this.setState({
      todos: this.state.todos.concat({ item: newTodo, status: 0 })
    });
  }

  render() {
    return (
      <div className="todoApp">
        Hello, I am sasata299.
        <TodoCreator onAdd={this.onAdd.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

class TodoCreator extends React.Component {
  _onAdd() {
    const newTodo = this.refs.inputText.value;
    this.props.onAdd(newTodo);
  }

  render() {
    return (
      <div className="todoCreator">
        <input type="text" ref="inputText" placeholder="Input your new todo" />
        <button onClick={this._onAdd.bind(this)}>Add</button>
      </div>
    );
  }
}

class TodoList extends React.Component {
  render() {
    var todos = this.props.todos.map((todo, i) => {
      if (todo.status == 0) { return <li key={i}>{todo.item}</li> }
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
