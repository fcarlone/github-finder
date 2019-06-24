import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";

const Repos = ({ repos }) => {
  // Destructure props

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Last Five Repositories </h2>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
