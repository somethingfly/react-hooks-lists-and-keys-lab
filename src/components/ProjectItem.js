import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesSpans = technologies.map((technology) => {
    return <span key={technology}>{technology}</span> 
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologiesSpans}
      </div>
    </div>
  );
}

export default ProjectItem;
