import React from "react";
import PropTypes from "prop-types";

export class Search extends React.Component {
  state = {
    text: ""
  };

  onSubmitForm = event => {
    event.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter username", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = event => this.setState({ text: event.target.value });

  render() {
    // Destructure props
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmitForm} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
}

export default Search;
