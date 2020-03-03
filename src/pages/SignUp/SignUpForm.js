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

    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
    
    let wrongName = null;
    if(this.state.username.length !== 0){ 
        wrongName = this.state.username.length > 1 ?
        null
        : <div className="wrongTxt">
            <p>이름은 두 글자 이상 입력해주세요.</p>
        </div>
    }
    let nameCorrect = null;
    if(this.state.username.length !== 0){
        nameCorrect = this.state.username.length > 1
        ? "txtCorrect" 
        : "txtWrong"
      };

    
    let wrongEmail = null;
    if(this.state.email.length !== 0){
        wrongEmail = this.state.email.length > 1 
        && this.state.email.includes('@')
        ? null
        : <div className="wrongTxt">
            <p>이메일 주소가 맞나요?</p>
        </div>
    }
    let txtCorrect =null;
    if(this.state.email.length !== 0){
        txtCorrect = this.state.email.length > 1 
        && this.state.email.includes('@')
        ? "txtCorrect" 
        : "txtWrong"
    }
    
    // 비밀번호 영문,숫자,특수문자 2가지 조합 6~15자
    const pattern_num = /[0-9]/;
    const pattern_eng = /[a-z]/; 
    const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;
    const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const pwCheck = (pattern_num.test(this.state.password))
    && (pattern_eng.test(this.state.password)) 
    && (pattern_spc.test(this.state.password)) 
    && !(pattern_kor.test(this.state.password));
    const pwShort = this.state.password.length > 6;
    const pwLong = this.state.password.length < 15;
    let wrongPassword=null;
    if(this.state.password.length !== 0){
        wrongPassword= 
        pwShort ? (pwCheck ?( pwLong ? 
            <div className="correctTxt">
                <p>안전한 비밀번호입니다.</p>
            </div>
            :
            <div className="wrongTxt">
                <p>비밀번호가 너무 깁니다. (15자 이하)</p>
            </div>
            )
        :
        <div className="wrongTxt">
            <p>비밀번호 영문,숫자,특수문자를 2가지 이상 조합해주세요.</p>
        </div>
        )
        :
        <div className="wrongTxt">
            <p>비밀번호가 너무 짧습니다. (6자 이상)</p>
        </div>
    }
    let pwCorrect = null;
    if(this.state.password.length !== 0){
        pwCorrect = pwCheck && pwShort && pwLong
        ? "txtCorrect" 
        : "txtWrong"
      };

    let wrongRepassword = null;
    if(this.state.repassword.length !== 0){ 
        wrongRepassword = this.state.password === this.state.repassword 
        ? <div className="correctTxt">
            <p>비밀번호가 일치합니다.</p>
        </div>
        : <div className="wrongTxt">
            <p>비밀번호가 일치하지 않습니다.</p>
        </div>
    }
    let rePwCorrect = null;
    if(this.state.repassword.length !== 0){
        rePwCorrect  = this.state.password === this.state.repassword 
        ? "txtCorrect" 
        : "txtWrong"

    }
    
    
    
    

        return(
            <div className="signUpForm">
                <label htmlFor="name">
                    <p className="signUpTitle">이름 *</p>
                    <input 
                    type="text"
                    id="name"
                    name="username"
                    placeholder="이름을 입력해주세요."
                    value={this.state.username}
                    onChange={this.onChangeHandler}
                    className={nameCorrect}
                    />
                    {wrongName}
                </label>
                <label htmlFor="email">
                    <p className="signUpTitle">이메일 *</p>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ID@example.com"
                    onChange={this.onChangeHandler}
                    className={txtCorrect}
                    />
                    {wrongEmail}
                </label>
                <label htmlFor="password">
                    <p className="signUpTitle">비밀번호 *</p>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="영문, 슷자, 특수문자 2가지 조합 6~15자"
                    onChange={this.onChangeHandler}
                    className={pwCorrect}
                    />
                    {wrongPassword}
                </label>
                <label htmlFor="repassword">
                    <p className="signUpTitle">비밀번호 확인 *</p>
                    <input 
                    type="password"
                    id="repassword"
                    name="repassword"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    onChange={this.onChangeHandler}
                    className={rePwCorrect}
                    />
                    {wrongRepassword}
                </label>
            </div>
        );
    }

}