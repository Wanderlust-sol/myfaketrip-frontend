import React, { Component } from "react";
import SignUpForm from "./SignUpForm";
import Personal from "./Personal";
import { snsSignUp } from "./FormData";
import "../../styles/Common.scss";
import "./SignUp.scss";


export default class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="signUpWrap">
          <div className="snsSignUp">
            {snsSignUp.map(el=>
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
          <SignUpForm />
          <Personal />
          <div className="agree">
              <p>*선택 항목을 동의하지 않아도 서비스를 이용하실 수 있습니다.</p>
              <p>*회원 가입 시 본인이 만 14세 이상임에 동의하게 됩니다.</p>
          </div>
          <button className="signUpCom">회원가입</button>
        </div>
      </div>  
    );
  }
}
