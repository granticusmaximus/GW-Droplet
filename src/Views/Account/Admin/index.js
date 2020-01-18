import React from 'react';
import {Button} from 'reactstrap';
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';

const Admin = () => (
  <div>
    <h2>Admin</h2>
    <hr />
    <Button outline color="primary"><Link to={ROUTES.NEW_POST}>New Post</Link></Button>
  </div>
);

export default Admin;