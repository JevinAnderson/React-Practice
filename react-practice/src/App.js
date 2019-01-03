import React, { Children, cloneElement, Component, createContext } from 'react';
import './App.css';
import Switch from './Switch';

const ToggleContext = React.createContext();

class Toggle extends Component {
  static On = ({ children }) => (
    <ToggleContext.Consumer>
      {({ on }) => (on ? children : null)}
    </ToggleContext.Consumer>
  );
  static Off = ({ children }) => (
    <ToggleContext.Consumer>
      {({ on }) => (on ? null : children)}
    </ToggleContext.Consumer>
  );
  static Button = () => (
    <ToggleContext.Consumer>
      {({ toggle, ...rest }) => <Switch onClick={toggle} {...rest} />}
    </ToggleContext.Consumer>
  );

  state = { on: false };

  toggle = event => {
    if (event) {
      event.preventDefault();
    }

    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };

  render = () => (
    <ToggleContext.Provider value={{ on: this.state.on, toggle: this.toggle }}>
      {this.props.children}
    </ToggleContext.Provider>
  );
}

function Usage({ onToggle = (...args) => console.log('onToggle', ...args) }) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The Button is on</Toggle.On>
      <Toggle.Off>The Button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
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
