import React, { Component } from "react";
import CategoryProduct from "../../../components/Product/CategoryProduct";
import "./CategoryForm.scss";

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_product: []
    };
  }

  render() {
    return (
      <>
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
        <CategoryProduct />
      </>
    );
  }
}

export default CategoryForm;
