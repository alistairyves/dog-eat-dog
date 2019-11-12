import React, { Component } from "react";

import Score from "./score";

class ScoreList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  //   state = {
  //     scores: ["Hello", "Goodbye", "see You later"]
  //   };
  componentDidMount() {
    //todo get this part figured out
    fetch("http://localhost:4000/users")
      .then(results => {
        return results.json;
      })
      .then(data => {
        let users = data.results.map(user => {
          return user;
        });
        this.setState({ users: users });
      });
  }
  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <Score value={user.value} />
        ))}
      </div>
    );
  }
}

export default ScoreList;
