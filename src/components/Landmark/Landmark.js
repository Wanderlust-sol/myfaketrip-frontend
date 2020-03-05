import React, { Component } from "react";
import "./Landmark.scss";

class Landmark extends Component {
  render() {
    return (
      <>
        <div
          className="place_container"
          style={{ backgroundImage: `url(${this.props.data.landmark_img})` }}
        >
          <div className="place_bg"></div>
          <div className="landmark_tag">{this.props.data.landmark_tag}</div>
          <div className="landmark_count">{this.props.data.landmark_count}</div>
        </div>
      </>
    );
  }
}

export default Landmark;
