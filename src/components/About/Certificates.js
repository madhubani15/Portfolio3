import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";

// Import your certificate images
import cert1 from "../../Assets/BI-20240719-5959296 (1)_page-0001.jpg";
import cert2 from "../../Assets/cert2.jpeg";
import cert3 from "../../Assets/cert3.jpeg";
import cert4 from "../../Assets/cert4.jpeg";
import cert5 from "../../Assets/cert5.jpg";
import cert6 from "../../Assets/cert6.jpeg";

function Certificates() {
  return (
    <Container>
      <h1 className="project-heading">
        My <strong className="purple">Certificates </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are some of the certifications I've earned.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={cert1}
            title="Machine Learning & AI - Board Inifnity"
            link="https://drive.google.com/file/d/1y1ae2L8C_e8Pb__gW6p1sWYS55ZZAjwo/view?usp=sharing"
          />
        </Col>

        <Col md={4} className="project-card">
          <CertificateCard
            imgPath={cert2}
            title="Dynamic Programming, Greedy Algorithms - University of Colorado Boulder"
            link="https://www.coursera.org/account/accomplishments/verify/DAHTP58FC66V"
          />
        </Col>

         <Col md={4} className="project-card">
          <CertificateCard
            imgPath={cert3}
            title="Generative AI Primer - Vanderbilt University"
            link="https://www.coursera.org/account/accomplishments/verify/5A4EU94TQC8E"
          />
        </Col>

         <Col md={4} className="project-card">
          <CertificateCard
            imgPath={cert4}
            title="Introduction to Large Language Models - Google Cloud"
            link="https://www.coursera.org/account/accomplishments/verify/572CLWNZS6FD"
          />
        </Col>


         <Col md={4} className="project-card">
          <CertificateCard
            imgPath={cert5}
            title="Deep Learning Foundations: Natural Language Processing with TensorFlow - LinkedIn"
            link="https://www.linkedin.com/learning/certificates/11a491f27e6d8d4870c7ce1c455a2a48d29cb3088a4dfd1bf4f4264c01f89240"
          />
        </Col>


         <Col md={4} className="project-card">
          <CertificateCard
            imgPath={cert6}
            title="Prompt Engineering for ChatGPT - Vanderbilt University"
            link="https://www.coursera.org/account/accomplishments/verify/HF4WGLJ4F7EW"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Certificates;
