import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Cities from '../Cities/Cities';
import SearchBar from '../SearchBar/SearchBar'
import CityDetails from '../CityDetails/CityDetails'
import { getAllCities } from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      cities: [],
    }
  }

  componentDidMount = () => {
    getAllCities()
      .then(data => this.setState({ cities: data }))
      .catch(error => console.log(error))
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }

  searchCities = (e) => {
    let searchingCities = this.state.cities.filter(city => city.city.toLowerCase().includes(this.state.search.toLowerCase()));
    return this.setState({ cities: searchingCities });
  }

  render() {
    return (
      <main className="app">
        <Nav />
        <div className="main-container">
        <SearchBar search={this.state.search} searchCities={this.searchCities} />
        <Cities className="city-cards" cities={this.state.cities} />
        <CityDetails details={this.state.cities} />
        </div>
      </main>
    );
  }
}
export default App;
