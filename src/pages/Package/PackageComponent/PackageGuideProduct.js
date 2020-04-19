import React, { Component } from "react";
import Product from "../../../components/Product/Product";
import ArrowNext from "../../../components/ArrowButton/ArrowNext";
import ArrowPrev from "../../../components/ArrowButton/ArrowPrev";
import Slider from "react-slick";
import { address } from "Config/config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PackageGuideProduct.scss";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <ArrowNext />,
  prevArrow: <ArrowPrev />
};

class PackageGuideProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_guide: [],
      product_package: []
    };
  }

  componentDidMount = () => {
    fetch(`${address}product/tour`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          product_guide: res.data[1].offers,
          product_package: res.data[2].offers
        });
      });
  };

  render() {
    return (
      <>
        <div className="package_product_title">
          <h2>마리트 X 가이드라이브</h2>
          <span>
            더 보기
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODQ4Qzk0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYgNGw0IDQuMDAyTDYuMDA1IDEyIi8+PC9zdmc+"
              alt="더보기 이미지"
            />
          </span>
        </div>
        <div className="package_product_guide_container">
          {this.state.product_guide.map((p, i) => {
            return <Product data={p} key={i}></Product>;
          })}
        </div>
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
        <Slider {...settings} className="package_product_container">
          {this.state.product_package.map((p, i) => {
            return <Product data={p} key={i}></Product>;
          })}
        </Slider>
      </>
    );
  }
}

export default PackageGuideProduct;
