import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Cities from '../Cities/Cities';
import SearchBar from '../SearchBar/SearchBar'
import { cityData } from '../../cityData';


class App extends Component {
  constructor() {
    super()
    this.state = {
      cities: cityData.cities,
    }
  }

  // getAllCities = () => {
  //   fetch('path')
  //   .then(response => response.json())
  //   .then(data => this.setState({ cities: data }))
  //   .catch(error => console.log(error))
  // };

  render() {
    return (
      <main className='app'>
        <Nav />
        <div className="main-container">
        <SearchBar />
        <Cities className="city-cards" cities={this.state.cities} />
        </div>
      </main>
    );
  }
}
export default App;
