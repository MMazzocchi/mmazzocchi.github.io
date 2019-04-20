import React from "react";
import CardText from 'reactstrap/lib/CardText';

const site = {
  id: "site", title: "This Site",
  skills: [
    { icon: "fab fa-react", label: "React", color: "royalblue" },
    { icon: "fab fa-js", label: "JavaScript", color: "orange" },
  ],
  links: [
    { icon: "fab fa-github", label: "Github Repository", color: "black",
      link: "https://github.com/mmazzocchi/mmazzocchi.github.io" },
  ],
  body: (
    <React.Fragment>
      <CardText>
        This site is built using React, bootstrap, browserify, gulp, and few
        other things. 
      </CardText>
      <CardText>
        Hosted through the magic of GitHub static pages!
      </CardText>
    </React.Fragment>
  )
};

export default site;
