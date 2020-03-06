import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./PackageSlider.scss";

const slideImages = [
  "https://d2ur7st6jjikze.cloudfront.net/cms/1094_original_1582875838.jpg?1582875838",
  "https://d2ur7st6jjikze.cloudfront.net/cms/679_original_1582875839.jpg?1582875839",
  "https://d2ur7st6jjikze.cloudfront.net/cms/1096_original_1582876070.jpg?1582876070"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};
class PackageSlider extends Component {
  render() {
    return (
      <div className="package_banner_container">
        <div className="package_slider">
          <Slide {...properties}>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[0]})` }}
                className="package_banner"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[1]})` }}
                className="package_banner"
              ></div>
            </div>
            <div className="each-slide">
              <div
                style={{ backgroundImage: `url(${slideImages[2]})` }}
                className="package_banner"
              ></div>
            </div>
          </Slide>
        </div>
        <div className="package_event">
          <img
            src="https://d2ur7st6jjikze.cloudfront.net/cms/68_original_1582876448.jpg?1582876448"
            alt="패키지 이벤트 이미지"
          />
        </div>
      </div>
    );
  }
}

export default PackageSlider;
