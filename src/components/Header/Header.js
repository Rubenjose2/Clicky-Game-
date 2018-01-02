import React from "react";
import "./Header.css";

const header = props => {
  return (
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <p className="navbar-text"> The Clicky Game </p>
        <div className="navbar-text navbar-right">
          <p>Counter: {props.counter}</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default header;
