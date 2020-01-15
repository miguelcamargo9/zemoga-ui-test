import React from "react";

function MainCard({ ...props }) {
  const { title, image, comment } = props;

  return (
    <div className="container">
      <div className="maincard">
        <img src={image} alt={title} className="imageperson" />
        <div className="cardcontent">
          <span>What is you opionion on</span>
          <h1>{title}?</h1>
          <p>{comment}</p>
          <strong>What's your veredict?</strong>
        </div>
        <div className="actions">
          <div className="likebutton">
            <img src="./images/like.png" alt="like" />
          </div>
          <div className="likebutton dislike">
            <img src="./images/dislike.png" alt="dislike" />
          </div>
        </div>
        <div className="votebar">
          <div className="clossing">
            <small>Clossing in</small>
          </div>
          <div className="days">
            <span>22 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
