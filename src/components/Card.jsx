import React from "react";

function Card({ ...props }) {
  const {
    image,
    title,
    description,
    comment,
    likepoints,
    dislikepoints
  } = props;

  const divLikeStyle = {
    width: `${likepoints}%`
  };

  const divDisLikeStyle = {
    width: `${dislikepoints}%`
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
            <img src="./images/like.png" alt={"like" + title} />
          </div>
          <div className="likebutton dislike">
            <img src="./images/dislike.png" alt={"dislike" + title} />
          </div>
          <div className="vote">
            <button>Vote Now</button>
          </div>
        </div>
      </div>
      <div className="votebar">
        <div className="resultbar like" style={divLikeStyle}>
          <span>
            <img src="./images/like.png" alt={"likebar" + title} />
          </span>
          {likepoints}
        </div>
        <div className="resultbar dislike" style={divDisLikeStyle}>
          <span>
            <img src="./images/dislike.png" alt={"dislikebar" + title} />
          </span>
          {dislikepoints}
        </div>
      </div>
    </div>
  );
}

export default Card;
