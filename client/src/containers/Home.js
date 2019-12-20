import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="jumbotron"
          style={{ textAlign: "center", margin: "auto" }}
        >
          Instructions/Introduction
        </div>

        <div className="row" style={{ paddingTop: "2em" }}>
          <div className="col-sm-5"></div>
          <div className="col-md-2">
            <Link to="/game">
              <button className="btn btn-secondary start">Lets Begin</button>
            </Link>
          </div>
          <div className="col-sm-5"></div>
        </div>
      </div>
    );
  }
}

export default Home;
