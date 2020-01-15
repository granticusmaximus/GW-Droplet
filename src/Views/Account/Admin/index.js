import React from 'react';
import BlogList from '../../Blog/BlogList';
import {Button} from 'reactstrap';
import * as ROUTES from "../../../constants/routes";
import { Link } from 'react-router-dom';

const Admin = () => (
  <div>
    <h2>Admin</h2>
    <Button color="info"><Link to={ROUTES.CREATE}>Create New</Link></Button>
    <hr />
    <BlogList />
  </div>
);

export default Admin;