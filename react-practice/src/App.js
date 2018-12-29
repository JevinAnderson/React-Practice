import React, { Component } from "react";
import "./App.css";
import Switch from "./Switch";

class Toggle extends Component {
  state = { on: false };
  toggle = () => {
    this.setState(({on }) => ({on: !on}), () => {
      this.props.onToggle(this.state.on)
    })
  }
  render = () => <Switch on={this.state.on} onClick={this.toggle}/>;
}

function Usage({ onToggle = (...args) => console.log("onToggle", ...args) }) {
  return <Toggle onToggle={onToggle} />;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Usage />
      </div>
    );
  }
}

export default App;
