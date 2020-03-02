import React, { Component } from "react";
import Cities from "../../components/Cities/Cities"
import Product from "../../components/Product/Product"
import TourSlider from "./TourComponent/TourSlider";
import ProductSlider from "./TourComponent/ProductSlider";
import Layout from "../Layout/Layout"
import "./Tour.scss";

class Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
      product: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/product.json")
      .then(res => res.json())
      .then(res => {
        console.log("firstly: ", res.product);
        this.setState(
          {
            product: res.product
          },
          () => console.log(this.state.product)
        );
      });
  };

  render() {
    const products = this.state.product.map((product, i) => {
      return <Product data={product} key={i}></Product>;
    });

    return (
      <Layout>
        <div className="Tour">
          <div className="topMargin">
            <div className="article">
              <div className="article_search">
                <h2>어디로 떠나세요?</h2>
                <div className="search_bar">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgPHBhdGggZD0iTTguNjY3IDE0LjU4M2E1LjkxNSA1LjkxNSAwIDAgMCA1LjkxNi01LjkxNkE1LjkxNSA1LjkxNSAwIDAgMCA4LjY2NyAyLjc1IDUuOTE1IDUuOTE1IDAgMCAwIDIuNzUgOC42NjdhNS45MTUgNS45MTUgMCAwIDAgNS45MTcgNS45MTZ6Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTMuMTExIDEzLjExMWw0LjQ0NSA0LjQ0NSIvPgogICAgPC9nPgo8L3N2Zz4K"
                    alt=""
                  />
                  <input
                    type="search"
                    placeholder="여행지나 상품을 검색해보세요!"
                  />
                </div>
              </div>
              <Cities></Cities>
            </div>
            <div className="section">
              <TourSlider></TourSlider>
              <div className="point_box">
                <p>
                  <img
                    src="https://www.myrealtrip.com/webpack/04805fd6ae2e4dd1317124b6cf1c89fb.svg"
                    alt="add"
                  />
                </p>
                <div>
                  <p className="point_title">
                    친구 초대하면
                    <span> 무제한 포인트</span>를 드립니다!
                  </p>
                  <p className="point_sub">
                    친구에게 5,000원 쿠폰을 선물하고 2,000 포인트를 받으세요.
                  </p>
                </div>
                <button>포인트 받기</button>
              </div>
              <div className="product_lately">
                <h2>최근 본 상품</h2>
                <div className="product_lately_wrapper">{products}</div>
              </div>
              <div className="product_winter">
                <h2>겨울에도 꿀잼 보장🍯</h2>
                <ProductSlider></ProductSlider>
              </div>
              <div className="product_tour">
                <h2>바르셀로나에서 만난 인생 투어🌞</h2>
                <div className="product_lately_wrapper">{products}</div>
              </div>
              <div className="product_package">
                <h2>마리트 단독! 가이드라이브 패키지</h2>
                <div className="product_lately_wrapper">{products}</div>
              </div>
              <div className="info_tour">
                <h2>마이리얼트립의 여행 정보</h2>
                <ul className="info_box">
                  <li>
                    <div className="info_title">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTE0Ljk5NCAzMGgxNC45OTRWLjAxMkgwVjMwaDE0Ljk5NHoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjM0M1QTk5IiBkPSJNMjguMzMzIDMwYy45MTQgMCAxLjY1NS0uNzQxIDEuNjU1LTEuNjU1VjEuNjY3YzAtLjkxNC0uNzQxLTEuNjU1LTEuNjU1LTEuNjU1SDEuNjU1Qy43NDEuMDEyIDAgLjc1MiAwIDEuNjY3djI2LjY3OEMwIDI5LjI1OS43NCAzMCAxLjY1NSAzMGgyNi42Nzh6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRUZFRkUiIGQ9Ik0yMC41ODMgMzBWMTguNTM1aDMuODI1bC41NzItNC40NjloLTQuMzk3di0yLjg1MmMwLTEuMjk0LjM1Ny0yLjE3NiAyLjItMi4xNzZoMi4zNTJWNS4wNGMtLjQwNy0uMDU0LTEuODAzLS4xNzYtMy40MjctLjE3Ni0zLjM5IDAtNS43MTEgMi4wODItNS43MTEgNS45MDZ2My4yOTVoLTMuODM1djQuNDY5aDMuODM1VjMwaDQuNTg2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
                        alt=""
                      />
                      <a href="#">
                        마이리얼트립 페이스북 페이지
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgNyAxMCI+CiAgICA8cGF0aCBmaWxsPSIjM0U5MkQ2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDguNjI4TDMuODQ3IDQuNzguMjE5IDEuMTUzIDEuMzcyIDBsNC44MTQgNC44MTQtNSA1TDAgOC42Mjh6Ii8+Cjwvc3ZnPgo="
                          alt="go_facebook"
                        />
                      </a>
                    </div>
                    <div className="info_cnt">
                      마이리얼트립 페이스북 페이지에서 각 여행지별로 정리된 유용한
                      정보와 여행자분들을 위한 이벤트를 확인해보세요.
                    </div>
                  </li>
                  <li>
                    <div className="info_title">
                      <img
                        src="https://www.myrealtrip.com//webpack/348c9cdd99bf369fc2ff090f26dcc78a.svg"
                        alt=""
                      />
                      <a href="#">
                        마이리얼트립 인스타그램
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgNyAxMCI+CiAgICA8cGF0aCBmaWxsPSIjM0U5MkQ2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDguNjI4TDMuODQ3IDQuNzguMjE5IDEuMTUzIDEuMzcyIDBsNC44MTQgNC44MTQtNSA1TDAgOC42Mjh6Ii8+Cjwvc3ZnPgo="
                          alt="go_insta"
                        />
                      </a>
                    </div>
                    <div className="info_cnt">
                      세계 곳곳에서 활동중인 마이리얼트립의 가이드님과
                      여행자분들이 보내주신 아름다운 사진을 감상해보세요.
                    </div>
                  </li>
                  <li>
                    <div className="info_title">
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwQzczQyIgZD0iTTAgMzBoMzBWMEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNy4zODUgMjEuODdsLTQuODMtNy4xMXY3LjExSDcuNVY4LjE0NWg1LjEzbDQuODMgNy4wOTVWOC4xNDVoNS4wNFYyMS44N3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                        alt=""
                      />

                      <a href="#">
                        마이리얼트립 네이버 블로그
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3IiBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgNyAxMCI+CiAgICA8cGF0aCBmaWxsPSIjM0U5MkQ2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDguNjI4TDMuODQ3IDQuNzguMjE5IDEuMTUzIDEuMzcyIDBsNC44MTQgNC44MTQtNSA1TDAgOC42Mjh6Ii8+Cjwvc3ZnPgo="
                          alt="go_naver"
                        />
                      </a>
                    </div>
                    <div className="info_cnt">
                      마이리얼트립의 네이버 블로그에서 리얼생생 여행정보, 여행
                      후기, 추천 가이드 정보를 확인해보세요.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Tour;
