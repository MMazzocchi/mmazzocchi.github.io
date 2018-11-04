import React from "react";
import { Row, Col, CardText, Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CodeBlock } from "./CodeBlock.js";
import { Project } from "./Project.js";

const projects = [
  { id: "podfeed", title: "podfeed",
    sidebar: (
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

class ProjectSelector extends React.Component {
  constructor(props) {
    super(props);

    projects.forEach((project) => {
      project.url = `${ props.baseUrl }/${ project.id }/`;
    });

    const state = { url: undefined };
    this.state = state;
  }

  clicked(url) {
    this.setState({ url: url });
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Row>
              <Nav tabs>
                { projects.map(({ id, title, url }) => (
                  <NavItem key={ `project-link-${ id }` }>
                    <NavLink
                       tag={ Link }
                       to={ `${ url  }` }
                       active={ this.state.url == url ? true : false }
                       onClick={ () => { this.clicked(url) } }>
                      { title }
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
          </Row>

          { projects.map((project) => (
            <Route key={ `project-${ project.id }` }
                   path={ `${ project.url }/` }
                   component={ () => (<Project { ...project } />) } />
          ))}
        </React.Fragment>
      </Router>
    );
  }
}

export { ProjectSelector };
