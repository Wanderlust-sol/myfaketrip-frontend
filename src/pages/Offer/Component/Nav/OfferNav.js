import React, { Component } from "react";
import "./OfferNav.scss";

class OfferNav extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className={this.props.visible ? "nav_hidden" : "offer_nav"}>
        <div className="offer_nav_list">
          <span
            className={this.props.navmode === "product" ? "on_color" : null}
            onClick={() => this.props.onClick("product")}
          >
            상품 소개
          </span>
          <span
            id="course"
            className={this.props.navmode === "course" ? "on_color" : null}
            onClick={() => this.props.onClick("course")}
          >
            코스 소개
          </span>
          <span
            id="require"
            className={this.props.navmode === "require" ? "on_color" : null}
            onClick={() => this.props.onClick("require")}
          >
            필수 안내
          </span>
          <span
            id="review"
            className={this.props.navmode === "review" ? "on_color" : null}
            onClick={() => this.props.onClick("review")}
          >
            후기
          </span>
        </div>
      </div>
    );
  }
}

export default OfferNav;
