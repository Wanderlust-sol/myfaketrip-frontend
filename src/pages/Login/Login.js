import React, { Component } from "react";
import { snsLogin, loginForm } from "./FormData";
import "../../styles/Common.scss";
import "./Login.scss";

export default class Login extends Component {
  
  render() {
    return (
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
          <div className="loginForm">
              {loginForm.map(el=>
                <label htmlFor={el.type}>
                  <p className="loginTitle">{el.title}</p>
                  <input 
                    type={el.type}
                    id={el.type} 
                    value=""
                    placeholder={el.holder}
                    />
                </label>
              )}
            <div className="checkLogin">
              <label htmlFor="checkLogin">
                <input 
                type="checkbox"
                id="checkLogin"
                value=""
                />
                로그인 상태 유지  
              </label>
              <p>비밀번호 찾기</p>
            </div>
            <button className="loginCom">이메일로 로그인</button>
          </div>
          <div className="needSignUp">
            <span>아직 마이리얼트립 회원이 아니신가요?</span>
            <span>회원가입</span>
          </div>
        </div>
      </div>  
    );
  }
}
