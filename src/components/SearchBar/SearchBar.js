import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchedCities: []
    }
  }

  handleChange = (e) => {
    this.setState({ searchedCities: this.searchCities(e.target.value) });
  }

  searchCities = (string) => {
    console.log('string', string)
    let searchingCities = this.props.cities.filter(city => city.city_and_state.toLowerCase().startsWith(string.toLowerCase()));
    console.log('searchingCities', searchingCities);
    return searchingCities;
    //this.setState({ searchedCities: searchingCities });
  }

  render() {
    return(
      <div>
        <input
          type="text"
          className="search-bar"
          placeholder="Search cities here..."
          value={this.state.search}
          onChange={e => this.handleChange(e)}
        />
        <input
          type="submit"
        />
      </div>
    )
  }
}
