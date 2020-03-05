import React, { Component } from "react";
import Product from "../../../components/Product/Product";
import "./PackageGuideProduct.scss";

class PackageGuideProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_guide: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/product_package.json")
      .then(res => res.json())
      .then(res => {
        console.log("product_package: ", res.product_guide);
        this.setState({
          product_guide: res.product_guide
        });
      });
  };

  render() {
    const products_guide_package = this.state.product_guide.map((p, i) => {
      return <Product data={p} key={i}></Product>;
    });

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
          {products_guide_package}
        </div>
      </>
    );
  }
}

export default PackageGuideProduct;
