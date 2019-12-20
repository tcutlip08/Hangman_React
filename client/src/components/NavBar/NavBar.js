import React from "react";
import { Link } from "react-router-dom";
import metalhead from "../../assets/images/Metalhead Background.jpg";
import "./NavBar.css";

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div className="col-sm-3">
        <Link
          to="/"
          className="navbar-brand"
          style={{ color: "white", fontFamily: "Nova Round" }}
        >
          Home
        </Link>
      </div>
      <div className="col-sm-6">
        <img src={metalhead} alt="Metal Img" />
      </div>
      <div className="col-sm-3">
        <Link
          to="/input"
          className="navbar-brand"
          style={{
            color: "white",
            fontFamily: "Nova Round",
            float: "right"
          }}
        >
          Add Band
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
