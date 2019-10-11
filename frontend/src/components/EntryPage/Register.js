import React, { Component } from "react";

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
      avatarNo:"1",
      errors: []
    };
  }

  changeAvatar=(a)=>{
    this.setState({
      avatarNo:a
    })
  }

  handleJwt = () => {
    fetch("http://127.0.0.1:8000/accounts/api/register/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        avatar_no: this.state.avatarNo
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        const token = responseJson.token.access;
        localStorage.setItem("registertoken", token);
      })
      .catch(error => {
        console.log(error);
        
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
    if (this.state.admissionNo === "") {
      this.Validation("admissionNo", "Please enter your Admission No");
    }
    if (this.state.username === "") {
      this.Validation("username", "Username will be your identity, don't skip");
    }
    if (this.state.password === "" || this.state.password.length<7) {
      this.Validation("password", "Password lenght should be greater than 6");
    }
    if (this.state.cpassword === "" || this.state.cpassword!==this.state.password) {
      this.Validation("cpassword", "Password didn't matched !!");
    }
   
    if (this.state.mobile === "" || this.state.mobile.length<10) {
      this.Validation(
        "mobile",
        "Enter Valid Mobile No."
      );
    }
    if (this.state.email === "") {
      this.Validation("email", "Provide mail for ease !!!");
    }
    if (
      this.state.admissionNo !== "" &&
      this.state.username !== "" &&
      this.state.password !== "" &&
      this.state.cpassword !== "" &&
      this.state.mobile !== "" &&
      this.state.email !== ""
    ) {
      this.handleJwt();
    
    }
  };

  render() {
    console.log(this.state.avatarNo)
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
      <div className="inner-container">
        <div className="header">Register</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.onUsernameChange}
            />
            <small className="danger-error">
              {usernameErr ? usernameErr : ""}
            </small>
          </div>
          <div className="input-group">
            <label htmlFor="username">Admission No.</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              onChange={this.onAdmissionChange}
            />
            <small className="danger-error">
              {admissionErr ? admissionErr : ""}
            </small>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="Password"
              name="password"
              className="login-input"
              placeholder="Password"
              onChange={this.onPasswordChange}
            />
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>
          </div>
          <div className="input-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              type="Password"
              name="cpassword"
              className="login-input"
              placeholder="Confirm Password"
              onChange={this.onCpasswordChange}
            />
            <small className="danger-error">
              {cpasswordErr ? cpasswordErr : ""}
            </small>
          </div>
          <div className="input-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              name="mobile"
              className="login-input"
              placeholder="Mobile"
              onChange={this.onMobileChange}
            />
            <small className="danger-error">{mobileErr ? mobileErr : ""}</small>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={this.onEmailChange}
            />
            <small className="danger-error">{emailErr ? emailErr : ""}</small>
          </div>
          <>
       
          SELECT AVATAR
          
          <Avatar ava={this.changeAvatar}/>
          </>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            PAY
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
