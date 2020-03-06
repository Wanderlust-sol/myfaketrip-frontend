import React, { Component } from "react";
import "./Partner.scss";

class Partner extends Component {
  render() {
    return (
      <div className="partner">
        <div className="partner_register">
          <div className="partner_register_txt">
            <h1>
              파트너가 되어 <br />
              현지 수익을 만드세요.
            </h1>
            <p>마이페이크트립 파트너</p>
            <button>파트너 등록하기</button>
          </div>
          <div className="partner_register_img">
            <img src="./img/Partner/partner_main.png" />
          </div>
        </div>
        <div className="partner_content">
          <h2>마이페이크트립과 함께 하세요!</h2>
          <ul className="partner_box">
            <li>
              <img src="./img/partner/register.png" />
              <div>
                <h3>무료 등록</h3>
                <p>
                  등록비가 없으며 카드 수수료, 부가가치세를
                  <br />
                  마이페이크트립이 부담합니다.
                </p>
              </div>
            </li>
            <li>
              <img src="./img/partner/register.png" />
              <div>
                <h3>특별한 경험 공유</h3>
                <p>
                  나만의 현지 경험을 공유하고
                  <br />
                  새로운 수익을 만들 수 있습니다.
                </p>
              </div>
            </li>
            <li>
              <img src="./img/partner/register.png" />
              <div>
                <h3>마케팅 지원</h3>
                <p>
                  SNS 및 키워드 광고, 기업 제휴, 쿠폰 할인 등
                  <br />
                  다양한 마케팅 활동을 무료로 받아보세요.
                </p>
              </div>
            </li>
            <li>
              <img src="./img/partner/register.png" />
              <div>
                <h3>편리한 예약/정산 관리</h3>
                <p>
                  언제 어디서나 데스크탑, 모바일로 예약을
                  <br />
                  관리하고 쉽게 정산할 수 있습니다.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="partner_faketrip"></div>
        <div className="partner_faq"></div>
        <div className="register_now"></div>
      </div>
    );
  }
}

export default Partner;
