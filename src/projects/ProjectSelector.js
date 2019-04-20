import React from "react";
import { PropTypes } from 'prop-types';
import Row from 'reactstrap/lib/Row';
import Nav from 'reactstrap/lib/Nav';
import Navbar from 'reactstrap/lib/Navbar';
import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
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

ProjectSelector.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export { ProjectSelector };
