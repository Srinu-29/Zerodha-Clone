import React from "react";

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
              <a class="navbar-brand ms-5 col-7" href="#">
                <img src="media/logo.svg" width={"25%"} height={"25%"}></img>
              </a>
              
              <form class="d-flex col-4" role="search">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link " aria-current="page" href="#">
                    Sign Up
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li><li class="nav-item active">
                  <a class="nav-link" href="#">
                    Support
                  </a>
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
