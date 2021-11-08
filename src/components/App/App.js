import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Cities from '../Cities/Cities';
import SearchBar from '../SearchBar/SearchBar';
import CityDetails from '../CityDetails/CityDetails';
import { getAllCities } from '../../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cities: [],
      searchedCities: [],
      renderingSearch: false,
      error: ''
    }
  }

  componentDidMount = () => {
    getAllCities()
      .then(data => this.setState({ cities: data }))
      .catch(error => this.setState({ error: error.message }))
  }

  searchCities = (string) => {
    let filteredCities = this.state.cities.filter(city => city.city_and_state.toLowerCase().startsWith(string.toLowerCase()));
    this.setState({ searchedCities: filteredCities });
  }

  render() {
    return (
      <main className="app">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <SearchBar searchCities={ this.searchCities } />
            {this.state.searchedCities.length ?
              <Cities cities={this.state.searchedCities} /> :
              <Cities cities={this.state.cities} />
            }
          </Route>
          <Route exact path='/:id' render={({ match }) => {
            // const cityToRender = this.state.cities.find(city => city.id === parseInt(match.params.id))
            return <CityDetails id={(match.params.id)} />
          }} />
        </Switch>
      </main>
    )
  }
}

export default App;
