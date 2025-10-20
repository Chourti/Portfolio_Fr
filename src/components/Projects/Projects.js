import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import dashboard from "../../Assets/Projects/dashboard.jpeg";
import revolution from "../../Assets/Projects/revolution.png";
import recruteur from "../../Assets/Projects/recruteur.png";
import candidat from "../../Assets/Projects/candidat.png";
import ecom from "../../Assets/Projects/ecom.png";

function Projects() {
  // Track hovered card
  const [hovered, setHovered] = useState(null);

  // Define project data
  const projects = [
    {
      imgPath: recruteur,
      title: "Recrutement_ONEE Espace Recruteurs",
      description:
        "J'ai développé le module recruteur d'une plateforme de recrutement en .NET MVC pour l'Office National de l'Électricité et de l'Eau Potable (ONEE). Ce module simplifie le processus de recrutement en permettant aux recruteurs de créer des offres d'emploi, de gérer les candidatures, de planifier des entretiens et d'évaluer les candidats de manière efficace.",
      ghLink: "https://github.com/Chourti/ONEE_Recrutement/tree/main/ONEE_BE-Recruteur",
      technologies: [".NET", "C#", "MVC", "SQL Server", "Bootstrap", "Pie Chart"],
    },
    {
      imgPath: candidat,
      title: "Recrutement_ONEE Espace Candidats",
      description:
        "J'ai développé cette plateforme en utilisant .NET pour le backend et Angular pour le frontend. Les candidats peuvent rechercher des offres d'emploi, postuler en soumettant leurs documents (CV, diplômes, CIN), tandis que les recruteurs valident ou rejettent les candidatures après examen.",
      ghLink: "https://github.com/Chourti/ONEE_Recrutement/tree/main/CandidatApp",
      technologies: [".NET", "C#", "Angular", "SQL Server", "Tailwind", "Bootstrap"],
    },
    {
      imgPath: revolution,
      title: "Revolution Laundry",
      description:
        "J'ai travaillé avec une équipe pour développer une application mobile appelée Revolution Laundry en utilisant Flutter et Dart. Cette application aide les utilisateurs à trouver des services de blanchisserie à proximité, planifier des collectes et suivre leurs commandes.",
      ghLink: false,
      technologies: ["Flutter", "JAVA", "Dart", "MySQL", "Angular"],
    },
    {
      imgPath: dashboard,
      title: "Dashboard Demo ONEE",
      description:
        "J'ai développé ce tableau de bord d'administration en utilisant HTML, CSS et JavaScript, avec une interface utilisateur moderne comprenant une barre latérale, des statistiques clés et des tableaux pour les commandes récentes et les clients.",
      ghLink: "https://github.com/Chourti/Dashboard_demo/tree/main",
      technologies: ["HTML", "CSS", "MySQL", "JS", "Pie Chart"],
    },
    {
      imgPath: ecom,
      title: "Site E-commerce",
      description:
        "J'ai créé un site e-commerce en utilisant HTML, CSS et JavaScript avec un design moderne et responsive. Le site présente une mise en page épurée, des animations fluides et une navigation intuitive.",
      ghLink: "https://github.com/Chourti/E-com-site/tree/master",
      technologies: ["HTML", "CSS", "Angular", "JS"],
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Mes travaux </strong> récents
        </h1>
        <p style={{ color: "white" }}>
          Voici <strong className="purple">mes projets professionnels</strong> sur lesquels j'ai travaillé récemment.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col
              key={index}
              md={4}
              className={`project-card transition-card ${
                hovered !== null && hovered !== index ? "blurred" : ""
              }`}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={<strong className="purple">{project.title}</strong>}
                description={project.description}
                ghLink={project.ghLink}
                technologies={project.technologies}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
