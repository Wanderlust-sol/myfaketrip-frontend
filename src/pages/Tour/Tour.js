import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Search from "./TourComponent/Search";
import Cities from "../../components/Cities/Cities";
import TourSlider from "./TourComponent/TourSlider";
import TourPoint from "./TourComponent/TourPoint";
import ProductSlider from "./TourComponent/ProductSlider";
import Product from "../../components/Product/Product";
import TourInfo from "./TourComponent/TourInfo";
import Footer from "../../components/Footer/Footer";
import "./Tour.scss";

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
      product: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/product.json")
      .then(res => res.json())
      .then(res => {
        console.log("firstly: ", res.product);
        this.setState(
          {
            product: res.product
          },
          () => console.log(this.state.product)
        );
      });
  };

  render() {
    const products = this.state.product.map((product, i) => {
      return <Product data={product} key={i}></Product>;
    });

    return (
      <div className="Tour">
        <Header />
        <div className="topMargin">
          <div className="article">
            <Search></Search>
            <Cities></Cities>
          </div>

          <div className="section">
            <TourSlider></TourSlider>
            <TourPoint></TourPoint>

            <div className="product_lately">
              <h2>최근 본 상품</h2>
              <div className="product_lately_wrapper">{products}</div>
            </div>

            <div className="product_winter">
              <h2>겨울에도 꿀잼 보장🍯</h2>
              <ProductSlider></ProductSlider>
            </div>

            <div className="product_tour">
              <h2>바르셀로나에서 만난 인생 투어🌞</h2>
              <div className="product_lately_wrapper">{products}</div>
            </div>

            <div className="product_package">
              <h2>마리트 단독! 가이드라이브 패키지</h2>
              <div className="product_lately_wrapper">{products}</div>
            </div>

            <TourInfo></TourInfo>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Tour;
