import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import * as ROUTES from '../../constants/routes';


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Grant Watson</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to={ROUTES.HOME}>Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={ROUTES.PORTFOLIO}>Portfolio</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={ROUTES.SERVICES}>Services</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to={ROUTES.EXPERIENCE}>Experience</Link></NavLink>
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


export default Navigation;