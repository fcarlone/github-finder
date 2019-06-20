import React from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import "./App.css";

class App extends React.Component {
  // Store user to state
  state = {
    users: [],
    loading: false
  };

  // Request to the GitHub API

  // componentDidMount() {
  // axios.get("https://api.github.com/users").then(response => {
  //   console.log(response.data);
  // });

  // Using Async/Await
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);

    this.setState({
      users: res.data,
      loading: false
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
