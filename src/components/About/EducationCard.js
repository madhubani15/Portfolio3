import React from "react";
import { Card } from "react-bootstrap";
import { FaSchool } from "react-icons/fa";

function EducationCard({ school, duration }) {
  return (
    <Card className="education-card-view">
      <Card.Body className="d-flex align-items-center">
        <div className="me-3">
          <FaSchool size={32} className="text-purple" />
        </div>
        <div>
          <Card.Title className="mb-1">{school}</Card.Title>
          <Card.Text className="text-muted">{duration}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
