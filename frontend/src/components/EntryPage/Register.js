import React, { Component } from "react";
import superagent from "superagent";

import "../../App.css";
import Avatar from "./avatar";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      admissionNo: "",
      password: "",
      cpassword: "",
      mobile: "",
      email: "",
      avatarNo: "1",
      errors: [],
      usernameErr: "",
      passwordErr: "",
      cpasswordErr: "",
      mobileErr: "",
      emailErr: "",
      usernameres: "",
      emailres: ""
    };
  }

  changeAvatar = a => {
    this.setState({
      avatarNo: a
    });
  };

  handleJwt = () => {
    const payload = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      avatar_no: this.state.avatarNo,
      contact_no: this.state.mobile,
      password2: this.state.cpassword,
      admission_no: this.state.admissionNo
    };

    superagent
      .post("http://210.212.85.155:3002/accounts/api/register/")
      .set("Content-Type", "application/json")
      .send(payload)
      .then(res => {
        localStorage.setItem("logintoken", res.body.token.access);
        if (res.body.token.access && res.body.token.access.length > 10) {
          this.props.onSuccessfulLogin();
          window.location.reload();
        }
      })
      .catch(err => {
        console.log(err);
        if (err && err.response && err.response.body) {
          if (err.response.body.username) {
            this.setState({
              usernameres: err.response.body.username
            });
          }
          if (err.response.body.email) {
            this.setState({
              emailres: err.response.body.email
            });
          }
        }
      });
  };

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
  onAdmissionChange = e => {
    this.setState({ admissionNo: e.target.value });
    this.clearValidation("name");
  };
  onUsernameChange = e => {
    this.setState({ username: e.target.value });
    this.clearValidation("username");
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
    this.clearValidation("password");
  };
  onCpasswordChange = e => {
    this.setState({ cpassword: e.target.value });
    this.clearValidation("cpassword");
  };
  onMobileChange = e => {
    this.setState({ mobile: e.target.value });
    this.clearValidation("mobile");
  };
  onEmailChange = e => {
    this.setState({ email: e.target.value });
    this.clearValidation("email");
  };

  submitRegister = e => {
    e.preventDefault();
    if (this.state.admissionNo === "") {
      this.Validation("admissionNo", "Please enter your Admission No");
    }
    if (this.state.username === "" || this.state.username.length < 4) {
      this.Validation("username", "Don't skip and greater than 4");
    }
    if (this.state.password === "") {
      this.Validation("password", "Password length should be greater than 6");
    }
    if (
      this.state.cpassword === "" ||
      this.state.cpassword !== this.state.password
    ) {
      this.Validation("cpassword", "Password didn't matched !!");
    }

    if (this.state.mobile === "" || this.state.mobile.length < 10) {
      this.Validation("mobile", "Enter Valid Mobile No.");
    }
    if (this.state.email === "") {
      this.Validation("email", "Provide mail for ease !!!");
    }
    if (
      this.state.admissionNo !== "" &&
      this.state.username.length > 4 &&
      this.state.password !== "" &&
      this.state.cpassword !== "" &&
      this.state.mobile !== "" &&
      this.state.email !== ""
    ) {
      this.handleJwt();
    }
  };

  render() {
    let admissionErr = null,
      usernameErr = null,
      passwordErr = null,
      cpasswordErr = null,
      mobileErr = null,
      emailErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "username") {
        usernameErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
      if (err.elm === "cpassword") {
        cpasswordErr = err.msg;
      }
      if (err.elm === "mobile") {
        mobileErr = err.msg;
      }
      if (err.elm === "email") {
        emailErr = err.msg;
      }
    }
    return (
      <div>
        <form
          className="form-signin mt-4"
          onSubmit={this.submitRegister}
          style={{ width: "100%" }}
        >
          <div className="row register-margin">
            <div className="col-md-6">
              <input
                type="text"
                name="username"
                className="form-control mt-3"
                placeholder="Username"
                onChange={this.onUsernameChange}
              />
              <p className="danger-error my-0">
                {usernameErr ? usernameErr : ""}
              </p>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="admissionNo"
                className="form-control mt-3"
                placeholder="Admission No."
                onChange={this.onAdmissionChange}
              />
              <p className="danger-error my-0">
                {admissionErr ? admissionErr : ""}
              </p>
            </div>
          </div>
          <div className="row register-margin">
            <div className="col-md-6">
              <input
                type="Password"
                name="password"
                className="form-control mt-3"
                placeholder="Password"
                onChange={this.onPasswordChange}
                minLength="6"
              />
              <p className="danger-error my-0">
                {passwordErr ? passwordErr : ""}
              </p>
            </div>
            <div className="col-md-6">
              <input
                type="Password"
                name="cpassword"
                className="form-control mt-3"
                placeholder="Confirm Password"
                onChange={this.onCpasswordChange}
                minLength="6"
              />
              <p className="danger-error my-0">
                {cpasswordErr ? cpasswordErr : ""}
              </p>
            </div>
          </div>
          <div className="row register-margin">
            <div className="col-md-6">
              <input
                type="number"
                name="mobile"
                className="form-control mt-3"
                placeholder="Mobile"
                onChange={this.onMobileChange}
                pattern="[0-9]{10}"
                minLength="10"
                maxLength="10"
              />
              <p className="danger-error my-0">{mobileErr ? mobileErr : ""}</p>
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control mt-3"
                placeholder="Email"
                onChange={this.onEmailChange}
              />
              <p className="danger-error my-0">{emailErr ? emailErr : ""}</p>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span style={{ fontSize: "0.8rem" }} className=" mb-2">
              Select Your Avatar!
            </span>
            <Avatar ava={this.changeAvatar} />
          </div>
          <div className="row mt-2 w-50 mx-auto">
            <button
              className="btn btn-lg btn-primary btn-block mb-2 "
              type="submit"
            >
              Register
            </button>
            <small className="danger-error">{`${
              this.state.usernameres.length > 0
                ? `username ${this.state.usernameres}`
                : ""
            }`}</small>
            <small className="danger-error">{`${
              this.state.emailres.length > 0
                ? `email: ${this.state.emailres}`
                : ""
            }`}</small>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
