import React, { Component } from 'react';
import AddNew from './AddNew'
import List from './List'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: todos
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeleteList = this.handleDeleteList.bind(this)
  }
  handleSubmit(newList){
    const length = todos.length
    const newData = {
      id: 1,
      todo: newList
    }
    if(length > 0) {
      newData.id = todos[length-1].id + 1
    }
    todos.push(newData)
    this.setState({
      todos: todos
    })
    console.log(todos)
  }
  handleDeleteList (e){
    const dataKey = e.target.parentNode.getAttribute('data-key')
    const index = todos.findIndex(todo => todo.id == dataKey)
    todos.splice(index, 1)
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <section className="card">
        <h1>Todo App</h1>
        <AddNew handleSubmit={this.handleSubmit} />
        <List todos={todos} handleDeleteList={this.handleDeleteList} />
      </section>
    );
  }
}

const todos = []

export default Card;