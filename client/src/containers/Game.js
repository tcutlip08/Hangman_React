import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Styling/Game.css";
import axios from "axios";

class Game extends Component {
  state = {
    wordArray: [],
    word: {},
    unfinishedWord: [],
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    alreadyGuessed: []
  };

  componentDidMount() {
    this.resetGame();
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = event => {
    if (event.key === "Escape") {
      this.alertUser();
    } else if (
      this.state.alphabet.includes(event.key.toLowerCase()) ||
      this.state.numbers.includes(event.key.toLowerCase())
    ) {
      this.testKeyPressed(event.key.toLowerCase());
    }
  };

  testKeyPressed(key) {}

  alertUser() {
    console.log("Alertttt!!!");
    this.resetGame();
  }

  resetGame() {
    this.getRandomWord();
  }

  getRandomWord() {
    axios
      .get("/api/word/random")
      .then(res => {
        console.log(res.data.word);
        this.setState({ word: res.data });
        this.setUnfinishedWord();
      })
      .catch(err => {
        console.log(err);
      });
  }

  setUnfinishedWord() {
    let wordArray = [];
    for (let i = 0; i < this.state.word.length; i++) {
      if (this.state.word.word[i] === " ") {
        wordArray.push(" ");
      } else if (
        !this.state.alphabet.includes(this.state.word.word[i].toLowerCase())
      ) {
        wordArray.push(this.state.word.word[i]);
      } else {
        wordArray.push("-");
      }
    }
    this.setState({ unfinishedWord: wordArray });
  }

  getAllWords() {
    axios
      .get("/api/word")
      .then(res => {
        this.setState({ wordArray: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div
          className="jumbotron"
          style={{ textAlign: "center", margin: "auto" }}
        >
          <div className="row" style={{ paddingTop: "2em" }}>
            <div className="col-sm-4" id="unfinishedWord">
              {this.state.unfinishedWord
                ? this.state.unfinishedWord.join("")
                : "Please Wait a Fuckin Second"}
            </div>
            <div className="col-md-4"></div>
            <div className="col-sm-4">
              <button
                className="btn btn-danger"
                onClick={() => this.alertUser()}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
