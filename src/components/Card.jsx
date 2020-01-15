import React from "react";

import { savePoints } from "../services/peopleService";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: "like",
      likepoints: this.props.likepoints,
      likePointsPercent: this.props.likePointsPercent,
      dislikepoints: this.props.dislikepoints,
      dislikePointsPercent: this.props.dislikePointsPercent
    };
    this.setVote = this.setVote.bind(this);
    this.sendVote = this.sendVote.bind(this);
  }

  setVote(myvote) {
    this.setState({ vote: myvote });
  }

  sendVote() {
    const { vote, likepoints, dislikepoints } = this.state;
    const { id } = this.props;
    if (vote === "like") {
      const newLikePoints = likepoints + 1;
      const totalPoints = newLikePoints + dislikepoints;
      const newLikePointsPercent = Math.round(
        (newLikePoints * 100) / totalPoints
      );
      const newDislikePointsPercent = 100 - newLikePointsPercent;
      savePoints(newLikePoints, vote, id)
        .then(response => {
          console.log(response);
        })
        .catch(function(e) {
          console.log(e);
        });
      this.setState({
        likepoints: newLikePoints,
        likePointsPercent: newLikePointsPercent,
        dislikePointsPercent: newDislikePointsPercent
      });
    } else {
      const newDislikePoints = dislikepoints + 1;
      const totalPoints = newDislikePoints + likepoints;
      const newDislikePointsPercent = Math.round(
        (newDislikePoints * 100) / totalPoints
      );
      const newLikePointsPercent = 100 - newDislikePointsPercent;
      savePoints(newDislikePoints, vote, id)
        .then(response => {
          console.log(response);
        })
        .catch(err => console.log(err));
      this.setState({
        dislikepoints: newDislikePoints,
        likePointsPercent: newLikePointsPercent,
        dislikePointsPercent: newDislikePointsPercent
      });
    }
  }

  render() {
    const { image, title, description, comment } = this.props;
    const { vote, likePointsPercent, dislikePointsPercent } = this.state;

    const widthLike =
      likePointsPercent >= 80
        ? 75
        : likePointsPercent <= 20
        ? 25
        : likePointsPercent;

    const widthDisLike =
      dislikePointsPercent >= 80
        ? 75
        : dislikePointsPercent <= 20
        ? 25
        : dislikePointsPercent;

    const divLikeStyle = {
      width: `${widthLike}%`
    };

    const divDisLikeStyle = {
      width: `${widthDisLike}%`
    };
    return (
      <div className="card">
        <img src={image} alt={title} className="imageperson" />
        <div className="cardcontent">
          <div className="likebutton icon">
            <img src="./images/like.png" alt={"likebox" + title} />
          </div>
          <div>
            <h3>{title}</h3>
            <small>
              <strong>{description}</strong>
            </small>
          </div>
          <p>{comment}</p>
          <div className="actions">
            <div className="likebutton">
              <button
                onClick={() => {
                  this.setVote("like");
                }}
              >
                <img src="./images/like.png" alt={"like" + title} />
              </button>
            </div>
            <div className="likebutton dislike">
              <button
                onClick={() => {
                  this.setVote("dislike");
                }}
              >
                <img src="./images/dislike.png" alt={"dislike" + title} />
              </button>
            </div>
            <div
              className="vote"
              onClick={() => {
                this.sendVote();
              }}
            >
              <button>Vote Now</button>
            </div>
          </div>
        </div>
        <h1>{vote}</h1>
        <div className="votebar">
          <div className="resultbar likebar" style={divLikeStyle}>
            <span>
              <img src="./images/like.png" alt={"likebar" + title} />
            </span>
            {likePointsPercent} %
          </div>
          <div className="resultbar dislikebar" style={divDisLikeStyle}>
            <span>
              <img src="./images/dislike.png" alt={"dislikebar" + title} />
            </span>
            {dislikePointsPercent} %
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
