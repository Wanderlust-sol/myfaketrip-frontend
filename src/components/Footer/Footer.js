import React, { Component } from "react";
// import {data} from './Footerdata';
import '../../styles/Reset.scss';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* footer메뉴부분 */}
        <div className="footerTop container">
          <div className="cs">
            <h3>고객센터</h3>
            <h5>1670-8208</h5>
            <p>
              <span>일반문의</span>09:00-22:00
              <span>&#47;실시간 항공권 문의</span>09:00-18:00
            </p>
            <p>
              <span>연중무휴&#47;점심</span>12:00-13:00
            </p>
            <button>1:1 채팅상담</button>
          </div>
          <div className="footNav">
            <div className="footIntro">
              <h3>소개</h3>
              <ul>
                <li><a href="1.html">회사소개</a></li>
                <li><a href="1.html">채용</a></li>
              </ul>
            </div>
            <div className="footPartner">
              <h3>파트너</h3>
              <ul>
                <li><a href="1.html">파트너 등록하기</a></li>
                <li><a href="1.html">Affiliate 프로그램</a></li>
                <li><a href="1.html">리얼가이드</a></li>
                <li><a href="1.html">가이드 블로그</a></li>
              </ul>
            </div>
            <div className="footQna">
              <h3>지원</h3>
              <ul>
                <li><a href="1.html">자주 묻는 질문</a></li>
                <li><a href="1.html">최저가 보장제</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer하단부분 */}
        <div className="footerBottom container">
          <div className="footLeft">
            <ul>
              <li><a href="1.html">이용 약관</a></li>
              <li><a href="1.html">개인정보 처리방침</a></li>
              <li><a href="1.html">취소 및 환불 정책</a></li>
            </ul>
          </div>
          <div className="footRight">
            <ul>
              <li><a href="1.html"><img src="../../img/023-facebook.svg" alt="facebook"/></a></li>
              <li><a href="1.html"><img src="" alt="naverblog"/></a></li>
              <li><a href="1.html"><img src="" alt="insta"/></a></li>
              <li><a href="1.html"><img src="" alt="youtube"/></a></li>
              <li><a href="1.html"><img src="" alt="apple"/></a></li>
              <li><a href="1.html"><img src="" alt="playstore"/></a></li>
            </ul>
          </div>
         
          <p></p>
          <p></p>
        </div>
      </footer>
    );
  }
}

export default Footer;
