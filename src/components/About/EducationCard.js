import React from "react";
import { Card } from "react-bootstrap";
import { FaSchool } from "react-icons/fa";

function EducationCard({ school, duration }) {
  return (
    <Card className="education-card-view">
      <Card.Body className="d-flex align-items-center">
        <div className="me-3">
          <FaSchool size={32} color="#c770f0" />
        </div>
        <div>
          <h5 className="mb-1" style={{ color: "white" }}>{school}</h5>
          <small style={{ color: "white" }}>{duration}</small>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
