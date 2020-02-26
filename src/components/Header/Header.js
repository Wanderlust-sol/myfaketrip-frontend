import React, { Component } from "react";
import { headerData } from './HeaderData';
import './Header.scss';

export default class Header extends Component {
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
 
  render(){
    return (
      <header>
        {/* header */}
        <div className="headerTop container">
          <div className="logo">
            <h1>
              <a href="1.html">MyFakeTrip</a>
            </h1>
          </div>
          <div className="myPage">
            <div className="partners">
              <a href="1.html">파트너 등록하기</a>
            </div>
            <div className="logIn">
              <a href="1.html">로그인</a>
            </div>
            <div className="signUp">
              <a href="1.html">회원가입</a>
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