import React from 'react';
import { Button } from 'reactstrap';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const TITLE = 'GWS Admin'

const Admin = () => (
  <div className="container">
    <Helmet>
      <title>{TITLE}</title>
    </Helmet>
    <div className="pageHeader">Admin</div>
    <hr />
    <h4>Quick Actions</h4>
    <hr />
    <Button outline color="primary"><Link to={ROUTES.NEW_POST}>New Post</Link></Button>{' '}

    <hr />
    <h4>Current Posts</h4>
  </div>
);

export default Admin;
