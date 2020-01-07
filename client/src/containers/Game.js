import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Styling/Game.css";
import KeyBoard from "../components/KeyBoard/KeyBoard";
import axios from "axios";

class Game extends Component {
  state = {
    wordArray: [],
    word: {},
    unfinishedWord: [],
    alphabet: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    lastSuccessfulGuessed: {},
    alreadyGuessed: [],
    wrongGuess: 0
  };

  componentDidMount() {
    this.resetGame();
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("click", this.onClick);
  }

  componentDidUpdate() {
    // console.log(this.state.wrongGuess);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
    document.removeEventListener("click", this.onClick);
  }

  onClick = event => {
    // console.log(event.path);
  };

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

  testKeyPressed(key) {
    let array = this.state.alreadyGuessed;
    if (this.state.alreadyGuessed.includes(key)) {
      console.log("Dupp Guess");
    } else if (this.state.word.word.toLowerCase().includes(key)) {
      this.updateUnfinishedWord(key);
      array.push(key);
      this.setState({ alreadyGuessed: array });
      console.log("Correct Guess");
    } else {
      array.push(key);
      this.setState({ wrongGuess: this.state.wrongGuess + 1 });
      // console.log(this.state.wrongGuess);
    }
    this.checkWinOrLose();
  }

  checkWinOrLose() {
    if (!this.state.unfinishedWord.includes("-")) {
      console.log("You Win!!");
      this.playVideo();
      setTimeout(() => {
        this.resetGame();
      }, 3000);
    } else if (this.state.wrongGuess >= 10) {
      console.log("You Lose :(");
      setTimeout(() => {
        this.resetGame();
      }, 3000);
    }
  }

  playVideo() {
    this.setState({ lastSuccessfulGuessed: this.state.word });
  }

  updateUnfinishedWord(key) {
    const word = this.state.word.word.toLowerCase();
    let unfWord = this.state.unfinishedWord;
    for (let i = 0; i < word.length; i++) {
      if (key === word[i]) {
        unfWord[i] = this.state.word.word[i];
        this.setState({ unfinishedWord: unfWord });
      }
    }
  }

  alertUser() {
    console.log("Alertttt!!!");
    this.resetGame();
  }

  resetGame() {
    this.getRandomWord();
    this.setState({ alreadyGuessed: [], wrongGuess: 0 });
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
        !this.state.alphabet.includes(this.state.word.word[i].toLowerCase()) &&
        !this.state.numbers.includes(this.state.word.word[i])
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
            <div className="col-sm-4">
              <div id="unfinishedWord">
                {this.state.unfinishedWord
                  ? this.state.unfinishedWord.join("")
                  : "Please Wait a Fuckin Second"}
              </div>
              <div id="alreadyGuessed">
                <strong>Guessed:</strong>&nbsp;
                {this.state.alreadyGuessed[0]
                  ? this.state.alreadyGuessed.join(", ")
                  : "Press a button. I dare ya"}
              </div>
            </div>
            <div className="col-md-4">
              {this.state.lastSuccessfulGuessed ? (
                <iframe
                  id={this.state.lastSuccessfulGuessed.name}
                  src={this.state.lastSuccessfulGuessed.video}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
              ) : (
                ""
              )}
            </div>
            <div className="col-sm-4">
              <button
                className="btn btn-danger"
                onClick={() => this.alertUser()}
              >
                Reset (Esc)
              </button>
              <div className="guessedLeft">
                Guesses Left:&nbsp;
                {this.state.word.word ? 10 - this.state.wrongGuess : "0"}
              </div>
            </div>
          </div>
        </div>
        <KeyBoard
          ref={ref => {
            this.myInput = ref;
          }}
        />
      </div>
    );
  }
}

export default Game;
