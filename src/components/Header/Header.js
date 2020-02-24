import React, { Component } from "react";
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        {/* header */}
        <div className="headerTop container">
          <div className="logo">
            <h1>
              <a href="1.html">MyFakeTrip</a>
            </h1>
          </div>
          <div className="myPage">
            <div className="partners">
              <a href="1.html">파트너 등록하기</a>
            </div>
            <div className="logIn">
              <a href="1.html">로그인</a>
            </div>
            <div className="signUp">
              <a href="1.html">회원가입</a>
            </div>
          </div>
        </div>
        {/* nav */}
        <nav className="menu container">
          <div>
            <ul>
              <li><a href="1.html">투어&#38;티켓</a></li>
              <li><a href="2.html">항공권</a></li>
              <li><a href="3.html">숙소</a></li>
              <li><a href="4.html">특가여행</a></li>
              <li><a href="5.html">패키지</a></li>
              <li><a href="6.html">여행자보험</a></li>
              <li><a href="7.html">여행준비</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

