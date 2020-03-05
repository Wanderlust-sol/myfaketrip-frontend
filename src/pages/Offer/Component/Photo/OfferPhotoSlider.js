import React, { Component } from "react";
import Slider from "react-slick";
import leftArrow from "img/leftArrow.png";
import rightArrow from "img/rightArrow.png";
import "./OfferPhotoSlider.scss";

export default class OfferPhotoSlider extends Component {
  constructor(props) {
    super();
  }

  render() {
    const image = this.props.data && this.props.data;
    const settings = {
      customPaging: function(i) {
        return <img className="thumb_photo" src={image[i]} alt="thumb_photo" />;
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: false,
      speed: 500,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <img src={rightArrow} alt="rightArrow" />,
      prevArrow: <img src={leftArrow} alt="leftArrow" />
    };

    return (
      <div className="slider_form">
        <div className="image_header">
          <p className="image_title">{this.props.data2.name}</p>
          <p className="image_guide">{this.props.data2.guide_name}</p>
        </div>
        <Slider {...settings} className="offer_photo_slider_wrapper">
          {this.props.data &&
            this.props.data.map((photo, i) => {
              return (
                <div className="photo_slider" key={i}>
                  <img src={photo} alt="coverphotos" />
                  <p className="photo_num">
                    {i + 1}/{this.props.data.length}
                  </p>
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}
