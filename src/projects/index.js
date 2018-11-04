import React from "react";
import { CatBox } from "../CatBox.js";
import { CardBody, CardText } from "reactstrap";
import PropTypes from "prop-types";
import { ProjectSelector } from "./ProjectSelector.js";
import { projects } from "./projects.js";

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

    <ProjectSelector baseUrl={ url } projects={ projects } />
  </React.Fragment>
);

Projects.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  })
};

export { Projects };
