import React, { Component } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Show from "components/WithMore/Show";
import OfferSlider from "./Component/ProductSlider/OfferSlider";
import OfferPhoto from "./Component/Photo/OfferPhoto";
import OfferSide from "./Component/Side/OfferSide";
import OfferNav from "./Component/Nav/OfferNav";
import OfferPrice from "./Component/Price/OfferPrice";
import OfferIntro from "./Component/Intro/OfferIntro";
import OfferNotice from "./Component/Notice/OfferNotice";
import OfferCourse from "./Component/Course/OfferCourse";
import OfferGuide from "./Component/Guide/OfferGuide";
import OfferReviews from "./Component/Reviews/OfferReviews";
import { MdStar, MdStarBorder } from "react-icons/md";
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
      offer_data: [],
      product_data: [],
      review: []
    };
    this.scrollDiv = React.createRef();
  }

  navClick = value => {
    this.setState({ navmode: value });
    let location_id = "";
    if (value === "product") {
      location_id = ".offer_main";
    } else if (value === "course") {
      location_id = ".offer_main_course";
    } else if (value === "require") {
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

  handleGet = () => {
    fetch("http://10.58.6.221:8002/review/30162")
      .then(res => res.json())
      .then(res => {
        this.setState({ review: res.Review_list });
      });
  };

  componentDidMount() {
    fetch(`http://10.58.7.201:8003/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState(
          {
            offer_data: res.data
          },
          () => {
            console.log(this.state.offer_data);
          }
        );
      });

    fetch("http://10.58.6.221:8002/product/search")
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            product_data: res.product_data[0].offers
          },
          () => {
            console.log("2", this.state.product_data);
          }
        );
      });
    this.handleGet();
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let navmode = "";
    const currentScrollpos = window.pageYOffset;
    const visible = 220 > currentScrollpos;
    const fixed = 95 > currentScrollpos;
    const bottom =
      document.querySelector(".offer_num") !== null &&
      document.querySelector(".offer_num").offsetTop;

    if (
      currentScrollpos >
      document.querySelector(".offer_main").offsetTop - 800
    ) {
      navmode = "product";
    }
    if (
      currentScrollpos >
      document.querySelector(".offer_main_course").offsetTop - 700
    ) {
      navmode = "course";
    }
    if (
      currentScrollpos >
      document.querySelector(".offer_main_require").offsetTop - 200
    ) {
      navmode = "require";
    }
    if (
      currentScrollpos >
      document.querySelector(".offer_main_reviews").offsetTop - 200
    ) {
      navmode = "review";
    }

    this.setState({
      prevScrollpos: currentScrollpos,
      visible,
      fixed,
      bottom,
      navmode: navmode
    });
  };

  render() {
    const stars = [];
    const getStars = rating => {
      for (let i = 0; i < rating; i++) {
        stars.push(<MdStar key={i} className="star_blue" />);
      }
      for (let i = 0; i < 5 - rating; i++) {
        stars.push(<MdStarBorder key={i + 100} className="star_blue" />);
      }
      return stars;
    };

    return (
      <>
        <Header></Header>
        <div className="offer">
          <OfferNav
            visible={this.state.visible}
            navmode={this.state.navmode}
            onClick={value => this.navClick(value)}
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
                  <p>후기 {this.state.review.length}개</p>
                </div>
                <OfferPhoto
                  data={
                    this.state.offer_data.image_info !== undefined &&
                    this.state.offer_data.image_info
                  }
                  data2={this.state.offer_data}
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
                    <p className="mini-reviews-rate">
                      {Number(this.state.offer_data.average_rating).toFixed(1)}
                    </p>
                    <div className="offer_main_mini-reviews-sub">
                      <div className="mini-reviews-star-rating">
                        <MdStar className="star_black" />
                        <MdStar className="star_black" />
                        <MdStar className="star_black" />
                        <MdStar className="star_black" />
                        <MdStar className="star_black" />
                      </div>
                      <p>후기 {this.state.review.length}개</p>
                    </div>
                  </div>
                  <div className="offer_main_mini-reviews-right">
                    <div className="mini-reviews-star">
                      {this.state.review[0] !== undefined &&
                        getStars(this.state.review[0].rating)}
                      <p>
                        {this.state.review[0] !== undefined &&
                          this.state.review[0].name.slice(0, 1)}
                        **
                      </p>
                    </div>
                    <div className="mini-reviews-stats">
                      {this.state.review[0] !== undefined &&
                        this.state.review[0].date.slice(0, 10)}
                    </div>
                    <div className="mini-reviews-content">
                      {this.state.review[0] !== undefined &&
                        this.state.review[0].content}
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
                    <OfferSlider
                      product_data={this.state.product_data}
                    ></OfferSlider>
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
                <OfferReviews data={this.state.offer_data} />
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
