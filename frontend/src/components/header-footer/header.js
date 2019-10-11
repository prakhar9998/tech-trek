import React from "react";
<<<<<<< HEAD

import { BrowserRouter as Link } from "react-router-dom";
=======
>>>>>>> 614f660ba5ed41c614ee7cc90e63f534109a2524
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      users: ""
    };
  }
  componentDidMount() {
    this.gettingUsername();
  }
  gettingUsername = () => {
    const localtoken = localStorage.getItem("logintoken");
    fetch("http://127.0.0.1:8000/accounts/api/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localtoken}`
      }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          users: response.username
        });
      });
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  clearLocal = () => {
    localStorage.clear("logintoken");
  };
  render() {
    return (
      <>
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <span className="user" href="#">
              <img
                src="https://i.pinimg.com/originals/27/47/ed/2747edad39a6a4e9fbcfbf3c53822649.png"
                alt=""
                className="nav-avatar"
              />
              {this.state.users}
            </span>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Rules">Rules</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Leaderboard">Leaderboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" onClick={this.clearLocal}>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
