/* eslint-disable no-unused-expressions */
import React from "react";
import UserItem from "./UserItem";

class Users extends React.Component {
  state = {
    users: [
      {
        login: "fcarlone",
        id: 1,
        avatar_url: "https://avatars3.githubusercontent.com/u/16404148?v=4",
        html_url: "https://github.com/fcarlone"
      },
      {
        login: "fcarlone",
        id: 2,
        avatar_url: "https://avatars3.githubusercontent.com/u/16404148?v=4",
        html_url: "https://github.com/fcarlone"
      },
      {
        login: "fcarlone",
        id: 3,
        avatar_url: "https://avatars3.githubusercontent.com/u/16404148?v=4",
        html_url: "https://github.com/fcarlone"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
