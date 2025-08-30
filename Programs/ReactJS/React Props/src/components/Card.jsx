import React from "react";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.imgLink} alt="avatar_img" />
      <p>{props.contactNum}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;
