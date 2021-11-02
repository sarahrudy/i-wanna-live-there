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
      allCities: [],
      sliderCity: {},
    }
  }

  // componentDidMount() {
  //   fetch('path')
  //   .then(response => response.json())
  //   .then(data => this.setState({ allCities: data }))
  //   .catch(error => console.log(error))
  // };

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
                {/* <Link to={`/${city.id}`}> */}
                <CitySlider />
                {/* </Link> */}
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
