import React from "react";
import { Row, Col, Card, CardTitle, CardBody, } from "reactstrap";
import PropTypes from "prop-types";

const Project = ({ title, sidebar, body }) => (
  <React.Fragment>
    <Row>
      <Col md="4">
        { sidebar }
      </Col>
      <Col md="8">
        <Card className="shadow">
          <CardBody>
            <CardTitle tag="h3" >
              <span className="mono">{ title }</span>
            </CardTitle>

            { body}
          </CardBody>
        </Card>
      </Col>
    </Row>
  </React.Fragment>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  sidebar: PropTypes.any,
  body: PropTypes.any
};

export { Project };
