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
        .post("http://127.0.0.1:8000/accounts/api/token/")
        .set("Content-Type", "application/json")
        .send(payload)
        .then(res => {
          localStorage.setItem("logintoken", res.body.access);
          this.setState({
            logintoken: localStorage.getItem("logintoken").length
          });
          this.props.onSuccessfulLogin();
        })
       
 
      .catch(err => {
        console.log("err", err);
        this.Validation("logintoken", "Invalid Credentials")
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
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
          <form
            className="form-signin"
            onSubmit={this.submitForm.bind(this)}
            name="mail"
          >
            <h2 className="form-signin-heading">Please login</h2>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.handleuserNameChanged.bind(this)}
              placeholder="User Name"
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
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>
            <br />
            <br />
            <small className="danger-error">{loginErr ? loginErr : ""}</small>
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Login
            </button>
          </form>
        </div>
        
      </div>
    );
  }
}

export default Login;
