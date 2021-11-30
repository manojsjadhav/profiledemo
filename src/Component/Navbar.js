import React from "react";
import { NavLink } from "react-router-dom";
import img from "../img/img.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="profile">
          <img src={img} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/About" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Portfolios" activeClassName="active">
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Blogs" activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/Contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="fooder">
          <p>@2021 Lorem Ipsum</p>
        </footer>
      </nav>
    </div>
  );
};

export default Navbar;
