import React from "react";
import './OneSlide.css';

const OneSlide = ({image}) => {

  return (
    <div className='one-slide'>
      <img className='one-slide__image' src={image} alt='something'/>
    </div>
  )
};

export default OneSlide;