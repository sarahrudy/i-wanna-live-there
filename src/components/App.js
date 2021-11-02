import { React, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
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
              <main className='all-content'>
                <Nav />
                <CitySlider />
                <SearchBar />
                <MainContent />
                <CitiesContainer />
                <CityDetails />
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
