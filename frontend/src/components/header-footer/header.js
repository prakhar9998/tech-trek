import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      users: "",
      tokenlength: 0
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
    if (localStorage.getItem("logintoken") !== null)
      this.setState({
        tokenlength: localStorage.getItem("logintoken").length
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
      <Navbar dark expand="md">
        <NavbarBrand href="/">
          <img
            src="https://i.pinimg.com/originals/27/47/ed/2747edad39a6a4e9fbcfbf3c53822649.png"
            alt=""
            className="nav-avatar"
          />
          <span className="pl-2">{this.state.users}</span>
        </NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                className="py-4 px-4"
                activeClassName="active"
                tag={RRNavLink}
                to="/Rules"
              >
                Rules
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="py-4 px-4"
                activeClassName="active"
                tag={RRNavLink}
                to="/Dashboard"
              >
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="py-4 px-4"
                activeClassName="active"
                tag={RRNavLink}
                to="/Leaderboard"
              >
                Leaderboard
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="py-4 px-4"
                tag={RRNavLink}
                to="http://www.facebook.com"
              >
                Forum
              </NavLink>
            </NavItem>
            <NavItem>
              <>
                {this.state.tokenlength > 10 ? (
                  <NavLink
                    tag={RRNavLink}
                    to="/"
                    className="no-border py-4 pl-4 pr-5"
                    onClick={this.clearLocal}
                  >
                    Logout
                  </NavLink>
                ) : null}
              </>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
