import React, { Component } from "react";
import Layout from "../../components/Layout/Layout";
import PackageSelect from "./PackageComponent/PackageSelect";
import PackageSlider from "./PackageComponent/PackageSlider";
import PackageGuideProduct from "./PackageComponent/PackageGuideProduct";
import PackageProductSlider from "./PackageComponent/PackageProductSlider";
import "./Package.scss";

class Package extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className="package_container">
            <PackageSelect />
            <div className="package_section">
              <PackageSlider />
              <PackageGuideProduct />
              <PackageProductSlider />
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default Package;
