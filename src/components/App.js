import { React, Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import '../styles/App.css';
import Nav from './Nav';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
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
      <div className='app'>
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
