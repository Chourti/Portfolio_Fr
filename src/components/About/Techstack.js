import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  
  DiJava,
  DiDotnet,
  DiDart,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiAngular,
  SiCsharp,
  SiFlutter,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      
    </Row>
  );
}

export default Techstack;
