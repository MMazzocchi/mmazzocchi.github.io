import React from "react";
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Card from 'reactstrap/lib/Card';
import CardDeck from 'reactstrap/lib/CardDeck';
import CardTitle from 'reactstrap/lib/CardTitle';
import CardBody from 'reactstrap/lib/CardBody';
import { LabeledSkillIcon } from "../SkillIcon.js";
import { ContactCard } from "../ContactCard.js";
import PropTypes from "prop-types";

const Project = ({ id, title, skills, links, body }) => (
  <React.Fragment>
    <Row>
      <Col md="4">
        <Row className="justify-content-center border-bottom">
          { skills.map((skill, i) => (
            <Col xs="4" key={ `project-skill-${ id }-${ i }` }>
              <LabeledSkillIcon invert={ true } { ...skill } />
            </Col>
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
