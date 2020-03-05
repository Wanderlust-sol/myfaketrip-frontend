import React, { Component } from "react";
import Landmark from "../../../components/Landmark/Landmark";
import ArrowNext from "../../../components/ArrowButton/ArrowNext";
import ArrowPrev from "../../../components/ArrowButton/ArrowPrev";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandmarkSlider.scss";

class LandmarkSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landmark: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/landmark.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          landmark: res.landmark
        });
        console.log("fir: ", res.lnadmark);
      });
  };
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

    const landmark = this.state.landmark.map((place, i) => {
      return <Landmark data={place} key={i}></Landmark>;
    });
    return (
      <>
        <div className="landmark_container">
          <Slider {...settings}>{landmark}</Slider>
        </div>
      </>
    );
  }
}

export default LandmarkSlider;
