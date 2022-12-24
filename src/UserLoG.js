import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import MessageContext from "./components/templates/MessageContext";
function UserLoG() {
  let ctx = useContext(MessageContext);
  return (
    <div className="Login-main">
      <div className="box">
        <div className="header-Log">
          <img src="logo.png" alt="not load" />
          <div className="h-data">
            <Link to="/" className="logo_name">
              {ctx.Title}
            </Link>
            <h5>Set Name</h5>
          </div>
        </div>
        <LoginForm />

      </div>
    </div>
  );
}

export default UserLoG;
