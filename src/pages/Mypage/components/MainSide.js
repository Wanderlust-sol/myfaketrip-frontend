import React, { Component } from "react";

class MainSide extends Component {
  render() {
    return (
      <div className="mainSide">
        <div className="manageMain">
          <div className="mainPhoto">
            <img
              src="https://d2yoing0loi5gh.cloudfront.net/assets/default/user_profile_image-414acc60b27f0a258bec14c82b70dc361fc6768da9289f924f887bec1fc33849.png"
              alt=""
            />
            <p>{this.props.username}</p>
          </div>
          <div className="mainName mainTitle">
            <div className="profileTitle">이름</div>
            <div className="inner">{this.props.username}</div>
          </div>
          <div className="mainEmail mainTitle">
            <div className="profileTitle">이메일</div>
            <div className="inner">
              {this.props.email}
              <span>인증하기</span>
            </div>
          </div>
          <div className="mainPhone mainTitle">
            <div className="profileTitle">연락처</div>
            <div className="inner">
              +82 010{this.props.phone}
              <span>인증완료</span>
            </div>
          </div>
          <div className="mainSns mainTitle">
            <div className="profileTitle">SNS 연동</div>
            <div className="inner">
              <ul>
                <li>
                  <span className="kakaoImg snsIcon"></span>
                  카카오 연동
                  <span></span>
                </li>
                <li>
                  <span className="facebookImg snsIcon"></span>
                  페이스북 연동
                  <span></span>
                </li>
                <li>
                  <span className="naverImg snsIcon"></span>
                  네이버 연동
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mainPw mainTitle">
            <div className="profileTitle">비밀번호</div>
            <div className="inner">******</div>
          </div>
          <div className="mainPush mainTitle">
            <div className="profileTitle">마케팅 수신동의</div>
            <div className="inner">
              <ul>
                <li>
                  <span>email:</span>수신 중
                </li>
                <li>
                  <span>sms:</span>수신 중
                </li>
                <li>
                  <span>앱 푸시:</span>수신 중
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="manageBank">
          <h2>계좌관리</h2>
          <div className="refund">
            <span>환불계좌</span>
            <span>등록된 계좌가 없습니다.</span>
            <button>계좌 등록</button>
          </div>
        </div>
        <div className="leaveMembership">계정삭제하기</div>
      </div>
    );
  }
}

export default MainSide;
