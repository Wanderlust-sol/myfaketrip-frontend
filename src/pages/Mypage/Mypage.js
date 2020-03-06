import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import { address } from "Config/config";
import LeftSide from "pages/Mypage/components/LeftSide";
import MainSide from "pages/Mypage/components/MainSide";
import "pages/Mypage/Mypage.scss";

export default class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      phone: ""
    };
  }
  componentDidMount = () => {
    if (localStorage.getItem("wtw-token")) {
      fetch(`${address}account/profileupdate`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("wtw-token")
        }
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            email: res.agent_profile.email,
            username: res.agent_profile.username,
            phone: res.agent_profile.phone
          });
        });
    }
  };
  render() {
    console.log(address, "aa");
    return (
      <>
        <Layout>
          <div className="Mypage">
            <h2>프로필 관리</h2>
            <div className="profileManage">
              <LeftSide username={this.state.username} />
              <MainSide
                username={this.state.username}
                email={this.state.email}
                phone={this.state.phone}
              />
              <div className="mypageSetting">
                <button>편집</button>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
