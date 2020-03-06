import React, { Component } from "react";
import Layout from "../Layout/Layout";
import PackageSelect from "./PackageComponent/PackageSelect";
import PackageSlider from "./PackageComponent/PackageSlider";
import PackageGuideProduct from "./PackageComponent/PackageGuideProduct";
import "./Package.scss";

class Package extends Component {
  render() {
    return (
      <Layout>
        <div className="package_container">
          <PackageSelect />
          <div className="package_section">
            <PackageSlider />
            <PackageGuideProduct />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Package;
