import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mandabi Mandal </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am a passionate Computer Science & Engineering student at Lovely Professional University, specializing in Python, Machine Learning, and Automation.
            <br />
              Growing up in Indian Air Force stations, I developed adaptability, discipline, and resilience. /I’ve won numerous Olympiads, competitions, and actively led school events, shaping my leadership and teamwork skills.
            <br />
            I am currently pursuing my B./Tech in Computer Science and Engineering from Lovely Professional University.
            <br />
            <br />
              I'm committed to bridging academia and industry to drive innovation. My journey reflects a blend of technical depth, creativity, and a passion for impact. With a focus on AI and automation, I aim to create solutions that shape the future meaningfully.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
