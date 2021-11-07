import React from "react";
import Slider from 'react-slick';
import OneSlide from '../OneSlide/OneSlide';
import './CitySlider.css';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

const CitySlider = (cities) => {
  const sliderCities = cities.map((city) => {

    return (
      <OneSlide image={city.image} key={Date.now}/>
    )
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
    autoplay: true
  }

  return (
    <article className='slider-container'>
      <Slider {...settings}>
        {sliderCities}
      </Slider>
    </article>
  )
};

export default CitySlider;