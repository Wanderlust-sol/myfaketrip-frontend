import React, { Component } from "react";
import "./TourSearch.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      search_place: [],
      search_product: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/data/search_data.json")
      .then(res => res.json())
      .then(res => {
        this.setState({
          search_place: res.search_data[0].place,
          search_product: res.search_data[0].product
        });
        console.log("place", res.search_data[0].place);
      });
  };

  searchPlace = () => {
    let resultPlace = this.state.search_place.filter(keywords =>
      keywords.includes(this.state.keyword)
    );

    let resultPlaceMap = resultPlace.map((keyword, i) => {
      return (
        <>
          <li key={i.place} className="place_font">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiMyQjk2RUQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjE0IDdhMS43ODYgMS43ODYgMCAxIDEgMy41NzMuMDAxQTEuNzg2IDEuNzg2IDAgMCAxIDYuMjE0IDd6TTMgN2MwIDMuNzUgNSA3LjUgNSA3LjVzNS0zLjc1IDUtNy41YzAtMi43NjQtMi4yMzYtNS01LTVTMyA0LjIzNiAzIDd6Ii8+Cjwvc3ZnPgo="
              alt="location"
            />
            {keyword}
          </li>
        </>
      );
    });

    return resultPlaceMap;
  };

  searchProduct = () => {
    let resultProduct = this.state.search_product.filter(keywords =>
      keywords.includes(this.state.keyword)
    );

    let resultProductMap = resultProduct.map((keyword, i) => {
      return (
        <>
          <li key={i.product}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjODQ4Qzk0IiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgPHBhdGggZD0iTTcgMTEuMjVBNC4yNDkgNC4yNDkgMCAwIDAgMTEuMjUgNyA0LjI0OSA0LjI0OSAwIDAgMCA3IDIuNzUgNC4yNDkgNC4yNDkgMCAwIDAgMi43NSA3IDQuMjQ5IDQuMjQ5IDAgMCAwIDcgMTEuMjV6Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTAuMzMzIDEwLjMzM2wzLjMzNCAzLjMzNCIvPgogICAgPC9nPgo8L3N2Zz4K"
              alt="검색이미지"
            />
            {keyword}
          </li>
        </>
      );
    });

    return resultProductMap;
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  render() {
    return (
      <div className="article_search">
        <h2>어디로 떠나세요?</h2>
        <div className="search_bar">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgICAgICAgPHBhdGggZD0iTTguNjY3IDE0LjU4M2E1LjkxNSA1LjkxNSAwIDAgMCA1LjkxNi01LjkxNkE1LjkxNSA1LjkxNSAwIDAgMCA4LjY2NyAyLjc1IDUuOTE1IDUuOTE1IDAgMCAwIDIuNzUgOC42NjdhNS45MTUgNS45MTUgMCAwIDAgNS45MTcgNS45MTZ6Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTMuMTExIDEzLjExMWw0LjQ0NSA0LjQ0NSIvPgogICAgPC9nPgo8L3N2Zz4K"
            alt="검색이미지"
          />
          <input
            type="search"
            placeholder="여행지나 상품을 검색해보세요!"
            value={this.state.keyword}
            onChange={this.handleChange}
          />
        </div>

        <div
          className="keywords_wrapper"
          style={{ display: this.state.keyword ? "block" : "none" }}
        >
          <ul>
            {this.searchPlace()}
            {this.searchProduct()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
