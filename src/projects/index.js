import React from "react";
import { CatBox } from "../CatBox.js";
import { Row, Col, CardBody, CardText, Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CodeBlock } from "./CodeBlock.js";
import PropTypes from "prop-types";
import { Project } from "./Project.js";

const projects = [
  { title: "podfeed", sidebar: (
      <Row className="justify-content-center">
        <Col xs="3" md="2" className="text-center">
          <div>
            <i className="fab fa-python skill-icon"
               style={{ "color": "white", "backgroundColor": "gold" }}></i>
          </div>
          <p style={{ "color": "gold" }}>
            Python
          </p>
        </Col>
      </Row>
    ),

    body: (
      <React.Fragment>
        <CardText>
          podfeed is a Python 3 podcast aggregation library. In essence,
          it&#39;s designed to be a scriptable, automatable library for
          reading a set of RSS feeds, gathering the links for any new 
          episodes, and optionally downloading the MP3 files itself.
        </CardText>
        <CardText>
          podfeed will definitely become a pypi package. Any day now.
        </CardText>

        <CodeBlock language="python">
          {`
if __name__ == "__main__":
  print("Hello, world")
          `}
        </CodeBlock>
      </React.Fragment>
    )
  },
];

const Podfeed = () => (
  <Project { ...projects[0] } />
);

const Projects = ({ match: { url } }) => (
  <React.Fragment>
    <CatBox title="$ cat projects.txt">
      <CardBody>
        <CardText>
          Please use the links below to peruse some of the projects I work on
          in my spare time.
        </CardText>
      </CardBody>
    </CatBox>

    <Router>
      <React.Fragment>
        <Row>
          <Nav>
            <NavItem>
              <NavLink tag={ Link } to={ `${ url }/podfeed/` }>
                podfeed
              </NavLink>
            </NavItem>
          </Nav>
        </Row>

        <Route path={ `${ url }/podfeed/` } component={ Podfeed } />
      </React.Fragment>
    </Router>
  </React.Fragment>
);

Projects.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  })
};

export { Projects };
