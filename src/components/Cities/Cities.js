import React, { Component } from "react";
import Slider from "react-slick"
import CitiesData from "./CitiesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { baseUrl } from "../../img/Tour/C";

class Cities extends Component {
    
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 2
        }
        return (
            // <div>Hello</div>
            <div >
                {CitiesData.map(city => {
                    return (
                        <a href="#" key={city.id} className="cities_container">
                            {/* <div 
                                className="cities" 
                                style={{'backgroundColor': "red"}} /> */}
                            <img src={city.img} className="cities"/>
                            <div className="slider_bg"></div>
                            <span>
                                {city.name}
                            </span>
                        </a>
                    )
                })}; 
            </div>
           
        )
    }
}


export default Cities;