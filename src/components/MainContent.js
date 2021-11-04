import React from "react";
import '../styles/MainContent.css';
import CitiesContainer from "./CitiesContainer";
import CitySlider from "./CitySlider";
import SearchBar from "./SearchBar";

const MainContent = () => {

  return(
    <section className='main-content'>
      {/* <Link to={`/${city.id}`}> */}
        <CitySlider />
      {/* </Link> */}
      <SearchBar />
      <h2>All Cities</h2>
      <CitiesContainer />
    </section>
  )
};

export default MainContent;