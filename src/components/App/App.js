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
      search: '',
      searchedCities: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getAllCities()
      .then(data => this.setState({ cities: data }))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    // add error handling here, like if !this.state.error and there are no movies yet, show a loading message
    return (
      <main className="app">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <SearchBar cities={ this.state.cities } />
            <Cities cities={ this.state.cities } />
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
