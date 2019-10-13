import React, { Component } from "react";
import "./App.css";
import Register from "./components/EntryPage/RegisterForm";
import LoginForm from "./components/EntryPage/LoginForm";
import Avatar from "./components/EntryPage/avatar";
import { Redirect } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      isAvatarOpen: false,
      loginOpen: false,
      loginState: false
    };
    this.showAvatar = this.showAvatar.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("logintoken")) {
      this.setState({
        loginOpen: true
      });
    } else {
      this.setState({
        loginOpen: false
      });
    }
  }

  showlogin = () => {
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false,
      isAvatarOpen: false
    });
  };

  showRegister = () => {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true,
      isAvatarOpen: false
    });
  };

  showAvatar() {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: false,
      isAvatarOpen: true
    });
  }

  loginModal = () => {
    this.setState(prevState => {
      return {
        loginState: !prevState.loginState,
        isLoginOpen: true,
        isRegisterOpen: false
      };
    });
  };

  SignUpModal = () => {
    this.setState(prevState => {
      return {
        loginState: !prevState.loginState,
        isLoginOpen: false,
        isRegisterOpen: true
      };
    });
  };

  render() {
    if (this.props.isavataropen === true) {
      this.showAvatar();
    }

    return (
      <>
        {this.state.loginOpen === true ? (
          <Redirect to="/Rules" />
        ) : (
          <>
            <div>
              <div className="web-pumpkin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300.16"
                  height="180.614"
                  viewBox="0 0 368.16 223.614"
                >
                  <g transform="translate(0.889 -0.003)">
                    <g className="aa" transform="translate(105 -245)">
                      <path
                        className="bb"
                        d="M159.748,380.079c-2.077.891-4.335-.312-6.425-.565a2.337,2.337,0,0,0-1.44.3,2.826,2.826,0,0,0-1.022,2.59,10.974,10.974,0,0,0,1.154,4.681l-2.541-3.177a7.814,7.814,0,0,0-2.184-2.1,5.3,5.3,0,0,0-5.441.647,15.591,15.591,0,0,0-3.74,4.355,14.532,14.532,0,0,0-.979-5.9,2.1,2.1,0,0,0-.927-1.08,2.362,2.362,0,0,0-1.094-.125,33.724,33.724,0,0,0-8.461,1.526,52.955,52.955,0,0,1,5.323-4.716c2.571-1.989,3.3-4.482,1.88-7.494-1.361-2.883-2.47-5.322-2.583-8.582-.1-2.918-.265-5.2,1.907-7.443,2.712-2.8,6.92-4.963,10.883-4.859a7.423,7.423,0,0,1,6.368,4.5c.915,1.9,2.181,6.412-.01,7.88a3.829,3.829,0,0,1-2.41.369c-.293-.432.132-.967.412-1.407,1.9-2.991-2.122-6.286-4.542-7.189a5.3,5.3,0,0,0-4.837.4c-4.066,2.862-3.449,9.1-.544,12.54,5.737,6.792,14.581,8.809,21.639,13.752a.713.713,0,0,1,.273.283c.122.3-.185.59-.473.732C159.872,380.024,159.81,380.053,159.748,380.079Z"
                      />
                      <path
                        className="cc"
                        d="M135.9,374.457a5.706,5.706,0,0,0,.944-3.942,13.148,13.148,0,0,0-1.179-3.957,21.654,21.654,0,0,1-.838-2.056,13.76,13.76,0,0,1,1.1-10.085,7.222,7.222,0,0,1,1.773-2.368,5.745,5.745,0,0,1,4.066-1.184,8.7,8.7,0,0,1,4.034,1.471c.892.582,1.786,1.5,1.6,2.547-.138.787-.84,1.337-1.222,2.039a4.594,4.594,0,0,0-.163,3.215,15.223,15.223,0,0,0,7.795,9.982c1.175.6,2.429,1.045,3.553,1.735a5.238,5.238,0,0,1,2.472,2.963,4.635,4.635,0,0,1-.848,3.764,10.337,10.337,0,0,1-2.976,2.612c-6.81,4.342-15.28,5.511-23.311,4.654-1.675-.178-3.544-.564-4.461-1.976a4,4,0,0,1,.043-3.973,5.681,5.681,0,0,1,3.479-2.96A7.625,7.625,0,0,0,135.9,374.457Z"
                      />
                      <path
                        className="cc"
                        d="M138.877,367.888a22.055,22.055,0,0,1-2.457-5.136,7.1,7.1,0,0,1,.506-5.53c4.363,3.693,7.786,8.469,12.5,11.7,4.2,2.882,9.2,4.386,13.5,7.121a6.321,6.321,0,0,1,2.949,3.247,4.547,4.547,0,0,1-1.315,4.321,9.524,9.524,0,0,1-4.129,2.221,35.67,35.67,0,0,1-7.841,1.219c-4.969.332-10.188.245-14.6-2.057-.7-.366-1.456-.908-1.5-1.7a1.974,1.974,0,0,1,.379-1.153,15.672,15.672,0,0,1,2.039-2.154,6.621,6.621,0,0,0,1.378-2.614,12.208,12.208,0,0,0,.61-5.243C140.711,370.5,139.7,369.291,138.877,367.888Z"
                      />
                      <path
                        className="dd"
                        d="M159.748,380.079c-2.077.891-4.335-.312-6.425-.565a2.337,2.337,0,0,0-1.44.3,2.826,2.826,0,0,0-1.022,2.59,10.974,10.974,0,0,0,1.154,4.681l-2.541-3.177a7.814,7.814,0,0,0-2.184-2.1,5.3,5.3,0,0,0-5.441.647,15.591,15.591,0,0,0-3.74,4.355,14.532,14.532,0,0,0-.979-5.9,2.1,2.1,0,0,0-.927-1.08,2.362,2.362,0,0,0-1.094-.125,33.724,33.724,0,0,0-8.461,1.526,52.955,52.955,0,0,1,5.323-4.716c2.571-1.989,3.3-4.482,1.88-7.494-1.361-2.883-2.47-5.322-2.583-8.582-.1-2.918-.265-5.2,1.907-7.443,2.712-2.8,6.92-4.963,10.883-4.859a7.423,7.423,0,0,1,6.368,4.5c.915,1.9,2.181,6.412-.01,7.88a3.829,3.829,0,0,1-2.41.369c-.293-.432.132-.967.412-1.407,1.9-2.991-2.122-6.286-4.542-7.189a5.3,5.3,0,0,0-4.837.4c-4.066,2.862-3.449,9.1-.544,12.54,5.737,6.792,14.581,8.809,21.639,13.752a.713.713,0,0,1,.273.283c.122.3-.185.59-.473.732C159.872,380.024,159.81,380.053,159.748,380.079Z"
                      />
                      <path
                        className="ee"
                        d="M133.037,375.716c2.893,1.817,4.077,3.731,2.955,7.328-1.8,5.752-3.6,11.17-4.505,17.188-.987,6.591-1.37,13.26-2.007,19.9-.5,5.242-.651,10.514-.674,15.781-.039,8.74,2.878,24.3-7.672,27.886-4.941,1.68-10.405-.348-14.983-2.365-12.994-5.723-23.182-17.738-24.372-33.168-.949-12.312,4.494-23.7,11.686-32.883,6.572-8.392,15.6-16.7,25.2-20.666A15.268,15.268,0,0,1,133.037,375.716Z"
                      />
                      <path
                        className="ff"
                        d="M124.2,459.142c-4.941,1.681-10.4-.347-14.984-2.364C96.22,451.054,86.032,439.04,84.842,423.61c-.72-9.335,2.238-18.135,6.844-25.849-6.283,8.74-10.776,19.229-9.907,30.5,1.19,15.43,11.378,27.444,24.371,33.168,4.579,2.017,10.043,4.045,14.984,2.365a10.454,10.454,0,0,0,6.586-6.676A10.163,10.163,0,0,1,124.2,459.142Z"
                      />
                      <path
                        className="ee"
                        d="M153.446,375.716c-2.893,1.817-4.078,3.731-2.955,7.328,1.795,5.752,3.6,11.17,4.5,17.188.988,6.591,1.371,13.26,2.007,19.9.5,5.242.651,10.514.675,15.781.039,8.74-2.879,24.3,7.671,27.886,4.941,1.68,10.4-.348,14.984-2.365,12.993-5.723,23.181-17.738,24.371-33.168.95-12.312-4.493-23.7-11.686-32.883-6.572-8.392-15.594-16.7-25.195-20.666A15.266,15.266,0,0,0,153.446,375.716Z"
                      />
                      <path
                        className="ff"
                        d="M162.285,459.142c4.941,1.681,10.406-.347,14.984-2.364,12.993-5.724,23.182-17.738,24.372-33.168.719-9.335-2.239-18.135-6.844-25.849,6.282,8.74,10.775,19.229,9.906,30.5-1.19,15.43-11.378,27.444-24.371,33.168-4.579,2.017-10.043,4.045-14.984,2.365a10.454,10.454,0,0,1-6.586-6.676A10.172,10.172,0,0,0,162.285,459.142Z"
                      />
                      <path
                        className="gg"
                        d="M181.814,404.124a120.006,120.006,0,0,0-6.834-10.961c-4.371-6.252-11.427-15.144-18.839-16.76a7.268,7.268,0,0,0-7.363,2.365c-2.229,2.918-2.152,7.075-1.486,10.658a79.642,79.642,0,0,0,2.779,9.483c4.9,15.417,4.914,31.025,2.036,46.872-.882,4.855-7.336,12.747-3.476,17.582a6.347,6.347,0,0,0,3.351,1.968c10.275,2.908,22.908-.753,30.795-7.772,7.12-6.336,9.788-16.408,8.644-25.657C190.209,422.11,186.438,412.544,181.814,404.124Z"
                      />
                      <path
                        className="ff"
                        d="M149.439,458.456c10.275,2.908,22.907-.753,30.795-7.772,7.12-6.336,9.788-16.408,8.644-25.657a65.4,65.4,0,0,0-2.641-11.778,71,71,0,0,1,5.184,18.653c1.144,9.249-1.524,19.321-8.644,25.657-7.887,7.019-20.52,10.68-30.795,7.772a6.347,6.347,0,0,1-3.351-1.968,6.528,6.528,0,0,1-1.009-5.621A8.864,8.864,0,0,0,149.439,458.456Z"
                      />
                      <path
                        className="hh"
                        d="M158.163,377.04c6.657,2.6,12.846,10.443,16.817,16.123,1.084,1.551,2.158,3.171,3.212,4.839a10.466,10.466,0,0,1-7.913,2.327c-8.16-.944-12.372-10.694-12.919-17.911A12.365,12.365,0,0,1,158.163,377.04Z"
                      />
                      <path
                        className="hh"
                        d="M189.648,391.369a10.544,10.544,0,0,1-3.02,1.364c-7.928,2.148-15.455-5.344-18.639-11.844a12.262,12.262,0,0,1-1.195-6.556c.337.117.672.241,1.006.379C175.862,378.039,183.51,384.435,189.648,391.369Z"
                      />
                      <path
                        className="gg"
                        d="M104.668,404.124a120.227,120.227,0,0,1,6.834-10.961c4.371-6.252,11.427-15.144,18.84-16.76a7.266,7.266,0,0,1,7.362,2.365c2.23,2.918,2.153,7.075,1.486,10.658a79.641,79.641,0,0,1-2.778,9.483c-4.9,15.417-4.915,31.025-2.036,46.872.882,4.855,7.335,12.747,3.476,17.582a6.347,6.347,0,0,1-3.351,1.968c-10.276,2.908-22.908-.753-30.8-7.772-7.121-6.336-9.789-16.408-8.644-25.657C96.273,422.11,100.044,412.544,104.668,404.124Z"
                      />
                      <path
                        className="ff"
                        d="M137.044,458.456c-10.276,2.908-22.908-.753-30.8-7.772-7.121-6.336-9.789-16.408-8.644-25.657a65.308,65.308,0,0,1,2.641-11.778A70.956,70.956,0,0,0,95.062,431.9c-1.145,9.249,1.523,19.321,8.644,25.657,7.887,7.019,20.519,10.68,30.8,7.772a6.347,6.347,0,0,0,3.351-1.968,6.528,6.528,0,0,0,1.008-5.621A8.856,8.856,0,0,1,137.044,458.456Z"
                      />
                      <path
                        className="ii"
                        d="M165.128,452.131c4.025-10.546,2.468-22.1.954-33.039a116.728,116.728,0,0,0-5.173-22.817c-2.759-7.825-6.685-16.39-14.733-18.538a13.272,13.272,0,0,0-13.01,3.312c-3.931,4.046-5.476,9.635-7.175,15.116-3.828,12.347-6.556,25.7-6.9,38.783-.212,8.028.088,17.377,4.935,23.89,7.006,9.415,22.724,12.04,32.008,5.348A25.815,25.815,0,0,0,165.128,452.131Z"
                      />
                      <path
                        className="hh"
                        d="M131.48,386.365a21.062,21.062,0,0,0-3.69,11.415c-.063,6.741,5.377,12.864,12.413,12.049,8.16-.944,12.372-10.694,12.919-17.911.344-4.527-1.874-9.4-6.3-11.117C140.412,378.309,134.9,381.4,131.48,386.365Z"
                      />
                      <path
                        className="hh"
                        d="M128.319,377.04c-6.657,2.6-12.845,10.443-16.816,16.123-1.084,1.551-2.158,3.171-3.212,4.839a10.465,10.465,0,0,0,7.913,2.327c8.16-.944,12.371-10.694,12.919-17.911A12.381,12.381,0,0,0,128.319,377.04Z"
                      />
                      <path
                        className="hh"
                        d="M96.834,391.369a10.556,10.556,0,0,0,3.02,1.364c7.929,2.148,15.455-5.344,18.64-11.844a12.261,12.261,0,0,0,1.194-6.556c-.336.117-.672.241-1.006.379C110.621,378.039,102.972,384.435,96.834,391.369Z"
                      />
                      <path
                        className="jj"
                        d="M142.711,405.658l-3.156,7.011h9.018Z"
                      />
                      <path
                        className="kk"
                        d="M135.3,404.518l-15.172-15.547-6.491,18.149Z"
                      />
                      <path
                        className="jj"
                        d="M118.29,403.974l4.335-12.446-2.5-2.558-6.491,18.149,21.663-2.6-1.2-1.234Z"
                      />
                      <path
                        className="ll"
                        d="M151.178,402.956l16.867-13.69,4.351,18.777Z"
                      />
                      <path
                        className="jj"
                        d="M168.137,404.38l-2.868-12.863,2.775-2.252,4.351,18.778-21.218-5.087,1.339-1.087Z"
                      />
                      <path
                        className="kk"
                        d="M168.908,420.086l-4.889,7.041-7.214-9.188-5.107,8.326-9.231-10.135-4.286,6.224-9.2-8.62-2.364,8.573-8.645-7.534s-5.054,7.688-3.481,14.751a47.325,47.325,0,0,0,5.186,12.922l3.92-5.3,4.092,9.735,4.02-5.44,5.558,6.054,5.386-6.581,7.616,8.643,2.742-9.368,8.627,6.144a21.947,21.947,0,0,0,8.572-12.449C172.361,425.453,168.908,420.086,168.908,420.086Z"
                      />
                      <path
                        className="mm"
                        d="M170.212,429.409a21.947,21.947,0,0,1-8.572,12.449l-8.627-6.144-2.742,9.368-7.616-8.643-5.386,6.581-5.558-6.054-4.02,5.44-4.092-9.735-3.92,5.3a47.31,47.31,0,0,1-5.186-12.921c-.056-.253-.086-.507-.126-.76a14.538,14.538,0,0,0,.126,5.23,47.325,47.325,0,0,0,5.186,12.922l3.92-5.3,4.092,9.735,4.02-5.44,5.558,6.054,5.386-6.581,7.616,8.643,2.742-9.368,8.627,6.144a21.947,21.947,0,0,0,8.572-12.449,21.177,21.177,0,0,0,.576-7.655A22.657,22.657,0,0,1,170.212,429.409Z"
                      />
                    </g>
                    <g transform="translate(389.359 21.35)">
                      <path
                        className="nn"
                        d="M-35.109,192.6c43.072-16.828,70.257-34.614,108.643-60.4,17.179-11.542,31.267-26.159,46.729-39.959a616.225,616.225,0,0,0,47.228-47.452c23.967-26.6,36.93-38.372,51.951-71.4,3.262-7.169-2.545,8.234,0,0"
                        transform="translate(-353.159 8.964)"
                      />
                      <path
                        className="nn"
                        d="M-29.857,73.822C-13.231,88.555,10.219,92.36,32.37,94.053c59.891,4.578,120.953-1.926,177.475-22.25S299.1,29.7,337.226-16.706"
                        transform="translate(-359.894 -3.197)"
                      />
                      <path
                        className="nn"
                        d="M31.442-1c.466.65-5.1-5.852-4.222-4.672C39.205,10.486,60.847,31.6,74.1,47.309c18.652,22.11,38.21,38.345,64.567,50.007"
                        transform="translate(-355.987 -11.114)"
                      />
                      <path
                        className="nn"
                        d="M131.74-20.732c1.3,21.911-.124,25.254,0,47.209.11,19.365,2.3,42.2-5.971,60.295"
                        transform="translate(-343.09 -0.57)"
                      />
                      <path
                        className="nn"
                        d="M87.9,129.463A44.08,44.08,0,0,0,76.607,95.446c10.57-6.61,15.761-20.73,11.989-32.613,11.043,1.827,23.466-.116,33.712-4.743,6.555-2.961,12.48-8.068,14.767-14.887.1,5.363,3.645,10.188,8.068,13.224,5.169,3.547,11.6,4.547,16.97.541-2.9,9.7,6.485,18.665,15.441,19.686,4.934.564,10.711-1.985,15.59-2.906-.72,5.709,2.123,13.046,7.216,15.723s11.3,2.644,16.8.953c8.583-2.639,15.646-9.009,20.7-16.429s8.323-15.894,11.368-24.342"
                        transform="translate(-348.398 -3.315)"
                      />
                      <path
                        className="nn"
                        d="M55.635,157.008C60.8,151.467,65.859,145.464,68,138.2c3-10.225,2.594-22.136-1.826-31.913-1.56-3.449-4.493-6.5-8.215-7.2a52.189,52.189,0,0,0,17.391-50.2c3.2,2.258,7.286,2.826,11.2,2.9,22.489.41,44.392-14.927,51.7-36.2a32.155,32.155,0,0,0,13.38,23.659c9.249,6.5,22.086,8.511,30.748.289.723,6.472,5.393,12.022,11.079,15.195s12.292,4.279,18.787,4.743a77.508,77.508,0,0,0,44.008-10.089"
                        transform="translate(-350.663 -6.296)"
                      />
                      <path
                        className="nn"
                        d="M110.2,104.087a4.766,4.766,0,0,0,1-2.477,11.063,11.063,0,0,0-6.7-11.589c7.986-3.429,4.81-12.347-.2-16.463,4.69.963,9.433,1.931,14.218,1.759s9.688-1.6,13.188-4.861c1.143-1.067,2.179-2.676,1.548-4.106.579,2.264,1.639,5.47,3.978,6.408A7.176,7.176,0,0,0,143.884,72c.542,5.1,0,10.993,3.677,14.578,2.967,2.894,7.877,3.047,11.6,1.227s6.616-6.047,8.664-9.65"
                        transform="translate(-345.409 -0.815)"
                      />
                      <path
                        className="nn"
                        d="M16.171,90.567c10.155.247,19.981-4.9,26.8-12.428S53.839,60.908,56.055,51s2.71-20.119,3.191-30.264c3.2,1.92,6.995,2.563,10.713,2.866,23.1,1.88,52.68-8.5,66.519-27.09,17.425-21.782,3.476,3.619,5.6-5.6,1.025,7.314-3.088-6.184,3.111-3,.282.127-4.067-.762-3.111,0,3.949,3.147,12.53,9.568,17.186,11.52,13.883,7.181,26.782,4.517,35.291,2.794,9.888-2,17.441-8.169,25.163-14.314a52.61,52.61,0,0,0-.1,15.251c2.784,13.471,12.246,25.884,25.519,30.264,13.178,4.348,28.057,1.508,40.106-4.816"
                        transform="translate(-354.924 -1.007)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <Modal
                isOpen={this.state.loginState}
                toggle={this.loginModal}
                centered
              >
                <ModalBody>
                  <div className="centering">
                    <div className="root-container">
                      <div className="box-controller">
                        <div
                          className={
                            "controller " +
                            (this.state.isLoginOpen
                              ? "selected-controller"
                              : "")
                          }
                          onClick={this.showlogin}
                        >
                          Login
                        </div>
                        <div
                          className={
                            "controller " +
                            (this.state.isRegisterOpen
                              ? "selected-controller"
                              : "")
                          }
                          onClick={this.showRegister}
                        >
                          Register
                        </div>
                      </div>
                      <p
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.5)",
                          width: "100%"
                        }}
                        className="my-0"
                      ></p>

                      <div className="box-container">
                        {this.state.isLoginOpen && <LoginForm />}
                        {this.state.isRegisterOpen && (
                          <Register func={this.showAvatar} />
                        )}
                        {this.state.isAvatarOpen && <Avatar />}
                      </div>
                    </div>
                  </div>
                </ModalBody>
              </Modal>
            </div>

            <div className="landing-page">
              <div className="cloud1-wrap" style={{ fill: "white" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="121.023"
                  height="39.45"
                  viewBox="0 0 171.023 59.45"
                >
                  <path
                    className="a"
                    d="M170.964,91.048c-.123.444-1.353.823-3.427,1.144-.583.091-1.224.176-1.936.262-14.277,1.652-53.106,1.636-68.083,2.235-18.356.727,15.5,6.374-26.387,4.919C49.037,98.844,21.6,97.972.01,97.277v-4.24l.54.016c9.453.364,6.876-4.561,10.314-6.026,3.454-1.46,9.191,1.465,11.769-8.127,2.588-9.609,25.532-3.973,25.532-3.973C37.268,58.789,53.63,34.567,82.6,41.668c14.255,3.5,16.987,12.95,16.084,21.655-.053.5-.118.989-.187,1.476.246-.027.5-.048.759-.07a68.918,68.918,0,0,1,9.165-.1c22.094,1.091,31.857,10.384,32.424,15.335s-12.908,5.62,5.459,7.063C164.655,88.481,171.825,87.952,170.964,91.048Z"
                    transform="translate(-0.01 -40.396)"
                  />
                </svg>
              </div>
              <div className="cloud2-wrap" style={{ fill: "#fff" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="291.975"
                  height="57.591"
                  viewBox="0 0 251.975 87.591"
                >
                  <path
                    className="a"
                    d="M.111,115.023c.181.654,1.993,1.213,5.05,1.686.859.134,1.8.26,2.852.386,21.034,2.434,78.244,2.411,100.31,3.293,27.045,1.071-22.83,9.391,38.878,7.248,32.552-1.127,72.973-2.411,104.785-3.435v-6.247l-.8.024c-13.928.536-10.131-6.72-15.2-8.878-5.089-2.151-13.542,2.159-17.339-11.975-3.813-14.157-37.617-5.853-37.617-5.853,16.055-23.776-8.051-59.463-50.734-49-21,5.152-25.028,19.08-23.7,31.906.079.733.173,1.457.276,2.174-.362-.039-.741-.071-1.119-.1a101.539,101.539,0,0,0-13.5-.15C59.708,77.705,45.323,91.4,44.488,98.692c-.843,7.311,19.017,8.28-8.043,10.407C9.407,111.242-1.157,110.462.111,115.023Z"
                    transform="translate(-0.01 -40.396)"
                  />
                </svg>
              </div>

              <div className="spider-wrap2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="web-svg"
                  viewBox="0 0 280 355"
                >
                  <image
                    id="web"
                    width="250"
                    height="255"
                    xlinkHref="data:img/png;base64,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DADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMAMAMCAwAwAwIDADADAgMWDr/2B+/cw4Xsyaapvk79l+jYD9UlE8AAAAASUVORK5CYII="
                  />
                  <image
                    id="thread"
                    x="150"
                    y="102"
                    width="4"
                    height="153"
                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAADVCAYAAABwk1H0AAAAhUlEQVRIiWP4//9/yv///xlgGET8/P//vyWyAAg8/f//vxSyAAgc+///Pxvjf7AwHMxmYkAF19AFLqALMIwK4BcQQA9kMkLsIroZjqOhPiowKjAMBahRXHxENyMQXcWH0RQ0KjAqMCowKjAqMCowRAVA/bkDSH06sAAIB/z//1+BgYGBAQDYgWlyP/KLjwAAAABJRU5ErkJggg=="
                  />
                  <image
                    id="spidy"
                    x="133"
                    y="250"
                    width="39"
                    height="35"
                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAjCAYAAAAqoHJFAAAC7ElEQVRogdVZ0W3bMBC9FvmvRlAmqDJB1QniTmBtUG+QbBBvUG1gZ4LKE1iZIN7A8gRXXPsYnFlKIiWKQR5ASIAk8t7d4/FIfWJmSoCSiO5xLdRwLRE1aM+LmyFkF2wlM7+yH+S99ZL2LNVxxsy/PEna2OH76HYtIeOMiH5bcg2FyPsHEZ1iGhabbAyiBkL0joi6OKYRfY7VEbCLRFSQw3HRcDPSkRh+7HnWqKtE4RbZNiZk/K1Si+m/gIpsiPT3feOPyTjH/PkSmcQSuBDRSgUhmGwfcrQMXt4s7JALItxiDp+mJK8YCUoIv/bIKiZu52bnsTkrBL6qyidT0WwxPy4JiAoqqYEg1UJFt4Mt0l6GHGJHNlNlXQmpfjQIWVOCHjR5TTZH5rWjdFCe055cwdv3CZ1xwNxtVM4w+UOC883xzR3svSKbKUKNakPIMV9T4ftQtgXMElWq+7/R1XO2myDb1DL3Gc+ocGs/mFtBxS4ixjDLuT5kRQoPqGJE82fcrxNlYY0M4+5gB8OWJ58ydWidXaNYiFXrpoCR77NzA+HYhz4w81ntMTtmrpl5hecZ7vcT96tz0TBzpWyRA4It7DQ4g8fVvniIZItOhzbEq8REH0fsqeAMJ2ljsCbZwFs+u/8iMVlfu0oXaZpIUreUCD2uuSItCcqUhfXEBLJPVEW9zEiWwjG78ahIXCiwpTskJGs25aYkPAR8+49j4InhkzW/3xNnnGDmvhx8idpJ7IRs/R5orbHFrp8xyNrnvw0ysP3O0ktQ5Yhgbq31o+fNQ0SlsyM6kgV7M+KYx4WI1h6qMwXF0RGMUbKFkm071IHVYkv75Lnc5Gpssdu5hLo+rBTRJnBty62ybQ66ACeb6VSr8f6r/lxEfeUzpIq5hEOJ6tZL2Nb+XKIuWYUiZNr0NR20ykV2g4djiSikbQKi3CHJxfqDZwi/Bc51uhjtR5Lq0xzOFY7DdFOF1QuN/dZnqj/vNqRWnVKmTgcR/QHNFYFlrMGfCgAAAABJRU5ErkJggg=="
                  />
                </svg>
              </div>
              <div className="containerdata">
                <div className="ill">
                  <div className="logo-wrap" style={{ zIndex: "5" }}>
                    <img
                      className="logo"
                      src="https://i.ibb.co/7nKtf0q/Logo-1cloud.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="info">
                  <div className="text-center" style={{ zIndex: "10" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="loginsignup"
                      viewBox="0 0 317 150.721"
                    >
                      <g transform="translate(-18 -374)">
                        <g
                          className="a"
                          transform="translate(18 424.479) rotate(-30)"
                        >
                          <path
                            className="b"
                            d="M90.362,4.747C96.973,9.632,99.1,16.952,96.3,25.35s-4.479,10.413-1.567,10.637,5.487-1.008,5.262,1.68-2.015,7.5-14.109,11.646-17.355,9.07-27.657,12.317-16.572,8.846-19.147,7.054-1.232-6.495-6.271-4.815-9.517,3.808-11.533.56-.784-5.375-4.591-4.927S0,61.853,0,57.374s5.711-6.942,11.2-8.734,24.746-12.43,27.545-20.827,1.9-24.409,6.83-23.962,2.912,9.294,6.607,7.39S72.782-8.242,90.362,4.747Z"
                            transform="translate(0 0)"
                          />
                          <path
                            className="c"
                            d="M1.058,1.257C-.181,2.6-.357,4.447.664,5.392s2.854.626,4.092-.713S6.172,1.488,5.151.543,2.3-.083,1.058,1.257Z"
                            transform="translate(82.677 20.702)"
                          />
                          <path
                            className="c"
                            d="M1.058,1.257C-.181,2.6-.357,4.447.664,5.392s2.853.625,4.092-.713S6.172,1.488,5.15.544,2.3-.083,1.058,1.257Z"
                            transform="translate(72.347 12.724)"
                          />
                        </g>
                        <rect
                          className="d"
                          width="116"
                          height="36"
                          rx="6"
                          transform="translate(122.333 374)"
                          onClick={this.loginModal}
                        />
                        <text
                          className="e"
                          transform="translate(178.333 397)"
                          onClick={this.loginModal}
                        >
                          <tspan x="-28.656" y="0">
                            LOGIN
                          </tspan>
                        </text>
                        <g
                          className="a"
                          transform="translate(245.64 439.019) rotate(16)"
                        >
                          <path
                            className="b"
                            d="M20.415.495C11.827,2,6.5,9.652,6.222,23.3S9.427,38.5,5.4,40.329s-6.776,3.48-4.67,6.685,14.835,6.5,23.809,8.516,20.146,7.234,34.706,6.959,17.4-2.564,17.032-4.67S72.062,52.233,74.26,51.5s11.9-.458,10.622-5.128-4.945-4.832-3.205-7.5,13.553-7.153,10.9-10.816-12.179-3.48-18.955-4.487-12.545-4.579-10.989-7.6,8.058-9.432,4.853-10.989-12.362.458-20.329.549S34.517-1.978,20.415.495Z"
                            transform="translate(0 0)"
                          />
                          <path
                            className="f"
                            d="M5.487,3.166c.3,1.966-.668,3.748-2.167,3.979S.359,5.97.055,4,.723.256,2.222.025,5.183,1.2,5.487,3.166Z"
                            transform="translate(10.397 18.332)"
                          />
                          <path
                            className="f"
                            d="M5.486,3.166c.3,1.965-.667,3.746-2.167,3.978S.358,5.969.055,4,.721.256,2.222.025,5.183,1.2,5.486,3.166Z"
                            transform="translate(24.281 14.236)"
                          />
                        </g>
                        <g transform="translate(114.1 446.351)">
                          <rect
                            className="d"
                            width="116"
                            height="35"
                            rx="6"
                            transform="translate(7.9 -0.351)"
                            onClick={this.SignUpModal}
                          />
                          <text
                            className="g"
                            transform="translate(65.9 22.649)"
                            onClick={this.SignUpModal}
                          >
                            <tspan x="-40.242" y="0">
                              SIGN UP
                            </tspan>
                          </text>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default App;
