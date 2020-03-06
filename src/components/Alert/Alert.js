import React, { Component } from "react";
import { MdClose } from "react-icons/md";
import "./Alert.scss";

class Alert extends Component {
  render() {
    return (
      <div className="alert">
        <div className="alert_content">
          <div>
            <MdClose
              className="alert_close"
              onClick={this.props.reviewToggleClose}
            />
          </div>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export default Alert;
