import React, { Component } from "react";
import { MdStar } from "react-icons/md";
import "./Comment.scss";

class Comment extends Component {
  render() {
    return (
      <div>
        <div className="reviews_list_wrapper">
          <div>
            <div className="reviews_list-photo">
              <img src="https://d2ur7st6jjikze.cloudfront.net/reviews/30162/862788_large_1582237991.jpg?1582237991" />
            </div>
            <div>
              <div className="reviews_list-star">
                <MdStar className="star_blue" />
                <MdStar className="star_blue" />
                <MdStar className="star_blue" />
                <MdStar className="star_blue" />
                <MdStar className="star_blue" />
              </div>
              <p className="reviews_list-writer">이**</p>
            </div>
            <div className="reviews_list-purpose">
              40대 ∙ 혼자 가는 여행 ∙ 2020-02-21
            </div>
          </div>
          <div className="reviews_list-content">
            가우디와 그의 주변에 관한 꼭 필요한 설명을 편안하게 해주셔서
            좋았습니다. 반일 일정이 저에게는 알맞았고, 흥미롭고 관심가는 곳은
            다시 방문하면 좋을 것 같습니다. 투어 마치고 추천해 주신 식당에서의
            점심식사도 만족스러웠습니다.
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
