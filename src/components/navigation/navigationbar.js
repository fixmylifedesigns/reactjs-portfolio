import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/navigation.css";

export default class Navigationbar extends Component {
  render() {
    return (
      <div className="Nav-container">
        <div>
          <Link to="/" className="nav-link">Irving Duran</Link>
        </div>
        <div>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
        </div>
      </div>
    );
  }
}
