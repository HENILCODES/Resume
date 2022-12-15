import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./components/img/logo.png";
import LoginForm from "./components/LoginForm";
function App() {
  return (
    <div className="Login-main">
      <div className="box">
        <div className="header">
          <img src={logo} alt="not load" />
          <div className="h-data">
            <Link to="/" className="logo_name">
              Web Chat
            </Link>
            <h5>Welcome back!</h5>
          </div>
        </div>
        <LoginForm />
        <div className="or">
          <div className="desd"></div>
          <span className="osr">OR</span>
          <div className="desd"></div>
        </div>
        <div className="box1_bottm">
          <span className="crea">Don't have an account?</span>{" "}
          <a href="/" className="sign_up">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
