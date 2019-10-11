import React, { Component } from "react";
import "../../App.css";
<<<<<<< HEAD
import superagent from "superagent";

=======

import superagent from "superagent";
>>>>>>> 614f660ba5ed41c614ee7cc90e63f534109a2524
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
<<<<<<< HEAD
  handleChange = e => {
    const elem = e.target;
    this.setState({
      [elem.name]: elem.value
    });
  };

  submitForm = event => {
=======
  handleuserNameChanged(event) {
    this.setState({ username: event.target.value });
  }
  handlePasswordChanged(event) {
    this.setState({ password: event.target.value });
  }
  submitForm(event) {
>>>>>>> 614f660ba5ed41c614ee7cc90e63f534109a2524
    event.preventDefault();
    const payload = {
      username: this.state.username,
      password: this.state.password
    };
    superagent
      .post("http://127.0.0.1:8000/accounts/api/token/")
      .set("Content-Type", "application/json")
      .send(payload)
      .then(res => {
<<<<<<< HEAD
=======
        console.log(res.body.access);
>>>>>>> 614f660ba5ed41c614ee7cc90e63f534109a2524
        localStorage.setItem("logintoken", res.body.access);
        this.props.onSuccessfulLogin();
      })
      .catch(err => {
        console.log("err", err);
      });
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 614f660ba5ed41c614ee7cc90e63f534109a2524
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 10;
  }
  render() {
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div className="box">
<<<<<<< HEAD
          <form className="form-signin" onSubmit={this.submitForm} name="mail">
=======
          <form
            className="form-signin"
            onSubmit={this.submitForm.bind(this)}
            name="mail"
          >
>>>>>>> 614f660ba5ed41c614ee7cc90e63f534109a2524
            <h2 className="form-signin-heading">Please login</h2>
            <input
              type="text"
              className="form-control"
<<<<<<< HEAD
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
=======
              value={this.state.username}
              onChange={this.handleuserNameChanged.bind(this)}
>>>>>>> 614f660ba5ed41c614ee7cc90e63f534109a2524
              placeholder="User Name"
            />
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              name="password"
              placeholder="Password"
<<<<<<< HEAD
              onChange={this.handleChange}
=======
              onChange={this.handlePasswordChanged.bind(this)}
>>>>>>> 614f660ba5ed41c614ee7cc90e63f534109a2524
            />
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
