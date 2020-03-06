import React, { Component } from "react";
import TourSearch from "./TourComponent/TourSearch";
import Cities from "./TourComponent/Cities/Cities";
import Product from "../../components/Product/Product";
import TourSlider from "./TourComponent/TourSlider";
import TourPoint from "./TourComponent/TourPoint";
import ProductSlider from "./TourComponent/ProductSlider";
import TourInfo from "./TourComponent/TourInfo";
import Layout from "components/Layout/Layout";
import { address } from "Config/config";
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
    fetch(`${address}product/tour`)
      .then(res => res.json())
      .then(res => {
        console.log("firstly: ", res.product);
        this.setState({
          product: res.data[1].offers
        });
      });
  };

  render() {
    return (
      <Layout>
        <div className="Tour">
          <div className="topMargin">
            <div className="article">
              <TourSearch />
              <Cities></Cities>
            </div>

            <div className="section">
              <TourSlider></TourSlider>
              <TourPoint></TourPoint>

              <div className="product_lately">
                <h2>최근 본 상품</h2>
                <div className="product_lately_wrapper">
                  {this.state.product.map((product, i) => {
                    return <Product data={product} key={i}></Product>;
                  })}
                </div>
              </div>

              <ProductSlider></ProductSlider>

              <TourInfo></TourInfo>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Tour;
