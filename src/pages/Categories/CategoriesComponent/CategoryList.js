import React, { Component } from "react";
import "./CategoryList.scss";

class CategoryList extends Component {
  render() {
    return (
      <>
        <div className="categorylist_container">
          <div className="categorylist">
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMiAyaDE5djE5SDJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0FEQjVCRCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMjIuNSAyM0guNWEuNS41IDAgMCAxLS41LS41Vi41QS41LjUgMCAwIDEgLjUgMGgyMmEuNS41IDAgMCAxIC41LjV2MjJhLjUuNSAwIDAgMS0uNS41ek0yIDIxaDE5VjJIMnYxOXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzJDNDcyIiBkPSJNOS41ODMgNUg1LjQxN0EuNDE3LjQxNyAwIDAgMCA1IDUuNDE3djQuMTY2YzAgLjIzLjE4Ni40MTcuNDE3LjQxN2g0LjE2NmMuMjMgMCAuNDE3LS4xODcuNDE3LS40MTdWNS40MTdBLjQxNy40MTcgMCAwIDAgOS41ODMgNXpNMTcuNTgzIDVoLTQuMTY2YS40MTcuNDE3IDAgMCAwLS40MTcuNDE3djQuMTY2YzAgLjIzLjE4Ni40MTcuNDE3LjQxN2g0LjE2NmMuMjMgMCAuNDE3LS4xODcuNDE3LS40MTdWNS40MTdBLjQxNy40MTcgMCAwIDAgMTcuNTgzIDV6TTkuNTgzIDEzSDUuNDE3YS40MTcuNDE3IDAgMCAwLS40MTcuNDE3djQuMTY2YzAgLjIzLjE4Ni40MTcuNDE3LjQxN2g0LjE2NmMuMjMgMCAuNDE3LS4xODcuNDE3LS40MTd2LTQuMTY2QS40MTcuNDE3IDAgMCAwIDkuNTgzIDEzek0xNy41ODMgMTNoLTQuMTY2YS40MTcuNDE3IDAgMCAwLS40MTcuNDE3djQuMTY2YzAgLjIzLjE4Ni40MTcuNDE3LjQxN2g0LjE2NmMuMjMgMCAuNDE3LS4xODcuNDE3LS40MTd2LTQuMTY2YS40MTcuNDE3IDAgMCAwLS40MTctLjQxN3oiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt="전체 아이콘"
              />
              <span>전체</span>
            </div>
            <div>
              <img
                src="https://www.myrealtrip.com/webpack/c46dd49bf22f99d10cbb2a95b58641a5.svg"
                alt="가이드투어 아이콘"
              />
              <span>가이드투어</span>
            </div>
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGgyNHYxN0gweiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDMpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNFRkQzNTgiIGQ9Ik0yNCA2LjA1VjBIMHY2LjA1YTIuNSAyLjUgMCAwIDEgMCA0LjlWMTdoMjR2LTYuMDVhMi41IDIuNSAwIDAgMSAwLTQuOSIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8cGF0aCBmaWxsPSIjRDZCQTQ1IiBkPSJNNSAxNmgxNFY3SDV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="
                alt="티켓 아이콘"
              />
              <span>티켓/교통패스</span>
            </div>
            <div>
              <img
                src="https://www.myrealtrip.com/webpack/d630510c84a3b3bbd4c4444a82b75eb5.svg"
                alt="액티비티 아이콘"
              />
              <span>액티비티</span>
            </div>
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzQ0NCIgZD0iTTIxIDNoLTVMMTQuNzc3LjU1OWExIDEgMCAwIDAtLjg5NC0uNTUySDkuMTE3YTEgMSAwIDAgMC0uODk0LjU1Mkw3IDNIMmEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoMTlhMiAyIDAgMCAwIDItMlY1YTIgMiAwIDAgMC0yLTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzY2NiIgZD0iTTMgMTlIMFY1aDNhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxeiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjExLjUiIGN5PSIxMiIgcj0iNS41IiBmaWxsPSIjNjY2Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0U2RTZFNiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTEuNSAxOGMtMy4zMDkgMC02LTIuNjkyLTYtNnMyLjY5MS02IDYtNiA2IDIuNjkyIDYgNi0yLjY5MSA2LTYgNnptMC0xMWMtMi43NTcgMC01IDIuMjQzLTUgNXMyLjI0MyA1IDUgNSA1LTIuMjQzIDUtNS0yLjI0My01LTUtNXoiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIxMS41IiBjeT0iMTIiIHI9IjMiIGZpbGw9IiM0NDQiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzZCNUI1IiBkPSJNMTMgNGgtM2EuNS41IDAgMCAxLS41LS41VjJhLjUuNSAwIDAgMSAuNS0uNWgzYS41LjUgMCAwIDEgLjUuNXYxLjVhLjUuNSAwIDAgMS0uNS41eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0yMSA2aC0zYS41LjUgMCAwIDEtLjUtLjVWNWEuNS41IDAgMCAxIC41LS41aDNhLjUuNSAwIDAgMSAuNS41di41YS41LjUgMCAwIDEtLjUuNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt="스냅촬영 아이콘"
              />
              <span>스냅촬영</span>
            </div>
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgLjQ3OEg0Ljk1VjEzSDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9IiMzMzUyNjIiIGQ9Ik03LjUgMjIuNTc0aC0xYS41LjUgMCAwIDEtLjUtLjV2LTEwYS41LjUgMCAwIDEgLjUtLjVoMWEuNS41IDAgMCAxIC41LjV2MTBhLjUuNSAwIDAgMS0uNS41TTE3LjUgMjIuNTc0aC0xYS41LjUgMCAwIDEtLjUtLjV2LTEwYS41LjUgMCAwIDEgLjUtLjVoMWEuNS41IDAgMCAxIC41LjV2MTBhLjUuNSAwIDAgMS0uNS41Ii8+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjQjNCM0IzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTEwIDR2NS44MjljMCAuOTYzLS43ODEgMS43NDUtMS43NDUgMS43NDVoLTIuNTFBMS43NDUgMS43NDUgMCAwIDEgNCA5LjgyOXYtNS44M003IDQuMDc0djQuNSIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDIuNTc0KSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjQjNCM0IzIiBkPSJNLjQ3Mi40NzhBLjQ3Mi40NzIgMCAwIDAgMCAuOTV2MTEuNTc4YzAgLjI2MS4yMTEuNDcyLjQ3Mi40NzJoNC4wMDVhLjQ3My40NzMgMCAwIDAgLjQ3My0uNDcyVjQuOTU2QTQuNDg1IDQuNDg1IDAgMCAwIC40NzIuNDc4IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                alt="레스토랑 아이콘"
              />
              <span>레스토랑</span>
            </div>
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzVCNUI1QiIgZD0iTTUuNSAzYS41LjUgMCAwIDAtLjUuNXY3YS41LjUgMCAwIDAgLjUuNWg0YS41LjUgMCAwIDAgLjUtLjV2LTdhLjUuNSAwIDAgMC0uNS0uNWgtNHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRDREMUUwIiBkPSJNMy41NjcgMTRDMy4yNTQgMTQgMyAxMy43MzEgMyAxMy40VjguNmMwLS4zMzEuMjU0LS42LjU2Ny0uNmgxMy42Yy4yMTQgMCAuNDExLjEyOC41MDYuMzMxbDIuMjY3IDQuOGEuNjMuNjMgMCAwIDEtLjAyNS41ODUuNTYxLjU2MSAwIDAgMS0uNDgyLjI4NEgzLjU2N3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNjQ1ODhDIiBkPSJNMi44NTcgMjJjLS4yNDYgMC0uNDY0LS4xNzctLjU0Mi0uNDRMLjAzIDEzLjg0NmEuNzA0LjcwNCAwIDAgMSAuMDc4LS41NzlBLjU1LjU1IDAgMCAxIC41NzEgMTNoMjIuODU3Yy4xOTggMCAuMzgyLjExNi40ODYuMzA1YS43MS43MSAwIDAgMSAuMDI1LjYyNmwtMy40MjggNy43MTRBLjU2OC41NjggMCAwIDEgMjAgMjJIMi44NTd6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYgMTZhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yTTEwIDE2YTEgMSAwIDEgMSAwIDIgMSAxIDAgMCAxIDAtMk0xNCAxNmExIDEgMCAxIDEgMCAyIDEgMSAwIDAgMSAwLTJNMTggMTZhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0U4NkM2MCIgZD0iTTUgNmg1VjVINXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                alt="즐길거리 아이콘"
              />
              <span>즐길거리</span>
            </div>
            <div>
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iIzVCNUI1QiIgZD0iTTIzIDE1SDB2LTQuNWwuMDIxLS4xNDQgMS4yODYtNS4yODdBMS41MDIgMS41MDIgMCAwIDEgMi43NDQgNEgxN2MuMTYzIDAgLjMxNi4wOC40MS4yMTNMMjEgMTBoLjVhMS41IDEuNSAwIDAgMSAxLjUgMS41VjE1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNFNkU2RTYiIGQ9Ik0yLjE3MiAxMEwzIDZoMTMuM2wyLjI0IDR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzVCNUI1QiIgZD0iTTcuNSAxMEg5VjZINy41eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMzQTNBM0EiIGQ9Ik0yMyAxNUgwYTIgMiAwIDAgMCAyIDJoMjBhMSAxIDAgMCAwIDEtMXYtMXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNDQ0IiBkPSJNNC41IDIwYy0xLjY1NCAwLTMtMS4zNDYtMy0zczEuMzQ2LTMgMy0zIDMgMS4zNDYgMyAzLTEuMzQ2IDMtMyAzTTE5IDIwYy0xLjY1NCAwLTMtMS4zNDYtMy0zczEuMzQ2LTMgMy0zIDMgMS4zNDYgMyAzLTEuMzQ2IDMtMyAzIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0U2RTZFNiIgZD0iTTQuNSAxOC41Yy0uODI3IDAtMS41LS42NzMtMS41LTEuNXMuNjczLTEuNSAxLjUtMS41UzYgMTYuMTczIDYgMTdzLS42NzMgMS41LTEuNSAxLjVNMTkgMTguNWMtLjgyNyAwLTEuNS0uNjczLTEuNS0xLjVzLjY3My0xLjUgMS41LTEuNSAxLjUuNjczIDEuNSAxLjUtLjY3MyAxLjUtMS41IDEuNSIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNFQTk4NjAiIGQ9Ik0yMi41IDEzLjVoLjV2LTJoLS41YS41LjUgMCAwIDAtLjUuNXYxYS41LjUgMCAwIDAgLjUuNSIvPgogICAgPC9nPgo8L3N2Zz4K"
                alt="여행편의 아이콘"
              />
              <span>여행편의</span>
            </div>
          </div>
          <div className="categorylist_sidebar">
            <ul>
              <li>
                <div>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgOSAxNiI+CiAgICA8cGF0aCBmaWxsPSIjRkZCRjAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjk2MyAxNlY5LjIzSDBMNS45MjYgMHY2Ljc3aDIuOTYzeiIvPgo8L3N2Zz4K"
                    alt="즉시확정 아이콘"
                  />
                  <span>즉시확정</span>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiB4PSIuNSIgeT0iLjUiIHN0cm9rZT0iIzg0OEM5NCIgcng9IjcuNSIvPgogICAgICAgIDx0ZXh0IGZpbGw9IiM4NDhDOTQiIGZvbnQtZmFtaWx5PSJTRlByb1RleHQtU2VtaWJvbGQsIFNGIFBybyBUZXh0IiBmb250LXNpemU9IjExIiBmb250LXdlaWdodD0iNTAwIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjUiIHk9IjEyIj4/PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPgo="
                    alt="상세 아이콘"
                  />
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTAgMS42aDEuNTcxVi44YzAtLjQ0Mi4zNTItLjguNzg2LS44LjQzNCAwIC43ODYuMzU4Ljc4Ni44di44aDQuNzE0Vi44YzAtLjQ0Mi4zNTItLjguNzg2LS44LjQzNCAwIC43ODYuMzU4Ljc4Ni44di44SDExVjRIMG0wIDFoMTF2N0gwIi8+Cjwvc3ZnPgo="
                    alt="날짜 아이콘"
                  />
                  <span>날짜</span>
                </div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTcgNWw1IDUuMDAzTDcuMDA2IDE1Ii8+Cjwvc3ZnPgo="
                  alt="화살표 아이콘"
                />
              </li>
              <li>
                <div>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEyIDEyIj4KICAgIDxwYXRoIGZpbGw9IiM0OTUwNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOTY4IDRhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAybTIuNTAyLTRINi41MTdhLjUuNSAwIDAgMC0uMzUyLjE0NUwuMjc1IDYuMDM2Yy0uMzc2LjM3Ny0uMzY1IDEgLjAyNiAxLjM5MWw0LjI0IDQuMjRjLjM5LjM5MSAxLjAxNC40MDIgMS4zOS4wMjVsNS44OS01Ljg4OWEuNDk2LjQ5NiAwIDAgMCAuMTQ3LS4zNTJWLjQ5N0EuNDk4LjQ5OCAwIDAgMCAxMS40NyAwIi8+Cjwvc3ZnPgo="
                    alt="상품태그 아이콘"
                  />
                  <span>상품 태그</span>
                </div>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTcgNWw1IDUuMDAzTDcuMDA2IDE1Ii8+Cjwvc3ZnPgo="
                  alt="화살표 아이콘"
                />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default CategoryList;
