import React from 'react';
import '../styles/CitiesContainer.css';
import CityCards from './CityCards';
import { Link } from 'react-router-dom';

const CitiesContainer = () => {
  // const cards = cityInfo.map((city) => {
  //   return (
  //   <Link to={`/${city.id}`} key={city.id}>
  //     <CityCards img={} cityName={} info={} />
  //   </Link>
  //   )
  // })

  return(
    <section className='cities-container'>
      {/* {cards} */}
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