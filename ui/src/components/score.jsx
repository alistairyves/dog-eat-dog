import React, { Component } from "react";

class Score extends Component {
  state = {};
  render() {
    return (
      <div>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Score;
