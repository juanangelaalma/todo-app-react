import React, { Component } from 'react';

class AddNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newList: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({
      newList: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.handleSubmit(this.state.newList)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-inline">
        <input type="text" height="30" name="newlist" onChange={this.handleChange} value={this.state.newList}/>
        <button type="submit" className="create-list">+</button>
      </form>
    );
  }
}

export default AddNew;