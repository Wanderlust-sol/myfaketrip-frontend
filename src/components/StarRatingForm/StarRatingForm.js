import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

class StarRatingForm extends Component {
  render() {
    return (
      <div>
        <StarRatingComponent
          name="grade"
          starCount={5}
          value={this.props.grade}
          onStarClick={this.props.onStarClick}
          starColor={"#51abf3"}
          emptyStarColor={"#BDBDBD"}
        />
      </div>
    );
  }
}

export default StarRatingForm;
