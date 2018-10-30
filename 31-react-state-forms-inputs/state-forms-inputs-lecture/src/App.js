import React, { Component } from "react";
import "./App.css";

import CandyList from "./components/CandyList";

const candies = [
  {
    name: "Peppermint",
    taste: "pepperminty",
    pepperminty: true
  },
  {
    name: "Basil",
    taste: "basily",
    pepperminty: false
  },
  {
    name: "Candy cane",
    taste: "pepperminty",
    pepperminty: true
  }
];

class App extends Component {
  state = {
    candyList: candies,
    name: "",
    taste: "",
    pepperminty: ""
  };

  onChange = event => {
    const key = event.target.name;

    this.setState({
      [key]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const newCandyList = [
      ...this.state.candyList,
      {
        name: this.state.name,
        taste: this.state.taste,
        pepperminty: this.state.pepperminty === "true"
      }
    ];

    this.setState(
      {
        candyList: newCandyList,
        name: "",
        taste: "",
        pepperminty: ""
      },
      function() {
        // Do something after setState finishes
      }
    );

    this.nameInput.focus();
  };

  render() {
    return (
      <div className="App">
        <h2>React - State, Forms, Events, and Controlled Inputs oh my</h2>
        <CandyList candyList={this.state.candyList} />

        <form onSubmit={this.onSubmit}>
          <input
            name="name"
            onChange={this.onChange}
            placeholder="name"
            value={this.state.name}
            ref={nameInput => (this.nameInput = nameInput)}
          />
          <input
            name="taste"
            onChange={this.onChange}
            placeholder="taste"
            value={this.state.taste}
          />
          <input
            name="pepperminty"
            onChange={this.onChange}
            placeholder="pepperminty"
            value={this.state.pepperminty}
          />
          <button>Create candy</button>
        </form>
      </div>
    );
  }
}

export default App;
