import React, { Component } from "react";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";
import "./OfferProduct.scss";

class OfferProduct extends Component {
  render() {
    const stars = [];
    const getStars = rating => {
      for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<MdStar key={i + 200} className="star_blue" />);
      }
      for (let i = 0; i < Math.ceil(rating) - Math.floor(rating); i++) {
        stars.push(<MdStarHalf key={i + 100} className="star_blue" />);
      }
      for (let i = 0; i < 5 - Math.ceil(rating); i++) {
        stars.push(<MdStarBorder key={i} className="star_blue" />);
      }
      return stars;
    };

    return (
      <div className="other_product_container">
        <div className="other_product_img">
          <img src={this.props.data.thumnail} alt="productimg" />
          <div className="other_wishlist">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjEwNSAxOS41ODZsNy4wMTItNy4wMTJhNC41ODMgNC41ODMgMCAxIDAtNi40ODItNi40ODJsLS41My41My0uNTMtLjUzYTQuNTgzIDQuNTgzIDAgMCAwLTYuNDgzIDYuNDgybDcuMDEzIDcuMDEyeiIvPgo8L3N2Zz4K"
              alt="wishlist"
              role="button"
            />
          </div>
        </div>
        <div className="other_product_cnt">
          <div className="other_category">
            <span>{this.props.data.product_type}</span>
            <span> ・ </span>
            <span>{this.props.data.city_name}</span>
          </div>
          <h3 className="other_product_title">{this.props.data.name}</h3>
          <div className="other_product_info">
            <div className="other_review">
              {getStars(this.props.data.review_grade)}
              <span>{this.props.data.review_count}</span>
            </div>
            <div className="other_price">
              <span
                className="other_price_origin"
                style={{
                  marginRight: this.props.data.origin_price ? "4px" : "0px"
                }}
              >
                {this.props.data.origin_price
                  ? this.props.data.origin_price.toLocaleString() + "원"
                  : null}
              </span>
              <span className="other_price_main">
                {this.props.data.price.toLocaleString()}
                <span>원</span>
              </span>
              <span className="other_price_standard">/ 1인</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferProduct;
