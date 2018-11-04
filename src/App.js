import React from "react";
import { Container } from "reactstrap";
import { Nav } from "./Nav.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home";
import { Contact } from "./contact";
import { Projects } from "./projects";

const links = [
  { text: "Home",     dest: "/",         component: Home },
  { text: "Projects", dest: "/projects", component: Projects },
  { text: "Contact",  dest: "/contact",  component: Contact },
];

const App = () => (
  <Router>
    <Container>
      <Nav links={ links } />

      { links.map(({ dest, component }) => (
        <Route key={ `route-${ dest }` }
               path={ dest }
               component={ component } exact />
      )) }
     </Container>
  </Router>
);

export { App };
