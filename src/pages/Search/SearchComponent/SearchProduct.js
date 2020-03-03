import React, { Component } from "react";
import Product from "../../../components/Product/Product";
import ArrowNext from "../../../components/ArrowButton/ArrowNext";
import ArrowPrev from "../../../components/ArrowButton/ArrowPrev";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SearchProduct.scss";

class SearchProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_winter: []
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/data/product_winter.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          product_winter: res.product_winter
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
      <>
        <div className="search_product_container">
          <h3>추천 상품</h3>
          <Slider {...settings} className="product_lately_wrapper">
            {products_winter}
          </Slider>
        </div>
        <div className="search_product_container">
          <h3>마이리얼트립 ONLY</h3>
          <Slider {...settings} className="product_lately_wrapper">
            {products_winter}
          </Slider>
        </div>
      </>
    );
  }
}

export default SearchProduct;
