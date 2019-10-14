import React, { Component } from "react";
import "../../App.css";

import superagent from "superagent";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      logintoken: 0,
      errors: []
    };
  }
  Validation = (elm, msg) => {
    this.setState(prevState => ({
      errors: [...prevState.errors, { elm, msg }]
    }));
  };
  clearValidation = elm => {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (err.elm !== elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  };
  handleuserNameChanged(event) {
    this.setState({ username: event.target.value });
    this.clearValidation("username");
    this.clearValidation("logintoken");
  }
  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
    this.clearValidation("password");
    this.clearValidation("logintoken");
  }
  submitForm(event) {
    event.preventDefault();

    if (this.state.username === "" || this.state.password === "") {
      if (this.state.username === "") {
        this.Validation("username", "Username is your identity, don't skip");
      }
      if (this.state.password === "") {
        this.Validation("password", "Proove that this is your account");
      }
    } else {
      const payload = {
        username: this.state.username,
        password: this.state.password
      };
      superagent
        .post(`${process.env.REACT_APP_URL}/accounts/api/token/`)
        .set("Content-Type", "application/json")
        .send(payload)
        .then(res => {
          localStorage.setItem("logintoken", res.body.access);
          this.setState({
            logintoken: localStorage.getItem("logintoken").length
          });
          this.props.onSuccessfulLogin();
          window.location.reload();
        })

        .catch(err => {
          console.log("err", err);
          this.Validation("logintoken", "Invalid Credentials");
        });
    }
  }
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 10;
  }
  render() {
    let usernameErr = null,
      passwordErr = null,
      loginErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "username") {
        usernameErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
      if (err.elm === "logintoken") {
        loginErr = err.msg;
      }
    }

    return (
      <div className="">
        <div>
          <form
            className="form-signin mt-4"
            onSubmit={this.submitForm.bind(this)}
          >
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.handleuserNameChanged.bind(this)}
              placeholder="Username or Email"
              style={{ fontSize: "1rem" }}
            />
            <small className="danger-error">
              {usernameErr ? usernameErr : ""}
            </small>
            <br />
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              name="password"
              placeholder="Password"
              onChange={this.handlePasswordChanged.bind(this)}
            />
            <br />

            <button
              className="btn btn-lg btn-primary btn-block mb-2"
              type="submit"
            >
              Login
            </button>
            <small className="danger-error">{loginErr ? loginErr : ""}</small>
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
