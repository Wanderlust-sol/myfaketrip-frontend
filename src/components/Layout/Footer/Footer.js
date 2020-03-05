import React, { Component } from "react";
import "components/Layout/Footer/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* footer메뉴부분 */}
        <div className="footerTop container">
          <div className="cs">
            <h3>고객센터</h3>
            <h5>1670-8208</h5>
            <p className="footerTxt">
              <span>일반문의</span>09:00-22:00
              <span>&#47; 실시간 항공권 문의</span>09:00-18:00
            </p>
            <p className="footerTxt">
              <span>연중무휴 &#47; 점심</span>12:00-13:00
            </p>
            <button>1:1 채팅상담</button>
          </div>
          <div className="footNav">
            <div className="footIntro">
              <h3>소개</h3>
              <ul>
                <li>
                  <a href="1.html">회사소개</a>
                </li>
                <li>
                  <a href="1.html">채용</a>
                </li>
              </ul>
            </div>
            <div className="footPartner">
              <h3>파트너</h3>
              <ul>
                <li>
                  <a href="1.html">파트너 등록하기</a>
                </li>
                <li>
                  <a href="1.html">Affiliate 프로그램</a>
                </li>
                <li>
                  <a href="1.html">리얼가이드</a>
                </li>
                <li>
                  <a href="1.html">가이드 블로그</a>
                </li>
              </ul>
            </div>
            <div className="footQna">
              <h3>지원</h3>
              <ul>
                <li>
                  <a href="1.html">자주 묻는 질문</a>
                </li>
                <li>
                  <a href="1.html">최저가 보장제</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer하단부분 */}
        <div className="footerBottom container">
          <div className="footWrap">
            <div className="footLeft bottomList">
              <ul>
                <li>
                  <a href="1.html">이용 약관</a>
                </li>
                <li>
                  <a href="1.html">개인정보 처리방침</a>
                </li>
                <li>
                  <a href="1.html">취소 및 환불 정책</a>
                </li>
              </ul>
            </div>
            <div className="footRight bottomList">
              <ul>
                <li>
                  <a href="1.html">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNBREI1QkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE5IDRjMC0xLjU3Ni0xLjQyMy0zLTMtM0g0QzIuNDIzIDEgMSAyLjQyNCAxIDR2MTJjMCAxLjU3NiAxLjQyMyAzIDMgM2g2di02LjhINy44di0zSDEwVjguMDMxQzEwIDYuMDE1IDExLjUxNCA0LjIgMTMuMzc1IDQuMkgxNS44djNoLTIuNDI1Yy0uMjY1IDAtLjU3NS4zMjItLjU3NS44MDVWOS4yaDN2M2gtM1YxOUgxNmMxLjU3NyAwIDMtMS40MjQgMy0zVjR6Ii8+Cjwvc3ZnPgo="
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="1.html">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNBREI1QkQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMWgxNGEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0yVjNhMiAyIDAgMCAxIDItMnptMTEuMzk2IDQuNWgtMi42MDV2NC44Mkw3LjYzMyA1LjVINS41djkuMDQ1aDIuNTkyVjkuODg3bDQuMTU4IDQuNjU4aDIuMTQ2VjUuNXoiLz4KPC9zdmc+Cg=="
                      alt="naverblog"
                    />
                  </a>
                </li>
                <li>
                  <a href="1.html">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9IiNBREI1QkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTE3LjMxMyAxMy45NmEzLjM1NSAzLjM1NSAwIDAgMS0zLjM1MiAzLjM1Mkg1Ljk0YTMuMzU1IDMuMzU1IDAgMCAxLTMuMzUyLTMuMzUxVjUuOTRBMy4zNTUgMy4zNTUgMCAwIDEgNS45NCAyLjU4OGg4LjAyYTMuMzU2IDMuMzU2IDAgMCAxIDMuMzUyIDMuMzUydjguMDJ6TTEzLjk2IDFINS45NEE0Ljk0NiA0Ljk0NiAwIDAgMCAxIDUuOTR2OC4wMmE0Ljk0NSA0Ljk0NSAwIDAgMCA0Ljk0IDQuOTRoOC4wMmE0Ljk0NSA0Ljk0NSAwIDAgMCA0Ljk0LTQuOTRWNS45NEE0Ljk0NSA0Ljk0NSAwIDAgMCAxMy45NiAxeiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMC4xMTMgMTMuMTM3YTMuMDI4IDMuMDI4IDAgMCAxLTMuMDI1LTMuMDI1IDMuMDI4IDMuMDI4IDAgMCAxIDMuMDI1LTMuMDI0IDMuMDI4IDMuMDI4IDAgMCAxIDMuMDI0IDMuMDI0IDMuMDI4IDMuMDI4IDAgMCAxLTMuMDI0IDMuMDI1bTAtNy42MzdBNC42MTggNC42MTggMCAwIDAgNS41IDEwLjExM2E0LjYxOCA0LjYxOCAwIDAgMCA0LjYxMyA0LjYxMiA0LjYxOCA0LjYxOCAwIDAgMCA0LjYxMi00LjYxMkE0LjYxOCA0LjYxOCAwIDAgMCAxMC4xMTMgNS41TTE0LjcwNCA0LjM3NWExLjAwNCAxLjAwNCAwIDAgMC0xIDFjMCAuMjYzLjEwOC41Mi4yOTQuNzA3LjE4Ni4xODYuNDQ0LjI5My43MDYuMjkzLjI2NCAwIC41MjEtLjEwNy43MDgtLjI5M2ExLjAwNCAxLjAwNCAwIDAgMCAwLTEuNDE1IDEuMDA0IDEuMDA0IDAgMCAwLS43MDgtLjI5MiIvPgogICAgPC9nPgo8L3N2Zz4K"
                      alt="insta"
                    />
                  </a>
                </li>
                <li>
                  <a href="1.html">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGgyMHYxNEgweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMpIj4KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICA8L21hc2s+CiAgICAgICAgPHBhdGggZmlsbD0iI0FEQjVCRCIgZD0iTTggMTBWNGw1LjE5NiAzTDggMTB6bTExLjU4Mi03LjgxNEEyLjUwNSAyLjUwNSAwIDAgMCAxNy44MTQuNDE4QzE2LjI1NCAwIDEwIDAgMTAgMFMzLjc0NiAwIDIuMTg2LjQxOGMtLjg2LjIzLTEuNTM4LjkwOC0xLjc2OCAxLjc2OEMwIDMuNzQ2IDAgNyAwIDdzMCAzLjI1NC40MTggNC44MTRjLjIzLjg2LjkwOCAxLjUzOCAxLjc2OCAxLjc2OEMzLjc0NiAxNCAxMCAxNCAxMCAxNHM2LjI1NCAwIDcuODE0LS40MThhMi41MDUgMi41MDUgMCAwIDAgMS43NjgtMS43NjhDMjAgMTAuMjU0IDIwIDcgMjAgN3MwLTMuMjU0LS40MTgtNC44MTR6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                      alt="youtube"
                    />
                  </a>
                </li>
                <li className="listBorder">
                  <span></span>
                </li>
                <li>
                  <a href="1.html">
                    <img
                      src="https://www.myrealtrip.com//webpack/d8dfc8c46e1a0e819682994549ba4453.svg"
                      alt="apple"
                    />
                  </a>
                </li>
                <li>
                  <a href="1.html">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTS42MTguMjA3aDYuMzU0djUuMjM1SC42MTh6Ii8+CiAgICAgICAgPHBhdGggaWQ9ImMiIGQ9Ik0wIC40ODhoNy44MTNWMTdIMHoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0FEQjVCRCIgZD0iTTQuNTMgMTguMjdsOC44NjEtNC45OTMtMi4xNzUtMi40OTh6TTExLjIxNiA5LjgxM2wyLjI1NS0yLjQxNi04Ljc4LTQuOTk1eiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExIDcuNTEyKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQURCNUJEIiBkPSJNNi40OTggMi4xNEwzLjAzNS4yMDcuNjE4IDIuODY1bDIuMjU1IDIuNTc3IDMuNTQ0LTIuMDEzYy43MjYtLjMyMy43MjYtLjk2Ny4wODEtMS4yOSIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzIDEuNTEyKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJkIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQURCNUJEIiBkPSJNMCAxLjI5M3YxNC45MDFjMCAuNDg0LjE2LjcyNS40ODMuODA2bDcuMzMtOC4yMTZMLjQ4My40ODdDLjE2LjY0OCAwIC44OSAwIDEuMjkzIiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                      alt="playstore"
                    />
                  </a>
                </li>
              </ul>
              <div className="lngBtn">
                <button>
                  <div className="btnImg">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQURCNUJEIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iOCIvPgogICAgICAgIDxlbGxpcHNlIGN4PSIxMiIgY3k9IjEyIiByeD0iNCIgcnk9IjgiLz4KICAgICAgICA8cGF0aCBkPSJNNCAxMmgxNk0xMiA0djE2Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                      alt="언어"
                    />
                  </div>
                  <span>한국어</span>
                  <div className="btnArrow">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0Y1RjZGNyIgZD0iTS0xMjU2LTM2NEgyODh2Mjk1OGgtMTU0NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNLTEyMjQtMjU5SDIxNnY0MDdoLTE0NDB6Ii8+CiAgICAgICAgPGcgc3Ryb2tlPSIjQ0VENERBIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTEgLTEyKSI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIxMTYiIGhlaWdodD0iMzkiIHg9Ii41IiB5PSIuNSIgZmlsbD0iI0ZGRiIgcng9IjQiLz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xMDMgMThsLTQuMDAyIDRMOTUgMTguMDA1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                      alt="arrow"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <p className="footerTxt">
            상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 류종민 |
            사업자등록번호 209-81-55339
            <span>
              <a href="1.html">사업자정보확인</a>
            </span>
            | 통신판매업신고번호 2019-서울서초-0260
            <br />
            주소 서울특별시 서초구 강남대로 327, 대륭서초타워 18층(서초동) |
            이메일 help@myrealtrip.com | 마케팅/제휴 문의
            marketing@myrealtrip.com
          </p>
          <p className="footerTxt">
            자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.
            마이리얼트립은 통신판매중개자이며 통신판매의 당사자가 아닙니다.
            따라서 상품·거래정보 및 거래에 대하여 책임을 지지않습니다.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
