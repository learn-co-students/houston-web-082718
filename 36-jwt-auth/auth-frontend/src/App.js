import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    token: null
  };

  componentDidMount() {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: "Michael Cheng the second",
        password: "dolphins"
      })
    })
      .then(response => response.json())
      .then(response => {
        localStorage.setItem("app-token", response.token);
        localStorage.getItem("app-token");
        this.setState({ token: response.token });
      });

    setTimeout(() => {
      fetch(`http://localhost:3001/users/1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.state.token}`
        },
        body: JSON.stringify({
          username: "Michael Cheng the third",
          password: "dolphins"
        })
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
