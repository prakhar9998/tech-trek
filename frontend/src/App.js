import React, { Component } from "react";
import "./App.css";
import Register from "./components/EntryPage/Register";
import LoginForm from "./components/EntryPage/LoginForm";
import Avatar from "./components/EntryPage/avatar";
import {Redirect} from 'react-router-dom'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false,
      isAvatarOpen: false,
      loginOpen:false

    };
    this.showAvatar = this.showAvatar.bind(this);
  }
  componentDidMount(){
    let tokenlength;
    if(localStorage.getItem('logintoken')){
      tokenlength=localStorage.getItem('logintoken').length
      this.setState({
        loginOpen: true
      })
    }
    else{
      this.setState({
        loginOpen:false
      })
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

  render() {
    if (this.props.isavataropen === true) {
      this.showAvatar();
    }
  
    return (
     
      <>
      {this.state.loginOpen===true?(<Redirect to='/Rules' />):(
        <div className="centering">
          <div className="root-container">
            <div className="box-controller">
              <div
                className={
                  "controller " +
                  (this.state.isLoginOpen ? "selected-controller" : "")
                }
                onClick={this.showlogin}
              >
                Login
              </div>
              <div
                className={
                  "controller " +
                  (this.state.isRegisterOpen ? "selected-controller" : "")
                }
                onClick={this.showRegister}
              >
                Register
              </div>
            </div>

            <div className="box-container">
              {this.state.isLoginOpen && <LoginForm />}
              {this.state.isRegisterOpen && <Register func={this.showAvatar} />}
              {this.state.isAvatarOpen && <Avatar />}
            </div>
          </div>
        </div>
      )}
      </>

    );
  }
}

export default App;
