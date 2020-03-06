import React, { Component } from "react";
import "./CategoryProduct.scss";

class CategoryProduct extends Component {
  render() {
    return (
      <>
        <div className="category_product_container">
          <img
            src="https://d2ur7st6jjikze.cloudfront.net/offer_photos/27814/178340_medium_1525778281.jpg?1525778281"
            alt="상품이미지"
          />
          <div className="category_product_cnt">
            <div className="category_result">
              <span>가이드 투어</span>
              <span> ・ </span>
              <span>시티투어</span>
              <span> ・ </span>
              <span>로컬투어</span>
            </div>

            <h3>
              가우디프리미엄버스투어#3월4일예약가능#후기가보여줍니다#성가족성당,구엘공원
              대행구매+내부동행
            </h3>
            <div className="category_product_guide">
              <span>팔로우미투어</span>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgOCAxMiI+CiAgICA8ZyBmaWxsPSIjNDI0MjQyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik00IDEwLjc4NmwtMi4xMzcgMS4xNjIuNDA4LTIuNDYyTC41NCA3Ljc0M2wyLjM5LS4zNkw0IDUuMTQzbDEuMDY5IDIuMjQgMi4zOS4zNi0xLjczIDEuNzQzLjQwOCAyLjQ2MnpNNCA1LjE0M2wzLjY4OC0xLjg1MlYwSC4zMTJ2My4zMDV6Ii8+CiAgICAgICAgPHBhdGggZD0iTTIuNjMzIDQuNDYyTDQuNjk2IDBoMi45OTJ2My4yOTFMNCA1LjE0M2wtMS4zNjctLjY4MXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt="가이드"
              />
            </div>
            <div className="category_product_review">
              <div className="category_product_rating">
                <div></div>
                <span>40</span>
              </div>
              <span> ・ </span>
              <div className="category_product_period">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICAgIDxwYXRoIGZpbGw9IiM4NDhDOTQiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcgMEg0djFoM1Ywek01IDdoMVY0SDV2M3ptNC4wMTUtMy4zMDVsLjcxLS43MWE1LjUyNCA1LjUyNCAwIDAgMC0uNzA1LS43MDVsLS43MS43MUE0LjQ4IDQuNDggMCAwIDAgNS41IDIgNC41IDQuNSAwIDEgMCAxMCA2LjVjMC0xLjA2LS4zNy0yLjAzNS0uOTg1LTIuODA1ek01LjUgMTBBMy40OTcgMy40OTcgMCAwIDEgMiA2LjVDMiA0LjU2NSAzLjU2NSAzIDUuNSAzUzkgNC41NjUgOSA2LjUgNy40MzUgMTAgNS41IDEweiIvPgo8L3N2Zz4K"
                  alt="소요시간"
                />
                <span>9시간 소요</span>
              </div>
            </div>
            <div className="category_product_price">
              <span>1인</span>
              <strong>
                59,900
                <span>원</span>
              </strong>
            </div>
          </div>
          <div className="category_product_wishlist">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEyLjEwNSAxOS41ODZsNy4wMTItNy4wMTJhNC41ODMgNC41ODMgMCAxIDAtNi40ODItNi40ODJsLS41My41My0uNTMtLjUzYTQuNTgzIDQuNTgzIDAgMCAwLTYuNDgzIDYuNDgybDcuMDEzIDcuMDEyeiIvPgo8L3N2Zz4K"
              alt="위시리스트"
            />
          </div>
        </div>
      </>
    );
  }
}

export default CategoryProduct;
