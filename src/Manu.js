import React from "react";
import { Link } from "react-router-dom";

function Manu() {
  return (
    <nav class="navbar navbar-expand-lg bg-light fixed-top">
      <div class="container-fluid ">
        <Link class="navbar-brand" to="/">
          Text Editor
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav d-flex">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Calculater">
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
