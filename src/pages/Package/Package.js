import React, { Component } from "react";
import Header from "../../components/Header/Header";
import PackageSelect from "./PackageComponent/PackageSelect";
import PackageSlider from "./PackageComponent/PackageSlider";
import PackageGuideProduct from "./PackageComponent/PackageGuideProduct";
import PackageProductSlider from "./PackageComponent/PackageProductSlider";
import Footer from "../../components/Footer/Footer";
import "./Package.scss";

class Package extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="package_container">
          <PackageSelect />
          <div className="package_section">
            <PackageSlider />
            <PackageGuideProduct />
            <PackageProductSlider />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Package;
