import React, { Component } from "react";
import OfferPhotoSlider from "pages/Offer/Component/Photo/OfferPhotoSlider";
import "./Modal.scss";

class Modal extends Component {
  onClick = e => {
    typeof this.props.onClose === "function" && this.props.onClose(e);
  };

  render() {
    return (
      <div className={this.props.show ? "modal-block" : "modal-none"}>
        <div className="modal-main">
          <OfferPhotoSlider data={this.props.data} data2={this.props.data2} />
        </div>
        <div>
          <div className="closebtn" onClick={this.props.onClose}>
            <img
              src="https://d2yoing0loi5gh.cloudfront.net/assets/kitty/gallery/ic_picture_close@2x-f3719d7647186a6d0e5b9725baad1a16f9b0d5e0bbba82e9c196bd8f27bc543b.png"
              alt="close-icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
