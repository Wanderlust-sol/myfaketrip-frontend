import React, { Component } from "react";
import "./OfferSide.scss";

class OfferSide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={this.props.fixed ? "offer_side" : "offer_side_fixed"}
        style={{
          right: !this.props.fixed && (this.props.innerWidth - 1061) / 2 - 7,
          top:
            this.props.prevScrollpos > this.props.bottom &&
            80 - (this.props.prevScrollpos - this.props.bottom)
        }}
      >
        <div className="side_container">
          <div className="offer_side_main-box">
            <div className="offer_side_main-box_body">
              <div>
                <div className="main-box_body-price">
                  <span className="price-main">
                    {this.props.price_info &&
                      this.props.price_info[0].price.toLocaleString()}
                  </span>
                  <span className="price-won">원</span>
                  <span className="price-perperson">/1인</span>
                </div>
                <div className="main-box_body-share">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2Utd2lkdGg9IjEuMjUiPgogICAgICAgIDxjaXJjbGUgY3g9IjYuMjIyIiBjeT0iMTIiIHI9IjIuMjIyIi8+CiAgICAgICAgPGNpcmNsZSBjeD0iMTcuNDQ0IiBjeT0iNi4yMjIiIHI9IjIuMjIyIi8+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTE0LjUgNy41bC01LjYxMSAyLjgzMyIvPgogICAgICAgIDxjaXJjbGUgY3g9IjE3LjQ0NCIgY3k9IjE3Ljc3OCIgcj0iMi4yMjIiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMzUuNTU2KSIvPgogICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIGQ9Ik0xNC41IDE2LjVsLTUuNjExLTIuODMzIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                    alt="share-icon"
                  />
                </div>
              </div>
              <table className="main-box_body_table">
                <tbody>
                  <tr>
                    <td className="main-box_traveler">1~7인</td>
                    <td className="main-box_travel-price">
                      {this.props.price_info &&
                        this.props.price_info[0].price.toLocaleString()}
                      원
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <button className="main-box_body-booking">예약하기</button>
              </div>
              <div>
                <button className="main-box_body-wish">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjEwNSAxOS41ODZsNy4wMTItNy4wMTJhNC41ODMgNC41ODMgMCAxIDAtNi40ODItNi40ODJsLS41My41My0uNTMtLjUzYTQuNTgzIDQuNTgzIDAgMCAwLTYuNDgzIDYuNDgybDcuMDEzIDcuMDEyeiIvPgo8L3N2Zz4K"
                    alt="heart-icon"
                  />
                  위시리스트에 담기
                </button>
              </div>
              <p className="main-box_body-wish-num">
                696명이 이 상품을 위시리스트에 담았습니다.
              </p>
            </div>
            <div className="offer_side_main-box_question">
              <div className="main-box_question-guide guide_profile">
                <img src={this.props.data.guide_image} alt="guide" />
                <span>{this.props.data.guide_name}</span>
              </div>
              <div className="main-box_question-message">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiMyQjk2RUQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgNWwtNiAzLjc1TDEuNSA1VjMuNWw2IDMuNzUgNi0zLjc1VjV6bTAtM2gtMTJDLjY3NSAyIC4wMDggMi42NzUuMDA4IDMuNUwwIDEyLjVjMCAuODI1LjY3NSAxLjUgMS41IDEuNWgxMmMuODI1IDAgMS41LS42NzUgMS41LTEuNXYtOWMwLS44MjUtLjY3NS0xLjUtMS41LTEuNXoiLz4KPC9zdmc+Cg=="
                  alt="message-icon"
                />
                문의하기
              </div>
            </div>
          </div>
          <div className="offer_side_second-box">
            <div>
              <img
                src="https://www.myrealtrip.com/webpack/4fde7b029a47d9c9085b1109115b61a6.svg"
                alt="group-tour-icon"
              />
              <p>{this.props.data.group}</p>
            </div>
            <div>
              <img
                src="https://www.myrealtrip.com/webpack/b34853506a08c2451b12ce43faa97855.svg"
                alt="timer-icon"
              />
              <p>{this.props.data.duration}</p>
            </div>
            <div>
              <img
                src="https://www.myrealtrip.com/webpack/2c8393277372adca59f84d8143dd0637.svg"
                alt="globe-icon"
              />
              <p>{this.props.data.language}</p>
            </div>
          </div>
        </div>
        <div className="offer_side_third-box"></div>
      </div>
    );
  }
}

export default OfferSide;
