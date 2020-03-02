import React, { Component } from "react";

export default class SignUpForm extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            email:"",
            password:"",
            repassword:"",
        }
    }
    render(){
        return(
            <div className="signUpForm">
                <label htmlFor="name">
                    <p className="signUpTitle">이름 *</p>
                    <input 
                    type="text"
                    id="name"
                    placeholder="이름을 입력해주세요."
                    />
                </label>
                <label htmlFor="email">
                    <p className="signUpTitle">이메일 *</p>
                    <input 
                    type="email"
                    id="email"
                    placeholder="ID@example.com"
                    />
                </label>
                <label htmlFor="password">
                    <p className="signUpTitle">비밀번호 *</p>
                    <input 
                    type="password"
                    id="password"
                    placeholder="영문, 슷자, 특수문자 2가지 조합 6~15자"
                    />
                </label>
                <label htmlFor="repassword">
                    <p className="signUpTitle">비밀번호 확인 *</p>
                    <input 
                    type="password"
                    id="repassword"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    />
                </label>
                
            </div>
        );
    }
}


