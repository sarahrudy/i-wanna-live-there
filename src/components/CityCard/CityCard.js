import React from "react";
import './CityCard.css';

// change this component name to CityCard because it's singular 
const CityCard = ({ image, city }) => {
  return (
    <div className='city-card'>
      <article className="city-card-container">
        <p className="city-card-title">{ city }</p>
        <img className='city-card-image' src={ image } alt='city' />
      </article>
    </div>
  )
};

export default CityCard;