import React, { Component } from "react";
import Modal from "../../../../components/Modal/Modal";
import "./OfferPhoto.scss";

class OfferPhoto extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <Modal show={this.state.show} onClose={this.showModal}>
          Message in Modal
        </Modal>
        <div className="offer_main_photos">
          <div
            className="offer_main_photos_view"
            role="button"
            onClick={this.showModal}
          >
            <ul>
              <li>
                <div
                  className="photo_big"
                  style={{
                    backgroundImage: `url(${this.props.data.image_info})`
                  }}
                >
                  <div className="photo_zoom">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjcuMjUiLz4KICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNOCA1LjMzM3Y1LjMzNE01LjMzMyA4aDUuMzM0Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                      alt="zoom-icon"
                    />
                    <p>크게 보기</p>
                  </div>
                </div>
              </li>
              <li className="photo_grid">
                <div
                  className="photo_small"
                  style={{
                    backgroundImage: `url(${this.props.data.image_info})`
                  }}
                ></div>
                <div
                  className="photo_small"
                  style={{
                    backgroundImage: `url(${this.props.data.image_info})`
                  }}
                ></div>
                <div
                  className="photo_small"
                  style={{
                    backgroundImage: `url(${this.props.data.image_info})`
                  }}
                >
                  <div className="photo_cover"></div>
                  <p>+1</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default OfferPhoto;
