import React from 'react';
import './CityDetails.css';

const CityDetails = ({ details }) => {
  return (
    <section className="city-details">
      <div className="city-details-container">
        <img className="city-details-image" src={details.image} alt={ details.city_and_state } />
        <h2>{ details.city_and_state }</h2>
      </div>
    </section>
  )
}

export default CityDetails;