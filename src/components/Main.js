import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./main.css";

const Main = () => {
  console.log("i am here");
  return (
    <div className="main-container">
      <video autoPlay loop muted>
        <source src="/videos/walk.mp4" type="video/mp4" />
      </video>

      <h1>FITNESS TRAINING</h1>
      <p>Why are you not keeping fit ?</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          JOIN NOW
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("Hi")}
        >
          WATCH THIS <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};
export default Main;
