import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div>
          <Link classname="link" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link classname="link" to="/AdminLogin">
            AdminLogin
          </Link>
        </div>
        <div>
          <Link classname="link" to="/UserLogin">
            UserLogin
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
