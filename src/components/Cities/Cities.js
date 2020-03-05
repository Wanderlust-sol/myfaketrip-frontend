import React, { Component } from "react";
import Slider from "react-slick";
import ArrowNext from "../ArrowButton/ArrowNext";
import ArrowPrev from "../ArrowButton/ArrowPrev";
import { CitiesData } from "./CitiesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cities.scss";

const cities = CitiesData.map(city => {
  return (
    <div key={city.id}>
      <div className="cities" style={{ backgroundImage: `url(${city.img})` }}>
        <div className="slider_bg">
          <span>{city.name}</span>
        </div>
      </div>
    </div>
  );
});

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />
};

class Cities extends Component {
  render() {
    return (
      <Slider {...settings} className="cities_slider">
        {cities}
      </Slider>
    );
  }
}

export default Cities;
