import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import "./OfferCourse.scss";

class OfferCourse extends Component {
  constructor() {
    super();
    this.state = {
      moreCourse: false
    };
  }
  buttonClick = () => {
    this.setState({ moreCourse: !this.state.moreCourse });
  };
  render() {
    const course_data =
      this.props.data &&
      this.props.data.map(item => {
        return (
          <div className="offer_main_course_content" key={item.id}>
            <div className="offer_main_course_map-wrapper">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDE4Yy00LTQuNDA5LTYtNy43MjYtNi05Ljk1M0M0IDQuNzA3IDYuNjg2IDIgMTAgMnM2IDIuNzA3IDYgNi4wNDdjMCAyLjIyNy0yIDUuNTQ0LTYgOS45NTN6bTAtNy43NWEyLjI1IDIuMjUgMCAxIDAgMC00LjUgMi4yNSAyLjI1IDAgMCAwIDAgNC41eiIvPgo8L3N2Zz4K"
                alt="map-icon"
              />
              <div className="offer_main_course_map-line"></div>
            </div>
            <div className="offer_main_course_desc">
              <div className="offer_main_course_desc-title">{item.name}</div>
              <div className="offer_main_course_desc-detail">
                {ReactHtmlParser(item.description)}
              </div>
            </div>
            <img className="course_photo" src={item.image} alt={item.id} />
          </div>
        );
      });

    return (
      <div className="offer_main_course">
        <p className="offer_main_course_title">코스 소개</p>
        <div className="cousre_with_more">{course_data}</div>
        <div className={!this.state.moreCourse ? "content_last" : "none"}>
          <div className="button_wrapper">
            <button onClick={this.buttonClick}>
              <div>
                코스 더 보기
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyIDZsLTQuMDAyIDRMNCA2LjAwNSIvPgo8L3N2Zz4K"
                  alt="down-arrow-icon"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferCourse;
