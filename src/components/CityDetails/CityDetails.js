import React, { Component } from 'react';
import { getSingleCity } from '../../apiCalls';
import './CityDetails.css';
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
      console.log(this.state.city)
    } catch {
      this.setState({ error: "Oops!" })
    }
  }

  render() {
    return (
      <section className="city-details">
        <div className="city-details-container">
          <h2>{ this.state.city.city_and_state }</h2>
          <img className="city-details-image" src={ this.state.city.image } alt={ this.state.city.city_and_state } />
          <p>Population: { this.state.city.population_2019 }</p>
          <p>Population Change Since 2020: { this.state.city.population_change_since_2020 } </p>
          <p>Number on Best Paying Cities List: { this.state.city.num_on_best_paying_cities_list }</p>
          <p>Median Software Developer Salary: { this.state.city.median_software_developer_salary_adj }</p>
          <p>Software Developer Jobs: { this.state.city.num_software_developer_jobs }</p>
          <p>Median Home Price: { this.state.city.median_home_price }</p>
          <p>Big Software Companies: { this.state.city.big_companies }</p>
          <p>{ this.state.city.city_blurb }</p>
        </div>
      </section>
    )
  }
}

export default CityDetails;