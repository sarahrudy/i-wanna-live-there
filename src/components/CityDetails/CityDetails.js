import React, { Component } from 'react';
import { getSingleCity } from '../../apiCalls';
import './CityDetails.css';

class CityDetails extends Component {
  constructor() {
    super()
    this.state = {
      city: {},
      error: '',
      isLoading: true
    }
  }

  componentDidMount = () => {
    getSingleCity(this.props.id)
      .then(data => {
        this.setState({ city: data[0] })
        this.setState({ isLoading: false })
      })
      .catch(error => {
        this.setState({ error: error.message })
        this.setState({ isLoading: false })
      })
  }

  render() {
    return (
      <section className="city-details">
        {this.state.error && <h2>{this.state.error}</h2>}
        {this.state.city &&
          <div className="city-details-container">
            <div className="city-image-container">
              <h2 className="city-details-title">{ this.state.city.city_and_state }</h2>
              <img className="city-details-image" src={ this.state.city.image } alt={ this.state.city.city_and_state } />
            </div>
            <article className="city-stats-container">
              <h3><strong>Number on Best Paying Cities List: </strong>{ this.state.city.num_on_best_paying_cities_list }</h3>
              <h3><strong>Population: </strong>{ this.state.city.population_2019 }</h3>
              <h3><strong>Population Change Since 2020: </strong> { this.state.city.population_change_since_2020 } </h3>
              <h3><strong>Median Software Developer Salary: </strong>{ this.state.city.median_software_developer_salary_adj }</h3>
              <h3><strong>Software Developer Jobs: </strong> { this.state.city.num_software_developer_jobs }</h3>
              <h3><strong>Median Home Price: </strong>{ this.state.city.median_home_price }</h3>
              <br/>
              <h3>{ this.state.city.city_blurb }</h3>
            </article>
          </div>
        }
      </section>
    )
  }
}

export default CityDetails;
