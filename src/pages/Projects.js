import React from "react";
import ProjectItem from "../components/ProjectItem";
import Pro1 from "../assets/pro1.jpg";
import "../styles/Projects.css";
import { ProjectList } from "../helper/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
