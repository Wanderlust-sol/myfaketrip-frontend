import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Course from "../../components/Course/Course";
import Comment from "../../components/Comment/Comment";
import AddComment from "../../components/Comment/AddComment";
import Show from "../../components/WithMore/Show";
import Hide from "../../components/WithMore/Hide";
import "./Offer.scss";
// import { IoIosOptions } from "react-icons/io";
import { MdStar } from "react-icons/md";
// import spain2 from "../../img/spain2.jpg";
// import spain3 from "../../img/spain3.jpg";
// import spain4 from "../../img/spain4.jpg";
import Lucia from "../../img/Lucia.png";

export default class Offer extends Component {
  constructor() {
    super();
    this.state = {
      withmore1: false,
      withmore2: false
    };
    this.scrollDiv = React.createRef();
  }

  withMoreClick1 = () => {
    if (!this.state.withmore1) {
      this.setState({ withmore1: true });
    } else {
      this.setState({ withmore1: false });
    }
  };

  withMoreClick2 = () => {
    if (!this.state.withmore2) {
      this.setState({ withmore2: true });
    } else {
      this.setState({ withmore2: false });
    }
  };

  //   componentDidMount() {
  //     window.addEventListener("scroll", this.onScroll);
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //       const top = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
  //       (top < 0) &&
  //       return true;
  //   }
  //   onScroll = e => {
  //     const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
  //     this.setState({ scrollTop });
  //   };

  render() {
    return (
      <div>
        <Header style={{ backgroundColor: "#1583db" }} />
        <div className="offer">
          <div className="offer_nav">
            <div className="offer_nav_list">
              <span>상품 소개</span>
              <span>코스 소개</span>
              <span>필수 안내</span>
              <span>후기</span>
            </div>
          </div>
          <div className="offer_container">
            <div className="offer_container_box">
              <div className="offer_main">
                <div className="offer_main_title">
                  [소수/커피제공/택시투어] (오전반일) GAUDI 가우디 바르셀로나
                  건축학개론
                </div>
                <div className="offer_main_inner-bar">
                  <p>
                    <a href="https://www.myrealtrip.com/countries?key_name=Spain">
                      스페인
                    </a>
                  </p>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYgNGw0IDQuMDAyTDYuMDA1IDEyIi8+Cjwvc3ZnPgo="
                    alt="right-arrow-icon"
                  />
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICAgIDxwYXRoIGZpbGw9IiM4NDhDOTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNTcxIDRhMS40MyAxLjQzIDAgMSAxIDIuODU5LjAwMUExLjQzIDEuNDMgMCAwIDEgMy41NyA0ek0xIDRjMCAzIDQgNiA0IDZzNC0zIDQtNmMwLTIuMjExLTEuNzg5LTQtNC00LTIuMjExIDAtNCAxLjc4OS00IDR6Ii8+Cjwvc3ZnPgo="
                    alt="point-icon"
                  />
                  <p>
                    <a href="https://www.myrealtrip.com/cities?key_name=Barcelona">
                      바르셀로나
                    </a>
                  </p>
                  <div className="offer_main_inner-bar-star">
                    <MdStar className="star_blue" />
                    <MdStar className="star_blue" />
                    <MdStar className="star_blue" />
                    <MdStar className="star_blue" />
                    <MdStar className="star_blue" />
                  </div>
                  <p>후기 112개</p>
                </div>
                <div className="offer_main_photos"></div>
                <hr />
                <div className="offer_main_price">
                  <div>
                    <p className="offer_main_price_title">
                      날짜와 인원을 선택하세요.
                    </p>
                    <div className="offer_main_price_question">
                      <p className="offer_main_price_question_desc">
                        금액 조회하기가 무엇인가요?
                      </p>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiB4PSIuNSIgeT0iLjUiIHN0cm9rZT0iIzJCOTZFRCIgcng9IjcuNSIvPgogICAgICAgIDx0ZXh0IGZpbGw9IiMyQjk2RUQiIGZvbnQtZmFtaWx5PSJTRlByb1RleHQtU2VtaWJvbGQsIFNGIFBybyBUZXh0IiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iNTAwIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjUiIHk9IjEyIj4/PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo="
                        alt="question-icon"
                      />
                    </div>
                  </div>
                  <div className="offer_main_price_wrapper">
                    <div className="offer_main_price_date">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNTFBQkYzIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMyAyKSI+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTEuNSA4Ljc1aDE1Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNC43NS41djJNMTIuNzUuNXYyIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE2LjUiIGhlaWdodD0iMTYuNSIgeD0iLjc1IiB5PSIyLjc1IiByeD0iMiIvPgogICAgPC9nPgo8L3N2Zz4K"
                        alt="date-icon"
                      />
                      날짜 선택
                    </div>
                    <div className="offer_main_price_option">
                      <select
                        className="offer_main_price_select"
                        //   style={{
                        //     backgroundImage: <IoIosOptions />
                        //   }}
                      >
                        <option>인원 선택</option>
                      </select>
                    </div>
                    <div className="offer_main_price_check-price">
                      <button>금액 조회하기</button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="offer_main_intro-wrapper">
                  <div className="offer_main_intro">
                    <div className="offer_main_intro_subtitle">
                      바르셀로나 건축학개론
                    </div>
                    <div className="offer_main_intro_detail">
                      <div className="intro_with-more">
                        우리는 여행에서 무엇을 보나요?
                        <br />
                        많은 것들을 눈에 귀에 머리에 몸에 담지만
                        <br />
                        우리가 보는 것은 자연, 사람, 그리고 [건축]입니다.
                        <br />
                        <br />
                        이탈리아 로마에 가면 '바티칸'을 봅니다
                        <br />
                        프랑스 파리에 에 가면 '에펠탑'을 봅니다.
                        <br />
                        스위스 바젤에 가면 '비트라박물관'을 봅니다
                        <br />
                        <br />
                        스페인 바르셀로나는?
                        <br />
                        '안토니오 가우디'를 보러 옵니다.
                        <br />
                        <br />
                        많은 여행자들이 세계적인 천재 건축가 안토니오 가우디의
                        건물들을 보러 바르셀로나에 방문합니다.
                        <br />
                        정말 지금 바르셀로나는 이 천재 건축가 안토니오 가우디가
                        먹여 살린다고 해도 과언이 아닙니다.
                        <br />
                        <br />
                        안토니오 가우디의 건축에 대한 철학과 그의 인생과 그의
                        이야기가 듣고 싶으시다면 ~
                        <br />
                        그리고 낯선 곳에서 가이드와 소통하며 친구가 생긴듯 아는
                        동생이 생긴듯 편안한 마음으로 투어를 즐기고 싶으시다면!
                        <br />
                        바르셀로나 루시아 가이드와 함께 해주세요 :)
                      </div>
                      <div className="intro_with-more-hidden none">
                        <button className="moreBtn">
                          상세 더보기
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyIDZsLTQuMDAyIDRMNCA2LjAwNSIvPgo8L3N2Zz4K"
                            alt="arrow-icon"
                          ></img>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="offer_main_intro_notice">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2Utd2lkdGg9IjEuMjUiIGQ9Ik0xOS4zNzUgMTBhOS4zNzUgOS4zNzUgMCAxIDAtMTguNzUgMCA5LjM3NSA5LjM3NSAwIDAgMCAxOC43NSAweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzQ5NTA1NiIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBkPSJNMTAuNDE3IDE0LjUxNVY4LjQ4MUg4LjI5TTcuNjI2IDE0Ljk1OWg1LjUwNyIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGQ9Ik0xMS4wMyA1LjcxNmEuOTMuOTMgMCAwIDEtLjkzNC45MjguOTMuOTMgMCAwIDEtLjkzNC0uOTI4LjkzLjkzIDAgMCAxIC45MzQtLjkyOS45My45MyAwIDAgMSAuOTM1LjkyOXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                      alt="notice-icon"
                    />
                    <h5>*** 필독 공지 사항 ***</h5>
                    <p>
                      ◈ 예약 전 상품페이지 필독 부탁드립니다.
                      <br />
                      ◈ 현재 예약 가능 한 날짜 이 외의 다른 날짜를 원하시는 분은
                      꼭 가이드와 상담 후 예약진행 부탁드립니다.
                      <br />
                      ◈ 투어 진행 최소 나이 : 만 15세부터
                      <br />
                      <br />
                      - 2월 현재 투어 예약 가능 인원 -
                      <br />
                      2/24 7명
                      <br />
                      2/28 5명
                    </p>
                  </div>
                </div>
                <hr />
                <div className="offer_main_mini-reviews">
                  <div className="offer_main_mini-reviews-left">
                    <p className="mini-reviews-rate">4.9</p>
                    <div className="offer_main_mini-reviews-sub">
                      <div className="mini-reviews-star-rating">
                        <MdStar className="star_black" />
                        <MdStar className="star_black" />
                        <MdStar className="star_black" />
                        <MdStar className="star_black" />
                        <MdStar className="star_black" />
                      </div>
                      <p>후기 112개</p>
                    </div>
                  </div>
                  <div className="offer_main_mini-reviews-right">
                    <div className="mini-reviews-star">
                      <MdStar className="star_blue" />
                      <MdStar className="star_blue" />
                      <MdStar className="star_blue" />
                      <MdStar className="star_blue" />
                      <MdStar className="star_blue" />
                      <p>이**</p>
                    </div>
                    <div className="mini-reviews-stats">
                      40대 ∙ 혼자 가는 여행 ∙ 2020-02-21
                    </div>
                    <div className="mini-reviews-content">
                      가우디와 그의 주변에 관한 꼭 필요한 설명을 편안하게
                      해주셔서 좋았습니다. 반일 일정이 저에게는 알맞았고,
                      흥미롭고 관심가는 곳은 다시 방문하면 좋을 것 같습니다.
                      투어 마치고 추천해 주신 식당에서의 점심식사도
                      만족스러웠습니다.
                    </div>
                    <div className="mini-reviews-with-more">
                      <span
                        onClick={() => {
                          this.scrollDiv.current.scrollIntoView({
                            behavior: "smooth"
                          });
                        }}
                      >
                        후기 전체보기
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMkI5NkVEIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyIDZsLTQuMDAyIDRMNCA2LjAwNSIvPgo8L3N2Zz4K"
                          alt="bottom-arrow-icon"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="offer_main_others">
                  <h5>여행자들이 함께 본 상품</h5>
                  <div></div>
                </div>
                <hr />
                <div className="offer_main_note">
                  <div className="offer_main_note_content">
                    <div
                      className={
                        !this.state.withmore1
                          ? "note_with_more"
                          : "more_visible"
                      }
                    >
                      <h4>포함사항</h4>
                      <p>
                        ▶ 가이드 투어 비용
                        <br />
                        ▶ 커피제공
                        <br />
                        ▶ 무선수신기 무료 대여(개인 이어폰 필수 지참)
                        <br />* 수신기 분실 시 수신기 값 100유로 지불
                        하셔야합니다*
                      </p>
                      <h4>불포함사항</h4>
                      <p>
                        ▶ 입장료 (구엘공원 11유로,성가족성당)
                        <br />
                        ▶ 택시비 (1인 6유로)
                        <br />▶ 개인 이어폰
                      </p>
                    </div>
                  </div>
                  <div
                    className="offer_main_note_with-more"
                    onClick={this.withMoreClick1}
                  >
                    {!this.state.withmore1 ? <Show /> : <Hide />}
                  </div>
                </div>
                <hr />
                <div className="offer_main_meeting-time">
                  <h1>만나는 시간</h1>
                  <h5>오전 8시 50분</h5>
                </div>
                <hr />
                <div className="offer_main_meeting-point">
                  <h1>만나는 장소</h1>
                  <div>
                    <div>
                      <img
                        className="map-icon"
                        src="https://www.myrealtrip.com/webpack/63a3141ac6b918b94f2b1688ffc92fb4.png"
                        alt="map-icon"
                      />
                    </div>
                    <div className="offer_main_meeting-point-detail">
                      <p className="detail-title">버버리 매장 앞</p>
                      <span>
                        지도 보기
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMkI5NkVEIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyIDZsLTQuMDAyIDRMNCA2LjAwNSIvPgo8L3N2Zz4K" />
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="offer_main_course">
                  <p className="offer_main_course_title">코스 소개</p>
                  <Course />

                  {/* <div className="offer_main_course_content">
                    <div className="offer_main_course_map-wrapper">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDE4Yy00LTQuNDA5LTYtNy43MjYtNi05Ljk1M0M0IDQuNzA3IDYuNjg2IDIgMTAgMnM2IDIuNzA3IDYgNi4wNDdjMCAyLjIyNy0yIDUuNTQ0LTYgOS45NTN6bTAtNy43NWEyLjI1IDIuMjUgMCAxIDAgMC00LjUgMi4yNSAyLjI1IDAgMCAwIDAgNC41eiIvPgo8L3N2Zz4K"
                        alt="map-icon"
                      />
                      <div className="offer_main_course_map-line"></div>
                    </div>
                    <div className="offer_main_course_desc">
                      <img src={spain2} alt="casa-batllo" />
                      <div className="offer_main_course_desc-title">
                        ☞까사밀라 (외부관람)
                      </div>
                      <div className="offer_main_course_desc-detail">
                        밀라씨와 가우디 충돌!?
                        <br />
                        까사밀라의 옥상에서부터 대작의 영화가 만들어지게
                        된다는데~?
                        <br />
                        '직선은 사람의 선, 곡선은 신의 선' 가우디가 늘
                        입버릇처럼 했던 말입니다. 까사밀라를 보고 여러분은
                        곡선의 향연이 무엇인지 보시게 될 것입니다.
                        <br />
                        그러나 밀라씨와 밀라씨의 부인은 가우디를 좋아했을까요?
                        가우디의 인생 터닝포인트가 있는 곳. 바로 여기
                        까사밀라입니다.
                      </div>
                    </div>
                  </div>
                  <div className="offer_main_course_content">
                    <div className="offer_main_course_map-wrapper">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDE4Yy00LTQuNDA5LTYtNy43MjYtNi05Ljk1M0M0IDQuNzA3IDYuNjg2IDIgMTAgMnM2IDIuNzA3IDYgNi4wNDdjMCAyLjIyNy0yIDUuNTQ0LTYgOS45NTN6bTAtNy43NWEyLjI1IDIuMjUgMCAxIDAgMC00LjUgMi4yNSAyLjI1IDAgMCAwIDAgNC41eiIvPgo8L3N2Zz4K"
                        alt="map-icon"
                      />
                      <div className="offer_main_course_map-line"></div>
                    </div>
                    <div className="offer_main_course_desc">
                      <img src={spain3} alt="casa-batllo" />
                      <div className="offer_main_course_desc-title">
                        ☞구엘공원 (내부 입장, 가이드동반입장X)
                      </div>
                      <div className="offer_main_course_desc-detail">
                        구엘공원은 사실은 공원이 아니었다!?
                        <br />
                        그리고 구엘씨는 누구인가!?
                        <br />
                        '모든 것은 자연으로부터 비롯된다'
                        <br />
                        자연을 사랑한 안토니오 가우디
                        <br />
                        자연에 대한, 건축물에 대한, 사람에 대한, 가우디의 철학이
                        가감없이 보여지는 구엘공원
                        <br />
                        동화같은 구엘공원에서 산책도 하고 느긋하게 즐기며
                        구엘공원에 얽힌 재미난 에피소드 들어보도록 하겠습니다~
                      </div>
                    </div>
                  </div>
                  <div className="offer_main_course_content">
                    <div className="offer_main_course_map-wrapper">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDE4Yy00LTQuNDA5LTYtNy43MjYtNi05Ljk1M0M0IDQuNzA3IDYuNjg2IDIgMTAgMnM2IDIuNzA3IDYgNi4wNDdjMCAyLjIyNy0yIDUuNTQ0LTYgOS45NTN6bTAtNy43NWEyLjI1IDIuMjUgMCAxIDAgMC00LjUgMi4yNSAyLjI1IDAgMCAwIDAgNC41eiIvPgo8L3N2Zz4K"
                        alt="map-icon"
                      />
                      <div className="offer_main_course_map-line"></div>
                    </div>
                    <div className="offer_main_course_desc">
                      <img src={spain4} alt="casa-batllo" />
                      <div className="offer_main_course_desc-title">
                        ☞까사바뜨요 (외부관람)
                      </div>
                      <div className="offer_main_course_desc-detail">
                        완공년도 2026년.
                        <br />
                        가우디 서거100주년 완공으로 현재도 지어지고 있는
                        성가족성당.
                        <br />
                        바르셀로나의 대표적인 랜드마크이며 공사중이지만
                        존재만으로도 경건함이 느껴집니다.
                        <br />
                        가우디의 최고의 역작이자 가우디의 신앙심의 결정체.
                        <br /> 이에 얽힌 가슴 아프고 안타까운 가우디의 죽음.
                        가우디의 유언은 무엇이었을까요?
                        <br />
                        안토니오 가우디의 마지막 같이 함께 들어보아요.
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* <hr /> */}
                {/* <div className="offer_main_require">
                  <h1>필수 안내</h1>
                  <div>
                    ※ 투어는 정시 출발입니다. ※
                    <br />
                    ※ 절대 지각하지 말아주세요. 기다리는 다른 분들을 위해
                    기다리지 않습니다. ※
                    <br />
                    ※ 투어에 불참하신 경우 마이리얼트립 환불 약관에 따라 처리
                    됩니다. ※
                    <br />
                    ※ 하루 전 공지사항을 드리니 꼭 확인하시기 바랍니다. ※
                    <br />
                    ※ 공지사항 안내를 위해 예약확정 후 마이리얼트립 메세지에
                    카톡아이디 기재부탁드립니다. ※
                    <br />
                    <br />
                    ▶ 투어 미팅시간 : 오전 8시 50분
                    <br />
                    ▶ 투어 종료시간(예상) : 약 오후 1시반
                    <br />
                    ▶ 투어 최소 인원 : 2명 (1인 미만 예약 시 일주일전 안내 드린
                    후 투어가 취소될 수 있습니다.)
                    <br />
                    ▶ 투어 진행 최소 나이 : 만 15세부터
                    <br />
                    ▶ 수신기를 사용하기 때문에 개인 이어폰(3.5mm 스테레오잭) 을
                    반드시 준비해주시기 바랍니다. 에어팟, 블루투스이어폰
                    사용하지 못 합니다.
                    <br />
                    ▶ 택시비 각 1인 6유로
                    <br />▶ 사그라다 파밀리아 성당에 입장하시는 경우 복장제한이
                    있습니다. 민소매, 짧은 반바지, 모자 착용하신 경우 입장 제한
                    됩니다. 하여 되도록이면 성당에 입장하시는 분들은 복장에
                    신경써주시길 부탁드립니다.
                    <br />
                    <br />
                    <br />
                    <br />
                    [ 기타 안내 ]
                    <br />
                    <br />
                    ※ 예약 결제 전 꼭 가이드와 상담 후 예약진행 부탁드립니다. ※
                    <br />
                    ※ 투어 시작 7일 전까지 최소모객이 모집되지 않을 경우, 투어는
                    취소될 수 있습니다. ※
                    <br />
                    ※ 4-5일 전 예약하시는 분들은 구엘공원의 티켓이 매진 되었을
                    수 있습니다. ※
                    <br />
                    <br />
                    <br />
                    ♣ 구엘 공원 입장료
                    <br />
                    - 일반: 11유로
                    <br />
                    <br />
                    ♣ 입장료 관련 사항
                    <br />
                    - 입장료와 택시비는 투어 당일 유로로 준비해 주시면 됩니다.
                    <br />
                    - 예약 확정과 동시에 티켓을 사전 예매하므로, 예약 확정 이후
                    투어 취소 시 구엘공원 입장권 금액을 뺀 금액만 환불됩니다.
                    <br />
                    - 현지 사정에 따라 티켓 마감, 전산 오류 등의 이유로 구엘공원
                    입장이 불가할 수도 있습니다.
                    <br />
                    - 구엘공원 입장을 원하지 않으시는 분은 반드시 마이리얼트립
                    메세지로 사전 연락주셔야 합니다.
                    <br />
                    - 사그라다 파밀리아 성당 입장은 [[자율입장]] 입니다. 투어
                    종료 후 바로 입장을 원하시는 분은 14:30 이후로 티켓을 직접
                    구매하시기 바랍니다.
                    <br />
                    그러나 점심 식사 후 입장하실 거라면 15:30 티켓을 구매하시는
                    것을 추천드립니다.
                    <br />
                    - 사그라다 파밀리아 성당의 베이직티켓(입장만가능) 은 17:00
                    이후에 구매 가능하십니다.
                    <br />
                    <br />
                    ♣ 내부 입장 관련 사항
                    <br />
                    - 구엘공원 내부입장합니다. 사그라다 파밀리아 성당은
                    [[자율입장]] 입니다.
                    <br />
                    - 구엘공원 입장 전 사진 및 자료와 함께 가이드의 상세한
                    설명을 들으신 후 내부 입장하셔서 즐기실 수 있습니다. (가이드
                    동반 입장 하지 않습니다.)
                    <br />
                    - 구엘공원과 사그라다 파밀리아 외에 다른 건축물의 입장을
                    원하시는 분은 투어 이후 개별 관람을 권해드립니다.
                    <br />- 사그라다 파밀리아 성당에 입장하시는 경우 복장제한이
                    있습니다. 민소매, 짧은 반바지, 모자 착용하신 경우 입장 제한
                    됩니다. 하여 되도록이면 성당에 입장하시는 분들은 복장에
                    신경써주시길 부탁드립니다.
                    <br />
                    <br />
                    <br />
                    [ 주의 사항 ]
                    <br />
                    ▶ 모임시간을 기다리는 일행들을 위해 반드시 지켜주시기
                    바랍니다. 투어는 정시 출발합니다.
                    <br />
                    ▶ 워킹투어이기 때문에 편안한 신발과 옷차림 착용하시기
                    바랍니다.
                    <br />
                    ▶ 귀중품은 반드시 숙소에 보관하시기 바랍니다.
                    <br />
                    ▶ 안전한 여행을 위해 여행자보험 가입을 권해드립니다.
                    <br />
                    ▶ 현지 상황에 따라 투어 일정 및 코스가 변경 될 수 있습니다.
                    <br />
                    ▶ 투어 중 가이드 지시사항을 반드시 지켜주시기 바랍니다.
                    <br />
                    <br />
                    <br />
                    ★★ Lucia 가 드리는 스페셜한 Gift ★★
                    <br />
                    <br />
                    ☞ 핵심 알차디 알찬 투어
                    <br />
                    가우디 건축물 핵심 4곳(까사바뜨요, 까사밀라, 구엘공원,
                    사그라다 파밀리아 성당)
                    <br />
                    <br />
                    ☞ 소수투어 최대 7인!
                    <br />
                    오랜 경험을 통해 느낀 것이 있습니다. 바로 고객과의 유대감이
                    얼마나 중요한가 입니다.
                    <br />
                    5시간이라는 시간은 많은 것을 설명하기엔 정말 짧은
                    시간입니다.
                    <br />
                    이 시간동안 유대감을 쌓는것도 어려운이죠 하지만 소수인원으로
                    진행하며 이 부분을 개선했습니다
                    <br />
                    친한 누나, 정많은 언니, 가까운 친구처럼 다가가고자 합니다
                    ~~~
                    <br />
                    우리 친해져요~~~
                    <br />
                    <br />
                    ☞ 카.페.타.임
                    <br />
                    카페는 현대인에게 빠질 수 없죠. 첫 단추부터 잘 맞춰야 하는
                    법~!
                    <br />
                    여행하느라 지쳤을 그대여!! 혹은 모임장소에 오느라 고생하신
                    그대여!!
                    <br />
                    투어 시작 전에 잠시 마음에 여유를 가지고 친해져보아요~
                    <br />
                    <br />
                    ☞ 사이다 Drinking
                    <br />
                    바르셀로나 월세가 얼마냐고요?
                    <br />
                    현지인들 월급이 얼마냐고요?
                    <br />
                    정말 다양한 질문들을 하십니다. 이런거 물어봐도 되나? 했던
                    궁금하신점 무엇이든 물어보세요~!!
                    <br />
                    사이다 원샷하듯이 최선을 다해 풀어드릴게요~
                    <br />
                    <br />
                    ☞ GGUL TIP
                    <br />
                    쇼핑? 맛집? 클럽? Best 목록들이 그대들을 기다리고 있습니다~
                    안 가본곳은 안알랴줌!!
                    <br />
                    Lucia가 먹고 맛있는 곳, 가서 좋은 곳, 사서 좋은 것들만
                    알려드립니다~
                    <br />
                    다년간의 가이드 경험과 현지 생활을 하고 경험하며 유익하고
                    아셔야 할 GGUL TIP 대 방출 합니다!
                    <br />
                    이런 게 바로 현지인의 꿀팁! 아닐까요?
                    <br />
                    <br />
                    ☞ 인생샷? 걱정마~
                    <br />
                    무심한듯 찍지만 오해하지 마세요~ 워낙 많이 찍어줘서 그래요~
                    키가 커지고 싶다고요? 날씬해 보이고 싶다고요? 포샵이 필요
                    없도록 찍어드릴게요~
                    <br />
                    <br />
                    ☞ 검증 된 가이드
                    <br />
                    현재 "제 스페인 포르투갈 가이드 협회원" 으로 활동 중이며
                    여행사, 개인투어, 그룹투어 등등
                    <br />
                    다양한 경험으로 검증 된 가이드 입니다. 걱정하지 마세요!
                  </div>
                  <div className="offer_main_require-more">
                    <span>접기</span>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMkI5NkVEIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQgMTBsNC4wMDItNEwxMiA5Ljk5NSIvPgo8L3N2Zz4K" />
                  </div>
                </div> */}
                <hr />
                <div className="offer_main_guide">
                  <div className="offer_main_guide_header">
                    <div className="guide_profile">
                      <img src={Lucia} alt="Lucia" />
                      <span>Lucia 가이드</span>
                    </div>
                    <button>
                      <div className="guide_message">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgNWwtNiAzLjc1TDEuNSA1VjMuNWw2IDMuNzUgNi0zLjc1VjV6bTAtM2gtMTJDLjY3NSAyIC4wMDggMi42NzUuMDA4IDMuNUwwIDEyLjVjMCAuODI1LjY3NSAxLjUgMS41IDEuNWgxMmMuODI1IDAgMS41LS42NzUgMS41LTEuNXYtOWMwLS44MjUtLjY3NS0xLjUtMS41LTEuNXoiLz4KPC9zdmc+Cg=="
                          alt="message-icon"
                        />
                        문의하기
                      </div>
                    </button>
                  </div>
                  <div className="offer_main_guide_content">
                    <div
                      className={
                        !this.state.withmore2
                          ? "guide_content-detail"
                          : "more_visible"
                      }
                    >
                      12살 어린시절 너무나(?) 활발하고 튼튼했던 나에게 느닷없이
                      찾아와 꿈을 안겨주었던 운동
                      <br />
                      그것은 바로 배구
                      <br />
                      또래에 비해 큰 키와 특유의 활발함, 타고난 체력덕에 금방
                      스카웃이 되었고,
                      <br />
                      나는 그렇게 프로 배구선수를 꿈꾸었었다.
                      <br />
                      하지만 세상은 녹록치 않기에, 짧다면 짧고, 길다면 긴
                      5년간의 배구인생은 막을 내릴 수 밖에 없었다.
                      <br />
                      <br />
                      첫번째 꿈을 접어지며 [세상에서 가장 쉬운건 공부] 라는 되도
                      않는 말이 왜 있는것인지 알게 되었다.
                      <br />
                      그래서 평소 재밋어 하던 일본어를 공부를 하여, 관광과에
                      가게 된다.
                      <br />
                      '세상은 중간이 제일 좋은거다' 라며 덜하지도 더하지도 않게
                      나는 평범한 회사원이 되었다.
                      <br />
                      <br />
                      회사 생활 어느덧 4년차..
                      <br />
                      너무나 지루하고 똑같은 일상의 반복.
                      <br />
                      20대 초반부터 찾겠다던 '나의 꿈'은 어느새 쳇바퀴 같은
                      일상에서 잊혀져 가고 있었다.
                      <br />
                      그러다 고개를 들을 세도 없이 정신없이 일을 하던 어느날
                      <br />
                      문득 모니터 화면이 아닌 고개를 들어 회사 밖을 보았는데
                      하늘이, 맑은 가을이 너무도 아름답더라.
                      <br />
                      4년동안 3번이나 지나쳤을 가을 하늘을 보며 문득 이 회사에
                      일하는 10년 후의 내 모습을 상상하니
                      <br />
                      '그것은 참 안정적이지만 정말 재미없겠구나' 라는 생각이
                      들었고
                      <br />
                      재미없는 인생이란 참으로 두려웠다.
                      <br />
                      그렇게 나는 부장님에게 사표를 공손히 건내 드렸다.
                      <br />
                      <br />
                      유럽에 관심 없었던 나에게 Camino de Santiago 성지순례길을
                      다녀온 내 친구는
                      <br />
                      스페인을 가보라며 추천하였고 그동안에 회사생활에 지쳐있던
                      난 정말 아무 생각없이 비행기 표를 사고 첫 유럽여행을
                      떠났다.
                      <br />
                      <br />
                      첫 유럽여행, 첫 나라 스페인, 첫 도시 바르셀로나였다.
                      <br />
                      <br />
                      어디선가 이런말을 들었다.
                      <br />
                      나 1명이 행복하면 어느곳에선 7명이 불행하다고..
                      <br />
                      <br />
                      그치만 나에게 스페인의 바르셀로나는
                      <br />
                      나 1명이 행복하면 7명이 같이 행복할것이라는 '교훈'을 얻게
                      해주었고,
                      <br />
                      잊지못할 '인연'을 만들어주고,
                      <br />
                      일상의 반복에서 잊혀진 '나의 꿈'을 찾게 했다.
                      <br />
                      <br />
                      그렇게 여행이 아닌 살고싶은 도시가 되었다.
                      <br />
                      <br />
                      나의 꿈을 위해, 행복한 나를 위해,
                      <br />
                      나는 지금 스페인 바르셀로나에 있다.
                    </div>
                    <div
                      className="guide_content-more"
                      onClick={this.withMoreClick2}
                    >
                      {!this.state.withmore2 ? <Show /> : <Hide />}
                    </div>
                  </div>
                </div>
                {/* <hr />
                <div className="offer_main_refund">
                  <div className="offer_main_refund_header">
                    <h1>취소 및 환불 규정</h1>
                    <button>자세히 보기</button>
                  </div>
                  <div className="offer_main_refund_content">
                    <div className="refund_content-detail">
                      가이드투어 취소/환불 안내
                      <br />
                      <br />
                      각 상품 별 취소 환불 약관이 별도 기재되어 있을 경우 별도
                      기재 내용이 해당 규정으로서 선 적용됩니다.
                      <br />
                      <br />
                      여행자는 가이드약관 제16조 제2항에 따라 여행요금 지급이
                      이루어진 후 투어 개시일 이전에 여행계약을 임의로 해제하는
                      경우, 해제 통보 시점에 관한 다음 각 호의 기준에 따라
                      여행요금이 환불됩니다.
                      <br />
                      해제 통보 시점은 환불요청서가 마이리얼트립 플랫폼에 접수된
                      시간 또는 마이리얼트립 플랫폼 내 ‘메시지’ 기능을 통하여
                      환불요청 내용이 기록된 시간을 기준으로 합니다.
                      <br />
                      [국외여행의 경우]
                      <br />
                      - 여행시작 30일전 (~30) 까지 통보시: 여행 요금 전액 환불
                      <br />
                      - 여행시작 20일 전까지 (29~20) 통보시: 여행요금에서 가이드
                      요금의 10%와 마이리얼트립 수수료 공제 후 환불
                      <br />
                      - 여행시작 6일 전까지 (19~6) 통보시: 여행요금에서 가이드
                      요금의 15%와 마이리얼트립 수수료 공제 후 환불
                      <br />
                      - 여행시작 1 일 전까지 (1~5) 통보시: 여행요금에서 가이드
                      요금의 20%와 마이리얼트립 수수료 공제 후 환불
                      <br />
                      - 여행시작 시간 기준 24시간 이내 통보시: 여행요금에서
                      가이드 요금의 50%와 마이리얼트립 수수료 공제 후 환불
                      <br />
                      [국내여행의 경우]
                      <br />
                      - 여행자가 여행 개시일로부터 3일 이전 통보 시: 여행 요금
                      전액 환불
                      <br />
                      - 여행 개시일로부터 2일 이전 통보 시: 여행요금에서 가이드
                      요금의 10%와 마이리얼트립 수수료 공제 후 환불
                      <br />
                      - 여행 개시일로부터 여행 시작 시간 기준 24시간 이전 통보
                      시: 여행요금에서 가이드 요금의 20%와 마이리얼트립 수수료
                      공제 후 환불
                      <br />
                      - 여행 시작 시간으로부터 24시간 이내 통보 시: 여행요금에서
                      가이드 요금의 30%와 마이리얼트립 수수료 공제 후 환불
                      <br />
                      다만, 위의 규정에도 불구하고 다음의 경우에는 예외로
                      합니다.
                      <br />
                      1) 여행자가 여행요금을 결제(지급)한 때로부터 24시간 이내에
                      여행계약을 철회(취소)하는 경우와 여행자가 투어 예약 후
                      가이드가 확정되기 전에 취소하는 경우는 여행요금을 전액
                      환불합니다. 단, 여행자가 여행요금을 결제하였다고 하더라도
                      해당 시점으로부터 24시간 이내 여행이 시작될 경우 (Instant
                      Booking 예약에 해당하는 경우)는 전액 환불 대상에서
                      제외합니다.
                      <br />
                      2) 상품의 특성에 따라 현지 예약금으로 지불되어야 하는
                      금액이 있는 경우 해당 예약금의 환불에 대하여는 각 상품의
                      상세설명보기에서 별도로 고지한 취소환불 약관을 적용합니다.
                      <br />
                      <br />
                      가이드는 가이드약관 제17조 제1항에 따라 여행요금 지급이
                      이루어진 후 투어 개시일 이전에 여행계약을 임의로 해제하는
                      경우, 해제 통보 시점에 관한 다음 각 호의 기준에 따라
                      가이드가 추가 요금을 부담합니다.
                      <br />
                      해제 통보 시점은 환불요청서가 마이리얼트립 플랫폼에 접수된
                      시간 또는 마이리얼트립 플랫폼 내 ‘메시지’ 기능을 통하여
                      환불요청 내용이 기록된 시간을 기준으로 합니다.
                      <br />
                      [국외여행의 경우]
                      <br />
                      - 여행시작 30일전 (~30) 까지 통보시: 여행 요금 전액을
                      여행자에게 환불. 가이드 부담 없음.
                      <br />
                      - 여행시작 20일 전까지 (29~20) 통보시: 여행요금에서 가이드
                      요금의 10%와 마이리얼트립 수수료를 가이드가 부담.
                      <br />
                      - 여행시작 6일 전까지 (19~6) 통보시: 여행요금에서 가이드
                      요금의 15%와 마이리얼트립 수수료를 가이드가 부담.
                      <br />
                      - 여행시작 1 일 전까지 (1~5) 통보시: 여행요금에서 가이드
                      요금의 20%와 마이리얼트립 수수료를 가이드가 부담.
                      <br />
                      - 여행시작 시간 기준 24시간 이내 통보시: 여행요금에서
                      가이드 요금의 50%와 마이리얼트립 수수료를 가이드가 부담.
                      <br />
                      [국내여행의 경우]
                      <br />
                      - 여행자가 여행 개시일로부터 3일 이전 통보 시: 여행 요금
                      전액을 여행자에게 환불. 가이드 부담 없음.
                      <br />
                      - 여행 개시일로부터 2일 이전 통보 시: 여행요금에서 가이드
                      요금의 10%와 마이리얼트립 수수료를 가이드가 부담.
                      <br />
                      - 여행 개시일로부터 여행 시작 시간 기준 24시간 이전 통보
                      시: 여행요금에서 가이드 요금의 20%와 마이리얼트립 수수료를
                      가이드가 부담.
                      <br />
                      - 여행 시작 시간으로부터 24시간 이내 통보 시: 여행요금에서
                      가이드 요금의 30%와 마이리얼트립 수수료를 가이드가 부담.
                      <br />
                      다만, 위의 규정에도 불구하고 다음의 경우에는 예외로
                      합니다.
                      <br />
                      1) 여행자가 여행요금을 결제(지급)한 때로부터 24시간 이내에
                      여행계약을 철회(취소)하는 경우와 여행자가 투어 예약 후
                      가이드가 확정되기 전에 취소하는 경우는 여행요금을 전액
                      환불합니다. 단, 여행자가 여행요금을 결제하였다고 하더라도
                      해당 시점으로부터 24시간 이내 여행이 시작될 경우 (Instant
                      Booking 예약에 해당하는 경우)는 전액 환불 대상에서
                      제외합니다.
                      <br />
                      2) 상품의 특성에 따라 현지 예약금으로 지불되어야 하는
                      금액이 있는 경우 해당 예약금의 환불에 대하여는 각 상품의
                      상세설명보기에서 별도로 고지한 취소환불 약관을 적용합니다.
                    </div>
                    <div className="refund_content-more">
                      <span>접기</span>
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMkI5NkVEIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTQgMTBsNC4wMDItNEwxMiA5Ljk5NSIvPgo8L3N2Zz4K" />
                    </div>
                  </div>
                </div> */}
                <hr ref={this.scrollDiv} />
                {/* <div className="offer_main_photo-reviews-wrapper">
                  <h4>여행자 후기 사진</h4>
                  <div className="photos-reviews">
                    <ul>
                      <li>
                        <div className="photos-reviews-small"></div>
                      </li>
                      <li>
                        <div className="photos-reviews-small"></div>
                      </li>
                      <li>
                        <div className="photos-reviews-small"></div>
                      </li>
                      <li>
                        <div className="photos-reviews-small"></div>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="offer_main_reviews">
                  <div className="offer_main_reviews_header">
                    <span>후기</span>
                    <span className="reviews_num">112</span>
                  </div>
                  <div className="offer_main_reviews_detail">
                    <div className="detail_rating">
                      <p className="detail_rating-average">4.9</p>
                      <div className="detail_rating-star">
                        <MdStar className="star" />
                        <MdStar className="star" />
                        <MdStar className="star" />
                        <MdStar className="star" />
                        <MdStar className="star" />
                      </div>
                    </div>
                    <div className="detail_stats">
                      <div className="detail_stats-title">
                        20대, 친구들과 가는 여행으로 구매가 많은 상품
                      </div>
                      <div className="detail_stats-star-wrapper">
                        <div className="detail_stats-stars">
                          <MdStar className="star_blue small_star " />
                          <MdStar className="star_blue small_star" />
                          <MdStar className="star_blue small_star" />
                          <MdStar className="star_blue small_star" />
                          <MdStar className="star_blue small_star" />
                        </div>
                        <div className="detail_stats-bar">
                          <div className="stats-bar_blue1"></div>
                        </div>
                        <div className="detail_stats-count">109</div>
                      </div>
                      <div className="detail_stats-star-wrapper">
                        <div className="detail_stats-stars">
                          <MdStar className="star_blue small_star" />
                          <MdStar className="star_blue small_star" />
                          <MdStar className="star_blue small_star" />
                          <MdStar className="star_blue small_star" />
                        </div>
                        <div className="detail_stats-bar">
                          <div className="stats-bar_blue2"></div>
                        </div>
                        <div className="detail_stats-count">2</div>
                      </div>
                      <div className="detail_stats-star-wrapper">
                        <div className="detail_stats-stars">
                          <MdStar className="star_blue small_star" />
                          <MdStar className="star_blue small_star" />
                          <MdStar className="star_blue small_star" />
                        </div>
                        <div className="detail_stats-bar">
                          <div className="stats-bar_blue3"></div>
                        </div>
                        <div className="detail_stats-count">0</div>
                      </div>
                      <div className="detail_stats-star-wrapper">
                        <div className="detail_stats-stars">
                          <MdStar className="star_blue small_star" />
                          <MdStar className="star_blue small_star" />
                        </div>
                        <div className="detail_stats-bar">
                          <div className="stats-bar_blue4"></div>
                        </div>
                        <div className="detail_stats-count">0</div>
                      </div>
                      <div className="detail_stats-star-wrapper">
                        <div className="detail_stats-stars">
                          <MdStar className="star_blue small_star" />
                        </div>
                        <div className="detail_stats-bar">
                          <div className="stats-bar_blue5"></div>
                        </div>
                        <div className="detail_stats-count">1</div>
                      </div>
                    </div>
                  </div>
                  <AddComment />
                  <div className="offer_main_reviews_list">
                    <Comment />
                    {/* <div className="reviews_list_reply">
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICAgIDxwYXRoIGZpbGw9IiNDRUQ0REEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIgOGg4djJIMFYwaDJ2OHoiLz4KPC9zdmc+Cg==" />
                      <p className="reveiws_list_reply-guide">Lucia 가이드</p>
                      <p className="reveiws_list_reply-message">
                        안녕하세요 바르셀로나 Lucia 가이드 입니다 :) 정성스러운
                        후기 감사합니다. 저와 함께 투어를 잘 즐겨주셨다니
                        뿌듯하고 가이드로서 이런 말을 들으면 힘도 나도 더욱
                        열심히 해야겠다고 생각합니다 항상 건강하시고 늘
                        행복하시길 바라겠습니다~ 고맙습니다 :)
                      </p>
                    </div> */}
                  </div>
                </div>
                {/* <div className="offer_main_reviews_list_more">
                  <button>
                    후기 더 보기
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyIDZsLTQuMDAyIDRMNCA2LjAwNSIvPgo8L3N2Zz4K" />
                  </button>
                </div> */}
              </div>

              {/* 상세페이지 사이드바 */}
              <div className="offer_side">
                <div>
                  <div className="offer_side_main-box">
                    <div className="offer_side_main-box_body">
                      <div>
                        <div className="main-box_body-price">
                          <span className="price-main">38,500</span>
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
                            <td className="main-box_travel-price">38,500원</td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        <button className="main-box_body-booking">
                          예약하기
                        </button>
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
                        <img src={Lucia} alt="Lucia" />
                        <span>Lucia 가이드</span>
                      </div>
                      <div className="main-box_question-message">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiMyQjk2RUQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgNWwtNiAzLjc1TDEuNSA1VjMuNWw2IDMuNzUgNi0zLjc1VjV6bTAtM2gtMTJDLjY3NSAyIC4wMDggMi42NzUuMDA4IDMuNUwwIDEyLjVjMCAuODI1LjY3NSAxLjUgMS41IDEuNWgxMmMuODI1IDAgMS41LS42NzUgMS41LTEuNXYtOWMwLS44MjUtLjY3NS0xLjUtMS41LTEuNXoiLz4KPC9zdmc+Cg==" />
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
                      <p>그룹 투어</p>
                    </div>
                    <div>
                      <img
                        src="https://www.myrealtrip.com/webpack/b34853506a08c2451b12ce43faa97855.svg"
                        alt="timer-icon"
                      />
                      <p>5시간 소요</p>
                    </div>
                    <div>
                      <img
                        src="https://www.myrealtrip.com/webpack/2c8393277372adca59f84d8143dd0637.svg"
                        alt="globe-icon"
                      />
                      <p>한국어</p>
                    </div>
                  </div>
                </div>
                <div className="offer_side_third-box"></div>
              </div>
            </div>
          </div>
          {/* <div className="offer_recommend">
            <h4 className="offer_recommend-title">바르셀로나 추천 호텔</h4>
            <div className="offer_recommend_list"></div>
          </div> */}
          <hr />
          <div className="offer_num">
            <sapn className="offer_num-product">상품번호:</sapn>
            <sapn className="offer_num-number">30162</sapn>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
