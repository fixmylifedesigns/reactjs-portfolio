import React, { Component } from "react";
import "../../CSS/resume.css";
// import { Switch, Link } from "react-router-dom";
import Navigationbar from "../navigation/navigationbar";
import ResumeDownload from "../material-ui/resumebutton";
import MobileResponsiveResume from "./mobileResponsiveResume";
// import Axios from "axios";
export default class resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div>
          <Navigationbar />
        </div>

        <div className="resume">
          <ResumeDownload />
          {/* <iframe
              title="resume"
              src="https://resume.creddle.io/embed/6v3z8k47n2q"
              width="100%"
              height="100%"
              seamless
            /> */}
          <MobileResponsiveResume />
        </div>
      </div>
    );
  }
}
