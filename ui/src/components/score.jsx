import React from "react";

const Score = ({ user }) => {
  return (
    <div>
      <span class="badge">{user.firstName + " " + user.lastName}</span>
    </div>
  );
};

export default Score;
