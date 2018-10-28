import React from "react";
import { Row, Col, Card, CardDeck, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from "reactstrap";
import { ContactCard } from "./ContactCard.js";

const contacts = [
  { icon: "fas fa-envelope", title: "Email", color: "red",
    link: "mailto:maxwell.mazzocchi@gmail.com" },
  { icon: "fab fa-github", title: "GitHub", color: "black",
    link: "https://github.com/mmazzocchi" },
  { icon: "fab fa-linkedin-in", title: "LinkedIn", color: "blue", 
    link: "https://www.linkedin.com/in/maxwellmazzocchi/" },
]

const Contact = () => (
  <React.Fragment>
    <Row className="align-items-center justify-content-center">
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
