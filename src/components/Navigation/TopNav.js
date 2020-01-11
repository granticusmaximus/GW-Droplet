import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            Grant Watson
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink><Link to={ROUTES.HOME}>Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={ROUTES.PORTFOLIO}>Portfolio</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={ROUTES.EXPERIENCE}>Experience</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={ROUTES.BLOG}>Blog</Link></NavLink>
                        </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Drop Down Item</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
