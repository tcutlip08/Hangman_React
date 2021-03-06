import React, { Component } from "react";
import KeyboardedInput from "react-touch-screen-keyboard";
import "react-touch-screen-keyboard/lib/Keyboard.css";

class KeyBoard extends Component {
  render() {
    const CustomMapping = [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", "@"],
      ["z", "x", "c", "v", "b", "n", "m", ".com"]
    ];
    return (
      <KeyboardedInput
        enabled
        type={this.props.type}
        value={this.props.value}
        name={this.props.name}
        defaultKeyboard={CustomMapping}
        onClick={() => {
          this.myInput.focus();
        }}
      />
    );
  }
}

export default KeyBoard;
