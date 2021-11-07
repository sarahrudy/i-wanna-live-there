import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search cities here..."
          value={this.props.search}
          onChange={e => this.props.handleChange(e)}
        />
        <input
          type="submit"
        />
      </div>
    )
  }
}
