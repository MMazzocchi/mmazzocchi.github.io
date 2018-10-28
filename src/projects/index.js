import React from "react";
import { CatBox } from "../CatBox.js";
import { Row, Col, Card, CardTitle, CardBody, CardText, Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Podfeed = () => (
  <React.Fragment>
    <Row>
      <Col md="4">
        <Row className="justify-content-center">
          <Col xs="3" md="2">
            <div>
              <i className="fab fa-python skill-icon"
                 style={{ "backgroundColor": "gold" }}></i>
            </div>
            <p style={{ "color": "gold" }}>
              Python
            </p>
          </Col>
        </Row>
      </Col>
      <Col md="8">
        <Card className="shadow">
          <CardBody>
            <CardTitle tag="h3" style={{ fontFamily: "monospace" }}>
              podfeed
            </CardTitle>

            <CardText>
              podfeed is a Python 3 podcast aggregation library. In essence,
              it's designed to be a scriptable, automatable library for reading
              a set of RSS feeds, gathering the links for any new episodes, and
              optionally downloading the MP3 files itself.
            </CardText>
            <CardText>
              podfeed will definitely become a pypi package. Any day now.
            </CardText>
            <pre style={{ whiteSpace: "pre-wrap" }}>
from podfeed.parser import parseFeed

# Collect episodes published after May 1st, 2018 
episodes = parseFeed("https://www.npr.org/rss/podcast.php?id=510289", 1525132800)

# Write each episode to a file
for episode in episodes:
  episode.writeFile("./{0}_{1}.{2}".format(
    episode.getTitle(), episode.getDate(), episode.getExt()))
            </pre>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </React.Fragment>
);

const Projects = ({ match }) => (
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
              <NavLink tag={ Link } to={ `${ match.url }/podfeed/` }>
                podfeed
              </NavLink>
            </NavItem>
          </Nav>
        </Row>

        <Route path={ `${ match.url }/podfeed/` } component={ Podfeed } />
      </React.Fragment>
    </Router>
  </React.Fragment>
);

export { Projects };
