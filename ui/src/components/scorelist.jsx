import React, { Component } from "react";

import Score from "./score";

class ScoreList extends Component {
  state = {
    scores: ["Hello", "Goodbye", "see You later"]
  };
  render() {
    return (
      <div>
        {this.state.scores.map(score => (
          <Score value={score} />
        ))}
      </div>
    );
  }
}

export default ScoreList;
