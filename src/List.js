import React, { Component } from 'react';

class List extends Component {
  render() {
    const { todos, handleDeleteList } = this.props
    const elementList = todos.map((todo) => {
      return <li key={todo.id} data-key={todo.id}>{todo.todo} <img src="/svg/delete.svg" alt="delete-icon" onClick={handleDeleteList} /></li>
    })
    return (
      <ul className="todo-list">
        {elementList}
      </ul>
    );
  }
}

export default List;