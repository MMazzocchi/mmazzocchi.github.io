import React from "react";
import { Row, Col, Card, CardDeck, CardBody, CardTitle, CardSubtitle, CardFooter, Button } from "reactstrap";

const Contact = () => (
  <React.Fragment>
    <Row className="align-items-center">
      <Col md="4">
        <h3>Let's talk!</h3>
      </Col>
      <Col md="8">
        <CardDeck>
          <Card className="text-center">
            <CardBody>
              <CardTitle>
                <i className="fas fa-envelope skill-icon"
                   style={{ "backgroundColor": "red" }}></i>
              </CardTitle>
              <CardSubtitle>
                Email
              </CardSubtitle>
            </CardBody>
            <CardFooter>
              <Button block>
                Go There
              </Button>
            </CardFooter>
          </Card>
        </CardDeck>
      </Col>
    </Row>
  </React.Fragment>
);

export { Contact };
