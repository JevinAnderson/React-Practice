import React, { Component } from "react";

import "./Switch.css";

export class Switch extends Component {
  render = () => (
    <label className="switch" onClick={this.props.onClick}>
      <input type="checkbox" value={this.props.on} />
      <span className="slider round" />
    </label>
  );
}

export default Switch;
