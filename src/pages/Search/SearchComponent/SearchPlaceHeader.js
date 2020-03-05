import React, { Component } from "react";
import "./SearchPlaceHeader.scss";

class SearchPlaceHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select_place: [],
      buttonShow: true
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/search_place.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          select_place: res.search_place
        });
      });
  };

  handleClick = () => {
    this.setState({
      buttonShow: !this.state.buttonShow
    });
  };
  render() {
    return (
      <>
        <div className="search_place_bg">
          <div className="search_place_bg_cover"></div>
          <div className="search_place_container">
            <div className="place_select_container">
              <p>스페인</p>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSIgZD0iTTUgMi41TDExIDhsLTYgNS41Ii8+Cjwvc3ZnPgo="
                alt=""
              />
              <div className="place_select">
                <button onClick={this.handleClick}>
                  <span>바르셀로나</span>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik00IDZsNCA0IDQtNHoiLz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </button>
                <div
                  style={{ display: !this.state.buttonShow ? "block" : "none" }}
                >
                  <ul>
                    {this.state.select_place.map((city, i) => {
                      return <li key={i}>{city}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="search_place_title">
              <h1>바르셀로나</h1>
              <h2>Barcelona, Spain</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchPlaceHeader;
