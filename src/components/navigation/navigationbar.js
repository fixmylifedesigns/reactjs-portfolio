import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/navigation.css";
import MobileMenus from "../material-ui/mobilemenu"
export default class Navigationbar extends Component {
  render() {
    return (
      <div className="Nav-container">
        <div>
          <Link to="/" className="nav-link-home">
            Irving Duran
          </Link>
        </div>
        <MobileMenus classname="navMobileMenu"/>
        <div className="nav-links-container">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <a href="https://www.linkedin.com/in/irvingduran/" className="nav-link">LinkedIn</a>
          <a href="https://github.com/fixmylifedesigns" className="nav-link">GitHub</a>
          <a href="https://www.fmlcycling.com/" className="nav-link">Fixmylife Co.</a>
          {/* <Link to="/resume" className="nav-link">Resume</Link> */}
          {/* <Link to="/projects" className="nav-link">Projects</Link> */}
        </div>
      </div>
    );
  }
}
