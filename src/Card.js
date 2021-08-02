import React, { Component } from 'react';
import Search from './Search'
import List from './List'

class Card extends Component {
  render() {
    return (
      <section className="card">
        <Search />
        <List />
      </section>
    );
  }
}

export default Card;