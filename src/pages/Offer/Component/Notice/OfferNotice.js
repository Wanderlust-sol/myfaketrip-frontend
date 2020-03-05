import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import Show from "components/WithMore/Show";
import Hide from "components/WithMore/Hide";
import Map from "components/Map/Map";
import "./OfferNotice.scss";

class OfferNotice extends Component {
  render() {
    return (
      <div>
        <div className="offer_main_note">
          <div className="offer_main_note_content">
            <div
              className={
                !this.props.withmore1 ? "note_with_more" : "more_visible"
              }
            >
              <h4>포함사항</h4>
              <p>{ReactHtmlParser(this.props.data.amenity)}</p>
              <h4>불포함사항</h4>
              <p>{ReactHtmlParser(this.props.data.non_amenity)}</p>
            </div>
          </div>
          <div
            className="offer_main_note_with-more"
            onClick={this.props.withMoreClick1}
          >
            {!this.props.withmore1 ? <Show>더 보기</Show> : <Hide>접기</Hide>}
          </div>
        </div>
        <hr />
        <div className="offer_main_meeting-time">
          <h1>만나는 시간</h1>
          <h5>{this.props.data.meeting_time}</h5>
        </div>
        <hr />
        <div className="offer_main_meeting-point">
          <h1>만나는 장소</h1>
          <div>
            <div>
              <img
                className="map-icon"
                src="https://www.myrealtrip.com/webpack/63a3141ac6b918b94f2b1688ffc92fb4.png"
                alt="map-icon"
              />
            </div>
            <div className="offer_main_meeting-point-detail">
              <p className="detail-title">{this.props.data.address}</p>
              {this.props.mapmore && <Map data={this.props.data} />}
              <div onClick={this.props.mapMoreClick}>
                {!this.props.mapmore ? (
                  <Show>지도 보기</Show>
                ) : (
                  <Hide>지도 숨기기</Hide>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OfferNotice;
