import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.id}. {props.name}</h2>
        <Avatar img={props.img}></Avatar>
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel}></Detail>
        <Detail detailInfo={props.email}></Detail>
      </div>
    </div>
  );
}

export default Card;
