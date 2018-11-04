import React from "react";
import { Row, Nav, Navbar, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Project } from "./Project.js";

class ProjectSelector extends React.Component {
  constructor(props) {
    super(props);

    this.props.projects.forEach((project) => {
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
          <Row className="justify-content-center">
            <Navbar>
              <Nav pills>
                { this.props.projects.map(({ id, title, url }) => (
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
            </Navbar>
          </Row>

          { this.props.projects.map((project) => (
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
