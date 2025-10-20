import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
// import React, { useState } from "react";


// function Projects() {
//   const [hovered, setHovered] = useState(null);
// }
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Render technology circles */}
        {props.technologies && props.technologies.length > 0 && (
          <div className="tech-stack">
            {props.technologies.map((tech, index) => (
              <span key={index} className="tech-circle">{tech}</span>
            ))}
          </div>
        )}

        {/* GitHub Button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
