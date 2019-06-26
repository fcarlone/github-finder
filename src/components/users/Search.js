import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  // Initialize GithubContext
  const githubContext = useContext(GithubContext);
  // Initialize AlertContext
  const alertContext = useContext(AlertContext);

  // Define the state
  const [text, setText] = useState("");

  const onSubmitForm = event => {
    event.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please enter a username", "light");
    } else {
      // Part of the githubContext
      githubContext.searchUsers(text);
      setText("");
    }
  };

  const onChange = event => setText(event.target.value);

  return (
    <div>
      <form onSubmit={onSubmitForm} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
