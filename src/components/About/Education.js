import React from "react";
import { Container } from "react-bootstrap";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <Container>
      <h1 className="project-heading">
        My <strong className="purple">Education</strong>
      </h1>
      <EducationCard
        institute="Namo Rims Junior College"
        duration="May 2019 - May 2021"
      />
      <EducationCard
        institute="Kendriya Vidyalaya Lohegaon Pune"
        duration="Apr 2018 - Mar 2019
      />
    </Container>
  );
}

export default Education;
