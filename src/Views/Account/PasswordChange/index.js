import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Important Items
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Log Out?</DropdownItem>
        <DropdownItem><SignOutButton /></DropdownItem>
        <DropdownItem divider />
        <DropdownItem><Link to={ROUTES.LANDING}>Landing</Link></DropdownItem>
        <DropdownItem><Link to={ROUTES.HOME}>Home</Link></DropdownItem>
        <DropdownItem><Link to={ROUTES.ACCOUNT}>Account</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;