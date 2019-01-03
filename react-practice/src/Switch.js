import React, { Component } from "react";

import "./Switch.css";

export class Switch extends Component {
  render = () => (
    <label className="switch" onClick={this.props.onClick}>
      <input type="checkbox" checked={this.props.on} onChange={this.props.onClick} />
      <span className="slider round" />
    </label>
  );
}

export default Switch;
