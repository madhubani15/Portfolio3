import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillAwardFill } from "react-icons/bs";

function CertificateCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="certificate-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" href={props.link} target="_blank">
          <BsFillAwardFill /> &nbsp;
          View Certificate
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;
