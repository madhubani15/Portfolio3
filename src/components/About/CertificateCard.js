import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CertificateCard({ imgPath, title, link }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="certificate-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" href={link} target="_blank">
          View Certificate
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
