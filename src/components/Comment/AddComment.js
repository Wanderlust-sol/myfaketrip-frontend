import React, { Component } from "react";
import StarRatingForm from "../StarRatingForm/StarRatingForm";
import "./AddComment.scss";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue }, () =>
      this.props.gradeChange(this.state.rating)
    );
  };

  render() {
    return (
      <div>
        <div className="add_comment_form">
          <form
            className="rating_container"
            onSubmit={
              this.props.comments !== ""
                ? this.props.onSubmit
                : e => e.preventDefault()
            }
          >
            <div>
              <div>
                <div className="rating_title">여행이 만족스러우셨나요?</div>
                <div className="rating_stars">
                  <StarRatingForm
                    name="rating"
                    onStarClick={nextValue => this.onStarClick(nextValue)}
                    grade={this.props.grade}
                  />
                </div>
              </div>
              <button className="comment_submit" type="submit">
                등록
              </button>
            </div>
            <div>
              <div className="input_comment">
                <div>다른 여행자들을 위한 상품평과 팁</div>
                <textarea
                  name="comments"
                  placeholder="이 상품을 구매하려는 여행자에게 도움이 될만한 팁이나 조언을 담아 작성해주세요."
                  onChange={this.props.handleChange}
                  value={this.props.comments}
                ></textarea>
              </div>
              {/* <div className="input_photo">
                <div>사진 등록</div>
                <div>
                  <img
                    src="https://d2yoing0loi5gh.cloudfront.net/assets/kitty/traveler/reservation/finish/ic_photo@2x-4b383fb2d5709e4d101b49f60490c091c045afdebe00c8fa9d4fe5e4c40cd55b.png"
                    alt="camera"
                  />
                  <input name="photo" type="file"></input>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddComment;
