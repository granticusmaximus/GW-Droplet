import "../../assets/css/App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button } from 'reactstrap';
import MainHome from "../MainHome";


const Navigation = () => (
    <Router>
        <div style={{ display: "flex" }}>
            <div className="sideBar">
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <Link to={"/index"} className="nav-link">
                            <Button outline color="warning">Home</Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path="/index" component={MainHome} />
            </Switch>
        </div>
    </Router>
);

export default Navigation;