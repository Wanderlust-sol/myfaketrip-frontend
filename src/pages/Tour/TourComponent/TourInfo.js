import React, { Component } from "react";
import "./TourInfo.scss";

class TourInfo extends Component {
  render() {
    return (
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
              세계 곳곳에서 활동중인 마이리얼트립의 가이드님과 여행자분들이
              보내주신 아름다운 사진을 감상해보세요.
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
              마이리얼트립의 네이버 블로그에서 리얼생생 여행정보, 여행 후기,
              추천 가이드 정보를 확인해보세요.
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default TourInfo;
