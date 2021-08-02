import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul className="todo-list">
        <li>Buy a new gaming laptop</li>
        <li>Buy some accessories for laptop</li>
        <li>Buy some car</li>
        <li>Buy a new home</li>
      </ul>
    );
  }
}

export default List;