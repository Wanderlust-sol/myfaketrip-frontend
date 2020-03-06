import React, { Component } from "react";
import Product from "../../../components/Product/Product";
import ArrowNext from "../../../components/ArrowButton/ArrowNext";
import ArrowPrev from "../../../components/ArrowButton/ArrowPrev";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SearchProduct.scss";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />
};

class SearchProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_place: []
    };
  }

  render() {
    console.log("data", this.props.data);
    return (
      <>
        <div className="search_product_container">
          <h3>추천 상품</h3>
          <Slider {...settings} className="product_lately_wrapper">
            {this.props.data &&
              this.props.data.offers.map((product_p, i) => {
                return <Product data={product_p} key={i}></Product>;
              })}
          </Slider>
        </div>
        <div className="search_product_container">
          <h3>{this.props.data.sub_theme}</h3>
          <Slider {...settings} className="product_lately_wrapper">
            {this.props.data &&
              this.props.data.offers.map((product_p, i) => {
                return <Product data={product_p} key={i}></Product>;
              })}
          </Slider>
        </div>
      </>
    );
  }
}

export default SearchProduct;
