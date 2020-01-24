import React from 'react';
import Box from "@material-ui/core/Box";
import '../assets/css/App.css';
import { BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import PartialNav from './Navigation/PartialNav';
import Footer from './Footer/Footer';
import MainHome from './MainHome';
import BlogPage from './Blog/index'
import NewPost from './Blog/NewPost'
import SignIn from './auth/SignIn'
import Page from './auth/Page'
import ExperiencePage from './Experience';
import MyResume from './Experience/MyResume';
import Admin from './Admin';
import PortfolioPage from './Portfolio';

const App = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <PartialNav />
    <div className="container-body">
      <Box my={5}>
        <div>
          <Route exact path={ROUTES.HOME} component={MainHome} />
          <Route exact path={ROUTES.BLOG} component={BlogPage} />
          <Route exact path={ROUTES.NEW_POST} component={NewPost} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.LOGIN} component={Page} />
          <Route exact path={ROUTES.EXPERIENCE} component={ExperiencePage} />
          <Route exact path={ROUTES.RESUME} component={MyResume} />
          <Route exact path={ROUTES.ADMIN} component={Admin} />
          <Route exact path={ROUTES.PORTFOLIO} component={PortfolioPage} />
        </div>
      </Box>
    </div>
    <Footer />
  </BrowserRouter>
);

export default App;
