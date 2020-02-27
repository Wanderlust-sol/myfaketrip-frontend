import React, { Component } from "react";

export default class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
          emailValue:"",
          pwValue:"",
          mode:"default"
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

      clickHandler=()=>{
          if(this.state.mode === "default"){
            this.setState({
                mode:"clicked"
            })
          }else{
              this.setState({
                  mode:"default"
              })
          }
      }

    render(){
        let wrongTxt = null;
    if(this.state.emailValue.length !== 0){
      wrongTxt = this.state.emailValue.includes('@')
    && this.state.emailValue.length > 0 ? 
      null
      :<div className="wrongTxt">
        <p>이메일 주소가 맞나요?</p>
      </div>
    };

        let wrongPw = null;
    if(this.state.pwValue.length !== 0){
        wrongPw = this.state.pwValue.length > 5 ? 
        null
        :<div className="wrongTxt">
          <p>비밀번호가 너무 짧습니다. (6자 이상)</p>
        </div>
      };
      let txtCorrect =null;
    if(this.state.emailValue.length !== 0){
        txtCorrect = this.state.emailValue.length > 1 
        && this.state.emailValue.includes('@')
        ? "txtCorrect" 
        : "txtWrong"
    }
    let pwCorrect = null;
    if(this.state.pwValue.length !== 0){
        pwCorrect = this.state.pwValue.length > 5
        ? "txtCorrect" 
        : "txtWrong"
      };
    
      const cilckEvent = this.state.mode === "default" 
      ? <span></span> 
      : <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNDggMTEuODA3bDcuMzg3LTcuMzkgMS44MjQgMS44MTgtOS4xNzYgOS4xODItLjAwNC0uMDA0LS4wMDMuMDA0LTUuMjA5LTUuMjExIDEuNzktMS43OSAzLjM5MSAzLjM5MXoiLz48L3N2Zz4=" alt="checked"/>
    
    
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
                className={txtCorrect}
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
              className={pwCorrect}
              />
              {wrongPw}
            </label>
            <div className="checkLogin">
              <label htmlFor="checkLogin">
                <input 
                type="checkbox"
                id="checkLogin"
                onClick={this.clickHandler}
                />
                {cilckEvent}
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