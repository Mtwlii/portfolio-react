import React from "react";
import { NavLink, Link } from "react-router-dom";
import Style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${Style["nav-background"]} fixed-top`}
      >
        <div className="container px-2 py-3">
          <Link
            className="navbar-brand text-uppercase fw-bold text-white "
            to="/startFramework"
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bold ms-2"
                  aria-current="page"
                  to="/startFramework/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bold  ms-2"
                  to="/startFramework/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bold ms-2"
                  to="/startFramework/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
