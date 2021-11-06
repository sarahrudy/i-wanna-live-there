import CityCard from '../CityCard/CityCard'
import './Cities.css'

const Cities = ({ cities }) => {
  const cityCard = cities.map(city => {
    return (
      <div className="cities">
        <CityCard
          image={city.image}
          city={city.city_and_state}
        />  
      </div>
    )
  })
  return(
    <div className='cities-container'>{cityCard}</div>
  )
};

export default Cities