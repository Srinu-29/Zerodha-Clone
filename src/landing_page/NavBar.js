import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary my-custom-navbar  py-3  custom-navbar-border ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse row" id="navbarTogglerDemo01">
            <Link class="navbar-brand ms-5 col-7" to="/">
              <img src="media/logo.svg" width={"25%"} height={"25%"}></img>
            </Link>

            <form class="d-flex col-4" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link " aria-current="page" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li class="nav-item active">
                  <Link class="nav-link" to="/support">
                    Support
                  </Link>
                </li> 
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
