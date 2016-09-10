import React from 'react';

export default class TodoCreator extends React.Component {
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
