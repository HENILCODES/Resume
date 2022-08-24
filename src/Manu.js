import React from "react";
import { Link, NavLink } from "react-router-dom";

function Manu(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top shadow">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          Text Editor
        </Link>
        <div className="navbar-collapse">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <NavLink className={props.Home ? "nav-link active" : "nav-link"} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className={props.Calculate ? "nav-link active" : "nav-link"} to="/Calculater">
                Calculater
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Manu;
