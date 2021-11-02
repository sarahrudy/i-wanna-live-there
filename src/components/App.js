import { React, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Nav from './Nav';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
import CitiesContainer from './CitiesContainer';
import CityDetails from './CityDetails';
import CitySlider from './CitySlider';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className='App'>
        <Route 
          exact 
          path='/' 
          render={() => {
            return(
              <Nav />
              <CitySlider />
              <SearchBar />
              <MainContent />
              <CitiesContainer />
              <CityDetails />
              )
            }
          }
        />
      </div>
    );
  }
}
export default App;
