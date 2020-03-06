import React, { Component } from "react";

class LeftSide extends Component {
  render() {
    return (
      <div className="leftSide">
        <div className="manageReward">
          <div className="photo">
            <div className="photoSide">
              <img
                src="https://d2yoing0loi5gh.cloudfront.net/assets/default/user_profile_image-414acc60b27f0a258bec14c82b70dc361fc6768da9289f924f887bec1fc33849.png"
                alt=""
              />
            </div>
            <div className="userName">{this.props.username}</div>
            <div className="setting">
              <img
                src="https://d2yoing0loi5gh.cloudfront.net/assets/kitty/traveler/reservation/ic_setting@2x-832c08d9d38f208502f94e8d35e78a320024fc5f61630f2eba7801845e1eda78.png"
                alt="setting"
              />
              <span>프로필관리</span>
            </div>
          </div>
          <div className="reward">
            <ul>
              <li>
                <span>내 포인트</span>
                <div className="arrowBlue">
                  <span>0원</span>
                  <span className="rewardArrow">arrow</span>
                </div>
              </li>
              <li>
                <span>내 쿠폰</span>
                <div className="arrowBlue">
                  <span>1장</span>
                  <span className="rewardArrow">arrow</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="invPop">
          <span className="pointImg"></span>
          친구 초대하고 <span className="colorBlue">2,000포인트 </span>
          받기!
        </div>
      </div>
    );
  }
}

export default LeftSide;
