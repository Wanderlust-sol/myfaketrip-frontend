import React, { Component } from "react";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import LoginForm from "./LoginForm";
import { snsLogin } from "./FormData";
import "../../styles/Common.scss";
import "./Login.scss";


export default class Login extends Component {
  render() {
    return (
      <>
      <Header />
      <div className="login">
        <div className="loginWrap">
          <div className="snsLogin">
            {snsLogin.map(el=>
            <button className={el.class}>
              <img src={el.img} alt={el.title}/>
              {el.title}
              </button>)}
          </div>
          <div className="or">
            <hr/>
            <span>또는</span>
            <hr/>
          </div>
          <LoginForm />
          <div className="needSignUp">
            <span>아직 마이리얼트립 회원이 아니신가요?</span>
            <span>회원가입</span>
          </div>
        </div>
      </div> 
      <Footer /> 
      </>
    );
  }
}
