import React from "react";

function MainCard({ ...props }) {
  const { title, time, image, comment } = props;

  return (
    <div className="maincard">
      <img src={image} alt={title} className="imageperson" />
      <div className="container">
        <div className="cardcontent">
          <span>What is you opionion on</span>
          <h3>{title}?</h3>
          <small>
            <strong>{time}</strong>
          </small>
          <p>{comment}</p>
          <div className="actions">
            <div className="likebutton">
              <img src="./images/like.png" alt="like" />
            </div>
            <div className="likebutton dislike">
              <img src="./images/dislike.png" alt="dislike" />
            </div>
          </div>
        </div>
        <div className="votebar">
          <div className="clossing">
            <samll>Clossing in</samll>
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
