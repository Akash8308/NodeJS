import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <img className="circle-img" src={props.imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{props.contactNum}</p>
          <p>{props.contactEmail}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
