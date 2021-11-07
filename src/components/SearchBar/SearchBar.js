import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchedCities: [],
      renderingSearch: false
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
    this.setState({ searchedCities: this.searchCities(e.target.value) });
    this.setState({ renderingSearch: true });
  }

  searchCities = (string) => {
    let searchingCities = this.props.cities.filter(city => city.city_and_state.toLowerCase().startsWith(string.toLowerCase()));
    this.setState({ searchedCities: searchingCities });
    return searchingCities;
  }

  componentDidUpdate = () => {
    
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
      </div>
    )
  }
}
