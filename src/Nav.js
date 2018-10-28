import React from "react";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from "reactstrap";

const MyNavItem = ({ dest, text }) => (
  <NavItem>
    <NavLink href={ dest }>
      { text }
    </NavLink>
  </NavItem>
);

class MyNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const links = this.props.links;

    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <h1>MM</h1>
        </NavbarBrand>
        <NavbarToggler onClick={ this.toggle } />
        <Collapse isOpen={ this.state.isOpen } navbar>
          <Nav className="ml-auto" navbar>
            { links.map((link) => (
              <MyNavItem { ...link } key={ `navitem-${link.text}` } />
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    );
  };
};

export { MyNav as Nav };
