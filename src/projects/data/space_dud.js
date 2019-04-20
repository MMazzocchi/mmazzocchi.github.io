import React from "react";
import CardText from 'reactstrap/lib/CardText';

const space_dud = {
  id: "spacedud", title: "space-dud",
  skills: [
    { icon: "fab fa-node-js" ,label: "nodeJS", color: "darkolivegreen" },
    { icon: "fab fa-js", label: "JavaScript", color: "orange" },
  ],
  links: [
    { icon: "fab fa-github", label: "Github Repository", color: "black",
      link: "https://github.com/mmazzocchi/space-dud" },
  ],
  body: (
    <React.Fragment>
      <CardText>
        <span className="mono">space-dud</span> is a nodeJS package built to
        simplify the streaming of events between multiple web clients. It was
        created to be the underlying pairing and transport mechanism for
        web-based games that need multiple clients per user. For example, a
        web-based VR game would need one client to accept input (from a
        keyboard or game controller) while the other client would be
        displaying the current game state.
      </CardText>
    </React.Fragment>
  )
};

export default space_dud;
