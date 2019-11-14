import React from "react";

const Score = ({ user }) => {
  return (
    <div>
      <span>{user.firstName + " " + user.lastName}</span>
    </div>
  );
};

export default Score;
