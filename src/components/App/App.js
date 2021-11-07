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
  

  render() {
    return (
      <main className='app'>
        <Nav />
        <div className="main-container">
        <SearchBar />
        <Cities className="city-cards" cities={this.state.cities} />
        <CityDetails details={this.state.cities} />
        </div>
      </main>
    );
  }
}
export default App;
