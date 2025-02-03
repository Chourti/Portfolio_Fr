import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser, AiFillGithub } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaBriefcase } from "react-icons/fa"; // Experience icon
import { FaLinkedinIn } from "react-icons/fa"; // Icône LinkedIn
import { AiFillInstagram } from "react-icons/ai"; // Icône Instagram

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Acceuil
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> À Propos de Moi
  
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Mes Projets
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Mon CV
              </Nav.Link>
            </Nav.Item>

            {/* 🔥 Added Experience Section */}
            <Nav.Item>
              <Nav.Link as={Link} to="/experience" onClick={() => updateExpanded(false)}>
                <FaBriefcase style={{ marginBottom: "2px" }} /> Experiences
              </Nav.Link>
            </Nav.Item>

            {/* 🔥 Added Social Icons */}
            <Nav.Item className="social-icons">
              <Nav.Link
                href="https://www.linkedin.com/in/ayman-chourti-b95a28246/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="social-icons">
              <Nav.Link
                href="https://www.instagram.com/ayman___chourti"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="social-icons">
              <Nav.Link
                href="https://github.com/Chourti"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;