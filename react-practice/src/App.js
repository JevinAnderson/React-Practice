import React, { Children, cloneElement, Component } from 'react';
import './App.css';
import Switch from './Switch';

class Toggle extends Component {
  static On = ({ on, children }) => (on ? children : null);
  static Off = ({ on, children }) => (on ? null : children);
  static Button = ({ toggle, ...rest }) => (
    <Switch onClick={toggle} {...rest} />
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

  render = () =>
    Children.map(this.props.children, childElement =>
      cloneElement(childElement, {
        on: this.state.on,
        toggle: this.toggle
      })
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
