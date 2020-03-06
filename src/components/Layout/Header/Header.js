import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { address } from "Config/config";
import Search from "components/Layout/Header/Headersearchbox";
import { headerData } from "components/Layout/Header/HeaderData";
import "components/Layout/Header/Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      toggleOn: false,
      username: ""
    };
  }
  componentDidMount = () => {
    if (localStorage.getItem("wtw-token")) {
      fetch(`${address}account/profileupdate`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("wtw-token")
        }
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            username: res.agent_profile.username
          });
        });
    }
  };

  navList = num => {
    this.setState(
      {
        index: num
      },
      () => {
        if (this.state.index === 5) {
          this.props.history.push("/package");
        }
      }
    );
  };
  profileClick = () => {
    this.setState({
      toggleOn: !this.state.toggleOn
    });
  };
  loginClick = () => {
    this.props.history.push("/login/:3");
  };
  signupClick = () => {
    this.props.history.push("/signup/:3");
  };
  logoClick = () => {
    this.props.history.push("/");
  };
  mypageClick = () => {
    this.props.history.push("/mypage/:3");
    window.location.reload();
  };
  logoutClick = () => {
    window.localStorage.clear();
    this.props.history.push("/");
    window.location.reload();
  };

  render() {
    console.log(this.props.location);
    const pathnameSplit = this.props.location.pathname.split(":")[1];
    const pathname = pathnameSplit === "3" ? "loginHeader" : "noone";
    const searchBox = pathnameSplit === "3" && <Search />;
    return (
      <header className={pathname}>
        {/* header */}
        <div className="headerTop container">
          <div className="logo">
            <h1>
              <button onClick={this.logoClick}>MyFakeTrip</button>
            </h1>
          </div>
          {searchBox}
          {localStorage.getItem("wtw-token") ? (
            <div className="myPage">
              <div className="wishList">
                <button>위시리스트</button>
              </div>
              <div className="reserv">
                <button>예약내역</button>
              </div>
              <div className="msg">
                <button>메세지</button>
              </div>
              <div className="wNew">
                <button>알림</button>
              </div>
              <div className="account">
                <button className="accountBtn" onClick={this.profileClick}>
                  <img
                    src="https://d2yoing0loi5gh.cloudfront.net/assets/default/user_profile_image-414acc60b27f0a258bec14c82b70dc361fc6768da9289f924f887bec1fc33849.png"
                    alt="프로필이미지"
                  />
                </button>
                {this.state.toggleOn && (
                  <div className="prCard">
                    <div className="profile">
                      <button className="profileBtn">
                        <img
                          src="https://d2yoing0loi5gh.cloudfront.net/assets/default/user_profile_image-414acc60b27f0a258bec14c82b70dc361fc6768da9289f924f887bec1fc33849.png"
                          alt="프로필이미지"
                        />
                      </button>
                      <div className="name">
                        <p>{this.state.username}</p>
                        <span onClick={this.mypageClick}>프로필 관리</span>
                      </div>
                    </div>
                    <div className="reward">
                      <ul>
                        <li>
                          <span className="pointImg prIcon">포인트</span>
                          <span>포인트</span>
                          <span className="rightBlue">0원</span>
                        </li>
                        <li>
                          <span className="couponImg prIcon">쿠폰</span>
                          <span>쿠폰</span>
                          <span className="rightBlue">1장</span>
                        </li>
                      </ul>
                    </div>
                    <div className="friends">
                      <ul>
                        <li>
                          <span className="friendsImg prIcon">친구초대</span>
                          <span>친구 초대</span>
                        </li>
                      </ul>
                    </div>
                    <div className="logout">
                      <ul>
                        <li>파트너 등록하기</li>
                        <li onClick={this.logoutClick}>로그아웃</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="needLogin">
              <div className="partners">
                <button onClick={this.logoClick}>파트너 등록하기</button>
              </div>
              <div className="logIn">
                <button onClick={this.loginClick}>로그인</button>
              </div>
              <div className="signUpBtn">
                <button onClick={this.signupClick}>회원가입</button>
              </div>
            </div>
          )}
        </div>
        {/* nav */}
        <nav className="menu container">
          <div>
            <ul>
              {headerData.map(el => (
                <li key={el.id}>
                  <div
                    className={this.state.index === el.id && "color"}
                    onClick={() => this.navList(el.id)}
                  >
                    {el.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default withRouter(Header);
