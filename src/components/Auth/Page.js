import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import SignIn from "./SignIn";

export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Nav tabs>
          <NavItem>
            <NavLink
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
            >
              Register
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <SignIn />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}