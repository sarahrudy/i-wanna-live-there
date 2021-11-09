import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import Cities from '../Cities/Cities';
import SearchBar from '../SearchBar/SearchBar';
import CityDetails from '../CityDetails/CityDetails';
import { getAllCities } from '../../apiCalls';
import Error from '../Error/Error'
import loadingIcon from '../../images/loading.gif';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cities: [],
      searchedCities: [],
      isLoading: true,
      error: ''
    }
  }

  componentDidMount = () => {
    getAllCities()
      .then(data => {
        this.setState({ cities: data })
        this.setState({ isLoading: false })
      })
      .catch(error => {
        this.setState({ error: error })
        this.setState({ isLoading: false })
      })
  }

  searchCities = (string) => {
    let filteredCities = this.state.cities.filter(city => city.city_and_state.toLowerCase().startsWith(string.toLowerCase()));
    this.setState({ searchedCities: filteredCities });
  }

  render() {
    return (
      <main className="app">
        <Nav />
          {this.state.error &&
            <h2>{ this.state.error }</h2>
          }
          {this.state.isLoading &&
            <img className="loading-icon" src={loadingIcon} alt="page is loading" />
          }
          {this.state.cities &&
            <Switch>
              <Route exact path='/'>
              {this.state.searchedCities.length 
                ?
               <>
                <SearchBar searchCities={ this.searchCities } />
                <Cities cities={ this.state.searchedCities } /> 
               </>
                :
                <>
                <SearchBar searchCities={ this.searchCities } />
                <Cities cities={ this.state.cities } /> 
                </> }
              </Route>
              <Route exact path='/:id' render={ ({ match }) => {
                return <CityDetails id={match.params.id} />
              }} />
            </Switch>
          }
      </main>
    )
  }
}

export default App;
