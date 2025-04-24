import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import speech from "../../Assets/Projects/Speech-to-Text-Software--1-.jpg";
import carla from "../../Assets/Projects/carla.png";
import lang from "../../Assets/Projects/language.jpg";
import spaceship from "../../Assets/Projects/spaceship.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speech}
              isBlog={false}
              title="Speech To Text Bot"
              description="The Python script, created in Spyder and saved on the desktop, uses runtime input via a prompt, converts it to a number using Automation 360's string-to-number function, executes a function with arguments, and converts the output to text. It handles errors with try-catch, sends the result via email using HTML, and returns the value as a string."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carla}
              isBlog={false}
              title="Autonomous Vehicle Simulation"
              description="Autonomous vehicle simulation is a virtual environment that tests and trains self-driving car systems using realistic scenarios, sensors, and traffic conditions. I utilized CARLA, an open-source simulator, to create and simulate my autonomous vehicle project with customizable maps and Python-based control."
              ghLink="https://github.com/madhubani15/autonomous-vehicle-simulation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lang}
              isBlog={false}
              title="Language Correction and Entity Recognition system using Probabilistic models"
              description="The Language Correction and Entity Recognition system leverages probabilistic models to identify and fix linguistic errors while detecting named entities in text. It uses statistical techniques like Hidden Markov Models or Conditional Random Fields to enhance accuracy in natural language processing tasks."           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaceship}
              isBlog={false}
              title="Spaceship Titanic"
              description="The Spaceship Titanic Kaggle project involves predicting which passengers were transported to an alternate dimension after the spaceship's collision with a spacetime anomaly, using a dataset of passenger records. I analyzed key features like CryoSleep, applied machine learning models, and achieved a competitive score by leveraging Python and data science techniques."
              ghLink="https://github.com/madhubani15/Spaceship-Titanic/tree/main"
            />
          </Col>

         

          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
