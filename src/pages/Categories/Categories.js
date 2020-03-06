import React, { Component } from "react";
import Layout from "../Layout/Layout";
import LandmarkSlider from "./CategoriesComponent/LandmarkSlider";
import CategoryList from "./CategoriesComponent/CategoryList";
import CategoryForm from "./CategoriesComponent/CategoryForm";
import "./Categories.scss";

class Categories extends Component {
  render() {
    return (
      <Layout>
        <div className="categories_container">
          <div className="categories_title_container">
            <div className="categories_title">
              <span>스페인</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYgNGw0IDQuMDAyTDYuMDA1IDEyIi8+Cjwvc3ZnPgo="
                alt=""
              />
              <span>바르셀로나</span>
            </div>
            <h2>투어&티켓</h2>
          </div>
          <LandmarkSlider></LandmarkSlider>
          <div className="categories_section">
            <CategoryList />
            <div>
              <CategoryForm />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Categories;
