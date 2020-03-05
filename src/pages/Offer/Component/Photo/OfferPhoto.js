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

  showModal = e => {
    console.log(e.target);
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.show}
          onClose={this.showModal}
          data={this.props.data}
        ></Modal>
        <div className="offer_main_photos">
          <div
            className="offer_main_photos_view"
            role="button"
            onClick={this.showModal}
          >
            <ul>
              <li>
                <div
                  className="photo_1"
                  style={{
                    backgroundImage: `url(${this.props.data[0]})`
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
                  className="photo_2"
                  style={{
                    backgroundImage: `url(${this.props.data[1]})`
                  }}
                ></div>
                <div
                  className="photo_3"
                  style={{
                    backgroundImage: `url(${this.props.data[2]})`
                  }}
                ></div>
                <div
                  className="photo_4"
                  style={{
                    backgroundImage: `url(${this.props.data[3]})`
                  }}
                >
                  <div
                    className={this.props.data.length > 4 ? "photo_cover" : ""}
                  ></div>
                  <p>
                    +{this.props.data.length > 4 && this.props.data.length - 4}
                  </p>
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
