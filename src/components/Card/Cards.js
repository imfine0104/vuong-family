import React from "react";
import "./Cards.css";

import { Card, CardImg, CardText, CardBody, Button } from "reactstrap";

export default function Cards({ data }) {
  return (
    <div className="cards">
      <Card>
        <CardImg
          top
          width="320px"
          height="250px"
          object-fit="contain"
          src={data.image}
          alt="Card image cap"
        />
        <CardBody>
          <h5>{data.name}</h5>
          <CardText>{data.title}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}
