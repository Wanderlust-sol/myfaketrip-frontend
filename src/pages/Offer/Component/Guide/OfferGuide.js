import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Show from "../../../../components/WithMore/Show";
import Hide from "../../../../components/WithMore/Hide";
import "./OfferGuide.scss";

class OfferGuide extends Component {
  render() {
    return (
      <div className="offer_main_guide">
        <div className="offer_main_guide_header">
          <div className="guide_profile">
            <img src={this.props.data.guide_image} alt="guide" />
            <span>{this.props.data.guide_name}</span>
          </div>
          <button>
            <div className="guide_message">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgNWwtNiAzLjc1TDEuNSA1VjMuNWw2IDMuNzUgNi0zLjc1VjV6bTAtM2gtMTJDLjY3NSAyIC4wMDggMi42NzUuMDA4IDMuNUwwIDEyLjVjMCAuODI1LjY3NSAxLjUgMS41IDEuNWgxMmMuODI1IDAgMS41LS42NzUgMS41LTEuNXYtOWMwLS44MjUtLjY3NS0xLjUtMS41LTEuNXoiLz4KPC9zdmc+Cg=="
                alt="message-icon"
              />
              문의하기
            </div>
          </button>
        </div>
        <div className="offer_main_guide_content">
          <div
            className={
              !this.props.withmore2 ? "guide_content-detail" : "more_visible"
            }
          >
            {ReactHtmlParser(this.props.data.guide_description)}
          </div>
          <div
            className="guide_content-more"
            onClick={this.props.withMoreClick2}
          >
            {!this.props.withmore2 ? <Show>더 보기</Show> : <Hide>접기</Hide>}
          </div>
        </div>
      </div>
    );
  }
}

export default OfferGuide;
