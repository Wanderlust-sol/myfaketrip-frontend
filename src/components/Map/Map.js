import React, { Component } from "react";
import "./Map.scss";

class Map extends Component {
  constructor(props) {
    super();
  }
  render() {
    console.log(this.props.data);
    return (
      <div className="map">
        <img
          className="meeting_point_photo"
          // src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.data.latitude},${this.props.data.longitude}&zoom=18&scale=1&size=344x218&maptype=roadmap&markers=color:red%7Clabel:E%7C41.392529,2.16502119999996&key=AIzaSyAiD8BlI1lSLUnHeL6JvpnLVklMa35N4WM`}
          src={`https://maps.googleapis.com/maps/api/staticmap?center=41.392529,2.16502119999996&zoom=18&scale=1&size=344x218&maptype=roadmap&markers=color:red%7Clabel:E%7C41.392529,2.16502119999996&key=AIzaSyAiD8BlI1lSLUnHeL6JvpnLVklMa35N4WM`}
          alt="google-map"
        />
        <img
          className="meeting_point_photo"
          src="https://d2ur7st6jjikze.cloudfront.net/meeting_point/30162_medium_1544223755.jpg?1544223755"
          alt="meeting-point"
        />
      </div>
    );
  }
}

export default Map;
