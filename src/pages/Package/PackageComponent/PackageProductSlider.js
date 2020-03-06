import React, { Component } from "react";
import Product from "../../../components/Product/Product";
import ArrowNext from "../../../components/ArrowButton/ArrowNext";
import ArrowPrev from "../../../components/ArrowButton/ArrowPrev";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PackageProductSlider.scss";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />
};

class PackageProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_package: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/product_package.json")
      .then(res => res.json())
      .then(res => {
        console.log("product_package: ", res.product_package);
        this.setState({
          product_package: res.product_package
        });
        console.log(this.state.product_package);
      });
  };

  render() {
    return (
      <div className="package_product_wrapper">
        <div className="package_product_title">
          <h2>마리트 엄선! 기분 좋은 패키지</h2>
          <span>
            더 보기
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODQ4Qzk0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYgNGw0IDQuMDAyTDYuMDA1IDEyIi8+PC9zdmc+"
              alt="더보기 이미지"
            />
          </span>
        </div>
        <div className="product_winter">
          <Slider {...settings} className="package_slider_wrapper">
            <div>
              {this.state.product_package.map((p_w, i) => {
                return <Product data={p_w} key={i}></Product>;
              })}
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default PackageProductSlider;
