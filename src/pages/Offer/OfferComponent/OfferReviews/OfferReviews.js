import React, { Component } from "react";
import Comment from "../../../../components/Comment/Comment";
import AddComment from "../../../../components/Comment/AddComment";
import { MdStar } from "react-icons/md";
import "./OfferReviews.scss";

class OfferReviews extends Component {
  render() {
    return (
      <div className="offer_main_reviews">
        <div className="offer_main_reviews_header">
          <span>후기</span>
          <span className="reviews_num">112</span>
        </div>
        <div className="offer_main_reviews_detail">
          <div className="detail_rating">
            <p className="detail_rating-average">4.9</p>
            <div className="detail_rating-star">
              <MdStar className="star" />
              <MdStar className="star" />
              <MdStar className="star" />
              <MdStar className="star" />
              <MdStar className="star" />
            </div>
          </div>
          <div className="detail_stats">
            <div className="detail_stats-title">
              20대, 친구들과 가는 여행으로 구매가 많은 상품
            </div>
            <div className="detail_stats-star-wrapper">
              <div className="detail_stats-stars">
                <MdStar className="star_blue small_star " />
                <MdStar className="star_blue small_star" />
                <MdStar className="star_blue small_star" />
                <MdStar className="star_blue small_star" />
                <MdStar className="star_blue small_star" />
              </div>
              <div className="detail_stats-bar">
                <div className="stats-bar_blue1"></div>
              </div>
              <div className="detail_stats-count">109</div>
            </div>
            <div className="detail_stats-star-wrapper">
              <div className="detail_stats-stars">
                <MdStar className="star_blue small_star" />
                <MdStar className="star_blue small_star" />
                <MdStar className="star_blue small_star" />
                <MdStar className="star_blue small_star" />
              </div>
              <div className="detail_stats-bar">
                <div className="stats-bar_blue2"></div>
              </div>
              <div className="detail_stats-count">2</div>
            </div>
            <div className="detail_stats-star-wrapper">
              <div className="detail_stats-stars">
                <MdStar className="star_blue small_star" />
                <MdStar className="star_blue small_star" />
                <MdStar className="star_blue small_star" />
              </div>
              <div className="detail_stats-bar">
                <div className="stats-bar_blue3"></div>
              </div>
              <div className="detail_stats-count">0</div>
            </div>
            <div className="detail_stats-star-wrapper">
              <div className="detail_stats-stars">
                <MdStar className="star_blue small_star" />
                <MdStar className="star_blue small_star" />
              </div>
              <div className="detail_stats-bar">
                <div className="stats-bar_blue4"></div>
              </div>
              <div className="detail_stats-count">0</div>
            </div>
            <div className="detail_stats-star-wrapper">
              <div className="detail_stats-stars">
                <MdStar className="star_blue small_star" />
              </div>
              <div className="detail_stats-bar">
                <div className="stats-bar_blue5"></div>
              </div>
              <div className="detail_stats-count">1</div>
            </div>
          </div>
        </div>
        <AddComment />
        <div className="offer_main_reviews_list">
          <Comment />
        </div>
      </div>
      //   <div className="offer_main_reviews_list_more">
      //     <button>
      //       후기 더 보기
      //       <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyIDZsLTQuMDAyIDRMNCA2LjAwNSIvPgo8L3N2Zz4K" alt="down-arrow-icon"/>
      //     </button>
      //   </div>
    );
  }
}

export default OfferReviews;
