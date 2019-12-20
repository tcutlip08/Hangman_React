import React, { Component } from "react";
import axios from "axios";

class InputWord extends Component {
  state = { band: "", video: "", spaces: false };

  componentDidUpdate() {
    console.log(this.state);
  }

  submitNew = event => {
    event.preventDefault();
    if (this.state.band && this.state.video) {
      axios
        .post("/api/word", {
          word: this.state.band,
          video: this.state.video,
          length: this.state.band.length,
          spaces: this.state.spaces
        })
        .then(res => {
          console.log(res);
          this.setState({ band: "", video: "", spaces: false });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log("Finsih the form fucker");
    }
  };

  checkForSpaces(band) {
    for (let i = 0; i < band.length; i++) {
      if (band[i] === " ") {
        this.setState({ spaces: true });
        return;
      }
    }
    this.setState({ spaces: false });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.checkForSpaces(this.state.band);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="jumbotron"
              style={{ textAlign: "center", margin: "auto" }}
            >
              <span>
                Five Finger Death Punch
                <br />
                https://www.youtube.com/embed/NeWntx-z8F4
              </span>
              <form onSubmit={this.submitNew}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label="Band"
                    aria-describedby="basic-addon1"
                    onChange={this.handleInputChange}
                    name="band"
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Band Name
                    </span>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    aria-label="Video"
                    aria-describedby="basic-addon1"
                    onChange={this.handleInputChange}
                    name="video"
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      Video
                    </span>
                  </div>
                </div>
                <button className="btn btn-secondary submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputWord;
