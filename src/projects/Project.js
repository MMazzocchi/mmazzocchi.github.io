import React from "react";
import { Row, Col, Card, CardDeck, CardTitle, CardBody, } from "reactstrap";
import { LabeledSkillIcon } from "../SkillIcon.js";
import { ContactCard } from "../ContactCard.js";
import PropTypes from "prop-types";

const Project = ({ id, title, skills, links, body }) => (
  <React.Fragment>
    <Row>
      <Col md="4">
        <Row className="justify-content-center border-bottom">
          { skills.map((skill, i) => (
            <LabeledSkillIcon key={ `project-skill-${ id }-${ i }` }
                              invert={ true } { ...skill } />
          ))}
        </Row>
        { links ? (
          <Row className="justify-content-center">
            <CardDeck>
              { links.map((link, i) => (
                <ContactCard key={ `project-link-${ id }-${ i }` }
                             { ...link } />
              ))}
            </CardDeck>
          </Row>
          ) : ""
        }
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  links: PropTypes.array,
  body: PropTypes.any
};

export { Project };
