import React, { Component } from "react";
import "./WithMore.scss";

class Show extends Component {
  render() {
    return (
      <div className="show">
        <span>
          더 보기
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMkI5NkVEIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEyIDZsLTQuMDAyIDRMNCA2LjAwNSIvPgo8L3N2Zz4K" />
        </span>
      </div>
    );
  }
}

export default Show;
