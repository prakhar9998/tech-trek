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
      tokenlength: 0,
      avatar_no: 1
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
        console.log();
        this.setState({
          users: response.username,
          avatar_no: response.avatar_no
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
    const avtarCollection = {
      1: "https://i.ibb.co/TbRZ9b7/Group-11.png",
      2: "https://i.ibb.co/GnNz6rK/Group-14.png",
      3: "https://i.ibb.co/Y3jzNNV/Group-12.png",
      4: "https://i.ibb.co/9tNg7VW/Group-15.png",
      5: "https://i.ibb.co/r2pXhbD/Group-16.png",
      6: "https://i.ibb.co/9tNg7VW/Group-15.png"
    };
    return (
      <Navbar dark expand="md" sticky="top">
        <NavbarBrand href="/Dashboard">
          <img
            src={avtarCollection[this.state.avatar_no]}
            alt=""
            className="nav-avatar"
          />
          <span className="pl-3">{this.state.users}</span>
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
