/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.scss";
import { ReactSVG } from "react-svg";

import SearchIcon from "../../../assets/img/search.svg";

function NavBar() {
  return (
    <nav className="nav" role="navigation">
      <div className="max-centered">
        <h1 className="nav__logo">Rule of thumb.</h1>
        <button
          className="nav__hamburger icon-button"
          // alt="Open Menu"
        >
          <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </svg>
        </button>
        <ul className="nav__links">
          <li>
            <a href="#">Past Trials</a>
          </li>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">Login / Sign Up</a>
          </li>
          <li>
            <form>
              <input
                id="searchInput"
                className="nav__search-input"
                aria-label="search"
                type="text"
              />
              <button
                className="nav__search icon-button"
                //alt="Search"
                type="submit"
              >
                <ReactSVG src={SearchIcon} />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
