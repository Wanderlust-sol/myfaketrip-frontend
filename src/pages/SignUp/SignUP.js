import React, { Component } from "react";
import Layout from "components/Layout/Layout";
import { snsSignUp } from "pages/SignUp/FormData";
import "styles/Common.scss";
import "pages/SignUp/SignUp.scss";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      repassword: "",
      allAgree: false,
      agreeA: false,
      agreeB: false,
      agreeC: false,
      agreeD: false
    };
  }
  //개인정보입력

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //약관동의
  clickHandler = e => {
    console.log("clicked");
    if (e.target.name === "allAgree") {
      if (this.state.allAgree === false) {
        this.setState({
          allAgree: true,
          agreeA: true,
          agreeB: true,
          agreeC: true,
          agreeD: true
        });
      } else {
        this.setState({
          allAgree: false,
          agreeA: false,
          agreeB: false,
          agreeC: false,
          agreeD: false
        });
      }
    } else {
      this.setState({
        [e.target.name]: !this.state[e.target.name]
      });
    }
  };
  //fetch
  signup = () => {
    fetch("http://10.58.6.221:8000/account/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        repassword: this.state.repassword
      })
    }).then(() => {
      this.props.history.push("/");
    });
  };

  isEmailChk = () => {
    return (
      this.state.email.length !== 0 &&
      this.state.email.length > 1 &&
      !this.state.email.includes("@") && (
        <div className="wrongTxt">
          <p>이메일 주소가 맞나요?</p>
        </div>
      )
    );
  };

  isPasswordChk = () => {};

  render() {
    const checkBoxImage = (
      <img
        className="checkImg"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNDggMTEuODA3bDcuMzg3LTcuMzkgMS44MjQgMS44MTgtOS4xNzYgOS4xODItLjAwNC0uMDA0LS4wMDMuMDA0LTUuMjA5LTUuMjExIDEuNzktMS43OSAzLjM5MSAzLjM5MXoiLz48L3N2Zz4="
        alt="checked"
      />
    );
    const rightArrow =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYgNGw0IDQuMDAyTDYuMDA1IDEyIi8+Cjwvc3ZnPgo=";

    // 비밀번호 영문,숫자,특수문자 2가지 조합 6~15자
    const pattern_num = /[0-9]/;
    const pattern_eng = /[a-z]/;
    const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;
    const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const pwCheck =
      pattern_num.test(this.state.password) &&
      pattern_eng.test(this.state.password) &&
      pattern_spc.test(this.state.password) &&
      !pattern_kor.test(this.state.password);
    const pwShort = this.state.password.length > 6;
    const pwLong = this.state.password.length < 15;

    return (
      <>
        <Layout>
          <div className="signUp">
            <div className="signUpWrap">
              <div className="snsSignUp">
                {snsSignUp.map(el => (
                  <button className={el.class}>
                    <img src={el.img} alt={el.title} />
                    {el.title}
                  </button>
                ))}
              </div>
              <div className="or">
                <hr />
                <span>또는</span>
                <hr />
              </div>
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
                    className={
                      this.state.username.length !== 0
                        ? this.state.username.length > 1
                          ? "txtCorrect"
                          : "txtWrong"
                        : ""
                    }
                  />
                  {this.state.username.length !== 0 &&
                    this.state.username.length < 2 && (
                      <div className="wrongTxt">
                        <p>이름은 두 글자 이상 입력해주세요.</p>
                      </div>
                    )}
                </label>
                <label htmlFor="email">
                  <p className="signUpTitle">이메일 *</p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ID@example.com"
                    onChange={this.onChangeHandler}
                    className={
                      this.state.email.length !== 0
                        ? this.state.email.length > 1 &&
                          this.state.email.includes("@")
                          ? "txtCorrect"
                          : "txtWrong"
                        : ""
                    }
                  />
                  {this.isEmailChk()}
                </label>
                <label htmlFor="password">
                  <p className="signUpTitle">비밀번호 *</p>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="영문, 슷자, 특수문자 2가지 조합 6~15자"
                    onChange={this.onChangeHandler}
                    className={
                      this.state.password.length !== 0
                        ? pwCheck && pwShort && pwLong
                          ? "txtCorrect"
                          : "txtWrong"
                        : ""
                    }
                  />
                  {this.state.password.length !== 0 ? (
                    pwShort ? (
                      pwCheck ? (
                        pwLong ? (
                          <div className="correctTxt">
                            <p>안전한 비밀번호입니다.</p>
                          </div>
                        ) : (
                          <div className="wrongTxt">
                            <p>비밀번호가 너무 깁니다. (15자 이하)</p>
                          </div>
                        )
                      ) : (
                        <div className="wrongTxt">
                          <p>
                            비밀번호 영문,숫자,특수문자를 2가지 이상
                            조합해주세요.
                          </p>
                        </div>
                      )
                    ) : (
                      <div className="wrongTxt">
                        <p>비밀번호가 너무 짧습니다. (6자 이상)</p>
                      </div>
                    )
                  ) : null}
                </label>
                <label htmlFor="repassword">
                  <p className="signUpTitle">비밀번호 확인 *</p>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    onChange={this.onChangeHandler}
                    className={
                      this.state.repassword.length !== 0
                        ? this.state.password === this.state.repassword
                          ? "txtCorrect"
                          : "txtWrong"
                        : ""
                    }
                  />
                  {this.state.repassword.length !== 0 ? (
                    this.state.password === this.state.repassword ? (
                      <div className="correctTxt">
                        <p>비밀번호가 일치합니다.</p>
                      </div>
                    ) : (
                      <div className="wrongTxt">
                        <p>비밀번호가 일치하지 않습니다.</p>
                      </div>
                    )
                  ) : null}
                </label>
              </div>
              <div className="personal">
                <div className="checkAll">
                  <label htmlFor="allAgree" />
                  <input
                    type="checkbox"
                    id="allAgree"
                    name="allAgree"
                    onClick={this.clickHandler}
                  />
                  {this.state.allAgree ? checkBoxImage : <span></span>}
                  전체 약관동의
                </div>
                <div className="checkWrap">
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        name="agreeA"
                        onClick={this.clickHandler}
                      />
                      {this.state.agreeA ? checkBoxImage : <span></span>}
                      <div className="txtArea">
                        <p>회원 가입 및 운영약관 동의 (필수)</p>
                      </div>
                      <img src={rightArrow} alt="arrow" />
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="agreeB"
                        onClick={this.clickHandler}
                      />
                      {this.state.agreeB ? checkBoxImage : <span></span>}
                      <div className="txtArea">
                        <p>개인정보 수집 및 이용 (필수)</p>
                      </div>
                      <img src={rightArrow} alt="arrow" />
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="agreeC"
                        onClick={this.clickHandler}
                      />
                      {this.state.agreeC ? checkBoxImage : <span></span>}
                      <div className="txtArea">
                        <p>위치정보 이용약관 (선택)</p>
                      </div>
                      <img src={rightArrow} alt="arrow" />
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        name="agreeD"
                        onClick={this.clickHandler}
                      />
                      {this.state.agreeD ? checkBoxImage : <span></span>}
                      <div className="txtArea">
                        <p>특가 항공권 및 할인 혜택 안내 동의 (선택)</p>
                        <p>프로필 > 알림 설정에서 변경 가능</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="agree">
                  <p>
                    *선택 항목을 동의하지 않아도 서비스를 이용하실 수 있습니다.
                  </p>
                  <p>*회원 가입 시 본인이 만 14세 이상임에 동의하게 됩니다.</p>
                </div>
                {pwLong &&
                pwShort &&
                pwCheck === true &&
                this.state.password === this.state.repassword &&
                this.state.agreeA &&
                this.state.agreeB === true ? (
                  <button className="signUpSubmit" onClick={this.signup}>
                    회원가입
                  </button>
                ) : (
                  <button className="signUpCom">회원가입</button>
                )}
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
