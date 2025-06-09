import React from "react";

const Card = (props) => {

  return (
    <div className="Card">
      <img src={props.path}></img>
      <div className={"info " + props.color}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button>Learn More!</button>
      </div>
    </div>
  )
}

export default Card