import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
          username:"",
          email:"",
          password:"",
          profile:"",
          phone:"",
          mode:"default"
        }
      }
    
      onChangeHandler=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
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

      login=()=>{
        fetch('http://10.58.7.201:8005/account/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'email': this.state.email,
            'password': this.state.password
        })
        })
        .then(res => res.json())
        .then(res => {
        if (res.access_token) {
            localStorage.setItem('wtw-token', res.access_token);
            this.props.history.push("/");
          }else{
            alert("로그인 정보를 확인해주세요!")
          }
        })
      }

    render(){
    let wrongTxt = null;
    if(this.state.email.length !== 0){
      wrongTxt = this.state.email.includes('@')
    && this.state.email.length > 0 ? 
      null
      :<div className="wrongTxt">
        <p>이메일 주소가 맞나요?</p>
      </div>
    };

    let wrongPw = null;
    if(this.state.password.length !== 0){
        wrongPw = this.state.password.length > 5 ? 
        null
        :<div className="wrongTxt">
          <p>비밀번호가 너무 짧습니다. (6자 이상)</p>
        </div>
      };

    let txtCorrect =null;
    if(this.state.email.length !== 0){
        txtCorrect = this.state.email.length > 1 
        && this.state.email.includes('@')
        ? "txtCorrect" 
        : "txtWrong"
    }
    let pwCorrect = null;
    if(this.state.password.length !== 0){
        pwCorrect = this.state.password.length > 5
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
                name="email"
                placeholder="ID@example.com"
                value={this.state.email}
                onChange={this.onChangeHandler}
                className={txtCorrect}
                />
                
              {wrongTxt}
            </label>
            <label htmlFor="password">
              <p className="loginTitle">비밀번호 *</p>
              <input 
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력해주세요."
              value={this.state.password}
              onChange={this.onChangeHandler}
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
            {
              this.state.email.includes('@')
              &&this.state.email.length > 2 
              && this.state.password.length > 5 
              ? <button className="loginSubmit" onClick={this.login}>이메일로 로그인</button>
              : <button className="loginCom">이메일로 로그인</button>
            }
          </div>
        );
    }
}

export default withRouter(LoginForm);