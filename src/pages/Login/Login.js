import React, { Component } from "react";
import { snsLogin } from "./FormData";
import "../../styles/Common.scss";
import "./Login.scss";

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      emailValue:"",
      pwValue:"",
    }
  }

  emailChangeHandler=(event)=>{
    console.log(event.target.value)
    this.setState({
      emailValue:event.target.value
    })
  }
  pwChangeHandler=(e)=>{
    this.setState({
      pwValue:e.target.value
    })
  }


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
            <label htmlFor="email">
              <p className="loginTitle">이메일 *</p>
              <input 
                type="email"
                id="email"
                placeholder="ID@example.com"
                value={this.state.emailValue}
                onChange={this.emailChangeHandler}
                />
            </label>
            <label htmlFor="password">
              <p className="loginTitle">비밀번호 *</p>
              <input 
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              value={this.state.pwValue}
              onChange={this.pwChangeHandler}
              />
            </label>
            <div className="checkLogin">
              <label htmlFor="checkLogin">
                <input 
                type="checkbox"
                id="checkLogin"
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
