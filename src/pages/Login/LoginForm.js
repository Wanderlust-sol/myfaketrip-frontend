import React, { Component } from "react";

export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
          emailValue:"",
          pwValue:"",
        }
      }
    
      emailChangeHandler=(event)=>{
        this.setState({
          emailValue:event.target.value
        })
      }
      pwChangeHandler=(e)=>{
        this.setState({
          pwValue:e.target.value
        })
      }

    render(){
        let wrongTxt = null;
    if(this.state.emailValue.length !== 0){
      wrongTxt = this.state.emailValue.includes('@')
    && this.state.emailValue.length > 0 ? 
      null
      : 
      <div className="wrongTxt">
        <p>이메일 주소가 맞나요?</p>
      </div> ;
    }
    
        return(
            <div className="loginForm">
            <label htmlFor="email">
              <p className="loginTitle">이메일 *</p>
              <input 
                type="email"
                id="email"
                placeholder="ID@example.com"
                value={this.state.emailValue}
                onChange={this.emailChangeHandler}
                className={
                  this.state.emailValue.length > 0 
                  && this.state.emailValue.includes('@')
                  ? "txtCorrect" 
                  : null
                }
                />
              {wrongTxt}
            </label>
            <label htmlFor="password">
              <p className="loginTitle">비밀번호 *</p>
              <input 
              type="password"
              id="password"
              placeholder="비밀번호를 입력해주세요."
              value={this.state.pwValue}
              onChange={this.pwChangeHandler}
              className={
                this.state.pwValue.length > 5
                ? "txtCorrect" 
                : null
              }
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
            <button className={
             this.state.emailValue.includes('@')
             &&this.state.emailValue.length > 2 
             && this.state.pwValue.length > 6 
             ? "loginSubmit": "loginCom"
            }
            >이메일로 로그인</button>
          </div>
        );
    }
}