import React, { Component } from "react";

import Score from "./score";

class ScoreList extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  fetchUsers() {}
  componentDidMount() {
    //todo get this part figured out
    fetch("http://localhost:4000/users")
      .then(results => results.json())
      .then(data => {
        console.log(data);
        let users = data.map(user => {
          return user;
        });
        this.setState({ users: users });
      });
  }
  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <Score value={user.firstName + " " + user.lastName} key={user.id} />
        ))}
      </div>
    );
  }
}

export default ScoreList;
