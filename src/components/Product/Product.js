import React, { Component } from "react";
import { MdStar } from "react-icons/md"
import "./Product.scss"

class Product extends Component {
    render() {
        return (
            <div className="product_container">
                <div className="product_img">
                    <img src="https://d2ur7st6jjikze.cloudfront.net/offer_photos/72166/443926_medium_1579533177.jpg?1579533177" alt=""/>
                    <div className="wishlist">
                        <img src="https://www.myrealtrip.com/data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjEwNSAxOS41ODZsNy4wMTItNy4wMTJhNC41ODMgNC41ODMgMCAxIDAtNi40ODItNi40ODJsLS41My41My0uNTMtLjUzYTQuNTgzIDQuNTgzIDAgMCAwLTYuNDgzIDYuNDgybDcuMDEzIDcuMDEyeiIvPgo8L3N2Zz4K" alt=""/>
                    </div>
                </div>
                <div className="product_cnt">
                    <div className="category">
                        티켓/교통패스 ・ 강원도
                    </div>
                    <h3 className="product_title">
                        [펭수 그립톡 한정판] 비발디파크 스노위랜드 종일권/AFTER2 이용권
                    </h3>
                    <div className="product_info">
                        <div className="review">
                            <div>
                                <MdStar className="" />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                                <MdStar />
                            </div>
                            <span>41</span>
                        </div>
                        <div className="price">
                            <span className="price_origin">
                                43,000
                                <span>원</span>
                            </span>
                            <span className="price_main">
                                26,000
                                <span>원</span>
                            </span>
                            <span className="price_standard">/ 1인</span>
                        </div>
                    </div>
                    <div className="product_offer">
                        <img src="https://www.myrealtrip.com/data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgOSAxNiI+CiAgICA8cGF0aCBmaWxsPSIjRkZCRjAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjk2MyAxNlY5LjIzSDBMNS45MjYgMHY2Ljc3aDIuOTYzeiIvPgo8L3N2Zz4K" alt=""/>
                        즉시확정
                    </div>
                </div>
            </div>
        )
    }
}


export default Product;