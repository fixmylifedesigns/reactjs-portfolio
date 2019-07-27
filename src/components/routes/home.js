import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import portrait from "../../images/portrait.jpg";
import cartoon from '../../images/cartoon.jpg'
import "../../CSS/homepage.css";
import Map from "../googlemaps/map";
import {
  IntelliFlightCard,
  ArtfolioCard,
  EducellCard
} from "../storeRoutes/projects";
import ContactForm from "../material-ui/contactform"
import Footer from '../navigation/footer'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <section id="header" className="intro section dark">
          <div className="section-container">
            <div className="all-content">
              <div className="intro-text">
                <h1>Irving Duran </h1>
                <h3>Full Stack Developer</h3>
              </div>
              <img src={cartoon} alt="portrait" className="portrait" />
            </div>
            <nav className="navigation none">
              <a href="#/resume">Resume</a>
              <a href="https://www.linkedin.com/in/irvingduran/">LinkedIn</a>
              <a href="https://github.com/fixmylifedesigns">GitHub</a>
              <a href="https://www.fmlcycling.com/">Fixmylife Co.</a>
            </nav>
          </div>
        </section>
        <section id="aboutme" className="section light">
          <div className="section-container">
            <h1 className="title font-dark">ABOUT ME</h1>
            <div className="all-content">
            <div className="skills">
            
              <div className="Languages">
                <h1>CODE LANGUAGES</h1>
                <h5>•HTML5 •CSS3 •Javascript ES5/ ES6 •Python</h5>
              </div>
              <div className="libraries">
                <h1>FRAMEWORKS & LIBRARIES</h1>
                <h5>
                  •ReactJS •NodeJs •Express •LESS/SASS •Jest •React Testing
                  Library •Material UI •React Google Maps •React Google Location
                </h5>
              </div>
            </div>
            <div className="description">
              <h1> Hi, I'm Irving a Fullstack Javascript developer. I first got into coding in 2017 when I started building gaming handhelds based off raspberry pi single board computers. My love for learning and creating has gotten me where I am today. </h1>
            </div>
          </div></div>
        </section>
        <section id="recentprojects" className="section dark">
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
        <section id="contact" className="section light">
          <div className="section-container">
            <h1 className="title font-dark">CONTACT</h1>
          </div>
          <div className="map-contact-container">
            <div className="googlemap">
              <h1 className="center">Where to find me</h1>
              <Map />
            </div>
            <div className="form-container">
              <h1 className="center">Get in touch</h1>
            <ContactForm/>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
