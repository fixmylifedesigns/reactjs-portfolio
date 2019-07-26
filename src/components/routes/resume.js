import React, { Component } from "react";
import "../../CSS/resume.css";
// import { Switch, Link } from "react-router-dom";
import Navigationbar from "../navigation/navigationbar";
export default class resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div>
          <Navigationbar />
        </div>
        <div className="resume">
          <iframe
            title="resume"
            src="https://resume.creddle.io/embed/6v3z8k47n2q"
            width="850"
            height="1100"
            seamless
          />
        </div>
      </div>
    );
  }
}
