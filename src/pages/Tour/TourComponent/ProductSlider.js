import React, { Component } from "react";
import Product from "../../../components/Product/Product";
import ArrowNext from "../../../components/ArrowButton/ArrowNext";
import ArrowPrev from "../../../components/ArrowButton/ArrowPrev";
import { address } from "Config/config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.scss";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />
};

class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_winter: [],
      product_barcelona: [],
      product_guide: []
    };
  }
  componentDidMount = () => {
    fetch(`${address}product/tour`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          product_winter: res.data[0].offers,
          product_barcelona: res.data[1].offers,
          product_guide: res.data[2].offers
        });
      });
  };

  render() {
    return (
      <>
        <div className="product_slider_container">
          <h2>겨울에도 꿀잼 보장🍯</h2>
          <Slider {...settings} className="product_slider">
            {this.state.product_winter.map((product_w, i) => {
              return <Product data={product_w} key={i}></Product>;
            })}
          </Slider>
        </div>
        <div className="product_tour">
          <h2>바르셀로나에서 만난 인생 투어🌞</h2>
          <div className="product_tour_container">
            {this.state.product_barcelona.map((product_b, i) => {
              return <Product data={product_b} key={i}></Product>;
            })}
          </div>
        </div>

        <div className="product_slider_container">
          <h2>마리트 단독! 가이드라이브 패키지</h2>
          <Slider {...settings} className="product_slider">
            {this.state.product_guide.map((product_g, i) => {
              return <Product data={product_g} key={i}></Product>;
            })}
          </Slider>
        </div>
      </>
    );
  }
}

export default ProductSlider;
