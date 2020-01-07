import React { Component }from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from "reactstrap";


export default class PartialNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }  
  
  render() {
     return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Grant Watson</NavbarBrand>
          
        </Navbar>
      </div>
    );
  } 
}

