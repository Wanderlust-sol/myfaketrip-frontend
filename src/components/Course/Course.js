import React, { Component } from "react";
import "./Course.scss";
import spain1 from "../../img/spain1.jpg";

class Course extends Component {
  render() {
    return (
      <div>
        <div className="offer_main_course_content">
          <div className="offer_main_course_map-wrapper">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDE4Yy00LTQuNDA5LTYtNy43MjYtNi05Ljk1M0M0IDQuNzA3IDYuNjg2IDIgMTAgMnM2IDIuNzA3IDYgNi4wNDdjMCAyLjIyNy0yIDUuNTQ0LTYgOS45NTN6bTAtNy43NWEyLjI1IDIuMjUgMCAxIDAgMC00LjUgMi4yNSAyLjI1IDAgMCAwIDAgNC41eiIvPgo8L3N2Zz4K"
              alt="map-icon"
            />
            <div className="offer_main_course_map-line"></div>
          </div>
          <div className="offer_main_course_desc">
            <div className="offer_main_course_desc-title">
              ☞ 까사바뜨요 (외부관람)
            </div>
            <div className="offer_main_course_desc-detail">
              바뜨요씨는 누구?
              <br />
              그 당시 부자들의 유행이 있었다는데~?
              <br />
              바르셀로나 앞 지중해를 담은 듯한 아름다운 집 까사바뜨요
              <br />
              까딸루냐의 신화 산조르디 전설 까지 가우디의 민족정신과 신앙심
              그리고 자연에 대한 사랑까지
              <br />
              까사바뜨요 앞에서 이야기가 3가지! 이 모든 이야기들을 만나보아요!
            </div>
          </div>
          <img className="course_photo" src={spain1} alt="casa-batllo" />
        </div>
      </div>
    );
  }
}

export default Course;
