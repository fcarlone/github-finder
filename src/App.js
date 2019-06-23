import React from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  // Store user to state
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // Request to the GitHub API

  // componentDidMount() {
  // axios.get("https://api.github.com/users").then(response => {
  //   console.log(response.data);
  // });

  // Using Async/Await
  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }

  // Search GitHub Users
  searchUsersApp = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log("search axios get request", res.data);
    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  // Clear users from state
  clearUsersApp = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type
      }
    });

    setTimeout(() => {
      this.setState({
        alert: null
      });
    }, 4000);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsersApp}
            clearUsers={this.clearUsersApp}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
