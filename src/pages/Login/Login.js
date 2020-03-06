import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Layout from "components/Layout/Layout";
import LoginForm from "pages/Login/LoginForm";
import { snsLogin } from "pages/Login/FormData";
import "styles/Common.scss";
import "pages/Login/Login.scss";

class Login extends Component {
  render() {
    return (
      <>
        <Layout>
          <div className="login">
            <div className="loginWrap">
              <div className="snsLogin">
                {snsLogin.map(el => (
                  <button className={el.class} key={el.id}>
                    <img src={el.img} alt={el.title} />
                    {el.title}
                  </button>
                ))}
              </div>
              <div className="or">
                <hr />
                <span>또는</span>
                <hr />
              </div>
              <LoginForm />
              <div className="needSignUp">
                <span>아직 마이리얼트립 회원이 아니신가요?</span>
                <span>회원가입</span>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default withRouter(Login);
