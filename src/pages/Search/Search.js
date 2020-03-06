import React, { Component } from "react";
import Layout from "../Layout/Layout";
import SearchPlaceHeader from "./SearchComponent/SearchPlaceHeader";
import ProductCategories from "./SearchComponent/ProductCategories";
import SearchProduct from "./SearchComponent/SearchProduct";
import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header_data: [],
      main_data: []
    };
  }

  componentDidMount = () => {
    const queryId = this.props.location.search.split("=")[1];
    fetch(`http://10.58.6.221:8001/product/search?query=${queryId}`)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            header_data: res.background_data[0],
            main_data: res.product_data[0]
          },
          () => {
            console.log(this.state.main_data);
          }
        );
      });
  };

  render() {
    return (
      <Layout>
        <div className="search_container">
          <SearchPlaceHeader data={this.state.header_data}></SearchPlaceHeader>
          <ProductCategories data={this.state.header_data}></ProductCategories>
          <SearchProduct
            data={
              this.state.main_data.offers !== undefined && this.state.main_data
            }
          ></SearchProduct>
        </div>
      </Layout>
    );
  }
}

export default Search;
