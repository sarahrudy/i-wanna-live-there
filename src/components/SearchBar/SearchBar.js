import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchPhrase: e.target.value });
    this.props.searchCities(e.target.value);
  }

  render() {
    return(
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search cities here..."
          value={this.state.searchPhrase}
          onChange={e => this.handleChange(e)}
        />
      </div>
    )
  }
}
