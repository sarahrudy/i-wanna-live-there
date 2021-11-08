import React, { Component } from 'react';
import { getSingleCity } from '../../apiCalls';
import './CityDetails.css';
import { Link } from 'react-router-dom'

class CityDetails extends Component {
  constructor() {
    super()
    this.state = {
      city: {},
      error: '',
    }
  }

  componentDidMount = async() => {
    try {
      const fetchedCity = await getSingleCity(this.props.id)
      this.setState({ city: fetchedCity[0] })
    } catch {
      this.setState({ error: "Oops!" })
    }
  }

  render() {
    return (
      <section className="city-details">
        <div className="city-details-container">
          <h2 className="city-details-title">{ this.state.city.city_and_state }</h2>
          <img className="city-details-image" src={ this.state.city.image } alt={ this.state.city.city_and_state } />
          <article className="city-stats-container">
            <h3><strong>Number on Best Paying Cities List: </strong>{ this.state.city.num_on_best_paying_cities_list }</h3>
            <h3><strong>Population: </strong>{ parseInt(this.state.city.population_2019).toLocaleString() }</h3>
            <h3><strong>Median Software Developer Salary: </strong>${ parseInt(this.state.city.median_software_developer_salary_adj).toLocaleString() }</h3>
            <h3><strong>Software Developer Jobs: </strong> {parseInt(this.state.city.num_software_developer_jobs).toLocaleString() }</h3>
            <h3><strong>Median Home Price: </strong>${ parseInt(this.state.city.median_home_price).toLocaleString() }</h3>
            <br/>
            <h3>{ this.state.city.city_blurb }</h3>
          </article>
          <Link to="/" className='city-details-button'>◀ BACK TO ALL CITIES</Link>
        </div>
      </section>
    )
  }
}

export default CityDetails;
