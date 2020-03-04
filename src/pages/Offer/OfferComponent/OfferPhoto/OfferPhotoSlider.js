import React, { Component } from "react";
import Slider from "react-slick";
import leftArrow from "../../../../img/leftArrow.png";
import rightArrow from "../../../../img/rightArrow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OfferPhotoSlider.scss";

export default class OfferPhotoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offer_photo: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/offer_photo.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          offer_photo: res.offer_photo
        });
      });
  };

  render() {
    const image = this.props.data && this.props.data;
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img className="thumb_photo" src={image[i]} alt="thumb_photo" />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <img src={rightArrow} />,
      prevArrow: <img src={leftArrow} />
    };

    const offer_photos =
      this.props.data &&
      this.props.data.map((photo, i) => {
        return (
          <div className="photo_slider" key={i}>
            <img src={photo} alt="coverphotos" />
            <p className="photo_num">
              {i + 1}/{this.props.data.length}
            </p>
          </div>
        );
      });

    return (
      <div className="slider_form">
        <div className="image_header">
          <p className="image_title">
            [소수/커피제공/택시투어] (오전반일) GAUDI 가우디 바르셀로나
            건축학개론
          </p>
          <p className="image_guide">Lucia 가이드</p>
        </div>
        <Slider {...settings} className="offer_photo_slider_wrapper">
          {offer_photos}
        </Slider>
      </div>
    );
  }
}
