import React from 'react';
import './CitiesContainer.css';
import CityCards from '../CityCards/CityCards';
import { Link } from 'react-router-dom';

const CitiesContainer = ({ cities }) => {
  
  return(
    <section className='cities-container'>
      <CityCards />
      <CityCards />
      <CityCards />
      <CityCards />
      <CityCards />
      <CityCards />
    </section>
  )
};

export default CitiesContainer;