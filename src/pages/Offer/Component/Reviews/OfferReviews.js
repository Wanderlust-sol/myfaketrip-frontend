import React, { Component } from "react";
import Comment from "components/Comment/Comment";
import AddComment from "components/Comment/AddComment";
import Alert from "components/Alert/Alert";
import { MdStar } from "react-icons/md";
import { address } from "Config/config";

import "./OfferReviews.scss";

class OfferReviews extends Component {
  constructor() {
    super();
    this.state = {
      grade: 0,
      comments: "",
      data: [],
      review_id: 0,
      review_list: [],
      review_toggle: false
    };
  }

  reviewToggleClose = () => {
    this.setState({ review_toggle: false });
  };

  editReview = (id, grade, content) => {
    this.setState({ review_id: id, grade: Number(grade), comments: content });
  };

  deleteReview = id => {
    fetch(`${address}review/30162/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("wtw-token")
      }
    })
      .then(res => {
        res.status === 401
          ? this.setState({ review_toggle: true })
          : this.handleGet();
      })
      .catch(error => {
        console.error(error);
      });
  };

  gradeChange = grade => {
    this.setState({ grade: grade });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleGet = () => {
    fetch(`${address}review/30162`)
      .then(res => res.json())
      .then(res => {
        this.setState({ review_list: res.Review_list });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleSend = () => {
    if (this.state.review_id === 0) {
      fetch(`${address}review/30162`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("wtw-token")
        },
        body: JSON.stringify({
          content: this.state.comments,
          rating: this.state.grade.toFixed(1)
        })
      })
        // .then(res => res.json())
        .then(res => {
          this.handleGet();
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      fetch(`${address}review/30162/${this.state.review_id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("wtw-token")
        },
        body: JSON.stringify({
          content: this.state.comments,
          rating: this.state.grade.toFixed(1)
        })
      })
        // .then(res => res.json())
        .then(res => {
          res.status === 401
            ? this.setState({ review_toggle: true })
            : this.handleGet();
          this.setState({ review_id: 0 });
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.handleSend();
    this.setState({ grade: 0, comments: "" });
  };

  componentDidMount() {
    this.handleGet();
  }

  render() {
    const postReview = this.state.review_list.map(item => {
      return (
        <Comment
          data={item}
          key={item.id}
          editReview={(id, grade, content) =>
            this.editReview(id, grade, content)
          }
          deleteReview={id => this.deleteReview(id)}
        />
      );
    });

    return (
      <>
        <div className="offer_main_reviews">
          <div className="offer_main_reviews_header">
            <span>후기</span>
            <span className="reviews_num">{this.state.review_list.length}</span>
          </div>
          <div className="offer_main_reviews_detail">
            <div className="detail_rating">
              <p className="detail_rating-average">
                {Number(this.props.data.average_rating).toFixed(1)}
              </p>
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
          <AddComment
            onSubmit={this.onSubmit}
            handleChange={this.handleChange}
            comments={this.state.comments}
            gradeChange={this.gradeChange}
            grade={this.state.grade}
            review_toggle={this.state.review_toggle}
          />

          <div className="offer_main_reviews_list">
            <div className="reives_list_with_more">{postReview}</div>
            <div className="offer_main_reviews_list_hidden hidden_none">
              <button className="review_more_btn">
                후기 더 보기
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyIDZsLTQuMDAyIDRMNCA2LjAwNSIvPgo8L3N2Zz4K"
                  alt="down-arrow-icon"
                />
              </button>
            </div>
          </div>
        </div>
        {this.state.review_toggle && (
          <Alert reviewToggleClose={this.reviewToggleClose}>
            해당 유저가 아닙니다. 해당 ID로 로그인 후 시도해 주시기 바랍니다.
          </Alert>
        )}
      </>
    );
  }
}

export default OfferReviews;
