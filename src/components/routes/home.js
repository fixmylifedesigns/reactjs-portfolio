import React, { useEffect, useState } from "react";
import cartoon from "../../images/cartoon.jpg";
import "../../CSS/homepage.css";
import Map from "../googlemaps/map";
import ProjectCard from "../material-ui/projects/projectCard";
import ContactForm from "../material-ui/contactform";
import MobileMenu from "../material-ui/mobilemenu";
import projectsData from "../../data/projectData.json";
import Typing from "react-typing-animation";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Homepage() {
  // const [allProjects, setAllProjects] = useState();
  const [projectPage, setProjectPage] = useState({ start: 0, end: 4 });
  const [pageButton, setPageButton] = useState({ down: null, up: null });

  useEffect(() => {
    if (
      projectsData
        .filter(project => project.display > 0)
        .slice(projectPage.start + 4, projectPage.end + 4).length === 0
    ) {
      console.log("wtf");
      setPageButton({ down: null, up: false });
    } else if (projectPage.start === 0) {
      setPageButton({ down: false, up: true });
    } else {
      setPageButton({ down: null, up: true });
    }
  }, [projectPage]);

  const pageHandler = (choice, number) => {
    const newStart = projectPage.start + choice;
    const newEnd = projectPage.end + choice;
    setProjectPage({ start: newStart, end: newEnd });
  };
  return (
    <div>
      <section id="header" className="intro section dark">
        <div>
          <MobileMenu classname="mobileMenu" />
        </div>
        
        <div className="section-container">
          <div className="all-content">
            <div className="intro-text">
              <h1>Irving Duran </h1>
              <Typing>
                <h3>
                  {" "}
                  Artist
                  <Typing.Delay ms={1000} />
                  <Typing.Backspace count={6} />
                  Creator
                  <Typing.Delay ms={1000} />
                  <Typing.Backspace count={7} />
                  Full Stack Developer
                </h3>
              </Typing>
            </div>
            <img src={cartoon} alt="portrait" className="portrait" />
          </div>
          <nav className="navigation none">
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
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
                  •NextJs •Gatsby •Bootstrap •React Native
                </h5>
              </div>
            </div>
            <div className="description">
              <h1>
                {" "}
                Hi, I'm Irving a Fullstack Developer. I first got into coding in
                2017 when I started building gaming handhelds based off
                Raspberry PI single board computers. My love for learning and
                creating has gotten me where I am today.{" "}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id="recentprojects" className="section dark">
        <div className="section-container">
          <h1 className="title font-light ">RECENT PROJECTS</h1>
          <div className="cards-container">
            {projectsData
              .filter(project => project.display > 0)
              .slice(projectPage.start, projectPage.end)
              .map(project => {
                return (
                  <div className="card">
                    <ProjectCard
                      project={project}
                    />
                  </div>
                );
              })}
          </div>
          <div className="projectButtonContainer">
            <div className="navigation">
              <Button
                variant="contained"
                onClick={() => {
                  pageHandler(-4, -1);
                }}
                disabled={pageButton.down === false ? "true" : ""}
              >
                Prev
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  pageHandler(4, 1);
                }}
                disabled={pageButton.up === false ? "true" : ""}
              >
                Next
              </Button>
            </div>

            <Link to="/projects" className="viewAllProjectsLink">
              <Button to="/projects" variant="contained">
                View All Porjects
              </Button>
            </Link>
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
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
