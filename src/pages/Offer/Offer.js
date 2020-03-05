import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Show from "../../components/WithMore/Show";
import OfferSlider from "./OfferComponent/OfferProductSlider/OfferSlider";
import OfferPhoto from "./OfferComponent/OfferPhoto/OfferPhoto";
import OfferSide from "./OfferComponent/OfferSide/OfferSide";
import OfferNav from "./OfferComponent/OfferNav/OfferNav";
import OfferPrice from "./OfferComponent/OfferPrice/OfferPrice";
import OfferIntro from "./OfferComponent/OfferIntro/OfferIntro";
import OfferNotice from "./OfferComponent/OfferNotice/OfferNotice";
import OfferCourse from "./OfferComponent/OfferCourse/OfferCourse";
import OfferGuide from "./OfferComponent/OfferGuide/OfferGuide";
import OfferReviews from "./OfferComponent/OfferReviews/OfferReviews";
import { MdStar } from "react-icons/md";
import "./Offer.scss";

export default class Offer extends Component {
  constructor() {
    super();
    this.state = {
      prevScrollpos: window.pageYOffset,
      innerWidth: window.innerWidth,
      bottom: 0,
      visible: true,
      fixed: true,
      withmore1: false,
      withmore2: false,
      mapmore: false,
      navmode: "product",
      offer_data: {}
    };
    this.scrollDiv = React.createRef();
  }

  navClick = e => {
    this.setState({ navmode: e.target.id });
    let location_id = "";
    if (e.target.id === "product") {
      location_id = ".offer_main";
    } else if (e.target.id === "course") {
      location_id = ".offer_main_course";
    } else if (e.target.id === "require") {
      location_id = ".offer_main_require";
    } else {
      location_id = ".offer_main_reviews";
    }
    const location = document.querySelector(location_id).offsetTop;
    window.scrollTo({ top: location, behavior: "smooth" });
  };

  withMoreClick1 = () => {
    this.setState({ withmore1: !this.state.withmore1 });
  };

  withMoreClick2 = () => {
    this.setState({ withmore2: !this.state.withmore2 });
  };

  mapMoreClick = () => {
    this.setState({ mapmore: !this.state.mapmore });
  };

  componentDidMount() {
    fetch(`http://10.58.7.201:8003/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            offer_data: res.data
          },
          () => {
            console.log(this.state.offer_data);
          }
        );
      });

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollpos = window.pageYOffset;
    const visible = 220 > currentScrollpos;
    const fixed = 95 > currentScrollpos;
    const bottom = document.querySelector(".offer_reviews_bar").offsetTop;

    this.setState({
      prevScrollpos: currentScrollpos,
      visible,
      fixed,
      bottom
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="offer">
          <OfferNav
            visible={this.state.visible}
            navmode={this.state.navmode}
            onClick={this.navClick}
          />
          <div className="offer_container">
            <div className="offer_container_box">
              <div className="offer_main">
                <div className="offer_main_title">
                  {this.state.offer_data.name}
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
                <OfferPhoto
                  data={
                    this.state.offer_data.image_info !== undefined &&
                    this.state.offer_data.image_info
                  }
                />
                <hr />
                <OfferPrice />
                <hr />
                <OfferIntro
                  data={
                    this.state.offer_data !== undefined && this.state.offer_data
                  }
                />
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
                      <Show
                        onClick={() => {
                          this.scrollDiv.current.scrollIntoView({
                            behavior: "smooth"
                          });
                        }}
                      >
                        후기 전체보기
                      </Show>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="offer_main_others">
                  <h5>여행자들이 함께 본 상품</h5>
                  <div>
                    <OfferSlider></OfferSlider>
                  </div>
                </div>
                <hr />
                <OfferNotice
                  withMoreClick1={this.withMoreClick1}
                  withmore1={this.state.withmore1}
                  mapMoreClick={this.mapMoreClick}
                  mapmore={this.state.mapmore}
                  data={
                    this.state.offer_data !== undefined && this.state.offer_data
                  }
                />

                <hr />
                <OfferCourse data={this.state.offer_data.course_info} />
                <div className="offer_main_require"></div>
                <hr />
                <OfferGuide
                  withMoreClick2={this.withMoreClick2}
                  withmore2={this.state.withmore2}
                  data={
                    this.state.offer_data !== undefined && this.state.offer_data
                  }
                />
                <hr className="offer_reviews_bar" ref={this.scrollDiv} />
                <OfferReviews />
              </div>
              <OfferSide
                fixed={this.state.fixed}
                prevScrollpos={this.state.prevScrollpos}
                innerWidth={this.state.innerWidth}
                bottom={this.state.bottom}
                data={
                  this.state.offer_data !== undefined && this.state.offer_data
                }
                price_info={
                  this.state.offer_data.price_info !== undefined &&
                  this.state.offer_data.price_info
                }
              ></OfferSide>
            </div>
          </div>
          <hr />
          <div className="offer_num">
            <sapn className="offer_num-product">상품번호:</sapn>
            <sapn className="offer_num-number">30162</sapn>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
