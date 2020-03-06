import React, { Component } from "react";
import "./PackageSelect.scss";

class PackageSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true
    };
  }

  handleButton = () => {
    this.setState({
      button: !this.state.button
    });
  };

  render() {
    return (
      <div className="package_select">
        <div className="package_bg"></div>
        <div className="package_navigator">
          <div className="package_areas_container">
            <h1>어디로 떠나세요?</h1>
            <div className="package_areas">
              <ul>
                <li>프랑스</li>
                <li>영국</li>
                <li>스페인</li>
                <li>유럽</li>
                <li>아시아</li>
                <li>아프리카/기타</li>
              </ul>
              <div className="package_areas_selector">
                <button onClick={this.handleButton}>
                  지역 선택
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE4IDlsLTYuMDAzIDZMNiA5LjAwNyIvPgo8L3N2Zz4K"
                    alt="화살표 이미지"
                  />
                </button>
              </div>
            </div>
            <div
              className="package_map_container"
              style={{
                display: !this.state.button ? "block" : "none"
              }}
            >
              <div className="package_map_header">
                <h2>방문할 도시 또는 나라를 선택하세요.</h2>
                <button onClick={this.handleButton}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNDk1MDU2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSI+CiAgICAgICAgPHBhdGggZD0iTTUgNWwxNCAxNE01IDE5TDE5IDUiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    alt="팝업 닫기"
                  />
                </button>
              </div>
              <div className="package_map_section">
                <div className="package_map_cnt">
                  <h3>프랑스</h3>
                  <ul>
                    <li>전체</li>
                    <li>프랑스</li>
                  </ul>
                </div>
                <div className="package_map_cnt">
                  <h3>영국</h3>
                  <ul>
                    <li>전체</li>
                    <li>런던/잉글랜드</li>
                    <li>스코틀랜드/아일랜드</li>
                  </ul>
                </div>
                <div className="package_map_cnt">
                  <h3>스페인</h3>
                  <ul>
                    <li>전체</li>
                    <li>스페인</li>
                  </ul>
                </div>
                <div className="package_map_cnt">
                  <h3>유럽</h3>
                  <ul>
                    <li>전체</li>
                    <li>스위스</li>
                    <li>이탈리아</li>
                    <li>벨기에</li>
                    <li>동유럽</li>
                  </ul>
                </div>
                <div className="package_map_cnt">
                  <h3>아시아</h3>
                  <ul>
                    <li>전체</li>
                    <li>대만</li>
                    <li>베트남</li>
                    <li>태국</li>
                    <li>몽골</li>
                    <li>코타키나발루/기타</li>
                  </ul>
                </div>
                <div className="package_map_cnt">
                  <h3>아프리카/기타</h3>
                  <ul>
                    <li>전체</li>
                    <li>괌/사이판</li>
                    <li>캐나다</li>
                    <li>나미비아/아프리카</li>
                    <li>중남미/기타</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="package_categories_container">
            <h1>어떤 상품을 찾으세요?</h1>
            <div className="package_categories">
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzQ5NTA1NiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNyAzMGgydjFhMSAxIDAgMCAxLTIgMHYtMXpNMjMgMzBoMnYxYTEgMSAwIDAgMS0yIDB2LTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0NFRDREQSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTIgMWgydjVoLTJ6TTE4IDFoMnY1aC0yeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMzNDNBNDAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEzIDBoNmExIDEgMCAwIDEgMSAxdjFoLThWMWExIDEgMCAwIDEgMS0xeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNCRTg2NEMiIGQ9Ik0yNi4zNTMgMzBINS42NDdBLjY1Ny42NTcgMCAwIDEgNSAyOS4zMzNWOGMwLTEuMTA1Ljg2OS0yIDEuOTQxLTJIMjUuMDZDMjYuMTMgNiAyNyA2Ljg5NSAyNyA4djIxLjMzM2MwIC4zNjgtLjI5LjY2Ny0uNjQ3LjY2N3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjOTI2MjMyIiBkPSJNMjQgMzBIOFYxNy4yNWMwLTEuMjQuOTc5LTIuMjUgMi4xODItMi4yNWgxMS42MzZDMjMuMDIxIDE1IDI0IDE2LjAxIDI0IDE3LjI1VjMweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkM5MjkiIGQ9Ik01IDEwaDIydjJINXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjQjc4MzREIiBkPSJNOCAyMGgxNnYySDh6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                  alt="패키지 상품 보러 가기"
                />
                패키지
              </div>
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRDc0RSIgZD0iTTMxIDVIMXY3Ljk3NGMxLjQyNi4yODYgMi41IDEuNTMyIDIuNSAzLjAyNiAwIDEuNDk0LTEuMDc0IDIuNzM5LTIuNSAzLjAyNlYyN2gzMHYtNy45NzRjLTEuNDI2LS4yODctMi41LTEuNTMyLTIuNS0zLjAyNiAwLTEuNDk0IDEuMDc0LTIuNzQgMi41LTMuMDI2VjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0JGODAzQiIgZD0iTTE0LjY2IDEzLjY0NGw1LjM3NyA0Ljk5NGgxLjUzN2M0LjYwOSAwIDMuMDkuNzkgMy4wOS43OWgtMTQuMDJsLTIuNjg4LTMuNjYzIDMuODQgMi44NzNoNC4wMTdsLTEuMTUzLTQuOTk0eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGNzgwMDAiIHN0cm9rZT0iI0Y3ODAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgZD0iTTE0LjY2IDEzbDUuMzc3IDQuOTk1aDEuNTM3YzQuNjA5IDAgMy4wOS43OSAzLjA5Ljc5aC0xNC4wMkw3Ljk1NiAxNS4xMmwzLjg0IDIuODc0aDQuMDE3TDE0LjY2IDEzeiIvPgogICAgPC9nPgo8L3N2Zz4K"
                  alt="항공권/승선권 상품 보러 가기"
                />
                항공권/승선권
              </div>
              <div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMiAyaDE5djE5SDJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0FEQjVCRCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjIuNSAyM0guNWEuNS41IDAgMCAxLS41LS41Vi41QS41LjUgMCAwIDEgLjUgMGgyMmEuNS41IDAgMCAxIC41LjV2MjJhLjUuNSAwIDAgMS0uNS41ek0yIDIxaDE5VjJIMnYxOXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzJDNDcyIiBkPSJNOS41ODMgNUg1LjQxN0EuNDE3LjQxNyAwIDAgMCA1IDUuNDE3djQuMTY2YzAgLjIzLjE4Ni40MTcuNDE3LjQxN2g0LjE2NmMuMjMgMCAuNDE3LS4xODcuNDE3LS40MTdWNS40MTdBLjQxNy40MTcgMCAwIDAgOS41ODMgNXpNMTcuNTgzIDVoLTQuMTY2YS40MTcuNDE3IDAgMCAwLS40MTcuNDE3djQuMTY2YzAgLjIzLjE4Ni40MTcuNDE3LjQxN2g0LjE2NmMuMjMgMCAuNDE3LS4xODcuNDE3LS40MTdWNS40MTdBLjQxNy40MTcgMCAwIDAgMTcuNTgzIDV6TTkuNTgzIDEzSDUuNDE3YS40MTcuNDE3IDAgMCAwLS40MTcuNDE3djQuMTY2YzAgLjIzLjE4Ni40MTcuNDE3LjQxN2g0LjE2NmMuMjMgMCAuNDE3LS4xODcuNDE3LS40MTd2LTQuMTY2QS40MTcuNDE3IDAgMCAwIDkuNTgzIDEzek0xNy41ODMgMTNoLTQuMTY2YS40MTcuNDE3IDAgMCAwLS40MTcuNDE3djQuMTY2YzAgLjIzLjE4Ni40MTcuNDE3LjQxN2g0LjE2NmMuMjMgMCAuNDE3LS4xODcuNDE3LS40MTd2LTQuMTY2YS40MTcuNDE3IDAgMCAwLS40MTctLjQxN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                  alt="전체 상품 보러 가기"
                />
                전체
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PackageSelect;
