import React, { Component } from "react";
import OfferProduct from "./OfferProduct";
import ArrowNext from "components/ArrowButton/ArrowNext";
import ArrowPrev from "components/ArrowButton/ArrowPrev";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./OfferSlider.scss";

class OfferSlider extends Component {
  constructor(props) {
    super();
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />
    };

    const products =
      this.props.product_data &&
      this.props.product_data.map((product, i) => {
        return (
          <OfferProduct
            data={product}
            key={i}
            // key={`${product_w.product_name}+${index}`}
          ></OfferProduct>
        );
      });

    return (
      <Slider {...settings} className="offer_product_lately_wrapper">
        {products}
      </Slider>
    );
  }
}

export default OfferSlider;
