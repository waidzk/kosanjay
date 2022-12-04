import React, { Component } from "react";

import InputNumber from "elements/Form/InputNumber";

export default class Example extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <InputNumber 
          max={30}
          suffix=" month"
          isSuffixPlural
          onChange={this.handleChange}
          name="value"
          value={this.state.value}
        />
      </div>
    );
  }
}
