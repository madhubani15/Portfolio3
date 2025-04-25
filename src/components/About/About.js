import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import EducationCard from "./EducationCard";
import Certificates from "./Certificates";
import laptopImg from "../../Assets/about.png";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know who <strong className="purple">I am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
              

        <h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={8}>
            <EducationCard
              school="Lovely Professional University - Bachelor's degree, Computer Science Engineering"
              duration="Sep 2022 - Jun 2026"
            />

            <EducationCard
              school="Namo Rims Junior College"
              duration="May 2020 – Mar 2021"
            />

            <EducationCard
              school="Kendriya Vidyalaya Lohegaon Pune"
              duration="Apr 2018 – Mar 2019"
            />
          </Col>
        </Row>
        
              
        <Certificates />
       
        

       
      </Container>
    </Container>
  );
}

export default About;
