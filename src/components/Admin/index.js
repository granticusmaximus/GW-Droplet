import React from 'react';
import { Button } from 'reactstrap';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const Admin = () => (
  <div className="container">
    <div className="pageHeader">Admin</div>
    <hr />
    <h4>Quick Actions</h4>
    <hr />
    <Button outline color="primary"><Link to={ROUTES.NEW_POST}>New Post</Link></Button>
  </div>
);

export default Admin;