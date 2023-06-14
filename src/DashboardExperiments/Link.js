import { React, useState } from "react";
import vector from "./images/Vector.png";
import arrow from "./images/arrowbtn.png";
import "./Link.css";
const Link = (props) => {
  return (
    <div id="outer">
      <img id="arrow" src={arrow} />
      <img id="vector" src={vector} />
      <div id="inner">
        <div id="textContent">
          <h4>{props.title}</h4>
          <p>Last created on {props.date}</p>
        </div>
      </div>
    </div>
  );
};

export { Link };
