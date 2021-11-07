import CityCard from '../CityCard/CityCard'
import { NavLink } from 'react-router-dom'
import './Cities.css'

const Cities = ({ cities }) => {
  const cityCard = cities.map(city => {
    return (
      <div className="cities">
        <NavLink to={`/${city.id}`}>
          <CityCard
            image={city.image}
            city={city.city_and_state}
          />
        </NavLink>
      </div>
    )
  })
  return(
    <div className='cities-container'>{ cityCard }</div>
  )
};

export default Cities
