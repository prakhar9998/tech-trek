import React, { Component } from "react";
import "../../App.css";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarNumber: 1
    };
  }
  avatarNumber = e => {
    this.props.ava(e.target.value);
  };
  render() {
    return (
      <div className="container">
        <div className="row register-margin mt-2">
          <div className="col-4 col-md-2 text-center">
            <label>
              <input
                type="radio"
                name="avatar"
                value="1"
                onChange={this.avatarNumber}
                defaultChecked
              />
              <img
                src="https://i.ibb.co/3rYDYp8/A1.png"
                alt="avatar01"
                width="100%"
              />
            </label>
          </div>
          <div className="col-4 col-md-2 text-center">
            <label>
              <input
                type="radio"
                name="avatar"
                value="2"
                onChange={this.avatarNumber}
              />
              <img
                src="https://i.ibb.co/GnNz6rK/Group-14.png"
                width="100%"
                alt="avatar02"
              />
            </label>
          </div>
          <div className="col-4 col-md-2 text-center">
            <label>
              <input
                type="radio"
                name="avatar"
                value="3"
                onChange={this.avatarNumber}
              />
              <img
                src="https://i.ibb.co/Y3jzNNV/Group-12.png"
                width="100%"
                alt="avatar03"
              />
            </label>
          </div>
          <div className="col-4 col-md-2 text-center">
            <label>
              <input
                type="radio"
                name="avatar"
                value="4"
                onChange={this.avatarNumber}
              />
              <img
                src="https://i.ibb.co/9tNg7VW/Group-15.png"
                width="100%"
                alt="avatar04"
              />
            </label>
          </div>
          <div className="col-4 col-md-2 text-center">
            <label>
              <input
                type="radio"
                name="avatar"
                value="5"
                onChange={this.avatarNumber}
              />
              <img
                src="https://i.ibb.co/r2pXhbD/Group-16.png"
                width="100%"
                alt="avatar05"
              />
            </label>
          </div>
          <div className="col-4 col-md-2 text-center">
            <label>
              <input
                type="radio"
                name="avatar"
                value="6"
                onChange={this.avatarNumber}
              />
              <img
                src="https://i.ibb.co/pyYKwXL/A6.png"
                alt="avatar06"
                width="100%"
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
