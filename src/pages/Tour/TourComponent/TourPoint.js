import React, { Component } from "react";
import "./TourPoint.scss";

class TourPoint extends Component {
  render() {
    return (
      <div className="point_box">
        <p>
          <img
            src="https://www.myrealtrip.com/webpack/04805fd6ae2e4dd1317124b6cf1c89fb.svg"
            alt="add"
          />
        </p>
        <div>
          <p className="point_title">
            친구 초대하면
            <span> 무제한 포인트</span>를 드립니다!
          </p>
          <p className="point_sub">
            친구에게 5,000원 쿠폰을 선물하고 2,000 포인트를 받으세요.
          </p>
        </div>
        <button>포인트 받기</button>
      </div>
    );
  }
}

export default TourPoint;
