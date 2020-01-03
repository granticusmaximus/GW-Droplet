import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Navbar from 'react-bootstrap/Navbar'
import * as ROUTES from '../../constants/routes';


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/logo.png"
                        width="40"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
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