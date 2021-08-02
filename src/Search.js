import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form className="form-inline">
        <input type="text" height="30"/>
        <button className="create-list">+</button>
      </form>
    );
  }
}

export default Search;