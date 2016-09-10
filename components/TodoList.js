import React from 'react';

export default class TodoList extends React.Component {
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
