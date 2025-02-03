import React from "react";
import Card from "react-bootstrap/Card";
// eslint-disable-next-line no-unused-vars
  // import "./Experiences.css";


const experiences = [
    {
        role :"Développeur Full Stack .NET Stage PFE ",
        company : "Office National de l'Électricité et de l'Eau Potable (ONEE-BE)",
        duration : "5 mois, Mars - Aout  2024",
        description : "J'ai développé une plateforme de recrutement en .NET pour l'Office National de l'Electricité et de l'Eau Potable (ONEE). Cette solution web moderne automatise l'ensemble du processus de recrutement, de la création des offres d'emploi à la sélection finale des candidats. En utilisant les derniers frameworks .NET, j'ai conçu une plateforme conviviale pour gérer les candidatures, planifier les entretiens et évaluer les profils. Elle intègre des fonctionnalités avancées telles que la gestion des profils des candidats, la communication recruteur-candidat et des outils d'analyse. En tant que développeur .NET, j'ai veillé à ce que la plateforme soit sécurisée, performante et évolutive en travaillant en étroite collaboration avec une équipe multidisciplinaire pour répondre aux exigences de l'entreprise.",
        technologies :[".NET","MVC","C#","MySQL Workbensh","Angular","JS"],
    },
    {
        role :"Développeur Mobile ",
        company : "DSI Conseils & Services",
        duration : "3 Mois, Juin - Sept 2023",
        description : "J'ai travaillé avec une équipe départementale pour développer une application mobile utilisant Flutter et Dart. J'ai également contribué à la mise à jour du site Web RICHBOND et à la création de formulaires interactifs avec Angular. Ces projets d'équipe ont renforcé mes compétences en développement collaboratif et ont conduit à des solutions pratiques.",
        technologies :[" Java", "Flutter", "Dart", "JavaScript"," AngularJS"," English"],
    },
    {
        role :"Développeur Web ",
        company : "SOMAGIC Group",
        duration :"1 mois, Aout - Sept 2022",
        description:"J'ai créé une application de gestion de clientèle en utilisant MySQL pour les bases de données. En parallèle, j'ai construit un site e-commerce en utilisant Python et le framework Django. Ces expériences ont amélioré mes compétences en développement et m'ont permis de contribuer à la création de solutions fonctionnelles et efficaces.",
        technologies:["Python","Django","MySQL","HTML","CSS","Merise","JavaScript","English"],
    }
];

function Experience() {
  return (
    <div className="experience-section">
      <h2 className="section-title">Mes experiences Professionelle</h2>
      {experiences.map((exp, index) => (
        <Card key={index} className="experience-card">
          <Card.Body>
            <Card.Title>{exp.role} - <span className="company">{exp.company}</span></Card.Title>
            <Card.Subtitle className="duration">{exp.duration}</Card.Subtitle>
            <Card.Text>{exp.description}</Card.Text>
            <div className="tech-stack">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-circle">{tech}</span>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Experience;
