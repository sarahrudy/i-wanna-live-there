import React from 'react';
import '../styles/CitiesContainer.css';
import CityCards from './CityCards';
import { Link } from 'react-router-dom';

const CitiesContainer = () => {

  return(
    <section className='cities-container'>
      {/* <Link to={`/${city.id}`}> */}
        <CityCards />
        <CityCards />
        <CityCards />
        <CityCards />
        <CityCards />
        <CityCards />
      {/* </Link> */}
    </section>
  )
};

export default CitiesContainer;