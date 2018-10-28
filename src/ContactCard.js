import React from "react";
import { Row, Col, Card, CardDeck, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from "reactstrap";

const ContactCard = ({ icon, title, link, color }) => (
  <Card className="text-center shadow"
        tag="a" href={ link }>
    <CardBody className="contact-card">
      <CardTitle>
        <i className={ `${ icon } skill-icon` }
           style={{ "backgroundColor": color }}></i>
      </CardTitle>
      <CardSubtitle style={{ "color": color }}>
        { title }
      </CardSubtitle>
    </CardBody>
  </Card>
);

export { ContactCard };
