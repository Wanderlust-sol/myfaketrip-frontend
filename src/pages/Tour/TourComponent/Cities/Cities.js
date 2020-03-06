import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ArrowNext from "../../../../components/ArrowButton/ArrowNext";
import ArrowPrev from "../../../../components/ArrowButton/ArrowPrev";
import { CitiesData } from "./CitiesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cities.scss";

const cities = CitiesData.map(city => {
  return (
    <Link to={`/search`} key={city.id}>
      <div className="cities" style={{ backgroundImage: `url(${city.img})` }}>
        <div className="slider_bg">
          <span>{city.name}</span>
        </div>
      </div>
    </Link>
  );
});

class Cities extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />
    };
    return (
      <Slider {...settings} className="cities_slider">
        {cities}
      </Slider>
    );
  }
}

export default Cities;
