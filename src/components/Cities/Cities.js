import React, { Component } from "react";
import Slider from "react-slick"
import {CitiesData} from "./CitiesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cities.scss";


const cities = CitiesData.map(city => {
    return (
        <div key={city.id} >
            <div style={{backgroundImage: `url(${city.img})`}} className="cities">
                <div className="slider_bg"></div>
                <span>
                    {city.name} 
                </span> 
            </div>
        </div>   
    )
})


class Cities extends Component {
    
    render() {

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6
        }
        return (
            <Slider {...settings} className="cities_slider" >
                {cities}  
            </Slider>
           
        )
    }
}


export default Cities;