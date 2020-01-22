import React from "react";
import Box from "@material-ui/core/Box";
import HomePage from "./Views/Home";
import { BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import PortolioPage from "./Views/Portfolio";
import BlogPage from "./Views/Blog";
import ExperiencePage from "./Views/Experience";
import TopNav from "./components/Navigation/TopNav";
import Footer from "./components/Footer/Footer";
import MyResume from "../src/Views/Experience/MyResume";
import SignIn from "./Views/Account/Auth/SignIn";
import SignUp from "./Views/Account/Auth/SignUp";
import Admin from "./Views/Account/Admin";
import { withAuthentication } from './components/Session';
import ScrollToTop from 'react-router-scroll-top';
import NewPost from "./Views/Blog/NewPost";
import Data from "./Views/Data/Data";
import Page from "./components/Auth/Page";

const App = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
          <ScrollToTop>
    <TopNav />
    <div className="container-body">
      <Box my={5}>
        <div>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.PORTFOLIO} component={PortolioPage} />
          <Route exact path={ROUTES.BLOG} component={BlogPage} />
          <Route exact path={ROUTES.EXPERIENCE} component={ExperiencePage} />
          <Route exact path={ROUTES.RESUME} component={MyResume} />
          <Route exact path={ROUTES.LOGIN} component={Page} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.ADMIN} component={Admin} />
          <Route exact path={ROUTES.NEW_POST} component={NewPost} />
          <Route exact path={ROUTES.CARDS} component={Data} />
        </div>
      </Box>
    </div>
    <Footer />
    </ScrollToTop>
  </BrowserRouter>
);

export default withAuthentication(App);