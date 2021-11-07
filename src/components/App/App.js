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
      search: null,
      searchedCities: []
      error: '',
    }
  }

  componentDidMount = () => {
    getAllCities()
      .then(data => this.setState({ cities: data }))
      .catch(error => console.log(error))
  }



  handleChange = (e) => {
    this.setState({ searchedCities: this.searchCities(e.target.value) });
  }

  searchCities = (string) => {
    console.log('seach bar value in Search Cities', string);
    let searchingCities = this.state.cities.filter(city => city.city_and_state.toLowerCase().startsWith(string.toLowerCase()));
    return this.setState({ cities: searchingCities });
  }

  render() {
    // add error handling here, like if !this.state.error and there are no movies yet, show a loading message
    return (
      <main className="app">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <SearchBar search={this.state.search} handleChange={this.handleChange} />
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
