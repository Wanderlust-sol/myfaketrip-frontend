import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { headerData } from './HeaderData';
import './Header.scss';

class Header extends Component {
  constructor(){
    super();
    this.state={
      index: 0,
    } 
  }

navList=(num)=>{
  this.setState({
    index: num
  })
}

loginClick=()=>{
  this.props.history.push("/login")
}
signupClick=()=>{
  this.props.history.push("/signup")
}
logoClick=()=>{
  this.props.history.push("/")
}
 
  render(){
    console.log(this.props.location)
    return (
      <header>
        {/* header */}
        <div className="headerTop container">
          <div className="logo">
            <h1>
              <button>MyFakeTrip</button>
            </h1>
          </div>
          <div className="myPage">
            <div className="partners">
              <button onClick={this.logoClick}>파트너 등록하기</button>
            </div>
            <div className="logIn">
              <button onClick={this.loginClick}>로그인</button>
            </div>
            <div className="signUpBtn">
              <button onClick={this.signupClick}>회원가입</button>
            </div>
          </div>
        </div>
        {/* nav */}
        <nav className="menu container">
          <div>
            <ul>
              {headerData.map(el=>
              <li key={el.id}>
                <div
                className={this.state.index === el.id ? "color" : null}
                onClick={() => this.navList(el.id)}
                >
                {el.title}
                </div>
              </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default withRouter(Header);