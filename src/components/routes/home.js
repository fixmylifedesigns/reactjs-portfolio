import React, { Component } from "react";
import { Link } from "react-router-dom";
import portrait from "../../images/portrait.jpg";
import "../../CSS/homepage.css";
import Map from "../googlemaps/map";
import {
  IntelliFlightCard,
  ArtfolioCard,
  EducellCard
} from "../storeRoutes/projects";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <section className="intro section dark">
          <div className="section-container">
            <div className="all-content">
              <div className="intro-text">
                <h1>Irving Duran </h1>
                <h3>Full Stack Developer</h3>
              </div>
              <img src={portrait} alt="portrait" className="portrait" />
            </div>
            <nav className="navigation">
              <Link to="/resume">Resume</Link>
              <a href="">About Me</a>
              <a href="">Projects</a>
              <a href="">Contact</a>
            </nav>
          </div>
        </section>
        <section className="section light">
          <div className="section-container">
            <h1 className="title font-dark">ABOUT ME</h1>
            <div>
              <h1>SKILLS</h1>
              <h3>• HTML5 • CSS3 • Javascript ES5/ ES6 • Python</h3>
            </div>
            <div>
              <h1>FRAMEWORKS & LIBRARIES</h1>
              <h3>
                • ReactJS • NodeJs • Express • LESS/SASS • Jest <br/>• React Testing
                Library • Material UI <br/>• React Google Maps • React Google 
                Location
              </h3>
            </div>
          </div>
        </section>
        <section className="section dark">
          <div className="section-container">
            <h1 className="title font-light ">RECENT PROJECTS</h1>
            <div className="cards-container">
              <div className="card">
                <IntelliFlightCard />
              </div>
              <div className="card">
                <EducellCard />
              </div>
              <div className="card">
                <ArtfolioCard />
              </div>
            </div>
          </div>
        </section>
        <section className="section light">
          <div className="section-container">
            <h1 className="title font-dark">CONTACT</h1>
          </div>
          <div className="map-contact-container">
            <div className="googlemap">
              <Map />
            </div>
            <div className="form-container">
              <form className="form">
                <input />
                <input />
                <input />
                <button>submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
