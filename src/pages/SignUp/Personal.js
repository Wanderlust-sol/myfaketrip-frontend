import React, {Component} from "react";

export default class Personal extends Component{
    constructor(){
        super();
        this.state={
            mode:"default"
        }
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

        const cilckEvent = this.state.mode === "default" 
      ? <span></span> 
      : <img className="checkImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4xNDggMTEuODA3bDcuMzg3LTcuMzkgMS44MjQgMS44MTgtOS4xNzYgOS4xODItLjAwNC0uMDA0LS4wMDMuMDA0LTUuMjA5LTUuMjExIDEuNzktMS43OSAzLjM5MSAzLjM5MXoiLz48L3N2Zz4=" alt="checked"/>


        return(
            <div className="personal">
                <div className="checkAll">
                    <label htmlFor="allAgree">
                        <input 
                        type="checkbox"
                        id="allAgree"
                        onClick={this.clickHandler}
                        />
                        {cilckEvent}
                        전체 약관동의
                    </label>
                </div>
                <div className="checkWrap">
                    <ul>
                        <li>
                            <input type="checkbox" />
                            {cilckEvent}
                            <div className="txtArea">
                                <p>회원 가입 및 운영약관 동의 (필수)</p>
                            </div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYgNGw0IDQuMDAyTDYuMDA1IDEyIi8+Cjwvc3ZnPgo=" alt="arrow"/>
                        </li>
                        <li>
                            <input type="checkbox" />
                            {cilckEvent}
                            <div className="txtArea">
                                <p>개인정보 수집 및 이용 (필수)</p>
                            </div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYgNGw0IDQuMDAyTDYuMDA1IDEyIi8+Cjwvc3ZnPgo=" alt="arrow"/>
                        </li>
                        <li>
                            <input type="checkbox" />
                            {cilckEvent}
                            <div className="txtArea">
                                <p>위치정보 이용약관 (선택)</p>
                            </div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjQ0VENERBIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTYgNGw0IDQuMDAyTDYuMDA1IDEyIi8+Cjwvc3ZnPgo=" alt="arrow"/>
                        </li>
                        <li>
                            <input type="checkbox" />
                            {cilckEvent}
                            <div className="txtArea">
                                <p>특가 항공권 및 할인 혜택 안내 동의 (선택)</p>
                                <p>프로필 > 알림 설정에서 변경 가능</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}