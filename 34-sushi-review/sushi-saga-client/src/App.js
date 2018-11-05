import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushiList: [],
    startIndex: 0,
    eatenSushies: [],
    money: 75
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(response => {
        this.setState({ sushiList: response });
      });
  }

  onMoreButtonClick = () => {
    this.setState({ startIndex: this.state.startIndex + 4 });
  };

  onSushiClick = (id, price) => {
    const newMoney = this.state.money - price;

    if (newMoney >= 0) {
      this.setState({
        eatenSushies: [...this.state.eatenSushies, id],
        money: newMoney
      });
    }

    // this.state.eatenSushies.push(id);

    // this.setState({ eatenSushies: this.state.eatenSushies.push(id) });

    // How to remove something from an array
  };

  onFormSubmit = () => {
    this.state.addedMoney; // "8"

    this.setState({
      money: this.state.money + parseInt(this.state.addedMoney, 10) // Number(this.state.addedMoney)
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushies={this.state.sushiList}
          startIndex={this.state.startIndex}
          onMoreButtonClick={this.onMoreButtonClick}
          onSushiClick={this.onSushiClick}
          eatenSushies={this.state.eatenSushies}
        />
        <Table
          eatenSushies={this.state.eatenSushies}
          money={this.state.money}
        />
      </div>
    );
  }
}

export default App;
