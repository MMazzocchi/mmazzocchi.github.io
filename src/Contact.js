import React from "react";
import { Row, Col, Card, CardDeck, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from "reactstrap";
import { ContactCard } from "./ContactCard.js";

const contacts = [
  { icon: "envelope", title: "Email", color: "red", href: "/" },
]

const Contact = () => (
  <React.Fragment>
    <Row className="align-items-center">
      <Col md="4">
        <h3>Let's talk!</h3>
      </Col>
      <Col md="8">
        <CardDeck>
          { contacts.map((contact) => (
            <ContactCard key={ `contact-card-${ contact.title }` } { ...contact } />
          ))}
        </CardDeck>
      </Col>
    </Row>
  </React.Fragment>
);

export { Contact };
