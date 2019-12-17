import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Styling/Game.css";
import axios from "axios";

class Game extends Component {
  state = { wordArray: [], word: {}, unfinishedWord: [] };
  componentDidMount() {
    this.getRandomWord();
  }

  componentDidUpdate() {
    console.log(this.state.unfinishedWord);
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
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < this.state.word.length; i++) {
      // Push Spaces
      if (this.state.word.word[i] === " ") {
        wordArray.push(" ");
      }
      // Push Special Characters
      else if (!alphabet.includes(this.state.word.word[i].toLowerCase())) {
        wordArray.push(this.state.word.word[i]);
      }
      // Push Underscore for each letter
      else {
        wordArray.push("_");
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
        ></div>

        <div className="row" style={{ paddingTop: "2em" }}>
          <div className="col-sm-5"></div>
          <div className="col-md-2"></div>
          <div className="col-sm-5"></div>
        </div>
      </div>
    );
  }
}

export default Game;
