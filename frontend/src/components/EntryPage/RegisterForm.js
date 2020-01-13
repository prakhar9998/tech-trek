import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Register from "./Register";
class Registerform extends Component {
  state = {
    isAuthenticated: false
  };
  handleSuccessfulLogin = () => {
    this.setState({
      isAuthenticated: true
    });
  };
  render() {
    const { isAuthenticated } = this.state;
    return (
      <div>
        {isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        ) : (
          <Register onSuccessfulLogin={this.handleSuccessfulLogin} />
        )}
      </div>
    );
  }
}

export default Registerform;
