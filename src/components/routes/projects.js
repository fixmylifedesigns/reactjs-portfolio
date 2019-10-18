import React, { Component } from "react";
// import projectCards
import "../../CSS/projectspage.css";
import projectsData from "../../data/projectData.json";
import ProjectCard from "../material-ui/projects/projectCard";
import Navigationbar from "../navigation/navigationbar";

export default class projects extends Component {
  render() {
    return (
      <div className="projectsPage-container">
        <div>
          <Navigationbar />
        </div>
        <div className="projects">
          {projectsData
            .filter(project => project.display > 0)
            .map(project => {
              return (
                <div className="card">
                  <ProjectCard project={project} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
