import React from "react";
import "./Work.css";

import Nexus from "../../assets/nexus.png"

const projects = [
  {
    name: "Nexus",
    description: "Nexus is a website designed as a comprehensive guide and interactive platform for individuals entering the postpartum world",
    image: Nexus,
    website: "https://project-a-website.com", 
  },
];

const Project = ({ name, description, image, website }) => (
  <a href={website} target="_blank" rel="noopener noreferrer" className="project-item">
    <div className="project-image" style={{ backgroundImage: `url(${image})` }}>
      <div className="project-details">
        <h3 className="project-name">{name}</h3>
        <h2 className="project-description">{description}</h2>
      </div>
    </div>
  </a>
);

const Work = () => (
  <div className="fullHeight">
    <div className="project-list">
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          image={project.image}
          website={project.website}
        />
      ))}
    </div>
  </div>
);

export default Work;
