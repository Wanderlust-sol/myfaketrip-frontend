import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./TourSlider.scss";

class TourSlider extends Component {
  render() {
    const slideImages = [
      "https://d2ur7st6jjikze.cloudfront.net/cms/1088_original_1580783352.png?1580783352",
      "https://d2ur7st6jjikze.cloudfront.net/cms/478_original_1577953842.jpg?1577953842",
      "https://d2ur7st6jjikze.cloudfront.net/cms/1083_original_1575021499.jpg?1575021499",
      "https://d2ur7st6jjikze.cloudfront.net/cms/642_original_1577942354.jpg?1577942354",
      "https://d2ur7st6jjikze.cloudfront.net/cms/808_original_1572410642.jpg?1572410642",
      "https://d2ur7st6jjikze.cloudfront.net/cms/49_original_1562301682.jpg?1562301682",
      "https://d2ur7st6jjikze.cloudfront.net/cms/845_original_1571384568.jpg?1571384568",
      "https://d2ur7st6jjikze.cloudfront.net/cms/906_original_1576239819.jpg?1576239819",
      "https://d2ur7st6jjikze.cloudfront.net/cms/785_original_1573540876.jpg?1573540876",
      "https://d2ur7st6jjikze.cloudfront.net/cms/586_original_1562301689.jpg?1562301689"
    ];

    const properties = {
      duration: 5000,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true
    };

    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[0]})` }}
              className="main_img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[1]})` }}
              className="main_img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[2]})` }}
              className="main_img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[3]})` }}
              className="main_img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[4]})` }}
              className="main_img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[5]})` }}
              className="main_img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[6]})` }}
              className="main_img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[7]})` }}
              className="main_img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[8]})` }}
              className="main_img"
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{ backgroundImage: `url(${slideImages[9]})` }}
              className="main_img"
            ></div>
          </div>
        </Slide>
      </div>
    );
  }
}

export default TourSlider;
