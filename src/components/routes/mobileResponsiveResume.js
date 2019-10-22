import React, { useEffect } from "react";
import resumeData from "./resumeInfo.json";

export default function MobileResponsiveResume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="newresume">
      <div className="left-side">
        <div className="left-text-container">
          <div className="top-content">
            <div className="name-role">
              <h1 className="header-resume">IRVING DURAN</h1>
              <h3 className="header-resume role">FULL STACK DEVELOPER</h3>
            </div>
            <div className="contact-section">
              {resumeData.contact.map(info => {
                return (
                  <a
                    href={info.href}
                    className="resume-link resumePTag mobileLink"
                  >
                    <i className={`${info.class} link-icons`} /> {info.link}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="bottom-content">
            <h2 className="section-titles">Skills</h2>
            <div className="all-skills">
              <div className="skills-container">
                {resumeData.skills_section_one.map(info => {
                  return (
                    <div className="skills-content">
                      <p className="skillPTag bold">{info.title}</p>
                      {info.skills.map(skill => {
                        return <p className="skillPTag">{skill.skill}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="skills-container">
                {resumeData.skills_section_two.map(info => {
                  return (
                    <div className="skills-content">
                      <p className="skillPTag bold">{info.title}</p>
                      {info.skills.map(skill => {
                        return <p className="skillPTag">{skill.skill}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="right-text-container">
          <div className="projects-container">
            <h2 className="section-titles">Projects</h2>
            {resumeData &&
              resumeData.projects.map(project => {
                return (
                  <div className="project">
                    <a href={project.url} className="resume-link">
                      <p className="projectTitle">{project.title}</p>
                    </a>
                    {project.skills.map(skill => {
                      return <p className="skillPTag">{skill.line}</p>;
                    })}
                  </div>
                );
              })}
          </div>
          <div className="employment-container">
            <h2 className="section-titles">Employment</h2>
            {resumeData.employment.map(info => {
              return (
                <div className="employer">
                  <div className="employer-content">
                    <div>
                      <p className="employerTitle">{info.employeer}</p>
                      <p className="sub-title">{info.title}</p>
                    </div>
                    <div className="employment-content">
                      {info.info.map(info => {
                        return <p className="skillPTag">{info.line}</p>;
                      })}
                    </div>
                  </div>
                  {info.description.map(info => {
                    return <p className="skillPTag">{info.line}</p>;
                  })}
                </div>
              );
            })}
          </div>
          <div className="employment-container">
            <h2 className="section-titles">Education</h2>
            {resumeData.education.map(school => {
              return (
                <div className="employer lambdaschool">
                  <div className="employer-content">
                    <div>
                      <p className="employerTitle">{school.school}</p>
                    </div>
                    <div className="employment-content">
                      <p className="skillPTag">{school.duration}</p>
                    </div>
                  </div>
                  <p className="skillPTag achivement">
                    {school.certification}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
