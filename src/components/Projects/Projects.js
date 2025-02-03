import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import dashboard from "../../Assets/Projects/dashboard.jpeg";
import revolution from "../../Assets/Projects/revolution.png";
import recruteur from "../../Assets/Projects/recruteur.png";
import candidat from "../../Assets/Projects/candidat.png";
import ecom from "../../Assets/Projects/ecom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Mes travaux </strong> Recent 
        </h1>
        <p style={{ color: "white" }}>
          Voici <strong className="purple"> Mes Projets Professionnels </strong>sur lequel j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recruteur}
              isBlog={false}
              title= {<strong className="purple">Recrutement_ONEE Espace Recreuteurs</strong>}
              description="J'ai développé le module recruteur d'une plateforme de recrutement en .NET MVC pour l'Office National de l'Électricité et de l'Eau Potable (ONEE). Ce module simplifie le processus de recrutement en permettant aux recruteurs de créer des offres d'emploi, de gérer les candidatures, de planifier des entretiens et d'évaluer les candidats de manière efficace. Il comprend des fonctionnalités telles que la gestion des profils des candidats, la communication recruteur-candidat et des outils analytiques pour améliorer la prise de décision."
              ghLink="https://github.com/Chourti/ONEE_Recrutement/tree/main/ONEE_BE-Recruteur"
              technologies={[".NET", "C#","MVC", "SQL Server", "Bootstrap","Pie Chart"]}

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={candidat}
              isBlog={false}
              title= {<strong className="purple">Recrutement_ONEE Espace Candidats </strong>}
              description="J'ai développé cette plateforme en utilisant .NET pour le backend et Angular pour le frontend. Les candidats peuvent rechercher des offres d'emploi, postuler en soumettant les documents nécessaires tels que leur diplôme, CV et CIN, tandis que les recruteurs valident ou rejettent les candidatures après avoir examiné les documents fournis. Le système garantit une communication fluide entre les candidats et les recruteurs grâce à des confirmations et des notifications à chaque étape."
              ghLink="https://github.com/Chourti/ONEE_Recrutement/tree/main/CandidatApp"
            // ghLink2="https://github.com/Chourti/ONEE_Recrutement/tree/main/candidat_front"
            technologies={[".NET", "C#", "ANGULAR", "SQL Server", "Tailwind","Bootstrap"]}

            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={revolution}
              title={<strong className="purple"> Revolution Laundry </strong>}
              description="J'ai travaillé avec une équipe départementale pour développer une application mobile appelée Revolution Laundry en utilisant Flutter et Dart. Cette application est conçue pour aider les personnes en France en les connectant avec des services de blanchisserie à proximité. Les utilisateurs peuvent facilement trouver des laveries locales, planifier des collectes et des livraisons de linge, et suivre l'état de leur linge."
              ghLink={false}  // This will prevent the GitHub button from rendering
              technologies={["Flutter","JAVA","Dart","MySQL","Angular"]}
            />
          </Col>
          <Col title="Dashboard Demo ONEE"
           md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title={<strong className="purple">Dashboard Demo ONEE</strong>}
              description="J'ai développé ce tableau de bord d'administration en utilisant HTML, CSS et JavaScript, avec une interface utilisateur moderne comprenant une barre de navigation latérale, des statistiques clés et des tableaux pour les commandes récentes et les clients. Il inclut une barre de recherche, une section de profil utilisateur, et des étiquettes de statut codées par couleur pour une meilleure visualisation. Le design garantit une expérience propre et facile à utiliser, ce qui le rend idéal pour des plateformes de commerce électronique ou d'analyse d'entreprise."
              ghLink="https://github.com/Chourti/Dashboard_demo/tree/main"
            // ghLink2="https://github.com/Chourti/ONEE_Recrutement/tree/main/candidat_front"
            technologies={["HTML","CSS","MySQL","JS","Pie chart"]}


            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title={<strong className ="purple">Site E-commerce</strong>}  
              description="J'ai créé un site e-commerce en utilisant HTML, CSS et JavaScript avec un design moderne et responsive. Le site présente une mise en page épurée, des animations fluides et un système de navigation intuitif, facilitant la navigation et les achats des utilisateurs. Il est optimisé pour les appareils de bureau et mobiles, garantissant ainsi une expérience d'achat fluide."
              ghLink="https://github.com/Chourti/E-com-site/tree/master"
              technologies={["HTML","CSS","Angular","JS"]}
            />
          </Col>

        </Row>
      </Container>
      <Container>

      </Container>
    </Container>
  );
}

export default Projects;
