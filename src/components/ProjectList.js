import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  {/*
    const projectDiv = projects.map((project) => {
    return (
      <div key={project.id} class="project-item">
          <h3>{project.name}</h3>
          <div>{project.about}</div>
      </div>
    );
  })
  */}
  const projectDiv = projects.map((project) => {
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />;
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectDiv}</div>
    </div>
  );
}

export default ProjectList;
