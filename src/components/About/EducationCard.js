import React from "react";
import Card from "react-bootstrap/Card";
import { FaRegCircleUser } from "react-icons/fa6";

function EducationCard({ institute, duration, skills }) {
  return (
    <Card className="education-card mb-3">
      <Card.Body className="d-flex">
        <div className="me-3 icon-col">
          <FaRegCircleUser size={40} className="text-muted" />
        </div>
        <div>
          <Card.Title className="mb-1">{institute}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{duration}</Card.Subtitle>
          <Card.Text>
            <strong>Skills:</strong> {skills.join(" · ")}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
