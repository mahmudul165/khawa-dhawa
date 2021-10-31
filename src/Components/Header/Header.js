import React from "react";
import { NavLink } from "react-router-dom";
import "../../Components/Header/Header.css";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid  ">
          <NavLink exact className=" nav-text  text-center text-nowrap" to="/">
            Khawa Dhawa
          </NavLink>
          <button
            class="navbar-toggler taggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="taggle navbar-toggler-icon "></span>
          </button>
          <div
            className=" nav-button  collapse navbar-collapse"
            id="navbarTogglerDemo03"
          >
            <ul className="   navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod",
                    fontWeight: 500,
                  }}
                  className="nav-link active text "
                  aria-current="page"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod",
                    fontWeight: 500,
                  }}
                  className="nav-link text"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod",
                    fontWeight: 500,
                  }}
                  className="nav-link text"
                  to="/recipe"
                >
                  Recipe
                </NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod",
                    fontWeight: 500,
                  }}
                  className="nav-link text "
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
