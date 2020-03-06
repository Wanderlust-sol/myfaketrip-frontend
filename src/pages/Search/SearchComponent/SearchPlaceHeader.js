import React, { Component } from "react";
import "./SearchPlaceHeader.scss";

class SearchPlaceHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select_place: [],
      button: true
    };
  }

  componentDidMount = () => {
    fetch("http://10.58.6.221:8000/product/search")
      .then(res => res.json())
      .then(res => {
        this.setState({
          select_place: res.background_data[0].city_list
        });
      });
  };

  handleClick = () => {
    this.setState({
      button: !this.state.button
    });
  };
  render() {
    return (
      <>
        <div
          className="search_place_bg"
          style={{
            backgroundImage: `url(${this.props.data.background_image})`
          }}
        >
          <div className="search_place_bg_cover"></div>
          <div className="search_place_container">
            <div className="place_select_container">
              <p>{this.props.data.country_name}</p>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yNSIgZD0iTTUgMi41TDExIDhsLTYgNS41Ii8+Cjwvc3ZnPgo="
                alt=""
              />
              <div className="place_select">
                <button onClick={this.handleClick}>
                  <span>{this.props.data.city_name}</span>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik00IDZsNCA0IDQtNHoiLz4KPC9zdmc+Cg=="
                    alt=""
                  />
                </button>
                <div style={{ display: !this.state.button ? "block" : "none" }}>
                  <ul>
                    {this.state.select_place.map((city, i) => {
                      return <li key={i}>{city}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="search_place_title">
              <h1>{this.props.data.city_name}</h1>
              <h2>
                {this.props.data.city_english_name},
                {this.props.data.country_english_name}
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SearchPlaceHeader;
