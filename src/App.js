import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import HomePage from './Views/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import PortolioPage from './Views/Portfolio';
import BlogPage from './Views/Blog';
import ServicePage from './Views/Services';
import ExperiencePage from './Views/Experience';
import TopNav from './components/Navigation/TopNav';
import StickyFooter from 'react-sticky-footer';
import Footer from './components/Footer/Footer';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://grantwatson.app">
        Grant Watson
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Router>
      <TopNav />
      <div className="container-body">


        <Box my={5}>
          <div>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.PORTFOLIO} component={PortolioPage} />
            <Route exact path={ROUTES.BLOG} component={BlogPage} />
            <Route exact path={ROUTES.SERVICES} component={ServicePage} />
            <Route exact path={ROUTES.EXPERIENCE} component={ExperiencePage} />
          </div>
        </Box>

      </div>
      
      

      <Footer />
    </Router>
  );
}
