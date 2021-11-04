import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import MainContent from '../MainContent/MainContent';
import CityDetails from '../CityDetails/CityDetails';
import CitySlider from '../CitySlider/CitySlider';
import SearchBar from '../SearchBar/SearchBar';
import CitiesContainer from '../CitiesContainer/CitiesContainer';
import { mockData } from '../../mockData';


class App extends Component {
  constructor() {
    super()
    this.state = {
      allCities: mockData.cities,
      // cityImages: mockData.cities
    }
  }

  // getAllCities = () => {
  //   fetch('path')
  //   .then(response => response.json())
  //   .then(data => this.setState({ allCities: data }))
  //   .catch(error => console.log(error))
  // };

  render() {
    console.log(this.state.allCities)
    return (
      <div className='app'>
        <Route 
          exact 
          path='/' 
          render={() => {
            return(
              <main className='all-content'>
                <Nav />
                <CitySlider cities={this.state.allCities}/>
                <SearchBar />
                <CitiesContainer cities={this.state.allCities}/>
                <Route exact path='/:cityId' render={() => <CityDetails />} />
              </main>
              )
            }
          }
        />
      </div>
    );
  }
}
export default App;
