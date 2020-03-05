import React, { Component } from "react";
import Product from "../../../components/Product/Product";
import ArrowNext from "../../../components/ArrowButton/ArrowNext";
import ArrowPrev from "../../../components/ArrowButton/ArrowPrev";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.scss";

class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_winter: []
    };
  }
  componentDidMount = () => {
    fetch("http://10.58.2.187:8000/product")
      .then(res => res.json())
      .then(res => {
        console.log("fir: ", res.data[0].offers);
        this.setState({
          product_winter: res.data[0].offers
        });
      });
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <ArrowNext />,
      prevArrow: <ArrowPrev />
    };

    const products_winter = this.state.product_winter.map((product_w, i) => {
      return <Product data={product_w} key={i}></Product>;
    });

    return (
      <div className="product_winter">
        <h2>겨울에도 꿀잼 보장🍯</h2>
        <Slider {...settings} className="product_lately_wrapper">
          {products_winter}
        </Slider>
      </div>
    );
  }
}

export default ProductSlider;
