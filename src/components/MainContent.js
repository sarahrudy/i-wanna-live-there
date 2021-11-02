import React from "react";
import '../styles/MainContent.css';
import CitiesContainer from "./CitiesContainer";

const MainContent = () => {

  return(
    <section className='main-content'>
      <h2>All Cities</h2>
      <CitiesContainer />
    </section>
  )
};

export default MainContent;