import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <Link
        to="/"
        className="navbar-brand"
        style={{ color: "white", fontFamily: "Nova Round" }}
      >
        Home
      </Link>
      <div>Dis be Nav</div>
    </nav>
  );
};

export default NavBar;
