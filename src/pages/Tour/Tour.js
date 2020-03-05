import React, { Component } from "react";
import Search from "./TourComponent/Search";
import Cities from "../../components/Cities/Cities";
import Product from "../../components/Product/Product";
import TourSlider from "./TourComponent/TourSlider";
import TourPoint from "./TourComponent/TourPoint";
import ProductSlider from "./TourComponent/ProductSlider";
import TourInfo from "./TourComponent/TourInfo";
import Layout from "../../components/Layout/Layout";
import "./Tour.scss";

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
      product: [],
      product_tour: [],
      product_guide: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/product.json")
      .then(res => res.json())
      .then(res => {
        console.log("firstly: ", res.product);
        this.setState({
          product: res.product
        });
      });
    fetch("http://localhost:3000/data/product_package.json")
      .then(res => res.json())
      .then(res => {
        console.log("firstly: ", res.product);
        this.setState({
          product_tour: res.product_guide,
          product_guide: res.product_package
        });
      });
  };

  render() {
    const products = this.state.product.map((product, i) => {
      return <Product data={product} key={i}></Product>;
    });

    const products_tour = this.state.product_tour.map((product, i) => {
      return <Product data={product} key={i}></Product>;
    });

    const products_guide = this.state.product_guide.map((product, i) => {
      return <Product data={product} key={i}></Product>;
    });

    return (
      <Layout>
        <div className="Tour">
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

              <ProductSlider></ProductSlider>

              <div className="product_tour">
                <h2>바르셀로나에서 만난 인생 투어🌞</h2>
                <div className="product_lately_wrapper">{products_tour}</div>
              </div>

              <div className="product_package">
                <h2>마리트 단독! 가이드라이브 패키지</h2>
                <div className="product_lately_wrapper">{products_guide}</div>
              </div>

              <TourInfo></TourInfo>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Tour;
