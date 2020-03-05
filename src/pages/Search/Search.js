import React, { Component } from "react";
import Layout from "../Layout/Layout";
import SearchPlaceHeader from "./SearchComponent/SearchPlaceHeader";
import ProductCategories from "./SearchComponent/ProductCategories";
import SearchProduct from "./SearchComponent/SearchProduct";
import "./Search.scss";

class Search extends Component {
  render() {
    return (
      <Layout>
        {console.log(this.props.location.search)}
        <div className="search_container">
          <SearchPlaceHeader></SearchPlaceHeader>
          <ProductCategories></ProductCategories>
          <SearchProduct></SearchProduct>
        </div>
      </Layout>
    );
  }
}

export default Search;
