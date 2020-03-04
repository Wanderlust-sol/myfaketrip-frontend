import React, { Component } from "react";
import "./OfferPrice.scss";

class OfferPrice extends Component {
  render() {
    return (
      <div className="offer_main_price">
        <div>
          <p className="offer_main_price_title">날짜와 인원을 선택하세요.</p>
          <div className="offer_main_price_question">
            <p className="offer_main_price_question_desc">
              금액 조회하기가 무엇인가요?
            </p>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiB4PSIuNSIgeT0iLjUiIHN0cm9rZT0iIzJCOTZFRCIgcng9IjcuNSIvPgogICAgICAgIDx0ZXh0IGZpbGw9IiMyQjk2RUQiIGZvbnQtZmFtaWx5PSJTRlByb1RleHQtU2VtaWJvbGQsIFNGIFBybyBUZXh0IiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iNTAwIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjUiIHk9IjEyIj4/PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo="
              alt="question-icon"
            />
          </div>
        </div>
        <div className="offer_main_price_wrapper">
          <div className="offer_main_price_date">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNTFBQkYzIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAyKSI+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTEuNSA4Ljc1aDE1Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNC43NS41djJNMTIuNzUuNXYyIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE2LjUiIGhlaWdodD0iMTYuNSIgeD0iLjc1IiB5PSIyLjc1IiByeD0iMiIvPgogICAgPC9nPgo8L3N2Zz4K"
              alt="date-icon"
            />
            날짜 선택
          </div>
          <div className="offer_main_price_option">
            <select className="offer_main_price_select">
              <option>인원 선택</option>
            </select>
          </div>
          <div className="offer_main_price_check-price">
            <button>금액 조회하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferPrice;
