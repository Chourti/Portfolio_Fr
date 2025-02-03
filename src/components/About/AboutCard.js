import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut tout le monde, Je suis <span className="purple">CHOURTI AYMAN, </span>
            de<span className="purple"> Casablanca, Maroc</span>, J'ai 23ans.
            <br />
            Je suis un ingénieur de logiciel spécialisé dans le développement full-stack avec .NET et Angular, diplomé de l'école Marocaine des Sciences de l'ingénieur (EMSI).
            <br />
            J'ai récemment terminé avec succès mon stage de fin d'études à l'Office National de l'Électricité et de l'Eau Potable (ONEE), d'une durée de 5 mois.
            <br />
            <br />
            En dehors du codage, Voici d'autres activités que je suis passionné avec !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux vids
            </li>
            <li className="about-activity">
              <ImPointRight /> Natation 
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
            <li className="about-activity">
              <ImPointRight /> Boxing
            </li>
          </ul>

          <p style={{ color: "black" }}>
            "Work on things that matter and create a lasting impact."{" "}
          </p>
          <footer className="blockquote-footer">Chourti Ayman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
