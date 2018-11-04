import React from "react";
import { CardText, CardImg } from "reactstrap";

const warp_racer = {
  id: "warpracer", title: "Warp Racer",
  skills: [
    { icon: "fab fa-node-js" ,label: "nodeJS", color: "darkolivegreen" },
    { icon: "fab fa-js", label: "JavaScript", color: "orange" },
    { icon: "fas fa-cubes", label: "THREE.js", color: "blue" },
  ],
  body: (
    <React.Fragment>
      <CardText>
        Warp Racer is an in-progress multiplayer racing game built on the 
        <span className="mono">space-dud</span> library. It allows multiple
        users to connect to the server, select a racer, and race on
        dynamically generated tracks in real-time.
      </CardText>
      <CardText>
        Users can play using a keyboard, or mobile device.
      </CardText>
      <CardImg bottom width="100%" src="/images/warp_racer.jpg" />
    </React.Fragment>
  )
};

export default warp_racer;
