import React from "react";
import fire from "../Firebase/fire";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default class PartialNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user: "Grant Watson"
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  userLogout = e => {
    fire.auth().signOut();
  };

  render() {
    return (
        <div>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">Grant Watson</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink><Link to={ROUTES.HOME}>Home</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to={ROUTES.EXPERIENCE}>Experience</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to={ROUTES.PORTFOLIO}>Portfolio</Link></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink><Link to={ROUTES.BLOG}>Blog</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
    );
  }
}