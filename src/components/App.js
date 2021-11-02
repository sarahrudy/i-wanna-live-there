import { React, Component } from 'react';
import '../App.css';
import Nav from './Nav';
import MainContent from './MainContent';
import SearchBar from './SearchBar';
import CitiesContainer from './CitiesContainer';
import CityDetails from './CityDetails';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <MainContent />
      <CitiesContainer />
      <CityDetails />
    </div>
  );
}

export default App;
