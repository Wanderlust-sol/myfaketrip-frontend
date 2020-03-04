import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import "./OfferIntro.scss";

class OfferIntro extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="offer_main_intro-wrapper">
        <div className="offer_main_intro">
          <div className="offer_main_intro_subtitle">
            {this.props.data.description_title}
          </div>
          <div className="offer_main_intro_detail">
            <div className="intro_with-more">
              {ReactHtmlParser(this.props.data.description)}
            </div>
            <div className="intro_with-more-hidden none">
              <button className="moreBtn">
                상세 더보기
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyIDZsLTQuMDAyIDRMNCA2LjAwNSIvPgo8L3N2Zz4K"
                  alt="arrow-icon"
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="offer_main_intro_notice">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2Utd2lkdGg9IjEuMjUiIGQ9Ik0xOS4zNzUgMTBhOS4zNzUgOS4zNzUgMCAxIDAtMTguNzUgMCA5LjM3NSA5LjM3NSAwIDAgMCAxOC43NSAweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzQ5NTA1NiIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBkPSJNMTAuNDE3IDE0LjUxNVY4LjQ4MUg4LjI5TTcuNjI2IDE0Ljk1OWg1LjUwNyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGQ9Ik0xMS4wMyA1LjcxNmEuOTMuOTMgMCAwIDEtLjkzNC45MjguOTMuOTMgMCAwIDEtLjkzNC0uOTI4LjkzLjkzIDAgMCAxIC45MzQtLjkyOS45My45MyAwIDAgMSAuOTM1LjkyOXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
            alt="notice-icon"
          />
          <h5>{this.props.data.notice_title}</h5>
          <p>{ReactHtmlParser(this.props.data.notice)}</p>
        </div>
      </div>
    );
  }
}

export default OfferIntro;
