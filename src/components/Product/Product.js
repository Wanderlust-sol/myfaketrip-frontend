import React, { Component } from "react";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";
import "./Product.scss";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stars = [];
    const getStars = rating => {
      if (rating !== Math.floor(rating)) {
        for (let i = 0; i < Math.floor(rating); i++) {
          console.log("i+200", i + 200);
          stars.push(<MdStar key={i + 200} className="star_blue" />);
        }
        for (let i = 0; i < Math.ceil(rating) - Math.floor(rating); i++) {
          console.log("i+100", i + 100);
          stars.push(<MdStarHalf key={i + 100} className="star_blue" />);
        }
        for (let i = 0; i < 5 - Math.ceil(rating); i++) {
          console.log("i", i);
          stars.push(<MdStarBorder key={i} className="star_blue" />);
        }
      } else {
        for (let i = 0; i < Math.floor(rating); i++) {
          stars.push(<MdStar key={i} className="star_blue" />);
        }
        for (let i = 0; i < 5 - Math.floor(rating); i++) {
          stars.push(<MdStarBorder key={i + 100} className="star_blue" />);
        }
      }
      return stars;
    };

    return (
      <div className="product_container">
        <div className="product_img">
          <img src={this.props.data.thumnail} alt="productimg" />
          <div className="wishlist">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjEwNSAxOS41ODZsNy4wMTItNy4wMTJhNC41ODMgNC41ODMgMCAxIDAtNi40ODItNi40ODJsLS41My41My0uNTMtLjUzYTQuNTgzIDQuNTgzIDAgMCAwLTYuNDgzIDYuNDgybDcuMDEzIDcuMDEyeiIvPgo8L3N2Zz4K"
              alt="wishlist"
              role="button"
            />
          </div>
        </div>
        <div className="product_cnt">
          <div className="category">
            <span>{this.props.data.product_type}</span>
            <span> ・ </span>
            <span>{this.props.data.city_name}</span>
          </div>
          <h3 className="product_title">{this.props.data.product_name}</h3>
          <div className="product_info">
            <div className="review">
              <div>{getStars(this.props.data.grade)}</div>
              <span>41</span>
            </div>
            <div className="price">
              <span
                className="price_origin"
                style={{
                  marginRight: this.props.data.origin_price ? "4px" : "0px"
                }}
              >
                {this.props.data.origin_price
                  ? this.props.data.origin_price.toLocaleString() + "원"
                  : null}
              </span>
              <span className="price_main">
                {this.props.data.price.toLocaleString()}
                <span>원</span>
              </span>
              <span className="price_standard">/ 1인</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
