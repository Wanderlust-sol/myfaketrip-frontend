import React, { Component } from "react";
import { MdStar, MdStarBorder } from "react-icons/md";
import "./Comment.scss";

class Comment extends Component {
  render() {
    const stars = [];
    const getStars = rating => {
      for (let i = 0; i < rating; i++) {
        stars.push(<MdStar key={i} className="star_blue" />);
      }
      for (let i = 0; i < 5 - rating; i++) {
        stars.push(<MdStarBorder key={i + 100} className="star_blue" />);
      }
      return stars;
    };

    return (
      <div id={this.props.data.id}>
        <div className="reviews_list_wrapper">
          <div>
            {/* <div className="reviews_list-photo">
              <img src="https://d2ur7st6jjikze.cloudfront.net/reviews/30162/862788_large_1582237991.jpg?1582237991" />
            </div> */}
            <div>
              <div className="reviews_list-star">
                {getStars(this.props.data.grade)}
              </div>
              <p className="reviews_list-writer">백은미</p>
            </div>
            <div className="reviews_list-purpose">
              {/* 40대 ∙ 혼자 가는 여행 ∙  */}
              {this.props.data.date.slice(0, 10)}
            </div>
          </div>
          <div className="reviews_list-content">{this.props.data.content}</div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Comment;
