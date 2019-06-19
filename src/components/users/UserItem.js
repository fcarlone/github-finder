/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

class UserItem extends React.Component {
  render() {
    // Destructure State
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar image"
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
