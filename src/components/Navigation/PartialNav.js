import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import '../../assets/css/bootstrap.css'
import logo from '../../assets/img/brand.png'

const PartialNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">
          <img className="navImg" src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="shift"><Link to={ROUTES.HOME}>Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="shift"><Link to={ROUTES.EXPERIENCE}>Experience</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="shift"><Link to={ROUTES.PORTFOLIO}>Portfolio</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="shift"><Link to={ROUTES.BLOG}>Blog</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default PartialNav;